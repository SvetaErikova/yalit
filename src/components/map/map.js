const map_contacts = document.getElementById("map");

if (map_contacts) {
  const HOTEL_POINTS = (typeof HOTEL_MAP_ARRAY === "undefined" || HOTEL_MAP_ARRAY === null)
    ? [
      {
        coords: [55.761239, 49.261562],
        title: "Ногай",
      },
      {
        coords: [54.982239, 49.022628],
        title: "Кол Гали",
      },
      {
        coords: [55.810117, 48.857670],
        title: "Ак Барс Гольф Резорт",
      },
      {
        coords: [55.815246, 49.131603],
        title: "Миллениум Панорама",
      },
    ]
    : [...HOTEL_MAP_ARRAY];

  document.addEventListener("DOMContentLoaded", () => {
    initMap();
  });

  function initMap() {
    ymaps.ready(() => {
      const map = new ymaps.Map("map", {
        center: HOTEL_POINTS[0].coords,
        zoom: 16,
        controls: [],
      });

      map.behaviors.disable(["drag", "scrollZoom", "dblClickZoom"]);

      HOTEL_POINTS.forEach((point) => {
        const placemark = new ymaps.Placemark(point.coords, {
          hintContent: point.title,
          balloonContent: point.title,
        });

        map.geoObjects.add(placemark);
      });

      if (HOTEL_POINTS.length > 1) {
        map.setBounds(map.geoObjects.getBounds(), {
          checkZoomRange: true,
          zoomMargin: 24,
        });
      }
    });
  }
}
