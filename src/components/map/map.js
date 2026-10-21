const map_contacts = document.getElementById("map");
if (map_contacts) {
  document.addEventListener("DOMContentLoaded", () => {
    initMap();
  });

  function initMap() {
    ymaps.ready(() => {
      const coords = JSON.parse(map_contacts.dataset.coords);

      const map = new ymaps.Map("map", {
        center: coords,
        zoom: 16,
        controls: [],
      });

      map.behaviors.disable(['drag', 'scrollZoom', 'dblClickZoom',]);

      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: coords
        },
        // Добавляем свойства для тултипа
        // properties: {
        //   hintContent: 'Центральный офис',
        //   balloonContent: 'Центральный офис'
        // }
      }, {
        iconLayout: 'default#image',
        // iconImageHref: '/assets/img/favicon.svg',
        // iconImageSize: [60, 60],
        // iconImageOffset: [-30, -30]
      });

      map.geoObjects.add(myGeoObject);
    });
  }
}
