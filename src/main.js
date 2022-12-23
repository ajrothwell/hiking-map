// this is the base-config for resource-finder
// the point of this file is that it will move outside the project
// (so that settings we put in it can be used by other projects)
// and be pulled in with an axios call or something
// (we might not need to use axios with new vue async tools)
// if that is not needed, we can move this info to main.js


// turn off console logging in production
if (process.env.NODE_ENV === 'production') {
  console.log = console.info = console.debug = console.error = function () {};
}
console.log('main.js process.env.NODE_ENV:', process.env.NODE_ENV, 'process.env.VUE_APP_PUBLICPATH:', process.env.VUE_APP_PUBLICPATH);

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons/faCalendarAlt';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { faUserMd } from '@fortawesome/free-solid-svg-icons/faUserMd';
import { faCircle } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faCar } from '@fortawesome/free-solid-svg-icons/faCar';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons/faCheckSquare';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
library.add(faExclamationTriangle, faCalendarAlt, faBuilding, faUserMd, faCircle, faCar, faCheckSquare, faSquare, faCheck);

// import pinboard
import pinboard from '@phila/pinboard/src/main.js';

// data-sources
import hikes from './data-sources/hikes';

import expandCollapseContent from './components/ExpandCollapseContent.vue';
// import customGreeting from './components/customGreeting.vue';
const customComps = {
  'expandCollapseContent': expandCollapseContent,
  // 'customGreeting': customGreeting,
};

import '@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css';

pinboard({
  alerts: {
    modal: {
      enabled: false,
      // header: 'Possible closures',
      // body: '<p>All City-run COVID-19 testing sites and health centers are open and on a normal schedule, though others may be closed. Please call ahead to ensure that the site you are going to is open.</p>',
      header: 'Before you go',
      body: '<p>Some test sites may be closed due to winter weather conditions.  Always call ahead before you go to a site.</p>',
    },
    // header: {
    //   type: 'alertBanner',
    //   // enabled: function(state) {
    //   //   return state.alertResponse === 'alertHours';
    //   // },
    //   // content: '<b>Until further notice:</b> Please call ahead or check hours of operation while business restrictions are still in effect.',
    // },
    alertChecks: [
      // {
      //   type: 'alertHours',
      //   condition: [
      //     {
      //       'day': 1,
      //       'startTime': '1:00',
      //       'endTime': '23:59',
      //     },
      //     {
      //       'day': 2,
      //       'startTime': '1:00',
      //       'endTime': '23:59',
      //     },
      //   ],
      // },
    ],
  },
  app: {
    title: 'Fun Hikes',
    logoAlt: 'logo',
    type: 'hikes',
    trustedSite: 'hidden',
    skipGreeting: true,
  },
  // resetDataOnGeocode: true,
  retractableRefine: false,
  dropdownRefine: false,
  searchBar: {
    placeholder: 'Search by address',
    searchTypes: [ 'address' ],
    labelText:  {
      address: 'Search by address',
    },
    placeholderText: {
      address: 'Search by address',
    },
  },
  locationInfo: {
    siteName: function(item) {
      return item.fields.Name;
    },
  },
  customComps,
  // baseConfig: BASE_CONFIG_URL,
  // holidays: {
  //   days: ['Monday'],
  // },
  // hiddenRefine: {
  //   City: function(item) {
  //     return item.attributes.City === 'Philadelphia';
  //   },
  //   Visibility: function(item) {
  //     return item.attributes.Visibility === 'pub' || item.attributes.Visibility === 'For Public View';
  //   },
  // },
  refine: {
    type: 'categoryField_array',
    columns: false,
    value: function(item) {
      return item.fields.State;
    },
  },
  markerType: 'circle-marker',
  circleMarkers:{
    color: '#FF0000',
    weight: 0,
    radius: 8,
    mobileRadius: 12,
    size: 10,
    mobileSize: 20,
  },
  cyclomedia: {
    enabled: false,
    measurementAllowed: false,
    popoutAble: true,
    recordingsUrl: 'https://atlas.cyclomedia.com/Recordings/wfs',
    username: process.env.VUE_APP_CYCLOMEDIA_USERNAME,
    password: process.env.VUE_APP_CYCLOMEDIA_PASSWORD,
    apiKey: process.env.VUE_APP_CYCLOMEDIA_API_KEY,
  },
  dataSources: {
    hikes,
  },
  router: {
    enabled: false,
  },
  // projection: '3857',
  geocoder: {
    url(input) {
      const inputEncoded = encodeURIComponent(input);
      return `//api.phila.gov/finder/v1/search/${inputEncoded}`;
    },
    params: {
      include_units: true,
    },
  },
  footer: [
    // {
    //   type: "native",
    //   href: "https://www.phila.gov/",
    //   attrs: {
    //     target: "_blank",
    //   },
    //   text: "cityOfPhiladelphia",
    // },
    // {
    //   type: "native",
    //   href: "#",
    //   text: "about",
    // },
    // {
    //   type: "native",
    //   href: "https://www.phila.gov/feedback/",
    //   attrs: {
    //     target: "_blank",
    //   },
    //   text: "feedback",
    // },
  ],
  map: {
    // type: 'leaflet',
    type: 'mapbox',
    tiles: 'hosted',
    containerClass: 'map-container',
    defaultBasemap: 'pwd',
    center: [ -75.163471, 39.953338 ],
    minZoom: 7,
    maxZoom: 25,
    shouldInitialize: true,
    zoom: 7,
    geocodeZoom: 15,
    imagery: {
      enabled: false,
    },
    basemaps: {
      pwd: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer',
        tiledLayers: [
          'cityBasemapLabels',
        ],
        type: 'featuremap',
        attribution: 'Parcels: Philadelphia Water',
      },
    },
    tiledLayers: {
      cityBasemapLabels: {
        url: 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer',
        zIndex: '3',
      },
    },
  },
  mbStyle: 'mapbox://styles/mapbox/satellite-streets-v12?access_token=pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA',
  // mbStyle: 'mapbox://styles/ajrothwell/ck6gz6rmk04681ir1fdmagq5h',
  // mbStyle: 'https://api.mapbox.com/v4/mapbox.satellite/1/0/0@2x.jpg90?access_token=pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA',
  // mbStyle: 'mapbox://styles/ajrothwell/ck6gz6rmk04681ir1fdmagq5h',
  // mbStyle: {
  //   version: 8,
  //   sources: {
  //     pwd: {
  //       tiles: [
  //         'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
  //       ],
  //       type: 'raster',
  //       tileSize: 256,
  //     },
  //   },
  //   layers: [
  //     {
  //       id: 'pwd',
  //       type: 'raster',
  //       source: 'pwd',
  //     },
  //   ],
  // },
  basemapSources: {
    pwd: {
      source: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'pwd',
        type: 'raster',
      },
    },
    imagery2019: {
      source: {
        tiles: [
          'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}',
          // '//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}'
        ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imagery2019',
        type: 'raster',
      },
    },
  },
  basemapLabelSources:{
    cityBasemapLabels: {
      source: {
        tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}' ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'cityBasemapLabels',
        type: 'raster',
      },
    },
    imageryBasemapLabels: {
      source: {
        tiles: [ 'https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}' ],
        type: 'raster',
        tileSize: 256,
      },
      layer: {
        id: 'imageryBasemapLabels',
        type: 'raster',
      },
    },
  },
});
