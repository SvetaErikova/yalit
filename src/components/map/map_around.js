/* Map Yandex Places */

let map_places = document.getElementById('map_places')

if ( map_places ) {


  ymaps.ready(init);

  function init() {

    let map_settings = {};
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const iconSize = isMobile ? 42 : 68;

    if (  typeof SITE_MAP_SETTINGS === 'undefined' || SITE_MAP_SETTINGS === null ){
      map_settings = {
        coords: [44.753368, 34.547746],
        title: "Заголовок",
        text: "Описание вашего теля",
        link: "/",
        image: "",
        mark: "",
      };

    } else {
      map_settings = {...SITE_MAP_SETTINGS}
    }

    let map_surroundings = new ymaps.Map("map_places", {
      center: map_settings.coords,
      zoom: 15,
      controls: ['routeButtonControl', 'zoomControl'],
    });

    map_surroundings.behaviors.disable('scrollZoom');

    const markerLayout = ymaps.templateLayoutFactory.createClass(
      `<div class="marker-image"><img src="/assets/img/pin.svg" style="width: ${iconSize}px; height: ${iconSize}px;"></div>`
    );

    let placemarkLayout = ymaps.templateLayoutFactory.createClass(
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="75" height="89" viewBox="0 0 133 162" fill="none">
        <g>
        <mask id="path-1-inside-1_3745_{{properties.custom_id}}" fill="white">
        <path d="M66.3633 8C96.3872 8.00019 120.727 32.3394 120.728 62.3633C120.728 85.4284 106.363 105.138 86.0918 113.035C78.2706 116.082 71.4859 122.327 70.4909 130.661L69.002 143.133C68.819 144.665 67.5195 145.818 65.9766 145.818C64.4338 145.818 63.1351 144.665 62.9521 143.133L61.4269 130.361C60.4431 122.124 53.7962 115.918 46.0987 112.824C26.1113 104.789 12 85.2244 12 62.3633C12.0003 32.3394 36.3394 8.00019 66.3633 8ZM112.727 62.3631C112.727 62.3635 112.727 62.3637 112.727 62.3634C112.727 62.3633 112.728 62.3632 112.728 62.3631C112.728 62.1635 112.726 61.9641 112.724 61.7651C112.724 61.7649 112.723 61.7646 112.723 61.7646C112.723 61.7646 112.723 61.7649 112.723 61.7651C112.725 61.964 112.727 62.1636 112.727 62.3631Z"/>
        </mask>
        <path d="M66.3633 8C96.3872 8.00019 120.727 32.3394 120.728 62.3633C120.728 85.4284 106.363 105.138 86.0918 113.035C78.2706 116.082 71.4859 122.327 70.4909 130.661L69.002 143.133C68.819 144.665 67.5195 145.818 65.9766 145.818C64.4338 145.818 63.1351 144.665 62.9521 143.133L61.4269 130.361C60.4431 122.124 53.7962 115.918 46.0987 112.824C26.1113 104.789 12 85.2244 12 62.3633C12.0003 32.3394 36.3394 8.00019 66.3633 8ZM112.727 62.3631C112.727 62.3635 112.727 62.3637 112.727 62.3634C112.727 62.3633 112.728 62.3632 112.728 62.3631C112.728 62.1635 112.726 61.9641 112.724 61.7651C112.724 61.7649 112.723 61.7646 112.723 61.7646C112.723 61.7646 112.723 61.7649 112.723 61.7651C112.725 61.964 112.727 62.1636 112.727 62.3631Z" fill="url(#pattern0_3745_{{properties.custom_id}})" shape-rendering="crispEdges"/>
        <path d="M66.3633 8L66.3633 0H66.3632L66.3633 8ZM120.728 62.3633H128.728V62.3632L120.728 62.3633ZM69.002 143.133L76.9455 144.081L76.9455 144.081L69.002 143.133ZM65.9766 145.818L65.9756 153.818H65.9766V145.818ZM62.9521 143.133L70.8957 142.184L70.8957 142.184L62.9521 143.133ZM12 62.3633L4 62.3632V62.3633H12ZM112.723 61.7651L120.722 61.6639L112.723 61.7651ZM112.724 61.7651L104.724 61.8664L112.724 61.7651ZM112.727 62.3634L107.071 56.7066L112.727 62.3634ZM112.728 62.3631L120.728 62.363L112.728 62.3631ZM112.727 62.3631L120.727 62.3629L112.727 62.3631ZM66.3633 8L66.3632 16C91.969 16.0002 112.727 36.7579 112.728 62.3634L120.728 62.3633L128.728 62.3632C128.727 27.921 100.805 0.000220299 66.3633 0L66.3633 8ZM120.728 62.3633H112.728C112.728 82.0212 100.489 98.8402 83.1876 105.581L86.0918 113.035L88.996 120.49C112.236 111.435 128.728 88.8355 128.728 62.3633H120.728ZM70.4909 130.661L62.5473 129.713L61.0584 142.184L69.002 143.133L76.9455 144.081L78.4344 131.61L70.4909 130.661ZM69.002 143.133L61.0584 142.184C61.3558 139.693 63.4684 137.818 65.9766 137.818V145.818V153.818C71.5705 153.818 76.2822 149.637 76.9455 144.081L69.002 143.133ZM65.9766 145.818L65.9775 137.818C68.4874 137.819 70.5985 139.695 70.8957 142.184L62.9521 143.133L55.0086 144.081C55.6716 149.634 60.3802 153.818 65.9756 153.818L65.9766 145.818ZM62.9521 143.133L70.8957 142.184L69.3705 129.413L61.4269 130.361L53.4833 131.31L55.0086 144.081L62.9521 143.133ZM46.0987 112.824L49.0824 105.401C32.0217 98.5429 20 81.8475 20 62.3633H12H4C4 88.6013 20.2009 111.036 43.1149 120.246L46.0987 112.824ZM12 62.3633L20 62.3634C20.0002 36.7577 40.7577 16.0002 66.3633 16L66.3633 8L66.3632 0C31.9211 0.000219822 4.00033 27.9212 4 62.3632L12 62.3633ZM112.728 62.3631L120.728 62.363C120.728 62.1267 120.726 61.8935 120.723 61.6639L112.724 61.7651L104.724 61.8664C104.726 62.0348 104.728 62.2003 104.728 62.3632L112.728 62.3631ZM112.723 61.7651L104.723 61.8664C104.725 62.0346 104.727 62.2004 104.727 62.3633L112.727 62.3631L120.727 62.3629C120.727 62.1268 120.725 61.8934 120.722 61.6639L112.723 61.7651ZM112.723 61.7646V53.7646C108.266 53.7646 104.667 57.4075 104.723 61.8664L112.723 61.7651L120.722 61.6639C120.778 66.1223 117.18 69.7646 112.723 69.7646V61.7646ZM112.724 61.7651L120.723 61.6639C120.668 57.2847 117.102 53.7646 112.723 53.7646V61.7646V69.7646C108.345 69.7646 104.78 66.2451 104.724 61.8664L112.724 61.7651ZM112.727 62.3634L118.384 68.0203C119.885 66.5198 120.728 64.4847 120.728 62.363L112.728 62.3631L104.728 62.3632C104.728 60.2417 105.57 58.2069 107.071 56.7066L112.727 62.3634ZM112.727 62.3634L107.071 56.7066C112.109 51.6682 120.726 55.2347 120.727 62.3629L112.727 62.3631L104.727 62.3633C104.727 69.4923 113.345 73.0592 118.384 68.0203L112.727 62.3634ZM61.4269 130.361L69.3705 129.413C67.9143 117.22 58.3394 109.122 49.0824 105.401L46.0987 112.824L43.1149 120.246C49.253 122.714 52.972 127.028 53.4833 131.31L61.4269 130.361ZM86.0918 113.035L83.1876 105.581C73.7911 109.242 64.0203 117.375 62.5473 129.713L70.4909 130.661L78.4344 131.61C78.9515 127.279 82.7501 122.923 88.996 120.49L86.0918 113.035Z" fill="white" mask="url(#path-1-inside-1_3745_{{properties.custom_id}})"/>
        </g>
        <defs>

        <pattern id="pattern0_3745_{{properties.custom_id}}" patternUnits="userSpaceOnUse" x="12" y="8" width="109" height="138">
        <use xlink:href="#image0_3745_{{properties.custom_id}}"/>
        </pattern>
        <image id="image0_3745_{{properties.custom_id}}" preserveAspectRatio="xMidYMid slice" x="12" y="8" width="109" height="138" xlink:href="{{properties.image}}"/>
        </defs>
        </svg>
`
    );
    map_surroundings.geoObjects.add(new ymaps.Placemark(map_settings.coords, {}, {
      iconLayout: markerLayout,
      iconOffset: [-iconSize / 2, -iconSize],
      hasBalloon: false,
    }));

    /* AROUND_MAP_ARRAY */
    let AROUND_MAP_ARRAY = [
      {
        coords: [45.080074, 33.965735],
        title: '',
        image: "/assets/img/event.jpg",

      }, {
        coords: [45.647015, 34.464368],
        title: '',
        image: "/assets/img/3.jpg",

      }, {
        coords: [45.228028, 37.649183],
        title: '',
        image: "/assets/img/2.jpg",

      },
    ]

    let places_on_map = new ymaps.GeoObjectCollection({}, {});


    for (let i = 0; i < AROUND_MAP_ARRAY.length; i++) {

      places_on_map.add(new ymaps.Placemark(AROUND_MAP_ARRAY[i].coords, {
          image: AROUND_MAP_ARRAY[i].image,
          custom_id: i,
        }, {
          iconLayout: "default#imageWithContent",
          iconImageHref: "",
          iconContentLayout: placemarkLayout,
          iconImageSize: [67, 81],
          iconOffset: [-33, -73],
          zIndex: 3,
          zIndexHover: 4,
          balloonShadow: false,
          balloonPanelMaxMapArea: 0,
          hasBalloon: false,
        }
      ))
    }

    map_surroundings.geoObjects.add(places_on_map)

    map_surroundings.geoObjects.events.add('click', function (e) {
      var object = e.get('target');

      PopupManager.open('popup_for_cascade', {placemark: object.properties._data})

      map_surroundings.panTo([object.geometry._coordinates])

    });

    map_surroundings.setBounds(map_surroundings.geoObjects.getBounds(), {
      checkZoomRange: true,
      zoomMargin: 24
    })

  }
}
