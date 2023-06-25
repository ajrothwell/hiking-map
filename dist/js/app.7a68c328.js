(function(e){
  function t(t){
    for(var r,s,n=t[0],p=t[1],c=t[2],l=0,d=[];l<n.length;l++) {
      s=n[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;
    }for(r in p) {
      Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);
    }u&&u(t);while(d.length) {
      d.shift()();
    }return o.push.apply(o,c||[]),i();
  }function i(){
    for(var e,t=0;t<o.length;t++){
      for(var i=o[t],r=!0,s=1;s<i.length;s++){
        var n=i[s];0!==a[n]&&(r=!1);
      }r&&(o.splice(t--,1),e=p(p.s=i[0]));
    }return e;
  }var r={},s={ app:0 },a={ app:0 },o=[];function n(e){
    return p.p+"js/"+({ mbmb_pvm_CyclomediaWidget:"mbmb_pvm_CyclomediaWidget",pvm_MglGeojsonLayer:"pvm_MglGeojsonLayer" }[e]||e)+"."+{ "chunk-5bfaf6a5":"d84e7faf","chunk-687595c6":"ed48223e","chunk-75828a61":"686bd7f1","chunk-2d22497b":"37eb8c99",mbmb_pvm_CyclomediaWidget:"e6d623de",pvm_MglGeojsonLayer:"5d63e419" }[e]+".js";
  }function p(t){
    if(r[t]) {
      return r[t].exports;
    }var i=r[t]={ i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,p),i.l=!0,i.exports;
  }p.e=function(e){
    var t=[],i={ "chunk-5bfaf6a5":1,"chunk-687595c6":1,"chunk-75828a61":1,mbmb_pvm_CyclomediaWidget:1 };s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=new Promise((function(t,i){
      for(var r="css/"+({ mbmb_pvm_CyclomediaWidget:"mbmb_pvm_CyclomediaWidget",pvm_MglGeojsonLayer:"pvm_MglGeojsonLayer" }[e]||e)+"."+{ "chunk-5bfaf6a5":"e8bb3914","chunk-687595c6":"e00ede83","chunk-75828a61":"9066303b","chunk-2d22497b":"31d6cfe0",mbmb_pvm_CyclomediaWidget:"4ad41854",pvm_MglGeojsonLayer:"31d6cfe0" }[e]+".css",a=p.p+r,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){
        var c=o[n],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a)) {
          return t();
        }
      }var d=document.getElementsByTagName("style");for(n=0;n<d.length;n++){
        c=d[n],l=c.getAttribute("data-href");if(l===r||l===a) {
          return t();
        }
      }var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){
        var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],u.parentNode.removeChild(u),i(o);
      },u.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(u);
    })).then((function(){
      s[e]=0;
    })));var r=a[e];if(0!==r) {
      if(r) {
        t.push(r[2]);
      }else{
        var o=new Promise((function(t,i){
          r=a[e]=[ t,i ];
        }));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,p.nc&&l.setAttribute("nonce",p.nc),l.src=n(e);var d=new Error;c=function(t){
          l.onerror=l.onload=null,clearTimeout(u);var i=a[e];if(0!==i){
            if(i){
              var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,i[1](d);
            }a[e]=void 0;
          }
        };var u=setTimeout((function(){
          c({ type:"timeout",target:l });
        }),12e4);l.onerror=l.onload=c,document.head.appendChild(l);
      }
    }return Promise.all(t);
  },p.m=e,p.c=r,p.d=function(e,t,i){
    p.o(e,t)||Object.defineProperty(e,t,{ enumerable:!0,get:i });
  },p.r=function(e){
    "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{ value:"Module" }),Object.defineProperty(e,"__esModule",{ value:!0 });
  },p.t=function(e,t){
    if(1&t&&(e=p(e)),8&t) {
      return e;
    }if(4&t&&"object"===typeof e&&e&&e.__esModule) {
      return e;
    }var i=Object.create(null);if(p.r(i),Object.defineProperty(i,"default",{ enumerable:!0,value:e }),2&t&&"string"!=typeof e) {
      for(var r in e) {
        p.d(i,r,function(t){
          return e[t];
        }.bind(null,r));
      }
    }return i;
  },p.n=function(e){
    var t=e&&e.__esModule?function(){
      return e["default"];
    }:function(){
      return e;
    };return p.d(t,"a",t),t;
  },p.o=function(e,t){
    return Object.prototype.hasOwnProperty.call(e,t);
  },p.p="/",p.oe=function(e){
    throw console.error(e),e;
  };var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++) {
    t(c[d]);
  }var u=l;o.push([ 0,"chunk-vendors" ]),i();
})({ 0:function(e,t,i){
  e.exports=i("56d7");
},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,i){
  "use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("ecee"),s=i("8560"),a=i("bb05"),o=i("2227"),n=i("8aeb"),p=i("4c54"),c=i("f15f"),l=i("4c88"),d=i("f01e"),u=i("e9dd"),m=i("e20b"),h=i("01e5"),b=i("6530"),y={ legend:{ options:{ showWithBaseMapOnly:!0,shape:"circle" },data:{ "Jennie and David":{ "border-color":"black","border-style":"solid","border-weight":"0px",width:"15px",height:"15px","font-size":"10px","background-color":"#ff5512" },Jessie:{ "border-color":"black","border-style":"solid","border-weight":"0px",width:"15px",height:"15px","font-size":"10px","background-color":"#32a6a8" },Andy:{ "border-color":"black","border-style":"solid","border-weight":"0px",width:"15px",height:"15px","font-size":"10px","background-color":"#ffa812" },Lizzie:{ "border-color":"black","border-style":"solid","border-weight":"0px",width:"15px",height:"15px","font-size":"10px","background-color":"#f7f42d" },Teresa:{ "border-color":"black","border-style":"solid","border-weight":"0px",width:"15px",height:"15px","font-size":"10px","background-color":"#d834eb" },Kiyo:{ "border-color":"black","border-style":"solid","border-weight":"0px",width:"15px",height:"15px","font-size":"10px","background-color":"#f5abe1" }}}},f={ id:"compiled",resettable:!1 },_={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!0,url:"https://api.airtable.com/v0/app3baMd88ZTNQrTy/jennie?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},g={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!1,url:"https://api.airtable.com/v0/app3baMd88ZTNQrTy/jennie_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},v={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!0,url:"https://api.airtable.com/v0/appUQBJX2udkVPwp6/jessie?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},k={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!1,url:"https://api.airtable.com/v0/appUQBJX2udkVPwp6/jessie_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},w={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!0,url:"https://api.airtable.com/v0/appqasIqir5SS0S9s/andy?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},C={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!1,url:"https://api.airtable.com/v0/appqasIqir5SS0S9s/andy_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},P={ id:"hikes",type:"http-get",dependent:"none",deps:[ "sources.andy_pictures_01" ],resettable:!1,compile:!1,url:"https://api.airtable.com/v0/appqasIqir5SS0S9s/andy_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{ offset:function(e,t){
      return t.sources.andy_pictures_01.data.offset;
    } }}},N={ id:"hikes",type:"http-get",dependent:"none",deps:[ "sources.andy_pictures_02" ],resettable:!1,compile:!1,url:"https://api.airtable.com/v0/appqasIqir5SS0S9s/andy_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{ offset:function(e,t){
      return t.sources.andy_pictures_02.data.offset;
    } }}},S={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!0,url:"https://api.airtable.com/v0/appPYaWT0FgYanUre/lizzie?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},A={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!1,url:"https://api.airtable.com/v0/appPYaWT0FgYanUre/lizzie_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},E={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!0,url:"https://api.airtable.com/v0/appkJBVxansuDDzpu/teresa?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},x={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!1,url:"https://api.airtable.com/v0/appkJBVxansuDDzpu/teresa_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},L={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!0,url:"https://api.airtable.com/v0/appbCVeG4giyrtYDB/kiyo?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},B={ id:"hikes",type:"http-get",dependent:"none",resettable:!1,compile:!1,url:"https://api.airtable.com/v0/appbCVeG4giyrtYDB/kiyo_pictures?api_key=keyBHGwF2m5iiTYzN",options:{ params:{}}},T=function(){
      var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[ i("div",[ e._v(" Town/City: "+e._s(e.item.fields.Town)),i("br"),e._v(" State: "+e._s(e.item.fields.State)+" ") ]),e.picsLength?i("div",{ staticClass:"has-text-centered" },[ i("div",{ staticClass:"image-div" },[ i("img",{ attrs:{ src:e.imgsrc }}) ]) ]):e._e(),e.picsLength?e._e():i("div",{ staticClass:"has-text-centered" },[ e._v(" No photos ") ]),i("div",{ staticClass:"columns is-vcentered is-mobile" },[ i("div",{ staticClass:"column is-2 is-offset-3 has-text-centered" },[ i("button",{ directives:[{ name:"show",rawName:"v-show",value:e.photoNumber+1>1,expression:"photoNumber+1>1" }],staticClass:"button square-button",on:{ click:function(t){
        return e.changePhotoNumber("down");
      } }},[ i("font-awesome-icon",{ attrs:{ icon:"arrow-left" }}) ],1) ]),i("div",{ staticClass:"column is-2 is-offset-2 has-text-centered" },[ i("button",{ directives:[{ name:"show",rawName:"v-show",value:e.picsLength&&e.photoNumber+1<e.picsLength,expression:"picsLength && photoNumber+1<picsLength" }],staticClass:"button square-button",on:{ click:function(t){
        return e.changePhotoNumber("up");
      } }},[ i("font-awesome-icon",{ attrs:{ icon:"arrow-right" }}) ],1) ]) ]),i("div",{ staticClass:"has-text-centered" },[ e._v(" Date: "+e._s(e.photoDate)+" ") ]),i("div",{ staticClass:"has-text-centered" },[ e._v(" "+e._s(e.photoCaption)+" ") ]) ]);
    },z=[],I=(i("ac1f"),i("1276"),i("99af"),i("4de4"),i("d3b7"),i("caad"),i("2532"),{ name:"ExpandCollapseContent",components:{},props:{ item:{ type:Object,default:function(){
      return{};
    } }},data:function(){
      return{ photoNumber:0,photoDate:null,photoCaption:null,imgsrc:null };
    },computed:{ person:function(){
      var e=this.item._featureId.split("-")[1];return e;
    },allPics:function(){
      var e;if(this.$store.state.sources[this.person+"_pictures_01"]&&(e=this.$store.state.sources[this.person+"_pictures_01"].data.records),this.$store.state.sources[this.person+"_pictures_02"]){
        var t=this.$store.state.sources[this.person+"_pictures_02"].data.records;e=e.concat(t);
      }if(this.$store.state.sources[this.person+"_pictures_03"]){
        var i=this.$store.state.sources[this.person+"_pictures_03"].data.records;e=e.concat(i);
      }return e;
    },itemPictures:function(){
      return this.item.fields.pictures;
    },pictures:function(){
      var e=this,t=this.allPics.filter((function(t){
        return e.itemPictures.includes(t.id);
      }));return t;
    },picsLength:function(){
      return this.pictures.length;
    } },watch:{ photoNumber:function(e){
      var t=this;console.log("watch photoNumber, nextPhotoNumber:",e),this.photoDate=this.pictures[e].fields.date,this.photoCaption=this.pictures[this.photoNumber].fields.caption,this.imgsrc="./images/spinner3.png";var i=new Image;i.src=this.pictures[e].fields.picture[0].url,i.onload=function(){
        t.imgsrc=i.src;
      };
    } },mounted:function(){
      var e=this;this.photoDate=this.pictures[this.photoNumber].fields.date,this.photoCaption=this.pictures[this.photoNumber].fields.caption,this.imgsrc="./images/spinner3.png";var t=new Image;t.src=this.pictures[this.photoNumber].fields.picture[0].url,t.onload=function(){
        e.imgsrc=t.src;
      };
    },methods:{ changePhotoNumber:function(e){
      var t;console.log("changePhotoNumber, direction:",e),"up"==e?t=this.photoNumber+1:"down"==e&&(t=this.photoNumber-1),this.photoNumber=t;
    } }}),j=I,Y=(i("b633"),i("2877")),O=Object(Y["a"])(j,T,z,!1,null,null,null),U=O.exports;i("b530");console.log=console.info=console.debug=console.error=function(){},console.log("main.js process.env.NODE_ENV:","production","process.env.VUE_APP_PUBLICPATH:","/"),r["e"].add(s["faExclamationTriangle"],a["faCalendarAlt"],o["faBuilding"],n["faUserMd"],p["faCircle"],c["faCar"],l["faCheckSquare"],u["faSquare"],d["faCheck"],m["faArrowRight"],h["faArrowLeft"]);var F={ expandCollapseContent:U };Object(b["a"])({ app:{ title:"Rothwell Family Pin Map",logoAlt:"logo",type:"compiled",categorizeCompiled:!0,trustedSite:"hidden",skipGreeting:!0 },anySearch:!1,allowZipcodeSearch:!1,allowPrint:!0,showBuffers:!1,resetDataOnGeocode:!0,retractableRefine:!0,dropdownRefine:!1,searchBar:{ hide:!0,placeholder:"Search by address",searchTypes:[ "address" ],labelText:{ address:"Search by address" },placeholderText:{ address:"Search by address" }},locationInfo:{ siteName:function(e){
    return e.fields.Name;
  } },customComps:F,refine:{ type:"categoryField_array",columns:!1,value:function(e){
    return e.fields.State;
  } },markerType:"circle-marker",circleMarkers:{ circleColors:{ jennie:"#ff5512",jessie:"#32a6a8",andy:"#ffa812",lizzie:"#f7f42d",teresa:"#d834eb",kiyo:"#f5abe1" },selectedColor:"#FF0000",weight:0,radius:8,mobileRadius:12,size:10,mobileSize:20 },legendControls:y,cyclomedia:{ enabled:!1,measurementAllowed:!1,popoutAble:!0,recordingsUrl:"https://atlas.cyclomedia.com/Recordings/wfs",username:Object({ NODE_ENV:"production",VUE_APP_AIRTABLE_API_KEY:"keyBHGwF2m5iiTYzN",VUE_APP_CLI_UI_URL:"",VUE_APP_MAPBOX_ACCESSTOKEN:"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA",VUE_APP_PUBLICPATH:"/",BASE_URL:"/" }).VUE_APP_CYCLOMEDIA_USERNAME,password:Object({ NODE_ENV:"production",VUE_APP_AIRTABLE_API_KEY:"keyBHGwF2m5iiTYzN",VUE_APP_CLI_UI_URL:"",VUE_APP_MAPBOX_ACCESSTOKEN:"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA",VUE_APP_PUBLICPATH:"/",BASE_URL:"/" }).VUE_APP_CYCLOMEDIA_PASSWORD,apiKey:Object({ NODE_ENV:"production",VUE_APP_AIRTABLE_API_KEY:"keyBHGwF2m5iiTYzN",VUE_APP_CLI_UI_URL:"",VUE_APP_MAPBOX_ACCESSTOKEN:"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA",VUE_APP_PUBLICPATH:"/",BASE_URL:"/" }).VUE_APP_CYCLOMEDIA_API_KEY },dataSources:{ compiled:f,jennie:_,jennie_pictures_01:g,jessie:v,jessie_pictures_01:k,andy:w,andy_pictures_01:C,andy_pictures_02:P,andy_pictures_03:N,lizzie:S,lizzie_pictures_01:A,teresa:E,teresa_pictures_01:x,kiyo:L,kiyo_pictures_01:B },router:{ enabled:!1 },geocoder:{ url:function(e){
    var t=encodeURIComponent(e);return"//api.phila.gov/finder/v1/search/".concat(t);
  },params:{ include_units:!0 }},footer:[],mapboxKey:"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA",map:{ type:"mapbox",tiles:"hosted",containerClass:"map-container",defaultBasemap:"pwd",center:[ -95.973245,38.954652 ],minZoom:2,maxZoom:25,shouldInitialize:!0,zoom:3,geocodeZoom:15,imagery:{ enabled:!1 },basemaps:{ pwd:{ url:"https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer",tiledLayers:[ "cityBasemapLabels" ],type:"featuremap",attribution:"Parcels: Philadelphia Water" }},tiledLayers:{ cityBasemapLabels:{ url:"https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer",zIndex:"3" }}},mbStyle:"mapbox://styles/mapbox/satellite-streets-v12",basemapSources:{ pwd:{ source:{ tiles:[ "https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap/MapServer/tile/{z}/{y}/{x}" ],type:"raster",tileSize:256 },layer:{ id:"pwd",type:"raster" }},imagery2019:{ source:{ tiles:[ "https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2019_3in/MapServer/tile/{z}/{y}/{x}" ],type:"raster",tileSize:256 },layer:{ id:"imagery2019",type:"raster" }}},basemapLabelSources:{ cityBasemapLabels:{ source:{ tiles:[ "https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityBasemap_Labels/MapServer/tile/{z}/{y}/{x}" ],type:"raster",tileSize:256 },layer:{ id:"cityBasemapLabels",type:"raster" }},imageryBasemapLabels:{ source:{ tiles:[ "https://tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer/tile/{z}/{y}/{x}" ],type:"raster",tileSize:256 },layer:{ id:"imageryBasemapLabels",type:"raster" }}}});
},"8be0":function(e,t,i){},b633:function(e,t,i){
  "use strict";i("8be0");
} });
//# sourceMappingURL=app.7a68c328.js.map