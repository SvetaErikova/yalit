
/* Map Yandex tour */
let map_tour = document.getElementById('map_tour')
let content_tour_map_block = document.querySelector('.content_tour_map')


if ( map_tour && content_tour_map_block) {
  ymaps.ready(init_tour_maps);

  const map_settings = (typeof SITE_MAP_SETTINGS === "undefined" || SITE_MAP_SETTINGS === null)
    ? { coords: [44.753368, 34.547746] }
    : { ...SITE_MAP_SETTINGS };

  const TOUR_POINTS = (typeof TOUR_MAP_ARRAY === "undefined" || TOUR_MAP_ARRAY === null)
    ? [
      {
        coords: [45.018493, 33.980237],
        title: "Аэропорт Симферополь",
        type: "airport",
      },
      {
        coords: [44.495379, 34.167231],
        title: "Автовокзал Ялта",
        type: "bus",
      },
      {
        coords: [45.036861, 35.385012],
        title: "ЖД вокзал Владиславовка",
        type: "railway",
      },
    ]
    : [...TOUR_MAP_ARRAY];


  function init_tour_maps() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const iconSize = isMobile ? 42 : 68;
    const defaultPinCoords = [44.755879, 34.556886];

    let tour_map = new ymaps.Map("map_tour", {
      center: map_settings.coords,
      zoom: 16,
      controls: [],
    },);

    tour_map.behaviors.disable('scrollZoom');

    const places_on_map = new ymaps.GeoObjectCollection({}, {});
    const markerByType = {
      airport: "/assets/img/stickers/airport.svg",
      bus: "/assets/img/stickers/bus.svg",
      railway: "/assets/img/stickers/railway.svg",
    };
    const selection = content_tour_map_block.querySelector(".block--selection");
    const selectionTabs = selection ? Array.from(selection.querySelectorAll("a")) : [];
    const allPlacemarkRefs = [];

    const markerLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="marker-image"><img src="/assets/img/pin.svg" style="width: ${iconSize}px; height: ${iconSize}px;"></div>`
    );

    const defaultPlacemark = new ymaps.Placemark(defaultPinCoords, {
      balloonHeader: map_settings.title || "Отель",
    }, {
      iconLayout: markerLayout,
      iconOffset: [-iconSize / 2, -iconSize],
      hasBalloon: false,
      zIndex: 5,
    });
    tour_map.geoObjects.add(defaultPlacemark);

    for (let i = 0; i < TOUR_POINTS.length; i++) {
      const point = TOUR_POINTS[i];
      const pointType = point.type || "airport";
      const placemark = new ymaps.Placemark(point.coords, {
        balloonHeader: point.title,
        image: point.image || markerByType[pointType] || markerByType.airport,
        type: pointType,
      }, {
        iconLayout: "default#image",
        iconImageHref: point.image || markerByType[pointType] || markerByType.airport,
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -80],
        zIndex: 3,
        zIndexHover: 4,
        balloonShadow: false,
        balloonPanelMaxMapArea: 0,
        hasBalloon: false,
      });

      placemark.events.add("click", function () {
        PopupManager.open("popup_for_cascade", { placemark: placemark.properties._data });
      });

      allPlacemarkRefs.push(placemark);
      places_on_map.add(placemark);
    }

    tour_map.geoObjects.add(places_on_map);
    tour_map.setBounds(tour_map.geoObjects.getBounds(), {
      checkZoomRange: true,
      zoomMargin: 24,
    });

    if (selectionTabs.length) {
      const filterByType = (type) => {
        places_on_map.removeAll();

        allPlacemarkRefs.forEach((placemark) => {
          const placemarkType = placemark.properties.get("type");
          if (type === "all" || placemarkType === type) {
            places_on_map.add(placemark);
          }
        });
      };

      selectionTabs.forEach((tab) => {
        tab.addEventListener("click", (event) => {
          event.preventDefault();
          const type = tab.dataset.filter || "all";

          selectionTabs.forEach((item) => {
            item.classList.toggle("is_active", item === tab);
          });

          filterByType(type);
        });
      });
    }
  }
}

