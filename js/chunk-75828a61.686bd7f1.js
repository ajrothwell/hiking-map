(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[ "chunk-75828a61" ],{ "317b":function(e,t,i){},"8f0e":function(e,t,i){
  "use strict";i.r(t);var n=function(){
      var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[ i("div",{ staticClass:"header-holder" },[ i("app-header",{ attrs:{ "app-title":e.appTitle,"app-subtitle":e.appSubTitle,"app-link":e.appLink,"is-sticky":!1,"branding-image":e.brandingImage,"branding-link":e.brandingLink,isFluid:!0 }},[ i("mobile-nav",{ attrs:{ slot:"mobile-nav",links:e.footerLinks },slot:"mobile-nav" }),e.i18nEnabled?i("lang-selector",{ attrs:{ slot:"lang-selector-nav",languages:e.i18nLanguages },slot:"lang-selector-nav" }):e._e() ],1) ],1),i("div",{ staticClass:"loc-item open" },[ i("div",{ staticClass:"columns location-row is-mobile",attrs:{ tabindex:"0" }},[ i("div",{ staticClass:"location-title column is-11" },[ i("h2",{ staticClass:"h5",attrs:{ "aria-expanded":e.locationOpen }},[ e._v(" "+e._s(e.getSiteName(e.item))+" ") ]) ]) ]),i("div",{ staticClass:"component-holder" },[ i("map-panel",{ attrs:{ view:"print" }}) ],1),i("div",{ staticClass:"component-holder card-content" },[ e.showComponent?i("expandCollapseContent",{ tag:"component",attrs:{ item:e.item }}):e._e() ],1) ]) ]);
    },s=[],a=i("3835"),o=(i("e8fd"),i("97cc"),i("5d53"),i("1c7d"),i("5e4e"),i("2d6d"),i("09a4"),i("9448")),r=(i("ecee"),i("a100"),i("b37c")),c=i("6502"),l={ name:"ResourceView",components:{ AppHeader:c["b"],MobileNav:c["f"],LangSelector:c["e"],MapPanel:r["a"] },data:function(){
      return{ resource:null,locationOpen:!1,brandingImage:null,brandingLink:null,appLink:"/",footerLinks:[],currentData:[]};
    },mixins:[ o["a"] ],computed:{ showComponent:function(){
      var e=!1;return this.item&&this.item.attributes&&this.$config.customComps&&Object.keys(this.$config.customComps).includes("expandCollapseContent")&&(e=!0),e;
    },appTitle:function(){
      var e;return this.$config.app.title?e=this.$config.app.title:this.i18nEnabled&&(e=this.$i18n.messages[this.i18nLocale].app.title),e;
    },appSubTitle:function(){
      var e;return this.$config.app.subtitle?e=this.$config.app.printSubtitle:this.i18nEnabled&&(e=this.$i18n.messages[this.i18nLocale].app.printSubtitle),e;
    },i18nLocale:function(){
      return this.$i18n.locale;
    },i18nLanguages:function(){
      var e=[];if(this.$config.i18n.languages) {
        console.log("in if, this.$config.i18n.languages"),e=this.$config.i18n.languages;
      }else {
        for(var t=0,i=Object.keys(this.$i18n.messages);t<i.length;t++){
          var n=i[t],s={};s.language=n,s.title=this.$i18n.messages[n].language,e.push(s);
        }
      }return console.log("end of i18nLanguages, values:",e),e;
    },i18nEnabled:function(){
      var e;return e=!(!this.$config.i18n||!this.$config.i18n.enabled),e;
    },selectedResources:function(){
      return this.$store.state.selectedResources;
    },latestSelectedResourceFromMap:function(){
      return this.$store.state.map.latestSelectedResourceFromMap;
    },database:function(){
      if(console.log("in ResourceView.vue database computed, this.$appType:",this.$appType,"this.$store.state.sources[this.$appType].data:",this.$store.state.sources[this.$appType].data),this.$store.state.sources[this.$appType].data){
        var e=this.$store.state.sources[this.$appType].data.rows||this.$store.state.sources[this.$appType].data.features||this.$store.state.sources[this.$appType].data.records;console.log("computed database is running, database:",e);for(var t=0,i=Object.entries(e);t<i.length;t++){
          var n=Object(a["a"])(i[t],2),s=n[0],o=n[1];if(this.$config.hiddenRefine) {
            for(var r in this.$config.hiddenRefine){
              var c=this.$config.hiddenRefine[r],l=c(o);!1===l&&delete e[s];
            }
          }for(var u=0,p=Object.entries(o);u<p.length;u++){
            var d=Object(a["a"])(p[u],2),h=d[0],g=d[1];"hide_on_finder"==h&&1==g&&delete e[s];
          }
        }var f=e.filter((function(e){
          return!0;
        }));return f;
      }
    },item:function(){
      var e,t=this,i=this.$appType;console.log("in ResourceView.vue, item computed, appType:",i);var n=this.database;return console.log("computed item test:",n,"this.resource:",this.resource),n&&(e=n.filter((function(e){
        return e._featureId==t.resource;
      }))[0]),console.log("computed item, value:",e),e;
    } },mounted:function(){
      this.$config.dataSources&&this.$controller.dataManager.fetchData(),this.resource=this.$route.params.resource;var e=[ this.resource ];this.$store.commit("setSelectedResources",e);
    },watch:{ item:function(e){
      var t=[ e ];console.log("ResourceView.vue, watch item, nextItem:",e,"nextItem._featureId:",e._featureId,"nextItem.latlng:",e.latlng,"currentData:",t),this.$store.commit("setCurrentData",t);
    } },methods:{ openPrintView:function(e){
      e.stopPropagation(),console.log("openPrintView is running, e:",e,"this.$props.item._featureId:",this.$props.item._featureId),window.open();
    } }},u=l,p=(i("bae8"),i("2877")),d=Object(p["a"])(u,n,s,!1,null,null,null);t["default"]=d.exports;
},bae8:function(e,t,i){
  "use strict";i("317b");
} }]);
//# sourceMappingURL=chunk-75828a61.686bd7f1.js.map