/* Map Yandex Contacts */
import mapMain from '../../assets/json/map-main.json';
import MapFest from '../../assets/json/map-fest.json';

const mapContacts = document.getElementById('map');

if (mapContacts) {
    initMap();
}
async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } = ymaps3;
  const iconSize = 54;
  const coordinates = [33.936221, 44.395664];

  const map = new YMap(mapContacts, {
    location: {
      center: coordinates,
      zoom: 16,
    },
    behaviors: ['drag', 'dblClick'],
  });
  if (!document.querySelector('.page-fest')){
    map.addChild(
      new YMapDefaultSchemeLayer({
        customization: mapMain,
      })
    );
  }
  else{
    map.addChild(
      new YMapDefaultSchemeLayer({
        customization: MapFest,
      })
    );
  }

  map.addChild(new YMapDefaultFeaturesLayer());

  const markerElement = document.createElement('div');
  markerElement.className = 'marker-image';
  markerElement.style.setProperty('--marker-size', `${iconSize}px`);

  const markerImg = document.createElement('img');
  markerImg.className = 'marker-image__icon';
  markerImg.src = '/assets/img/pin.svg';
  markerImg.alt = '';
  markerElement.appendChild(markerImg);

  map.addChild(
    new YMapMarker(
      {
        coordinates,
      },
      markerElement
    )
  );
}


