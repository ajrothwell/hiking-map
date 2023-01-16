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
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';


library.add(faExclamationTriangle, faCalendarAlt, faBuilding, faUserMd, faCircle, faCar, faCheckSquare, faSquare, faCheck, faArrowRight, faArrowLeft);

// import pinboard
import pinboard from '@phila/pinboard/src/main.js';

import legendControls from './general/legendControls';

// data-sources
import compiled from './data-sources/compiled';
import jennie from './data-sources/jennie';
import jessie from './data-sources/jessie';
import andy from './data-sources/andy';
import lizzie from './data-sources/lizzie';
import teresa from './data-sources/teresa';
import kiyo from './data-sources/kiyo';


import expandCollapseContent from './components/ExpandCollapseContent.vue';
// import customGreeting from './components/customGreeting.vue';
const customComps = {
  'expandCollapseContent': expandCollapseContent,
  // 'customGreeting': customGreeting,
};

import '@creativebulma/bulma-tooltip/dist/bulma-tooltip.min.css';

pinboard({
  app: {
    title: 'Rothwell Family Pin Map',
    logoAlt: 'logo',
    type: 'compiled',
    categorizeCompiled: true,
    trustedSite: 'hidden',
    skipGreeting: true,
  },
  retractableRefine: false,
  dropdownRefine: false,
  searchBar: {
    hide: true,
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
  // refine: {
  //   type: 'multipleFieldGroups',
  //   columns: true,
  //   multipleFieldGroups: {
  //     state: {
  //       checkbox: {
  //         value: function(item) {
  //           console.log('state checkbox, item:', item);
  //         }
  //       }
  //     }
  //   }
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
    circleColors: {
      'jennie': '#ff5512',
      'jessie': '#32a6a8',
      'andy': '#ffa812',
      'lizzie': '#f7f42d',
      'teresa': '#d834eb',
      'kiyo': '#f5abe1',
    },
    selectedColor: '#FF0000',
    weight: 0,
    radius: 8,
    mobileRadius: 12,
    size: 10,
    mobileSize: 20,
  },
  legendControls,
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
    compiled,
    jennie,
    jessie,
    andy,
    lizzie,
    teresa,
    kiyo,
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
    center: [ -95.973245, 38.954652 ],
    minZoom: 2,
    maxZoom: 25,
    shouldInitialize: true,
    zoom: 3,
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
