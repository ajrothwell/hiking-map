(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[ "mbmb_pvm_CyclomediaWidget" ],{ 4835:function(t,e,i){
  "use strict";i("bd73");
},"65c9":function(t,e,i){
  "use strict";i.r(e);var o=function(){
      var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ class:t.widgetClass,attrs:{ id:"cyclomedia-container" }},[ !1===t.isMobileOrTablet&&!0===t.popoutAble?i("div",{ style:{ right:t.popoutPosition },attrs:{ id:"inCycloDiv" },on:{ click:t.popoutClicked }},[ i("font-awesome-icon",{ staticClass:"popout-icon",attrs:{ icon:"external-link-alt" }}) ],1):t._e(),t._t("default"),i("div",{ ref:"cycloviewer",staticClass:"panoramaViewerWindow",attrs:{ id:"cycloviewer" }}) ],2);
    },a=[],n=i("b85c"),r=(i("d81d"),i("ac1f"),i("5319"),i("a79f")),c={ name:"CyclomediaWidget",props:[ "screenPercent","orientation" ],data:function(){
      return{ docWidth:0,divWidth:0,popoutPosition:0 };
    },computed:{ isMobileOrTablet:function(){
      return this.$store.state.isMobileOrTablet;
    },fullScreenMapEnabled:function(){
      return this.$store.state.fullScreenMapEnabled;
    },fullScreenTopicsEnabled:function(){
      return this.$store.state.fullScreenTopicsEnabled;
    },popoutAble:function(){
      var t;return t=!1!==this.$config.cyclomedia.popoutAble,t;
    },cyclomediaInitializationBegun:function(){
      return this.$store.state.cyclomedia.initializationBegun;
    },cyclomediaInitializationComplete:function(){
      return this.$store.state.cyclomedia.initializationComplete;
    },cyclomediaActive:function(){
      return this.$store.state.cyclomedia.active;
    },pictometryActive:function(){
      return this.$store.state.pictometry.active;
    },widgetClass:function(){
      var t;return t=this.$store.state.fullScreenCycloEnabled||"full-screen"===this.$props.orientation?"medium-24 small-24 height100 fullScreen-cyclo":"vertical"===this.$props.orientation?this.$store.state.leftPanel?"medium-24 small-24 height50":"medium-12 small-24 height100":"horizontal"===this.$props.orientation?"small-24 medium-12 height100":this.pictometryActive?"medium-16 large-16 height50 columns":"medium-24 large-24 height50 columns",this.fullScreenTopicsEnabled&&(t+=" full-topics-open"),t;
    },locForCyclo:function(){
      var t=this.$store.state.geocode.data;return t?[ t.geometry.coordinates[1],t.geometry.coordinates[0] ]:[];
    },latLngFromMap:function(){
      return this.$store.state.cyclomedia.latLngFromMap;
    },mapCenter:function(){
      return this.$store.state.map.center;
    },navBarOpen:function(){
      return this.$store.state.cyclomedia.navBarOpen;
    },projection4326:function(){
      return"+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    },projection2272:function(){
      return"+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs";
    } },watch:{ fullScreenMapEnabled:function(){
      this.setDivWidth();
    },locForCyclo:function(t){
      t.length&&this.cyclomediaInitializationComplete&&this.setNewLocation(t);
    },latLngFromMap:function(t){
      this.cyclomediaInitializationComplete&&(Array.isArray(t)?this.setNewLocation([ t[1],t[0] ]):this.setNewLocation([ t.lat,t.lng ]));
    },cyclomediaInitializationBegun:function(){
      var t=this;console.log("watch cyclomediaInitializationBegun is running"),StreetSmartApi.init({ targetElement:this.$refs.cycloviewer,username:this.$config.cyclomedia.username,password:this.$config.cyclomedia.password,apiKey:this.$config.cyclomedia.apiKey,srs:"EPSG:2272",locale:"en-us",addressSettings:{ locale:"en-us",database:"CMDatabase" }}).then((function(){
        var e;e=t.$store.state.cyclomedia.latLngFromMap?t.$store.state.cyclomedia.latLngFromMap:[ 39.953338,-75.163471 ],t.$store.commit("setCyclomediaInitilizationComplete",!0),t.setNewLocation([ e[0],e[1] ]);
      }),(function(t){
        console.log("Api: init: failed. Error: ",t);
      })),window.addEventListener("resize",this.setDivWidth);
    },cyclomediaActive:function(t){
      console.log("cyclomediaActive watch is firing"),this.setDivWidth(),!0===t&&this.cyclomediaInitializationComplete&&this.setNewLocation([ this.latLngFromMap[1],this.latLngFromMap[0] ]);
    } },mounted:function(){
      this.$emit("cyclomedia-widget-mounted");
    },updated:function(){
      this.cyclomediaActive&&window.panoramaViewer&&window.panoramaViewer.rotateRight(1e-7),this.setDivWidth();
    },methods:{ setDivWidth:function(){
      var t=document.body.clientWidth;this.docWidth=t;var e=document.getElementById("cyclomedia-container"),i=window.getComputedStyle(e),o=parseFloat(i.getPropertyValue("width").replace("px",""));this.divWidth=o;var a,n=this.$store.state.appName;a="pde"!==n&&this.fullScreenMapEnabled||"pde"!==n&&t<750?t-o+"px":0,this.popoutPosition=a;
    },setNewLocation:function(t){
      if(t){
        var e=StreetSmartApi.ViewerType.PANORAMA,i=Object(r["a"])(this.projection4326,this.projection2272,[ t[1],t[0] ]);StreetSmartApi.open(i[0]+","+i[1],{ viewerType:e,srs:"EPSG:2272",panoramaViewer:{ closable:!1,maximizable:!1 }}).then(function(t){
          var e=t[0],i=this;if(e){
            e.getNavbarExpanded();e.toggleNavbarExpanded(i.navBarOpen),e.toggleButtonEnabled("panorama.elevation",!1),e.toggleButtonEnabled("panorama.reportBlurring",!1);var o,a=Object(n["a"])(e.props.overlays);try{
              for(a.s();!(o=a.n()).done;){
                var r=o.value;"surfaceCursorLayer"===r.id&&!0===r.visible&&e.toggleOverlay(r);
              }
            }catch(c){
              a.e(c);
            }finally{
              a.f();
            }this.$config.cyclomedia.measurementAllowed&&"false"!==this.$config.cyclomedia.measurementAllowed||(StreetSmartApi.removeOverlay("measurementLayer"),e.toggleButtonEnabled("panorama.measure",!1)),e.on("VIEW_CHANGE",(function(t){
              t.detail.yaw!==i.$store.state.cyclomedia.orientation.yaw||e.props.orientation.xyz!==i.$store.state.cyclomedia.orientation.xyz?i.sendOrientationToStore(t.detail,e.props.orientation.xyz):e.getNavbarExpanded()!==this.navBarOpen&&i.$store.commit("setCyclomediaNavBarOpen",e.getNavbarExpanded());
            })),e.on("VIEW_LOAD_END",(function(t){
              e.props.orientation.xyz!==i.$store.state.cyclomedia.orientation.xyz?i.sendOrientationToStore(t,e.props.orientation.xyz):e.getNavbarExpanded()!==this.navBarOpen&&i.$store.commit("setCyclomediaNavBarOpen",e.getNavbarExpanded());
            }));
          }
        }.bind(this)).catch((function(t){}));
      }
    },sendOrientationToStore:function(t,e){
      var i=this;t.yaw&&(this.$store.commit("setCyclomediaYaw",t.yaw),this.$store.commit("setCyclomediaHFov",t.hFov));var o=[ e[0],e[1] ],a=Object(r["a"])(this.projection2272,this.projection4326,o);this.$nextTick((function(){
        i.$store.commit("setCyclomediaXyz",a);
      }));
    },popoutClicked:function(){
      var t;t=this.$store.map?this.$store.map:this.$store.state.map.map;var e=t.getCenter();window.open("//cyclomedia.phila.gov/#/?lat="+e.lat+"&lng="+e.lng,"_blank"),this.$store.commit("setCyclomediaActive",!1);
    } }},s=c,l=(i("4835"),i("2877")),d=Object(l["a"])(s,o,a,!1,null,"4897cc22",null);e["default"]=d.exports;
},bd73:function(t,e,i){} }]);
//# sourceMappingURL=mbmb_pvm_CyclomediaWidget.e6d623de.js.map