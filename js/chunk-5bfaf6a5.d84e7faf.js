(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[ "chunk-5bfaf6a5" ],{ "00b4":function(n,t,e){
  "use strict";e("ac1f");var o=e("23e7"),a=e("da84"),i=e("c65b"),s=e("e330"),r=e("1626"),l=e("861d"),f=function(){
      var n=!1,t=/[ac]/;return t.exec=function(){
        return n=!0,/./.exec.apply(this,arguments);
      },!0===t.test("abc")&&n;
    }(),c=a.Error,u=s(/./.test);o({ target:"RegExp",proto:!0,forced:!f },{ test:function(n){
    var t=this.exec;if(!r(t)) {
      return u(this,n);
    }var e=i(t,this,n);if(null!==e&&!l(e)) {
      throw new c("RegExp exec method returned something other than an Object or null");
    }return!!e;
  } });
},"00d2":function(n,t,e){
  "use strict";var o=e("0a30"),a=e("0102");n.exports=o?{}.toString:function(){
    return"[object "+a(this)+"]";
  };
},"0102":function(n,t,e){
  var o=e("0a30"),a=e("db82"),i=e("2750"),s=e("49be"),r=s("toStringTag"),l=Object,f="Arguments"==i(function(){
      return arguments;
    }()),c=function(n,t){
      try{
        return n[t];
      }catch(e){}
    };n.exports=o?i:function(n){
    var t,e,o;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=c(t=l(n),r))?e:f?i(t):"Object"==(o=i(t))&&a(t.callee)?"Arguments":o;
  };
},"02e2":function(n,t){
  n.exports=!1;
},"057f":function(n,t,e){
  var o=e("c6b6"),a=e("fc6a"),i=e("241c").f,s=e("4dae"),r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(n){
    try{
      return i(n);
    }catch(t){
      return s(r);
    }
  };n.exports.f=function(n){
    return r&&"Window"==o(n)?l(n):i(a(n));
  };
},"06c5":function(n,t,e){
  "use strict";e.d(t,"a",(function(){
    return a;
  }));e("fb6a"),e("d3b7"),e("b0c0"),e("a630"),e("3ca3"),e("ac1f"),e("00b4");var o=e("6b75");function a(n,t){
    if(n){
      if("string"===typeof n) {
        return Object(o["a"])(n,t);
      }var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(o["a"])(n,t):void 0;
    }
  }
},"07ac":function(n,t,e){
  var o=e("23e7"),a=e("6f53").values;o({ target:"Object",stat:!0 },{ values:function(n){
    return a(n);
  } });
},"0885":function(n,t,e){
  (function(t){
    var e=function(n){
      return n&&n.Math==Math&&n;
    };n.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){
      return this;
    }()||Function("return this")();
  }).call(this,e("c8ba"));
},"091f":function(n,t,e){
  var o=e("d423"),a=e("db82"),i=e("7942"),s=TypeError;n.exports=function(n,t){
    var e,r;if("string"===t&&a(e=n.toString)&&!i(r=o(e,n))) {
      return r;
    }if(a(e=n.valueOf)&&!i(r=o(e,n))) {
      return r;
    }if("string"!==t&&a(e=n.toString)&&!i(r=o(e,n))) {
      return r;
    }throw s("Can't convert object to primitive value");
  };
},"09a4":function(n,t,e){
  var o=e("0a30"),a=e("4ecc"),i=e("00d2");o||a(Object.prototype,"toString",i,{ unsafe:!0 });
},"0a30":function(n,t,e){
  var o=e("49be"),a=o("toStringTag"),i={};i[a]="z",n.exports="[object z]"===String(i);
},"0b59":function(n,t){
  n.exports={};
},"0bc2":function(n,t,e){
  var o=e("b96e");n.exports=!o((function(){
    return 7!=Object.defineProperty({},1,{ get:function(){
      return 7;
    } })[1];
  }));
},"0cb2":function(n,t,e){
  var o=e("e330"),a=e("7b0b"),i=Math.floor,s=o("".charAt),r=o("".replace),l=o("".slice),f=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,c=/\$([$&'`]|\d{1,2})/g;n.exports=function(n,t,e,o,u,p){
    var d=e+n.length,h=o.length,A=c;return void 0!==u&&(u=a(u),A=f),r(p,A,(function(a,r){
      var f;switch(s(r,0)){
      case"$":return"$";case"&":return n;case"`":return l(t,0,e);case"'":return l(t,d);case"<":f=u[l(r,1,-1)];break;default:var c=+r;if(0===c) {
        return a;
      }if(c>h){
          var p=i(c/10);return 0===p?a:p<=h?void 0===o[p-1]?s(r,1):o[p-1]+s(r,1):a;
        }f=o[c-1];
      }return void 0===f?"":f;
    }));
  };
},"0d03":function(n,t,e){
  var o=e("e330"),a=e("cb2d"),i=Date.prototype,s="Invalid Date",r="toString",l=o(i[r]),f=o(i.getTime);String(new Date(NaN))!=s&&a(i,r,(function(){
    var n=f(this);return n===n?l(this):s;
  }));
},"0d26":function(n,t,e){},"0e07":function(n,t,e){
  var o=e("0bc2"),a=e("d423"),i=e("754a"),s=e("1eec"),r=e("bfa1"),l=e("d7bd"),f=e("e246"),c=e("2f9a"),u=Object.getOwnPropertyDescriptor;t.f=o?u:function(n,t){
    if(n=r(n),t=l(t),c) {
      try{
        return u(n,t);
      }catch(e){}
    }if(f(n,t)) {
      return s(!a(i.f,n,t),n[t]);
    }
  };
},"0e63":function(n,t){
  n.exports={ CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0 };
},"0f85":function(n,t,e){
  "use strict";var o=e("67b2"),a=e("d423"),i=e("02e2"),s=e("6386"),r=e("db82"),l=e("6138"),f=e("34d0"),c=e("a91c"),u=e("125a"),p=e("a3b1"),d=e("4ecc"),h=e("49be"),A=e("50d0"),m=e("c000"),g=s.PROPER,w=s.CONFIGURABLE,v=m.IteratorPrototype,y=m.BUGGY_SAFARI_ITERATORS,b=h("iterator"),B="keys",S="values",C="entries",O=function(){
    return this;
  };n.exports=function(n,t,e,s,h,m,k){
    l(e,t,s);var E,x,_,M=function(n){
        if(n===h&&j) {
          return j;
        }if(!y&&n in F) {
          return F[n];
        }switch(n){
        case B:return function(){
          return new e(this,n);
        };case S:return function(){
          return new e(this,n);
        };case C:return function(){
          return new e(this,n);
        };
        }return function(){
          return new e(this);
        };
      },I=t+" Iterator",$=!1,F=n.prototype,R=F[b]||F["@@iterator"]||h&&F[h],j=!y&&R||M(h),T="Array"==t&&F.entries||R;if(T&&(E=f(T.call(new n)),E!==Object.prototype&&E.next&&(i||f(E)===v||(c?c(E,v):r(E[b])||d(E,b,O)),u(E,I,!0,!0),i&&(A[I]=O))),g&&h==S&&R&&R.name!==S&&(!i&&w?p(F,"name",S):($=!0,j=function(){
      return a(R,this);
    })),h) {
      if(x={ values:M(S),keys:m?j:M(B),entries:M(C) },k) {
        for(_ in x) {
(y||$||!(_ in F))&&d(F,_,x[_]);
}
      }else {
        o({ target:t,proto:!0,forced:y||$ },x);
      }
    }return i&&!k||F[b]===j||d(F,b,j,{ name:h }),A[t]=j,x;
  };
},"125a":function(n,t,e){
  var o=e("b47c").f,a=e("e246"),i=e("49be"),s=i("toStringTag");n.exports=function(n,t,e){
    n&&!e&&(n=n.prototype),n&&!a(n,s)&&o(n,s,{ configurable:!0,value:t });
  };
},"14f9":function(n,t,e){
  "use strict";e("e9f0");
},"159b":function(n,t,e){
  var o=e("da84"),a=e("fdbc"),i=e("785a"),s=e("17c2"),r=e("9112"),l=function(n){
    if(n&&n.forEach!==s) {
      try{
        r(n,"forEach",s);
      }catch(t){
        n.forEach=s;
      }
    }
  };for(var f in a) {
    a[f]&&l(o[f]&&o[f].prototype);
  }l(i);
},1704:function(n,t){
  t.f=Object.getOwnPropertySymbols;
},"17c2":function(n,t,e){
  "use strict";var o=e("b727").forEach,a=e("a640"),i=a("forEach");n.exports=i?[].forEach:function(n){
    return o(this,n,arguments.length>1?arguments[1]:void 0);
  };
},"1a2b":function(n,t){
  n.exports=function(n,t){
    return{ value:n,done:t };
  };
},"1abf":function(n,t,e){
  var o=e("a9a1"),a=e("db22"),i=a.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(n){
    return o(n,i);
  };
},"1c7d":function(n,t,e){
  "use strict";var o=e("67b2"),a=e("f9d3").map,i=e("4329"),s=i("map");o({ target:"Array",proto:!0,forced:!s },{ map:function(n){
    return a(this,n,arguments.length>1?arguments[1]:void 0);
  } });
},"1d57":function(n,t,e){
  var o=e("23e7"),a=e("da84"),i=e("20cc").setTimeout;o({ global:!0,bind:!0,forced:a.setTimeout!==i },{ setTimeout:i });
},"1eec":function(n,t){
  n.exports=function(n,t){
    return{ enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t };
  };
},"1f0e":function(n,t,e){
  "use strict";e("0d26");
},"20cc":function(n,t,e){
  var o=e("da84"),a=e("2ba4"),i=e("1626"),s=e("342f"),r=e("f36a"),l=e("d6d6"),f=/MSIE .\./.test(s),c=o.Function,u=function(n){
    return f?function(t,e){
      var o=l(arguments.length,1)>2,s=i(t)?t:c(t),f=o?r(arguments,2):void 0;return n(o?function(){
        a(s,this,f);
      }:s,e);
    }:n;
  };n.exports={ setTimeout:u(o.setTimeout),setInterval:u(o.setInterval) };
},"21f3":function(n,t,e){
  "use strict";Object.defineProperty(t,"__esModule",{ value:!0 });var o="fas",a="map-marker-alt",i=384,s=512,r=[],l="f3c5",f="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z";t.definition={ prefix:o,iconName:a,icon:[ i,s,r,l,f ]},t.faMapMarkerAlt=t.definition,t.prefix=o,t.iconName=a,t.width=i,t.height=s,t.ligatures=r,t.unicode=l,t.svgPathData=f;
},"230c":function(n,t,e){
  var o=e("2750");n.exports=Array.isArray||function(n){
    return"Array"==o(n);
  };
},"24a1":function(n,t,e){},"251c":function(n,t,e){
  var o=e("b481"),a=Object;n.exports=function(n){
    return a(o(n));
  };
},"25f0":function(n,t,e){
  "use strict";var o=e("5e77").PROPER,a=e("cb2d"),i=e("825a"),s=e("577e"),r=e("d039"),l=e("90d8"),f="toString",c=RegExp.prototype,u=c[f],p=r((function(){
      return"/a/b"!=u.call({ source:"a",flags:"b" });
    })),d=o&&u.name!=f;(p||d)&&a(RegExp.prototype,f,(function(){
    var n=i(this),t=s(n.source),e=s(l(n));return"/"+t+"/"+e;
  }),{ unsafe:!0 });
},2750:function(n,t,e){
  var o=e("550a"),a=o({}.toString),i=o("".slice);n.exports=function(n){
    return i(a(n),8,-1);
  };
},"277d":function(n,t,e){
  var o=e("23e7"),a=e("e8b5");o({ target:"Array",stat:!0 },{ isArray:a });
},2909:function(n,t,e){
  "use strict";e.d(t,"a",(function(){
    return l;
  }));var o=e("6b75");function a(n){
    if(Array.isArray(n)) {
      return Object(o["a"])(n);
    }
  }e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function i(n){
    if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"]) {
      return Array.from(n);
    }
  }var s=e("06c5");e("d9e2");function r(){
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }function l(n){
    return a(n)||i(n)||Object(s["a"])(n)||r();
  }
},"2bfb":function(n,t,e){
  var o=e("550a"),a=e("b96e"),i=e("db82"),s=e("e246"),r=e("0bc2"),l=e("6386").CONFIGURABLE,f=e("8cac"),c=e("35b6"),u=c.enforce,p=c.get,d=String,h=Object.defineProperty,A=o("".slice),m=o("".replace),g=o([].join),w=r&&!a((function(){
      return 8!==h((function(){}),"length",{ value:8 }).length;
    })),v=String(String).split("String"),y=n.exports=function(n,t,e){
      "Symbol("===A(d(t),0,7)&&(t="["+m(d(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(t="get "+t),e&&e.setter&&(t="set "+t),(!s(n,"name")||l&&n.name!==t)&&(r?h(n,"name",{ value:t,configurable:!0 }):n.name=t),w&&e&&s(e,"arity")&&n.length!==e.arity&&h(n,"length",{ value:e.arity });try{
        e&&s(e,"constructor")&&e.constructor?r&&h(n,"prototype",{ writable:!1 }):n.prototype&&(n.prototype=void 0);
      }catch(a){}var o=u(n);return s(o,"source")||(o.source=g(v,"string"==typeof t?t:"")),n;
    };Function.prototype.toString=y((function(){
    return i(this)&&p(this).source||f(this);
  }),"toString");
},"2c1a":function(n,t,e){},"2ca8":function(n,t,e){
  var o=e("23e7"),a=e("da84"),i=e("20cc").setInterval;o({ global:!0,bind:!0,forced:a.setInterval!==i },{ setInterval:i });
},"2d6b":function(n,t,e){
  "use strict";var o=e("0bc2"),a=e("230c"),i=TypeError,s=Object.getOwnPropertyDescriptor,r=o&&!function(){
    if(void 0!==this) {
      return!0;
    }try{
      Object.defineProperty([],"length",{ writable:!1 }).length=1;
    }catch(n){
      return n instanceof TypeError;
    }
  }();n.exports=r?function(n,t){
    if(a(n)&&!s(n,"length").writable) {
      throw i("Cannot set read only .length");
    }return n.length=t;
  }:function(n,t){
    return n.length=t;
  };
},"2d6d":function(n,t,e){
  "use strict";var o=e("67b2"),a=e("f9d3").filter,i=e("4329"),s=i("filter");o({ target:"Array",proto:!0,forced:!s },{ filter:function(n){
    return a(this,n,arguments.length>1?arguments[1]:void 0);
  } });
},"2dba":function(n,t,e){
  "use strict";Object.defineProperty(t,"__esModule",{ value:!0 });var o="fas",a="caret-left",i=192,s=512,r=[],l="f0d9",f="M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z";t.definition={ prefix:o,iconName:a,icon:[ i,s,r,l,f ]},t.faCaretLeft=t.definition,t.prefix=o,t.iconName=a,t.width=i,t.height=s,t.ligatures=r,t.unicode=l,t.svgPathData=f;
},"2ef3":function(n,t,e){
  var o=e("0885"),a=e("db82"),i=function(n){
    return a(n)?n:void 0;
  };n.exports=function(n,t){
    return arguments.length<2?i(o[n]):o[n]&&o[n][t];
  };
},"2f9a":function(n,t,e){
  var o=e("0bc2"),a=e("b96e"),i=e("bc99");n.exports=!o&&!a((function(){
    return 7!=Object.defineProperty(i("div"),"a",{ get:function(){
      return 7;
    } }).a;
  }));
},3188:function(n,t,e){
  "use strict";var o=e("4750").charAt,a=e("cbe0"),i=e("35b6"),s=e("0f85"),r=e("1a2b"),l="String Iterator",f=i.set,c=i.getterFor(l);s(String,"String",(function(n){
    f(this,{ type:l,string:a(n),index:0 });
  }),(function(){
    var n,t=c(this),e=t.string,a=t.index;return a>=e.length?r(void 0,!0):(n=o(e,a),t.index+=n.length,r(n,!1));
  }));
},"34d0":function(n,t,e){
  var o=e("e246"),a=e("db82"),i=e("251c"),s=e("d031"),r=e("5840"),l=s("IE_PROTO"),f=Object,c=f.prototype;n.exports=r?f.getPrototypeOf:function(n){
    var t=i(n);if(o(t,l)) {
      return t[l];
    }var e=t.constructor;return a(e)&&t instanceof e?e.prototype:t instanceof f?c:null;
  };
},"355b":function(n,t,e){
  var o=e("d423"),a=e("7942"),i=e("7f5e"),s=e("b96a"),r=e("091f"),l=e("49be"),f=TypeError,c=l("toPrimitive");n.exports=function(n,t){
    if(!a(n)||i(n)) {
      return n;
    }var e,l=s(n,c);if(l){
      if(void 0===t&&(t="default"),e=o(l,n,t),!a(e)||i(e)) {
        return e;
      }throw f("Can't convert object to primitive value");
    }return void 0===t&&(t="number"),r(n,t);
  };
},"35b6":function(n,t,e){
  var o,a,i,s=e("8352"),r=e("0885"),l=e("7942"),f=e("a3b1"),c=e("e246"),u=e("6159"),p=e("d031"),d=e("0b59"),h="Object already initialized",A=r.TypeError,m=r.WeakMap,g=function(n){
      return i(n)?a(n):o(n,{});
    },w=function(n){
      return function(t){
        var e;if(!l(t)||(e=a(t)).type!==n) {
          throw A("Incompatible receiver, "+n+" required");
        }return e;
      };
    };if(s||u.state){
    var v=u.state||(u.state=new m);v.get=v.get,v.has=v.has,v.set=v.set,o=function(n,t){
      if(v.has(n)) {
        throw A(h);
      }return t.facade=n,v.set(n,t),t;
    },a=function(n){
      return v.get(n)||{};
    },i=function(n){
      return v.has(n);
    };
  }else{
    var y=p("state");d[y]=!0,o=function(n,t){
      if(c(n,y)) {
        throw A(h);
      }return t.facade=n,f(n,y,t),t;
    },a=function(n){
      return c(n,y)?n[y]:{};
    },i=function(n){
      return c(n,y);
    };
  }n.exports={ set:o,get:a,has:i,enforce:g,getterFor:w };
},3835:function(n,t,e){
  "use strict";function o(n){
    if(Array.isArray(n)) {
      return n;
    }
  }e.d(t,"a",(function(){
    return r;
  }));e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0");function a(n,t){
    var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){
      var o,a,i=[],s=!0,r=!1;try{
        for(e=e.call(n);!(s=(o=e.next()).done);s=!0) {
          if(i.push(o.value),t&&i.length===t) {
            break;
          }
        }
      }catch(l){
        r=!0,a=l;
      }finally{
        try{
          s||null==e["return"]||e["return"]();
        }finally{
          if(r) {
            throw a;
          }
        }
      }return i;
    }
  }var i=e("06c5");e("d9e2");function s(){
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }function r(n,t){
    return o(n)||a(n,t)||Object(i["a"])(n,t)||s();
  }
},"388c":function(n,t,e){
  var o=e("7bb6"),a=e("b96e");n.exports=!!Object.getOwnPropertySymbols&&!a((function(){
    var n=Symbol();return!String(n)||!(Object(n)instanceof Symbol)||!Symbol.sham&&o&&o<41;
  }));
},3909:function(n,t,e){
  var o=e("0885"),a=e("0e63"),i=e("4c1c"),s=e("3de3"),r=e("a3b1"),l=e("49be"),f=l("iterator"),c=l("toStringTag"),u=s.values,p=function(n,t){
    if(n){
      if(n[f]!==u) {
        try{
          r(n,f,u);
        }catch(o){
          n[f]=u;
        }
      }if(n[c]||r(n,c,t),a[t]) {
        for(var e in s) {
          if(n[e]!==s[e]) {
try{
            r(n,e,s[e]);
          }catch(o){
            n[e]=s[e];
          }
}
        }
      }
    }
  };for(var d in a) {
    p(o[d]&&o[d].prototype,d);
  }p(i,"DOMTokenList");
},"3b52":function(n,t,e){
  var o=e("2ef3");n.exports=o("document","documentElement");
},"3bed":function(n,t,e){
  var o=e("550a");n.exports=o({}.isPrototypeOf);
},"3c4e":function(n,t,e){
  "use strict";var o=function(n){
    return a(n)&&!i(n);
  };function a(n){
    return!!n&&"object"===typeof n;
  }function i(n){
    var t=Object.prototype.toString.call(n);return"[object RegExp]"===t||"[object Date]"===t||l(n);
  }var s="function"===typeof Symbol&&Symbol.for,r=s?Symbol.for("react.element"):60103;function l(n){
    return n.$$typeof===r;
  }function f(n){
    return Array.isArray(n)?[]:{};
  }function c(n,t){
    return!1!==t.clone&&t.isMergeableObject(n)?w(f(n),n,t):n;
  }function u(n,t,e){
    return n.concat(t).map((function(n){
      return c(n,e);
    }));
  }function p(n,t){
    if(!t.customMerge) {
      return w;
    }var e=t.customMerge(n);return"function"===typeof e?e:w;
  }function d(n){
    return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n).filter((function(t){
      return Object.propertyIsEnumerable.call(n,t);
    })):[];
  }function h(n){
    return Object.keys(n).concat(d(n));
  }function A(n,t){
    try{
      return t in n;
    }catch(e){
      return!1;
    }
  }function m(n,t){
    return A(n,t)&&!(Object.hasOwnProperty.call(n,t)&&Object.propertyIsEnumerable.call(n,t));
  }function g(n,t,e){
    var o={};return e.isMergeableObject(n)&&h(n).forEach((function(t){
      o[t]=c(n[t],e);
    })),h(t).forEach((function(a){
      m(n,a)||(A(n,a)&&e.isMergeableObject(t[a])?o[a]=p(a,e)(n[a],t[a],e):o[a]=c(t[a],e));
    })),o;
  }function w(n,t,e){
    e=e||{},e.arrayMerge=e.arrayMerge||u,e.isMergeableObject=e.isMergeableObject||o,e.cloneUnlessOtherwiseSpecified=c;var a=Array.isArray(t),i=Array.isArray(n),s=a===i;return s?a?e.arrayMerge(n,t,e):g(n,t,e):c(t,e);
  }w.all=function(n,t){
    if(!Array.isArray(n)) {
      throw new Error("first argument should be an array");
    }return n.reduce((function(n,e){
      return w(n,e,t);
    }),{});
  };var v=w;n.exports=v;
},"3ca3":function(n,t,e){
  "use strict";var o=e("6547").charAt,a=e("577e"),i=e("69f3"),s=e("7dd0"),r="String Iterator",l=i.set,f=i.getterFor(r);s(String,"String",(function(n){
    l(this,{ type:r,string:a(n),index:0 });
  }),(function(){
    var n,t=f(this),e=t.string,a=t.index;return a>=e.length?{ value:void 0,done:!0 }:(n=o(e,a),t.index+=n.length,{ value:n,done:!1 });
  }));
},"3d87":function(n,t,e){
  var o=e("4930");n.exports=o&&!!Symbol["for"]&&!!Symbol.keyFor;
},"3de3":function(n,t,e){
  "use strict";var o=e("bfa1"),a=e("3f81"),i=e("50d0"),s=e("35b6"),r=e("b47c").f,l=e("0f85"),f=e("1a2b"),c=e("02e2"),u=e("0bc2"),p="Array Iterator",d=s.set,h=s.getterFor(p);n.exports=l(Array,"Array",(function(n,t){
    d(this,{ type:p,target:o(n),index:0,kind:t });
  }),(function(){
    var n=h(this),t=n.target,e=n.kind,o=n.index++;return!t||o>=t.length?(n.target=void 0,f(void 0,!0)):f("keys"==e?o:"values"==e?t[o]:[ o,t[o] ],!1);
  }),"values");var A=i.Arguments=i.Array;if(a("keys"),a("values"),a("entries"),!c&&u&&"values"!==A.name) {
    try{
      r(A,"name",{ value:"values" });
    }catch(m){}
  }
},"3f1c":function(n,t,e){
  "use strict";function o(n){
    return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){
      return typeof n;
    }:function(n){
      return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n;
    },o(n);
  }function a(n,t){
    if(!(n instanceof t)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }function i(n,t){
    for(var e=0;e<t.length;e++){
      var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o);
    }
  }function s(n,t,e){
    return t&&i(n.prototype,t),e&&i(n,e),Object.defineProperty(n,"prototype",{ writable:!1 }),n;
  }function r(n,t,e){
    return t in n?Object.defineProperty(n,t,{ value:e,enumerable:!0,configurable:!0,writable:!0 }):n[t]=e,n;
  }function l(n,t){
    if("function"!==typeof t&&null!==t) {
      throw new TypeError("Super expression must either be null or a function");
    }n.prototype=Object.create(t&&t.prototype,{ constructor:{ value:n,writable:!0,configurable:!0 }}),Object.defineProperty(n,"prototype",{ writable:!1 }),t&&c(n,t);
  }function f(n){
    return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){
      return n.__proto__||Object.getPrototypeOf(n);
    },f(n);
  }function c(n,t){
    return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){
      return n.__proto__=t,n;
    },c(n,t);
  }function u(){
    if("undefined"===typeof Reflect||!Reflect.construct) {
      return!1;
    }if(Reflect.construct.sham) {
      return!1;
    }if("function"===typeof Proxy) {
      return!0;
    }try{
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0;
    }catch(n){
      return!1;
    }
  }function p(n,t){
    if(null==n) {
      return{};
    }var e,o,a={},i=Object.keys(n);for(o=0;o<i.length;o++) {
      e=i[o],t.indexOf(e)>=0||(a[e]=n[e]);
    }return a;
  }function d(n,t){
    if(null==n) {
      return{};
    }var e,o,a=p(n,t);if(Object.getOwnPropertySymbols){
      var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++) {
        e=i[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e]);
      }
    }return a;
  }function h(n){
    if(void 0===n) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return n;
  }function A(n,t){
    if(t&&("object"===typeof t||"function"===typeof t)) {
      return t;
    }if(void 0!==t) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }return h(n);
  }function m(n){
    var t=u();return function(){
      var e,o=f(n);if(t){
        var a=f(this).constructor;e=Reflect.construct(o,arguments,a);
      }else {
        e=o.apply(this,arguments);
      }return A(this,e);
    };
  }function g(n,t){
    while(!Object.prototype.hasOwnProperty.call(n,t)) {
      if(n=f(n),null===n) {
        break;
      }
    }return n;
  }function w(){
    return w="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,t,e){
      var o=g(n,t);if(o){
        var a=Object.getOwnPropertyDescriptor(o,t);return a.get?a.get.call(arguments.length<3?n:e):a.value;
      }
    },w.apply(this,arguments);
  }function v(n,t,e,o){
    return v="undefined"!==typeof Reflect&&Reflect.set?Reflect.set:function(n,t,e,o){
      var a,i=g(n,t);if(i){
        if(a=Object.getOwnPropertyDescriptor(i,t),a.set) {
          return a.set.call(o,e),!0;
        }if(!a.writable) {
          return!1;
        }
      }if(a=Object.getOwnPropertyDescriptor(o,t),a){
        if(!a.writable) {
          return!1;
        }a.value=e,Object.defineProperty(o,t,a);
      }else {
        r(o,t,e);
      }return!0;
    },v(n,t,e,o);
  }function y(n,t,e,o,a){
    var i=v(n,t,e,o||n);if(!i&&a) {
      throw new Error("failed to set property");
    }return e;
  }function b(n,t){
    return C(n)||k(n,t)||E(n,t)||M();
  }function B(n){
    return S(n)||O(n)||E(n)||_();
  }function S(n){
    if(Array.isArray(n)) {
      return x(n);
    }
  }function C(n){
    if(Array.isArray(n)) {
      return n;
    }
  }function O(n){
    if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"]) {
      return Array.from(n);
    }
  }function k(n,t){
    var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){
      var o,a,i=[],s=!0,r=!1;try{
        for(e=e.call(n);!(s=(o=e.next()).done);s=!0) {
          if(i.push(o.value),t&&i.length===t) {
            break;
          }
        }
      }catch(l){
        r=!0,a=l;
      }finally{
        try{
          s||null==e["return"]||e["return"]();
        }finally{
          if(r) {
            throw a;
          }
        }
      }return i;
    }
  }function E(n,t){
    if(n){
      if("string"===typeof n) {
        return x(n,t);
      }var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?x(n,t):void 0;
    }
  }function x(n,t){
    (null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++) {
      o[e]=n[e];
    }return o;
  }function _(){
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }function M(){
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }e.d(t,"a",(function(){
    return Ie;
  }));var I=function(){
    function n(t){
      a(this,n),Object.assign(this,{ inserted:"",rawInserted:"",skip:!1,tailShift:0 },t);
    }return s(n,[{ key:"aggregate",value:function(n){
      return this.rawInserted+=n.rawInserted,this.skip=this.skip||n.skip,this.inserted+=n.inserted,this.tailShift+=n.tailShift,this;
    } },{ key:"offset",get:function(){
      return this.tailShift+this.inserted.length;
    } }]),n;
  }();function $(n){
    return"string"===typeof n||n instanceof String;
  }var F={ NONE:"NONE",LEFT:"LEFT",FORCE_LEFT:"FORCE_LEFT",RIGHT:"RIGHT",FORCE_RIGHT:"FORCE_RIGHT" };function R(n){
    switch(n){
    case F.LEFT:return F.FORCE_LEFT;case F.RIGHT:return F.FORCE_RIGHT;default:return n;
    }
  }function j(n){
    return n.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1");
  }function T(n){
    return Array.isArray(n)?n:[ n,new I ];
  }function D(n,t){
    if(t===n) {
      return!0;
    }var e,a=Array.isArray(t),i=Array.isArray(n);if(a&&i){
      if(t.length!=n.length) {
        return!1;
      }for(e=0;e<t.length;e++) {
        if(!D(t[e],n[e])) {
          return!1;
        }
      }return!0;
    }if(a!=i) {
      return!1;
    }if(t&&n&&"object"===o(t)&&"object"===o(n)){
      var s=t instanceof Date,r=n instanceof Date;if(s&&r) {
        return t.getTime()==n.getTime();
      }if(s!=r) {
        return!1;
      }var l=t instanceof RegExp,f=n instanceof RegExp;if(l&&f) {
        return t.toString()==n.toString();
      }if(l!=f) {
        return!1;
      }var c=Object.keys(t);for(e=0;e<c.length;e++) {
        if(!Object.prototype.hasOwnProperty.call(n,c[e])) {
          return!1;
        }
      }for(e=0;e<c.length;e++) {
        if(!D(n[c[e]],t[c[e]])) {
          return!1;
        }
      }return!0;
    }return!(!t||!n||"function"!==typeof t||"function"!==typeof n)&&t.toString()===n.toString();
  }var L=function(){
      function n(t,e,o,i){
        a(this,n),this.value=t,this.cursorPos=e,this.oldValue=o,this.oldSelection=i;while(this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos)) {
          --this.oldSelection.start;
        }
      }return s(n,[{ key:"startChangePos",get:function(){
        return Math.min(this.cursorPos,this.oldSelection.start);
      } },{ key:"insertedCount",get:function(){
        return this.cursorPos-this.startChangePos;
      } },{ key:"inserted",get:function(){
        return this.value.substr(this.startChangePos,this.insertedCount);
      } },{ key:"removedCount",get:function(){
        return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0);
      } },{ key:"removed",get:function(){
        return this.oldValue.substr(this.startChangePos,this.removedCount);
      } },{ key:"head",get:function(){
        return this.value.substring(0,this.startChangePos);
      } },{ key:"tail",get:function(){
        return this.value.substring(this.startChangePos+this.insertedCount);
      } },{ key:"removeDirection",get:function(){
        return!this.removedCount||this.insertedCount?F.NONE:this.oldSelection.end!==this.cursorPos&&this.oldSelection.start!==this.cursorPos||this.oldSelection.end!==this.oldSelection.start?F.LEFT:F.RIGHT;
      } }]),n;
    }(),P=function(){
      function n(){
        var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;a(this,n),this.value=t,this.from=e,this.stop=o;
      }return s(n,[{ key:"toString",value:function(){
        return this.value;
      } },{ key:"extend",value:function(n){
        this.value+=String(n);
      } },{ key:"appendTo",value:function(n){
        return n.append(this.toString(),{ tail:!0 }).aggregate(n._appendPlaceholder());
      } },{ key:"state",get:function(){
        return{ value:this.value,from:this.from,stop:this.stop };
      },set:function(n){
        Object.assign(this,n);
      } },{ key:"unshift",value:function(n){
        if(!this.value.length||null!=n&&this.from>=n) {
          return"";
        }var t=this.value[0];return this.value=this.value.slice(1),t;
      } },{ key:"shift",value:function(){
        if(!this.value.length) {
          return"";
        }var n=this.value[this.value.length-1];return this.value=this.value.slice(0,-1),n;
      } }]),n;
    }();function N(n){
    var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new N.InputMask(n,t);
  }var z=function(){
    function n(t){
      a(this,n),this._value="",this._update(Object.assign({},n.DEFAULTS,t)),this.isInitialized=!0;
    }return s(n,[{ key:"updateOptions",value:function(n){
      Object.keys(n).length&&this.withValueRefresh(this._update.bind(this,n));
    } },{ key:"_update",value:function(n){
      Object.assign(this,n);
    } },{ key:"state",get:function(){
      return{ _value:this.value };
    },set:function(n){
      this._value=n._value;
    } },{ key:"reset",value:function(){
      this._value="";
    } },{ key:"value",get:function(){
      return this._value;
    },set:function(n){
      this.resolve(n);
    } },{ key:"resolve",value:function(n){
      return this.reset(),this.append(n,{ input:!0 },""),this.doCommit(),this.value;
    } },{ key:"unmaskedValue",get:function(){
      return this.value;
    },set:function(n){
      this.reset(),this.append(n,{},""),this.doCommit();
    } },{ key:"typedValue",get:function(){
      return this.doParse(this.value);
    },set:function(n){
      this.value=this.doFormat(n);
    } },{ key:"rawInputValue",get:function(){
      return this.extractInput(0,this.value.length,{ raw:!0 });
    },set:function(n){
      this.reset(),this.append(n,{ raw:!0 },""),this.doCommit();
    } },{ key:"isComplete",get:function(){
      return!0;
    } },{ key:"isFilled",get:function(){
      return this.isComplete;
    } },{ key:"nearestInputPos",value:function(n,t){
      return n;
    } },{ key:"extractInput",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(n,t);
    } },{ key:"extractTail",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new P(this.extractInput(n,t),n);
    } },{ key:"appendTail",value:function(n){
      return $(n)&&(n=new P(String(n))),n.appendTo(this);
    } },{ key:"_appendCharRaw",value:function(n){
      return n?(this._value+=n,new I({ inserted:n,rawInserted:n })):new I;
    } },{ key:"_appendChar",value:function(n){
      var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,a=this.state,i=T(this.doPrepare(n,e)),s=b(i,2);if(n=s[0],t=s[1],t=t.aggregate(this._appendCharRaw(n,e)),t.inserted){
        var r,l=!1!==this.doValidate(e);if(l&&null!=o){
          var f=this.state;!0===this.overwrite&&(r=o.state,o.unshift(this.value.length));var c=this.appendTail(o);l=c.rawInserted===o.toString(),l&&c.inserted||"shift"!==this.overwrite||(this.state=f,r=o.state,o.shift(),c=this.appendTail(o),l=c.rawInserted===o.toString()),l&&c.inserted&&(this.state=f);
        }l||(t=new I,this.state=a,o&&r&&(o.state=r));
      }return t;
    } },{ key:"_appendPlaceholder",value:function(){
      return new I;
    } },{ key:"_appendEager",value:function(){
      return new I;
    } },{ key:"append",value:function(n,t,e){
      if(!$(n)) {
        throw new Error("value should be string");
      }var o=new I,a=$(e)?new P(String(e)):e;null!==t&&void 0!==t&&t.tail&&(t._beforeTailState=this.state);for(var i=0;i<n.length;++i) {
        o.aggregate(this._appendChar(n[i],t,a));
      }return null!=a&&(o.tailShift+=this.appendTail(a).tailShift),this.eager&&null!==t&&void 0!==t&&t.input&&n&&o.aggregate(this._appendEager()),o;
    } },{ key:"remove",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,n)+this.value.slice(t),new I;
    } },{ key:"withValueRefresh",value:function(n){
      if(this._refreshing||!this.isInitialized) {
        return n();
      }this._refreshing=!0;var t=this.rawInputValue,e=this.value,o=n();return this.rawInputValue=t,this.value&&this.value!==e&&0===e.indexOf(this.value)&&this.append(e.slice(this.value.length),{},""),delete this._refreshing,o;
    } },{ key:"runIsolated",value:function(n){
      if(this._isolated||!this.isInitialized) {
        return n(this);
      }this._isolated=!0;var t=this.state,e=n(this);return this.state=t,delete this._isolated,e;
    } },{ key:"doPrepare",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(n,this,t):n;
    } },{ key:"doValidate",value:function(n){
      return(!this.validate||this.validate(this.value,this,n))&&(!this.parent||this.parent.doValidate(n));
    } },{ key:"doCommit",value:function(){
      this.commit&&this.commit(this.value,this);
    } },{ key:"doFormat",value:function(n){
      return this.format?this.format(n,this):n;
    } },{ key:"doParse",value:function(n){
      return this.parse?this.parse(n,this):n;
    } },{ key:"splice",value:function(n,t,e,o){
      var a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{ input:!0 },s=n+t,r=this.extractTail(s);this.eager&&(o=R(o),a=this.extractInput(0,s,{ raw:!0 }));var l,f=this.nearestInputPos(n,t>1&&0!==n&&!this.eager?F.NONE:o),c=new I({ tailShift:f-n }).aggregate(this.remove(f));if(this.eager&&o!==F.NONE&&a===this.rawInputValue) {
        if(o===F.FORCE_LEFT) {
          while(a===this.rawInputValue&&(l=this.value.length)) {
c.aggregate(new I({ tailShift:-1 })).aggregate(this.remove(l-1));
}
        }else {
          o===F.FORCE_RIGHT&&r.unshift();
        }
      }return c.aggregate(this.append(e,i,r));
    } },{ key:"maskEquals",value:function(n){
      return this.mask===n;
    } },{ key:"typedValueEquals",value:function(t){
      var e=this.typedValue;return t===e||n.EMPTY_VALUES.includes(t)&&n.EMPTY_VALUES.includes(e)||this.doFormat(t)===this.doFormat(this.typedValue);
    } }]),n;
  }();function V(n){
    if(null==n) {
      throw new Error("mask property should be defined");
    }return n instanceof RegExp?N.MaskedRegExp:$(n)?N.MaskedPattern:n instanceof Date||n===Date?N.MaskedDate:n instanceof Number||"number"===typeof n||n===Number?N.MaskedNumber:Array.isArray(n)||n===Array?N.MaskedDynamic:N.Masked&&n.prototype instanceof N.Masked?n:n instanceof N.Masked?n.constructor:n instanceof Function?N.MaskedFunction:(console.warn("Mask not found for mask",n),N.Masked);
  }function U(n){
    if(N.Masked&&n instanceof N.Masked) {
      return n;
    }n=Object.assign({},n);var t=n.mask;if(N.Masked&&t instanceof N.Masked) {
      return t;
    }var e=V(t);if(!e) {
      throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    }return new e(n);
  }z.DEFAULTS={ format:function(n){
    return n;
  },parse:function(n){
    return n;
  } },z.EMPTY_VALUES=[ void 0,null,"" ],N.Masked=z,N.createMask=U;var H=[ "mask" ],q={ 0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./ },W=function(){
      function n(t){
        a(this,n);var e=t.mask,o=d(t,H);this.masked=U({ mask:e }),Object.assign(this,o);
      }return s(n,[{ key:"reset",value:function(){
        this.isFilled=!1,this.masked.reset();
      } },{ key:"remove",value:function(){
        var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===n&&t>=1?(this.isFilled=!1,this.masked.remove(n,t)):new I;
      } },{ key:"value",get:function(){
        return this.masked.value||(this.isFilled&&!this.isOptional?this.placeholderChar:"");
      } },{ key:"unmaskedValue",get:function(){
        return this.masked.unmaskedValue;
      } },{ key:"isComplete",get:function(){
        return Boolean(this.masked.value)||this.isOptional;
      } },{ key:"_appendChar",value:function(n){
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.isFilled) {
          return new I;
        }var e=this.masked.state,o=this.masked._appendChar(n,t);return o.inserted&&!1===this.doValidate(t)&&(o.inserted=o.rawInserted="",this.masked.state=e),o.inserted||this.isOptional||this.lazy||t.input||(o.inserted=this.placeholderChar),o.skip=!o.inserted&&!this.isOptional,this.isFilled=Boolean(o.inserted),o;
      } },{ key:"append",value:function(){
        var n;return(n=this.masked).append.apply(n,arguments);
      } },{ key:"_appendPlaceholder",value:function(){
        var n=new I;return this.isFilled||this.isOptional||(this.isFilled=!0,n.inserted=this.placeholderChar),n;
      } },{ key:"_appendEager",value:function(){
        return new I;
      } },{ key:"extractTail",value:function(){
        var n;return(n=this.masked).extractTail.apply(n,arguments);
      } },{ key:"appendTail",value:function(){
        var n;return(n=this.masked).appendTail.apply(n,arguments);
      } },{ key:"extractInput",value:function(){
        var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,e=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(n,t,e);
      } },{ key:"nearestInputPos",value:function(n){
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.NONE,e=0,o=this.value.length,a=Math.min(Math.max(n,e),o);switch(t){
        case F.LEFT:case F.FORCE_LEFT:return this.isComplete?a:e;case F.RIGHT:case F.FORCE_RIGHT:return this.isComplete?a:o;case F.NONE:default:return a;
        }
      } },{ key:"doValidate",value:function(){
        var n,t;return(n=this.masked).doValidate.apply(n,arguments)&&(!this.parent||(t=this.parent).doValidate.apply(t,arguments));
      } },{ key:"doCommit",value:function(){
        this.masked.doCommit();
      } },{ key:"state",get:function(){
        return{ masked:this.masked.state,isFilled:this.isFilled };
      },set:function(n){
        this.masked.state=n.masked,this.isFilled=n.isFilled;
      } }]),n;
    }(),G=function(){
      function n(t){
        a(this,n),Object.assign(this,t),this._value="",this.isFixed=!0;
      }return s(n,[{ key:"value",get:function(){
        return this._value;
      } },{ key:"unmaskedValue",get:function(){
        return this.isUnmasking?this.value:"";
      } },{ key:"reset",value:function(){
        this._isRawInput=!1,this._value="";
      } },{ key:"remove",value:function(){
        var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,n)+this._value.slice(t),this._value||(this._isRawInput=!1),new I;
      } },{ key:"nearestInputPos",value:function(n){
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.NONE,e=0,o=this._value.length;switch(t){
        case F.LEFT:case F.FORCE_LEFT:return e;case F.NONE:case F.RIGHT:case F.FORCE_RIGHT:default:return o;
        }
      } },{ key:"extractInput",value:function(){
        var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.raw&&this._isRawInput&&this._value.slice(n,t)||"";
      } },{ key:"isComplete",get:function(){
        return!0;
      } },{ key:"isFilled",get:function(){
        return Boolean(this._value);
      } },{ key:"_appendChar",value:function(n){
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=new I;if(this._value) {
          return e;
        }var o=this.char===n,a=o&&(this.isUnmasking||t.input||t.raw)&&(!t.raw||!this.eager)&&!t.tail;return a&&(e.rawInserted=this.char),this._value=e.inserted=this.char,this._isRawInput=a&&(t.raw||t.input),e;
      } },{ key:"_appendEager",value:function(){
        return this._appendChar(this.char,{ tail:!0 });
      } },{ key:"_appendPlaceholder",value:function(){
        var n=new I;return this._value||(this._value=n.inserted=this.char),n;
      } },{ key:"extractTail",value:function(){
        return arguments.length>1&&void 0!==arguments[1]||this.value.length,new P("");
      } },{ key:"appendTail",value:function(n){
        return $(n)&&(n=new P(String(n))),n.appendTo(this);
      } },{ key:"append",value:function(n,t,e){
        var o=this._appendChar(n[0],t);return null!=e&&(o.tailShift+=this.appendTail(e).tailShift),o;
      } },{ key:"doCommit",value:function(){} },{ key:"state",get:function(){
        return{ _value:this._value,_isRawInput:this._isRawInput };
      },set:function(n){
        Object.assign(this,n);
      } }]),n;
    }(),Y=[ "chunks" ],Z=function(){
      function n(){
        var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;a(this,n),this.chunks=t,this.from=e;
      }return s(n,[{ key:"toString",value:function(){
        return this.chunks.map(String).join("");
      } },{ key:"extend",value:function(t){
        if(String(t)){
          $(t)&&(t=new P(String(t)));var e=this.chunks[this.chunks.length-1],o=e&&(e.stop===t.stop||null==t.stop)&&t.from===e.from+e.toString().length;if(t instanceof P) {
            o?e.extend(t.toString()):this.chunks.push(t);
          }else if(t instanceof n){
            var a;if(null==t.stop) {
              while(t.chunks.length&&null==t.chunks[0].stop) {
                a=t.chunks.shift(),a.from+=t.from,this.extend(a);
              }
            }t.toString()&&(t.stop=t.blockIndex,this.chunks.push(t));
          }
        }
      } },{ key:"appendTo",value:function(t){
        if(!(t instanceof N.MaskedPattern)){
          var e=new P(this.toString());return e.appendTo(t);
        }for(var o=new I,a=0;a<this.chunks.length&&!o.skip;++a){
          var i=this.chunks[a],s=t._mapPosToBlock(t.value.length),r=i.stop,l=void 0;if(null!=r&&(!s||s.index<=r)&&((i instanceof n||t._stops.indexOf(r)>=0)&&o.aggregate(t._appendPlaceholder(r)),l=i instanceof n&&t._blocks[r]),l){
            var f=l.appendTail(i);f.skip=!1,o.aggregate(f),t._value+=f.inserted;var c=i.toString().slice(f.rawInserted.length);c&&o.aggregate(t.append(c,{ tail:!0 }));
          }else {
            o.aggregate(t.append(i.toString(),{ tail:!0 }));
          }
        }return o;
      } },{ key:"state",get:function(){
        return{ chunks:this.chunks.map((function(n){
          return n.state;
        })),from:this.from,stop:this.stop,blockIndex:this.blockIndex };
      },set:function(t){
        var e=t.chunks,o=d(t,Y);Object.assign(this,o),this.chunks=e.map((function(t){
          var e="chunks"in t?new n:new P;return e.state=t,e;
        }));
      } },{ key:"unshift",value:function(n){
        if(!this.chunks.length||null!=n&&this.from>=n) {
          return"";
        }var t=null!=n?n-this.from:n,e=0;while(e<this.chunks.length){
          var o=this.chunks[e],a=o.unshift(t);if(o.toString()){
            if(!a) {
              break;
            }++e;
          }else {
            this.chunks.splice(e,1);
          }if(a) {
            return a;
          }
        }return"";
      } },{ key:"shift",value:function(){
        if(!this.chunks.length) {
          return"";
        }var n=this.chunks.length-1;while(0<=n){
          var t=this.chunks[n],e=t.shift();if(t.toString()){
            if(!e) {
              break;
            }--n;
          }else {
            this.chunks.splice(n,1);
          }if(e) {
            return e;
          }
        }return"";
      } }]),n;
    }(),Q=function(){
      function n(t,e){
        a(this,n),this.masked=t,this._log=[];var o=t._mapPosToBlock(e)||(e<0?{ index:0,offset:0 }:{ index:this.masked._blocks.length,offset:0 }),i=o.offset,s=o.index;this.offset=i,this.index=s,this.ok=!1;
      }return s(n,[{ key:"block",get:function(){
        return this.masked._blocks[this.index];
      } },{ key:"pos",get:function(){
        return this.masked._blockStartPos(this.index)+this.offset;
      } },{ key:"state",get:function(){
        return{ index:this.index,offset:this.offset,ok:this.ok };
      },set:function(n){
        Object.assign(this,n);
      } },{ key:"pushState",value:function(){
        this._log.push(this.state);
      } },{ key:"popState",value:function(){
        var n=this._log.pop();return this.state=n,n;
      } },{ key:"bindBlock",value:function(){
        this.block||(this.index<0&&(this.index=0,this.offset=0),this.index>=this.masked._blocks.length&&(this.index=this.masked._blocks.length-1,this.offset=this.block.value.length));
      } },{ key:"_pushLeft",value:function(n){
        for(this.pushState(),this.bindBlock();0<=this.index;--this.index,this.offset=(null===(t=this.block)||void 0===t?void 0:t.value.length)||0){
          var t;if(n()) {
            return this.ok=!0;
          }
        }return this.ok=!1;
      } },{ key:"_pushRight",value:function(n){
        for(this.pushState(),this.bindBlock();this.index<this.masked._blocks.length;++this.index,this.offset=0) {
          if(n()) {
            return this.ok=!0;
          }
        }return this.ok=!1;
      } },{ key:"pushLeftBeforeFilled",value:function(){
        var n=this;return this._pushLeft((function(){
          if(!n.block.isFixed&&n.block.value) {
            return n.offset=n.block.nearestInputPos(n.offset,F.FORCE_LEFT),0!==n.offset||void 0;
          }
        }));
      } },{ key:"pushLeftBeforeInput",value:function(){
        var n=this;return this._pushLeft((function(){
          if(!n.block.isFixed) {
            return n.offset=n.block.nearestInputPos(n.offset,F.LEFT),!0;
          }
        }));
      } },{ key:"pushLeftBeforeRequired",value:function(){
        var n=this;return this._pushLeft((function(){
          if(!(n.block.isFixed||n.block.isOptional&&!n.block.value)) {
            return n.offset=n.block.nearestInputPos(n.offset,F.LEFT),!0;
          }
        }));
      } },{ key:"pushRightBeforeFilled",value:function(){
        var n=this;return this._pushRight((function(){
          if(!n.block.isFixed&&n.block.value) {
            return n.offset=n.block.nearestInputPos(n.offset,F.FORCE_RIGHT),n.offset!==n.block.value.length||void 0;
          }
        }));
      } },{ key:"pushRightBeforeInput",value:function(){
        var n=this;return this._pushRight((function(){
          if(!n.block.isFixed) {
            return n.offset=n.block.nearestInputPos(n.offset,F.NONE),!0;
          }
        }));
      } },{ key:"pushRightBeforeRequired",value:function(){
        var n=this;return this._pushRight((function(){
          if(!(n.block.isFixed||n.block.isOptional&&!n.block.value)) {
            return n.offset=n.block.nearestInputPos(n.offset,F.NONE),!0;
          }
        }));
      } }]),n;
    }(),K=function(n){
      l(e,n);var t=m(e);function e(){
        return a(this,e),t.apply(this,arguments);
      }return s(e,[{ key:"_update",value:function(n){
        n.mask&&(n.validate=function(t){
          return t.search(n.mask)>=0;
        }),w(f(e.prototype),"_update",this).call(this,n);
      } }]),e;
    }(z);N.MaskedRegExp=K;var J=[ "_blocks" ],X=function(n){
    l(e,n);var t=m(e);function e(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(this,e),n.definitions=Object.assign({},q,n.definitions),t.call(this,Object.assign({},e.DEFAULTS,n));
    }return s(e,[{ key:"_update",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n.definitions=Object.assign({},this.definitions,n.definitions),w(f(e.prototype),"_update",this).call(this,n),this._rebuildMask();
    } },{ key:"_rebuildMask",value:function(){
      var n=this,t=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var o=this.mask;if(o&&t) {
        for(var a=!1,i=!1,s=0;s<o.length;++s){
          if(this.blocks){
            var r=function(){
              var t=o.slice(s),e=Object.keys(n.blocks).filter((function(n){
                return 0===t.indexOf(n);
              }));e.sort((function(n,t){
                return t.length-n.length;
              }));var a=e[0];if(a){
                var i=U(Object.assign({ parent:n,lazy:n.lazy,eager:n.eager,placeholderChar:n.placeholderChar,overwrite:n.overwrite },n.blocks[a]));return i&&(n._blocks.push(i),n._maskedBlocks[a]||(n._maskedBlocks[a]=[]),n._maskedBlocks[a].push(n._blocks.length-1)),s+=a.length-1,"continue";
              }
            }();if("continue"===r) {
              continue;
            }
          }var l=o[s],f=l in t;if(l!==e.STOP_CHAR) {
            if("{"!==l&&"}"!==l) {
if("["!==l&&"]"!==l){
              if(l===e.ESCAPE_CHAR){
                if(++s,l=o[s],!l)
                  break;f=!1;
              }var c=f?new W({ parent:this,lazy:this.lazy,eager:this.eager,placeholderChar:this.placeholderChar,mask:t[l],isOptional:i }):new G({ char:l,eager:this.eager,isUnmasking:a });this._blocks.push(c);
            }else 
              i=!i;
}else {
a=!a;
}
          }else {
            this._stops.push(this._blocks.length);
          }
        }
      }
    } },{ key:"state",get:function(){
      return Object.assign({},w(f(e.prototype),"state",this),{ _blocks:this._blocks.map((function(n){
        return n.state;
      })) });
    },set:function(n){
      var t=n._blocks,o=d(n,J);this._blocks.forEach((function(n,e){
        return n.state=t[e];
      })),y(f(e.prototype),"state",o,this,!0);
    } },{ key:"reset",value:function(){
      w(f(e.prototype),"reset",this).call(this),this._blocks.forEach((function(n){
        return n.reset();
      }));
    } },{ key:"isComplete",get:function(){
      return this._blocks.every((function(n){
        return n.isComplete;
      }));
    } },{ key:"isFilled",get:function(){
      return this._blocks.every((function(n){
        return n.isFilled;
      }));
    } },{ key:"isFixed",get:function(){
      return this._blocks.every((function(n){
        return n.isFixed;
      }));
    } },{ key:"isOptional",get:function(){
      return this._blocks.every((function(n){
        return n.isOptional;
      }));
    } },{ key:"doCommit",value:function(){
      this._blocks.forEach((function(n){
        return n.doCommit();
      })),w(f(e.prototype),"doCommit",this).call(this);
    } },{ key:"unmaskedValue",get:function(){
      return this._blocks.reduce((function(n,t){
        return n+t.unmaskedValue;
      }),"");
    },set:function(n){
      y(f(e.prototype),"unmaskedValue",n,this,!0);
    } },{ key:"value",get:function(){
      return this._blocks.reduce((function(n,t){
        return n+t.value;
      }),"");
    },set:function(n){
      y(f(e.prototype),"value",n,this,!0);
    } },{ key:"appendTail",value:function(n){
      return w(f(e.prototype),"appendTail",this).call(this,n).aggregate(this._appendPlaceholder());
    } },{ key:"_appendEager",value:function(){
      var n,t=new I,e=null===(n=this._mapPosToBlock(this.value.length))||void 0===n?void 0:n.index;if(null==e) {
        return t;
      }this._blocks[e].isFilled&&++e;for(var o=e;o<this._blocks.length;++o){
        var a=this._blocks[o]._appendEager();if(!a.inserted) {
          break;
        }t.aggregate(a);
      }return t;
    } },{ key:"_appendCharRaw",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=this._mapPosToBlock(this.value.length),o=new I;if(!e) {
        return o;
      }for(var a=e.index;;++a){
        var i,s,r=this._blocks[a];if(!r) {
          break;
        }var l=r._appendChar(n,Object.assign({},t,{ _beforeTailState:null===(i=t._beforeTailState)||void 0===i||null===(s=i._blocks)||void 0===s?void 0:s[a] })),f=l.skip;if(o.aggregate(l),f||l.rawInserted) {
          break;
        }
      }return o;
    } },{ key:"extractTail",value:function(){
      var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,o=new Z;return t===e||this._forEachBlocksInRange(t,e,(function(t,e,a,i){
        var s=t.extractTail(a,i);s.stop=n._findStopBefore(e),s.from=n._blockStartPos(e),s instanceof Z&&(s.blockIndex=e),o.extend(s);
      })),o;
    } },{ key:"extractInput",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n===t) {
        return"";
      }var o="";return this._forEachBlocksInRange(n,t,(function(n,t,a,i){
        o+=n.extractInput(a,i,e);
      })),o;
    } },{ key:"_findStopBefore",value:function(n){
      for(var t,e=0;e<this._stops.length;++e){
        var o=this._stops[e];if(!(o<=n)) {
          break;
        }t=o;
      }return t;
    } },{ key:"_appendPlaceholder",value:function(n){
      var t=this,e=new I;if(this.lazy&&null==n) {
        return e;
      }var o=this._mapPosToBlock(this.value.length);if(!o) {
        return e;
      }var a=o.index,i=null!=n?n:this._blocks.length;return this._blocks.slice(a,i).forEach((function(o){
        if(!o.lazy||null!=n){
          var a=null!=o._blocks?[ o._blocks.length ]:[],i=o._appendPlaceholder.apply(o,a);t._value+=i.inserted,e.aggregate(i);
        }
      })),e;
    } },{ key:"_mapPosToBlock",value:function(n){
      for(var t="",e=0;e<this._blocks.length;++e){
        var o=this._blocks[e],a=t.length;if(t+=o.value,n<=t.length) {
          return{ index:e,offset:n-a };
        }
      }
    } },{ key:"_blockStartPos",value:function(n){
      return this._blocks.slice(0,n).reduce((function(n,t){
        return n+t.value.length;
      }),0);
    } },{ key:"_forEachBlocksInRange",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,e=arguments.length>2?arguments[2]:void 0,o=this._mapPosToBlock(n);if(o){
        var a=this._mapPosToBlock(t),i=a&&o.index===a.index,s=o.offset,r=a&&i?a.offset:this._blocks[o.index].value.length;if(e(this._blocks[o.index],o.index,s,r),a&&!i){
          for(var l=o.index+1;l<a.index;++l) {
            e(this._blocks[l],l,0,this._blocks[l].value.length);
          }e(this._blocks[a.index],a.index,0,a.offset);
        }
      }
    } },{ key:"remove",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,o=w(f(e.prototype),"remove",this).call(this,n,t);return this._forEachBlocksInRange(n,t,(function(n,t,e,a){
        o.aggregate(n.remove(e,a));
      })),o;
    } },{ key:"nearestInputPos",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F.NONE;if(!this._blocks.length) {
        return 0;
      }var e=new Q(this,n);if(t===F.NONE) {
        return e.pushRightBeforeInput()?e.pos:(e.popState(),e.pushLeftBeforeInput()?e.pos:this.value.length);
      }if(t===F.LEFT||t===F.FORCE_LEFT){
        if(t===F.LEFT){
          if(e.pushRightBeforeFilled(),e.ok&&e.pos===n) {
            return n;
          }e.popState();
        }if(e.pushLeftBeforeInput(),e.pushLeftBeforeRequired(),e.pushLeftBeforeFilled(),t===F.LEFT){
          if(e.pushRightBeforeInput(),e.pushRightBeforeRequired(),e.ok&&e.pos<=n) {
            return e.pos;
          }if(e.popState(),e.ok&&e.pos<=n) {
            return e.pos;
          }e.popState();
        }return e.ok?e.pos:t===F.FORCE_LEFT?0:(e.popState(),e.ok?e.pos:(e.popState(),e.ok?e.pos:0));
      }return t===F.RIGHT||t===F.FORCE_RIGHT?(e.pushRightBeforeInput(),e.pushRightBeforeRequired(),e.pushRightBeforeFilled()?e.pos:t===F.FORCE_RIGHT?this.value.length:(e.popState(),e.ok?e.pos:(e.popState(),e.ok?e.pos:this.nearestInputPos(n,F.LEFT)))):n;
    } },{ key:"maskedBlock",value:function(n){
      return this.maskedBlocks(n)[0];
    } },{ key:"maskedBlocks",value:function(n){
      var t=this,e=this._maskedBlocks[n];return e?e.map((function(n){
        return t._blocks[n];
      })):[];
    } }]),e;
  }(z);X.DEFAULTS={ lazy:!0,placeholderChar:"_" },X.STOP_CHAR="`",X.ESCAPE_CHAR="\\",X.InputDefinition=W,X.FixedDefinition=G,N.MaskedPattern=X;var nn=function(n){
    l(e,n);var t=m(e);function e(){
      return a(this,e),t.apply(this,arguments);
    }return s(e,[{ key:"_matchFrom",get:function(){
      return this.maxLength-String(this.from).length;
    } },{ key:"_update",value:function(n){
      n=Object.assign({ to:this.to||0,from:this.from||0,maxLength:this.maxLength||0 },n);var t=String(n.to).length;null!=n.maxLength&&(t=Math.max(t,n.maxLength)),n.maxLength=t;var o=String(n.from).padStart(t,"0"),a=String(n.to).padStart(t,"0"),i=0;while(i<a.length&&a[i]===o[i]) {
        ++i;
      }n.mask=a.slice(0,i).replace(/0/g,"\\0")+"0".repeat(t-i),w(f(e.prototype),"_update",this).call(this,n);
    } },{ key:"isComplete",get:function(){
      return w(f(e.prototype),"isComplete",this)&&Boolean(this.value);
    } },{ key:"boundaries",value:function(n){
      var t="",e="",o=n.match(/^(\D*)(\d*)(\D*)/)||[],a=b(o,3),i=a[1],s=a[2];return s&&(t="0".repeat(i.length)+s,e="9".repeat(i.length)+s),t=t.padEnd(this.maxLength,"0"),e=e.padEnd(this.maxLength,"9"),[ t,e ];
    } },{ key:"doPrepare",value:function(n){
      var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=T(w(f(e.prototype),"doPrepare",this).call(this,n.replace(/\D/g,""),o)),i=b(a,2);if(n=i[0],t=i[1],!this.autofix||!n) {
        return n;
      }var s=String(this.from).padStart(this.maxLength,"0"),r=String(this.to).padStart(this.maxLength,"0"),l=this.value+n;if(l.length>this.maxLength) {
        return"";
      }var c=this.boundaries(l),u=b(c,2),p=u[0],d=u[1];return Number(d)<this.from?s[l.length-1]:Number(p)>this.to?"pad"===this.autofix&&l.length<this.maxLength?[ "",t.aggregate(this.append(s[l.length-1]+n,o)) ]:r[l.length-1]:n;
    } },{ key:"doValidate",value:function(){
      var n,t=this.value,o=t.search(/[^0]/);if(-1===o&&t.length<=this._matchFrom) {
        return!0;
      }for(var a=this.boundaries(t),i=b(a,2),s=i[0],r=i[1],l=arguments.length,c=new Array(l),u=0;u<l;u++) {
        c[u]=arguments[u];
      }return this.from<=Number(r)&&Number(s)<=this.to&&(n=w(f(e.prototype),"doValidate",this)).call.apply(n,[ this ].concat(c));
    } }]),e;
  }(X);N.MaskedRange=nn;var tn=function(n){
    l(e,n);var t=m(e);function e(n){
      return a(this,e),t.call(this,Object.assign({},e.DEFAULTS,n));
    }return s(e,[{ key:"_update",value:function(n){
      n.mask===Date&&delete n.mask,n.pattern&&(n.mask=n.pattern);var t=n.blocks;n.blocks=Object.assign({},e.GET_DEFAULT_BLOCKS()),n.min&&(n.blocks.Y.from=n.min.getFullYear()),n.max&&(n.blocks.Y.to=n.max.getFullYear()),n.min&&n.max&&n.blocks.Y.from===n.blocks.Y.to&&(n.blocks.m.from=n.min.getMonth()+1,n.blocks.m.to=n.max.getMonth()+1,n.blocks.m.from===n.blocks.m.to&&(n.blocks.d.from=n.min.getDate(),n.blocks.d.to=n.max.getDate())),Object.assign(n.blocks,this.blocks,t),Object.keys(n.blocks).forEach((function(t){
        var e=n.blocks[t];!("autofix"in e)&&"autofix"in n&&(e.autofix=n.autofix);
      })),w(f(e.prototype),"_update",this).call(this,n);
    } },{ key:"doValidate",value:function(){
      for(var n,t=this.date,o=arguments.length,a=new Array(o),i=0;i<o;i++) {
        a[i]=arguments[i];
      }return(n=w(f(e.prototype),"doValidate",this)).call.apply(n,[ this ].concat(a))&&(!this.isComplete||this.isDateExist(this.value)&&null!=t&&(null==this.min||this.min<=t)&&(null==this.max||t<=this.max));
    } },{ key:"isDateExist",value:function(n){
      return this.format(this.parse(n,this),this).indexOf(n)>=0;
    } },{ key:"date",get:function(){
      return this.typedValue;
    },set:function(n){
      this.typedValue=n;
    } },{ key:"typedValue",get:function(){
      return this.isComplete?w(f(e.prototype),"typedValue",this):null;
    },set:function(n){
      y(f(e.prototype),"typedValue",n,this,!0);
    } },{ key:"maskEquals",value:function(n){
      return n===Date||w(f(e.prototype),"maskEquals",this).call(this,n);
    } }]),e;
  }(X);tn.DEFAULTS={ pattern:"d{.}`m{.}`Y",format:function(n){
    if(!n) {
      return"";
    }var t=String(n.getDate()).padStart(2,"0"),e=String(n.getMonth()+1).padStart(2,"0"),o=n.getFullYear();return[ t,e,o ].join(".");
  },parse:function(n){
    var t=n.split("."),e=b(t,3),o=e[0],a=e[1],i=e[2];return new Date(i,a-1,o);
  } },tn.GET_DEFAULT_BLOCKS=function(){
    return{ d:{ mask:nn,from:1,to:31,maxLength:2 },m:{ mask:nn,from:1,to:12,maxLength:2 },Y:{ mask:nn,from:1900,to:9999 }};
  },N.MaskedDate=tn;var en=function(){
    function n(){
      a(this,n);
    }return s(n,[{ key:"selectionStart",get:function(){
      var n;try{
        n=this._unsafeSelectionStart;
      }catch(t){}return null!=n?n:this.value.length;
    } },{ key:"selectionEnd",get:function(){
      var n;try{
        n=this._unsafeSelectionEnd;
      }catch(t){}return null!=n?n:this.value.length;
    } },{ key:"select",value:function(n,t){
      if(null!=n&&null!=t&&(n!==this.selectionStart||t!==this.selectionEnd)) {
        try{
          this._unsafeSelect(n,t);
        }catch(e){}
      }
    } },{ key:"_unsafeSelect",value:function(n,t){} },{ key:"isActive",get:function(){
      return!1;
    } },{ key:"bindEvents",value:function(n){} },{ key:"unbindEvents",value:function(){} }]),n;
  }();N.MaskElement=en;var on=function(n){
    l(e,n);var t=m(e);function e(n){
      var o;return a(this,e),o=t.call(this),o.input=n,o._handlers={},o;
    }return s(e,[{ key:"rootElement",get:function(){
      var n,t,e;return null!==(n=null===(t=(e=this.input).getRootNode)||void 0===t?void 0:t.call(e))&&void 0!==n?n:document;
    } },{ key:"isActive",get:function(){
      return this.input===this.rootElement.activeElement;
    } },{ key:"_unsafeSelectionStart",get:function(){
      return this.input.selectionStart;
    } },{ key:"_unsafeSelectionEnd",get:function(){
      return this.input.selectionEnd;
    } },{ key:"_unsafeSelect",value:function(n,t){
      this.input.setSelectionRange(n,t);
    } },{ key:"value",get:function(){
      return this.input.value;
    },set:function(n){
      this.input.value=n;
    } },{ key:"bindEvents",value:function(n){
      var t=this;Object.keys(n).forEach((function(o){
        return t._toggleEventHandler(e.EVENTS_MAP[o],n[o]);
      }));
    } },{ key:"unbindEvents",value:function(){
      var n=this;Object.keys(this._handlers).forEach((function(t){
        return n._toggleEventHandler(t);
      }));
    } },{ key:"_toggleEventHandler",value:function(n,t){
      this._handlers[n]&&(this.input.removeEventListener(n,this._handlers[n]),delete this._handlers[n]),t&&(this.input.addEventListener(n,t),this._handlers[n]=t);
    } }]),e;
  }(en);on.EVENTS_MAP={ selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur" },N.HTMLMaskElement=on;var an=function(n){
    l(e,n);var t=m(e);function e(){
      return a(this,e),t.apply(this,arguments);
    }return s(e,[{ key:"_unsafeSelectionStart",get:function(){
      var n=this.rootElement,t=n.getSelection&&n.getSelection(),e=t&&t.anchorOffset,o=t&&t.focusOffset;return null==o||null==e||e<o?e:o;
    } },{ key:"_unsafeSelectionEnd",get:function(){
      var n=this.rootElement,t=n.getSelection&&n.getSelection(),e=t&&t.anchorOffset,o=t&&t.focusOffset;return null==o||null==e||e>o?e:o;
    } },{ key:"_unsafeSelect",value:function(n,t){
      if(this.rootElement.createRange){
        var e=this.rootElement.createRange();e.setStart(this.input.firstChild||this.input,n),e.setEnd(this.input.lastChild||this.input,t);var o=this.rootElement,a=o.getSelection&&o.getSelection();a&&(a.removeAllRanges(),a.addRange(e));
      }
    } },{ key:"value",get:function(){
      return this.input.textContent;
    },set:function(n){
      this.input.textContent=n;
    } }]),e;
  }(on);N.HTMLContenteditableMaskElement=an;var sn=[ "mask" ],rn=function(){
    function n(t,e){
      a(this,n),this.el=t instanceof en?t:t.isContentEditable&&"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName?new an(t):new on(t),this.masked=U(e),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange();
    }return s(n,[{ key:"mask",get:function(){
      return this.masked.mask;
    },set:function(n){
      if(!this.maskEquals(n)) {
        if(n instanceof N.Masked||this.masked.constructor!==V(n)){
          var t=U({ mask:n });t.unmaskedValue=this.masked.unmaskedValue,this.masked=t;
        }else {
          this.masked.updateOptions({ mask:n });
        }
      }
    } },{ key:"maskEquals",value:function(n){
      var t;return null==n||(null===(t=this.masked)||void 0===t?void 0:t.maskEquals(n));
    } },{ key:"value",get:function(){
      return this._value;
    },set:function(n){
      this.value!==n&&(this.masked.value=n,this.updateControl(),this.alignCursor());
    } },{ key:"unmaskedValue",get:function(){
      return this._unmaskedValue;
    },set:function(n){
      this.unmaskedValue!==n&&(this.masked.unmaskedValue=n,this.updateControl(),this.alignCursor());
    } },{ key:"typedValue",get:function(){
      return this.masked.typedValue;
    },set:function(n){
      this.masked.typedValueEquals(n)||(this.masked.typedValue=n,this.updateControl(),this.alignCursor());
    } },{ key:"_bindEvents",value:function(){
      this.el.bindEvents({ selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange });
    } },{ key:"_unbindEvents",value:function(){
      this.el&&this.el.unbindEvents();
    } },{ key:"_fireEvent",value:function(n){
      for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++) {
        e[o-1]=arguments[o];
      }var a=this._listeners[n];a&&a.forEach((function(n){
        return n.apply(void 0,e);
      }));
    } },{ key:"selectionStart",get:function(){
      return this._cursorChanging?this._changingCursorPos:this.el.selectionStart;
    } },{ key:"cursorPos",get:function(){
      return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd;
    },set:function(n){
      this.el&&this.el.isActive&&(this.el.select(n,n),this._saveSelection());
    } },{ key:"_saveSelection",value:function(){
      this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={ start:this.selectionStart,end:this.cursorPos };
    } },{ key:"updateValue",value:function(){
      this.masked.value=this.el.value,this._value=this.masked.value;
    } },{ key:"updateControl",value:function(){
      var n=this.masked.unmaskedValue,t=this.masked.value,e=this.unmaskedValue!==n||this.value!==t;this._unmaskedValue=n,this._value=t,this.el.value!==t&&(this.el.value=t),e&&this._fireChangeEvents();
    } },{ key:"updateOptions",value:function(n){
      var t=n.mask,e=d(n,sn),o=!this.maskEquals(t),a=!D(this.masked,e);o&&(this.mask=t),a&&this.masked.updateOptions(e),(o||a)&&this.updateControl();
    } },{ key:"updateCursor",value:function(n){
      null!=n&&(this.cursorPos=n,this._delayUpdateCursor(n));
    } },{ key:"_delayUpdateCursor",value:function(n){
      var t=this;this._abortUpdateCursor(),this._changingCursorPos=n,this._cursorChanging=setTimeout((function(){
        t.el&&(t.cursorPos=t._changingCursorPos,t._abortUpdateCursor());
      }),10);
    } },{ key:"_fireChangeEvents",value:function(){
      this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent);
    } },{ key:"_abortUpdateCursor",value:function(){
      this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging);
    } },{ key:"alignCursor",value:function(){
      this.cursorPos=this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos,F.LEFT));
    } },{ key:"alignCursorFriendly",value:function(){
      this.selectionStart===this.cursorPos&&this.alignCursor();
    } },{ key:"on",value:function(n,t){
      return this._listeners[n]||(this._listeners[n]=[]),this._listeners[n].push(t),this;
    } },{ key:"off",value:function(n,t){
      if(!this._listeners[n]) {
        return this;
      }if(!t) {
        return delete this._listeners[n],this;
      }var e=this._listeners[n].indexOf(t);return e>=0&&this._listeners[n].splice(e,1),this;
    } },{ key:"_onInput",value:function(n){
      if(this._inputEvent=n,this._abortUpdateCursor(),!this._selection) {
        return this.updateValue();
      }var t=new L(this.el.value,this.cursorPos,this.value,this._selection),e=this.masked.rawInputValue,o=this.masked.splice(t.startChangePos,t.removed.length,t.inserted,t.removeDirection,{ input:!0,raw:!0 }).offset,a=e===this.masked.rawInputValue?t.removeDirection:F.NONE,i=this.masked.nearestInputPos(t.startChangePos+o,a);a!==F.NONE&&(i=this.masked.nearestInputPos(i,F.NONE)),this.updateControl(),this.updateCursor(i),delete this._inputEvent;
    } },{ key:"_onChange",value:function(){
      this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection();
    } },{ key:"_onDrop",value:function(n){
      n.preventDefault(),n.stopPropagation();
    } },{ key:"_onFocus",value:function(n){
      this.alignCursorFriendly();
    } },{ key:"_onClick",value:function(n){
      this.alignCursorFriendly();
    } },{ key:"destroy",value:function(){
      this._unbindEvents(),this._listeners.length=0,delete this.el;
    } }]),n;
  }();N.InputMask=rn;var ln=function(n){
    l(e,n);var t=m(e);function e(){
      return a(this,e),t.apply(this,arguments);
    }return s(e,[{ key:"_update",value:function(n){
      n.enum&&(n.mask="*".repeat(n.enum[0].length)),w(f(e.prototype),"_update",this).call(this,n);
    } },{ key:"doValidate",value:function(){
      for(var n,t=this,o=arguments.length,a=new Array(o),i=0;i<o;i++) {
        a[i]=arguments[i];
      }return this.enum.some((function(n){
        return n.indexOf(t.unmaskedValue)>=0;
      }))&&(n=w(f(e.prototype),"doValidate",this)).call.apply(n,[ this ].concat(a));
    } }]),e;
  }(X);N.MaskedEnum=ln;var fn=function(n){
    l(e,n);var t=m(e);function e(n){
      return a(this,e),t.call(this,Object.assign({},e.DEFAULTS,n));
    }return s(e,[{ key:"_update",value:function(n){
      w(f(e.prototype),"_update",this).call(this,n),this._updateRegExps();
    } },{ key:"_updateRegExps",value:function(){
      var n="^"+(this.allowNegative?"[+|\\-]?":""),t="(0|([1-9]+\\d*))?",e="\\d*",o=(this.scale?"("+j(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(n+t+o),this._numberRegExp=new RegExp(n+e+o),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(j).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(j(this.thousandsSeparator),"g");
    } },{ key:"_removeThousandsSeparators",value:function(n){
      return n.replace(this._thousandsSeparatorRegExp,"");
    } },{ key:"_insertThousandsSeparators",value:function(n){
      var t=n.split(this.radix);return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),t.join(this.radix);
    } },{ key:"doPrepare",value:function(n){
      var t;n=n.replace(this._mapToRadixRegExp,this.radix);for(var o=this._removeThousandsSeparators(n),a=arguments.length,i=new Array(a>1?a-1:0),s=1;s<a;s++) {
        i[s-1]=arguments[s];
      }var r=T((t=w(f(e.prototype),"doPrepare",this)).call.apply(t,[ this,o ].concat(i))),l=b(r,2),c=l[0],u=l[1];return n&&!o&&(u.skip=!0),[ c,u ];
    } },{ key:"_separatorsCount",value:function(n){
      for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=0,o=0;o<n;++o) {
        this._value.indexOf(this.thousandsSeparator,o)===o&&(++e,t&&(n+=this.thousandsSeparator.length));
      }return e;
    } },{ key:"_separatorsCountFromSlice",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(n).length,!0);
    } },{ key:"extractInput",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,o=arguments.length>2?arguments[2]:void 0,a=this._adjustRangeWithSeparators(n,t),i=b(a,2);return n=i[0],t=i[1],this._removeThousandsSeparators(w(f(e.prototype),"extractInput",this).call(this,n,t,o));
    } },{ key:"_appendCharRaw",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator) {
        return w(f(e.prototype),"_appendCharRaw",this).call(this,n,t);
      }var o=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,a=this._separatorsCountFromSlice(o);this._value=this._removeThousandsSeparators(this.value);var i=w(f(e.prototype),"_appendCharRaw",this).call(this,n,t);this._value=this._insertThousandsSeparators(this._value);var s=t.tail&&t._beforeTailState?t._beforeTailState._value:this._value,r=this._separatorsCountFromSlice(s);return i.tailShift+=(r-a)*this.thousandsSeparator.length,i.skip=!i.rawInserted&&n===this.thousandsSeparator,i;
    } },{ key:"_findSeparatorAround",value:function(n){
      if(this.thousandsSeparator){
        var t=n-this.thousandsSeparator.length+1,e=this.value.indexOf(this.thousandsSeparator,t);if(e<=n) {
          return e;
        }
      }return-1;
    } },{ key:"_adjustRangeWithSeparators",value:function(n,t){
      var e=this._findSeparatorAround(n);e>=0&&(n=e);var o=this._findSeparatorAround(t);return o>=0&&(t=o+this.thousandsSeparator.length),[ n,t ];
    } },{ key:"remove",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,e=this._adjustRangeWithSeparators(n,t),o=b(e,2);n=o[0],t=o[1];var a=this.value.slice(0,n),i=this.value.slice(t),s=this._separatorsCount(a.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(a+i));var r=this._separatorsCountFromSlice(a);return new I({ tailShift:(r-s)*this.thousandsSeparator.length });
    } },{ key:"nearestInputPos",value:function(n,t){
      if(!this.thousandsSeparator) {
        return n;
      }switch(t){
      case F.NONE:case F.LEFT:case F.FORCE_LEFT:var e=this._findSeparatorAround(n-1);if(e>=0){
        var o=e+this.thousandsSeparator.length;if(n<o||this.value.length<=o||t===F.FORCE_LEFT) {
          return e;
        }
      }break;case F.RIGHT:case F.FORCE_RIGHT:var a=this._findSeparatorAround(n);if(a>=0) {
        return a+this.thousandsSeparator.length;
      }
      }return n;
    } },{ key:"doValidate",value:function(n){
      var t=n.input?this._numberRegExpInput:this._numberRegExp,o=t.test(this._removeThousandsSeparators(this.value));if(o){
        var a=this.number;o=o&&!isNaN(a)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max);
      }return o&&w(f(e.prototype),"doValidate",this).call(this,n);
    } },{ key:"doCommit",value:function(){
      if(this.value){
        var n=this.number,t=n;null!=this.min&&(t=Math.max(t,this.min)),null!=this.max&&(t=Math.min(t,this.max)),t!==n&&(this.unmaskedValue=String(t));var o=this.value;this.normalizeZeros&&(o=this._normalizeZeros(o)),this.padFractionalZeros&&this.scale>0&&(o=this._padFractionalZeros(o)),this._value=o;
      }w(f(e.prototype),"doCommit",this).call(this);
    } },{ key:"_normalizeZeros",value:function(n){
      var t=this._removeThousandsSeparators(n).split(this.radix);return t[0]=t[0].replace(/^(\D*)(0*)(\d*)/,(function(n,t,e,o){
        return t+o;
      })),n.length&&!/\d$/.test(t[0])&&(t[0]=t[0]+"0"),t.length>1&&(t[1]=t[1].replace(/0*$/,""),t[1].length||(t.length=1)),this._insertThousandsSeparators(t.join(this.radix));
    } },{ key:"_padFractionalZeros",value:function(n){
      if(!n) {
        return n;
      }var t=n.split(this.radix);return t.length<2&&t.push(""),t[1]=t[1].padEnd(this.scale,"0"),t.join(this.radix);
    } },{ key:"unmaskedValue",get:function(){
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".");
    },set:function(n){
      y(f(e.prototype),"unmaskedValue",n.replace(".",this.radix),this,!0);
    } },{ key:"typedValue",get:function(){
      return Number(this.unmaskedValue);
    },set:function(n){
      y(f(e.prototype),"unmaskedValue",String(n),this,!0);
    } },{ key:"number",get:function(){
      return this.typedValue;
    },set:function(n){
      this.typedValue=n;
    } },{ key:"allowNegative",get:function(){
      return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0;
    } },{ key:"typedValueEquals",value:function(n){
      return(w(f(e.prototype),"typedValueEquals",this).call(this,n)||e.EMPTY_VALUES.includes(n)&&e.EMPTY_VALUES.includes(this.typedValue))&&!(0===n&&""===this.value);
    } }]),e;
  }(z);fn.DEFAULTS={ radix:",",thousandsSeparator:"",mapToRadix:[ "." ],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1 },fn.EMPTY_VALUES=[].concat(B(z.EMPTY_VALUES),[ 0 ]),N.MaskedNumber=fn;var cn=function(n){
    l(e,n);var t=m(e);function e(){
      return a(this,e),t.apply(this,arguments);
    }return s(e,[{ key:"_update",value:function(n){
      n.mask&&(n.validate=n.mask),w(f(e.prototype),"_update",this).call(this,n);
    } }]),e;
  }(z);N.MaskedFunction=cn;var un=[ "compiledMasks","currentMaskRef","currentMask" ],pn=function(n){
    l(e,n);var t=m(e);function e(n){
      var o;return a(this,e),o=t.call(this,Object.assign({},e.DEFAULTS,n)),o.currentMask=null,o;
    }return s(e,[{ key:"_update",value:function(n){
      w(f(e.prototype),"_update",this).call(this,n),"mask"in n&&(this.compiledMasks=Array.isArray(n.mask)?n.mask.map((function(n){
        return U(n);
      })):[]);
    } },{ key:"_appendCharRaw",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=this._applyDispatch(n,t);return this.currentMask&&e.aggregate(this.currentMask._appendChar(n,this.currentMaskFlags(t))),e;
    } },{ key:"_applyDispatch",value:function(){
      var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.tail&&null!=t._beforeTailState?t._beforeTailState._value:this.value,o=this.rawInputValue,a=t.tail&&null!=t._beforeTailState?t._beforeTailState._rawInputValue:o,i=o.slice(a.length),s=this.currentMask,r=new I,l=null===s||void 0===s?void 0:s.state;if(this.currentMask=this.doDispatch(n,Object.assign({},t)),this.currentMask) {
        if(this.currentMask!==s){
          if(this.currentMask.reset(),a){
            var f=this.currentMask.append(a,{ raw:!0 });r.tailShift=f.inserted.length-e.length;
          }i&&(r.tailShift+=this.currentMask.append(i,{ raw:!0,tail:!0 }).tailShift);
        }else {
          this.currentMask.state=l;
        }
      }return r;
    } },{ key:"_appendPlaceholder",value:function(){
      var n=this._applyDispatch.apply(this,arguments);return this.currentMask&&n.aggregate(this.currentMask._appendPlaceholder()),n;
    } },{ key:"_appendEager",value:function(){
      var n=this._applyDispatch.apply(this,arguments);return this.currentMask&&n.aggregate(this.currentMask._appendEager()),n;
    } },{ key:"currentMaskFlags",value:function(n){
      var t,e;return Object.assign({},n,{ _beforeTailState:(null===(t=n._beforeTailState)||void 0===t?void 0:t.currentMaskRef)===this.currentMask&&(null===(e=n._beforeTailState)||void 0===e?void 0:e.currentMask)||n._beforeTailState });
    } },{ key:"doDispatch",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(n,this,t);
    } },{ key:"doValidate",value:function(n){
      return w(f(e.prototype),"doValidate",this).call(this,n)&&(!this.currentMask||this.currentMask.doValidate(this.currentMaskFlags(n)));
    } },{ key:"doPrepare",value:function(n){
      var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=T(w(f(e.prototype),"doPrepare",this).call(this,n,t)),a=b(o,2),i=a[0],s=a[1];if(this.currentMask){
        var r,l=T(w(f(e.prototype),"doPrepare",this).call(this,i,this.currentMaskFlags(t))),c=b(l,2);i=c[0],r=c[1],s=s.aggregate(r);
      }return[ i,s ];
    } },{ key:"reset",value:function(){
      var n;null===(n=this.currentMask)||void 0===n||n.reset(),this.compiledMasks.forEach((function(n){
        return n.reset();
      }));
    } },{ key:"value",get:function(){
      return this.currentMask?this.currentMask.value:"";
    },set:function(n){
      y(f(e.prototype),"value",n,this,!0);
    } },{ key:"unmaskedValue",get:function(){
      return this.currentMask?this.currentMask.unmaskedValue:"";
    },set:function(n){
      y(f(e.prototype),"unmaskedValue",n,this,!0);
    } },{ key:"typedValue",get:function(){
      return this.currentMask?this.currentMask.typedValue:"";
    },set:function(n){
      var t=String(n);this.currentMask&&(this.currentMask.typedValue=n,t=this.currentMask.unmaskedValue),this.unmaskedValue=t;
    } },{ key:"isComplete",get:function(){
      var n;return Boolean(null===(n=this.currentMask)||void 0===n?void 0:n.isComplete);
    } },{ key:"isFilled",get:function(){
      var n;return Boolean(null===(n=this.currentMask)||void 0===n?void 0:n.isFilled);
    } },{ key:"remove",value:function(){
      var n,t=new I;this.currentMask&&t.aggregate((n=this.currentMask).remove.apply(n,arguments)).aggregate(this._applyDispatch());return t;
    } },{ key:"state",get:function(){
      var n;return Object.assign({},w(f(e.prototype),"state",this),{ _rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map((function(n){
        return n.state;
      })),currentMaskRef:this.currentMask,currentMask:null===(n=this.currentMask)||void 0===n?void 0:n.state });
    },set:function(n){
      var t=n.compiledMasks,o=n.currentMaskRef,a=n.currentMask,i=d(n,un);this.compiledMasks.forEach((function(n,e){
        return n.state=t[e];
      })),null!=o&&(this.currentMask=o,this.currentMask.state=a),y(f(e.prototype),"state",i,this,!0);
    } },{ key:"extractInput",value:function(){
      var n;return this.currentMask?(n=this.currentMask).extractInput.apply(n,arguments):"";
    } },{ key:"extractTail",value:function(){
      for(var n,t,o=arguments.length,a=new Array(o),i=0;i<o;i++) {
        a[i]=arguments[i];
      }return this.currentMask?(n=this.currentMask).extractTail.apply(n,a):(t=w(f(e.prototype),"extractTail",this)).call.apply(t,[ this ].concat(a));
    } },{ key:"doCommit",value:function(){
      this.currentMask&&this.currentMask.doCommit(),w(f(e.prototype),"doCommit",this).call(this);
    } },{ key:"nearestInputPos",value:function(){
      for(var n,t,o=arguments.length,a=new Array(o),i=0;i<o;i++) {
        a[i]=arguments[i];
      }return this.currentMask?(n=this.currentMask).nearestInputPos.apply(n,a):(t=w(f(e.prototype),"nearestInputPos",this)).call.apply(t,[ this ].concat(a));
    } },{ key:"overwrite",get:function(){
      return this.currentMask?this.currentMask.overwrite:w(f(e.prototype),"overwrite",this);
    },set:function(n){
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    } },{ key:"eager",get:function(){
      return this.currentMask?this.currentMask.eager:w(f(e.prototype),"eager",this);
    },set:function(n){
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    } },{ key:"maskEquals",value:function(n){
      return Array.isArray(n)&&this.compiledMasks.every((function(t,e){
        var o;return t.maskEquals(null===(o=n[e])||void 0===o?void 0:o.mask);
      }));
    } },{ key:"typedValueEquals",value:function(n){
      var t;return Boolean(null===(t=this.currentMask)||void 0===t?void 0:t.typedValueEquals(n));
    } }]),e;
  }(z);pn.DEFAULTS={ dispatch:function(n,t,e){
    if(t.compiledMasks.length){
      var o=t.rawInputValue,a=t.compiledMasks.map((function(a,i){
        a.reset(),a.append(o,{ raw:!0 }),a.append(n,t.currentMaskFlags(e));var s=a.rawInputValue.length;return{ weight:s,index:i };
      }));return a.sort((function(n,t){
        return t.weight-n.weight;
      })),t.compiledMasks[a[0].index];
    }
  } },N.MaskedDynamic=pn;var dn={ MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue" };function hn(n){
    var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:dn.MASKED,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:dn.MASKED,o=U(n);return function(n){
      return o.runIsolated((function(o){
        return o[t]=n,o[e];
      }));
    };
  }function An(n){
    for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++) {
      e[o-1]=arguments[o];
    }return hn.apply(void 0,e)(n);
  }N.PIPE_TYPE=dn,N.createPipe=hn,N.pipe=An;try{
    globalThis.IMask=N;
  }catch(je){}var mn=e("2b0e"),gn=function(n,t){
    return gn=Object.setPrototypeOf||{ __proto__:[]}instanceof Array&&function(n,t){
      n.__proto__=t;
    }||function(n,t){
      for(var e in t) {
        Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);
      }
    },gn(n,t);
  };function wn(n,t){
    if("function"!==typeof t&&null!==t) {
      throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");
    }function e(){
      this.constructor=n;
    }gn(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e);
  }var vn,yn=function(){
    return yn=Object.assign||function(n){
      for(var t,e=1,o=arguments.length;e<o;e++) {
        for(var a in t=arguments[e],t) {
          Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);
        }
      }return n;
    },yn.apply(this,arguments);
  };function bn(n){
    var t="function"===typeof Symbol&&Symbol.iterator,e=t&&n[t],o=0;if(e) {
      return e.call(n);
    }if(n&&"number"===typeof n.length) {
      return{ next:function(){
        return n&&o>=n.length&&(n=void 0),{ value:n&&n[o++],done:!n };
      } };
    }throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.");
  }function Bn(n,t){
    var e="function"===typeof Symbol&&n[Symbol.iterator];if(!e) {
      return n;
    }var o,a,i=e.call(n),s=[];try{
      while((void 0===t||t-- >0)&&!(o=i.next()).done) {
        s.push(o.value);
      }
    }catch(r){
      a={ error:r };
    }finally{
      try{
        o&&!o.done&&(e=i["return"])&&e.call(i);
      }finally{
        if(a) {
          throw a.error;
        }
      }
    }return s;
  }function Sn(n,t,e){
    if(e||2===arguments.length) {
      for(var o,a=0,i=t.length;a<i;a++) {
        !o&&a in t||(o||(o=Array.prototype.slice.call(t,0,a)),o[a]=t[a]);
      }
    }return n.concat(o||Array.prototype.slice.call(t));
  }var Cn=[],On=function(){
    function n(n){
      this.active=!0,this.effects=[],this.cleanups=[],this.vm=n;
    }return n.prototype.run=function(n){
      if(this.active) {
        try{
          return this.on(),n();
        }finally{
          this.off();
        }
      }else {
        0;
      }
    },n.prototype.on=function(){
      this.active&&(Cn.push(this),vn=this);
    },n.prototype.off=function(){
      this.active&&(Cn.pop(),vn=Cn[Cn.length-1]);
    },n.prototype.stop=function(){
      this.active&&(this.vm.$destroy(),this.effects.forEach((function(n){
        return n.stop();
      })),this.cleanups.forEach((function(n){
        return n();
      })),this.active=!1);
    },n;
  }();(function(n){
    function t(t){
      void 0===t&&(t=!1);var e=this,o=void 0;return zn((function(){
        o=dt(Ln());
      })),e=n.call(this,o)||this,t||kn(e),e;
    }wn(t,n);
  })(On);function kn(n,t){
    var e;if(t=t||vn,t&&t.active) {
      t.effects.push(n);
    }else{
      var o=null===(e=Un())||void 0===e?void 0:e.proxy;o&&o.$on("hook:destroyed",(function(){
        return n.stop();
      }));
    }
  }function En(){
    return vn;
  }function xn(){
    var n,t;return(null===(n=En())||void 0===n?void 0:n.vm)||(null===(t=Un())||void 0===t?void 0:t.proxy);
  }function _n(n){
    if(!n.scope){
      var t=new On(n.proxy);n.scope=t,n.proxy.$on("hook:destroyed",(function(){
        return t.stop();
      }));
    }return n.scope;
  }var Mn=void 0;try{
    var In=e("2b0e");In&&Tn(In)?Mn=In:In&&"default"in In&&Tn(In.default)&&(Mn=In.default);
  }catch(Te){}var $n=null,Fn=null,Rn=!0,jn="__composition_api_installed__";function Tn(n){
    return n&&ft(n)&&"Vue"===n.name;
  }function Dn(n){
    return $n&&Jn(n,jn);
  }function Ln(){
    return $n;
  }function Pn(){
    var n=$n||Mn;return n;
  }function Nn(n){
    $n=n,Object.defineProperty(n,jn,{ configurable:!0,writable:!0,value:!0 });
  }function zn(n){
    var t=Rn;Rn=!1;try{
      n();
    }finally{
      Rn=t;
    }
  }function Vn(n){
    if(Rn){
      var t=Fn;null===t||void 0===t||t.scope.off(),Fn=n,null===Fn||void 0===Fn||Fn.scope.on();
    }
  }function Un(){
    return Fn;
  }var Hn=new WeakMap;function qn(n){
    if(Hn.has(n)) {
      return Hn.get(n);
    }var t={ proxy:n,update:n.$forceUpdate,type:n.$options,uid:n._uid,emit:n.$emit.bind(n),parent:null,root:null };_n(t);var e=[ "data","props","attrs","refs","vnode","slots" ];return e.forEach((function(e){
      Qn(t,e,{ get:function(){
        return n["$".concat(e)];
      } });
    })),Qn(t,"isMounted",{ get:function(){
      return n._isMounted;
    } }),Qn(t,"isUnmounted",{ get:function(){
      return n._isDestroyed;
    } }),Qn(t,"isDeactivated",{ get:function(){
      return n._inactive;
    } }),Qn(t,"emitted",{ get:function(){
      return n._events;
    } }),Hn.set(n,t),n.$parent&&(t.parent=qn(n.$parent)),n.$root&&(t.root=qn(n.$root)),t;
  }var Wn=function(n){
    return Object.prototype.toString.call(n);
  };function Gn(n){
    return"function"===typeof n&&/native code/.test(n.toString());
  }var Yn="undefined"!==typeof Symbol&&Gn(Symbol)&&"undefined"!==typeof Reflect&&Gn(Reflect.ownKeys),Zn=function(n){
    return n;
  };function Qn(n,t,e){
    var o=e.get,a=e.set;Object.defineProperty(n,t,{ enumerable:!0,configurable:!0,get:o||Zn,set:a||Zn });
  }function Kn(n,t,e,o){
    Object.defineProperty(n,t,{ value:e,enumerable:!!o,writable:!0,configurable:!0 });
  }function Jn(n,t){
    return Object.hasOwnProperty.call(n,t);
  }function Xn(n,t){
    if(!n) {
      throw new Error("[vue-composition-api] ".concat(t));
    }
  }function nt(n){
    return Array.isArray(n);
  }var tt=Object.prototype.toString,et=function(n){
      return tt.call(n);
    },ot=function(n){
      return"[object Map]"===et(n);
    },at=function(n){
      return"[object Set]"===et(n);
    },it=4294967295;function st(n){
    var t=parseFloat(String(n));return t>=0&&Math.floor(t)===t&&isFinite(n)&&t<=it;
  }function rt(n){
    return null!==n&&"object"===typeof n;
  }function lt(n){
    return"[object Object]"===Wn(n);
  }function ft(n){
    return"function"===typeof n;
  }function ct(n,t,e){
    if("undefined"===typeof window||"undefined"===typeof console) {
      throw n;
    }console.error(n);
  }function ut(n,t){
    return n===t?0!==n||1/n===1/t:n!==n&&t!==t;
  }function pt(n,t){
    return t=t||Un(),t;
  }function dt(n,t){
    void 0===t&&(t={});var e=n.config.silent;n.config.silent=!0;var o=new n(t);return n.config.silent=e,o;
  }function ht(n){
    var t=Ln();return t&&n instanceof t;
  }function At(n,t){
    return function(){
      for(var e=[],o=0;o<arguments.length;o++) {
        e[o]=arguments[o];
      }if(n.$scopedSlots[t]) {
        return n.$scopedSlots[t].apply(n,e);
      }
    };
  }function mt(n,t){
    var e;if(n){
      if(n._normalized) {
        return n._normalized;
      }for(var o in e={},n) {
        n[o]&&"$"!==o[0]&&(e[o]=!0);
      }
    }else {
      e={};
    }for(var o in t) {
      o in e||(e[o]=!0);
    }return e;
  }function gt(n){
    return Yn?Symbol.for(n):n;
  }var wt=gt("composition-api.preFlushQueue"),vt=gt("composition-api.postFlushQueue"),yt="composition-api.refKey",bt=new WeakMap,Bt=new WeakMap,St=new WeakMap;function Ct(n,t,e){
    var o=Ln(),a=o.util,i=(a.warn,a.defineReactive);var s=n.__ob__;function r(){
      s&&rt(e)&&!Jn(e,"__ob__")&&Dt(e);
    }if(nt(n)){
      if(st(t)) {
        return n.length=Math.max(n.length,t),n.splice(t,1,e),r(),e;
      }if("length"===t&&e!==n.length) {
        return n.length=e,null===s||void 0===s||s.dep.notify(),e;
      }
    }return t in n&&!(t in Object.prototype)?(n[t]=e,r(),e):n._isVue||s&&s.vmCount?e:s?(i(s.value,t,e),jt(n,t,e),r(),s.dep.notify(),e):(n[t]=e,e);
  }var Ot=function(){
    function n(n){
      var t=n.get,e=n.set;Qn(this,"value",{ get:t,set:e });
    }return n;
  }();function kt(n,t,e){
    void 0===t&&(t=!1),void 0===e&&(e=!1);var o=new Ot(n);e&&(o.effect=!0);var a=Object.seal(o);return t&&St.set(a,!0),a;
  }function Et(n){
    var t;if(xt(n)) {
      return n;
    }var e=Nt((t={},t[yt]=n,t));return kt({ get:function(){
      return e[yt];
    },set:function(n){
      return e[yt]=n;
    } });
  }function xt(n){
    return n instanceof Ot;
  }function _t(n){
    if(!lt(n)) {
      return n;
    }var t={};for(var e in n) {
      t[e]=Mt(n,e);
    }return t;
  }function Mt(n,t){
    t in n||Ct(n,t,void 0);var e=n[t];return xt(e)?e:kt({ get:function(){
      return n[t];
    },set:function(e){
      return n[t]=e;
    } });
  }var It="__v_skip";function $t(n){
    var t;return Boolean(n&&Jn(n,"__ob__")&&"object"===typeof n.__ob__&&(null===(t=n.__ob__)||void 0===t?void 0:t[It]));
  }function Ft(n){
    var t;return Boolean(n&&Jn(n,"__ob__")&&"object"===typeof n.__ob__&&!(null===(t=n.__ob__)||void 0===t?void 0:t[It]));
  }function Rt(n){
    if(!(!lt(n)||$t(n)||nt(n)||xt(n)||ht(n)||bt.has(n))){
      bt.set(n,!0);for(var t=Object.keys(n),e=0;e<t.length;e++) {
        jt(n,t[e]);
      }
    }
  }function jt(n,t,e){
    if("__ob__"!==t&&!$t(n[t])){
      var o,a,i=Object.getOwnPropertyDescriptor(n,t);if(i){
        if(!1===i.configurable) {
          return;
        }o=i.get,a=i.set,o&&!a||2!==arguments.length||(e=n[t]);
      }Rt(e),Qn(n,t,{ get:function(){
        var a=o?o.call(n):e;return t!==yt&&xt(a)?a.value:a;
      },set:function(i){
        o&&!a||(t!==yt&&xt(e)&&!xt(i)?e.value=i:a?(a.call(n,i),e=i):e=i,Rt(i));
      } });
    }
  }function Tt(n){
    var t,e=Pn();if(e.observable) {
      t=e.observable(n);
    }else{
      var o=dt(e,{ data:{ $$state:n }});t=o._data.$$state;
    }return Jn(t,"__ob__")||Dt(t),t;
  }function Dt(n,t){
    var e,o;if(void 0===t&&(t=new Set),!t.has(n)&&!Jn(n,"__ob__")&&Object.isExtensible(n)){
      Kn(n,"__ob__",Lt(n)),t.add(n);try{
        for(var a=bn(Object.keys(n)),i=a.next();!i.done;i=a.next()){
          var s=i.value,r=n[s];(lt(r)||nt(r))&&!$t(r)&&Object.isExtensible(r)&&Dt(r,t);
        }
      }catch(l){
        e={ error:l };
      }finally{
        try{
          i&&!i.done&&(o=a.return)&&o.call(a);
        }finally{
          if(e) {
            throw e.error;
          }
        }
      }
    }
  }function Lt(n){
    return void 0===n&&(n={}),{ value:n,dep:{ notify:Zn,depend:Zn,addSub:Zn,removeSub:Zn }};
  }function Pt(){
    return Tt({}).__ob__;
  }function Nt(n){
    if(!rt(n)) {
      return n;
    }if(!lt(n)&&!nt(n)||$t(n)||!Object.isExtensible(n)) {
      return n;
    }var t=Tt(n);return Rt(t),t;
  }function zt(n){
    return St.set(n,!0),n;
  }var Vt=function(n){
    return"on".concat(n[0].toUpperCase()+n.slice(1));
  };function Ut(n){
    return function(t,e){
      var o=pt(Vt(n),e);return o&&Ht(Ln(),o,n,t);
    };
  }function Ht(n,t,e,o){
    var a=t.proxy.$options,i=n.config.optionMergeStrategies[e],s=qt(t,o);return a[e]=i(a[e],s),s;
  }function qt(n,t){
    return function(){
      for(var e=[],o=0;o<arguments.length;o++) {
        e[o]=arguments[o];
      }var a=Un();Vn(n);try{
        return t.apply(void 0,Sn([],Bn(e),!1));
      }finally{
        Vn(a);
      }
    };
  }Ut("beforeMount");var Wt,Gt=Ut("mounted"),Yt=(Ut("beforeUpdate"),Ut("updated"),Ut("beforeDestroy"),Ut("destroyed"));Ut("errorCaptured"),Ut("activated"),Ut("deactivated"),Ut("serverPrefetch");function Zt(){
    te(this,wt);
  }function Qt(){
    te(this,vt);
  }function Kt(n){
    return void 0!==n[wt];
  }function Jt(n){
    n[wt]=[],n[vt]=[],n.$on("hook:beforeUpdate",Zt),n.$on("hook:updated",Qt);
  }function Xt(n){
    return yn({ immediate:!1,deep:!1,flush:"pre" },n);
  }function ne(){
    var n=xn();return n?Kt(n)||Jt(n):(Wt||(Wt=dt(Ln())),n=Wt),n;
  }function te(n,t){
    for(var e=n[t],o=0;o<e.length;o++) {
      e[o]();
    }e.length=0;
  }function ee(n,t,e){
    var o=function(){
      n.$nextTick((function(){
        n[wt].length&&te(n,wt),n[vt].length&&te(n,vt);
      }));
    };switch(e){
    case"pre":o(),n[wt].push(t);break;case"post":o(),n[vt].push(t);break;default:Xn(!1,'flush must be one of ["post", "pre", "sync"], but got '.concat(e));break;
    }
  }function oe(n,t,e,o){
    var a=n._watchers.length;return n.$watch(t,e,{ immediate:o.immediateInvokeCallback,deep:o.deep,lazy:o.noRun,sync:o.sync,before:o.before }),n._watchers[a];
  }function ae(n,t){
    var e=n.teardown;n.teardown=function(){
      for(var o=[],a=0;a<arguments.length;a++) {
        o[a]=arguments[a];
      }e.apply(n,o),t();
    };
  }function ie(n,t,e,o){
    var a;var i,s=o.flush,r="sync"===s,l=function(t){
        i=function(){
          try{
            t();
          }catch(e){
            ct(e,n,"onCleanup()");
          }
        };
      },f=function(){
        i&&(i(),i=null);
      },c=function(t){
        return r||n===Wt?t:function(){
          for(var e=[],o=0;o<arguments.length;o++) {
            e[o]=arguments[o];
          }return ee(n,(function(){
            t.apply(void 0,Sn([],Bn(e),!1));
          }),s);
        };
      };if(null===e){
      var u=!1,p=function(){
          if(!u) {
            try{
              u=!0,t(l);
            }finally{
              u=!1;
            }
          }
        },d=oe(n,p,Zn,{ deep:o.deep||!1,sync:r,before:f });ae(d,f),d.lazy=!1;var h=d.get.bind(d);return d.get=c(h),function(){
        d.teardown();
      };
    }var A,m=o.deep,g=!1;if(xt(t)?A=function(){
      return t.value;
    }:Ft(t)?(A=function(){
      return t;
    },m=!0):nt(t)?(g=!0,A=function(){
      return t.map((function(n){
        return xt(n)?n.value:Ft(n)?re(n):ft(n)?n():Zn;
      }));
    }):A=ft(t)?t:Zn,m){
      var w=A;A=function(){
        return re(w());
      };
    }var v=function(n,t){
        if(m||!g||!n.every((function(n,e){
          return ut(n,t[e]);
        }))) {
          return f(),e(n,t,l);
        }
      },y=c(v);if(o.immediate){
      var b=y,B=function(n,t){
        return B=b,v(n,nt(n)?[]:t);
      };y=function(n,t){
        return B(n,t);
      };
    }var S=n.$watch(A,y,{ immediate:o.immediate,deep:m,sync:r }),C=n._watchers[n._watchers.length-1];return Ft(C.value)&&(null===(a=C.value.__ob__)||void 0===a?void 0:a.dep)&&m&&C.value.__ob__.dep.addSub({ update:function(){
      C.run();
    } }),ae(C,f),function(){
      S();
    };
  }function se(n,t,e){
    var o=null;ft(t)?o=t:(e=t,o=null);var a=Xt(e),i=ne();return ie(i,n,o,a);
  }function re(n,t){
    if(void 0===t&&(t=new Set),!rt(n)||t.has(n)||Bt.has(n)) {
      return n;
    }if(t.add(n),xt(n)) {
      re(n.value,t);
    }else if(nt(n)) {
      for(var e=0;e<n.length;e++) {
        re(n[e],t);
      }
    }else if(at(n)||ot(n)) {
      n.forEach((function(n){
        re(n,t);
      }));
    }else if(lt(n)) {
      for(var o in n) {
        re(n[o],t);
      }
    }return n;
  }var le,fe=function(){
    for(var n,t=[],e=0;e<arguments.length;e++) {
      t[e]=arguments[e];
    }var o=(null===this||void 0===this?void 0:this.proxy)||(null===(n=Un())||void 0===n?void 0:n.proxy);return o?o.$createElement.apply(o,t):(le||(le=dt(Ln()).$createElement),le.apply(le,t));
  };function ce(n,t,e){
    var o=n.__composition_api_state__=n.__composition_api_state__||{};o[t]=e;
  }function ue(n,t){
    return(n.__composition_api_state__||{})[t];
  }var pe={ set:ce,get:ue };function de(n,t,e){
    var o=n.$options.props;t in n||o&&Jn(o,t)||(xt(e)?Qn(n,t,{ get:function(){
      return e.value;
    },set:function(n){
      e.value=n;
    } }):Qn(n,t,{ get:function(){
      return Ft(e)&&e.__ob__.dep.depend(),e;
    },set:function(n){
      e=n;
    } }));
  }function he(n){
    var t=pe.get(n,"rawBindings")||{};if(t&&Object.keys(t).length){
      for(var e=n.$refs,o=pe.get(n,"refs")||[],a=0;a<o.length;a++){
        var i=o[a],s=t[i];!e[i]&&s&&xt(s)&&(s.value=null);
      }var r=Object.keys(e),l=[];for(a=0;a<r.length;a++){
        i=r[a],s=t[i];e[i]&&s&&xt(s)&&(s.value=e[i],l.push(i));
      }pe.set(n,"refs",l);
    }
  }function Ae(n){
    var t=[ n._vnode ];while(t.length){
      var e=t.pop();if(e&&(e.context&&he(e.context),e.children)) {
        for(var o=0;o<e.children.length;++o) {
          t.push(e.children[o]);
        }
      }
    }
  }function me(n,t){
    var e,o;if(n){
      var a=pe.get(n,"attrBindings");if(a||t){
        if(!a){
          var i=Nt({});a={ ctx:t,data:i },pe.set(n,"attrBindings",a),Qn(t,"attrs",{ get:function(){
            return null===a||void 0===a?void 0:a.data;
          },set:function(){} });
        }var s=n.$attrs,r=function(t){
          Jn(a.data,t)||Qn(a.data,t,{ get:function(){
            return n.$attrs[t];
          } });
        };try{
          for(var l=bn(Object.keys(s)),f=l.next();!f.done;f=l.next()){
            var c=f.value;r(c);
          }
        }catch(u){
          e={ error:u };
        }finally{
          try{
            f&&!f.done&&(o=l.return)&&o.call(l);
          }finally{
            if(e) {
              throw e.error;
            }
          }
        }
      }
    }
  }function ge(n,t){
    var e=n.$options._parentVnode;if(e){
      for(var o=pe.get(n,"slots")||[],a=mt(e.data.scopedSlots,n.$slots),i=0;i<o.length;i++){
        var s=o[i];a[s]||delete t[s];
      }var r=Object.keys(a);for(i=0;i<r.length;i++){
        s=r[i];t[s]||(t[s]=At(n,s));
      }pe.set(n,"slots",r);
    }
  }function we(n,t,e){
    var o=Un();Vn(n);try{
      return t(n);
    }catch(a){
      if(!e) {
        throw a;
      }e(a);
    }finally{
      Vn(o);
    }
  }function ve(n){
    function t(){
      var n=this,t=n.$options,o=t.setup,a=t.render;if(a&&(t.render=function(){
        for(var t=this,e=[],o=0;o<arguments.length;o++) {
          e[o]=arguments[o];
        }return we(qn(n),(function(){
          return a.apply(t,e);
        }));
      }),o&&ft(o)){
        var i=t.data;t.data=function(){
          return e(n,n.$props),ft(i)?i.call(n,n):i||{};
        };
      }
    }function e(n,t){
      void 0===t&&(t={});var e,s=n.$options.setup,r=i(n),l=qn(n);if(l.setupContext=r,Kn(t,"__ob__",Pt()),ge(n,r.slots),we(l,(function(){
        e=s(t,r);
      })),e) {
        if(ft(e)){
          var f=e;n.$options.render=function(){
            return ge(n,r.slots),we(l,(function(){
              return f();
            }));
          };
        }else if(rt(e)){
          Ft(e)&&(e=_t(e)),pe.set(n,"rawBindings",e);var c=e;Object.keys(c).forEach((function(t){
            var e=c[t];if(!xt(e)) {
              if(Ft(e)) {
nt(e)&&(e=Et(e));
}else if(ft(e)){
                var i=e;e=e.bind(n),Object.keys(i).forEach((function(n){
                  e[n]=i[n];
                }));
              }else {
rt(e)?a(e)&&o(e):e=Et(e);
}
            }de(n,t,e);
          }));
        }else {
          0;
        }
      }
    }function o(n,t){
      if(void 0===t&&(t=new Set),!t.has(n)&&lt(n)&&!xt(n)&&!Ft(n)&&!$t(n)){
        var e=Ln(),a=e.util.defineReactive;Object.keys(n).forEach((function(e){
          var i=n[e];a(n,e,i),i&&(t.add(i),o(i,t));
        }));
      }
    }function a(n,t){
      return void 0===t&&(t=new Map),t.has(n)?t.get(n):(t.set(n,!1),nt(n)&&Ft(n)?(t.set(n,!0),!0):!(!lt(n)||$t(n)||xt(n))&&Object.keys(n).some((function(e){
        return a(n[e],t);
      })));
    }function i(n){
      var t={ slots:{}},e=[ "root","parent","refs","listeners","isServer","ssrContext" ],o=[ "emit" ];return e.forEach((function(e){
        var o="$".concat(e);Qn(t,e,{ get:function(){
          return n[o];
        },set:function(){} });
      })),me(n,t),o.forEach((function(e){
        var o="$".concat(e);Qn(t,e,{ get:function(){
          return function(){
            for(var t=[],e=0;e<arguments.length;e++) {
              t[e]=arguments[e];
            }var a=n[o];a.apply(n,t);
          };
        } });
      })),t;
    }n.mixin({ beforeCreate:t,mounted:function(){
      Ae(this);
    },beforeUpdate:function(){
      me(this);
    },updated:function(){
      Ae(this);
    } });
  }function ye(n,t){
    if(!n) {
      return t;
    }if(!t) {
      return n;
    }for(var e,o,a,i=Yn?Reflect.ownKeys(n):Object.keys(n),s=0;s<i.length;s++) {
      e=i[s],"__ob__"!==e&&(o=t[e],a=n[e],Jn(t,e)?o!==a&&lt(o)&&!xt(o)&&lt(a)&&!xt(a)&&ye(a,o):t[e]=a);
    }return t;
  }function be(n){
    Dn(n)||(n.config.optionMergeStrategies.setup=function(n,t){
      return function(e,o){
        return ye(ft(n)?n(e,o)||{}:void 0,ft(t)?t(e,o)||{}:void 0);
      };
    },Nn(n),ve(n));
  }var Be={ install:function(n){
    return be(n);
  } };function Se(n){
    n=n||mn["default"],n&&!n["__composition_api_installed__"]&&n.use(Be);
  }"undefined"!==typeof window&&window.Vue&&window.Vue.use(Be),Se(mn["default"]);var Ce=!1,Oe=(mn["default"],mn["default"].version,{ mask:{},prepare:Function,validate:Function,commit:Function,overwrite:{ type:Boolean,required:!1,default:void 0 },placeholderChar:String,lazy:{ type:Boolean,required:!1,default:void 0 },definitions:Object,blocks:Object,pattern:String,format:Function,parse:Function,autofix:{ type:Boolean,required:!1,default:void 0 },radix:String,thousandsSeparator:String,mapToRadix:Array,scale:Number,signed:{ type:Boolean,required:!1,default:void 0 },normalizeZeros:{ type:Boolean,required:!1,default:void 0 },padFractionalZeros:{ type:Boolean,required:!1,default:void 0 },min:[ Number,Date ],max:[ Number,Date ],dispatch:Function });function ke(n){
    var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.emit,o=t.onAccept,a=t.onComplete;n=xt(n)?n:Et(n);var i,s,r,l,f=Et(),c=Et(),u=Et(),p=Et(),d=Et();function h(){
      l=d.value=c.value.typedValue,r=p.value=c.value.unmaskedValue,s=u.value=c.value.value,e&&(e("accept",s),e("accept:masked",s),e("accept:typed",l),e("accept:unmasked",r)),o&&o();
    }function A(){
      e&&(e("complete",s),e("complete:masked",s),e("complete:typed",l),e("complete:unmasked",r)),a&&a();
    }function m(){
      i=f.value;var t=n.value;i&&null!==t&&void 0!==t&&t.mask&&(c.value=N(i,t).on("accept",h).on("complete",A),h());
    }function g(){
      c.value&&(c.value.destroy(),c.value=null);
    }return Gt(m),Yt(g),se(p,(function(){
      c.value&&(r=c.value.unmaskedValue=p.value);
    })),se(u,(function(){
      c.value&&(s=c.value.value=u.value);
    })),se(d,(function(){
      c.value&&(l=c.value.typedValue=d.value);
    })),se([ f,n ],(function(){
      var t=f.value,e=n.value;null!==e&&void 0!==e&&e.mask&&t===i||g(),t&&(c.value?c.value.updateOptions(e):m());
    })),{ el:f,mask:zt(c),masked:u,unmasked:p,typed:d };
  }var Ee=[ "typed","unmasked","value","modelValue" ];function xe(n){
    return n=Object.assign({},n),Object.keys(n).filter((function(t){
      return void 0===n[t];
    })).forEach((function(t){
      delete n[t];
    })),Ee.forEach((function(t){
      return delete n[t];
    })),n;
  }var _e;Object.assign({ modelValue:String,value:String,unmasked:String,typed:{}},Oe),Object.assign({ value:{},unmask:{ validator:function(n){
    return"typed"===n||"boolean"===typeof n;
  } }},Oe);function Me(n,t,e){
    return t in n?Object.defineProperty(n,t,{ value:e,enumerable:!0,configurable:!0,writable:!0 }):n[t]=e,n;
  }var Ie=(_e={ name:"imask" },Me(_e,Ce?"beforeMount":"bind",(function(n,t){
    var e=t.value;e&&Fe(n,e);
  })),Me(_e,Ce?"updated":"update",(function(n,t){
    var e=t.value;e?n.maskRef?(n.maskRef.updateOptions(e),n.value!==n.maskRef.value&&n.maskRef._onChange()):Fe(n,e):Re(n);
  })),Me(_e,Ce?"unmounted":"unbind",(function(n){
    Re(n);
  })),_e);function $e(n,t,e){
    var o=document.createEvent("CustomEvent");o.initCustomEvent(t,!0,!0,e),n.dispatchEvent(o);
  }function Fe(n,t){
    n.maskRef=N(n,t).on("accept",(function(){
      return $e(n,"accept",n.maskRef);
    })).on("complete",(function(){
      return $e(n,"complete",n.maskRef);
    }));
  }function Re(n){
    n.maskRef&&(n.maskRef.destroy(),delete n.maskRef);
  }
},"3f81":function(n,t,e){
  var o=e("49be"),a=e("d521"),i=e("b47c").f,s=o("unscopables"),r=Array.prototype;void 0==r[s]&&i(r,s,{ configurable:!0,value:a(null) }),n.exports=function(n){
    r[s][n]=!0;
  };
},"408a":function(n,t,e){
  var o=e("e330");n.exports=o(1..valueOf);
},"428f":function(n,t,e){
  var o=e("da84");n.exports=o;
},4329:function(n,t,e){
  var o=e("b96e"),a=e("49be"),i=e("7bb6"),s=a("species");n.exports=function(n){
    return i>=51||!o((function(){
      var t=[],e=t.constructor={};return e[s]=function(){
        return{ foo:1 };
      },1!==t[n](Boolean).foo;
    }));
  };
},"442b":function(n,t,e){
  var o=e("5aeb");n.exports=function(n){
    return o(n.length);
  };
},4707:function(n,t,e){
  "use strict";e("9fcb");
},4750:function(n,t,e){
  var o=e("550a"),a=e("85c6"),i=e("cbe0"),s=e("b481"),r=o("".charAt),l=o("".charCodeAt),f=o("".slice),c=function(n){
    return function(t,e){
      var o,c,u=i(s(t)),p=a(e),d=u.length;return p<0||p>=d?n?"":void 0:(o=l(u,p),o<55296||o>56319||p+1===d||(c=l(u,p+1))<56320||c>57343?n?r(u,p):o:n?f(u,p,p+2):c-56320+(o-55296<<10)+65536);
    };
  };n.exports={ codeAt:c(!1),charAt:c(!0) };
},4795:function(n,t,e){
  e("2ca8"),e("1d57");
},"499e":function(n,t,e){
  "use strict";var o=e("7c8d");function a(n){
    var t=[ 1/0,1/0,-1/0,-1/0 ];return Object(o["a"])(n,(function(n){
      t[0]>n[0]&&(t[0]=n[0]),t[1]>n[1]&&(t[1]=n[1]),t[2]<n[0]&&(t[2]=n[0]),t[3]<n[1]&&(t[3]=n[1]);
    })),t;
  }t["a"]=a;
},"49be":function(n,t,e){
  var o=e("0885"),a=e("c0fe"),i=e("e246"),s=e("b0a2"),r=e("388c"),l=e("8a7e"),f=o.Symbol,c=a("wks"),u=l?f["for"]||f:f&&f.withoutSetter||s;n.exports=function(n){
    return i(c,n)||(c[n]=r&&i(f,n)?f[n]:u("Symbol."+n)),c[n];
  };
},"4b1e":function(n,t,e){
  "use strict";e("24a1");
},"4c1c":function(n,t,e){
  var o=e("bc99"),a=o("span").classList,i=a&&a.constructor&&a.constructor.prototype;n.exports=i===Object.prototype?void 0:i;
},"4dc3":function(n,t,e){
  var o=e("6640"),a=e("9b24"),i=e("d6cc"),s=o(o.bind);n.exports=function(n,t){
    return a(n),void 0===t?n:i?s(n,t):function(){
      return n.apply(t,arguments);
    };
  };
},"4df4":function(n,t,e){
  "use strict";var o=e("da84"),a=e("0366"),i=e("c65b"),s=e("7b0b"),r=e("9bdd"),l=e("e95a"),f=e("68ee"),c=e("07fa"),u=e("8418"),p=e("9a1f"),d=e("35a1"),h=o.Array;n.exports=function(n){
    var t=s(n),e=f(this),o=arguments.length,A=o>1?arguments[1]:void 0,m=void 0!==A;m&&(A=a(A,o>2?arguments[2]:void 0));var g,w,v,y,b,B,S=d(t),C=0;if(!S||this==h&&l(S)) {
      for(g=c(t),w=e?new this(g):h(g);g>C;C++) {
        B=m?A(t[C],C):t[C],u(w,C,B);
      }
    }else {
      for(y=p(t,S),b=y.next,w=e?new this:[];!(v=i(b,y)).done;C++) {
        B=m?r(y,A,[ v.value,C ],!0):v.value,u(w,C,B);
      }
    }return w.length=C,w;
  };
},"4ecc":function(n,t,e){
  var o=e("db82"),a=e("b47c"),i=e("2bfb"),s=e("cc3e");n.exports=function(n,t,e,r){
    r||(r={});var l=r.enumerable,f=void 0!==r.name?r.name:t;if(o(e)&&i(e,f,r),r.global) {
      l?n[t]=e:s(t,e);
    }else{
      try{
        r.unsafe?n[t]&&(l=!0):delete n[t];
      }catch(c){}l?n[t]=e:a.f(n,t,{ value:e,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable });
    }return n;
  };
},"50d0":function(n,t){
  n.exports={};
},"521f":function(n,t,e){
  "use strict";var o=e("9f0b");const a={ sourceId:{ type:String,required:!0 },source:{ type:[ Object,String ],default:void 0 }},i={ layerId:{ type:String,required:!0 },layer:{ type:Object,required:!0 },before:{ default:void 0 }},s={ clearSource:{ type:Boolean,default:!0 },replaceSource:{ type:Boolean,default:!1 },replace:{ type:Boolean,default:!1 }};t["a"]={ mixins:[ o["a"] ],props:{ ...a,...i,...s },inject:[ "mapbox","map" ],data(){
    return{ initial:!0 };
  },computed:{ sourceLoaded(){
    return!!this.map&&this.map.isSourceLoaded(this.sourceId);
  },mapLayer(){
    return this.map?this.map.getLayer(this.layerId):null;
  },mapSource(){
    return this.map?this.map.getSource(this.sourceId):null;
  } },created(){
    this.layer.minzoom&&this.$watch("layer.minzoom",(function(n){
      this.initial||this.map.setLayerZoomRange(this.layerId,n,this.layer.maxzoom);
    })),this.layer.maxzoom&&this.$watch("layer.maxzoom",(function(n){
      this.initial||this.map.setLayerZoomRange(this.layerId,this.layer.minzoom,n);
    })),this.layer.paint&&this.$watch("layer.paint",(function(n){
      if(!this.initial&&n){
        console.log("layerMixin.js, in watch layer.paint, next:",n,"this.layerId:",this.layerId,"this.$store.map.getStyle().layers:",this.$store.map.getStyle().layers);let t=[];for(let n of this.$store.map.getStyle().layers) {
          t.push(n.id);
        }for(let e of Object.keys(n)) {
          console.log("in loop, prop:",e,"ids:",t,"this.layerId:",this.layerId),t.includes(this.layerId)&&this.map.setPaintProperty(this.layerId,e,n[e]);
        }
      }
    }),{ deep:!0 }),this.layer.layout&&this.$watch("layer.layout",(function(n){
      if(!this.initial&&n){
        let t=[];for(let n of this.$store.map.getStyle().layers) {
          t.push(n.id);
        }for(let e of Object.keys(n)) {
          t.includes(this.layerId)&&this.map.setLayoutProperty(this.layerId,e,n[e]);
        }
      }
    }),{ deep:!0 }),this.layer.filter&&this.$watch("layer.filter",(function(n){
      this.initial||this.map.setFilter(this.layerId,n);
    }),{ deep:!0 });
  },beforeDestroy(){
    try{
      this.map.removeLayer(this.layerId);
    }catch(n){
      this.$_emitEvent("layer-does-not-exist",{ layerId:this.sourceId,error:n });
    }if(this.clearSource) {
      try{
        Object.keys(this.map.style.sourceCaches).includes(this.sourceId)&&this.map.removeSource(this.sourceId);
      }catch(n){
        this.$_emitEvent("source-does-not-exist",{ sourceId:this.sourceId,error:n });
      }
    }
  },methods:{ $_emitLayerMapEvent(n){
    return this.$_emitMapEvent(n,{ layerId:this.layerId });
  },$_bindLayerEvents(n){
    Object.keys(this.$listeners).forEach(t=>{
      n.includes(t)&&this.map.on(t,this.layerId,this.$_emitLayerMapEvent);
    });
  },$_unbindEvents(n){
    this.map&&n.forEach(n=>{
      this.map.off(n,this.layerId,this.$_emitLayerMapEvent);
    });
  },$_watchSourceLoading(n){
    "source"===n.dataType&&n.sourceId===this.sourceId&&(this.$_emitEvent("layer-source-loading",{ sourceId:this.sourceId }),this.map.off("dataloading",this.$_watchSourceLoading));
  },move(n){
    this.map.moveLayer(this.layerId,n),this.$_emitEvent("layer-moved",{ layerId:this.layerId,beforeId:n });
  },remove(){
    this.map.removeLayer(this.layerId),this.map.removeSource(this.sourceId),this.$_emitEvent("layer-removed",{ layerId:this.layerId }),this.$destroy();
  } },render(){} };
},5319:function(n,t,e){
  "use strict";var o=e("2ba4"),a=e("c65b"),i=e("e330"),s=e("d784"),r=e("d039"),l=e("825a"),f=e("1626"),c=e("5926"),u=e("50c4"),p=e("577e"),d=e("1d80"),h=e("8aa5"),A=e("dc4a"),m=e("0cb2"),g=e("14c3"),w=e("b622"),v=w("replace"),y=Math.max,b=Math.min,B=i([].concat),S=i([].push),C=i("".indexOf),O=i("".slice),k=function(n){
      return void 0===n?n:String(n);
    },E=function(){
      return"$0"==="a".replace(/./,"$0");
    }(),x=function(){
      return!!/./[v]&&""===/./[v]("a","$0");
    }(),_=!r((function(){
      var n=/./;return n.exec=function(){
        var n=[];return n.groups={ a:"7" },n;
      },"7"!=="".replace(n,"$<a>");
    }));s("replace",(function(n,t,e){
    var i=x?"$":"$0";return[ function(n,e){
      var o=d(this),i=void 0==n?void 0:A(n,v);return i?a(i,n,o,e):a(t,p(o),n,e);
    },function(n,a){
      var s=l(this),r=p(n);if("string"==typeof a&&-1===C(a,i)&&-1===C(a,"$<")){
        var d=e(t,s,r,a);if(d.done) {
          return d.value;
        }
      }var A=f(a);A||(a=p(a));var w=s.global;if(w){
        var v=s.unicode;s.lastIndex=0;
      }var E=[];while(1){
        var x=g(s,r);if(null===x) {
          break;
        }if(S(E,x),!w) {
          break;
        }var _=p(x[0]);""===_&&(s.lastIndex=h(r,u(s.lastIndex),v));
      }for(var M="",I=0,$=0;$<E.length;$++){
        x=E[$];for(var F=p(x[0]),R=y(b(c(x.index),r.length),0),j=[],T=1;T<x.length;T++) {
          S(j,k(x[T]));
        }var D=x.groups;if(A){
          var L=B([ F ],j,R,r);void 0!==D&&S(L,D);var P=p(o(a,void 0,L));
        }else {
          P=m(F,r,R,j,D,a);
        }R>=I&&(M+=O(r,I,R)+P,I=R+F.length);
      }return M+O(r,I);
    } ];
  }),!_||!E||x);
},"53ca":function(n,t,e){
  "use strict";e.d(t,"a",(function(){
    return o;
  }));e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0");function o(n){
    return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){
      return typeof n;
    }:function(n){
      return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n;
    },o(n);
  }
},"550a":function(n,t,e){
  var o=e("d6cc"),a=Function.prototype,i=a.call,s=o&&a.bind.bind(i,i);n.exports=o?s:function(n){
    return function(){
      return i.apply(n,arguments);
    };
  };
},5530:function(n,t,e){
  "use strict";e.d(t,"a",(function(){
    return i;
  }));e("b64b"),e("a4d3"),e("4de4"),e("d3b7"),e("e439"),e("159b"),e("dbb4");function o(n,t,e){
    return t in n?Object.defineProperty(n,t,{ value:e,enumerable:!0,configurable:!0,writable:!0 }):n[t]=e,n;
  }function a(n,t){
    var e=Object.keys(n);if(Object.getOwnPropertySymbols){
      var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){
        return Object.getOwnPropertyDescriptor(n,t).enumerable;
      }))),e.push.apply(e,o);
    }return e;
  }function i(n){
    for(var t=1;t<arguments.length;t++){
      var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){
        o(n,t,e[t]);
      })):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){
        Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t));
      }));
    }return n;
  }
},"57b5":function(n,t,e){
  var o=e("2ef3"),a=e("550a"),i=e("1abf"),s=e("1704"),r=e("9f5e"),l=a([].concat);n.exports=o("Reflect","ownKeys")||function(n){
    var t=i.f(r(n)),e=s.f;return e?l(t,e(n)):t;
  };
},"57b9":function(n,t,e){
  var o=e("c65b"),a=e("d066"),i=e("b622"),s=e("cb2d");n.exports=function(){
    var n=a("Symbol"),t=n&&n.prototype,e=t&&t.valueOf,r=i("toPrimitive");t&&!t[r]&&s(t,r,(function(n){
      return o(e,this);
    }),{ arity:1 });
  };
},5840:function(n,t,e){
  var o=e("b96e");n.exports=!o((function(){
    function n(){}return n.prototype.constructor=null,Object.getPrototypeOf(new n)!==n.prototype;
  }));
},5899:function(n,t){
  n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff";
},"58a8":function(n,t,e){
  var o=e("e330"),a=e("1d80"),i=e("577e"),s=e("5899"),r=o("".replace),l="["+s+"]",f=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),u=function(n){
    return function(t){
      var e=i(a(t));return 1&n&&(e=r(e,f,"")),2&n&&(e=r(e,c,"")),e;
    };
  };n.exports={ start:u(1),end:u(2),trim:u(3) };
},5947:function(n,t,e){},"5a47":function(n,t,e){
  var o=e("23e7"),a=e("4930"),i=e("d039"),s=e("7418"),r=e("7b0b"),l=!a||i((function(){
    s.f(1);
  }));o({ target:"Object",stat:!0,forced:l },{ getOwnPropertySymbols:function(n){
    var t=s.f;return t?t(r(n)):[];
  } });
},"5aeb":function(n,t,e){
  var o=e("85c6"),a=Math.min;n.exports=function(n){
    return n>0?a(o(n),9007199254740991):0;
  };
},"5d53":function(n,t,e){
  var o=e("67b2"),a=e("251c"),i=e("fcb7"),s=e("b96e"),r=s((function(){
    i(1);
  }));o({ target:"Object",stat:!0,forced:r },{ keys:function(n){
    return i(a(n));
  } });
},"5da5":function(n,t,e){
  "use strict";var o=e("b166"),a=(Math.pow(10,8),6e4),i=36e5,s=e("8c86"),r=e("fe1f");function l(n,t){
    var e;Object(s["a"])(1,arguments);var o=Object(r["a"])(null!==(e=null===t||void 0===t?void 0:t.additionalDigits)&&void 0!==e?e:2);if(2!==o&&1!==o&&0!==o) {
      throw new RangeError("additionalDigits must be 0, 1 or 2");
    }if("string"!==typeof n&&"[object String]"!==Object.prototype.toString.call(n)) {
      return new Date(NaN);
    }var a,i=d(n);if(i.date){
      var l=h(i.date,o);a=A(l.restDateString,l.year);
    }if(!a||isNaN(a.getTime())) {
      return new Date(NaN);
    }var f,c=a.getTime(),u=0;if(i.time&&(u=g(i.time),isNaN(u))) {
      return new Date(NaN);
    }if(!i.timezone){
      var p=new Date(c+u),m=new Date(0);return m.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),m.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),m;
    }return f=v(i.timezone),isNaN(f)?new Date(NaN):new Date(c+u+f);
  }var f={ dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/ },c=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,p=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(n){
    var t,e={},o=n.split(f.dateTimeDelimiter);if(o.length>2) {
      return e;
    }if(/:/.test(o[0])?t=o[0]:(e.date=o[0],t=o[1],f.timeZoneDelimiter.test(e.date)&&(e.date=n.split(f.timeZoneDelimiter)[0],t=n.substr(e.date.length,n.length))),t){
      var a=f.timezone.exec(t);a?(e.time=t.replace(a[1],""),e.timezone=a[1]):e.time=t;
    }return e;
  }function h(n,t){
    var e=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),o=n.match(e);if(!o) {
      return{ year:NaN,restDateString:"" };
    }var a=o[1]?parseInt(o[1]):null,i=o[2]?parseInt(o[2]):null;return{ year:null===i?a:100*i,restDateString:n.slice((o[1]||o[2]).length) };
  }function A(n,t){
    if(null===t) {
      return new Date(NaN);
    }var e=n.match(c);if(!e) {
      return new Date(NaN);
    }var o=!!e[4],a=m(e[1]),i=m(e[2])-1,s=m(e[3]),r=m(e[4]),l=m(e[5])-1;if(o) {
      return O(t,r,l)?y(t,r,l):new Date(NaN);
    }var f=new Date(0);return S(t,i,s)&&C(t,a)?(f.setUTCFullYear(t,i,Math.max(a,s)),f):new Date(NaN);
  }function m(n){
    return n?parseInt(n):1;
  }function g(n){
    var t=n.match(u);if(!t) {
      return NaN;
    }var e=w(t[1]),o=w(t[2]),s=w(t[3]);return k(e,o,s)?e*i+o*a+1e3*s:NaN;
  }function w(n){
    return n&&parseFloat(n.replace(",","."))||0;
  }function v(n){
    if("Z"===n) {
      return 0;
    }var t=n.match(p);if(!t) {
      return 0;
    }var e="+"===t[1]?-1:1,o=parseInt(t[2]),s=t[3]&&parseInt(t[3])||0;return E(o,s)?e*(o*i+s*a):NaN;
  }function y(n,t,e){
    var o=new Date(0);o.setUTCFullYear(n,0,4);var a=o.getUTCDay()||7,i=7*(t-1)+e+1-a;return o.setUTCDate(o.getUTCDate()+i),o;
  }var b=[ 31,null,31,30,31,30,31,31,30,31,30,31 ];function B(n){
    return n%400===0||n%4===0&&n%100!==0;
  }function S(n,t,e){
    return t>=0&&t<=11&&e>=1&&e<=(b[t]||(B(n)?29:28));
  }function C(n,t){
    return t>=1&&t<=(B(n)?366:365);
  }function O(n,t,e){
    return t>=1&&t<=53&&e>=0&&e<=6;
  }function k(n,t,e){
    return 24===n?0===t&&0===e:e>=0&&e<60&&t>=0&&t<60&&n>=0&&n<25;
  }function E(n,t){
    return t>=0&&t<=59;
  }t["a"]={ date:{ transform:function(n){
    let t;return t="string"===typeof n?Object(o["a"])(l(n),"MM/dd/yyyy"):Object(o["a"])(n,"MM/dd/yyyy"),t;
  } },toLocaleDateString:{ transform:function(n){
    let t;if("number"!==typeof n) {
      t=n;
    }else{
      let e=new Date(0);e.setUTCMilliseconds(n),e=new Date(e.getTime()+6e4*e.getTimezoneOffset()),t=e.toLocaleDateString();
    }return t;
  } },titleCase:{ transform:function(n){
    let t={ Llc:"LLC",Iii:"III",Lp:"LP",Usa:"USA",Trs:"TRS","H/w":"H/W",Of:"of",Fdr:"FDR","S/w":"S/W",Mcclellan:"McClellan","S/m":"S/M",And:"and",Cp:"CP",Us:"US",Ltd:"LTD",Al:"AL",Ak:"AK",Az:"AZ",Ar:"AR",Ca:"CA",Co:"CO",Ct:"CT",De:"DE",Fl:"FL",Ga:"GA",Hi:"HI",Id:"ID",Il:"IL",In:"IN",Ia:"IA",Ks:"KS",Ky:"KY",La:"LA",Me:"ME",Md:"MD",Ma:"MA",Mi:"MI",Mn:"MN",Ms:"MS",Mo:"MO",Mt:"MT",Ne:"NE",Nv:"NV",Nh:"NH",Nj:"NJ",Nm:"NM",Ny:"NY",Nc:"NC",Nd:"ND",Oh:"OH",Ok:"OK",Or:"OR",Pa:"PA",Ri:"RI",Sc:"SC",Sd:"SD",Tn:"TN",Tx:"TX",Ut:"UT",Vt:"VT",Va:"VA",Wa:"WA",Wv:"WV",Wi:"WI",Wy:"WY" };return n=n.toLowerCase().split(" ").map((function(n){
      let e=n.charAt(0).toUpperCase()+n.slice(1);return e=t[e]||e,e;
    })),n.join(" ");
  } }};
},"5e4e":function(n,t,e){
  var o=e("67b2"),a=e("7961").entries;o({ target:"Object",stat:!0 },{ entries:function(n){
    return a(n);
  } });
},"60f3":function(n,t,e){
  "use strict";var o=e("bbca"),a=TypeError;n.exports=function(n,t){
    if(!delete n[t]) {
      throw a("Cannot delete property "+o(t)+" of "+o(n));
    }
  };
},6138:function(n,t,e){
  "use strict";var o=e("c000").IteratorPrototype,a=e("d521"),i=e("1eec"),s=e("125a"),r=e("50d0"),l=function(){
    return this;
  };n.exports=function(n,t,e,f){
    var c=t+" Iterator";return n.prototype=a(o,{ next:i(+!f,e) }),s(n,c,!1,!0),r[c]=l,n;
  };
},6159:function(n,t,e){
  var o=e("0885"),a=e("cc3e"),i="__core-js_shared__",s=o[i]||a(i,{});n.exports=s;
},6386:function(n,t,e){
  var o=e("0bc2"),a=e("e246"),i=Function.prototype,s=o&&Object.getOwnPropertyDescriptor,r=a(i,"name"),l=r&&"something"===function(){}.name,f=r&&(!o||o&&s(i,"name").configurable);n.exports={ EXISTS:r,PROPER:l,CONFIGURABLE:f };
},6502:function(n,t,e){
  "use strict";(function(n){
    e.d(t,"a",(function(){
      return en;
    })),e.d(t,"b",(function(){
      return D;
    })),e.d(t,"c",(function(){
      return Fn;
    })),e.d(t,"d",(function(){
      return bn;
    })),e.d(t,"e",(function(){
      return At;
    })),e.d(t,"f",(function(){
      return le;
    })),e.d(t,"g",(function(){
      return Vn;
    })),e.d(t,"h",(function(){
      return Ot;
    }));e("b0c0"),e("277d"),e("a15b"),e("0d03"),e("d3b7"),e("25f0"),e("a9e3");var o=e("3f1c"),a=(e("4795"),{ props:{ isFluid:{ type:Boolean,default(){
      return!1;
    } }},data(){
      return{ tsdStatus:!1 };
    },methods:{ updateStatus(){
      this.tsdStatus=!this.tsdStatus,this.$emit("update-status");
    } }});const i="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='139' height='18' viewBox='0 0 139 18'%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cpath fill='white' d='M35.066 6.56l1.946 4.933 1.754-4.933h1.726l-3.126 8.286c-.178.476-.56.87-1.144 1.183-.584.314-1.265.471-2.043.471v-1.474c1.285 0 1.927-.322 1.927-.967 0-.426-.178-1.08-.533-1.96L33.339 6.56h1.727zm79.87-.133c2.276 0 3.414 1.253 3.414 3.76 0 1.168-.315 2.068-.944 2.7-.628.63-1.488.946-2.576.946-.525 0-1.002-.104-1.434-.313v2.98h-1.666V6.56h1.666v.48c.419-.409.932-.613 1.54-.613zm-94.463-2.66c1.12 0 2.016.229 2.687.687l-.714 1.433c-.386-.387-1.009-.58-1.866-.58-.814 0-1.48.341-2 1.023-.52.683-.78 1.546-.78 2.59 0 1.045.24 1.873.723 2.487.482.613 1.125.92 1.93.92.92 0 1.64-.329 2.16-.987l.806 1.4c-.706.75-1.742 1.126-3.106 1.126-1.364 0-2.424-.448-3.18-1.346C16.378 11.622 16 10.398 16 8.847c0-1.444.419-2.653 1.257-3.623.837-.972 1.91-1.457 3.216-1.457zM109.79 3.5v8.027c0 .88.262 1.404.787 1.573-.258.489-.698.733-1.32.733-.756 0-1.134-.525-1.134-1.573V3.9l1.667-.4zm-11.466 0v10.2h-1.667v-.433c-.138.15-.37.283-.7.396-.328.113-.669.17-1.02.17-.995 0-1.779-.316-2.35-.947-.57-.631-.856-1.51-.856-2.64 0-1.128.328-2.047.983-2.756.656-.709 1.476-1.063 2.463-1.063.542 0 1.036.11 1.48.333V3.9l1.667-.4zm-67.612.994V6.56h1.96V7.9h-1.96v3.127c0 .51.08.872.24 1.083.16.211.44.316.84.316.4 0 .774-.109 1.12-.326v1.533c-.386.134-.937.2-1.653.2-.71 0-1.257-.201-1.64-.603-.382-.402-.573-.975-.573-1.717V7.9h-.827V6.56h.827V5.107l1.666-.613zm15.954 1.933c1.084 0 1.927.329 2.526.986.6.658.9 1.558.9 2.7 0 1.138-.305 2.043-.916 2.714-.611.67-1.448 1.006-2.51 1.006-1.085 0-1.928-.339-2.53-1.016-.602-.678-.904-1.58-.904-2.704 0-1.089.315-1.975.944-2.66.629-.684 1.459-1.026 2.49-1.026zM82.718 3.5v8.027c0 .88.262 1.404.787 1.573-.259.489-.698.733-1.32.733-.756 0-1.134-.525-1.134-1.573V3.9l1.667-.4zm51.584 2.927c1.09 0 1.887.248 2.393.743.507.496.76 1.434.76 2.817v1.527c0 .95.191 1.548.573 1.793-.137.24-.29.387-.46.443-.168.055-.361.083-.58.083-.24 0-.455-.088-.646-.266-.19-.178-.32-.371-.386-.58-.152.249-.415.452-.79.61-.376.157-.768.236-1.177.236-.77 0-1.374-.192-1.814-.577-.44-.384-.66-.93-.66-1.636 0-.827.31-1.474.93-1.94.62-.467 1.502-.7 2.644-.7.195 0 .426.033.693.1 0-.84-.531-1.26-1.594-1.26-.626 0-1.15.105-1.573.313l-.36-1.293c.574-.275 1.256-.413 2.047-.413zm-47.19 0c1.088 0 1.886.248 2.392.743.507.496.76 1.434.76 2.817v1.527c0 .95.191 1.548.573 1.793-.137.24-.29.387-.46.443-.168.055-.361.083-.58.083-.24 0-.455-.088-.646-.266-.19-.178-.32-.371-.386-.58-.152.249-.415.452-.79.61-.376.157-.768.236-1.177.236-.77 0-1.374-.192-1.814-.577-.44-.384-.66-.93-.66-1.636 0-.827.31-1.474.93-1.94.62-.467 1.502-.7 2.644-.7.195 0 .426.033.693.1 0-.84-.531-1.26-1.594-1.26-.626 0-1.15.105-1.573.313l-.36-1.293c.574-.275 1.256-.413 2.047-.413zm15.958 0c1.035 0 1.867.309 2.493.927.627.617.94 1.404.94 2.36 0 .204-.047.512-.14.926h-5.1c.031.57.227 1.011.587 1.327.36.315.844.473 1.453.473.76 0 1.338-.198 1.733-.594l.647 1.274c-.587.475-1.462.713-2.626.713-1.09 0-1.95-.319-2.584-.956-.633-.638-.95-1.528-.95-2.67 0-1.125.348-2.036 1.044-2.734.695-.697 1.53-1.046 2.503-1.046zM54.453 3.634c.395 0 .877.086 1.446.26l-.493 1.266c-.365-.12-.645-.18-.84-.18-.316 0-.584.136-.804.407-.22.27-.33.604-.33 1 0 .058.003.115.007.173h1.48v1.373h-1.453V13.7h-1.667V7.933h-1.04V6.56h1.047c.035-.875.294-1.582.777-2.12.482-.538 1.105-.806 1.87-.806zm67.056-.134v3.513c.431-.39 1.025-.586 1.78-.586.894 0 1.587.248 2.08.743.493.496.74 1.205.74 2.13v4.4h-1.673V9.3c0-.44-.138-.793-.414-1.06-.275-.267-.635-.4-1.08-.4-.275 0-.552.075-.833.224-.28.149-.48.318-.6.51V13.7h-1.693V3.9l1.693-.4zm-58.797.367c1.542 0 2.67.237 3.383.71.713.473 1.07 1.212 1.07 2.216 0 2.24-1.32 3.36-3.96 3.36-.195 0-.457-.015-.786-.046V13.7h-1.734V3.94c1.156-.049 1.831-.073 2.027-.073zm7.58-.367v3.513c.43-.39 1.024-.586 1.78-.586.893 0 1.586.248 2.08.743.492.496.74 1.205.74 2.13v4.4h-1.674V9.3c0-.44-.138-.793-.413-1.06-.276-.267-.635-.4-1.08-.4-.276 0-.553.075-.833.224-.28.149-.48.318-.6.51V13.7h-1.693V3.9l1.693-.4zm8.532 3.06v7.14h-1.686V7.927h-.914V6.56h2.6zm51.218 0v7.14h-1.686V7.927h-.914V6.56h2.6zm-103.19 0v7.14h-1.686V7.927h-.913V6.56h2.6zm108.304 3.693c-1.317 0-1.974.431-1.974 1.293 0 .64.371.96 1.113.96 1 0 1.5-.5 1.5-1.5v-.666c-.285-.058-.498-.087-.64-.087zm-47.191 0c-1.317 0-1.974.431-1.974 1.293 0 .64.371.96 1.113.96 1 0 1.5-.5 1.5-1.5v-.666c-.285-.058-.498-.087-.64-.087zm-41.3-2.466c-.52 0-.932.204-1.239.613-.307.41-.46.98-.46 1.713 0 1.574.566 2.36 1.7 2.36.52 0 .932-.204 1.237-.613.304-.409.456-.991.456-1.747 0-1.55-.564-2.326-1.693-2.326zm67.798.053c-.4 0-.755.155-1.067.467v3.752c.303.245.656.367 1.06.367.77 0 1.321-.183 1.657-.55.336-.366.503-.944.503-1.736 0-.844-.166-1.439-.5-1.784-.333-.344-.884-.516-1.653-.516zm-18.92 0c-.666 0-1.18.204-1.539.61-.36.407-.54.99-.54 1.75 0 1.484.716 2.227 2.147 2.227.16 0 .356-.048.59-.144.233-.095.385-.192.456-.29V8.267c-.356-.285-.726-.427-1.113-.427zm7.553-.02c-.95 0-1.542.523-1.772 1.566h3.506c-.116-1.043-.693-1.566-1.734-1.566zm-40.15-2.413c-.183 0-.359.011-.527.033v3.127c.293.03.524.046.693.046.791 0 1.369-.132 1.733-.396.364-.265.547-.695.547-1.29 0-1.014-.816-1.52-2.447-1.52zm-36.92-1.613c.267 0 .495.094.683.283.19.189.284.417.284.683 0 .267-.095.495-.284.684-.188.188-.416.283-.683.283-.267 0-.494-.095-.683-.283-.19-.19-.284-.417-.284-.684 0-.266.095-.494.284-.683.189-.189.416-.283.683-.283zm51.972 0c.267 0 .494.094.683.283.19.189.284.417.284.683 0 .267-.095.495-.284.684-.189.188-.416.283-.683.283-.267 0-.495-.095-.683-.283-.19-.19-.284-.417-.284-.684 0-.266.094-.494.284-.683.188-.189.416-.283.683-.283zm51.217 0c.267 0 .495.094.684.283.189.189.283.417.283.683 0 .267-.094.495-.283.684-.19.188-.417.283-.684.283-.266 0-.494-.095-.683-.283-.19-.19-.283-.417-.283-.684 0-.266.094-.494.283-.683.189-.189.417-.283.683-.283z' transform='translate(-783 -743) translate(783 743)'/%3e %3cpath fill='%23F2C612' d='M3.65 15.41c.086-.261.367-.404.629-.32.261.087.404.367.32.63-.07.209-.263.34-.472.34l-.04.245s-.08.019-.205-.023c-.126-.04-.194-.108-.194-.108l.116-.228c-.15-.127-.218-.337-.153-.535zm1.572-1.38c1.947.494 3.696.517 4.54.17.377.78.192.876-.085 1.066-.371.254-1.967.557-4.295-.059-.052-.22-.123-.801-.16-1.178zM.582 11.64c.574.77 2.204 1.704 4.256 2.285.042.373.13.997.169 1.19l-.558-.15C1.991 14.278.647 13.314.148 12.668c-.206-.267-.3-.529.433-1.028zm2.541-9.797c.119-.424.393-.348.487-.321l2.834.792c.22.06.413-.404.615-.347l.94.263.336.094.955.267c.202.056.128.553.346.614l2.835.792c.093.026.368.102.25.527l-.645 2.306c-.009.032.007.055.037.064l.202.056c.068.02.107.074.103.183-.005.118-.023.291-.095.55-.081.29-.183.516-.226.598-.039.077-.074.134-.182.103l-1.816-.507c-.099-.028-.235-.098-.212-.316.048-.453.033-1.378-.06-1.543-.124-.22-1.388-.718-1.388-.718s0 .08-.063.279c-.062.199-.421.562-.356.678.358.636 1.608.759 1.38 1.863-.583 2.803-.583 4.152-.043 5.303-.788.265-2.283.146-4.22-.395l-.03-.01c-.039-.138-.043-.173-.045-.24v-.036c-.002-.093-.004-.249-.043-.601-.043-.38-.082-.574-.089-.732-.006-.158-.016-.304.07-.612.01-.038.022-.078.035-.12.126-.433.431-1.666.475-2.038.007-.065-.029-.074-.038-.077-.009-.003-.044-.014-.072.046-.163.34-.567 1.541-.693 1.973l-.036.125c-.087.311-.116.485-.108.674.009.187.031.368.072.742.044.4.039.521.042.618.001.053.005.097.018.159-1.695-.516-2.871-1.133-3.368-1.716 1.06-.705 1.76-1.858 2.715-4.56.376-1.063 1.509-.52 2.144-.878.117-.065.002-.561.052-.763.05-.203.087-.273.087-.273s-1.281-.212-1.502-.089c-.164.094-.656.877-.85 1.29-.093.197-.246.187-.346.16l-1.815-.508c-.109-.03-.109-.097-.103-.182.006-.093.036-.34.117-.628.072-.26.147-.417.204-.52.053-.096.115-.123.183-.104l.202.057c.03.008.055-.004.064-.036z' transform='translate(-783 -743) translate(783 743)'/%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e";function s(n,t,e,o,a,i,s,r,l,f){
      "boolean"!==typeof s&&(l=r,r=s,s=!1);const c="function"===typeof e?e.options:e;let u;if(n&&n.render&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns,c._compiled=!0,a&&(c.functional=!0)),o&&(c._scopeId=o),i?(u=function(n){
        n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,n||"undefined"===typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),t&&t.call(this,l(n)),n&&n._registeredComponents&&n._registeredComponents.add(i);
      },c._ssrRegister=u):t&&(u=s?function(n){
        t.call(this,f(n,this.$root.$options.shadowRoot));
      }:function(n){
        t.call(this,r(n));
      }),u) {
        if(c.functional){
          const n=c.render;c.render=function(t,e){
            return u.call(e),n(t,e);
          };
        }else{
          const n=c.beforeCreate;c.beforeCreate=n?[].concat(n,u):[ u ];
        }
      }return e;
    }const r="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function l(n){
      return(n,t)=>u(n,t);
    }let f;const c={};function u(n,t){
      const e=r?t.media||"default":n,o=c[e]||(c[e]={ ids:new Set,styles:[]});if(!o.ids.has(n)){
        o.ids.add(n);let e=t.source;if(t.map&&(e+="\n/*# sourceURL="+t.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===f&&(f=document.head||document.getElementsByTagName("head")[0]),f.appendChild(o.element)),"styleSheet"in o.element) {
          o.styles.push(e),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");
        }else{
          const n=o.ids.size-1,t=document.createTextNode(e),a=o.element.childNodes;a[n]&&o.element.removeChild(a[n]),a.length?o.element.insertBefore(t,a[n]):o.element.appendChild(t);
        }
      }
    }const p=a;var d=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ attrs:{ id:"trusted-site" }},[ e("div",{ attrs:{ id:"trusted-site-bar" }},[ e("div",{ staticClass:"container",class:{ "is-fluid":n.isFluid }},[ e("div",{ staticClass:"level is-marginless is-mobile" },[ n._m(0),n._v(" "),e("div",{ staticClass:"level-right" },[ n.isMobile?e("div",{ staticClass:"level-item" },[ e("a",{ attrs:{ href:"#" },on:{ click:function(t){
          return t.preventDefault(),n.updateStatus(t);
        } }},[ e("span",[ n._v("An official website") ]) ]),n._v(" "),n._m(1) ]):e("div",{ staticClass:"level-item" },[ n._v("\n            An official website of the City of Philadelphia government   "),e("a",{ attrs:{ href:"#" },on:{ click:function(t){
          return t.preventDefault(),n.updateStatus(t);
        } }},[ n._v("Here's how you know") ]) ]) ]) ]) ]),n._v(" "),e("div",{ directives:[{ name:"show",rawName:"v-show",value:n.tsdStatus,expression:"tsdStatus" }],class:{ "is-fluid":n.isFluid },attrs:{ id:"trusted-site-details" }},[ e("div",{ staticClass:"container" },[ e("div",{ attrs:{ id:"close-tsd" }},[ e("span",{ staticClass:"icon" },[ e("a",{ attrs:{ href:"#","aria-label":"Close Trusted Site Details" },on:{ click:function(t){
          return t.preventDefault(),n.updateStatus(t);
        } }},[ e("i",{ staticClass:"fas fa-times" }) ]) ]) ]),n._v(" "),n._m(2) ]) ]) ]) ]);
      },h=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"level-left" },[ e("div",{ staticClass:"level-item" },[ e("a",{ attrs:{ href:"https://www.phila.gov",target:"_blank" }},[ e("img",{ attrs:{ src:i,"aria-label":"Link To https://www.phila.gov",width:"139",height:"18",alt:"City of Philadelphia trusted site" }}) ]) ]) ]);
      },function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fa fa-info-circle" }) ]);
      },function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ attrs:{ id:"trusted-panel" }},[ e("div",{ staticClass:"columns is-centered is-marginless is-multiline is-tablet" },[ e("div",{ staticClass:"column" },[ e("div",{ staticClass:"trust-icon" },[ e("span",{ staticClass:"icon circle-icon" },[ e("i",{ staticClass:"fas fa-lock" }) ]),n._v(" "),e("span",{ staticClass:"icon-text" },[ n._v("\n                  https://\n                ") ]) ]),n._v(" "),e("div",{ staticClass:"trust-details" },[ n._v("\n                The "),e("strong",[ n._v("https://") ]),n._v(" in the address bar means your information is encrypted and can not be accessed by anyone else\n              ") ]) ]),n._v(" "),e("div",{ staticClass:"column" },[ e("div",{ staticClass:"trust-icon-right" },[ e("span",{ staticClass:"icon circle-icon" },[ e("i",{ staticClass:"fas fa-university" }) ]),n._v(" "),e("span",{ staticClass:"icon-text" },[ n._v("\n                  .gov\n                ") ]) ]),n._v(" "),e("div",{ staticClass:"trust-details-right" },[ n._v("\n                Only government entities in the U.S. can end in .gov\n              ") ]) ]) ]) ]);
      } ];d._withStripped=!0;const A=function(n){
        n&&n("data-v-5e87f92b_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#trusted-site[data-v-5e87f92b] {\n  color: white;\n}\n@media screen and (max-width: 767px) {\n#trusted-site .container[data-v-5e87f92b] {\n    padding-left: 1rem !important;\n}\n}\n#trusted-site a[data-v-5e87f92b], #trusted-site strong[data-v-5e87f92b] {\n  color: white;\n}\n#trusted-site-bar[data-v-5e87f92b] {\n  background-color: #2176d2;\n}\n#trusted-site-bar .level-left[data-v-5e87f92b] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.45;\n}\n#trusted-site-bar .level-left img[data-v-5e87f92b] {\n  margin-right: 0.188rem;\n}\n#trusted-site-bar .level-right[data-v-5e87f92b] {\n  font-size: 0.75rem;\n}\n#trusted-site-bar .level-right a[data-v-5e87f92b] {\n  font-weight: 600;\n  text-decoration: underline;\n}\n#trusted-site-details[data-v-5e87f92b] {\n  position: relative;\n  background-color: #0c59a6;\n}\n#trusted-site-details .trust-icon[data-v-5e87f92b], #trusted-site-details .trust-icon-right[data-v-5e87f92b] {\n  width: 115px;\n  display: inline-block;\n  vertical-align: middle;\n}\n#trusted-site-details .trust-details[data-v-5e87f92b], #trusted-site-details .trust-details-right[data-v-5e87f92b] {\n  width: calc(100% - 120px);\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1.1;\n  font-size: 0.75rem;\n}\n#trusted-site-details .trust-icon-right[data-v-5e87f92b] {\n  width: 75px;\n}\n@media screen and (max-width: 767px) {\n#trusted-site-details .trust-icon-right[data-v-5e87f92b] {\n    width: 115px;\n}\n}\n#trusted-site-details .trust-details-right[data-v-5e87f92b] {\n  width: calc(100% - 80px);\n}\n@media screen and (max-width: 767px) {\n#trusted-site-details .trust-details-right[data-v-5e87f92b] {\n    width: calc(100% - 120px);\n}\n}\n#trusted-site-details .circle-icon[data-v-5e87f92b] {\n  border-radius: 50%;\n  background-color: white;\n  width: 1.5rem;\n  height: 1.5rem;\n  text-align: center;\n  font-size: 1rem;\n  color: #2176d2;\n  margin-right: 0.1rem;\n}\n#trusted-site-details .icon-text[data-v-5e87f92b] {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n}\n@media screen and (max-width: 767px) {\n#trusted-panel[data-v-5e87f92b] {\n    padding: 0 3rem;\n}\n}\n@media screen and (max-width: 600px) {\n#trusted-panel[data-v-5e87f92b] {\n    padding: 0 2rem;\n}\n}\n@media screen and (max-width: 500px) {\n#trusted-panel[data-v-5e87f92b] {\n    padding: 0 1rem 0 0;\n}\n}\n#trusted-panel .columns > .column[data-v-5e87f92b] {\n  padding-left: 0;\n}\n#trusted-panel .columns > .column + .column[data-v-5e87f92b] {\n  padding-right: 0;\n}\n#close-tsd[data-v-5e87f92b] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 1.75rem;\n  font-weight: 400;\n  width: 3rem;\n  height: 3rem;\n  padding: 0.875rem;\n  text-align: center;\n}\n\n/*# sourceMappingURL=_TrustedSite.vue.map */',map:{ version:3,sources:[ "_TrustedSite.vue","/home/runner/work/phila-ui/phila-ui/src/components/AppHeader/_TrustedSite.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AC6FpB;EACA,YAAA;AD3FA;AACA;AC2FA;IDzFI,6BAA6B;AAC/B;AACF;AACA;EC4FA,YAAA;AD1FA;AC8FA;EACA,yBAAA;AD3FA;AC6FA;EAIA,mBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,iBAAA;AD9FA;ACuFA;EACA,sBAAA;ADrFA;AC6FA;ED3FE,kBAAkB;AACpB;AC4FA;EACA,gBAAA;EACA,0BAAA;AD1FA;AC+FA;EACA,kBAAA;EACA,yBAAA;AD5FA;AC8FA;EACA,YAAA;EACA,qBAAA;EACA,sBAAA;AD5FA;AC8FA;EACA,yBAAA;EACA,qBAAA;EACA,sBAAA;EACA,gBAAA;EACA,kBAAA;AD5FA;AC8FA;EAEA,WAAA;AD7FA;AACA;AC0FA;IAIA,YAAA;AD3FE;AACF;AC6FA;EAEA,wBAAA;AD5FA;AACA;ACyFA;IAIA,yBAAA;AD1FE;AACF;AC4FA;EACA,kBAAA;EACA,uBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,oBAAA;AD1FA;AACA;EC4FA,gMAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AD1FA;AC+FA;AADA;IAEA,eAAA;AD3FE;AACF;AC4FA;AAJA;IAKA,eAAA;ADzFE;AACF;AC0FA;AAPA;IAQA,mBAAA;ADvFE;AACF;AACA;ECyFA,eAAA;ADvFA;ACyFA;EACA,gBAAA;ADvFA;AC2FA;EACA,kBAAA;EACA,MAAA;EACA,QAAA;EDxFE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,2CAA2C",file:"_TrustedSite.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#trusted-site {\n  color: white;\n}\n@media screen and (max-width: 767px) {\n  #trusted-site .container {\n    padding-left: 1rem !important;\n  }\n}\n#trusted-site a, #trusted-site strong {\n  color: white;\n}\n\n#trusted-site-bar {\n  background-color: #2176d2;\n}\n#trusted-site-bar .level-left {\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.45;\n}\n#trusted-site-bar .level-left img {\n  margin-right: 0.188rem;\n}\n#trusted-site-bar .level-right {\n  font-size: 0.75rem;\n}\n#trusted-site-bar .level-right a {\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n#trusted-site-details {\n  position: relative;\n  background-color: #0c59a6;\n}\n#trusted-site-details .trust-icon, #trusted-site-details .trust-icon-right {\n  width: 115px;\n  display: inline-block;\n  vertical-align: middle;\n}\n#trusted-site-details .trust-details, #trusted-site-details .trust-details-right {\n  width: calc(100% - 120px);\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 1.1;\n  font-size: 0.75rem;\n}\n#trusted-site-details .trust-icon-right {\n  width: 75px;\n}\n@media screen and (max-width: 767px) {\n  #trusted-site-details .trust-icon-right {\n    width: 115px;\n  }\n}\n#trusted-site-details .trust-details-right {\n  width: calc(100% - 80px);\n}\n@media screen and (max-width: 767px) {\n  #trusted-site-details .trust-details-right {\n    width: calc(100% - 120px);\n  }\n}\n#trusted-site-details .circle-icon {\n  border-radius: 50%;\n  background-color: white;\n  width: 1.5rem;\n  height: 1.5rem;\n  text-align: center;\n  font-size: 1rem;\n  color: #2176d2;\n  margin-right: 0.1rem;\n}\n#trusted-site-details .icon-text {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.5rem;\n}\n\n@media screen and (max-width: 767px) {\n  #trusted-panel {\n    padding: 0 3rem;\n  }\n}\n@media screen and (max-width: 600px) {\n  #trusted-panel {\n    padding: 0 2rem;\n  }\n}\n@media screen and (max-width: 500px) {\n  #trusted-panel {\n    padding: 0 1rem 0 0;\n  }\n}\n#trusted-panel .columns > .column {\n  padding-left: 0;\n}\n#trusted-panel .columns > .column + .column {\n  padding-right: 0;\n}\n\n#close-tsd {\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 1.75rem;\n  font-weight: 400;\n  width: 3rem;\n  height: 3rem;\n  padding: 0.875rem;\n  text-align: center;\n}\n\n/*# sourceMappingURL=_TrustedSite.vue.map */','<template>\n  <div\n    id="trusted-site"\n  >\n    <div\n      id="trusted-site-bar"\n    >\n      <div\n        class="container"\n        :class="{ \'is-fluid\' : isFluid }"\n      >\n        <div class="level is-marginless is-mobile">\n          <div class="level-left">\n            <div class="level-item">\n              <a\n                href="https://www.phila.gov"\n                target="_blank"\n              >\n                <img\n                  src="~/assets/images/phila-small-logo.svg"\n                  aria-label="Link To https://www.phila.gov"\n                  width="139"\n                  height="18"\n                  alt="City of Philadelphia trusted site"\n                >\n              </a>\n            </div>\n          </div>\n          <div class="level-right">\n            <div\n              v-if="isMobile"\n              class="level-item"\n            >\n              <a\n                href="#"\n                @click.prevent="updateStatus"\n              >\n                <span>An official website</span>\n              </a>\n              <span class="icon">\n                <i class="fa fa-info-circle" />\n              </span>\n            </div>\n            <div\n              v-else\n              class="level-item"\n            >\n              An official website of the City of Philadelphia government &nbsp; <a\n                href="#"\n                @click.prevent="updateStatus"\n              >Here\'s how you know</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        v-show="tsdStatus"\n        id="trusted-site-details"\n        :class="{ \'is-fluid\' : isFluid }"\n      >\n        <div class="container">\n          <div id="close-tsd">\n            <span class="icon">\n              <a\n                href="#"\n                aria-label="Close Trusted Site Details"\n                @click.prevent="updateStatus"\n              ><i\n                class="fas fa-times"\n              /></a>\n            </span>\n          </div>\n          <div id="trusted-panel">\n            <div class="columns is-centered is-marginless is-multiline is-tablet">\n              <div class="column">\n                <div class="trust-icon">\n                  <span class="icon circle-icon">\n                    <i class="fas fa-lock" />\n                  </span>\n                  <span class="icon-text">\n                    https://\n                  </span>\n                </div>\n                <div class="trust-details">\n                  The <strong>https://</strong> in the address bar means your information is encrypted and can not be accessed by anyone else\n                </div>\n              </div>\n              <div class="column">\n                <div class="trust-icon-right">\n                  <span class="icon circle-icon">\n                    <i class="fas fa-university" />\n                  </span>\n                  <span class="icon-text">\n                    .gov\n                  </span>\n                </div>\n                <div class="trust-details-right">\n                  Only government entities in the U.S. can end in .gov\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\n\nexport default {\n  props: {\n    isFluid: {\n      type: Boolean,\n      default () {\n        return false;\n      },\n    },\n  },\n  data () {\n    return {\n      tsdStatus: false,\n    };\n  },\n  methods: {\n    updateStatus () {\n      this.tsdStatus = !this.tsdStatus;\n      this.$emit(\'update-status\');\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n\n  #trusted-site {\n    color: $white;\n    .container {\n      @include until ($tablet) {\n        padding-left: 1rem !important;\n      }\n    }\n    a, strong {\n      color: $white;\n    }\n  }\n\n  #trusted-site-bar {\n    background-color: $ben-franklin-blue;\n\n    .level-left {\n      img {\n        margin-right: 0.188rem;\n      }\n      font-size: $size-small;\n      font-weight: $weight-semibold;\n      font-stretch: normal;\n      font-style: normal;\n      line-height: 1.45;\n    }\n    .level-right {\n      font-size: 0.75rem;\n      a {\n        font-weight: $weight-semibold;\n        text-decoration: underline;\n      }\n    }\n  }\n\n  #trusted-site-details {\n    position: relative;\n    background-color: #0c59a6;\n\n    .trust-icon {\n      width: 115px;\n      display: inline-block;\n      vertical-align: middle;\n    }\n    .trust-details {\n      width: calc(100% - 120px);\n      display: inline-block;\n      vertical-align: middle;\n      line-height: 1.1;\n      font-size: 0.75rem;\n    }\n    .trust-icon-right {\n      @extend .trust-icon;\n      width: 75px;\n      @include until ($tablet) {\n        width: 115px;\n      }\n    }\n    .trust-details-right {\n      @extend .trust-details;\n      width: calc(100% - 80px);\n      @include until ($tablet) {\n        width: calc(100% - 120px);\n      }\n    }\n    .circle-icon {\n      border-radius: 50%;\n      background-color: $white;\n      width: 1.5rem;\n      height: 1.5rem;\n      text-align: center;\n      font-size: $size-medium;\n      color: $ben-franklin-blue;\n      margin-right: .1rem;\n    }\n    .icon-text {\n      font-family: $family-secondary;\n      font-size: $size-3;\n      font-weight: $weight-semibold;\n      line-height: 1.5rem;\n    }\n  }\n\n  #trusted-panel {\n    @media screen and (max-width: 767px) {\n      padding: 0 3rem;\n    }\n    @media screen and (max-width: 600px) {\n      padding: 0 2rem;\n    }\n    @media screen and (max-width: 500px) {\n      padding: 0 1rem 0 0;\n    }\n\n    .columns > .column {\n      padding-left: 0;\n    }\n    .columns > .column + .column {\n      padding-right: 0;\n    }\n  }\n\n  #close-tsd {\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: $size-2;\n    font-weight: $weight-normal;\n    width: 3rem;\n    height: 3rem;\n    padding: 0.875rem;\n    text-align: center;\n  }\n\n</style>\n' ]},media:void 0 });
      },m="data-v-5e87f92b",g=void 0,w=!1,v=s({ render:d,staticRenderFns:h },A,p,m,w,g,!1,l,void 0,void 0);var y={ props:{ brandingImage:{ type:Object,default(){
      return null;
    } },brandingLink:{ type:Object,default(){
      return null;
    } }}};const b=y;var B=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ attrs:{ id:"app-logo" }},[ e("a",n._b({ staticClass:"is-inline-block" },"a",n.brandingLink,!1),[ e("img",n._b({},"img",n.brandingImage,!1)) ]) ]);
      },S=[];B._withStripped=!0;const C=function(n){
        n&&n("data-v-421a408e_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-logo[data-v-421a408e] {\n  padding-right: 0.75rem;\n  border-right: 1px solid white;\n  margin-right: 0.75rem;\n}\n\n/*# sourceMappingURL=_Branding.vue.map */',map:{ version:3,sources:[ "_Branding.vue","/home/runner/work/phila-ui/phila-ui/src/components/AppHeader/_Branding.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;ACaA;EACA,wBAAA;EACA,kOAAA;EDXE,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AACpB;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA,wCAAwC",file:"_Branding.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-logo {\n  padding-right: 0.75rem;\n  border-right: 1px solid white;\n  margin-right: 0.75rem;\n}\n\n/*# sourceMappingURL=_Branding.vue.map */','<template>\n  <div id="app-logo">\n    <a\n      v-bind="brandingLink"\n      class="is-inline-block"\n    >\n      <img\n        v-bind="brandingImage"\n      >\n    </a>\n  </div>\n</template>\n<script>\nexport default {\n  props: {\n    brandingImage: {\n      type: Object,\n      default () {\n        return null;\n      },\n    },\n\n    /**\n     * The logo link\n    */\n    brandingLink: {\n      type: Object,\n      default () {\n        return null;\n      },\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n  #app-logo {\n    padding-right: 0.75rem;\n    border-right: 1px solid $white;\n    margin-right: 0.75rem;\n  }\n</style>' ]},media:void 0 });
      },O="data-v-421a408e",k=void 0,E=!1,x=s({ render:B,staticRenderFns:S },C,b,O,E,k,!1,l,void 0,void 0);var _={ name:"AppHeader",components:{ TrustedSite:v,Branding:x },props:{ appTitle:{ type:String,default:"Application Name" },appLink:{ type:String,default:"/" },appSubtitle:{ type:String,default:"" },brandingImage:{ type:Object,default:null },brandingLink:{ type:Object,default(){
      return{ href:"/" };
    } },isFluid:{ type:Boolean,default:!1 },isSticky:{ type:Boolean,default:!0 }},data(){
      return{ timeout:null };
    },computed:{ showRightNavOnSide(){
      return!this.showLeftNav&&this.showRightNav;
    },showLeftNav(){
      return(this.$slots["tabs-nav"]||this.$slots["left-nav"])&&!this.isMobile;
    },showRightNav(){
      return this.$slots["lang-selector-nav"]||this.$slots["dropdown-nav"]||this.$slots["right-nav"];
    },showBranding(){
      return this.brandingImage&&this.brandingLink&&!this.isMobile;
    } },created(){
      window.addEventListener("resize",this.handleResize);
    },destroyed(){
      window.removeEventListener("resize",this.handleResize),clearTimeout(this.timeout);
    },mounted(){
      this.stickyHeader();
    },methods:{ handleResize(){
      this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{
        this.stickyHeader();
      },500);
    },stickyHeader(){
      this.isSticky&&this.$nextTick((function(){
        let n=document.querySelector("body"),t=document.querySelector("#app-header"),e=document.querySelector("main");n.classList.add("has-sticky-header"),e?e.style.cssText=e.style.cssText+`margin-top: ${t.offsetHeight}px`:console.warn("Remember to add a main container (<main>) when the header is sticky.");
      }));
    } }};const M=_;var I=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("header",{ ref:"app-header",class:{ "is-sticky":n.isSticky },attrs:{ id:"app-header" }},[ e("trusted-site",{ attrs:{ "is-fluid":n.isFluid },on:{ "update-status":n.stickyHeader }}),n._v(" "),e("div",{ attrs:{ id:"nav-wrap" }},[ e("div",{ staticClass:"container",class:{ "is-fluid":n.isFluid }},[ e("nav",{ attrs:{ id:"main-nav" }},[ e("div",{ staticClass:"columns is-marginless is-mobile is-vcentered is-multiline" },[ n.$slots["mobile-nav"]&&n.isMobile?e("div",{ staticClass:"column has-text-centered mobile-nav-col" },[ n._t("mobile-nav") ],2):n._e(),n._v(" "),n.showBranding?e("div",{ staticClass:"column is-narrow branding-col" },[ e("branding",{ attrs:{ "branding-image":n.brandingImage,"branding-link":n.brandingLink }}) ],1):n._e(),n._v(" "),e("div",{ staticClass:"column title-col",class:{ "no-mobile-nav":n.isMobile&&!n.$slots["mobile-nav"],"is-4":!n.isMobile&&n.showBranding&&n.showRightNavOnSide,"is-6":!n.showBranding&&n.showRightNavOnSide,"is-8":!n.isMobile&&!n.showRightNavOnSide&&!n.showBranding,"has-mobile-nav":n.$slots["mobile-nav"]&&n.isMobile }},[ e("div",[ e("a",{ staticClass:"app-title",attrs:{ href:n.appLink }},[ e("h1",[ n._v("\n                  "+n._s(n.appTitle)+"\n                ") ]),n._v(" "),n.appSubtitle&&!n.isMobile?e("h2",[ n._v(n._s(n.appSubtitle)) ]):n._e() ]) ]) ]),n._v(" "),n.showLeftNav||n.showRightNav?e("div",{ staticClass:"column nav-col",class:{ "is-12":!n.isMobile&&n.showLeftNav }},[ e("div",{ staticClass:"level",class:{ "is-pulled-right":!n.isMobile&&!n.showLeftNav }},[ n.showLeftNav?e("div",{ staticClass:"level-left" },[ n.$slots["tabs-nav"]?e("div",{ staticClass:"level-item" },[ n._t("tabs-nav") ],2):n._e(),n._v(" "),n.$slots["left-nav"]?e("div",{ staticClass:"level-item" },[ n._t("left-nav") ],2):n._e() ]):n._e(),n._v(" "),n.showRightNav?e("div",{ staticClass:"level-right" },[ n.$slots["right-nav"]&&!n.isMobile?e("div",{ staticClass:"level-item" },[ n._t("right-nav") ],2):n._e(),n._v(" "),n.$slots["lang-selector-nav"]?e("div",{ staticClass:"level-item" },[ n._t("lang-selector-nav") ],2):n._e(),n._v(" "),n.$slots["dropdown-nav"]&&!n.isMobile?e("div",{ staticClass:"level-item" },[ n._t("dropdown-nav") ],2):n._e() ]):n._e() ]) ]):n._e() ]) ]) ]) ]) ],1);
      },$=[];I._withStripped=!0;const F=function(n){
        n&&(n("data-v-3043c7e9_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-header .container {\n  padding: 0;\n}\n@media screen and (max-width: 1023px) {\n#app-header .container {\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n}\n}\n@media screen and (max-width: 767px) {\n#app-header .container {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n}\n}\n.m-nav-opened {\n  height: 100%;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */',map:{ version:3,sources:[ "AppHeader.vue","/home/runner/work/phila-ui/phila-ui/src/components/AppHeader/AppHeader.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACwOpB;EACA,UAAA;ADtOA;AACA;ACwOA;IACA,6BAAA;IACA,8BAAA;ADtOE;AACF;AACA;ACwOA;IACA,6BAAA;IACA,8BAAA;ADtOE;AACF;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA,wCAAwC",file:"AppHeader.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-header .container {\n  padding: 0;\n}\n@media screen and (max-width: 1023px) {\n  #app-header .container {\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n  }\n}\n@media screen and (max-width: 767px) {\n  #app-header .container {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n}\n\n.m-nav-opened {\n  height: 100%;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */','<template>\n  <header\n    id="app-header"\n    ref="app-header"\n    :class="{ \'is-sticky\': isSticky }"\n  >\n    <trusted-site\n      :is-fluid="isFluid"\n      @update-status="stickyHeader"\n    />\n    <div id="nav-wrap">\n      <div\n        class="container"\n        :class="{ \'is-fluid\': isFluid }"\n      >\n        <nav id="main-nav">\n          <div\n            class="columns is-marginless is-mobile is-vcentered is-multiline"\n          >\n            <div\n              v-if="$slots[\'mobile-nav\'] && isMobile"\n              class="column has-text-centered mobile-nav-col"\n            >\n              \x3c!-- @slot See [Mobile Navigation](/components/MobileNav) --\x3e\n              <slot name="mobile-nav" />\n            </div>\n            <div\n              v-if="showBranding"\n              class="column is-narrow branding-col"\n            >\n              <branding\n                :branding-image="brandingImage"\n                :branding-link="brandingLink"\n              />\n            </div>\n            <div\n              class="column title-col"\n              :class="{\n                \'no-mobile-nav\': isMobile && !$slots[\'mobile-nav\'],\n                \'is-4\': !isMobile && showBranding && showRightNavOnSide,\n                \'is-6\': !showBranding && showRightNavOnSide,\n                \'is-8\': !isMobile && !showRightNavOnSide && !showBranding,\n                \'has-mobile-nav\': $slots[\'mobile-nav\'] && isMobile,\n              }"\n            >\n              <div>\n                <a\n                  class="app-title"\n                  :href="appLink"\n                >\n                  <h1>\n                    {{ appTitle }}\n                  </h1>\n                  <h2 v-if="appSubtitle && !isMobile">{{ appSubtitle }}</h2>\n                </a>\n              </div>\n            </div>\n            <div\n              v-if="showLeftNav || showRightNav"\n              class="column nav-col"\n              :class="{ \'is-12\': !isMobile && showLeftNav }"\n            >\n              <div\n                class="level"\n                :class="{ \'is-pulled-right\': !isMobile && !showLeftNav }"\n              >\n                <div\n                  v-if="showLeftNav"\n                  class="level-left"\n                >\n                  <div\n                    v-if="$slots[\'tabs-nav\']"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot See [Tabbed Navigation](/components/TabsNav) --\x3e\n                    <slot name="tabs-nav" />\n                  </div>\n                  <div\n                    v-if="$slots[\'left-nav\']"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot Allows additional items on the left side of the header (on the right of the tabs navigation) --\x3e\n                    <slot name="left-nav" />\n                  </div>\n                </div>\n                <div\n                  v-if="showRightNav"\n                  class="level-right"\n                >\n                  <div\n                    v-if="$slots[\'right-nav\'] && !isMobile"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot Allows additional items on the right side of the header (on the left of the dropdown navigation) --\x3e\n                    <slot name="right-nav" />\n                  </div>\n                  <div\n                    v-if="$slots[\'lang-selector-nav\']"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot See [Language Selector](/components/LangSelector) --\x3e\n                    <slot name="lang-selector-nav" />\n                  </div>\n                  <div\n                    v-if="$slots[\'dropdown-nav\'] && !isMobile"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot See [Dropdown Navigation](/components/DropdownNav) --\x3e\n                    <slot name="dropdown-nav" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </header>\n</template>\n<script>\nimport TrustedSite from "./_TrustedSite.vue";\nimport Branding from "./_Branding.vue";\n\n/**\n * This is the application\'s main header.\n * @niceName Application Header\n * @group Navigation\n * @position 100\n */\nexport default {\n  name: "AppHeader",\n  components: {\n    TrustedSite,\n    Branding,\n  },\n  props: {\n    /**\n     * The application\'s title/name\n     */\n    appTitle: {\n      type: String,\n      default: "Application Name",\n    },\n\n    /**\n     * The application\'s title link. 99% of the time the application title should link to itself.\n     */\n    appLink: {\n      type: String,\n      default: "/",\n    },\n\n    /**\n     * The application\'s subtitle/description\n     */\n    appSubtitle: {\n      type: String,\n      default: "",\n    },\n\n    /**\n     * Branding image (eg. department logo). Accepts an Object of image attributes.\n     */\n    brandingImage: {\n      type: Object,\n      default: null,\n    },\n\n    /**\n     * Branding image link. Accepts an Object of link attributes.\n     */\n    brandingLink: {\n      type: Object,\n      default() {\n        return {\n          href: "/",\n        };\n      },\n    },\n\n    /**\n     * Allows the header elements (logo, title, navigation...) to expand with the window width, or stay aligned in the center (not recommended).\n     */\n    isFluid: {\n      type: Boolean,\n      default: false,\n    },\n\n    /**\n     * Fixes the header to the top of the page\n     * Requires the application to have the ``<main>`` tag for content positioning calculations\n     */\n    isSticky: {\n      type: Boolean,\n      default: true,\n    },\n  },\n  data() {\n    return {\n      timeout: null,\n    };\n  },\n  computed: {\n    showRightNavOnSide() {\n      return !this.showLeftNav && this.showRightNav;\n    },\n\n    showLeftNav() {\n      return (\n        (this.$slots["tabs-nav"] || this.$slots["left-nav"]) && !this.isMobile\n      );\n    },\n\n    showRightNav() {\n      return (\n        this.$slots["lang-selector-nav"] ||\n        this.$slots["dropdown-nav"] ||\n        this.$slots["right-nav"]\n      );\n    },\n\n    showBranding() {\n      return this.brandingImage && this.brandingLink && !this.isMobile;\n    },\n  },\n  created() {\n    window.addEventListener("resize", this.handleResize);\n  },\n  destroyed() {\n    window.removeEventListener("resize", this.handleResize);\n    clearTimeout(this.timeout);\n  },\n  mounted() {\n    this.stickyHeader();\n  },\n  methods: {\n    handleResize() {\n      if (this.timeout) {\n        clearTimeout(this.timeout);\n      }\n      this.timeout = setTimeout(() => {\n        this.stickyHeader();\n      }, 500);\n    },\n\n    stickyHeader() {\n      if (this.isSticky) {\n        //wait for dom to finish updating\n        this.$nextTick(function () {\n          let body = document.querySelector("body");\n          let header = document.querySelector("#app-header");\n          let main = document.querySelector("main");\n\n          body.classList.add("has-sticky-header");\n\n          if (!main) {\n            console.warn(\n              "Remember to add a main container (<main>) when the header is sticky.",\n            );\n            return;\n          }\n\n          main.style.cssText =\n            main.style.cssText + `margin-top: ${header.offsetHeight}px`;\n        });\n      }\n    },\n  },\n};\n<\/script>\n\n<style lang="scss">\n#app-header {\n  .container {\n    padding: 0;\n  }\n  @include until($desktop) {\n    .container {\n      padding-left: 1rem !important;\n      padding-right: 1rem !important;\n    }\n  }\n  @include until($tablet) {\n    .container {\n      padding-left: 0rem !important;\n      padding-right: 0rem !important;\n    }\n  }\n}\n.m-nav-opened {\n  height: 100%;\n  overflow: hidden;\n}\n</style>\n\n<style lang="scss" scoped>\n#app-header {\n  @include until($tablet) {\n    border-bottom: 2px solid $electric-blue;\n  }\n\n  &.is-sticky {\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 998;\n  }\n}\n\n#main-nav {\n  > .columns {\n    .column {\n      padding-top: 0.5rem;\n      padding-bottom: 1rem;\n\n      @include until($tablet) {\n        padding: 0;\n      }\n\n      &.mobile-nav-col {\n        @include until($tablet) {\n          width: 50px;\n          flex: none;\n        }\n      }\n\n      &.branding-col {\n        padding-left: 0;\n        padding-right: 0;\n      }\n\n      &.title-col {\n        padding-left: 0;\n        text-align: left;\n        @include until($tablet) {\n          padding-top: 0.5rem;\n          padding-bottom: 0.5rem;\n          width: calc(100% - 100px);\n          flex: none;\n          &.no-mobile-nav {\n            padding-left: 1rem;\n            width: calc(100% - 50px);\n          }\n        }\n        &.has-mobile-nav {\n          padding-left: 10px;\n        }\n      }\n\n      &.nav-col {\n        padding: 0;\n        @include until($tablet) {\n          width: 50px;\n          flex: none;\n        }\n      }\n    }\n    margin: 5px 0;\n  }\n}\n\n#nav-wrap {\n  background-color: $ben-franklin-blue-dark;\n}\n\na.app-title {\n  color: $white;\n  h1 {\n    font-family: $family-secondary;\n    font-size: 1.375rem;\n    font-weight: $weight-bold;\n    line-height: 1.09;\n    padding: 0;\n    @include until($tablet) {\n      font-weight: $weight-normal;\n      font-size: $size-normal;\n    }\n  }\n  h2 {\n    font-family: $family-secondary;\n    font-size: $size-large;\n    font-weight: $weight-normal;\n    line-height: 1.33;\n    padding: 0;\n  }\n}\n</style>' ]},media:void 0 }),n("data-v-3043c7e9_1",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n@media screen and (max-width: 767px) {\n#app-header[data-v-3043c7e9] {\n    border-bottom: 2px solid #25cef7;\n}\n}\n#app-header.is-sticky[data-v-3043c7e9] {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 998;\n}\n#main-nav > .columns[data-v-3043c7e9] {\n  margin: 5px 0;\n}\n#main-nav > .columns .column[data-v-3043c7e9] {\n  padding-top: 0.5rem;\n  padding-bottom: 1rem;\n}\n@media screen and (max-width: 767px) {\n#main-nav > .columns .column[data-v-3043c7e9] {\n    padding: 0;\n}\n}\n@media screen and (max-width: 767px) {\n#main-nav > .columns .column.mobile-nav-col[data-v-3043c7e9] {\n    width: 50px;\n    flex: none;\n}\n}\n#main-nav > .columns .column.branding-col[data-v-3043c7e9] {\n  padding-left: 0;\n  padding-right: 0;\n}\n#main-nav > .columns .column.title-col[data-v-3043c7e9] {\n  padding-left: 0;\n  text-align: left;\n}\n@media screen and (max-width: 767px) {\n#main-nav > .columns .column.title-col[data-v-3043c7e9] {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    width: calc(100% - 100px);\n    flex: none;\n}\n#main-nav > .columns .column.title-col.no-mobile-nav[data-v-3043c7e9] {\n    padding-left: 1rem;\n    width: calc(100% - 50px);\n}\n}\n#main-nav > .columns .column.title-col.has-mobile-nav[data-v-3043c7e9] {\n  padding-left: 10px;\n}\n#main-nav > .columns .column.nav-col[data-v-3043c7e9] {\n  padding: 0;\n}\n@media screen and (max-width: 767px) {\n#main-nav > .columns .column.nav-col[data-v-3043c7e9] {\n    width: 50px;\n    flex: none;\n}\n}\n#nav-wrap[data-v-3043c7e9] {\n  background-color: #0f4d90;\n}\na.app-title[data-v-3043c7e9] {\n  color: white;\n}\na.app-title h1[data-v-3043c7e9] {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 1.375rem;\n  font-weight: 700;\n  line-height: 1.09;\n  padding: 0;\n}\n@media screen and (max-width: 767px) {\na.app-title h1[data-v-3043c7e9] {\n    font-weight: 400;\n    font-size: 1rem;\n}\n}\na.app-title h2[data-v-3043c7e9] {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 1.125rem;\n  font-weight: 400;\n  line-height: 1.33;\n  padding: 0;\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */',map:{ version:3,sources:[ "AppHeader.vue","/home/runner/work/phila-ui/phila-ui/src/components/AppHeader/AppHeader.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AACpB;AC8PA;IAEA,gCAAA;AD7PE;AACF;AC+PA;ED7PE,WAAW;EC+Pb,eAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;AD7PA;ACkQA;ED/PE,aAAa;AACf;AACA;EC+PA,mBAAA;EACA,oBAAA;AD7PA;AACA;AACE;IC8PF,UAAA;AD5PE;AACF;AACA;AC6PA;IAEA,WAAA;IACA,UAAA;AD5PE;AACF;AC+PA;EACA,eAAA;EACA,gBAAA;AD7PA;ACgQA;EACA,eAAA;EACA,gBAAA;AD9PA;AACA;AC2PA;IAIA,mBAAA;IACA,sBAAA;IACA,yBAAA;IACA,UAAA;AD5PE;AC6PF;IACA,kBAAA;ID3PI,wBAAwB;AAC1B;AACF;AC6PA;EACA,kBAAA;AD3PA;AC+PA;EACA,UAAA;AD7PA;AACA;AC2PA;IAGA,WAAA;ID3PI,UAAU;AACZ;AACF;ACkQA;EACA,yBAAA;AD/PA;ACkQA;EACA,YAAA;AD/PA;ACgQA;EACA,gMAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,UAAA;AD9PA;AACA;ACwPA;IAOA,gBAAA;IACA,eAAA;AD5PE;AACF;AC8PA;ED5PE,gMAAgM;EAChM,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;AACZ;;AAEA,wCAAwC",file:"AppHeader.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n@media screen and (max-width: 767px) {\n  #app-header {\n    border-bottom: 2px solid #25cef7;\n  }\n}\n#app-header.is-sticky {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 998;\n}\n\n#main-nav > .columns {\n  margin: 5px 0;\n}\n#main-nav > .columns .column {\n  padding-top: 0.5rem;\n  padding-bottom: 1rem;\n}\n@media screen and (max-width: 767px) {\n  #main-nav > .columns .column {\n    padding: 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  #main-nav > .columns .column.mobile-nav-col {\n    width: 50px;\n    flex: none;\n  }\n}\n#main-nav > .columns .column.branding-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n#main-nav > .columns .column.title-col {\n  padding-left: 0;\n  text-align: left;\n}\n@media screen and (max-width: 767px) {\n  #main-nav > .columns .column.title-col {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n    width: calc(100% - 100px);\n    flex: none;\n  }\n  #main-nav > .columns .column.title-col.no-mobile-nav {\n    padding-left: 1rem;\n    width: calc(100% - 50px);\n  }\n}\n#main-nav > .columns .column.title-col.has-mobile-nav {\n  padding-left: 10px;\n}\n#main-nav > .columns .column.nav-col {\n  padding: 0;\n}\n@media screen and (max-width: 767px) {\n  #main-nav > .columns .column.nav-col {\n    width: 50px;\n    flex: none;\n  }\n}\n\n#nav-wrap {\n  background-color: #0f4d90;\n}\n\na.app-title {\n  color: white;\n}\na.app-title h1 {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 1.375rem;\n  font-weight: 700;\n  line-height: 1.09;\n  padding: 0;\n}\n@media screen and (max-width: 767px) {\n  a.app-title h1 {\n    font-weight: 400;\n    font-size: 1rem;\n  }\n}\na.app-title h2 {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  font-size: 1.125rem;\n  font-weight: 400;\n  line-height: 1.33;\n  padding: 0;\n}\n\n/*# sourceMappingURL=AppHeader.vue.map */','<template>\n  <header\n    id="app-header"\n    ref="app-header"\n    :class="{ \'is-sticky\': isSticky }"\n  >\n    <trusted-site\n      :is-fluid="isFluid"\n      @update-status="stickyHeader"\n    />\n    <div id="nav-wrap">\n      <div\n        class="container"\n        :class="{ \'is-fluid\': isFluid }"\n      >\n        <nav id="main-nav">\n          <div\n            class="columns is-marginless is-mobile is-vcentered is-multiline"\n          >\n            <div\n              v-if="$slots[\'mobile-nav\'] && isMobile"\n              class="column has-text-centered mobile-nav-col"\n            >\n              \x3c!-- @slot See [Mobile Navigation](/components/MobileNav) --\x3e\n              <slot name="mobile-nav" />\n            </div>\n            <div\n              v-if="showBranding"\n              class="column is-narrow branding-col"\n            >\n              <branding\n                :branding-image="brandingImage"\n                :branding-link="brandingLink"\n              />\n            </div>\n            <div\n              class="column title-col"\n              :class="{\n                \'no-mobile-nav\': isMobile && !$slots[\'mobile-nav\'],\n                \'is-4\': !isMobile && showBranding && showRightNavOnSide,\n                \'is-6\': !showBranding && showRightNavOnSide,\n                \'is-8\': !isMobile && !showRightNavOnSide && !showBranding,\n                \'has-mobile-nav\': $slots[\'mobile-nav\'] && isMobile,\n              }"\n            >\n              <div>\n                <a\n                  class="app-title"\n                  :href="appLink"\n                >\n                  <h1>\n                    {{ appTitle }}\n                  </h1>\n                  <h2 v-if="appSubtitle && !isMobile">{{ appSubtitle }}</h2>\n                </a>\n              </div>\n            </div>\n            <div\n              v-if="showLeftNav || showRightNav"\n              class="column nav-col"\n              :class="{ \'is-12\': !isMobile && showLeftNav }"\n            >\n              <div\n                class="level"\n                :class="{ \'is-pulled-right\': !isMobile && !showLeftNav }"\n              >\n                <div\n                  v-if="showLeftNav"\n                  class="level-left"\n                >\n                  <div\n                    v-if="$slots[\'tabs-nav\']"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot See [Tabbed Navigation](/components/TabsNav) --\x3e\n                    <slot name="tabs-nav" />\n                  </div>\n                  <div\n                    v-if="$slots[\'left-nav\']"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot Allows additional items on the left side of the header (on the right of the tabs navigation) --\x3e\n                    <slot name="left-nav" />\n                  </div>\n                </div>\n                <div\n                  v-if="showRightNav"\n                  class="level-right"\n                >\n                  <div\n                    v-if="$slots[\'right-nav\'] && !isMobile"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot Allows additional items on the right side of the header (on the left of the dropdown navigation) --\x3e\n                    <slot name="right-nav" />\n                  </div>\n                  <div\n                    v-if="$slots[\'lang-selector-nav\']"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot See [Language Selector](/components/LangSelector) --\x3e\n                    <slot name="lang-selector-nav" />\n                  </div>\n                  <div\n                    v-if="$slots[\'dropdown-nav\'] && !isMobile"\n                    class="level-item"\n                  >\n                    \x3c!-- @slot See [Dropdown Navigation](/components/DropdownNav) --\x3e\n                    <slot name="dropdown-nav" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </nav>\n      </div>\n    </div>\n  </header>\n</template>\n<script>\nimport TrustedSite from "./_TrustedSite.vue";\nimport Branding from "./_Branding.vue";\n\n/**\n * This is the application\'s main header.\n * @niceName Application Header\n * @group Navigation\n * @position 100\n */\nexport default {\n  name: "AppHeader",\n  components: {\n    TrustedSite,\n    Branding,\n  },\n  props: {\n    /**\n     * The application\'s title/name\n     */\n    appTitle: {\n      type: String,\n      default: "Application Name",\n    },\n\n    /**\n     * The application\'s title link. 99% of the time the application title should link to itself.\n     */\n    appLink: {\n      type: String,\n      default: "/",\n    },\n\n    /**\n     * The application\'s subtitle/description\n     */\n    appSubtitle: {\n      type: String,\n      default: "",\n    },\n\n    /**\n     * Branding image (eg. department logo). Accepts an Object of image attributes.\n     */\n    brandingImage: {\n      type: Object,\n      default: null,\n    },\n\n    /**\n     * Branding image link. Accepts an Object of link attributes.\n     */\n    brandingLink: {\n      type: Object,\n      default() {\n        return {\n          href: "/",\n        };\n      },\n    },\n\n    /**\n     * Allows the header elements (logo, title, navigation...) to expand with the window width, or stay aligned in the center (not recommended).\n     */\n    isFluid: {\n      type: Boolean,\n      default: false,\n    },\n\n    /**\n     * Fixes the header to the top of the page\n     * Requires the application to have the ``<main>`` tag for content positioning calculations\n     */\n    isSticky: {\n      type: Boolean,\n      default: true,\n    },\n  },\n  data() {\n    return {\n      timeout: null,\n    };\n  },\n  computed: {\n    showRightNavOnSide() {\n      return !this.showLeftNav && this.showRightNav;\n    },\n\n    showLeftNav() {\n      return (\n        (this.$slots["tabs-nav"] || this.$slots["left-nav"]) && !this.isMobile\n      );\n    },\n\n    showRightNav() {\n      return (\n        this.$slots["lang-selector-nav"] ||\n        this.$slots["dropdown-nav"] ||\n        this.$slots["right-nav"]\n      );\n    },\n\n    showBranding() {\n      return this.brandingImage && this.brandingLink && !this.isMobile;\n    },\n  },\n  created() {\n    window.addEventListener("resize", this.handleResize);\n  },\n  destroyed() {\n    window.removeEventListener("resize", this.handleResize);\n    clearTimeout(this.timeout);\n  },\n  mounted() {\n    this.stickyHeader();\n  },\n  methods: {\n    handleResize() {\n      if (this.timeout) {\n        clearTimeout(this.timeout);\n      }\n      this.timeout = setTimeout(() => {\n        this.stickyHeader();\n      }, 500);\n    },\n\n    stickyHeader() {\n      if (this.isSticky) {\n        //wait for dom to finish updating\n        this.$nextTick(function () {\n          let body = document.querySelector("body");\n          let header = document.querySelector("#app-header");\n          let main = document.querySelector("main");\n\n          body.classList.add("has-sticky-header");\n\n          if (!main) {\n            console.warn(\n              "Remember to add a main container (<main>) when the header is sticky.",\n            );\n            return;\n          }\n\n          main.style.cssText =\n            main.style.cssText + `margin-top: ${header.offsetHeight}px`;\n        });\n      }\n    },\n  },\n};\n<\/script>\n\n<style lang="scss">\n#app-header {\n  .container {\n    padding: 0;\n  }\n  @include until($desktop) {\n    .container {\n      padding-left: 1rem !important;\n      padding-right: 1rem !important;\n    }\n  }\n  @include until($tablet) {\n    .container {\n      padding-left: 0rem !important;\n      padding-right: 0rem !important;\n    }\n  }\n}\n.m-nav-opened {\n  height: 100%;\n  overflow: hidden;\n}\n</style>\n\n<style lang="scss" scoped>\n#app-header {\n  @include until($tablet) {\n    border-bottom: 2px solid $electric-blue;\n  }\n\n  &.is-sticky {\n    width: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 998;\n  }\n}\n\n#main-nav {\n  > .columns {\n    .column {\n      padding-top: 0.5rem;\n      padding-bottom: 1rem;\n\n      @include until($tablet) {\n        padding: 0;\n      }\n\n      &.mobile-nav-col {\n        @include until($tablet) {\n          width: 50px;\n          flex: none;\n        }\n      }\n\n      &.branding-col {\n        padding-left: 0;\n        padding-right: 0;\n      }\n\n      &.title-col {\n        padding-left: 0;\n        text-align: left;\n        @include until($tablet) {\n          padding-top: 0.5rem;\n          padding-bottom: 0.5rem;\n          width: calc(100% - 100px);\n          flex: none;\n          &.no-mobile-nav {\n            padding-left: 1rem;\n            width: calc(100% - 50px);\n          }\n        }\n        &.has-mobile-nav {\n          padding-left: 10px;\n        }\n      }\n\n      &.nav-col {\n        padding: 0;\n        @include until($tablet) {\n          width: 50px;\n          flex: none;\n        }\n      }\n    }\n    margin: 5px 0;\n  }\n}\n\n#nav-wrap {\n  background-color: $ben-franklin-blue-dark;\n}\n\na.app-title {\n  color: $white;\n  h1 {\n    font-family: $family-secondary;\n    font-size: 1.375rem;\n    font-weight: $weight-bold;\n    line-height: 1.09;\n    padding: 0;\n    @include until($tablet) {\n      font-weight: $weight-normal;\n      font-size: $size-normal;\n    }\n  }\n  h2 {\n    font-family: $family-secondary;\n    font-size: $size-large;\n    font-weight: $weight-normal;\n    line-height: 1.33;\n    padding: 0;\n  }\n}\n</style>' ]},media:void 0 }));
      },R="data-v-3043c7e9",j=void 0,T=!1,D=s({ render:I,staticRenderFns:$ },F,M,R,T,j,!1,l,void 0,void 0);function L(t){
      var o=e("3c4e");t.install=function(n){
        var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.installed){
          t.installed=!0;var a=e.altName||e.name||t.name,i=o.all([ t,e ]);n.component(a,i);
        }
      };var a={ install:t.install },i=null;"undefined"!==typeof window?i=window.Vue:"undefined"!==typeof n&&(i=n.Vue),i&&i.use(a);
    }L(D);var P={ name:"NavLink",props:{ link:{ type:Object,default(){
      return{};
    } }},methods:{ callFunc(){
      this.link.click&&"function"===typeof this.link.click&&this.link["click"]();
    } }};const N=P;var z=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return"native"===n.link.type?e("a",n._b({ class:{ "is-active":n.link.active },attrs:{ href:n.link.href },on:{ click:n.callFunc }},"a",n.link.attrs||{},!1),[ n._v("\n  "+n._s(n.link.text)+"\n") ]):e("router-link",{ attrs:{ to:{ name:n.link.href }},scopedSlots:n._u([{ key:"default",fn:function(t){
          var o=t.href,a=t.navigate,i=t.isExactActive;return[ e("a",n._b({ class:{ "is-active":i },attrs:{ href:o },on:{ click:a }},"a",n.link.attrs||{},!1),[ n._v("\n    "+n._s(n.link.text)+"\n  ") ]) ];
        } }]) });
      },V=[];z._withStripped=!0;const U=void 0,H=void 0,q=void 0,W=!1,G=s({ render:z,staticRenderFns:V },U,N,H,W,q,!1,void 0,void 0,void 0);var Y={ name:"AppFooter",components:{ NavLink:G },props:{ isSticky:{ type:Boolean,default:!1 },isHiddenMobile:{ type:Boolean,default:!0 },links:{ type:Array,default:()=>[]}},mounted(){
      const n=document.querySelector("main"),t=document.querySelector("#app-footer");if(n){
        if(this.isSticky&&t) {
          n.style.cssText=n.style.cssText+`padding-bottom: ${t.offsetHeight}px`;
        }else if(this.isMobile&&!this.isHiddenMobile||!this.isMobile){
          const e=document.querySelector("#app-header");if(e){
            const o=e.offsetHeight+t.offsetHeight;n.style.cssText=n.style.cssText+`min-height: calc(100vh - ${o}px)`;
          }else {
            console.warn("missing <app-header> for footer positioning");
          }
        }
      }else {
        console.warn("missing <main> tag for footer positioning");
      }
    } };const Z=Y;var Q=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return n.isMobile&&!n.isHiddenMobile||!n.isMobile?e("footer",{ class:{ "is-sticky":n.isSticky },attrs:{ id:"app-footer" }},[ e("div",{ staticClass:"container" }),n._v(" "),e("div",{ staticClass:"container has-text-centered" },[ n.links.length>0?[ e("ul",{ staticClass:"inline-list",attrs:{ role:"menu" }},n._l(n.links,(function(n,t){
          return e("li",{ key:"fl-"+t,attrs:{ role:"none" }},[ e("nav-link",{ attrs:{ link:n,role:"menuitem" }}) ],1);
        })),0) ]:[ n._t("default") ] ],2) ]):n._e();
      },K=[];Q._withStripped=!0;const J=function(n){
        n&&(n("data-v-5a79773f_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-footer a {\n  color: white;\n  line-height: 46px;\n}\n#app-footer a:hover {\n  color: #25cef7;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */',map:{ version:3,sources:[ "AppFooter.vue","/home/runner/work/phila-ui/phila-ui/src/components/AppFooter/AppFooter.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACyDpB;EDvDE,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,cAAc;AAChB;;AAEA,wCAAwC",file:"AppFooter.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-footer a {\n  color: white;\n  line-height: 46px;\n}\n#app-footer a:hover {\n  color: #25cef7;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */','<template>\n  <footer\n    v-if="(isMobile && !isHiddenMobile) || !isMobile"\n    id="app-footer"\n    :class="{ \'is-sticky\': isSticky }"\n  >\n    <div class="container" />\n    <div class="container has-text-centered">\n      <template v-if="links.length > 0">\n        <ul\n          role="menu"\n          class="inline-list"\n        >\n          <li\n            v-for="(link, index) in links"\n            :key="`fl-${index}`"\n            role="none"\n          >\n            <nav-link\n              :link="link"\n              role="menuitem"\n            />\n          </li>\n        </ul>\n      </template>\n      <template v-else>\n        \x3c!-- @slot The default slot takes an unordered list (```<ul>```) of links. --\x3e\n        <slot />\n      </template>\n    </div>\n  </footer>\n</template>\n<script>\nimport NavLink from \'@/components/NavLink/NavLink.vue\';\n\n/**\n * This is the application\'s main footer. It displays a list of links via slot or props\n * @niceName Application Footer\n * @group Navigation\n * @position 105\n */\nexport default {\n  name: \'AppFooter\',\n  components: {\n    NavLink,\n  },\n  props: {\n    /**\n     * Fixes footer to the bottom of the window\n    */\n    isSticky: {\n      type: Boolean,\n      default: false,\n    },\n    /**\n     * Hides footer navigation on mobile (recommended)\n    */\n    isHiddenMobile: {\n      type: Boolean,\n      default: true,\n    },\n    /**\n     * An array of objects. See [Navigation Link](/components/NavLink)\n    */\n    links: {\n      type: Array,\n      default: () => {\n        return [];\n      },\n    },\n  },\n  mounted () {\n\n    const main = document.querySelector(\'main\');\n    const footer = document.querySelector(\'#app-footer\');\n\n    if (main) {\n      if (this.isSticky && footer) {\n        main.style.cssText = main.style.cssText + `padding-bottom: ${footer.offsetHeight}px`;\n      } else {\n        if ((this.isMobile && !this.isHiddenMobile) || !this.isMobile) {\n          const header = document.querySelector(\'#app-header\');\n          if (header) {\n            const mainHeight = header.offsetHeight + footer.offsetHeight;\n            main.style.cssText = main.style.cssText + `min-height: calc(100vh - ${mainHeight}px)`;\n          } else {\n            console.warn(\'missing <app-header> for footer positioning\');\n          }\n        }\n      }\n    } else {\n      console.warn(\'missing <main> tag for footer positioning\');\n    }\n  },\n};\n<\/script>\n<style lang="scss">\n  #app-footer {\n    a {\n      color: $white;\n      line-height: 46px;\n      &:hover {\n        color: $electric-blue;\n      }\n    }\n  }\n</style>\n<style lang="scss" scoped>\n  #app-footer {\n    background-color: $ben-franklin-blue-dark;\n    height: 46px;\n    max-height: 46px;\n    overflow: hidden;\n    width: 100%;\n    &.is-sticky {\n      position: fixed;\n      bottom: 0;\n      z-index: 99;\n    }\n    ul {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n      li {\n        display: inline-block;\n        vertical-align: middle;\n        margin: 0;\n        padding: 0;\n        &:not(:last-child) {\n          &:after {\n            content: "|";\n            margin: 0 1rem;\n            display: inline-block;\n            position: relative;\n            color: $white;\n            font-weight: $weight-bold;\n          }\n        }\n      }\n    }\n  }\n</style>\n' ]},media:void 0 }),n("data-v-5a79773f_1",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-footer[data-v-5a79773f] {\n  background-color: #0f4d90;\n  height: 46px;\n  max-height: 46px;\n  overflow: hidden;\n  width: 100%;\n}\n#app-footer.is-sticky[data-v-5a79773f] {\n  position: fixed;\n  bottom: 0;\n  z-index: 99;\n}\n#app-footer ul[data-v-5a79773f] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#app-footer ul li[data-v-5a79773f] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  padding: 0;\n}\n#app-footer ul li[data-v-5a79773f]:not(:last-child):after {\n  content: "|";\n  margin: 0 1rem;\n  display: inline-block;\n  position: relative;\n  color: white;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */',map:{ version:3,sources:[ "AppFooter.vue","/home/runner/work/phila-ui/phila-ui/src/components/AppFooter/AppFooter.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACmEpB;EACA,yBAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,WAAA;ADjEA;ACkEA;EACA,eAAA;EACA,SAAA;EACA,WAAA;ADhEA;ACkEA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;ADhEA;ACiEA;EACA,qBAAA;EACA,sBAAA;EACA,SAAA;EACA,UAAA;AD/DA;ACiEA;EACA,YAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;ED/DE,YAAY;EACZ,gBAAgB;AAClB;;AAEA,wCAAwC",file:"AppFooter.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#app-footer {\n  background-color: #0f4d90;\n  height: 46px;\n  max-height: 46px;\n  overflow: hidden;\n  width: 100%;\n}\n#app-footer.is-sticky {\n  position: fixed;\n  bottom: 0;\n  z-index: 99;\n}\n#app-footer ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n#app-footer ul li {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0;\n  padding: 0;\n}\n#app-footer ul li:not(:last-child):after {\n  content: "|";\n  margin: 0 1rem;\n  display: inline-block;\n  position: relative;\n  color: white;\n  font-weight: 700;\n}\n\n/*# sourceMappingURL=AppFooter.vue.map */','<template>\n  <footer\n    v-if="(isMobile && !isHiddenMobile) || !isMobile"\n    id="app-footer"\n    :class="{ \'is-sticky\': isSticky }"\n  >\n    <div class="container" />\n    <div class="container has-text-centered">\n      <template v-if="links.length > 0">\n        <ul\n          role="menu"\n          class="inline-list"\n        >\n          <li\n            v-for="(link, index) in links"\n            :key="`fl-${index}`"\n            role="none"\n          >\n            <nav-link\n              :link="link"\n              role="menuitem"\n            />\n          </li>\n        </ul>\n      </template>\n      <template v-else>\n        \x3c!-- @slot The default slot takes an unordered list (```<ul>```) of links. --\x3e\n        <slot />\n      </template>\n    </div>\n  </footer>\n</template>\n<script>\nimport NavLink from \'@/components/NavLink/NavLink.vue\';\n\n/**\n * This is the application\'s main footer. It displays a list of links via slot or props\n * @niceName Application Footer\n * @group Navigation\n * @position 105\n */\nexport default {\n  name: \'AppFooter\',\n  components: {\n    NavLink,\n  },\n  props: {\n    /**\n     * Fixes footer to the bottom of the window\n    */\n    isSticky: {\n      type: Boolean,\n      default: false,\n    },\n    /**\n     * Hides footer navigation on mobile (recommended)\n    */\n    isHiddenMobile: {\n      type: Boolean,\n      default: true,\n    },\n    /**\n     * An array of objects. See [Navigation Link](/components/NavLink)\n    */\n    links: {\n      type: Array,\n      default: () => {\n        return [];\n      },\n    },\n  },\n  mounted () {\n\n    const main = document.querySelector(\'main\');\n    const footer = document.querySelector(\'#app-footer\');\n\n    if (main) {\n      if (this.isSticky && footer) {\n        main.style.cssText = main.style.cssText + `padding-bottom: ${footer.offsetHeight}px`;\n      } else {\n        if ((this.isMobile && !this.isHiddenMobile) || !this.isMobile) {\n          const header = document.querySelector(\'#app-header\');\n          if (header) {\n            const mainHeight = header.offsetHeight + footer.offsetHeight;\n            main.style.cssText = main.style.cssText + `min-height: calc(100vh - ${mainHeight}px)`;\n          } else {\n            console.warn(\'missing <app-header> for footer positioning\');\n          }\n        }\n      }\n    } else {\n      console.warn(\'missing <main> tag for footer positioning\');\n    }\n  },\n};\n<\/script>\n<style lang="scss">\n  #app-footer {\n    a {\n      color: $white;\n      line-height: 46px;\n      &:hover {\n        color: $electric-blue;\n      }\n    }\n  }\n</style>\n<style lang="scss" scoped>\n  #app-footer {\n    background-color: $ben-franklin-blue-dark;\n    height: 46px;\n    max-height: 46px;\n    overflow: hidden;\n    width: 100%;\n    &.is-sticky {\n      position: fixed;\n      bottom: 0;\n      z-index: 99;\n    }\n    ul {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n      li {\n        display: inline-block;\n        vertical-align: middle;\n        margin: 0;\n        padding: 0;\n        &:not(:last-child) {\n          &:after {\n            content: "|";\n            margin: 0 1rem;\n            display: inline-block;\n            position: relative;\n            color: $white;\n            font-weight: $weight-bold;\n          }\n        }\n      }\n    }\n  }\n</style>\n' ]},media:void 0 }));
      },X="data-v-5a79773f",nn=void 0,tn=!1,en=s({ render:Q,staticRenderFns:K },J,Z,X,tn,nn,!1,l,void 0,void 0);L(en);var on={ name:"Callout",props:{ message:{ type:String,default:"" },type:{ type:String,default:"" }},computed:{ messageType(){
      let n="";return""!==this.type&&(n="is-"+this.type),n;
    } }};const an=on;var sn=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"message",class:n.messageType },[ e("div",{ staticClass:"message-body" },[ n.message?[ n._v("\n      "+n._s(n.message)+"\n    ") ]:[ n.$slots["default"]?[ n._t("default") ]:n._e() ] ],2) ]);
      },rn=[];sn._withStripped=!0;const ln=void 0,fn=void 0,cn=void 0,un=!1,pn=s({ render:sn,staticRenderFns:rn },ln,an,fn,un,cn,!1,void 0,void 0,void 0);L(pn);var dn={ name:"InputForm",inheritAttrs:!1,props:{ id:{ type:String,default:()=>"ta_"+Math.random().toString(12).substring(2,8) },title:{ type:String,default:"" },desc:{ type:String,default:"" },errors:{ type:[ Object,String,Number ],default(){
      return"";
    } },hideErrorsCount:{ type:Boolean,default:!1 }},computed:{ errorsCount(){
      return"string"===typeof this.errors||"number"===typeof this.errors?this.errors:this.countVeeValidateErrors(this.errors);
    },inputListeners:function(){
      var n=this;return Object.assign({},this.$listeners,{ input:function(t){
        n.$emit("input",t.target.value);
      } });
    } },methods:{ countVeeValidateErrors(n){
      let t=Object.keys(n).map(t=>n[t]),e=t.reduce((n,t)=>t.length>0?n+1:n,0);return e;
    } }};const hn=dn;var An=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("form",n._b({ attrs:{ id:"form-"+n.id,novalidate:"" }},"form",n.$attrs,!1),[ n.title?e("div",{ staticClass:"form-title form-padding" },[ n._v("\n    "+n._s(n.title)+"\n  ") ]):n._e(),n._v(" "),n.desc?e("p",{ staticClass:"form-subtitle form-padding" },[ n._v("\n    "+n._s(n.desc)+"\n  ") ]):n._e(),n._v(" "),n._t("default"),n._v(" "),!n.hideErrorsCount&&n.errorsCount>0?e("div",{ staticClass:"form-errors has-text-centered has-text-weight-bold has-text-love-park-red-dark" },[ n._m(0),n._v(" "),e("span",[ n._v("\n      This form has "+n._s(n.errorsCount)+" error"+n._s(n.errorsCount>1?"s":"")+"\n    ") ]) ]):n._e(),n._v(" "),n.$slots["submit"]?[ e("div",{ staticClass:"form-submit form-padding" },[ n._t("submit") ],2) ]:n._e() ],2);
      },mn=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fa fa-exclamation-triangle" }) ]);
      } ];An._withStripped=!0;const gn=function(n){
        n&&n("data-v-f25079c4_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.form-title[data-v-f25079c4] {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  color: #444444;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  line-height: 2.1875rem;\n  font-size: 1.75rem !important;\n}\n.form-errors[data-v-f25079c4] {\n  font-size: 0.875rem;\n  padding: 1rem 1.5rem;\n  background-color: #fee7e7;\n  margin: 1rem 0;\n}\n.form-errors span.icon[data-v-f25079c4] {\n  font-size: 1rem;\n}\n\n/*# sourceMappingURL=InputForm.vue.map */',map:{ version:3,sources:[ "InputForm.vue","/home/runner/work/phila-ui/phila-ui/src/components/Inputs/InputForm/InputForm.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACkEpB;EDhEE,gMAAgM;EAChM,cAAc;EACd,gBAAgB;EAChB,oBAAoB;EACpB,sBAAsB;EACtB,6BAA6B;AAC/B;AC6DA;EACA,mBAAA;ED1DE,oBAAoB;EACpB,yBAAyB;EACzB,cAAc;AAChB;AACA;EACE,eAAe;AACjB;;AAEA,wCAAwC",file:"InputForm.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.form-title {\n  font-family: Montserrat, BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;\n  color: #444444;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  line-height: 2.1875rem;\n  font-size: 1.75rem !important;\n}\n\n.form-errors {\n  font-size: 0.875rem;\n  padding: 1rem 1.5rem;\n  background-color: #fee7e7;\n  margin: 1rem 0;\n}\n.form-errors span.icon {\n  font-size: 1rem;\n}\n\n/*# sourceMappingURL=InputForm.vue.map */','<template>\n  <form\n    :id="`form-${id}`"\n    v-bind="$attrs"\n    novalidate\n  >\n    <div\n      v-if="title"\n      class="form-title form-padding"\n    >\n      {{ title }}\n    </div>\n    <p\n      v-if="desc"\n      class="form-subtitle form-padding"\n    >\n      {{ desc }}\n    </p>\n    \x3c!-- @slot The form inputs --\x3e\n    <slot />\n    <div\n      v-if="!hideErrorsCount && errorsCount > 0"\n      class="form-errors has-text-centered has-text-weight-bold has-text-love-park-red-dark"\n    >\n      <span class="icon">\n        <i class="fa fa-exclamation-triangle" />\n      </span>\n      <span>\n        This form has {{ errorsCount }} error{{ errorsCount > 1 ? \'s\' : \'\' }}\n      </span>\n    </div>\n    <template v-if="$slots[\'submit\']">\n      <div class="form-submit form-padding">\n        \x3c!-- @slot Submit button placement. For standard forms, it\'s best to use this slot to keep the submit button as the last element in the form, bellow the errors count). --\x3e\n        <slot name="submit" />\n      </div>\n    </template>\n  </form>\n</template>\n<script>\n/**\n * A ```<form>``` wrapper with error handling and submit button.\n * @niceName Form\n * @group Inputs\n * @position 200\n */\nexport default {\n  name: "InputForm",\n  inheritAttrs: false,\n  props: {\n    id: {\n      type: String,\n      default: () => `ta_${Math.random().toString(12).substring(2, 8)}`,\n    },\n    title: {\n      type: String,\n      default: \'\',\n    },\n    desc: {\n      type: String,\n      default: \'\',\n    },\n    errors: {\n      type: [ Object, String, Number ],\n      default () {\n        return \'\';\n      },\n    },\n    hideErrorsCount: {\n      type: Boolean,\n      default: false,\n    },\n  },\n  computed: {\n    errorsCount () {\n      if (typeof this.errors === \'string\' || typeof this.errors === \'number\') {\n        return this.errors;\n      }\n      return this.countVeeValidateErrors(this.errors);\n    },\n    inputListeners: function () {\n      var vm = this;\n      return Object.assign({},\n        this.$listeners,\n        {\n          input: function (event) {\n            vm.$emit(\'input\', event.target.value);\n          },\n        },\n      );\n    },\n  },\n  methods: {\n    countVeeValidateErrors (errors) {\n\n      let values = Object.keys(errors).map(key => {\n        return errors[key];\n      });\n\n      let count = values.reduce((total, error) => error.length > 0 ? total + 1 : total, 0);\n\n      return count;\n    },\n  },\n};\n<\/script>\n<style lang="scss" scoped>\n  .form-title {\n    @include heading-2;\n  }\n  .form-errors {\n    font-size: 0.875rem;\n    padding: 1rem 1.5rem;\n    background-color: $error-light;\n    margin: 1rem 0;\n    span.icon {\n      font-size: 1rem;\n    }\n  }\n</style>' ]},media:void 0 });
      },wn="data-v-f25079c4",vn=void 0,yn=!1,bn=s({ render:An,staticRenderFns:mn },gn,hn,wn,yn,vn,!1,l,void 0,void 0);function Bn(n){
      return Bn="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){
        return typeof n;
      }:function(n){
        return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n;
      },Bn(n);
    }function Sn(n,t,e){
      return t in n?Object.defineProperty(n,t,{ value:e,enumerable:!0,configurable:!0,writable:!0 }):n[t]=e,n;
    }L(bn);var Cn={ props:{ id:{ type:String,default:function(){
        return"ta_".concat(Math.random().toString(12).substring(2,8));
      } },errors:{ type:[ Array,String ],default:function(){
        return"";
      } }},watch:{ error:function(){
        this.hasError();
      } },computed:{ error:function(){
        return Array.isArray(this.errors)?this.errors[0]:this.errors;
      },classes:function(){
        var n=[];return void 0!==this.$attrs.required&&n.push("required"),this.error&&n.push("has-error"),this.innerLabel&&n.push("inner-label"),this.forceInputBoxSize&&n.push("input-width"),n.join(" ");
      } },mounted:function(){
        this.hasError();
      },methods:{ hasError:function(){
        this.error&&this.$parent.$emit("hasError",Sn({},this.id,""!==this.error));
      },optionValue:function(n,t){
        var e=this.options;return this.optgroup&&(e=this.ungroupedOptions),Array.isArray(e)?"string"===typeof n?n:"object"===Bn(n)?n[this.valueKey]:void 0:t;
      } }},On={ name:"Checkbox",mixins:[ Cn ],inheritAttrs:!1,props:{ options:{ type:[ Object,Array ],default:()=>({ "option-1":"Option 1","option-2":"Option 2","option-3":"Option 3" }) },textKey:{ type:String,default:"" },valueKey:{ type:String,default:"" },value:{ type:[ Array ],default(){
        return[];
      } },label:{ type:String,default:"" },desc:{ type:String,default:"" },numOfColumns:{ type:[ String,Number ],default:1 },small:{ type:Boolean,default:!1 }},data(){
        return{ localValue:this.value };
      },computed:{ inputListeners:function(){
        delete this.$listeners["input"];var n=this;return Object.assign({},this.$listeners,{ change:function(t){
          n.$emit("change",n.localValue),n.$emit("input",n.localValue);
        } });
      },checkRadioClasses(){
        return this.small?this.classes+" small-checkradio":this.classes;
      } },watch:{ value(n){
        this.localValue=n;
      } }};const kn=On;var En=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"input-wrap input-checkbox",class:n.checkRadioClasses },[ e("fieldset",[ e("legend",[ n.label?[ n._v("\n        "+n._s(n.label)+"\n      ") ]:[ n._t("label") ] ],2),n._v(" "),n.error?[ e("div",{ staticClass:"input-error-msg" },[ n._m(0),n._v(" "),e("span",[ n._v(n._s(n.error)) ]) ]) ]:n._e(),n._v(" "),n.desc?e("div",{ staticClass:"is-field-info" },[ n._v("\n      "+n._s(n.desc)+"\n    ") ]):[ n.$slots["desc"]?e("div",{ staticClass:"is-field-info" },[ n._t("desc") ],2):n._e() ],n._v(" "),e("div",{ style:"columns: "+n.numOfColumns+" auto",attrs:{ id:"cb-group-"+n.id }},n._l(n.options,(function(t,o){
          return e("div",{ key:"k-"+o,staticClass:"control" },[ e("input",n._g(n._b({ directives:[{ name:"model",rawName:"v-model",value:n.localValue,expression:"localValue" }],staticClass:"is-checkradio",attrs:{ id:"cb-"+o+"-"+n.id,name:"cb-"+o+"-"+n.id,type:"checkbox","aria-checked":n.value.includes(n.optionValue(t,o)),role:"checkbox" },domProps:{ value:n.optionValue(t,o),checked:Array.isArray(n.localValue)?n._i(n.localValue,n.optionValue(t,o))>-1:n.localValue },on:{ change:function(e){
            var a=n.localValue,i=e.target,s=!!i.checked;if(Array.isArray(a)){
              var r=n.optionValue(t,o),l=n._i(a,r);i.checked?l<0&&(n.localValue=a.concat([ r ])):l>-1&&(n.localValue=a.slice(0,l).concat(a.slice(l+1)));
            }else {
              n.localValue=s;
            }
          } }},"input",t.attrs||{},!1),n.inputListeners)),n._v(" "),e("label",{ attrs:{ for:"cb-"+o+"-"+n.id }},[ n._v("\n          "+n._s(n.textKey?t[n.textKey]:t)+"\n        ") ]) ]);
        })),0) ],2) ]);
      },xn=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fas fa-exclamation-circle" }) ]);
      } ];En._withStripped=!0;const _n=void 0,Mn=void 0,In=void 0,$n=!1,Fn=s({ render:En,staticRenderFns:xn },_n,kn,Mn,$n,In,!1,void 0,void 0,void 0);L(Fn);var Rn={ name:"Radio",mixins:[ Cn ],inheritAttrs:!1,props:{ options:{ type:[ Object,Array ],default:()=>({ "option-1":"Option 1","option-2":"Option 2","option-3":"Option 3" }) },textKey:{ type:String,default:"" },valueKey:{ type:String,default:"" },value:{ type:null,default:"" },label:{ type:String,default:"" },desc:{ type:String,default:"" },numOfColumns:{ type:[ String,Number ],default:1 },small:{ type:Boolean,default:!1 }},data(){
      return{ localValue:this.value };
    },computed:{ checkRadioClasses(){
      return this.small?this.classes+" small-checkradio":this.classes;
    },inputListeners:function(){
      delete this.$listeners["input"];var n=this;return Object.assign({},this.$listeners,{ change:function(t){
        n.$emit("change",n.localValue),n.$emit("input",n.localValue);
      } });
    } },watch:{ value(n){
      this.localValue=n;
    } }};const jn=Rn;var Tn=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"input-wrap input-radio",class:n.checkRadioClasses },[ e("fieldset",[ e("legend",[ n.label?[ n._v("\n        "+n._s(n.label)+"\n      ") ]:[ n._t("label") ] ],2),n._v(" "),n.error?[ e("div",{ staticClass:"input-error-msg" },[ n._m(0),n._v(" "),e("span",[ n._v(n._s(n.error)) ]) ]) ]:n._e(),n._v(" "),n.desc?e("div",{ staticClass:"is-field-info" },[ n._v("\n      "+n._s(n.desc)+"\n    ") ]):[ n.$slots["desc"]?e("div",{ staticClass:"is-field-info" },[ n._t("desc") ],2):n._e() ],n._v(" "),e("div",{ style:"columns: "+n.numOfColumns+" auto",attrs:{ id:"rd-group-"+n.id,role:"radiogroup" }},n._l(n.options,(function(t,o){
          return e("div",{ key:o,staticClass:"control" },[ e("input",n._g(n._b({ directives:[{ name:"model",rawName:"v-model",value:n.localValue,expression:"localValue" }],staticClass:"is-checkradio",attrs:{ id:"rd-"+o+"-"+n.id,type:"radio",role:"radio","aria-checked":n.value===n.optionValue(t,o),name:"rd-"+o+"-"+n.id },domProps:{ value:n.optionValue(t,o),checked:n._q(n.localValue,n.optionValue(t,o)) },on:{ change:function(e){
            n.localValue=n.optionValue(t,o);
          } }},"input",t.attrs||{},!1),n.inputListeners)),n._v(" "),e("label",{ attrs:{ for:"rd-"+o+"-"+n.id }},[ n._v("\n          "+n._s(n.textKey?t[n.textKey]:t)+"\n        ") ]) ]);
        })),0) ],2) ]);
      },Dn=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fas fa-exclamation-circle" }) ]);
      } ];Tn._withStripped=!0;const Ln=void 0,Pn=void 0,Nn=void 0,zn=!1,Vn=s({ render:Tn,staticRenderFns:Dn },Ln,jn,Pn,zn,Nn,!1,void 0,void 0,void 0);L(Vn);var Un={ name:"Dropdown",mixins:[ Cn ],inheritAttrs:!1,props:{ options:{ type:[ Object,Array ],default:()=>({ "option-1":"Option 1" }) },label:{ type:String,default:"" },placeholder:{ type:String,default:"" },textKey:{ type:String,default:"" },value:{ type:[ String,Number ],default:"" },valueKey:{ type:String,default:"" },desc:{ type:String,default:"" },icon:{ type:String,default:"" },innerLabel:{ type:Boolean,default:!0 },optgroup:{ type:Boolean,defaults:!1 }},data(){
      return{ localSelected:"" };
    },computed:{ ungroupedOptions(){
      let n=[],t={},e="";return Object.keys(this.options).forEach(o=>{
        Array.isArray(this.options[o])?(e="array",n.push(this.options[o])):(e="obj",Object.assign(t,this.options[o]));
      }),"array"===e?n:t;
    },inputListeners:function(){
      var n=this;return delete this.$listeners.input,Object.assign({},this.$listeners,{ change:function(t){
        n.$emit("input",n.localSelected),n.$emit("change",n.localSelected);
      } });
    },inputModifierClasses(){
      let n=[];return""!==this.icon&&n.push("has-icons-left"),n.join(" ");
    } },watch:{ value(n,t){
      n!==t&&(this.localSelected=this.value);
    } },mounted(){
      this.localSelected=this.value;
    },methods:{ isSelected(n,t){
      let e=this.optionValue(t,n);e===this.value&&(this.localSelected=this.value);
    } }};const Hn=Un;var qn=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"input-wrap input-dropdown",class:n.classes },[ e("div",{ staticClass:"field" },[ n.innerLabel?n._e():e("label",{ staticClass:"label",attrs:{ for:"dd-"+n.id }},[ n._v("\n      "+n._s(n.label)+"\n    ") ]),n._v(" "),e("div",{ staticClass:"control is-large",class:n.inputModifierClasses },[ e("div",{ staticClass:"select is-fullwidth" },[ ""!==n.localSelected&&n.innerLabel?e("label",{ attrs:{ for:"dd-"+n.id }},[ n._v("\n          "+n._s(n.label?n.label:n.placeholder)+"\n        ") ]):n._e(),n._v(" "),e("select",n._g(n._b({ directives:[{ name:"model",rawName:"v-model",value:n.localSelected,expression:"localSelected" }],attrs:{ id:"dd-"+n.id,"aria-label":n.label?n.label:n.placeholder },on:{ change:function(t){
          var e=Array.prototype.filter.call(t.target.options,(function(n){
            return n.selected;
          })).map((function(n){
            var t="_value"in n?n._value:n.value;return t;
          }));n.localSelected=t.target.multiple?e:e[0];
        } }},"select",n.$attrs,!1),n.inputListeners),[ e("option",{ attrs:{ value:"" }},[ n._v("\n            "+n._s(void 0!==this.$attrs.required?n.placeholder+"*":n.placeholder)+"\n          ") ]),n._v(" "),n.optgroup?n._l(n.options,(function(t,o){
          return e("optgroup",{ key:o,attrs:{ label:o }},n._l(n.options[o],(function(t,o){
            return e("option",{ key:o,attrs:{ disabled:!!t["disabled"]&&t["disabled"] },domProps:{ value:n.optionValue(t,o),selected:n.isSelected(o,t) }},[ n._v("\n                "+n._s(n.textKey?t[n.textKey]:t)+"\n              ") ]);
          })),0);
        })):n._l(n.options,(function(t,o){
          return e("option",{ key:o,attrs:{ disabled:!!t["disabled"]&&t["disabled"] },domProps:{ value:n.optionValue(t,o),selected:n.isSelected(o,t) }},[ n._v("\n              "+n._s(n.textKey?t[n.textKey]:t)+"\n            ") ]);
        })) ],2),n._v(" "),n.icon?e("span",{ staticClass:"icon is-large is-left input-icon" },[ e("i",{ class:n.icon }) ]):n._e() ]) ]) ]),n._v(" "),n.desc?e("div",{ staticClass:"supplemental-text" },[ n._v("\n    "+n._s(n.desc)+"\n  ") ]):[ n.$slots["desc"]?e("div",{ staticClass:"supplemental-text" },[ n._t("desc") ],2):n._e() ],n._v(" "),n.error?[ e("div",{ staticClass:"input-error-msg" },[ n._m(0),n._v(" "),e("span",[ n._v(n._s(n.error)) ]) ]) ]:n._e() ],2);
      },Wn=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fas fa-exclamation-circle" }) ]);
      } ];qn._withStripped=!0;const Gn=function(n){
        n&&n("data-v-2ba5eeed_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.input-dropdown .select[data-v-2ba5eeed] {\n  height: 3.5rem;\n}\n.input-dropdown .select label[data-v-2ba5eeed] {\n  top: 0;\n  left: 0;\n  opacity: 1;\n}\n.input-dropdown .select select[data-v-2ba5eeed] {\n  height: 100%;\n  width: 100%;\n}\n.input-dropdown .select label + select[data-v-2ba5eeed] {\n  padding: 1rem 1rem 0 0.8rem;\n}\n@supports (-moz-appearance: none) {\n.input-dropdown .select label + select[data-v-2ba5eeed] {\n    padding: 1rem 1rem 0 0.5rem;\n}\n}\n\n/*# sourceMappingURL=Dropdown.vue.map */',map:{ version:3,sources:[ "Dropdown.vue","/home/runner/work/phila-ui/phila-ui/src/components/Inputs/Dropdown/Dropdown.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACwOpB;EACA,cAAA;ADtOA;ACuOA;EACA,MAAA;EACA,OAAA;EACA,UAAA;ADrOA;ACuOA;EACA,YAAA;EACA,WAAA;ADrOA;ACuOA;EACA,2BAAA;ADrOA;AACA;ACmOA;IDjOI,2BAA2B;AAC7B;AACF;;AAEA,uCAAuC",file:"Dropdown.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.input-dropdown .select {\n  height: 3.5rem;\n}\n.input-dropdown .select label {\n  top: 0;\n  left: 0;\n  opacity: 1;\n}\n.input-dropdown .select select {\n  height: 100%;\n  width: 100%;\n}\n.input-dropdown .select label + select {\n  padding: 1rem 1rem 0 0.8rem;\n}\n@supports (-moz-appearance: none) {\n  .input-dropdown .select label + select {\n    padding: 1rem 1rem 0 0.5rem;\n  }\n}\n\n/*# sourceMappingURL=Dropdown.vue.map */','<template>\n  <div\n    class="input-wrap input-dropdown"\n    :class="classes"\n  >\n    <div class="field">\n      <label\n        v-if="!innerLabel"\n        class="label"\n        :for="`dd-${id}`"\n      >\n        {{ label }}\n      </label>\n      <div\n        class="control is-large"\n        :class="inputModifierClasses"\n      >\n        <div\n          class="select is-fullwidth"\n        >\n          <label\n            v-if="localSelected !== \'\' && innerLabel"\n            :for="`dd-${id}`"\n          >\n            {{ label ? label : placeholder }}\n          </label>\n          <select\n            :id="`dd-${id}`"\n            v-model="localSelected"\n            :aria-label="label ? label : placeholder"\n            v-bind="$attrs"\n            v-on="inputListeners"\n          >\n            <option value="">\n              {{ this.$attrs.required !== undefined ? `${placeholder}*` : placeholder }}\n            </option>\n            <template v-if="optgroup">\n              <optgroup\n                v-for="(groupValue, group) in options"\n                :key="group"\n                :label="group"\n              >\n                <option\n                  v-for="(option, key) in options[group]"\n                  :key="key"\n                  :value="optionValue(option, key)"\n                  :selected="isSelected(key, option)"\n                  :disabled="option[\'disabled\'] ? option[\'disabled\'] : false"\n                >\n                  {{ !textKey ? option : option[textKey] }}\n                </option>\n              </optgroup>\n            </template>\n            <template v-else>\n              <option\n                v-for="(option, key) in options"\n                :key="key"\n                :value="optionValue(option, key)"\n                :selected="isSelected(key, option)"\n                :disabled="option[\'disabled\'] ? option[\'disabled\'] : false"\n              >\n                {{ !textKey ? option : option[textKey] }}\n              </option>\n            </template>\n          </select>\n          <span\n            v-if="icon"\n            class="icon is-large is-left input-icon"\n          >\n            <i :class="icon" />\n          </span>\n        </div>\n      </div>\n    </div>\n    <div\n      v-if="desc"\n      class="supplemental-text"\n    >\n      {{ desc }}\n    </div>\n    <template v-else>\n      <div\n        v-if="$slots[\'desc\']"\n        class="supplemental-text"\n      >\n        \x3c!-- @slot Alternative description --\x3e\n        <slot name="desc" />\n      </div>\n    </template>\n    <template v-if="error">\n      <div class="input-error-msg">\n        <span class="icon"><i class="fas fa-exclamation-circle" /></span>\n        <span>{{ error }}</span>\n      </div>\n    </template>\n  </div>\n</template>\n<script>\nimport { inputMixins } from \'@/utils/inputMixins\';\n/**\n * Styled select input\n * @niceName Dropdown / Select\n * @group Inputs\n * @position 220\n */\nexport default {\n  name: \'Dropdown\',\n  mixins: [\n    inputMixins,\n  ],\n  inheritAttrs: false,\n  props: {\n\n    /**\n     * The dropdown options.\n     * @values Array of Strings, Array of Objects, Object\n     */\n    options: {\n      type: [ Object, Array ],\n      default: () => {\n        return {\n          \'option-1\': \'Option 1\',\n        };\n      },\n    },\n\n    /**\n     * The dropdown label\n     */\n    label: {\n      type: String,\n      default: \'\',\n    },\n\n    /**\n     * The dropdown placeholder\n     */\n    placeholder: {\n      type: String,\n      default: \'\',\n    },\n\n    /**\n     * The Object key containing the dropdown text. Required when using options as an Array of Objects.\n     */\n    textKey: {\n      type: String,\n      default: "",\n    },\n\n    /**\n     * The dropdown value / v-model\n     */\n    value: {\n      type: [ String, Number ],\n      default: \'\',\n    },\n\n    /**\n     * The Object key containing the dropdown value. Required when using options as an Array of Objects.\n     */\n    valueKey: {\n      type: String,\n      default: "",\n    },\n\n    /**\n     * The dropdown description\n     */\n    desc: {\n      type: String,\n      default: \'\',\n    },\n\n    /**\n     * The dropdown icon. It expects font-awesome icon classes.\n     */\n    icon: {\n      type: String,\n      default: \'\',\n    },\n\n    /**\n     * Whether the label should be displayed inside the dropdown (true) or above it (false).\n     */\n    innerLabel: {\n      type: Boolean,\n      default: true,\n    },\n\n    /**\n     * Enables optgroup\n     */\n    optgroup: {\n      type: Boolean,\n      defaults: false,\n    },\n\n  },\n  data () {\n    return {\n      localSelected: \'\',\n    };\n  },\n  computed: {\n    ungroupedOptions () {\n\n      let ungroup = [];\n      let ungroupObj = {};\n      let type = \'\';\n\n      Object.keys(this.options).forEach(group => {\n        if (Array.isArray(this.options[group])) {\n          type = \'array\';\n          ungroup.push(this.options[group]);\n        } else {\n          type = \'obj\';\n          Object.assign(ungroupObj, this.options[group]);\n        }\n      });\n\n      return type === \'array\' ? ungroup : ungroupObj;\n\n    },\n    inputListeners: function () {\n      var vm = this;\n      delete this.$listeners.input;\n      return Object.assign(\n        {},\n        this.$listeners,\n        {\n          change: function (event) {\n            //Input event is necessary for v-model\n            vm.$emit(\'input\', vm.localSelected);\n            //Change event is necessary for everything else\n            vm.$emit(\'change\', vm.localSelected);\n          },\n        },\n      );\n    },\n    inputModifierClasses () {\n      let classes = [];\n      if (this.icon !== \'\') {\n        classes.push(\'has-icons-left\');\n      }\n      return classes.join(\' \');\n    },\n  },\n  watch: {\n    value (newValue, oldValue) {\n      if (newValue !== oldValue) {\n        this.localSelected = this.value;\n      }\n    },\n  },\n  mounted () {\n    this.localSelected = this.value;\n  },\n  methods: {\n    isSelected (key, option) {\n      let dropdownOptionValue = this.optionValue(option, key);\n\n      if (dropdownOptionValue === this.value) {\n        this.localSelected = this.value;\n      }\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n\n.input-dropdown {\n  .select {\n    height: 3.5rem;\n    label {\n      top: 0;\n      left: 0;\n      opacity: 1;\n    }\n    select {\n      height: 100%;\n      width: 100%;\n    }\n    label + select {\n      padding: 1rem 1rem 0 0.8rem;\n      //Fixes SELECT padding on Firefox\n      @supports ( -moz-appearance: none ){\n        padding: 1rem 1rem 0 0.5rem;\n      }\n    }\n  }\n}\n\n</style>\n' ]},media:void 0 });
      },Yn="data-v-2ba5eeed",Zn=void 0,Qn=!1,Kn=s({ render:qn,staticRenderFns:Wn },Gn,Hn,Yn,Qn,Zn,!1,l,void 0,void 0);L(Kn);var Jn={ name:"DropdownNav",components:{ NavLink:G },props:{ nav:{ type:Object,default(){
      return{ button:"My Items",icon:null,links:[]};
    } }},data(){
      return{ isActive:!1 };
    },mounted(){
      this.addDropdownArrow();
    },methods:{ addDropdownArrow(){
      const n=document.querySelectorAll(".dropdown-nav");n&&n.forEach(n=>{
        const t=n.querySelector("button");t.classList.add("navbar-link"),this.isMobile&&t.classList.add("is-arrowless");
      });
    } }};const Xn=Jn;var nt=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"dropdown-nav",class:{ "is-active":n.isActive },on:{ click:function(t){
          n.isActive=!n.isActive;
        } }},[ n.nav.links.length>0?[ e("button",[ n.nav.icon?e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fas fa-user-circle" }) ]):n._e(),n._v(" "),e("span",[ n._v(n._s(n.nav.button)) ]) ]),n._v(" "),e("ul",{ attrs:{ role:"menu" }},[ n._l(n.nav.links,(function(n,t){
          return[ (n.type,[ e("li",{ key:"ddl-"+t,attrs:{ role:"none" }},[ e("nav-link",{ attrs:{ link:n,role:"menuitem" }}) ],1) ]) ];
        })) ],2) ]:[ n._t("default") ] ],2);
      },tt=[];nt._withStripped=!0;const et=function(n){
        n&&n("data-v-0a45c9f2_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.dropdown-nav {\n  text-align: left;\n  position: relative;\n}\n.dropdown-nav.is-active {\n  background-color: #2176d2;\n}\n.dropdown-nav.is-active ul {\n  display: block;\n}\n.dropdown-nav button {\n  cursor: pointer;\n  background-color: transparent;\n  display: inline-block;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 0.5rem 2.3rem 0.5rem 0.75rem;\n  border: 0;\n  transition: background-color, 0.25s ease-in-out;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media screen and (max-width: 767px) {\n.dropdown-nav button {\n    font-size: 1.75rem;\n}\n}\n.dropdown-nav button:hover {\n  background-color: #2176d2;\n  color: white;\n}\n.dropdown-nav button.navbar-link {\n  text-align: left;\n}\n.dropdown-nav button.navbar-link:after {\n  border-color: white;\n  right: 1rem;\n  margin-top: -0.5rem;\n}\n.dropdown-nav button.navbar-link .icon {\n  padding-right: 0.4rem;\n  vertical-align: middle;\n  font-size: 1.4rem;\n}\n@media screen and (max-width: 767px) {\n.dropdown-nav button.navbar-link .icon {\n    font-size: 1.75rem;\n}\n}\n@media screen and (max-width: 767px) {\n.dropdown-nav button {\n    padding: 0.5rem;\n}\n.dropdown-nav button.navbar-link {\n    line-height: 0;\n}\n.dropdown-nav button.navbar-link span {\n    display: none;\n}\n.dropdown-nav button.navbar-link span.icon {\n    text-align: center;\n    display: inline;\n    padding: 0;\n    width: 29px;\n    height: 29px;\n}\n}\n.dropdown-nav ul {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #2176d2;\n  z-index: 999;\n  min-width: 100%;\n  width: auto;\n}\n.dropdown-nav ul li {\n  float: right;\n  width: 100%;\n  border-bottom: 1px solid #daedfe;\n}\n.dropdown-nav ul li a {\n  padding: 0.75rem 2rem;\n  color: white;\n  line-height: 1.1;\n  width: 100%;\n  display: block;\n}\n.dropdown-nav ul li a:hover {\n  background-color: #daedfe;\n  color: #444444;\n}\n\n/*# sourceMappingURL=DropdownNav.vue.map */',map:{ version:3,sources:[ "DropdownNav.vue","/home/runner/work/phila-ui/phila-ui/src/components/DropdownNav/DropdownNav.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACgEpB;EACA,gBAAA;EACA,kBAAA;AD9DA;AC+DA;EACA,yBAAA;AD7DA;AC8DA;EACA,cAAA;AD5DA;AC+DA;EACA,eAAA;EACA,6BAAA;EACA,qBAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,qCAAA;EACA,SAAA;EACA,+CAAA;EACA,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AD7DA;AACA;AC+CA;IAeA,kBAAA;AD3DE;AACF;AC4DA;EACA,yBAAA;EACA,YAAA;AD1DA;AC4DA;EACA,gBAAA;AD1DA;AC2DA;EACA,mBAAA;EACA,WAAA;EACA,mBAAA;ADzDA;AC2DA;EACA,qBAAA;EACA,sBAAA;EACA,iBAAA;ADzDA;AACA;ACqDA;IAKA,kBAAA;ADvDE;AACF;AACA;ACoBA;IAsCA,eAAA;ADvDE;ACwDF;IACA,cAAA;ADtDE;ACuDF;IACA,aAAA;ADrDE;ACuDF;IACA,kBAAA;IACA,eAAA;IACA,UAAA;IACA,WAAA;IACA,YAAA;ADrDE;AACF;ACyDA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,yBAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;ADvDA;ACwDA;EACA,YAAA;EACA,WAAA;EACA,gCAAA;ADtDA;ACuDA;EACA,qBAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;ADrDA;ACsDA;EDpDE,yBAAyB;EACzB,cAAc;AAChB;;AAEA,0CAA0C",file:"DropdownNav.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.dropdown-nav {\n  text-align: left;\n  position: relative;\n}\n.dropdown-nav.is-active {\n  background-color: #2176d2;\n}\n.dropdown-nav.is-active ul {\n  display: block;\n}\n.dropdown-nav button {\n  cursor: pointer;\n  background-color: transparent;\n  display: inline-block;\n  color: white;\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 0.5rem 2.3rem 0.5rem 0.75rem;\n  border: 0;\n  transition: background-color, 0.25s ease-in-out;\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n@media screen and (max-width: 767px) {\n  .dropdown-nav button {\n    font-size: 1.75rem;\n  }\n}\n.dropdown-nav button:hover {\n  background-color: #2176d2;\n  color: white;\n}\n.dropdown-nav button.navbar-link {\n  text-align: left;\n}\n.dropdown-nav button.navbar-link:after {\n  border-color: white;\n  right: 1rem;\n  margin-top: -0.5rem;\n}\n.dropdown-nav button.navbar-link .icon {\n  padding-right: 0.4rem;\n  vertical-align: middle;\n  font-size: 1.4rem;\n}\n@media screen and (max-width: 767px) {\n  .dropdown-nav button.navbar-link .icon {\n    font-size: 1.75rem;\n  }\n}\n@media screen and (max-width: 767px) {\n  .dropdown-nav button {\n    padding: 0.5rem;\n  }\n  .dropdown-nav button.navbar-link {\n    line-height: 0;\n  }\n  .dropdown-nav button.navbar-link span {\n    display: none;\n  }\n  .dropdown-nav button.navbar-link span.icon {\n    text-align: center;\n    display: inline;\n    padding: 0;\n    width: 29px;\n    height: 29px;\n  }\n}\n.dropdown-nav ul {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #2176d2;\n  z-index: 999;\n  min-width: 100%;\n  width: auto;\n}\n.dropdown-nav ul li {\n  float: right;\n  width: 100%;\n  border-bottom: 1px solid #daedfe;\n}\n.dropdown-nav ul li a {\n  padding: 0.75rem 2rem;\n  color: white;\n  line-height: 1.1;\n  width: 100%;\n  display: block;\n}\n.dropdown-nav ul li a:hover {\n  background-color: #daedfe;\n  color: #444444;\n}\n\n/*# sourceMappingURL=DropdownNav.vue.map */','<template>\n  <div\n    class="dropdown-nav"\n    :class="{ \'is-active\' : isActive }"\n    @click="isActive = !isActive"\n  >\n    <template v-if="nav.links.length > 0">\n      <button>\n        <span\n          v-if="nav.icon"\n          class="icon"\n        >\n          <i class="fas fa-user-circle" />\n        </span>\n        <span>{{ nav.button }}</span>\n      </button>\n      <ul role="menu">\n        <template v-for="(link, index) in nav.links">\n          <template v-if="link.type === \'link\'">\n            <li\n              :key="`ddl-${index}`"\n              role="none"\n            >\n              <nav-link\n                :link="link"\n                role="menuitem"\n              />\n            </li>\n          </template>\n          <template v-else>\n            <li\n              :key="`ddl-${index}`"\n              role="none"\n            >\n              <nav-link\n                :link="link"\n                role="menuitem"\n              />\n            </li>\n          </template>\n        </template>\n      </ul>\n    </template>\n    <template v-else>\n      \x3c!-- The default slot takes a ```button``` as the trigger, and an unordered list (```<ul>```) of links as the dropdown items. --\x3e\n      <slot />\n    </template>\n  </div>\n</template>\n\n<script>\nimport NavLink from \'@/components/NavLink/NavLink.vue\';\n\n/**\n * A dropdown navigation.  Primarily used as a slot of the [Application Header](/components/AppHeader).\n * @niceName Dropdown Navigation\n * @group Navigation\n * @position 125\n */\nexport default {\n  name: \'DropdownNav\',\n  components: {\n    NavLink,\n  },\n  props: {\n    /**\n     * An Object which includes the button (trigger), a FontAwesome icon (optional), and the list of links. See [Navigation Link](/components/NavLink)\n     */\n    nav: {\n      type: Object,\n      default () {\n        return {\n          button: \'My Items\',\n          icon: null,\n          links: [],\n        };\n      },\n    },\n  },\n  data () {\n    return {\n      isActive: false,\n    };\n  },\n  mounted () {\n    this.addDropdownArrow();\n  },\n  methods: {\n    addDropdownArrow () {\n      const dropdowns = document.querySelectorAll(\'.dropdown-nav\');\n      if (dropdowns) {\n        dropdowns.forEach(dropdown => {\n          const btn = dropdown.querySelector(\'button\');\n          btn.classList.add(\'navbar-link\');\n          if (this.isMobile) {\n            btn.classList.add(\'is-arrowless\');\n          }\n        });\n      }\n    },\n  },\n};\n<\/script>\n\n<style lang="scss">\n  .dropdown-nav {\n    text-align: left;\n    position: relative;\n    &.is-active {\n      background-color: $ben-franklin-blue;\n      ul {\n        display: block;\n      }\n    }\n    button {\n      cursor: pointer;\n      background-color: transparent;\n      display: inline-block;\n      color: $white;\n      font-size: $size-small;\n      font-weight: $weight-normal;\n      padding: 0.5rem 2.3rem 0.5rem 0.75rem;\n      border: 0;\n      transition: background-color, 0.25s ease-in-out;\n      max-width: 200px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      @include until ($tablet) {\n        font-size: $size-2;\n      }\n      &:hover {\n        background-color: $ben-franklin-blue;\n        color: $white;\n      }\n      &.navbar-link {\n        text-align: left;\n        &:after {\n          border-color: $white;\n          right: 1rem;\n          margin-top: -0.5rem;\n        }\n        .icon {\n          padding-right: 0.4rem;\n          vertical-align: middle;\n          font-size: 1.4rem;\n          @include until ($tablet) {\n            font-size: $size-2;\n          }\n        }\n      }\n      @include until ($tablet) {\n        padding: 0.5rem;\n        &.navbar-link {\n          line-height: 0;\n          span {\n            display: none;\n          }\n          span.icon {\n            text-align: center;\n            display: inline;\n            padding: 0;\n            width: 29px;\n            height: 29px;\n          }\n        }\n      }\n    }\n    ul {\n      display: none;\n      position: absolute;\n      right: 0;\n      background-color: $ben-franklin-blue;\n      z-index: 999;\n      min-width: 100%;\n      width: auto;\n      li {\n        float: right;\n        width: 100%;\n        border-bottom: 1px solid $ben-franklin-blue-light;\n        a {\n          padding: 0.75rem 2rem;\n          color: $white;\n          line-height: 1.1;\n          width: 100%;\n          display: block;\n          &:hover {\n            background-color: $ben-franklin-blue-light;\n            color: $grey-dark;\n          }\n        }\n      }\n    }\n  }\n</style>\n' ]},media:void 0 });
      },ot=void 0,at=void 0,it=!1,st=s({ render:nt,staticRenderFns:tt },et,Xn,ot,it,at,!1,l,void 0,void 0);var rt={ name:"LangSelector",components:{ DropdownNav:st },props:{ languages:{ type:Array,validator:function(n){
      const t=n.every(n=>n.language&&n.title);return t||console.error('The languages array must contain one or more objects with with\n          "language" and "title" keys'),t;
    },default(){
      return[{ language:"en-US",title:"English" }];
    } }},data(){
      return{ ready:!1 };
    },computed:{ selectedLang(){
      return this.languages.find(n=>n.language===this.$i18n.locale).title;
    } },created(){
      this.$i18n?this.ready=!0:console.error("You must import i18n globally for LangSelector");
    },methods:{ changeLang(n){
      this.$i18n.locale=n,localStorage.setItem("lang",n);
    } }};const lt=rt;var ft=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return n.ready?e("dropdown-nav",{ attrs:{ id:"lang-selector" }},[ e("button",[ e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fa fa-globe",attrs:{ title:"Language Selector" }}) ]),n._v(" "),e("span",[ n._v(n._s(n.selectedLang)) ]) ]),n._v(" "),e("ul",{ attrs:{ role:"menu" }},n._l(n.languages,(function(t,o){
          return e("li",{ key:"languages"+o,attrs:{ role:"none" }},[ e("a",{ attrs:{ href:"#",role:"menuitem" },on:{ click:function(e){
            return e.preventDefault(),n.changeLang(t.language);
          } }},[ n._v(n._s(t.title)) ]) ]);
        })),0) ]):n._e();
      },ct=[];ft._withStripped=!0;const ut=function(n){
        n&&n("data-v-4d2ffb73_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n@media screen and (max-width: 767px) {\n#lang-selector[data-v-4d2ffb73] {\n    width: 50px;\n    text-align: center;\n}\n#lang-selector button[data-v-4d2ffb73] {\n    width: 100%;\n    text-align: center;\n    padding: 0.6rem;\n}\n}\n\n/*# sourceMappingURL=LangSelector.vue.map */',map:{ version:3,sources:[ "LangSelector.vue","/home/runner/work/phila-ui/phila-ui/src/components/LangSelector/LangSelector.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AACpB;ACkDA;IACA,WAAA;IACA,kBAAA;ADhDE;AACA;IACE,WAAW;IACX,kBAAkB;IAClB,eAAe;AACjB;AACF;;AAEA,2CAA2C",file:"LangSelector.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n@media screen and (max-width: 767px) {\n  #lang-selector {\n    width: 50px;\n    text-align: center;\n  }\n  #lang-selector button {\n    width: 100%;\n    text-align: center;\n    padding: 0.6rem;\n  }\n}\n\n/*# sourceMappingURL=LangSelector.vue.map */','<template>\n  <dropdown-nav\n    v-if="ready"\n    id="lang-selector"\n  >\n    <button>\n      <span class="icon"><i\n        title="Language Selector"\n        class="fa fa-globe"\n      /></span>\n      <span>{{ selectedLang }}</span>\n    </button>\n    <ul role="menu">\n      <li\n        v-for="(lang, i) in languages"\n        :key="`languages${i}`"\n        role="none"\n      >\n        <a\n          href="#"\n          role="menuitem"\n          @click.prevent="changeLang(lang.language)"\n        >{{ lang.title }}</a>\n      </li>\n    </ul>\n  </dropdown-nav>\n</template>\n\n<script>\nimport DropdownNav from \'@/components/DropdownNav/DropdownNav.vue\';\n\n/**\n * A language dropdopwn navigation.  Primarily used as a slot of the [Application Header](/components/AppHeader). <alert type="warning">Requires the third-party component [vue-i18n](https://kazupon.github.io/vue-i18n/) which is not included. See #[dependencies](#dependencies).</alert>\n * @niceName Language Selector\n * @group Navigation\n * @position 130\n */\nexport default {\n  name: \'LangSelector\',\n  components: {\n    DropdownNav,\n  },\n  props: {\n    /**\n    * An array of language objects\n    */\n    languages: {\n      type: Array,\n      validator: function (languages) {\n        const isValid = languages.every(language => language.language && language.title);\n        if (!isValid) {\n          console.error(`The languages array must contain one or more objects with with\n          "language" and "title" keys`);\n        }\n        return isValid;\n      },\n      default() {\n        return [\n          {\n            language: "en-US",\n            title: "English",\n          },\n        ];\n      },\n    },\n  },\n  data() {\n    return { ready: false };\n  },\n  computed : {\n    selectedLang() {\n      return this.languages.find(lang => lang.language === this.$i18n.locale).title;\n    },\n  },\n  created() {\n    if(this.$i18n) {\n      this.ready = true;\n    } else {\n      console.error("You must import i18n globally for LangSelector");\n    }\n  },\n  methods: {\n    changeLang(lang) {\n      this.$i18n.locale = lang;\n      localStorage.setItem(\'lang\', lang);\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n  @include until ($tablet) {\n    #lang-selector {\n      width: 50px;\n      text-align: center;\n      button {\n        width: 100%;\n        text-align: center;\n        padding: 0.6rem;\n      };\n    }\n  }\n</style>\n' ]},media:void 0 });
      },pt="data-v-4d2ffb73",dt=void 0,ht=!1,At=s({ render:ft,staticRenderFns:ct },ut,lt,pt,ht,dt,!1,l,void 0,void 0);L(At);var mt={ inheritAttrs:!1,props:{ label:{ type:String,default:"" },desc:{ type:String,default:"" },placeholder:{ type:String,default:function(){
        var n="";return!0!==this.$options.propsData.innerLabel&&void 0!==this.$options.propsData.innerLabel||(n="Insert placeholder here"),n;
      } },type:{ type:String,default:"text" },value:{ type:[ String,Number ],default:"" },icon:{ type:String,default:"" },isLoading:{ type:Boolean,default:!1 },innerLabel:{ type:Boolean,default:!0 }},computed:{ inputListeners:function(){
        var n=this;return Object.assign({},this.$listeners,{ input:function(t){
          n.$emit("input",t.target.value,t);
        } });
      },inputModifierClasses:function(){
        var n=[];return this.isLoading&&n.push("is-loading"),""!==this.icon&&n.push("has-icons-right"),n.join(" ");
      } }},gt={ name:"Textbox",mixins:[ Cn,mt ]};const wt=gt;var vt=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"input-wrap input-textbox",class:n.classes },[ e("div",{ staticClass:"field" },[ n.innerLabel?n._e():e("label",{ staticClass:"label",attrs:{ for:"tb-"+n.id }},[ n._v("\n      "+n._s(n.label)+"\n    ") ]),n._v(" "),e("div",{ staticClass:"control is-large",class:n.inputModifierClasses },[ e("input",n._g(n._b({ staticClass:"input",attrs:{ id:"tb-"+n.id,placeholder:void 0!==n.$attrs.required&&""!==n.placeholder?n.placeholder+" *":n.placeholder,type:n.type },domProps:{ value:n.value }},"input",n.$attrs,!1),n.inputListeners)),n._v(" "),n.innerLabel?e("label",{ attrs:{ for:"tb-"+n.id }},[ n._v("\n        "+n._s(n.label?n.label:n.placeholder)+"\n      ") ]):n._e(),n._v(" "),n.icon?e("span",{ staticClass:"icon is-large is-right input-icon" },[ e("i",{ class:n.icon }) ]):n._e(),n._v(" "),n.desc?e("div",{ staticClass:"supplemental-text" },[ n._v("\n        "+n._s(n.desc)+"\n      ") ]):[ n.$slots["desc"]?e("div",{ staticClass:"supplemental-text" },[ n._t("desc") ],2):n._e() ] ],2),n._v(" "),n.error?[ e("div",{ staticClass:"input-error-msg" },[ n._m(0),n._v(" "),e("span",[ n._v(n._s(n.error)) ]) ]) ]:n._e() ],2) ]);
      },yt=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fas fa-exclamation-circle" }) ]);
      } ];vt._withStripped=!0;const bt=function(n){
        n&&n("data-v-55020f92_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n/*\nInput Textbox Styles\nApplied to the Textbox component and other components that inherit the Textbox visuals\n*/\n.input-textbox .input[data-v-55020f92] {\n  height: 3.5rem;\n}\n.input-textbox.inner-label .input + label[data-v-55020f92] {\n  opacity: 0;\n}\n.input-textbox.inner-label .input[data-v-55020f92]:not(:placeholder-shown), .input-textbox.inner-label .input[data-v-55020f92]:focus {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:placeholder-shown) + label[data-v-55020f92], .input-textbox.inner-label .input:focus + label[data-v-55020f92] {\n  opacity: 1;\n}\n.input-textbox.inner-label .input[data-v-55020f92]:not(:-ms-input-placeholder) {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:-ms-input-placeholder) + label[data-v-55020f92] {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=Textbox.vue.map */',map:{ version:3,sources:[ "Textbox.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AACpB;;;CAGC;AACD;EACE,cAAc;AAChB;AACA;EACE,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,UAAU;AACZ;;AAEA,sCAAsC",file:"Textbox.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n/*\nInput Textbox Styles\nApplied to the Textbox component and other components that inherit the Textbox visuals\n*/\n.input-textbox .input {\n  height: 3.5rem;\n}\n.input-textbox.inner-label .input + label {\n  opacity: 0;\n}\n.input-textbox.inner-label .input:not(:placeholder-shown), .input-textbox.inner-label .input:focus {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:placeholder-shown) + label, .input-textbox.inner-label .input:focus + label {\n  opacity: 1;\n}\n.input-textbox.inner-label .input:not(:-ms-input-placeholder) {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:-ms-input-placeholder) + label {\n  opacity: 1;\n}\n\n/*# sourceMappingURL=Textbox.vue.map */' ]},media:void 0 });
      },Bt="data-v-55020f92",St=void 0,Ct=!1,Ot=s({ render:vt,staticRenderFns:yt },bt,wt,Bt,Ct,St,!1,l,void 0,void 0);L(Ot);var kt={ name:"TextArea",mixins:[ Cn ],inheritAttrs:!1,props:{ value:{ type:[ String,Number ],default:"" },label:{ type:String,default:"" },placeholder:{ type:String,default(){
      let n="";return!0!==this.$options.propsData.innerLabel&&void 0!==this.$options.propsData.innerLabel||(n="Insert placeholder here"),n;
    } },desc:{ type:String,default:"" },innerLabel:{ type:Boolean,default:!0 }},data(){
      return{ localValue:"" };
    },computed:{ inputListeners:function(){
      var n=this;return Object.assign({},this.$listeners,{ input:function(t){
        n.$emit("input",t.target.value);
      } });
    } }};const Et=kt;var xt=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"input-wrap input-textarea",class:n.classes },[ e("div",{ staticClass:"field" },[ n.innerLabel?n._e():e("label",{ attrs:{ for:"ta-"+n.id }},[ n._v("\n      "+n._s(n.label)+"\n    ") ]),n._v(" "),e("div",{ staticClass:"control" },[ e("textarea",n._g(n._b({ staticClass:"textarea",attrs:{ id:"ta-"+n.id,placeholder:void 0!==n.$attrs.required&&""!==n.placeholder?n.placeholder+" *":n.placeholder },domProps:{ value:n.value }},"textarea",n.$attrs,!1),n.inputListeners)),n._v(" "),n.innerLabel?e("label",{ attrs:{ for:"ta-"+n.id }},[ n._v("\n        "+n._s(n.label?n.label:n.placeholder)+"\n      ") ]):n._e(),n._v(" "),n.desc?e("div",{ staticClass:"supplemental-text" },[ n._v("\n        "+n._s(n.desc)+"\n      ") ]):[ n.$slots["desc"]?e("div",{ staticClass:"supplemental-text" },[ n._t("desc") ],2):n._e() ] ],2) ]),n._v(" "),n.error?[ e("div",{ staticClass:"input-error-msg" },[ n._m(0),n._v(" "),e("span",[ n._v(n._s(n.error)) ]) ]) ]:n._e() ],2);
      },_t=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fas fa-exclamation-circle" }) ]);
      } ];xt._withStripped=!0;const Mt=function(n){
        n&&n("data-v-755db834_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\ntextarea[data-v-755db834]::-webkit-input-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\ntextarea[data-v-755db834]::-moz-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\n\n/* FF 4-18 */\ntextarea[data-v-755db834]:-moz-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\n\n/* FF 19+ */\ntextarea[data-v-755db834]:-ms-input-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\ntextarea[data-v-755db834]::placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\ntextarea[data-v-755db834]:focus::-webkit-input-placeholder {\n  color: transparent;\n}\ntextarea[data-v-755db834]:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ntextarea[data-v-755db834]:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ntextarea[data-v-755db834]:focus:-ms-input-placeholder {\n  color: transparent;\n}\n.input-textarea.inner-label[data-v-755db834] {\n  /* FF 4-18 */\n  /* FF 19+ */\n}\n.input-textarea.inner-label textarea[data-v-755db834]::-webkit-input-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea[data-v-755db834]::-moz-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea[data-v-755db834]:-moz-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea[data-v-755db834]:-ms-input-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea[data-v-755db834]::placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label .textarea + label[data-v-755db834] {\n  opacity: 0;\n  z-index: -1;\n}\n.input-textarea.inner-label .textarea[data-v-755db834]:not(:placeholder-shown), .input-textarea.inner-label .textarea[data-v-755db834]:focus {\n  padding: 1.5rem 1rem 0 0.75rem;\n}\n.input-textarea.inner-label .textarea:not(:placeholder-shown) + label[data-v-755db834], .input-textarea.inner-label .textarea:focus + label[data-v-755db834] {\n  opacity: 1;\n  z-index: 1;\n}\n.input-textarea.inner-label .textarea[data-v-755db834]:not(:-ms-input-placeholder) {\n  padding: 1.5rem 1rem 0 0.75rem;\n}\n.input-textarea.inner-label .textarea:not(:-ms-input-placeholder) + label[data-v-755db834] {\n  opacity: 1;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=TextArea.vue.map */',map:{ version:3,sources:[ "TextArea.vue","/home/runner/work/phila-ui/phila-ui/src/components/Inputs/TextArea/TextArea.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACqGpB;EACA,yBAAA;EACA,qBAAA;ADnGA;ACsGA;EACA,yBAAA;EACA,qBAAA;ADnGA;;ACqGA,YAAA;AACA;EACA,yBAAA;EDlGE,qBAAqB;AACvB;;ACoGA,WAAA;AACA;EACA,yBAAA;EACA,qBAAA;ADjGA;AAEA;ECmGA,yBAAA;EACA,qBAAA;ADjGA;ACmGA;EACA,kBAAA;ADhGA;ACmGA;EACA,kBAAA;ADhGA;;ACkGA,YAAA;AD/FA;ECiGA,kBAAA;AD/FA;;ACiGA,WAAA;AACA;EACA,kBAAA;AD9FA;ACkGA;EAUA,YAAA;EAKA,WAAA;AD5GA;AC8FA;EACA,yBAAA;EACA,qBAAA;AD5FA;AC+FA;EACA,yBAAA;EACA,qBAAA;AD7FA;ACgGA;EACA,yBAAA;ED9FE,qBAAqB;AACvB;ACiGA;EACA,yBAAA;EACA,qBAAA;AD/FA;ACkGA;EACA,yBAAA;EACA,qBAAA;ADhGA;ACmGA;EACA,UAAA;EACA,WAAA;ADjGA;ACmGA;EAEA,8BAAA;ADlGA;ACmGA;EACA,UAAA;EACA,UAAA;ADjGA;ACoGA;EACA,8BAAA;ADlGA;ACmGA;EDjGE,UAAU;EACV,UAAU;AACZ;;AAEA,uCAAuC",file:"TextArea.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\ntextarea::-webkit-input-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\n\ntextarea::-moz-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\n\n/* FF 4-18 */\ntextarea:-moz-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\n\n/* FF 19+ */\ntextarea:-ms-input-placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\n\ntextarea::placeholder {\n  color: #a1a1a1 !important;\n  opacity: 1 !important;\n}\n\ntextarea:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n\ntextarea:focus:-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 4-18 */\ntextarea:focus::-moz-placeholder {\n  color: transparent;\n}\n\n/* FF 19+ */\ntextarea:focus:-ms-input-placeholder {\n  color: transparent;\n}\n\n.input-textarea.inner-label {\n  /* FF 4-18 */\n  /* FF 19+ */\n}\n.input-textarea.inner-label textarea::-webkit-input-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea::-moz-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea:-moz-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea:-ms-input-placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label textarea::placeholder {\n  color: #444444 !important;\n  opacity: 1 !important;\n}\n.input-textarea.inner-label .textarea + label {\n  opacity: 0;\n  z-index: -1;\n}\n.input-textarea.inner-label .textarea:not(:placeholder-shown), .input-textarea.inner-label .textarea:focus {\n  padding: 1.5rem 1rem 0 0.75rem;\n}\n.input-textarea.inner-label .textarea:not(:placeholder-shown) + label, .input-textarea.inner-label .textarea:focus + label {\n  opacity: 1;\n  z-index: 1;\n}\n.input-textarea.inner-label .textarea:not(:-ms-input-placeholder) {\n  padding: 1.5rem 1rem 0 0.75rem;\n}\n.input-textarea.inner-label .textarea:not(:-ms-input-placeholder) + label {\n  opacity: 1;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=TextArea.vue.map */','<template>\n  <div\n    class="input-wrap input-textarea"\n    :class="classes"\n  >\n    <div class="field">\n      <label\n        v-if="!innerLabel"\n        :for="`ta-${id}`"\n      >\n        {{ label }}\n      </label>\n      <div class="control">\n        <textarea\n          :id="`ta-${id}`"\n          class="textarea"\n          v-bind="$attrs"\n          :value="value"\n          :placeholder="$attrs.required !== undefined && placeholder !== \'\' ? `${placeholder} *` : placeholder"\n          v-on="inputListeners"\n        />\n        <label\n          v-if="innerLabel"\n          :for="`ta-${id}`"\n        >\n          {{ label ? label : placeholder }}\n        </label>\n        <div\n          v-if="desc"\n          class="supplemental-text"\n        >\n          {{ desc }}\n        </div>\n        <template v-else>\n          <div\n            v-if="$slots[\'desc\']"\n            class="supplemental-text"\n          >\n            \x3c!-- @slot Alternative description --\x3e\n            <slot name="desc" />\n          </div>\n        </template>\n      </div>\n    </div>\n    <template v-if="error">\n      <div class="input-error-msg">\n        <span class="icon"><i class="fas fa-exclamation-circle" /></span>\n        <span>{{ error }}</span>\n      </div>\n    </template>\n  </div>\n</template>\n<script>\nimport { inputMixins } from \'@/utils/inputMixins\';\n/**\n * A textarea input\n * @niceName Textarea\n * @group Inputs\n * @position 225\n */\nexport default {\n  name: "TextArea",\n  mixins: [\n    inputMixins,\n  ],\n  inheritAttrs: false,\n  props: {\n\n    /**\n     * The textarea value / v-model\n     */\n    value: {\n      type: [ String, Number ],\n      default: "",\n    },\n\n    /**\n     * The textarea label\n     */\n    label: {\n      type: String,\n      default: \'\',\n    },\n\n    /**\n     * The textarea placeholder\n     */\n    placeholder: {\n      type: String,\n      default () {\n\n        let defaultValue = \'\';\n\n        if (this.$options.propsData.innerLabel === true || this.$options.propsData.innerLabel === undefined) {\n          defaultValue = \'Insert placeholder here\';\n        }\n\n        return defaultValue;\n\n      },\n    },\n\n    /**\n     * The textarea description\n     */\n    desc: {\n      type: String,\n      default: \'\',\n    },\n\n    /**\n     * Whether the label should be displayed inside the textarea (true) or above it (false).\n     */\n    innerLabel: {\n      type: Boolean,\n      default: true,\n    },\n\n  },\n  data () {\n    return {\n      localValue: \'\',\n    };\n  },\n  computed: {\n    inputListeners: function () {\n      var vm = this;\n      return Object.assign({},\n        this.$listeners,\n        {\n          input: function (event) {\n            vm.$emit(\'input\', event.target.value);\n          },\n        },\n      );\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n\n  textarea::-webkit-input-placeholder {\n    color: $grey-medium !important;\n    opacity: 1 !important;\n  }\n\n  textarea::-moz-placeholder {\n    color: $grey-medium !important;\n    opacity: 1 !important;\n  }\n  /* FF 4-18 */\n  textarea:-moz-placeholder {\n    color: $grey-medium !important;\n    opacity: 1 !important;\n  }\n  /* FF 19+ */\n  textarea:-ms-input-placeholder {\n    color: $grey-medium !important;\n    opacity: 1 !important;\n  }\n\n  textarea::placeholder {\n    color: $grey-medium !important;\n    opacity: 1 !important;\n  }\n  textarea:focus::-webkit-input-placeholder {\n    color: transparent;\n  }\n\n  textarea:focus:-moz-placeholder {\n    color: transparent;\n  }\n  /* FF 4-18 */\n  textarea:focus::-moz-placeholder {\n    color: transparent;\n  }\n  /* FF 19+ */\n  textarea:focus:-ms-input-placeholder {\n    color: transparent;\n  }\n\n  .input-textarea {\n    &.inner-label {\n      textarea::-webkit-input-placeholder {\n        color: $grey-dark !important;\n        opacity: 1 !important;\n      }\n\n      textarea::-moz-placeholder {\n        color: $grey-dark !important;\n        opacity: 1 !important;\n      }\n      /* FF 4-18 */\n      textarea:-moz-placeholder {\n        color: $grey-dark !important;\n        opacity: 1 !important;\n      }\n      /* FF 19+ */\n      textarea:-ms-input-placeholder {\n        color: $grey-dark !important;\n        opacity: 1 !important;\n      }\n\n      textarea::placeholder {\n        color: $grey-dark !important;\n        opacity: 1 !important;\n      }\n      .textarea {\n        + label {\n          opacity: 0;\n          z-index: -1;\n        }\n        &:not(:placeholder-shown),\n        &:focus {\n          padding: 1.5rem 1rem 0 0.75rem;\n          + label {\n            opacity: 1;\n            z-index: 1;\n          }\n        }\n        &:not(:-ms-input-placeholder) {\n          padding: 1.5rem 1rem 0 0.75rem;\n          + label {\n            opacity: 1;\n            z-index: 1;\n          }\n        }\n      }\n    }\n  }\n\n</style>\n\n' ]},media:void 0 });
      },It="data-v-755db834",$t=void 0,Ft=!1,Rt=s({ render:xt,staticRenderFns:_t },Mt,Et,It,Ft,$t,!1,l,void 0,void 0);L(Rt);var jt={ data:function(){
        return{ localValue:"",mask:{ mask:"(000) 000 - 0000",lazy:!0 },onAccept:this.acceptEvent,onComplete:this.completeEvent };
      },directives:{ imask:o["a"] },watch:{ value:function(){
        this.localValue=this.value;
      } },beforeMount:function(){
        this.localValue=this.value;
      },methods:{ acceptEvent:function(n){
        var t=n.detail;this.$emit("input",t._value),this.$emit("unmasked-input",t._unmaskedValue);
      },completeEvent:function(n){
        var t=n.detail;this.$emit("complete",t._value);
      },onFocus:function(){
        this.localValue||(this.mask.lazy=!1);
      },onBlur:function(n){
        n.target.maskRef._unmaskedValue||(this.mask.lazy=!0);
      } }},Tt={ name:"Phone",mixins:[ Cn,mt,jt ],props:{ forceInputBoxSize:{ type:Boolean,default:!0 }}};const Dt=Tt;var Lt=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"input-wrap input-textbox",class:n.classes },[ e("div",{ staticClass:"field" },[ n.innerLabel?n._e():e("label",{ staticClass:"label",attrs:{ for:"phone-"+n.id }},[ n._v("\n      "+n._s(n.label)+"\n    ") ]),n._v(" "),e("div",{ staticClass:"control is-large",class:n.inputModifierClasses },[ e("input",n._b({ directives:[{ name:"imask",rawName:"v-imask",value:n.mask,expression:"mask" }],staticClass:"input",attrs:{ id:"phone-"+n.id,placeholder:void 0!==n.$attrs.required&&""!==n.placeholder?n.placeholder+" *":n.placeholder },domProps:{ value:n.localValue },on:{ accept:n.onAccept,complete:n.onComplete,focus:n.onFocus,blur:n.onBlur }},"input",n.$attrs,!1)),n._v(" "),n.innerLabel?e("label",{ attrs:{ for:"phone-"+n.id }},[ n._v("\n        "+n._s(n.label?n.label:n.placeholder)+"\n      ") ]):n._e(),n._v(" "),n.icon?e("span",{ staticClass:"icon is-large is-right input-icon" },[ e("i",{ class:n.icon }) ]):n._e(),n._v(" "),n.desc?e("div",{ staticClass:"supplemental-text" },[ n._v("\n        "+n._s(n.desc)+"\n      ") ]):[ n.$slots["desc"]?e("div",{ staticClass:"supplemental-text" },[ n._t("desc") ],2):n._e() ] ],2),n._v(" "),n.error?[ e("div",{ staticClass:"input-error-msg" },[ n._m(0),n._v(" "),e("span",[ n._v(n._s(n.error)) ]) ]) ]:n._e() ],2) ]);
      },Pt=[ function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fas fa-exclamation-circle" }) ]);
      } ];Lt._withStripped=!0;const Nt=function(n){
        n&&n("data-v-1045ff41_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n/*\nInput Textbox Styles\nApplied to the Textbox component and other components that inherit the Textbox visuals\n*/\n.input-textbox .input[data-v-1045ff41] {\n  height: 3.5rem;\n}\n.input-textbox.inner-label .input + label[data-v-1045ff41] {\n  opacity: 0;\n}\n.input-textbox.inner-label .input[data-v-1045ff41]:not(:placeholder-shown), .input-textbox.inner-label .input[data-v-1045ff41]:focus {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:placeholder-shown) + label[data-v-1045ff41], .input-textbox.inner-label .input:focus + label[data-v-1045ff41] {\n  opacity: 1;\n}\n.input-textbox.inner-label .input[data-v-1045ff41]:not(:-ms-input-placeholder) {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:-ms-input-placeholder) + label[data-v-1045ff41] {\n  opacity: 1;\n}\n.input-width[data-v-1045ff41] {\n  max-width: 220px;\n}\n\n/*# sourceMappingURL=Phone.vue.map */',map:{ version:3,sources:[ "Phone.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AACpB;;;CAGC;AACD;EACE,cAAc;AAChB;AACA;EACE,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,UAAU;AACZ;AACA;EACE,8BAA8B;AAChC;AACA;EACE,UAAU;AACZ;AAEA;EACE,gBAAgB;AAClB;;AAEA,oCAAoC",file:"Phone.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n/*\nInput Textbox Styles\nApplied to the Textbox component and other components that inherit the Textbox visuals\n*/\n.input-textbox .input {\n  height: 3.5rem;\n}\n.input-textbox.inner-label .input + label {\n  opacity: 0;\n}\n.input-textbox.inner-label .input:not(:placeholder-shown), .input-textbox.inner-label .input:focus {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:placeholder-shown) + label, .input-textbox.inner-label .input:focus + label {\n  opacity: 1;\n}\n.input-textbox.inner-label .input:not(:-ms-input-placeholder) {\n  padding: 1rem 2.2rem 0 0.75rem;\n}\n.input-textbox.inner-label .input:not(:-ms-input-placeholder) + label {\n  opacity: 1;\n}\n\n.input-width {\n  max-width: 220px;\n}\n\n/*# sourceMappingURL=Phone.vue.map */' ]},media:void 0 });
      },zt="data-v-1045ff41",Vt=void 0,Ut=!1,Ht=s({ render:Lt,staticRenderFns:Pt },Nt,Dt,zt,Ut,Vt,!1,l,void 0,void 0);L(Ht);var qt={ name:"TabsNav",components:{ NavLink:G },props:{ links:{ type:Array,default(){
      return[];
    } }}};const Wt=qt;var Gt=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ attrs:{ id:"tabs-nav" }},[ n.links.length>0?[ n._l(n.links,(function(n,t){
          return[ e("nav-link",{ key:"mtl-"+t,attrs:{ link:n }}) ];
        })) ]:[ n._t("default") ] ],2);
      },Yt=[];Gt._withStripped=!0;const Zt=function(n){
        n&&n("data-v-17a7859c_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#tabs-nav a {\n  display: inline-block;\n  background-color: #25cef7;\n  color: #444444;\n  font-size: 0.875rem;\n  padding: 0.5rem 1.125rem;\n  margin-right: 0.5rem;\n}\n#tabs-nav a.is-active, #tabs-nav a.router-link-exact-active {\n  background-color: white;\n}\n\n/*# sourceMappingURL=TabsNav.vue.map */',map:{ version:3,sources:[ "TabsNav.vue","/home/runner/work/phila-ui/phila-ui/src/components/TabsNav/TabsNav.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;ACgBA;EACA,wBAAA;EACA,2QAAA;EAGA,gBAAA;EACA,kBAAA;ADhBA;ACmBA;EACA,wBAAA;EACA,kPAAA;EDjBE,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;ACIpB;EACA,qBAAA;EACA,yBAAA;EACA,cAAA;EACA,mBAAA;EDFE,wBAAwB;EACxB,oBAAoB;AACtB;AACA;EACE,uBAAuB;AACzB;;AAEA,sCAAsC",file:"TabsNav.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#tabs-nav a {\n  display: inline-block;\n  background-color: #25cef7;\n  color: #444444;\n  font-size: 0.875rem;\n  padding: 0.5rem 1.125rem;\n  margin-right: 0.5rem;\n}\n#tabs-nav a.is-active, #tabs-nav a.router-link-exact-active {\n  background-color: white;\n}\n\n/*# sourceMappingURL=TabsNav.vue.map */','<template>\n  <div id="tabs-nav">\n    <template v-if="links.length > 0">\n      <template v-for="(link, index) in links">\n        <nav-link\n          :key="`mtl-${index}`"\n          :link="link"\n        />\n      </template>\n    </template>\n    <template v-else>\n      \x3c!-- @slot The default slot accepts side-by-side links (no other elements) --\x3e\n      <slot />\n    </template>\n  </div>\n</template>\n<script>\nimport NavLink from \'@/components/NavLink/NavLink.vue\';\n\n/**\n * A tabbed navigation. Primarily used as a slot of the [Application Header](/components/AppHeader).\n * @niceName Tabbed Navigation\n * @group Navigation\n * @position 120\n */\nexport default {\n  name: \'TabsNav\',\n  components: {\n    NavLink,\n  },\n  props: {\n    /**\n     * An array of links. See [Navigation Link](/components/NavLink)\n     */\n    links: {\n      type: Array,\n      default () {\n        return [];\n      },\n    },\n  },\n};\n<\/script>\n<style lang="scss">\n  #tabs-nav {\n    a {\n      display: inline-block;\n      background-color: $electric-blue;\n      color: $grey-dark;\n      font-size: $size-small;\n      padding: 0.5rem 1.125rem;\n      margin-right: 0.5rem;\n      &.is-active, &.router-link-exact-active {\n        background-color: $white;\n      }\n    }\n  }\n</style>' ]},media:void 0 });
      },Qt=void 0,Kt=void 0,Jt=!1,Xt=s({ render:Gt,staticRenderFns:Yt },Zt,Wt,Qt,Jt,Kt,!1,l,void 0,void 0);L(Xt);var ne={ name:"MobileNav",components:{ NavLink:G },props:{ links:{ type:Array,default(){
      return[];
    } }},data(){
      return{ mNavOpened:!1 };
    },mounted(){
      this.prepMobileNav();
    },methods:{ formatLink(n){
      return n.submenu&&(n.type="native"),n;
    },prepMobileNav(){
      const n=this;this.isMobile&&this.$nextTick((function(){
        const t=document.querySelector("#app-header"),e=document.querySelector("#mobile-menu-wrap"),o=document.querySelector("#mobile-menu");e&&(e.style.cssText=e.style.cssText+`top: ${t.offsetHeight}px`,e.style.cssText=e.style.cssText+`height: calc(100% - ${t.offsetHeight+45}px)`);const a=o.querySelectorAll("ul li");a.forEach(t=>{
          const e=t.querySelector("ul");if(e){
            const n=t.querySelector("a");n.classList.add("has-submenu"),n.addEventListener("click",(function(n){
              n.preventDefault();const t=n.target,e=t.parentNode,o=e.parentNode.querySelectorAll("li");o.forEach(n=>n!==e?n.classList.remove("opened"):null),e.classList.toggle("opened");
            }));
          }else {
            t.querySelector(":scope > a").addEventListener("click",(function(t){
              const e=t.target,o=e.parentNode,a=o.parentNode.querySelectorAll("li");a.forEach(n=>n!==o?n.classList.remove("opened"):null),n.mobileNavToggle();
            }));
          }
        });const i=o.querySelectorAll("ul li a.is-active, ul li a.router-link-exact-active");i.forEach(n=>{
          let t=n.parentNode.parentNode.parentNode;while("LI"===t.tagName){
            const n=t.querySelector("a.has-submenu");n&&(t.classList.add("opened"),t=t.parentNode.parentNode);
          }
        });
      }));
    },mobileNavToggle(){
      let n=document.querySelector("body");n.classList.toggle("m-nav-opened"),this.mNavOpened=!this.mNavOpened;
    } }};const te=ne;var ee=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ class:{ opened:n.mNavOpened },attrs:{ id:"mobile-nav","aria-label":"Mobile Nav" }},[ e("a",{ staticClass:"icon is-size-2",attrs:{ href:"#","aria-label":"Mobile Nav" },on:{ click:function(t){
          return t.preventDefault(),n.mobileNavToggle(t);
        } }},[ e("i",{ directives:[{ name:"show",rawName:"v-show",value:!n.mNavOpened,expression:"!mNavOpened" }],staticClass:"fa fa-bars",attrs:{ title:"Open Mobile Nav" }}),n._v(" "),e("i",{ directives:[{ name:"show",rawName:"v-show",value:n.mNavOpened,expression:"mNavOpened" }],staticClass:"fa fa-times",attrs:{ title:"Close Mobile Nav" }}) ]),n._v(" "),e("transition",{ attrs:{ name:"slide-in" }},[ e("div",{ directives:[{ name:"show",rawName:"v-show",value:n.mNavOpened,expression:"mNavOpened" }],attrs:{ id:"mobile-menu-wrap" }},[ e("div",{ attrs:{ id:"mobile-menu" }},[ n._t("before"),n._v(" "),n.links.length>0?[ e("ul",{ attrs:{ role:"navigation","aria-label":"Mobile Navigation" }},n._l(n.links,(function(t,o){
          return e("li",{ key:t.text+"-"+o },[ e("nav-link",{ attrs:{ link:n.formatLink(t) }}),n._v(" "),t.submenu?e("ul",n._l(t.submenu,(function(t,o){
            return e("li",{ key:t.text+"-"+o },[ e("nav-link",{ attrs:{ link:n.formatLink(t) }}),n._v(" "),t.submenu?e("ul",n._l(t.submenu,(function(n,t){
              return e("li",{ key:n.text+"-"+t },[ e("nav-link",{ attrs:{ link:n }}) ],1);
            })),0):n._e() ],1);
          })),0):n._e() ],1);
        })),0) ]:[ n._t("default") ],n._v(" "),n._t("after") ],2),n._v(" "),e("div",{ attrs:{ id:"mobile-menu-close-bar" }},[ e("button",{ staticClass:"button",on:{ click:function(t){
          return t.preventDefault(),n.mobileNavToggle(t);
        } }},[ e("span",[ n._v("Close") ]),n._v(" "),e("span",{ staticClass:"icon" },[ e("i",{ staticClass:"fa fa-times",attrs:{ title:"Close Mobile Menu" }}) ]) ]) ]) ]) ]) ],1);
      },oe=[];ee._withStripped=!0;const ae=function(n){
        n&&(n("data-v-d856edda_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#mobile-nav[data-v-d856edda] {\n  padding: 0.5rem;\n}\n#mobile-nav.opened[data-v-d856edda] {\n  background-color: #2176d2;\n}\n#mobile-nav .icon[data-v-d856edda] {\n  color: white;\n  width: 29px;\n  height: 29px;\n}\n#mobile-menu-wrap[data-v-d856edda] {\n  z-index: 999;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0f4d90;\n  color: white;\n}\n#mobile-menu-close-bar[data-v-d856edda] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n}\n#mobile-menu-close-bar button[data-v-d856edda] {\n  background-color: #2176d2;\n  color: white;\n  font-weight: 400;\n  font-size: 1.125rem;\n  width: 100%;\n}\n\n/*# sourceMappingURL=MobileNav.vue.map */',map:{ version:3,sources:[ "MobileNav.vue","/home/runner/work/phila-ui/phila-ui/src/components/MobileNav/MobileNav.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AC+KpB;EACA,eAAA;AD7KA;AC8KA;EACA,yBAAA;AD5KA;AC8KA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AD5KA;ACgLA;EACA,YAAA;ED7KE,eAAe;EC+KjB,OAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,YAAA;AD7KA;ACgLA;ED7KE,eAAe;EACf,SAAS;EACT,OAAO;EACP,WAAW;EACX,YAAY;AACd;ACyKA;EACA,yBAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;EACA,WAAA;ADvKA;;AAEA,wCAAwC",file:"MobileNav.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#mobile-nav {\n  padding: 0.5rem;\n}\n#mobile-nav.opened {\n  background-color: #2176d2;\n}\n#mobile-nav .icon {\n  color: white;\n  width: 29px;\n  height: 29px;\n}\n\n#mobile-menu-wrap {\n  z-index: 999;\n  position: fixed;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #0f4d90;\n  color: white;\n}\n\n#mobile-menu-close-bar {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 999;\n}\n#mobile-menu-close-bar button {\n  background-color: #2176d2;\n  color: white;\n  font-weight: 400;\n  font-size: 1.125rem;\n  width: 100%;\n}\n\n/*# sourceMappingURL=MobileNav.vue.map */','<template>\n  <div\n    id="mobile-nav"\n    aria-label="Mobile Nav"\n    :class="{ \'opened\': mNavOpened }"\n  >\n    <a\n      href="#"\n      class="icon is-size-2"\n      aria-label="Mobile Nav"\n      @click.prevent="mobileNavToggle"\n    >\n      <i\n        v-show="!mNavOpened"\n        title="Open Mobile Nav"\n        class="fa fa-bars"\n      />\n      <i\n        v-show="mNavOpened"\n        title="Close Mobile Nav"\n        class="fa fa-times"\n      />\n    </a>\n    <transition name="slide-in">\n      <div\n        v-show="mNavOpened"\n        id="mobile-menu-wrap"\n      >\n        <div id="mobile-menu">\n          \x3c!-- Allows for additional content before the main list of items --\x3e\n          <slot name="before" />\n          <template v-if="links.length > 0">\n            <ul\n              role="navigation"\n              aria-label="Mobile Navigation"\n            >\n              <li\n                v-for="(link1, index1) in links"\n                :key="`${link1.text}-${index1}`"\n              >\n                <nav-link\n                  :link="formatLink(link1)"\n                />\n                <ul v-if="link1.submenu">\n                  <li\n                    v-for="(link2, index2) in link1.submenu"\n                    :key="`${link2.text}-${index2}`"\n                  >\n                    <nav-link :link="formatLink(link2)" />\n                    <ul v-if="link2.submenu">\n                      <li\n                        v-for="(link3, index3) in link2.submenu"\n                        :key="`${link3.text}-${index3}`"\n                      >\n                        <nav-link :link="link3" />\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </template>\n          <template v-else>\n            \x3c!-- The default slot accepts an unordered list of links which can be nested 2 times --\x3e\n            <slot />\n          </template>\n          \x3c!-- Allows for additional content after the main list of items --\x3e\n          <slot name="after" />\n        </div>\n        <div id="mobile-menu-close-bar">\n          <button\n            class="button"\n            @click.prevent="mobileNavToggle"\n          >\n            <span>Close</span>\n            <span class="icon">\n              <i\n                title="Close Mobile Menu"\n                class="fa fa-times"\n              />\n            </span>\n          </button>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n<script>\nimport NavLink from \'@/components/NavLink/NavLink.vue\';\n\n/**\n * The mobile navigation.  Primarily, used as a slot of the [Application Header](/components/AppHeader).\n * @niceName Mobile Navigation\n * @group Navigation\n * @position 110\n */\nexport default {\n  name: \'MobileNav\',\n  components: {\n    NavLink,\n  },\n  props: {\n    /**\n     * An array of links . See [Navigation Link](/components/NavLink)\n     */\n    links: {\n      type: Array,\n      default () {\n        return [];\n      },\n    },\n  },\n  data () {\n    return {\n      mNavOpened: false,\n    };\n  },\n  mounted () {\n    this.prepMobileNav();\n  },\n  methods: {\n    formatLink (link) {\n\n      //if link has submenu, automatically make it a native type link to avoid vue-router issues\n      if (link.submenu) {\n        link.type = \'native\';\n      }\n      return link;\n    },\n    prepMobileNav () {\n\n      const self = this;\n\n      if (this.isMobile) {\n\n        this.$nextTick(function () {\n          const header = document.querySelector(\'#app-header\');\n          const mobileMenuWrap = document.querySelector(\'#mobile-menu-wrap\');\n          const mobileMenu = document.querySelector(\'#mobile-menu\');\n\n          if (mobileMenuWrap) {\n            mobileMenuWrap.style.cssText = mobileMenuWrap.style.cssText + `top: ${header.offsetHeight}px`;\n            mobileMenuWrap.style.cssText = mobileMenuWrap.style.cssText + `height: calc(100% - ${header.offsetHeight + 45}px)`;\n          }\n\n          const mobileNavList = mobileMenu.querySelectorAll(\'ul li\');\n\n          mobileNavList.forEach(listItem => {\n\n            const nestedUl = listItem.querySelector(\'ul\');\n\n            if (nestedUl) {\n\n              const nestingAnchor = listItem.querySelector(\'a\');\n\n              nestingAnchor.classList.add("has-submenu");\n\n              nestingAnchor.addEventListener(\'click\', function (event) {\n\n                event.preventDefault();\n                const a = event.target;\n                const li = a.parentNode;\n\n                //remove existing classes from siblings\n                const siblings = li.parentNode.querySelectorAll(\'li\');\n                siblings.forEach(sibling => sibling !== li ? sibling.classList.remove(\'opened\') : null);\n\n                li.classList.toggle(\'opened\');\n              });\n            } else {\n            //Closes mobile menu on click when link/route changes\n              listItem.querySelector(\':scope > a\').addEventListener(\'click\', function (event) {\n\n                const a = event.target;\n                const li = a.parentNode;\n\n                //remove existing classes from siblings\n                const siblings = li.parentNode.querySelectorAll(\'li\');\n                siblings.forEach(sibling => sibling !== li ? sibling.classList.remove(\'opened\') : null);\n\n                self.mobileNavToggle();\n\n              });\n            }\n          });\n\n          //Find current/active page and open nesting to top\n          const activeListItems = mobileMenu.querySelectorAll(\'ul li a.is-active, ul li a.router-link-exact-active\');\n\n          activeListItems.forEach(activeListItem => {\n            let parent = activeListItem.parentNode.parentNode.parentNode;\n            while (parent.tagName === "LI") {\n              const hasSubmenu = parent.querySelector(\'a.has-submenu\');\n              if (hasSubmenu) {\n                parent.classList.add(\'opened\');\n                parent = parent.parentNode.parentNode;\n              }\n            }\n          });\n        });\n\n      }\n    },\n    mobileNavToggle () {\n\n      let body = document.querySelector(\'body\');\n      body.classList.toggle(\'m-nav-opened\');\n\n      this.mNavOpened = !this.mNavOpened;\n\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n  #mobile-nav {\n    padding: 0.5rem;\n    &.opened {\n      background-color: $ben-franklin-blue;\n    }\n    .icon {\n      color: $white;\n      width: 29px;\n      height: 29px;\n    }\n  }\n\n  #mobile-menu-wrap {\n    z-index: 999;\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $ben-franklin-blue-dark;\n    color: $white;\n  }\n\n  #mobile-menu-close-bar {\n    button {\n      background-color: $ben-franklin-blue;\n      color: $white;\n      font-weight: $weight-normal;\n      font-size: $size-large;\n      width: 100%;\n    }\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    z-index: 999;\n  }\n</style>\n\n<style lang="scss">\n\n  @mixin submenu($is-opened:false) {\n    &:after {\n      position: absolute;\n      right: 1rem;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 20px;\n      height: 2px;\n      background-color: $white;\n      display: block;\n      transition: all 0.25s ease-in;\n      content: "";\n      @if($is-opened) {\n        transform: translateY(-50%) rotate(-45deg);\n      }\n    }\n    &:before {\n      position: absolute;\n      right: 1rem;\n      top: 50%;\n      transform: translateY(-50%) rotate(-90deg);\n      width: 20px;\n      height: 2px;\n      background-color: $white;\n      display: block;\n      content: "";\n      transition: all 0.25s ease-in;\n      opacity: 1;\n      @if($is-opened) {\n        transform: translateY(-50%) rotate(45deg);\n      }\n    }\n  }\n\n\n  #mobile-menu {\n    width: 100%;\n    height: 100%;\n    overflow: scroll;\n    text-align: left;\n    > ul {\n      width: 100%;\n      > li {\n        list-style-type: none;\n        border-bottom: solid 1px rgba(150, 201, 255, 0.22);\n        transition: all 0.25s ease-in;\n        &.is-active, &.router-link-exact-active {\n          background-color: $ben-franklin-blue;\n        }\n        > a {\n          color: $white;\n          font-size: $size-large;\n          padding: 1rem 3rem;\n          display: block;\n          position: relative;\n          &.is-active, &.router-link-exact-active {\n            background-color: $ben-franklin-blue;\n            font-weight: $weight-semibold;\n          }\n          &.has-submenu {\n            @include submenu;\n          }\n        }\n        &.opened {\n          border-top: 2px solid $ben-franklin-blue-light;\n          border-bottom: 2px solid $ben-franklin-blue-light;\n          > a {\n            font-weight: $weight-semibold;\n            position: relative;\n            @include submenu(true);\n          }\n          > ul {\n            opacity: 1;\n            height: auto;\n            padding: 0.75rem 0;\n          }\n        }\n        > ul {\n          transition: all 0.25s ease-in-out;\n          opacity: 0;\n          height: 0;\n          overflow:hidden;\n          width: 100%;\n          padding: 0;\n          background-color: #0c3664;\n          > li {\n            list-style-type: none;\n            border: 0;\n            &.is-active, &.router-link-exact-active {\n              background-color: $ben-franklin-blue;\n            }\n            > a {\n              color: $white;\n              font-size: $size-large;\n              padding: 1rem 1rem;\n              display: block;\n              margin: 0 2rem;\n              position: relative;\n              &.is-active, &.router-link-exact-active {\n                background-color: $ben-franklin-blue;\n                font-weight: $weight-semibold;\n              }\n              &.has-submenu {\n                @include submenu;\n              }\n            }\n            &.opened {\n              > a {\n                background-color: $ben-franklin-blue;\n                font-weight: $weight-semibold;\n                @include submenu(true);\n              }\n              > ul {\n                opacity: 1;\n                height: auto;\n              }\n            }\n            > ul {\n              transition: all 0.25s ease-in-out;\n              opacity: 0;\n              height: 0;\n              overflow:hidden;\n              width: 100%;\n              padding: 0;\n              > li {\n                > a {\n                  color: $white;\n                  font-size: $size-large;\n                  display: block;\n                  padding: 1rem;\n                  margin: 0 2rem;\n                  &.is-active, &.router-link-exact-active {\n                    background-color: $ben-franklin-blue;\n                    font-weight: $weight-semibold;\n                    &:before {\n                      background-color: $ben-franklin-blue-light;\n                    }\n                  }\n                  &:before {\n                    border-radius: 50%;\n                    border: 1px solid $ben-franklin-blue-light;\n                    width: 10px;\n                    height: 10px;\n                    content: "";\n                    display: inline-block;\n                    margin-left: .75rem;\n                    margin-right: .75rem;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  .slide-in-enter-active {\n    transition: all .2s ease-in;\n  }\n  .slide-in-leave-active {\n    transition: all .2s ease-out;\n  }\n  .slide-in-enter, .slide-in-leave-to\n  /* .slide-fade-leave-active below version 2.1.8 */ {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n</style>\n' ]},media:void 0 }),n("data-v-d856edda_1",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#mobile-menu {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  text-align: left;\n}\n#mobile-menu > ul {\n  width: 100%;\n}\n#mobile-menu > ul > li {\n  list-style-type: none;\n  border-bottom: solid 1px rgba(150, 201, 255, 0.22);\n  transition: all 0.25s ease-in;\n}\n#mobile-menu > ul > li.is-active, #mobile-menu > ul > li.router-link-exact-active {\n  background-color: #2176d2;\n}\n#mobile-menu > ul > li > a {\n  color: white;\n  font-size: 1.125rem;\n  padding: 1rem 3rem;\n  display: block;\n  position: relative;\n}\n#mobile-menu > ul > li > a.is-active, #mobile-menu > ul > li > a.router-link-exact-active {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > a.has-submenu:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n}\n#mobile-menu > ul > li > a.has-submenu:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n}\n#mobile-menu > ul > li.opened {\n  border-top: 2px solid #daedfe;\n  border-bottom: 2px solid #daedfe;\n}\n#mobile-menu > ul > li.opened > a {\n  font-weight: 600;\n  position: relative;\n}\n#mobile-menu > ul > li.opened > a:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n  transform: translateY(-50%) rotate(-45deg);\n}\n#mobile-menu > ul > li.opened > a:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n  transform: translateY(-50%) rotate(45deg);\n}\n#mobile-menu > ul > li.opened > ul {\n  opacity: 1;\n  height: auto;\n  padding: 0.75rem 0;\n}\n#mobile-menu > ul > li > ul {\n  transition: all 0.25s ease-in-out;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  width: 100%;\n  padding: 0;\n  background-color: #0c3664;\n}\n#mobile-menu > ul > li > ul > li {\n  list-style-type: none;\n  border: 0;\n}\n#mobile-menu > ul > li > ul > li.is-active, #mobile-menu > ul > li > ul > li.router-link-exact-active {\n  background-color: #2176d2;\n}\n#mobile-menu > ul > li > ul > li > a {\n  color: white;\n  font-size: 1.125rem;\n  padding: 1rem 1rem;\n  display: block;\n  margin: 0 2rem;\n  position: relative;\n}\n#mobile-menu > ul > li > ul > li > a.is-active, #mobile-menu > ul > li > ul > li > a.router-link-exact-active {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > ul > li > a.has-submenu:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n}\n#mobile-menu > ul > li > ul > li > a.has-submenu:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n}\n#mobile-menu > ul > li > ul > li.opened > a {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > ul > li.opened > a:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n  transform: translateY(-50%) rotate(-45deg);\n}\n#mobile-menu > ul > li > ul > li.opened > a:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n  transform: translateY(-50%) rotate(45deg);\n}\n#mobile-menu > ul > li > ul > li.opened > ul {\n  opacity: 1;\n  height: auto;\n}\n#mobile-menu > ul > li > ul > li > ul {\n  transition: all 0.25s ease-in-out;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  width: 100%;\n  padding: 0;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a {\n  color: white;\n  font-size: 1.125rem;\n  display: block;\n  padding: 1rem;\n  margin: 0 2rem;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a.is-active, #mobile-menu > ul > li > ul > li > ul > li > a.router-link-exact-active {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a.is-active:before, #mobile-menu > ul > li > ul > li > ul > li > a.router-link-exact-active:before {\n  background-color: #daedfe;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a:before {\n  border-radius: 50%;\n  border: 1px solid #daedfe;\n  width: 10px;\n  height: 10px;\n  content: "";\n  display: inline-block;\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n.slide-in-enter-active {\n  transition: all 0.2s ease-in;\n}\n.slide-in-leave-active {\n  transition: all 0.2s ease-out;\n}\n.slide-in-enter, .slide-in-leave-to {\n  transform: translateX(-100%);\n  opacity: 0;\n}\n\n/*# sourceMappingURL=MobileNav.vue.map */',map:{ version:3,sources:[ "MobileNav.vue","/home/runner/work/phila-ui/phila-ui/src/components/MobileNav/MobileNav.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AC0PpB;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,gBAAA;ADxPA;ACyPA;EACA,WAAA;ADvPA;ACwPA;EACA,qBAAA;EACA,kDAAA;EACA,6BAAA;ADtPA;ACuPA;EACA,yBAAA;ADrPA;ACuPA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,kBAAA;ADrPA;ACsPA;EACA,yBAAA;EACA,gBAAA;ADpPA;AC4LA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,6BAAA;EACA,WAAA;AD1LA;AC+LA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,0CAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;ED7LE,6BAA6B;EAC7B,UAAU;AACZ;ACiOA;EACA,6BAAA;EACA,gCAAA;AD/NA;ACgOA;EACA,gBAAA;EACA,kBAAA;AD9NA;AC2JA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,6BAAA;EACA,WAAA;EAEA,0CAAA;AD1JA;AC6JA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,0CAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;ED3JE,6BAA6B;EAC7B,UAAU;EC8JZ,yCAAA;AD5JA;ACsMA;EACA,UAAA;EACA,YAAA;EACA,kBAAA;ADpMA;ACuMA;EACA,iCAAA;EACA,UAAA;EACA,SAAA;EACA,gBAAA;EACA,WAAA;EACA,UAAA;EACA,yBAAA;ADrMA;ACsMA;EACA,qBAAA;EACA,SAAA;ADpMA;ACqMA;EACA,yBAAA;ADnMA;ACqMA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,cAAA;EACA,cAAA;EACA,kBAAA;ADnMA;ACoMA;EACA,yBAAA;EACA,gBAAA;ADlMA;AC+FA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,6BAAA;EACA,WAAA;AD7FA;ACkGA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,0CAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;EDhGE,6BAA6B;EAC7B,UAAU;AACZ;ACgLA;EACA,yBAAA;EACA,gBAAA;AD9KA;ACkEA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,2BAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,6BAAA;EACA,WAAA;EAEA,0CAAA;ADjEA;ACoEA;EACA,kBAAA;EACA,WAAA;EACA,QAAA;EACA,0CAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;EDlEE,6BAA6B;EAC7B,UAAU;ECqEZ,yCAAA;ADnEA;ACsJA;EACA,UAAA;EACA,YAAA;ADpJA;ACuJA;EACA,iCAAA;EACA,UAAA;EACA,SAAA;EACA,gBAAA;EACA,WAAA;EACA,UAAA;ADrJA;ACuJA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,aAAA;EACA,cAAA;ADrJA;ACsJA;EACA,yBAAA;EACA,gBAAA;ADpJA;ACqJA;EACA,yBAAA;ADnJA;ACsJA;EACA,kBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,qBAAA;EACA,oBAAA;EACA,qBAAA;ADpJA;AC8JA;EACA,4BAAA;AD3JA;AC6JA;ED1JE,6BAA6B;AAC/B;AAEA;EACE,4BAA4B;EAC5B,UAAU;AACZ;;AAEA,wCAAwC",file:"MobileNav.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n#mobile-menu {\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  text-align: left;\n}\n#mobile-menu > ul {\n  width: 100%;\n}\n#mobile-menu > ul > li {\n  list-style-type: none;\n  border-bottom: solid 1px rgba(150, 201, 255, 0.22);\n  transition: all 0.25s ease-in;\n}\n#mobile-menu > ul > li.is-active, #mobile-menu > ul > li.router-link-exact-active {\n  background-color: #2176d2;\n}\n#mobile-menu > ul > li > a {\n  color: white;\n  font-size: 1.125rem;\n  padding: 1rem 3rem;\n  display: block;\n  position: relative;\n}\n#mobile-menu > ul > li > a.is-active, #mobile-menu > ul > li > a.router-link-exact-active {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > a.has-submenu:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n}\n#mobile-menu > ul > li > a.has-submenu:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n}\n#mobile-menu > ul > li.opened {\n  border-top: 2px solid #daedfe;\n  border-bottom: 2px solid #daedfe;\n}\n#mobile-menu > ul > li.opened > a {\n  font-weight: 600;\n  position: relative;\n}\n#mobile-menu > ul > li.opened > a:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n  transform: translateY(-50%) rotate(-45deg);\n}\n#mobile-menu > ul > li.opened > a:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n  transform: translateY(-50%) rotate(45deg);\n}\n#mobile-menu > ul > li.opened > ul {\n  opacity: 1;\n  height: auto;\n  padding: 0.75rem 0;\n}\n#mobile-menu > ul > li > ul {\n  transition: all 0.25s ease-in-out;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  width: 100%;\n  padding: 0;\n  background-color: #0c3664;\n}\n#mobile-menu > ul > li > ul > li {\n  list-style-type: none;\n  border: 0;\n}\n#mobile-menu > ul > li > ul > li.is-active, #mobile-menu > ul > li > ul > li.router-link-exact-active {\n  background-color: #2176d2;\n}\n#mobile-menu > ul > li > ul > li > a {\n  color: white;\n  font-size: 1.125rem;\n  padding: 1rem 1rem;\n  display: block;\n  margin: 0 2rem;\n  position: relative;\n}\n#mobile-menu > ul > li > ul > li > a.is-active, #mobile-menu > ul > li > ul > li > a.router-link-exact-active {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > ul > li > a.has-submenu:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n}\n#mobile-menu > ul > li > ul > li > a.has-submenu:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n}\n#mobile-menu > ul > li > ul > li.opened > a {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > ul > li.opened > a:after {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  transition: all 0.25s ease-in;\n  content: "";\n  transform: translateY(-50%) rotate(-45deg);\n}\n#mobile-menu > ul > li > ul > li.opened > a:before {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%) rotate(-90deg);\n  width: 20px;\n  height: 2px;\n  background-color: white;\n  display: block;\n  content: "";\n  transition: all 0.25s ease-in;\n  opacity: 1;\n  transform: translateY(-50%) rotate(45deg);\n}\n#mobile-menu > ul > li > ul > li.opened > ul {\n  opacity: 1;\n  height: auto;\n}\n#mobile-menu > ul > li > ul > li > ul {\n  transition: all 0.25s ease-in-out;\n  opacity: 0;\n  height: 0;\n  overflow: hidden;\n  width: 100%;\n  padding: 0;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a {\n  color: white;\n  font-size: 1.125rem;\n  display: block;\n  padding: 1rem;\n  margin: 0 2rem;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a.is-active, #mobile-menu > ul > li > ul > li > ul > li > a.router-link-exact-active {\n  background-color: #2176d2;\n  font-weight: 600;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a.is-active:before, #mobile-menu > ul > li > ul > li > ul > li > a.router-link-exact-active:before {\n  background-color: #daedfe;\n}\n#mobile-menu > ul > li > ul > li > ul > li > a:before {\n  border-radius: 50%;\n  border: 1px solid #daedfe;\n  width: 10px;\n  height: 10px;\n  content: "";\n  display: inline-block;\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n\n.slide-in-enter-active {\n  transition: all 0.2s ease-in;\n}\n\n.slide-in-leave-active {\n  transition: all 0.2s ease-out;\n}\n\n.slide-in-enter, .slide-in-leave-to {\n  transform: translateX(-100%);\n  opacity: 0;\n}\n\n/*# sourceMappingURL=MobileNav.vue.map */','<template>\n  <div\n    id="mobile-nav"\n    aria-label="Mobile Nav"\n    :class="{ \'opened\': mNavOpened }"\n  >\n    <a\n      href="#"\n      class="icon is-size-2"\n      aria-label="Mobile Nav"\n      @click.prevent="mobileNavToggle"\n    >\n      <i\n        v-show="!mNavOpened"\n        title="Open Mobile Nav"\n        class="fa fa-bars"\n      />\n      <i\n        v-show="mNavOpened"\n        title="Close Mobile Nav"\n        class="fa fa-times"\n      />\n    </a>\n    <transition name="slide-in">\n      <div\n        v-show="mNavOpened"\n        id="mobile-menu-wrap"\n      >\n        <div id="mobile-menu">\n          \x3c!-- Allows for additional content before the main list of items --\x3e\n          <slot name="before" />\n          <template v-if="links.length > 0">\n            <ul\n              role="navigation"\n              aria-label="Mobile Navigation"\n            >\n              <li\n                v-for="(link1, index1) in links"\n                :key="`${link1.text}-${index1}`"\n              >\n                <nav-link\n                  :link="formatLink(link1)"\n                />\n                <ul v-if="link1.submenu">\n                  <li\n                    v-for="(link2, index2) in link1.submenu"\n                    :key="`${link2.text}-${index2}`"\n                  >\n                    <nav-link :link="formatLink(link2)" />\n                    <ul v-if="link2.submenu">\n                      <li\n                        v-for="(link3, index3) in link2.submenu"\n                        :key="`${link3.text}-${index3}`"\n                      >\n                        <nav-link :link="link3" />\n                      </li>\n                    </ul>\n                  </li>\n                </ul>\n              </li>\n            </ul>\n          </template>\n          <template v-else>\n            \x3c!-- The default slot accepts an unordered list of links which can be nested 2 times --\x3e\n            <slot />\n          </template>\n          \x3c!-- Allows for additional content after the main list of items --\x3e\n          <slot name="after" />\n        </div>\n        <div id="mobile-menu-close-bar">\n          <button\n            class="button"\n            @click.prevent="mobileNavToggle"\n          >\n            <span>Close</span>\n            <span class="icon">\n              <i\n                title="Close Mobile Menu"\n                class="fa fa-times"\n              />\n            </span>\n          </button>\n        </div>\n      </div>\n    </transition>\n  </div>\n</template>\n<script>\nimport NavLink from \'@/components/NavLink/NavLink.vue\';\n\n/**\n * The mobile navigation.  Primarily, used as a slot of the [Application Header](/components/AppHeader).\n * @niceName Mobile Navigation\n * @group Navigation\n * @position 110\n */\nexport default {\n  name: \'MobileNav\',\n  components: {\n    NavLink,\n  },\n  props: {\n    /**\n     * An array of links . See [Navigation Link](/components/NavLink)\n     */\n    links: {\n      type: Array,\n      default () {\n        return [];\n      },\n    },\n  },\n  data () {\n    return {\n      mNavOpened: false,\n    };\n  },\n  mounted () {\n    this.prepMobileNav();\n  },\n  methods: {\n    formatLink (link) {\n\n      //if link has submenu, automatically make it a native type link to avoid vue-router issues\n      if (link.submenu) {\n        link.type = \'native\';\n      }\n      return link;\n    },\n    prepMobileNav () {\n\n      const self = this;\n\n      if (this.isMobile) {\n\n        this.$nextTick(function () {\n          const header = document.querySelector(\'#app-header\');\n          const mobileMenuWrap = document.querySelector(\'#mobile-menu-wrap\');\n          const mobileMenu = document.querySelector(\'#mobile-menu\');\n\n          if (mobileMenuWrap) {\n            mobileMenuWrap.style.cssText = mobileMenuWrap.style.cssText + `top: ${header.offsetHeight}px`;\n            mobileMenuWrap.style.cssText = mobileMenuWrap.style.cssText + `height: calc(100% - ${header.offsetHeight + 45}px)`;\n          }\n\n          const mobileNavList = mobileMenu.querySelectorAll(\'ul li\');\n\n          mobileNavList.forEach(listItem => {\n\n            const nestedUl = listItem.querySelector(\'ul\');\n\n            if (nestedUl) {\n\n              const nestingAnchor = listItem.querySelector(\'a\');\n\n              nestingAnchor.classList.add("has-submenu");\n\n              nestingAnchor.addEventListener(\'click\', function (event) {\n\n                event.preventDefault();\n                const a = event.target;\n                const li = a.parentNode;\n\n                //remove existing classes from siblings\n                const siblings = li.parentNode.querySelectorAll(\'li\');\n                siblings.forEach(sibling => sibling !== li ? sibling.classList.remove(\'opened\') : null);\n\n                li.classList.toggle(\'opened\');\n              });\n            } else {\n            //Closes mobile menu on click when link/route changes\n              listItem.querySelector(\':scope > a\').addEventListener(\'click\', function (event) {\n\n                const a = event.target;\n                const li = a.parentNode;\n\n                //remove existing classes from siblings\n                const siblings = li.parentNode.querySelectorAll(\'li\');\n                siblings.forEach(sibling => sibling !== li ? sibling.classList.remove(\'opened\') : null);\n\n                self.mobileNavToggle();\n\n              });\n            }\n          });\n\n          //Find current/active page and open nesting to top\n          const activeListItems = mobileMenu.querySelectorAll(\'ul li a.is-active, ul li a.router-link-exact-active\');\n\n          activeListItems.forEach(activeListItem => {\n            let parent = activeListItem.parentNode.parentNode.parentNode;\n            while (parent.tagName === "LI") {\n              const hasSubmenu = parent.querySelector(\'a.has-submenu\');\n              if (hasSubmenu) {\n                parent.classList.add(\'opened\');\n                parent = parent.parentNode.parentNode;\n              }\n            }\n          });\n        });\n\n      }\n    },\n    mobileNavToggle () {\n\n      let body = document.querySelector(\'body\');\n      body.classList.toggle(\'m-nav-opened\');\n\n      this.mNavOpened = !this.mNavOpened;\n\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n  #mobile-nav {\n    padding: 0.5rem;\n    &.opened {\n      background-color: $ben-franklin-blue;\n    }\n    .icon {\n      color: $white;\n      width: 29px;\n      height: 29px;\n    }\n  }\n\n  #mobile-menu-wrap {\n    z-index: 999;\n    position: fixed;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: $ben-franklin-blue-dark;\n    color: $white;\n  }\n\n  #mobile-menu-close-bar {\n    button {\n      background-color: $ben-franklin-blue;\n      color: $white;\n      font-weight: $weight-normal;\n      font-size: $size-large;\n      width: 100%;\n    }\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    z-index: 999;\n  }\n</style>\n\n<style lang="scss">\n\n  @mixin submenu($is-opened:false) {\n    &:after {\n      position: absolute;\n      right: 1rem;\n      top: 50%;\n      transform: translateY(-50%);\n      width: 20px;\n      height: 2px;\n      background-color: $white;\n      display: block;\n      transition: all 0.25s ease-in;\n      content: "";\n      @if($is-opened) {\n        transform: translateY(-50%) rotate(-45deg);\n      }\n    }\n    &:before {\n      position: absolute;\n      right: 1rem;\n      top: 50%;\n      transform: translateY(-50%) rotate(-90deg);\n      width: 20px;\n      height: 2px;\n      background-color: $white;\n      display: block;\n      content: "";\n      transition: all 0.25s ease-in;\n      opacity: 1;\n      @if($is-opened) {\n        transform: translateY(-50%) rotate(45deg);\n      }\n    }\n  }\n\n\n  #mobile-menu {\n    width: 100%;\n    height: 100%;\n    overflow: scroll;\n    text-align: left;\n    > ul {\n      width: 100%;\n      > li {\n        list-style-type: none;\n        border-bottom: solid 1px rgba(150, 201, 255, 0.22);\n        transition: all 0.25s ease-in;\n        &.is-active, &.router-link-exact-active {\n          background-color: $ben-franklin-blue;\n        }\n        > a {\n          color: $white;\n          font-size: $size-large;\n          padding: 1rem 3rem;\n          display: block;\n          position: relative;\n          &.is-active, &.router-link-exact-active {\n            background-color: $ben-franklin-blue;\n            font-weight: $weight-semibold;\n          }\n          &.has-submenu {\n            @include submenu;\n          }\n        }\n        &.opened {\n          border-top: 2px solid $ben-franklin-blue-light;\n          border-bottom: 2px solid $ben-franklin-blue-light;\n          > a {\n            font-weight: $weight-semibold;\n            position: relative;\n            @include submenu(true);\n          }\n          > ul {\n            opacity: 1;\n            height: auto;\n            padding: 0.75rem 0;\n          }\n        }\n        > ul {\n          transition: all 0.25s ease-in-out;\n          opacity: 0;\n          height: 0;\n          overflow:hidden;\n          width: 100%;\n          padding: 0;\n          background-color: #0c3664;\n          > li {\n            list-style-type: none;\n            border: 0;\n            &.is-active, &.router-link-exact-active {\n              background-color: $ben-franklin-blue;\n            }\n            > a {\n              color: $white;\n              font-size: $size-large;\n              padding: 1rem 1rem;\n              display: block;\n              margin: 0 2rem;\n              position: relative;\n              &.is-active, &.router-link-exact-active {\n                background-color: $ben-franklin-blue;\n                font-weight: $weight-semibold;\n              }\n              &.has-submenu {\n                @include submenu;\n              }\n            }\n            &.opened {\n              > a {\n                background-color: $ben-franklin-blue;\n                font-weight: $weight-semibold;\n                @include submenu(true);\n              }\n              > ul {\n                opacity: 1;\n                height: auto;\n              }\n            }\n            > ul {\n              transition: all 0.25s ease-in-out;\n              opacity: 0;\n              height: 0;\n              overflow:hidden;\n              width: 100%;\n              padding: 0;\n              > li {\n                > a {\n                  color: $white;\n                  font-size: $size-large;\n                  display: block;\n                  padding: 1rem;\n                  margin: 0 2rem;\n                  &.is-active, &.router-link-exact-active {\n                    background-color: $ben-franklin-blue;\n                    font-weight: $weight-semibold;\n                    &:before {\n                      background-color: $ben-franklin-blue-light;\n                    }\n                  }\n                  &:before {\n                    border-radius: 50%;\n                    border: 1px solid $ben-franklin-blue-light;\n                    width: 10px;\n                    height: 10px;\n                    content: "";\n                    display: inline-block;\n                    margin-left: .75rem;\n                    margin-right: .75rem;\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  .slide-in-enter-active {\n    transition: all .2s ease-in;\n  }\n  .slide-in-leave-active {\n    transition: all .2s ease-out;\n  }\n  .slide-in-enter, .slide-in-leave-to\n  /* .slide-fade-leave-active below version 2.1.8 */ {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n</style>\n' ]},media:void 0 }));
      },ie="data-v-d856edda",se=void 0,re=!1,le=s({ render:ee,staticRenderFns:oe },ae,te,ie,re,se,!1,l,void 0,void 0);function fe(n,t){
      if(!(n instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }function ce(n,t){
      for(var e=0;e<t.length;e++){
        var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o);
      }
    }function ue(n,t,e){
      return t&&ce(n.prototype,t),e&&ce(n,e),n;
    }L(le),L(st);var pe=function(){
        function n(t,e,o,a){
          fe(this,n),this.htmlBody=document.getElementsByTagName("body")[0],this.tooltip=t,this.tooltipIcon=null,this.tooltipIconClasses="fas fa-info-circle",this.tooltipArrow=null,this.tooltipBox=null,this.tooltipText=e,this.tooltipBoxClasses="tooltip-box",this.tooltipMessageClasses="tooltip-message",this.tooltipArrowClasses="tooltip-arrow",this.tooltipMode=o||"dark",this.currentTooltipPosition=null,this.initPositionSet=!1,this.tooltipID=a,this.tooltipBtnID="btn-".concat(a),this.padding=8,this.arrowAttrs={ height:8,width:16 },this.clickedToOpen=!1,this.newTooltip();
        }return ue(n,[{ key:"newTooltip",value:function(){
          this.makeTooltipContainer(),this.setTooltipEvents(),this.setTooltipMsg(),this.setTooltipMode(),this.addTooltip();var n=this,t=setInterval((function(){
            var e=document.getElementById(n.tooltipID);e&&e.offsetHeight>0&&(n.addTooltipIcon(),n.setInitTooltipPosition(),n.updateArrowPosition(),clearInterval(t));
          }),500);
        } },{ key:"makeTooltipContainer",value:function(){
          this.tooltipArrow=document.createElement("div"),this.tooltipArrow.className=this.tooltipArrowClasses,this.tooltipBox=document.createElement("div"),this.tooltipBox.className=this.tooltipBoxClasses,this.tooltipBox.setAttribute("id",this.tooltipID),this.tooltipMessage=document.createElement("div"),this.tooltipMessage.className=this.tooltipMessageClasses,this.tooltipIcon=document.createElement("button"),this.tooltipIcon.setAttribute("aria-label","tooltip"),this.tooltipIcon.className=this.tooltipIconClasses,this.tooltipIcon.setAttribute("id",this.tooltipBtnID);
        } },{ key:"addTooltipIcon",value:function(){
          this.tooltip.appendChild(this.tooltipIcon);
        } },{ key:"addTooltip",value:function(){
          this.tooltipBox.appendChild(this.tooltipMessage),this.tooltipBox.appendChild(this.tooltipArrow),this.htmlBody.appendChild(this.tooltipBox);
        } },{ key:"setTooltipMode",value:function(){
          this.tooltipBox.className=this.tooltipBoxClasses,this.tooltipBox.classList.add(this.tooltipMode);
        } },{ key:"setTooltipMsg",value:function(){
          this.tooltipMessage.innerText=this.tooltipText;
        } },{ key:"setTooltipEvents",value:function(){
          var n=this;window.addEventListener("resize",(function(){
            n.updateTooltipPosition();
          }),!0),this.tooltipIcon.addEventListener("mouseenter",(function(){
            n.updateTooltipPosition(),n.showTooltip();
          })),window.addEventListener("scroll",(function(){
            n.tooltipBox.classList.contains("show")&&n.hideTooltip();
          })),this.tooltipIcon.addEventListener("focus",(function(){
            n.updateTooltipPosition(),n.showTooltip();
          })),this.tooltipIcon.addEventListener("mouseleave",(function(){
            n.clickedToOpen||n.hideTooltip();
          })),this.tooltipIcon.addEventListener("blur",(function(){
            n.hideTooltip();
          })),this.tooltipIcon.addEventListener("click",(function(){
            n.clickedToOpen=!0,n.updateTooltipPosition(),n.toggleTooltip();
          }),!1),window.addEventListener("click",(function(t){
            t.target!==n.tooltipIcon&&n.clickedToOpen&&(n.hideTooltip(),n.clickedToOpen=!1);
          }));
        } },{ key:"toggleTooltip",value:function(){
          this.clickedToOpen?this.showTooltip():this.hideTooltip();
        } },{ key:"showTooltip",value:function(){
          this.tooltipBox.classList.add("show"),this.tooltipBox.setAttribute("aria-hidden",!1);
        } },{ key:"hideTooltip",value:function(){
          this.tooltipBox.classList.remove("show"),this.tooltipBox.setAttribute("aria-hidden",!0);
        } },{ key:"updateArrowPosition",value:function(){
          var n=this.tooltipIcon.getBoundingClientRect(),t=this.tooltipBox.getBoundingClientRect();this.tooltipArrow.style.left="".concat(n.left+this.tooltipIcon.offsetWidth/2-this.arrowAttrs.width/2,"px"),t.top>n.top?(this.tooltipArrow.style.top="".concat(t.top-2*this.arrowAttrs.height,"px"),this.tooltipArrow.classList.add("arrow-up")):(this.tooltipArrow.style.top="".concat(t.top+this.tooltipBox.offsetHeight,"px"),this.tooltipArrow.classList.remove("arrow-up"));
        } },{ key:"setInitTooltipPosition",value:function(){
          var n=this.tooltipIcon.getBoundingClientRect();this.tooltipBox.style.left="".concat(n.left+this.tooltipIcon.offsetWidth/2-this.tooltipBox.offsetWidth/2,"px"),this.tooltipBox.style.top="".concat(n.top-this.tooltipBox.offsetHeight-this.arrowAttrs.height,"px");
        } },{ key:"updateTooltipPosition",value:function(){
          var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n&&this.setInitTooltipPosition();var t=window.innerWidth,e=t-2*this.padding;e<=500&&(this.tooltipBox.style.maxWidth="".concat(e,"px"));var o=this.tooltipIcon.getBoundingClientRect(),a=this.tooltipBox.getBoundingClientRect();return a.left<this.padding?(this.tooltipBox.style.left="".concat(this.padding,"px"),this.tooltipBox.style.top="".concat(o.top-this.tooltipBox.offsetHeight-this.arrowAttrs.height,"px"),void this.updateTooltipPosition(!1)):a.left+this.tooltipBox.offsetWidth>t-this.padding?(this.tooltipBox.style.left="".concat(window.innerWidth-this.padding-this.tooltipBox.offsetWidth,"px"),this.tooltipBox.style.top="".concat(o.top-this.tooltipBox.offsetHeight-this.arrowAttrs.height,"px"),void this.updateTooltipPosition(!1)):a.top<this.padding?(this.tooltipBox.style.left="".concat(a.left,"px"),this.tooltipBox.style.top="".concat(o.bottom+this.arrowAttrs.height,"px"),void this.updateTooltipPosition(!1)):void this.updateArrowPosition();
        } }]),n;
      }(),de={ name:"Tooltip",props:{ mode:{ type:String,default:"dark",validator(n){
        return[ "light","dark" ].includes(n);
      } },message:{ type:String,default:"Default tooltip message",validator(n){
        return n.length<=250||(console.error("The tooltip message should be no longer than 250 characters"),!1);
      } }},data(){
        return{ tooltipId:this.randomID(),clickedToOpen:!1 };
      },mounted(){
        const n=this.$refs["tooltip"];new pe(n,this.message,this.mode,this.tooltipId,this);
      },methods:{ randomID(){
        return Math.floor(65536*(1+Math.random())).toString(16).substring(1);
      } }};const he=de;var Ae=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ ref:"tooltip",staticClass:"tooltip",attrs:{ role:"tooltip","aria-describedby":n.tooltipId }});
      },me=[];Ae._withStripped=!0;const ge=function(n){
        n&&n("data-v-0741c99a_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.tooltip {\n  display: inline-block;\n  margin-left: 5px;\n  vertical-align: middle;\n}\n.tooltip button {\n  color: #0f4d90;\n  font-size: 25px;\n  vertical-align: middle;\n  border: 0;\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  position: relative;\n  top: -2px;\n}\n.tooltip-box {\n  display: block;\n  visibility: hidden;\n  z-index: -100;\n  width: auto;\n  max-width: 500px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: opacity 0.25s ease-in-out;\n  pointer-events: none;\n}\n.tooltip-box .tooltip-message {\n  line-height: 20px;\n  color: white;\n  background-color: #444444;\n  font-size: 12px;\n  padding: 10px 8px 8px 8px;\n}\n@media screen and (max-width: 768px) {\n.tooltip-box .tooltip-message {\n    padding-top: 36px;\n}\n.tooltip-box .tooltip-message:before {\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    content: "\\f00d";\n    position: absolute;\n    top: 12px;\n    right: 16px;\n    font-family: "Font Awesome 5 Pro", sans-serif;\n    font-weight: 900;\n    font-size: 20px;\n}\n}\n@media screen and (max-width: 500px) {\n.tooltip-box {\n    width: auto;\n    max-width: 100%;\n}\n}\n.tooltip-box .tooltip-arrow {\n  position: fixed;\n  left: 0;\n  top: 0;\n  border: solid 8px transparent;\n  border-top-color: #444444;\n}\n.tooltip-box .tooltip-arrow.arrow-up {\n  border-top-color: transparent;\n  border-bottom-color: #444444;\n}\n.tooltip-box.light .tooltip-message {\n  color: #444444;\n  background-color: #f0f0f0;\n}\n.tooltip-box.light .tooltip-arrow {\n  border-top-color: #f0f0f0;\n}\n.tooltip-box.light .tooltip-arrow.arrow-up {\n  border-top-color: transparent;\n  border-bottom-color: #f0f0f0;\n}\n.tooltip-box.show {\n  visibility: visible;\n  opacity: 1;\n  z-index: 9999;\n}\n\n/*# sourceMappingURL=Tooltip.vue.map */',map:{ version:3,sources:[ "Tooltip.vue","/home/runner/work/phila-ui/phila-ui/src/components/Tooltip/Tooltip.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AC8BpB;EACA,qBAAA;EACA,gBAAA;EACA,sBAAA;AD5BA;AC6BA;EACA,cAAA;EACA,eAAA;EACA,sBAAA;EACA,SAAA;EACA,6BAAA;EACA,gBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,sBAAA;EACA,kBAAA;EACA,SAAA;AD3BA;AC8BA;EACA,cAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;ED3BE,gBAAgB;EC6BlB,eAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;EACA,qCAAA;EACA,oBAAA;AD3BA;AC6BA;EACA,iBAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,yBAAA;AD3BA;AC4BA;AANA;IAOA,iBAAA;ADzBE;AC0BF;IACA,qBAAA;IACA,kBAAA;IACA,oBAAA;IACA,oBAAA;IACA,mCAAA;IACA,gBAAA;IACA,kBAAA;IACA,SAAA;IDxBI,WAAW;IC0Bf,6CAAA;IACA,gBAAA;IACA,eAAA;ADxBE;AACF;AC4BA;AAtCA;IAuCA,WAAA;IACA,eAAA;ADzBE;AACF;AC2BA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EDzBE,6BAA6B;EC2B/B,yBAAA;ADzBA;AC0BA;EACA,6BAAA;EACA,4BAAA;ADxBA;AC8BA;EACA,cAAA;EACA,yBAHA;ADzBA;AC+BA;ED7BE,yBCuBF;ADtBA;AC8BA;EACA,6BAAA;EACA,4BAVA;ADlBA;AACA;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;AACf;;AAEA,sCAAsC",file:"Tooltip.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.tooltip {\n  display: inline-block;\n  margin-left: 5px;\n  vertical-align: middle;\n}\n.tooltip button {\n  color: #0f4d90;\n  font-size: 25px;\n  vertical-align: middle;\n  border: 0;\n  background-color: transparent;\n  box-shadow: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  position: relative;\n  top: -2px;\n}\n\n.tooltip-box {\n  display: block;\n  visibility: hidden;\n  z-index: -100;\n  width: auto;\n  max-width: 500px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: opacity 0.25s ease-in-out;\n  pointer-events: none;\n}\n.tooltip-box .tooltip-message {\n  line-height: 20px;\n  color: white;\n  background-color: #444444;\n  font-size: 12px;\n  padding: 10px 8px 8px 8px;\n}\n@media screen and (max-width: 768px) {\n  .tooltip-box .tooltip-message {\n    padding-top: 36px;\n  }\n  .tooltip-box .tooltip-message:before {\n    display: inline-block;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    -webkit-font-smoothing: antialiased;\n    content: "\\f00d";\n    position: absolute;\n    top: 12px;\n    right: 16px;\n    font-family: "Font Awesome 5 Pro", sans-serif;\n    font-weight: 900;\n    font-size: 20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .tooltip-box {\n    width: auto;\n    max-width: 100%;\n  }\n}\n.tooltip-box .tooltip-arrow {\n  position: fixed;\n  left: 0;\n  top: 0;\n  border: solid 8px transparent;\n  border-top-color: #444444;\n}\n.tooltip-box .tooltip-arrow.arrow-up {\n  border-top-color: transparent;\n  border-bottom-color: #444444;\n}\n.tooltip-box.light .tooltip-message {\n  color: #444444;\n  background-color: #f0f0f0;\n}\n.tooltip-box.light .tooltip-arrow {\n  border-top-color: #f0f0f0;\n}\n.tooltip-box.light .tooltip-arrow.arrow-up {\n  border-top-color: transparent;\n  border-bottom-color: #f0f0f0;\n}\n.tooltip-box.show {\n  visibility: visible;\n  opacity: 1;\n  z-index: 9999;\n}\n\n/*# sourceMappingURL=Tooltip.vue.map */','<template>\n  <div\n    ref="tooltip"\n    class="tooltip"\n    role="tooltip"\n    :aria-describedby="tooltipId"\n  />\n</template>\n\n<script>\nimport { Tooltip } from "./tooltip.class";\n\n/**\n * A tooltip which display a custom message on hover or click.\n * @niceName Tooltip\n * @group Other\n * @position 310\n * @badge next\n */\nexport default {\n  name: "Tooltip",\n  props: {\n    /**\n     * light mode: off-white bg\n     * dark mode: dark grey bg\n     */\n    mode: {\n      type: String,\n      default: "dark",\n      validator(mode) {\n        return [ "light", "dark" ].includes(mode);\n      },\n    },\n    /**\n     * the tooltip message\n     */\n    message: {\n      type: String,\n      default: "Default tooltip message",\n      validator(message) {\n        if (message.length <= 250) {\n          return true;\n        }\n        console.error(\n          "The tooltip message should be no longer than 250 characters",\n        );\n        return false;\n      },\n    },\n  },\n  data() {\n    return {\n      tooltipId: this.randomID(),\n      clickedToOpen: false,\n    };\n  },\n  mounted() {\n    const el = this.$refs["tooltip"];\n    new Tooltip(el, this.message, this.mode, this.tooltipId, this);\n  },\n  methods: {\n    randomID() {\n      return Math.floor((1 + Math.random()) * 0x10000)\n        .toString(16)\n        .substring(1);\n    },\n  },\n};\n<\/script>\n\n<style lang="scss">\n.tooltip {\n  display: inline-block;\n  margin-left: 5px;\n  vertical-align: middle;\n  button {\n    color: $ben-franklin-blue-dark;\n    font-size: 25px;\n    vertical-align: middle;\n    border: 0;\n    background-color: transparent;\n    box-shadow: none;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    vertical-align: middle;\n    position: relative;\n    top: -2px;\n  }\n}\n.tooltip-box {\n  display: block;\n  visibility: hidden;\n  z-index: -100;\n  width: auto;\n  max-width: 500px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: opacity 0.25s ease-in-out;\n  pointer-events: none;\n\n  .tooltip-message {\n    line-height: 20px;\n    color: $white;\n    background-color: $grey-dark;\n    font-size: 12px;\n    padding: 10px 8px 8px 8px;\n    @media screen and (max-width: $tablet) {\n      padding-top: 36px;\n      &:before {\n        display: inline-block;\n        font-style: normal;\n        font-variant: normal;\n        text-rendering: auto;\n        -webkit-font-smoothing: antialiased;\n        content: "\\f00d";\n        position: absolute;\n        top: 12px;\n        right: 16px;\n        font-family: "Font Awesome 5 Pro", sans-serif;\n        font-weight: 900;\n        font-size: 20px;\n      }\n    }\n  }\n\n  @media screen and (max-width: 500px) {\n    width: auto;\n    max-width: 100%;\n  }\n\n  .tooltip-arrow {\n    position: fixed;\n    left: 0;\n    top: 0;\n    border: solid 8px transparent;\n    border-top-color: $grey-dark;\n    &.arrow-up {\n      border-top-color: transparent;\n      border-bottom-color: $grey-dark;\n    }\n  }\n\n  &.light {\n    $light-color: #f0f0f0;\n    .tooltip-message {\n      color: $grey-dark;\n      background-color: $light-color;\n    }\n\n    .tooltip-arrow {\n      border-top-color: $light-color;\n      &.arrow-up {\n        border-top-color: transparent;\n        border-bottom-color: $light-color;\n      }\n    }\n  }\n\n  &.show {\n    visibility: visible;\n    opacity: 1;\n    z-index: 9999;\n  }\n}\n</style>' ]},media:void 0 });
      },we=void 0,ve=void 0,ye=!1,be=s({ render:Ae,staticRenderFns:me },ge,he,we,ye,ve,!1,l,void 0,void 0);L(be);var Be={ name:"Modal",inheritAttrs:!1,props:{ hideCloseButton:{ type:Boolean,default:!1 },hideAlertButtons:{ type:Boolean,default:!1 },hideXButton:{ type:Boolean,default:!1 },close:{ type:Function,required:!0 },type:{ type:String,default:"default",validator(n){
      const t=[ "default","alert","none" ];return!!t.includes(n);
    } },title:{ type:String,default:"Modal window default title" },body:{ type:String,default:"Modal window default body." },deleteButtonText:{ type:String,default:"Delete" }}};const Se=Be;var Ce=function(){
        var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ ref:"modal-window",staticClass:"modal-window",class:"modal-"+n.type },[ "alert"===n.type||n.hideXButton?n._e():e("div",{ staticClass:"modal-window-x" },[ e("button",{ attrs:{ "aria-label":"close button" },on:{ click:function(t){
          return t.preventDefault(),n.close(t);
        } }},[ e("i",{ staticClass:"fa fa-times" }) ]) ]),n._v(" "),e("div",{ staticClass:"modal-window-title" },[ "alert"===n.type?e("span",{ staticClass:"modal-alert-icon" },[ e("i",{ staticClass:"fa fa-exclamation" }) ]):n._e(),n._v(" "),n.$slots["title"]?[ n._t("title") ]:[ n._v("\n      "+n._s(n.title)+"\n    ") ] ],2),n._v(" "),n.$slots["default"]||n.body?e("div",{ ref:"modal-window-content",staticClass:"modal-window-content" },[ n.$slots["default"]?[ n._t("default") ]:[ n._v("\n      "+n._s(n.body)+"\n    ") ] ],2):n._e(),n._v(" "),e("div",{ staticClass:"modal-window-actions" },[ e("div",{ staticClass:"buttons" },[ n.$slots["actions-before"]?[ n._t("actions-before") ]:n._e(),n._v(" "),n.hideCloseButton||"alert"===n.type?n._e():[ e("button",{ staticClass:"button is-cta is-large",on:{ click:function(t){
          return t.preventDefault(),n.close(t);
        } }},[ n._v("\n          Close\n        ") ]) ],n._v(" "),n.hideAlertButtons||"alert"!==n.type?n._e():[ e("button",{ staticClass:"button is-secondary is-large",on:{ click:function(t){
          return t.preventDefault(),n.close(t);
        } }},[ n._v("\n          Cancel\n        ") ]),n._v(" "),e("button",{ staticClass:"button is-danger is-large",on:{ click:function(t){
          return n.$emit("deleteAction");
        } }},[ n._v("\n          "+n._s(n.deleteButtonText)+"\n        ") ]) ],n._v(" "),n.$slots["actions-after"]?[ n._t("actions-after") ]:n._e() ],2) ]) ]);
      },Oe=[];Ce._withStripped=!0;const ke=function(n){
        n&&n("data-v-8b4a591c_0",{ source:'@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.modal-window[data-v-8b4a591c] {\n  position: absolute;\n  background-color: white;\n  border-top: 1rem solid #0f4d90;\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  max-height: 572px;\n  top: 50%;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  transform-origin: center;\n  transform: translate(-50%, -50%);\n  padding: 47px 15px 1rem 15px;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 767px) {\n.modal-window[data-v-8b4a591c] {\n    max-height: 100%;\n}\n}\n.modal-window-x[data-v-8b4a591c] {\n  position: absolute;\n  top: 20px;\n  right: 1rem;\n}\n.modal-window-x button[data-v-8b4a591c] {\n  cursor: pointer;\n  border: 0;\n  background-color: transparent;\n  color: #0f4d90;\n  font-weight: 900;\n  font-size: 1.5rem;\n}\n.modal-window-title[data-v-8b4a591c] {\n  padding-right: 2rem;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  line-height: 2rem;\n}\n.modal-window-content[data-v-8b4a591c] {\n  width: 100%;\n  max-height: 366px;\n  overflow-y: scroll;\n  flex-grow: 1;\n}\n@media screen and (max-width: 767px) {\n.modal-window-content[data-v-8b4a591c] {\n    max-height: 100%;\n}\n}\n.modal-window-actions[data-v-8b4a591c] {\n  margin-top: 1.5rem;\n}\n.modal-window-actions .buttons[data-v-8b4a591c] {\n  justify-content: flex-end;\n}\n.modal-window-actions .buttons[data-v-8b4a591c]:last-child {\n  margin-bottom: 0;\n}\n.modal-window-actions .buttons .button[data-v-8b4a591c] {\n  margin-left: 0;\n  margin-bottom: 0.5rem;\n}\n.modal-window-actions .buttons .button[data-v-8b4a591c]:not(:first-child) {\n  margin-left: 2rem !important;\n}\n.modal-window-actions .buttons .button[data-v-8b4a591c]:not(:last-child) {\n  margin-right: 0;\n}\n.modal-window-actions .button[data-v-8b4a591c] {\n  margin-left: -zf-to-rem(32px, 16px);\n  margin-bottom: 0;\n}\n.modal-alert-icon[data-v-8b4a591c] {\n  color: #cc3000;\n  font-size: 1.7rem;\n}\n\n/*# sourceMappingURL=Modal.vue.map */',map:{ version:3,sources:[ "Modal.vue","/home/runner/work/phila-ui/phila-ui/src/components/Modal/Modal.vue" ],names:[],mappings:"AAAA;EACE,yBAAyB;EACzB,yPAAyP;EACzP,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,0OAA0O;EAC1O,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2PAA2P;EAC3P,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,6OAA6O;EAC7O,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kOAAkO;EAClO,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,2QAA2Q;EAC3Q,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,kPAAkP;EAClP,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,8OAA8O;EAC9O,mBAAmB;EACnB,kBAAkB;AACpB;AACA,oBAAoB;AC+HpB;EACA,kBAAA;EACA,uBAAA;EACA,8BAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,iBAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,wBAAA;EACA,gCAAA;EACA,4BAAA;EACA,aAAA;EACA,sBAAA;AD7HA;AACA;AC4GA;IAkBA,gBAAA;AD3HE;AACF;AC6HA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;AD1HA;AC2HA;EACA,eAAA;EDzHE,SAAS;EC2HX,6BAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;ADzHA;AC6HA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;AD1HA;AC6HA;EACA,WAAA;ED1HE,iBAAiB;EC4HnB,kBAAA;EACA,YAAA;AD1HA;AACA;ACqHA;IAMA,gBAAA;ADxHE;AACF;AC2HA;EACA,kBAAA;ADxHA;ACyHA;EACA,yBAAA;ADvHA;ACwHA;EACA,gBAAA;ADtHA;ACwHA;EACA,cAAA;EAOA,qBAAA;AD5HA;ACsHA;EACA,4BAAA;ADpHA;ACsHA;EACA,eAAA;ADpHA;AC0HA;EACA,mCAAA;EACA,gBAAA;ADxHA;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA,oCAAoC",file:"Modal.vue",sourcesContent:[ '@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Regular"), local("Montserrat-Regular"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Italic"), local("OpenSans-Italic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Italic.woff") format("woff");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold Italic"), local("OpenSans-BoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-BoldItalic.woff") format("woff");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Montserrat";\n  src: local("Montserrat Bold"), local("Montserrat-Bold"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/Montserrat/Montserrat-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Bold"), local("OpenSans-Bold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Bold.woff") format("woff");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold Italic"), local("OpenSans-SemiBoldItalic"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBoldItalic.woff") format("woff");\n  font-weight: 600;\n  font-style: italic;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-SemiBold.woff") format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Open Sans";\n  src: local("Open Sans Regular"), local("OpenSans-Regular"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff2") format("woff2"), url("https://www.phila.gov/assets/fonts/OpenSans/OpenSans-Regular.woff") format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n/* Bulma Utilities */\n.modal-window {\n  position: absolute;\n  background-color: white;\n  border-top: 1rem solid #0f4d90;\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  max-height: 572px;\n  top: 50%;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  transform-origin: center;\n  transform: translate(-50%, -50%);\n  padding: 47px 15px 1rem 15px;\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 767px) {\n  .modal-window {\n    max-height: 100%;\n  }\n}\n\n.modal-window-x {\n  position: absolute;\n  top: 20px;\n  right: 1rem;\n}\n.modal-window-x button {\n  cursor: pointer;\n  border: 0;\n  background-color: transparent;\n  color: #0f4d90;\n  font-weight: 900;\n  font-size: 1.5rem;\n}\n\n.modal-window-title {\n  padding-right: 2rem;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  line-height: 2rem;\n}\n\n.modal-window-content {\n  width: 100%;\n  max-height: 366px;\n  overflow-y: scroll;\n  flex-grow: 1;\n}\n@media screen and (max-width: 767px) {\n  .modal-window-content {\n    max-height: 100%;\n  }\n}\n\n.modal-window-actions {\n  margin-top: 1.5rem;\n}\n.modal-window-actions .buttons {\n  justify-content: flex-end;\n}\n.modal-window-actions .buttons:last-child {\n  margin-bottom: 0;\n}\n.modal-window-actions .buttons .button {\n  margin-left: 0;\n  margin-bottom: 0.5rem;\n}\n.modal-window-actions .buttons .button:not(:first-child) {\n  margin-left: 2rem !important;\n}\n.modal-window-actions .buttons .button:not(:last-child) {\n  margin-right: 0;\n}\n.modal-window-actions .button {\n  margin-left: -zf-to-rem(32px, 16px);\n  margin-bottom: 0;\n}\n\n.modal-alert-icon {\n  color: #cc3000;\n  font-size: 1.7rem;\n}\n\n/*# sourceMappingURL=Modal.vue.map */','<template>\n  <div\n    ref="modal-window"\n    class="modal-window"\n    :class="`modal-${type}`"\n  >\n    <div\n      v-if="type !== \'alert\' && !hideXButton"\n      class="modal-window-x"\n    >\n      <button\n        aria-label="close button"\n        @click.prevent="close"\n      >\n        <i class="fa fa-times" />\n      </button>\n    </div>\n    <div class="modal-window-title">\n      <span\n        v-if="type === \'alert\'"\n        class="modal-alert-icon"\n      >\n        <i class="fa fa-exclamation" />\n      </span>\n      <template v-if="$slots[\'title\']">\n        \x3c!-- @slot Modal title --\x3e\n        <slot name="title" />\n      </template>\n      <template v-else>\n        {{ title }}\n      </template>\n    </div>\n    <div\n      v-if="$slots[\'default\'] || body"\n      ref="modal-window-content"\n      class="modal-window-content"\n    >\n      <template v-if="$slots[\'default\']">\n        \x3c!-- @slot Modal body/content --\x3e\n        <slot name="default" />\n      </template>\n      <template v-else>\n        {{ body }}\n      </template>\n    </div>\n\n    <div class="modal-window-actions">\n      <div class="buttons">\n        <template v-if="$slots[\'actions-before\']">\n          \x3c!-- @slot Actions buttons to append before default buttons --\x3e\n          <slot name="actions-before" />\n        </template>\n        <template v-if="!hideCloseButton && type !== \'alert\'">\n          <button\n            class="button is-cta is-large"\n            @click.prevent="close"\n          >\n            Close\n          </button>\n        </template>\n        <template v-if="!hideAlertButtons && type === \'alert\'">\n          <button\n            class="button is-secondary is-large"\n            @click.prevent="close"\n          >\n            Cancel\n          </button>\n          <button\n            class="button is-danger is-large"\n            @click="$emit(\'deleteAction\')"\n          >\n            {{ deleteButtonText }}\n          </button>\n        </template>\n        <template v-if="$slots[\'actions-after\']">\n          \x3c!-- @slot Actions buttons to append after default buttons --\x3e\n          <slot name="actions-after" />\n        </template>\n      </div>\n    </div>\n  </div>\n</template>\n<script>\n/**\n * A modal window component with basic styles for title, body, and action buttons.\n * @niceName Modal\n * @group Other\n * @position 302\n * @badge next\n */\nexport default {\n  name: "Modal",\n  inheritAttrs: false,\n  props: {\n    /**\n     * When type = default, hide the default CLOSE button\n     */\n    hideCloseButton: {\n      type: Boolean,\n      default: false,\n    },\n    /**\n     * When type is = alert, hide the default CANCEL and DELETE buttons.\n     */\n    hideAlertButtons: {\n      type: Boolean,\n      default: false,\n    },\n    /**\n     * Hide the X button.\n     */\n    hideXButton: {\n      type: Boolean,\n      default: false,\n    },\n    /**\n     * Function called to close the window\n     */\n    close: {\n      type: Function,\n      required: true,\n    },\n    /**\n     * Type of windows available:\n     * \'default\' type includes a CLOSE button\n     * \'alert\' type includes CANCEL and DELETE buttons\n     * \'none\' does not include anything\n     */\n    type: {\n      type: String,\n      default: "default",\n      validator(value) {\n        const types = [ "default", "alert", "none" ];\n        if (types.includes(value)) {\n          return true;\n        }\n        return false;\n      },\n    },\n    /**\n     * Title of the modal window\n     * Shows only if the \'title\' slot is not used\n     */\n    title: {\n      type: String,\n      default: "Modal window default title",\n    },\n    /**\n     * Body/content of the modal window\n     * Shows only if the \'default\' slot is not used\n     */\n    body: {\n      type: String,\n      default: "Modal window default body.",\n    },\n    /**\n     * Body/content of the modal window\n     * Shows only if the \'default\' slot is not used\n     */\n    deleteButtonText: {\n      type: String,\n      default: "Delete",\n    },\n  },\n};\n<\/script>\n\n<style lang="scss" scoped>\n.modal-window {\n  position: absolute;\n  background-color: $white;\n  border-top: 1rem solid $ben-franklin-blue-dark;\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  max-height: 572px;\n  top: 50%;\n  left: 50%;\n  right: auto;\n  bottom: auto;\n  transform-origin: center;\n  transform: translate(-50%, -50%);\n  padding: 47px 15px 1rem 15px;\n  display: flex;\n  flex-direction: column;\n  @include until($tablet) {\n    max-height: 100%;\n  }\n}\n.modal-window-x {\n  position: absolute;\n  top: 20px;\n  right: 1rem;\n  button {\n    cursor: pointer;\n    border: 0;\n    background-color: transparent;\n    color: $ben-franklin-blue-dark;\n    font-weight: 900;\n    font-size: 1.5rem;\n  }\n}\n\n.modal-window-title {\n  padding-right: 2rem;\n  font-size: $size-1;\n  margin-bottom: 1rem;\n  line-height: $size-1;\n}\n\n.modal-window-content {\n  width: 100%;\n  max-height: 366px;\n  overflow-y: scroll;\n  flex-grow: 1;\n  @include until($tablet) {\n    max-height: 100%;\n  }\n}\n\n.modal-window-actions {\n  margin-top: 1.5rem;\n  .buttons {\n    justify-content: flex-end;\n    &:last-child {\n      margin-bottom: 0;\n    }\n    .button {\n      margin-left: 0;\n      &:not(:first-child) {\n        margin-left: 2rem !important;\n      }\n      &:not(:last-child) {\n        margin-right: 0;\n      }\n      margin-bottom: 0.5rem;\n    }\n  }\n\n  .button {\n    margin-left: rem-calc(32px);\n    margin-bottom: 0;\n  }\n}\n\n.modal-alert-icon {\n  color: $love-park-red;\n  font-size: 1.7rem;\n}\n</style>' ]},media:void 0 });
      },Ee="data-v-8b4a591c",xe=void 0,_e=!1,Me=s({ render:Ce,staticRenderFns:Oe },ke,Se,Ee,_e,xe,!1,l,void 0,void 0);L(Me);
  }).call(this,e("c8ba"));
},6579:function(n,t,e){
  var o=e("c749"),a=TypeError;n.exports=function(n){
    if(o(n)) {
      throw a("The method doesn't accept regular expressions");
    }return n;
  };
},6640:function(n,t,e){
  var o=e("2750"),a=e("550a");n.exports=function(n){
    if("Function"===o(n)) {
      return a(n);
    }
  };
},"67b2":function(n,t,e){
  var o=e("0885"),a=e("0e07").f,i=e("a3b1"),s=e("4ecc"),r=e("cc3e"),l=e("bec4"),f=e("bd06");n.exports=function(n,t){
    var e,c,u,p,d,h,A=n.target,m=n.global,g=n.stat;if(c=m?o:g?o[A]||r(A,{}):(o[A]||{}).prototype,c) {
      for(u in t){
        if(d=t[u],n.dontCallGetSet?(h=a(c,u),p=h&&h.value):p=c[u],e=f(m?u:A+(g?".":"#")+u,n.forced),!e&&void 0!==p){
          if(typeof d==typeof p) {
            continue;
          }l(d,p);
        }(n.sham||p&&p.sham)&&i(d,"sham",!0),s(c,u,d,n);
      }
    }
  };
},"6b75":function(n,t,e){
  "use strict";function o(n,t){
    (null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++) {
      o[e]=n[e];
    }return o;
  }e.d(t,"a",(function(){
    return o;
  }));
},"6ba1":function(n,t,e){
  var o=e("550a"),a=e("b96e"),i=e("2750"),s=Object,r=o("".split);n.exports=a((function(){
    return!s("z").propertyIsEnumerable(0);
  }))?function(n){
      return"String"==i(n)?r(n,""):s(n);
    }:s;
},"6f53":function(n,t,e){
  var o=e("83ab"),a=e("e330"),i=e("df75"),s=e("fc6a"),r=e("d1e7").f,l=a(r),f=a([].push),c=function(n){
    return function(t){
      var e,a=s(t),r=i(a),c=r.length,u=0,p=[];while(c>u) {
        e=r[u++],o&&!l(a,e)||f(p,n?[ e,a[e] ]:a[e]);
      }return p;
    };
  };n.exports={ entries:c(!0),values:c(!1) };
},"6f6f":function(n,t,e){
  var o=e("db82"),a=String,i=TypeError;n.exports=function(n){
    if("object"==typeof n||o(n)) {
      return n;
    }throw i("Can't set "+a(n)+" as a prototype");
  };
},7156:function(n,t,e){
  var o=e("1626"),a=e("861d"),i=e("d2bb");n.exports=function(n,t,e){
    var s,r;return i&&o(s=t.constructor)&&s!==e&&a(r=s.prototype)&&r!==e.prototype&&i(n,r),n;
  };
},"717a":function(n,t,e){
  "use strict";Object.defineProperty(t,"__esModule",{ value:!0 });var o="fas",a="caret-right",i=192,s=512,r=[],l="f0da",f="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z";t.definition={ prefix:o,iconName:a,icon:[ i,s,r,l,f ]},t.faCaretRight=t.definition,t.prefix=o,t.iconName=a,t.width=i,t.height=s,t.ligatures=r,t.unicode=l,t.svgPathData=f;
},"730e":function(n,t,e){
  var o=e("550a"),a=e("b96e"),i=e("db82"),s=e("0102"),r=e("2ef3"),l=e("8cac"),f=function(){},c=[],u=r("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=o(p.exec),h=!p.exec(f),A=function(n){
      if(!i(n)) {
        return!1;
      }try{
        return u(f,c,n),!0;
      }catch(t){
        return!1;
      }
    },m=function(n){
      if(!i(n)) {
        return!1;
      }switch(s(n)){
      case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1;
      }try{
        return h||!!d(p,l(n));
      }catch(t){
        return!0;
      }
    };m.sham=!0,n.exports=!u||a((function(){
    var n;return A(A.call)||!A(Object)||!A((function(){
      n=!0;
    }))||n;
  }))?m:A;
},"746f":function(n,t,e){
  var o=e("428f"),a=e("1a2d"),i=e("e5383"),s=e("9bf2").f;n.exports=function(n){
    var t=o.Symbol||(o.Symbol={});a(t,n)||s(t,n,{ value:i.f(n) });
  };
},"754a":function(n,t,e){
  "use strict";var o={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,i=a&&!o.call({ 1:2 },1);t.f=i?function(n){
    var t=a(this,n);return!!t&&t.enumerable;
  }:o;
},"785a":function(n,t,e){
  var o=e("cc12"),a=o("span").classList,i=a&&a.constructor&&a.constructor.prototype;n.exports=i===Object.prototype?void 0:i;
},7942:function(n,t,e){
  var o=e("db82"),a=e("98bd"),i=a.all;n.exports=a.IS_HTMLDDA?function(n){
    return"object"==typeof n?null!==n:o(n)||n===i;
  }:function(n){
    return"object"==typeof n?null!==n:o(n);
  };
},7961:function(n,t,e){
  var o=e("0bc2"),a=e("550a"),i=e("fcb7"),s=e("bfa1"),r=e("754a").f,l=a(r),f=a([].push),c=function(n){
    return function(t){
      var e,a=s(t),r=i(a),c=r.length,u=0,p=[];while(c>u) {
        e=r[u++],o&&!l(a,e)||f(p,n?[ e,a[e] ]:a[e]);
      }return p;
    };
  };n.exports={ entries:c(!0),values:c(!1) };
},"7bb6":function(n,t,e){
  var o,a,i=e("0885"),s=e("b853"),r=i.process,l=i.Deno,f=r&&r.versions||l&&l.version,c=f&&f.v8;c&&(o=c.split("."),a=o[0]>0&&o[0]<4?1:+(o[0]+o[1])),!a&&s&&(o=s.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=s.match(/Chrome\/(\d+)/),o&&(a=+o[1]))),n.exports=a;
},"7f5e":function(n,t,e){
  var o=e("2ef3"),a=e("db82"),i=e("3bed"),s=e("8a7e"),r=Object;n.exports=s?function(n){
    return"symbol"==typeof n;
  }:function(n){
    var t=o("Symbol");return a(t)&&i(t.prototype,r(n));
  };
},"7f84":function(n,t,e){
  (function(t,e){
    n.exports=e();
  })(window,(function(){
    return function(n){
      var t={};function e(o){
        if(t[o]) {
          return t[o].exports;
        }var a=t[o]={ i:o,l:!1,exports:{}};return n[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports;
      }return e.m=n,e.c=t,e.d=function(n,t,o){
        e.o(n,t)||Object.defineProperty(n,t,{ enumerable:!0,get:o });
      },e.r=function(n){
        "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{ value:"Module" }),Object.defineProperty(n,"__esModule",{ value:!0 });
      },e.t=function(n,t){
        if(1&t&&(n=e(n)),8&t) {
          return n;
        }if(4&t&&"object"===typeof n&&n&&n.__esModule) {
          return n;
        }var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{ enumerable:!0,value:n }),2&t&&"string"!=typeof n) {
          for(var a in n) {
            e.d(o,a,function(t){
              return n[t];
            }.bind(null,a));
          }
        }return o;
      },e.n=function(n){
        var t=n&&n.__esModule?function(){
          return n["default"];
        }:function(){
          return n;
        };return e.d(t,"a",t),t;
      },e.o=function(n,t){
        return Object.prototype.hasOwnProperty.call(n,t);
      },e.p="",e(e.s=0);
    }([ function(n,t,e){
      n.exports=e(1);
    },function(n,t,e){
      "use strict";e.r(t);var o=[{ name:"moveend",check:function(n,t){
          return t.center&&n.isMoving();
        } },{ name:"zoomend",check:function(n,t){
          return void 0!==t.zoom&&null!==t.zoom&&n.isZooming();
        } },{ name:"rotateend",check:function(n,t){
          return void 0!==t.bearing&&null!==t.bearing&&n.isRotating();
        } },{ name:"pitchend",check:function(n,t){
          return void 0!==t.pitch&&null!==t.bearing&&n.isMoving();
        } }],a=function(n){
          return{ center:n.getCenter(),zoom:n.getZoom(),bearing:n.getBearing(),pitch:n.getPitch() };
        },i={ events:o,getter:a },s={ events:[{ name:"moveend",check:function(n){
          return n.isMoving();
        } }],getter:function(n){
          return{ center:n.getCenter() };
        } },r={ events:[{ name:"zoomend",check:function(n){
          return n.isZooming();
        } }],getter:function(n){
          return{ zoom:n.getZoom() };
        } },l={ events:[{ name:"rotateend",check:function(n){
          return n.isRotating();
        } }],getter:function(n){
          return{ bearing:n.getBearing() };
        } },f={ setCenter:s,panBy:s,panTo:s,setZoom:r,zoomTo:r,zoomIn:r,zoomOut:r,setBearing:l,rotateTo:l,resetNorth:l,snapToNorth:l,setPitch:{ events:[{ name:"pitchend",check:function(n){
          return!0;
        } }],getter:function(n){
          return{ pitch:n.getPitch() };
        } },fitBounds:{ events:[{ name:"zoomend",check:function(n){
          return n.isZooming();
        } },{ name:"moveend",check:function(n){
          return n.isMoving();
        } },{ name:"rotateend",check:function(n){
          return n.isRotating();
        } }],getter:function(n){
          return{ zoom:n.getZoom(),bearing:n.getBearing(),pitch:n.getPitch(),center:n.getCenter() };
        } },fitScreenCoordinates:{ events:[{ name:"zoomend",check:function(n,t){
          return n.isZooming();
        } },{ name:"moveend",check:function(n,t){
          return n.isMoving();
        } },{ name:"rotateend",check:function(n,t){
          return t.bearing&&n.isRotating();
        } }],getter:function(n){
          return{ zoom:n.getZoom(),center:n.getCenter(),bearing:n.getBearing(),pitch:n.getPitch() };
        } },jumpTo:i,easeTo:i,flyTo:i };function c(n){
        return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){
          return typeof n;
        }:function(n){
          return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n;
        },c(n);
      }function u(n){
        for(var t=1;t<arguments.length;t++){
          var e=null!=arguments[t]?arguments[t]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter((function(n){
            return Object.getOwnPropertyDescriptor(e,n).enumerable;
          })))),o.forEach((function(t){
            p(n,t,e[t]);
          }));
        }return n;
      }function p(n,t,e){
        return t in n?Object.defineProperty(n,t,{ value:e,enumerable:!0,configurable:!0,writable:!0 }):n[t]=e,n;
      }function d(n){
        return"".concat(n,"-").concat((""+Math.random()).split(".")[1]);
      }function h(n,t,e,o){
        var a=function a(i){
          i.type===t&&i.eventId===e&&(n.off(t,a),o(i));
        };return a;
      }function A(n,t){
        var e=n[t],o=e.length;return function(){
          for(var a=[],i={ eventId:d(t) },s=f[t].events.map((function(t,e){
              return{ event:t,func:new Promise((function(o,s){
                a[e]={ event:t,func:h(n,t.name,i.eventId,o) },n.on(t.name,a[e].func);
              })) };
            })),r=[],l=0;l<o;l++) {
            l===o-1?r.push(u({},i,(l<0||arguments.length<=l?void 0:arguments[l])||{})):r.push((l<0||arguments.length<=l?void 0:arguments[l])||null);
          }var p=[],A=(arguments.length<=0?void 0:arguments[0])||{};try{
            e.apply(n,r),"fitBounds"===t&&(A={}),"fitScreenCoordinates"===t&&(A={ bearing:null },A.bearing=null,"number"===typeof(arguments.length<=2?void 0:arguments[2])&&(A.bearing=arguments.length<=2?void 0:arguments[2]),(arguments.length<=3?void 0:arguments[3])&&"object"===c(arguments.length<=3?void 0:arguments[3])&&(A=u({},A,arguments.length<=3?void 0:arguments[3]))),p=s.map((function(t){
              var e=t.event,o=t.func;return e.check(n,A)?o:(n.off(e.name,o),Promise.resolve());
            }));
          }catch(m){
            throw a.forEach((function(t){
              var e=t.event,o=t.func;n.off(e.name,o);
            })),m;
          }return Promise.all(p).then((function(){
            return f[t].getter(n);
          }));
        };
      }var m=A,g=function(n){
        var t=Object.keys(f),e={};return t.forEach((function(o){
          -1!==t.indexOf(o)&&(e[o]=m(n,o));
        })),e;
      };function w(n){
        var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?m(n,t):g(n);
      }e.d(t,"default",(function(){
        return w;
      }));
    } ])["default"];
  }));
},"807d":function(n,t,e){
  var o=e("0bc2"),a=e("b96e");n.exports=o&&a((function(){
    return 42!=Object.defineProperty((function(){}),"prototype",{ value:42,writable:!1 }).prototype;
  }));
},8189:function(n,t,e){},"834f":function(n,t,e){
  "use strict";Object.defineProperty(t,"__esModule",{ value:!0 });var o="fas",a="external-link-alt",i=512,s=512,r=[],l="f35d",f="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z";t.definition={ prefix:o,iconName:a,icon:[ i,s,r,l,f ]},t.faExternalLinkAlt=t.definition,t.prefix=o,t.iconName=a,t.width=i,t.height=s,t.ligatures=r,t.unicode=l,t.svgPathData=f;
},8352:function(n,t,e){
  var o=e("0885"),a=e("db82"),i=o.WeakMap;n.exports=a(i)&&/native code/.test(String(i));
},"84d7":function(n,t,e){
  var o=e("bf5d");n.exports=function(n,t){
    return new(o(n))(0===t?0:t);
  };
},"85c6":function(n,t,e){
  var o=e("9bc7");n.exports=function(n){
    var t=+n;return t!==t||0===t?0:o(t);
  };
},"8a7e":function(n,t,e){
  var o=e("388c");n.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;
},"8cac":function(n,t,e){
  var o=e("550a"),a=e("db82"),i=e("6159"),s=o(Function.toString);a(i.inspectSource)||(i.inspectSource=function(n){
    return s(n);
  }),n.exports=i.inspectSource;
},"8f03":function(n,t,e){
  var o=e("49be"),a=o("match");n.exports=function(n){
    var t=/./;try{
      "/./"[n](t);
    }catch(e){
      try{
        return t[a]=!1,"/./"[n](t);
      }catch(o){}
    }return!1;
  };
},"90d8":function(n,t,e){
  var o=e("c65b"),a=e("1a2d"),i=e("3a9b"),s=e("ad6d"),r=RegExp.prototype;n.exports=function(n){
    var t=n.flags;return void 0!==t||"flags"in r||a(n,"flags")||!i(r,n)?t:o(s,n);
  };
},9317:function(n,t,e){
  "use strict";e("2c1a");
},9448:function(n,t,e){
  "use strict";var o,a,i=e("53ca"),s=e("5da5"),r={ methods:{ getSiteName:function(n){
      var t,e=this.$config.locationInfo.siteName,o=Object(i["a"])(e);if("function"===o){
        var a=this.$store.state,r=e;t=n?r(n,s["a"]):r(a);
      }else {
        t=n[e];
      }return t;
    },getProjection:function(n){
      var t,e=this.$config.projection,o=Object(i["a"])(e);if("function"===o){
        var a=this.$store.state,s=e;t=s(n||a);
      }else {
        t=e;
      }return t;
    } }},l=r,f=e("2877"),c=Object(f["a"])(l,o,a,!1,null,null,null);t["a"]=c.exports;
},"96cf":function(n,t,e){
  var o=function(n){
    "use strict";var t,e=Object.prototype,o=e.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",r=a.toStringTag||"@@toStringTag";function l(n,t,e){
      return Object.defineProperty(n,t,{ value:e,enumerable:!0,configurable:!0,writable:!0 }),n[t];
    }try{
      l({},"");
    }catch($){
      l=function(n,t,e){
        return n[t]=e;
      };
    }function f(n,t,e,o){
      var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),s=new _(o||[]);return i._invoke=O(n,e,s),i;
    }function c(n,t,e){
      try{
        return{ type:"normal",arg:n.call(t,e) };
      }catch($){
        return{ type:"throw",arg:$ };
      }
    }n.wrap=f;var u="suspendedStart",p="suspendedYield",d="executing",h="completed",A={};function m(){}function g(){}function w(){}var v={};l(v,i,(function(){
      return this;
    }));var y=Object.getPrototypeOf,b=y&&y(y(M([])));b&&b!==e&&o.call(b,i)&&(v=b);var B=w.prototype=m.prototype=Object.create(v);function S(n){
      [ "next","throw","return" ].forEach((function(t){
        l(n,t,(function(n){
          return this._invoke(t,n);
        }));
      }));
    }function C(n,t){
      function e(a,i,s,r){
        var l=c(n[a],n,i);if("throw"!==l.type){
          var f=l.arg,u=f.value;return u&&"object"===typeof u&&o.call(u,"__await")?t.resolve(u.__await).then((function(n){
            e("next",n,s,r);
          }),(function(n){
            e("throw",n,s,r);
          })):t.resolve(u).then((function(n){
            f.value=n,s(f);
          }),(function(n){
            return e("throw",n,s,r);
          }));
        }r(l.arg);
      }var a;function i(n,o){
        function i(){
          return new t((function(t,a){
            e(n,o,t,a);
          }));
        }return a=a?a.then(i,i):i();
      }this._invoke=i;
    }function O(n,t,e){
      var o=u;return function(a,i){
        if(o===d) {
          throw new Error("Generator is already running");
        }if(o===h){
          if("throw"===a) {
            throw i;
          }return I();
        }e.method=a,e.arg=i;while(1){
          var s=e.delegate;if(s){
            var r=k(s,e);if(r){
              if(r===A) {
                continue;
              }return r;
            }
          }if("next"===e.method) {
            e.sent=e._sent=e.arg;
          }else if("throw"===e.method){
            if(o===u) {
              throw o=h,e.arg;
            }e.dispatchException(e.arg);
          }else {
            "return"===e.method&&e.abrupt("return",e.arg);
          }o=d;var l=c(n,t,e);if("normal"===l.type){
            if(o=e.done?h:p,l.arg===A) {
              continue;
            }return{ value:l.arg,done:e.done };
          }"throw"===l.type&&(o=h,e.method="throw",e.arg=l.arg);
        }
      };
    }function k(n,e){
      var o=n.iterator[e.method];if(o===t){
        if(e.delegate=null,"throw"===e.method){
          if(n.iterator["return"]&&(e.method="return",e.arg=t,k(n,e),"throw"===e.method)) {
            return A;
          }e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method");
        }return A;
      }var a=c(o,n.iterator,e.arg);if("throw"===a.type) {
        return e.method="throw",e.arg=a.arg,e.delegate=null,A;
      }var i=a.arg;return i?i.done?(e[n.resultName]=i.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,A):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,A);
    }function E(n){
      var t={ tryLoc:n[0] };1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t);
    }function x(n){
      var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t;
    }function _(n){
      this.tryEntries=[{ tryLoc:"root" }],n.forEach(E,this),this.reset(!0);
    }function M(n){
      if(n){
        var e=n[i];if(e) {
          return e.call(n);
        }if("function"===typeof n.next) {
          return n;
        }if(!isNaN(n.length)){
          var a=-1,s=function e(){
            while(++a<n.length) {
              if(o.call(n,a)) {
                return e.value=n[a],e.done=!1,e;
              }
            }return e.value=t,e.done=!0,e;
          };return s.next=s;
        }
      }return{ next:I };
    }function I(){
      return{ value:t,done:!0 };
    }return g.prototype=w,l(B,"constructor",w),l(w,"constructor",g),g.displayName=l(w,r,"GeneratorFunction"),n.isGeneratorFunction=function(n){
      var t="function"===typeof n&&n.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name));
    },n.mark=function(n){
      return Object.setPrototypeOf?Object.setPrototypeOf(n,w):(n.__proto__=w,l(n,r,"GeneratorFunction")),n.prototype=Object.create(B),n;
    },n.awrap=function(n){
      return{ __await:n };
    },S(C.prototype),l(C.prototype,s,(function(){
      return this;
    })),n.AsyncIterator=C,n.async=function(t,e,o,a,i){
      void 0===i&&(i=Promise);var s=new C(f(t,e,o,a),i);return n.isGeneratorFunction(e)?s:s.next().then((function(n){
        return n.done?n.value:s.next();
      }));
    },S(B),l(B,r,"Generator"),l(B,i,(function(){
      return this;
    })),l(B,"toString",(function(){
      return"[object Generator]";
    })),n.keys=function(n){
      var t=[];for(var e in n) {
        t.push(e);
      }return t.reverse(),function e(){
        while(t.length){
          var o=t.pop();if(o in n) {
            return e.value=o,e.done=!1,e;
          }
        }return e.done=!0,e;
      };
    },n.values=M,_.prototype={ constructor:_,reset:function(n){
      if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!n) {
        for(var e in this) {
          "t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t);
        }
      }
    },stop:function(){
      this.done=!0;var n=this.tryEntries[0],t=n.completion;if("throw"===t.type) {
        throw t.arg;
      }return this.rval;
    },dispatchException:function(n){
      if(this.done) {
        throw n;
      }var e=this;function a(o,a){
        return r.type="throw",r.arg=n,e.next=o,a&&(e.method="next",e.arg=t),!!a;
      }for(var i=this.tryEntries.length-1;i>=0;--i){
        var s=this.tryEntries[i],r=s.completion;if("root"===s.tryLoc) {
          return a("end");
        }if(s.tryLoc<=this.prev){
          var l=o.call(s,"catchLoc"),f=o.call(s,"finallyLoc");if(l&&f){
            if(this.prev<s.catchLoc) {
              return a(s.catchLoc,!0);
            }if(this.prev<s.finallyLoc) {
              return a(s.finallyLoc);
            }
          }else if(l){
            if(this.prev<s.catchLoc) {
              return a(s.catchLoc,!0);
            }
          }else{
            if(!f) {
              throw new Error("try statement without catch or finally");
            }if(this.prev<s.finallyLoc) {
              return a(s.finallyLoc);
            }
          }
        }
      }
    },abrupt:function(n,t){
      for(var e=this.tryEntries.length-1;e>=0;--e){
        var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&o.call(a,"finallyLoc")&&this.prev<a.finallyLoc){
          var i=a;break;
        }
      }i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=n,s.arg=t,i?(this.method="next",this.next=i.finallyLoc,A):this.complete(s);
    },complete:function(n,t){
      if("throw"===n.type) {
        throw n.arg;
      }return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),A;
    },finish:function(n){
      for(var t=this.tryEntries.length-1;t>=0;--t){
        var e=this.tryEntries[t];if(e.finallyLoc===n) {
          return this.complete(e.completion,e.afterLoc),x(e),A;
        }
      }
    },catch:function(n){
      for(var t=this.tryEntries.length-1;t>=0;--t){
        var e=this.tryEntries[t];if(e.tryLoc===n){
          var o=e.completion;if("throw"===o.type){
            var a=o.arg;x(e);
          }return a;
        }
      }throw new Error("illegal catch attempt");
    },delegateYield:function(n,e,o){
      return this.delegate={ iterator:M(n),resultName:e,nextLoc:o },"next"===this.method&&(this.arg=t),A;
    } },n;
  }(n.exports);try{
    regeneratorRuntime=o;
  }catch(a){
    "object"===typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o);
  }
},"97cc":function(n,t,e){
  "use strict";var o=e("67b2"),a=e("550a"),i=e("6579"),s=e("b481"),r=e("cbe0"),l=e("8f03"),f=a("".indexOf);o({ target:"String",proto:!0,forced:!l("includes") },{ includes:function(n){
    return!!~f(r(s(this)),r(i(n)),arguments.length>1?arguments[1]:void 0);
  } });
},"98bd":function(n,t){
  var e="object"==typeof document&&document.all,o="undefined"==typeof e&&void 0!==e;n.exports={ all:e,IS_HTMLDDA:o };
},"9b13":function(n,t,e){
  "use strict";e("8189");
},"9b24":function(n,t,e){
  var o=e("db82"),a=e("bbca"),i=TypeError;n.exports=function(n){
    if(o(n)) {
      return n;
    }throw i(a(n)+" is not a function");
  };
},"9bc7":function(n,t){
  var e=Math.ceil,o=Math.floor;n.exports=Math.trunc||function(n){
    var t=+n;return(t>0?o:e)(t);
  };
},"9bdd":function(n,t,e){
  var o=e("825a"),a=e("2a62");n.exports=function(n,t,e,i){
    try{
      return i?t(o(e)[0],e[1]):t(e);
    }catch(s){
      a(n,"throw",s);
    }
  };
},"9ce1":function(n,t){
  n.exports=function(n){
    return null===n||void 0===n;
  };
},"9f0b":function(n,t,e){
  "use strict";t["a"]={ methods:{ $_emitEvent(n,t={}){
    this.$emit(n,{ map:this.map,component:this,...t });
  },$_emitMapEvent(n,t={}){
    this.$_emitEvent(n.type,{ mapboxEvent:n,...t });
  } }};
},"9f5e":function(n,t,e){
  var o=e("7942"),a=String,i=TypeError;n.exports=function(n){
    if(o(n)) {
      return n;
    }throw i(a(n)+" is not an object");
  };
},"9fcb":function(n,t,e){},a100:function(n,t,e){
  "use strict";var o=e("ecee"),a=e("bd28"),i=e("1adf"),s=e("e3e1"),r=e("21f3"),l=e("2dba"),f=e("717a"),c=e("f8c9"),u=e("fc9f"),p=e("834f");o["b"].watch(),o["e"].add(i["faSearch"],s["faTimes"],r["faMapMarkerAlt"],a["faDotCircle"],l["faCaretLeft"],f["faCaretRight"],c["faCaretDown"],u["faCaretUp"],p["faExternalLinkAlt"]);o["e"];
},a15b:function(n,t,e){
  "use strict";var o=e("23e7"),a=e("e330"),i=e("44ad"),s=e("fc6a"),r=e("a640"),l=a([].join),f=i!=Object,c=r("join",",");o({ target:"Array",proto:!0,forced:f||!c },{ join:function(n){
    return l(s(this),void 0===n?",":n);
  } });
},a2c7:function(n,t,e){
  "use strict";t["a"]=[ "mousedown","mouseup","click","dblclick","mousemove","mouseenter","mouseleave","mouseover","mouseout","contextmenu","touchstart","touchend","touchcancel" ];
},a3b1:function(n,t,e){
  var o=e("0bc2"),a=e("b47c"),i=e("1eec");n.exports=o?function(n,t,e){
    return a.f(n,t,i(1,e));
  }:function(n,t,e){
    return n[t]=e,n;
  };
},a4af:function(n,t,e){},a4d3:function(n,t,e){
  e("d9f5"),e("b4f8"),e("c513"),e("e9c4"),e("5a47");
},a58a:function(n,t,e){
  var o=e("67b2"),a=e("7961").values;o({ target:"Object",stat:!0 },{ values:function(n){
    return a(n);
  } });
},a630:function(n,t,e){
  var o=e("23e7"),a=e("4df4"),i=e("1c7e"),s=!i((function(n){
    Array.from(n);
  }));o({ target:"Array",stat:!0,forced:s },{ from:a });
},a640:function(n,t,e){
  "use strict";var o=e("d039");n.exports=function(n,t){
    var e=[][n];return!!e&&o((function(){
      e.call(null,t||function(){
        return 1;
      },1);
    }));
  };
},a91c:function(n,t,e){
  var o=e("550a"),a=e("9f5e"),i=e("6f6f");n.exports=Object.setPrototypeOf||("__proto__"in{}?function(){
    var n,t=!1,e={};try{
      n=o(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),n(e,[]),t=e instanceof Array;
    }catch(s){}return function(e,o){
      return a(e),i(o),t?n(e,o):e.__proto__=o,e;
    };
  }():void 0);
},a9a1:function(n,t,e){
  var o=e("550a"),a=e("e246"),i=e("bfa1"),s=e("cd9d8").indexOf,r=e("0b59"),l=o([].push);n.exports=function(n,t){
    var e,o=i(n),f=0,c=[];for(e in o) {
      !a(r,e)&&a(o,e)&&l(c,e);
    }while(t.length>f) {
      a(o,e=t[f++])&&(~s(c,e)||l(c,e));
    }return c;
  };
},a9e3:function(n,t,e){
  "use strict";var o=e("83ab"),a=e("da84"),i=e("e330"),s=e("94ca"),r=e("cb2d"),l=e("1a2d"),f=e("7156"),c=e("3a9b"),u=e("d9b5"),p=e("c04e"),d=e("d039"),h=e("241c").f,A=e("06cf").f,m=e("9bf2").f,g=e("408a"),w=e("58a8").trim,v="Number",y=a[v],b=y.prototype,B=a.TypeError,S=i("".slice),C=i("".charCodeAt),O=function(n){
      var t=p(n,"number");return"bigint"==typeof t?t:k(t);
    },k=function(n){
      var t,e,o,a,i,s,r,l,f=p(n,"number");if(u(f)) {
        throw B("Cannot convert a Symbol value to a number");
      }if("string"==typeof f&&f.length>2) {
        if(f=w(f),t=C(f,0),43===t||45===t){
          if(e=C(f,2),88===e||120===e) {
            return NaN;
          }
        }else if(48===t){
          switch(C(f,1)){
          case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+f;
          }for(i=S(f,2),s=i.length,r=0;r<s;r++) {
            if(l=C(i,r),l<48||l>a) {
return NaN;
}
          }return parseInt(i,o);
        }
      }return+f;
    };if(s(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){
    for(var E,x=function(n){
        var t=arguments.length<1?0:y(O(n)),e=this;return c(b,e)&&d((function(){
          g(e);
        }))?f(Object(t),e,x):t;
      },_=o?h(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),M=0;_.length>M;M++) {
      l(y,E=_[M])&&!l(x,E)&&m(x,E,A(y,E));
    }x.prototype=b,b.constructor=x,r(a,v,x,{ constructor:!0 });
  }
},aa16:function(n,t,e){},ab36:function(n,t,e){
  var o=e("861d"),a=e("9112");n.exports=function(n,t){
    o(t)&&"cause"in t&&a(n,"cause",t.cause);
  };
},aeb0:function(n,t,e){
  var o=e("9bf2").f;n.exports=function(n,t,e){
    e in n||o(n,e,{ configurable:!0,get:function(){
      return t[e];
    },set:function(n){
      t[e]=n;
    } });
  };
},b0a2:function(n,t,e){
  var o=e("550a"),a=0,i=Math.random(),s=o(1..toString);n.exports=function(n){
    return"Symbol("+(void 0===n?"":n)+")_"+s(++a+i,36);
  };
},b0c0:function(n,t,e){
  var o=e("83ab"),a=e("5e77").EXISTS,i=e("e330"),s=e("9bf2").f,r=Function.prototype,l=i(r.toString),f=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=i(f.exec),u="name";o&&!a&&s(r,u,{ configurable:!0,get:function(){
    try{
      return c(f,l(this))[1];
    }catch(n){
      return"";
    }
  } });
},b28b:function(n,t,e){
  "use strict";var o=e("67b2"),a=e("251c"),i=e("b9e4"),s=e("85c6"),r=e("442b"),l=e("2d6b"),f=e("ee54"),c=e("84d7"),u=e("b888"),p=e("60f3"),d=e("4329"),h=d("splice"),A=Math.max,m=Math.min;o({ target:"Array",proto:!0,forced:!h },{ splice:function(n,t){
    var e,o,d,h,g,w,v=a(this),y=r(v),b=i(n,y),B=arguments.length;for(0===B?e=o=0:1===B?(e=0,o=y-b):(e=B-2,o=m(A(s(t),0),y-b)),f(y+e-o),d=c(v,o),h=0;h<o;h++) {
      g=b+h,g in v&&u(d,h,v[g]);
    }if(d.length=o,e<o){
      for(h=b;h<y-o;h++) {
        g=h+o,w=h+e,g in v?v[w]=v[g]:p(v,w);
      }for(h=y;h>y-o+e;h--) {
        p(v,h-1);
      }
    }else if(e>o) {
      for(h=y-o;h>b;h--) {
        g=h+o-1,w=h+e-1,g in v?v[w]=v[g]:p(v,w);
      }
    }for(h=0;h<e;h++) {
      v[h+b]=arguments[h+2];
    }return l(v,y-o+e),d;
  } });
},b37c:function(n,t,e){
  "use strict";var o=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"map-panel-main-div",class:n.printHide },[ e("phila-ui-address-input",{ directives:[{ name:"show",rawName:"v-show",value:!n.isMobile&&"app"==n.view&&!this.$config.searchBar.hide,expression:"!isMobile && view=='app' && !this.$config.searchBar.hide" }],attrs:{ "over-map":!0,placeholder:n.addressInputPlaceholder,"width-from-config":n.addressInputWidth },on:{ "clear-search":n.handleClearSearch,"handle-search-form-submit":n.handleSearchFormSubmit }}),e("MglMap",{ attrs:{ "map-style":this.$config.mbStyle,bounds:n.boundsProp,zoom:this.$store.state.map.zoom,center:this.$store.state.map.center },on:{ "update:mapStyle":function(t){
        return n.$set(this.$config,"mbStyle",t);
      },"update:map-style":function(t){
        return n.$set(this.$config,"mbStyle",t);
      },moveend:this.handleMapMove,load:this.onMapLoaded,preload:this.onMapPreloaded }},[ n._l(Object.keys(n.legendControls),(function(t){
        return e("overlay-legend",{ key:t,attrs:{ position:"bottomleft",options:n.legendControls[t].options,items:n.legendControls[t].data }});
      })),n._l(n.markersForAddress,(function(n){
        return e("MglMarker",{ key:n.key,attrs:{ coordinates:[ n.latlng[1],n.latlng[0] ],color:n.color,icon:n.icon,anchor:"bottom" }});
      })),n._l(n.currentMapData,(function(t){
        return"pin-marker"===n.markerType?e("MglFontAwesomeMarker",{ key:t._featureId,attrs:{ coordinates:[ t.latlng[1],t.latlng[0] ],size:t.size,icon:t.icon,markerId:t._featureId,color:t.color,anchor:"bottom",offset:t.offset },on:{ click:n.handleMarkerClick }},[ n.latestSelectedResourceFromMap===t._featureId?e("MglPopup",{ attrs:{ showed:!0 }},[ e("div",{ domProps:{ innerHTML:n._s(n.mapboxSiteName(t)) },on:{ click:n.toggleMap }}) ]):n._e() ],1):n._e();
      })),n._l(n.currentMapData,(function(t){
        return"circle-marker"===n.markerType?e("MglCircleMarker",{ key:t._featureId,attrs:{ coordinates:[ t.latlng[1],t.latlng[0] ],markerId:t._featureId,size:t.size,"fill-color":t.color,weight:t.weight },on:{ click:n.handleMarkerClick }},[ n.latestSelectedResourceFromMap===t._featureId?e("MglPopup",{ attrs:{ showed:!0 }},[ e("div",{ domProps:{ innerHTML:n._s(n.mapboxSiteName(t)) },on:{ click:n.toggleMap }}) ]):n._e() ],1):n._e();
      })),n._l(this.basemapSources,(function(t,o){
        return n.shouldShowRasterLayer&&n.activeBasemap===o?e("MglRasterLayer",{ key:o,attrs:{ sourceId:n.activeBasemap,layerId:n.activeBasemap,layer:t.layer,source:t.source,before:n.firstOverlay }}):n._e();
      })),n._l(this.basemapLabelSources,(function(t,o){
        return n.shouldShowRasterLayer&&n.tiledLayers.includes(o)?e("MglRasterLayer",{ key:o,attrs:{ sourceId:o,layerId:o,layer:t.layer,source:t.source,before:n.firstOverlay }}):n._e();
      })),e("MglNavigationControl",{ attrs:{ position:"bottom-right" }}),n.geojsonForResourceBoolean?e("MglGeojsonLayer",{ key:"'geojsonForResourceFill'",attrs:{ "source-id":"geojsonForResource",source:n.geojsonForResourceSource,"layer-id":"geojsonForResourceFill",layer:n.geojsonForResourceFillLayer,"clear-source":!1,"replace-source":!0,replace:!0 }}):n._e(),n.geojsonForResourceBoolean?e("MglGeojsonLayer",{ key:"'geojsonForResourceLine'",attrs:{ "source-id":"geojsonForResource",source:n.geojsonForResourceSource,"layer-id":"geojsonForResourceLine",layer:n.geojsonForResourceLineLayer,"clear-source":!0,"replace-source":!0,replace:!0 }}):n._e(),n.geojsonForZipcodeBoolean?e("MglGeojsonLayer",{ key:"'geojsonForZipcodeFill'",attrs:{ "source-id":"geojsonForZipcode",source:n.geojsonForZipcodeSource,"layer-id":"geojsonForZipcodeFill",layer:n.geojsonForZipcodeFillLayer,"clear-source":!1,"replace-source":!0,replace:!0 }}):n._e(),n.geojsonForZipcodeBoolean?e("MglGeojsonLayer",{ key:"'geojsonForZipcodeLine'",attrs:{ "source-id":"geojsonForZipcode",source:n.geojsonForZipcodeSource,"layer-id":"geojsonForZipcodeLine",layer:n.geojsonForZipcodeLineLayer,"clear-source":!0,"replace-source":!0,replace:!0 }}):n._e(),n.geojsonForBufferBoolean?e("MglGeojsonLayer",{ key:"'geojsonForBufferFill'",attrs:{ "source-id":"geojsonForBuffer",source:n.geojsonForBufferSource,"layer-id":"geojsonForBufferFill",layer:n.geojsonForBufferFillLayer,"clear-source":!1,"replace-source":!0,replace:!0 }}):n._e(),n.geojsonForBufferBoolean?e("MglGeojsonLayer",{ key:"'geojsonForBufferLine'",attrs:{ "source-id":"geojsonForBuffer",source:n.geojsonForBufferSource,"layer-id":"geojsonForBufferLine",layer:n.geojsonForBufferLineLayer,"clear-source":!0,"replace-source":!0,replace:!0 }}):n._e() ],2) ],1);
    },a=[],i=e("53ca"),s=e("b85c"),r=e("2909"),l=(e("09a4"),e("3188"),e("3909"),e("2d6d"),e("1c7d"),e("e8fd"),e("97cc"),e("a58a"),e("5d53"),e("b28b"),e("a79f")),f=e("9448"),c=(e("a100"),{ name:"cyclomediaMixin",computed:{ cyclomediaActive(){
      return this.$store.state.cyclomedia.active;
    },cyclomediaInitializationBegun(){
      return this.$store.state.cyclomedia.initializationBegun;
    },cyclomediaInitializationComplete(){
      return this.$store.state.cyclomedia.initializationComplete;
    },cyclomediaRecordings(){
      return this.$store.state.cyclomedia.recordings;
    } },methods:{ handleCyclomediaButtonClick(){
      this.updateCyclomediaRecordings();
    },handleCyclomediaRecordingClick(n){
      let t;console.log("handleCyclomediaRecordingClick is running, e:",n),n.latlng?t=n.latlng:n.marker&&n.marker._lngLat&&(t={ lat:n.marker._lngLat.lat,lng:n.marker._lngLat.lng }),console.log("handleCyclomediaRecordingClick is running, latlng:",t),this.$store.commit("setCyclomediaLatLngFromMap",t);
    },updateCyclomediaRecordings(){
      const n=this.$store.state.map.map,t=n.getZoom();if(!this.$store.state.cyclomedia.active||t<=18) {
        return void this.$store.commit("setCyclomediaRecordings",[]);
      }const e=n.getBounds();this.$cyclomediaRecordingsClient.getRecordings(e,n=>{
        this.$store.commit("setCyclomediaRecordings",n);
      });
    } }}),u=e("bc6f"),p=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticStyle:{ display:"none" }},[ n._t("icon"),n.marker?n._t("default"):n._e() ],2);
    },d=[],h=e("5530"),A=(e("d81d"),e("b64b"),e("d3b7"),e("159b"),e("caad"),e("2532"),e("07ac"),e("9f0b")),m={ methods:{ $_emitSelfEvent(n,t={}){
      this.$_emitMapEvent(n,{ control:this.control,...t });
    },$_bindSelfEvents(n,t){
      Object.keys(this.$listeners).forEach(e=>{
        n.includes(e)&&t.on(e,this.$_emitSelfEvent);
      });
    },$_unbindSelfEvents(n,t){
      0!==n.length&&t&&n.forEach(n=>{
        t.off(n,this.$_emitSelfEvent);
      });
    } }},g={ drag:"drag",dragstart:"dragstart",dragend:"dragend" },w={ click:"click",mouseenter:"mouseenter",mouseleave:"mouseleave" },v={ name:"MapFontAwesomeMarker",mixins:[ A["a"],m ],inject:[ "mapbox","map" ],provide:function(){
      var n=this;return{ get marker(){
        return n.marker;
      } };
    },props:{ offset:{ type:[ Object,Array ],default:function(){
      return[ 0,0 ];
    } },coordinates:{ type:Array,required:!0 },color:{ type:String },anchor:{ type:String,default:"center" },draggable:{ type:Boolean,default:!1 },icon:{ type:Object },markerId:{ type:String,default:null }},data:function(){
      return{ initial:!0,marker:void 0 };
    },watch:{ featureId:function(){
      this.initial||(void 0!==this.map&&void 0!==this.marker&&this.marker.remove(),this.createFontAwesomeMarker());
    },icon:function(){
      this.initial||(void 0!==this.map&&void 0!==this.marker&&this.marker.remove(),this.createFontAwesomeMarker());
    },draggable:function(n){
      this.initial||this.marker.setDraggable(n);
    } },mounted:function(){
      this.createFontAwesomeMarker();
    },beforeDestroy:function(){
      void 0!==this.map&&void 0!==this.marker&&this.marker.remove();
    },methods:{ createFontAwesomeMarker:function(){
      var n=this,t=Object(h["a"])({},this.$props);this.$slots.marker&&(t.element=this.$slots.marker[0].elm);var e=document.createElement("div");e.addEventListener("click",(function(n){
        n.stopPropagation();
      })),e.className="marker-div",e.setAttribute("style","color:"+this.$props.color+";");var o=document.createElement("i");o.className="marker-icon "+this.$props.icon.prefix+" fa-"+this.$props.icon.icon+" fa-"+this.$props.icon.size,e.appendChild(o),this.marker=new this.mapbox.Marker(e,t),this.$listeners["update:coordinates"]&&this.marker.on("dragend",(function(t){
        var e;e=n.coordinates instanceof Array?[ t.target._lngLat.lng,t.target._lngLat.lat ]:t.target._lngLat,n.$emit("update:coordinates",e);
      }));var a=Object.keys(g);this.$_bindSelfEvents(a,this.marker),this.initial=!1,this.$_addMarker();
    },$_addMarker:function(){
      this.marker.setLngLat(this.coordinates).addTo(this.map),this.$_bindMarkerDOMEvents(),this.$_emitEvent("added",{ marker:this.marker });
    },$_emitSelfEvent:function(n){
      this.$_emitMapEvent(n,{ marker:this.marker });
    },$_bindMarkerDOMEvents:function(){
      var n=this;Object.keys(this.$listeners).forEach((function(t){
        Object.values(w).includes(t)&&n.marker._element.addEventListener(t,(function(t){
          n.$_emitSelfEvent(t);
        }));
      }));
    },remove:function(){
      this.marker.remove(),this.$_emitEvent("removed");
    },togglePopup:function(){
      return this.marker.togglePopup();
    } }},y=v,b=(e("9b13"),e("2877")),B=Object(b["a"])(y,p,d,!1,null,null,null),S=B.exports,C=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ class:n.mapContainerClass+" mgl-map-wrapper",attrs:{ id:"map-container" }},[ n._m(0),n.initialized?n._t("default"):n._e(),e("div",{ staticClass:"distance-container",attrs:{ id:"distance" }}) ],2);
    },O=[ function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ ref:"container",attrs:{ id:n.container }});
    } ],k=(e("3ca3"),e("ddb0"),{ resize:{ name:"resize" },webglcontextlost:{ name:"webglcontextlost" },webglcontextrestored:{ name:"webglcontextrestored" },remove:{ name:"remove" },movestart:{ name:"movestart" },load:{ name:"load" },contextmenu:{ name:"contextmenu" },dblclick:{ name:"dblclick" },click:{ name:"click" },touchcancel:{ name:"touchcancel" },touchmove:{ name:"touchmove" },touchend:{ name:"touchend" },touchstart:{ name:"touchstart" },dataloading:{ name:"dataloading" },mousemove:{ name:"mousemove" },mouseup:{ name:"mouseup" },mousedown:{ name:"mousedown" },sourcedataloading:{ name:"sourcedataloading" },error:{ name:"error" },data:{ name:"data" },styledata:{ name:"styledata" },sourcedata:{ name:"sourcedata" },mouseout:{ name:"mouseout" },styledataloading:{ name:"styledataloading" },moveend:{ name:"moveend" },move:{ name:"move" },render:{ name:"render" },zoom:{ name:"zoom" },zoomstart:{ name:"zoomstart" },zoomend:{ name:"zoomend" },boxzoomstart:{ name:"boxzoomstart" },boxzoomcancel:{ name:"boxzoomcancel" },boxzoomend:{ name:"boxzoomend" },rotate:{ name:"rotate" },rotatestart:{ name:"rotatestart" },rotateend:{ name:"rotateend" },dragend:{ name:"dragend" },drag:{ name:"drag" },dragstart:{ name:"dragstart" },pitch:{ name:"pitch" },idle:{ name:"idle" }}),E={ container:{ type:[ String,HTMLElement ],default(){
      return"map-"+(""+Math.random()).split(".")[1];
    } },accessToken:{ type:String,default:void 0 },minZoom:{ type:Number,default:0 },maxZoom:{ type:Number,default:22 },mapStyle:{ type:[ String,Object ],required:!0 },hash:{ type:Boolean,default:!1 },interactive:{ type:Boolean,default:!0 },bearingSnap:{ type:Number,default:7 },pitchWithRotate:{ type:Boolean,default:!0 },clickTolerance:{ type:Number,default:3 },attributionControl:{ type:Boolean,default:!0 },customAttribution:{ type:[ String,Array ],default:null },logoPosition:{ type:String,default:"bottom-left",validator:n=>[ "top-left","top-right","bottom-left","bottom-right" ].includes(n) },failIfMajorPerformanceCaveat:{ type:Boolean,default:!1 },preserveDrawingBuffer:{ type:Boolean,default:!1 },refreshExpiredTiles:{ type:Boolean,default:!0 },maxBounds:{ type:Array,default(){} },scrollZoom:{ type:[ Boolean,Object ],default(){
      return!0;
    } },boxZoom:{ type:Boolean,default:!0 },dragRotate:{ type:Boolean,default:!0 },dragPan:{ type:Boolean,default:!0 },keyboard:{ type:Boolean,default:!0 },doubleClickZoom:{ type:Boolean,default:!0 },touchZoomRotate:{ type:[ Boolean,Object ],default(){
      return!0;
    } },trackResize:{ type:Boolean,default:!0 },center:{ type:[ Object,Array ],default:void 0 },zoom:{ type:Number,default:0 },bearing:{ type:Number,default:0 },pitch:{ type:Number,default:0 },bounds:{ type:[ Object,Array ],default:void 0 },fitBoundsOptions:{ type:Object,default:void 0 },renderWorldCopies:{ type:Boolean,default:!0 },RTLTextPluginUrl:{ type:String,default:void 0 },light:{ type:Object,default:void 0 },tileBoundaries:{ type:Boolean,default:!1 },collisionBoxes:{ type:Boolean,default:!1 },repaint:{ type:Boolean,default:!1 },transformRequest:{ type:Function,default:null },maxTileCacheSize:{ type:Number,default:null },localIdeographFontFamily:{ type:String,default:null },collectResourceTiming:{ type:Boolean,default:!1 },fadeDuration:{ type:Number,default:300 },crossSourceCollisions:{ type:Boolean,default:!0 }};const x={ maxBounds(n){
    this.map.setMaxBounds(n);
  },minZoom(n){
    this.map.setMinZoom(n);
  },maxZoom(n){
    this.map.setMaxZoom(n);
  },mapStyle(n){
    this.map.setStyle(n);
  },bounds(n){
    console.log("watch bounds is running, next:",n),this.$props.activeTopicConfig&&this.$props.activeTopicConfig.zoomToShape&&this.map.fitBounds(n,{ padding:100 });
  },collisionBoxes(n){
    this.map.showCollisionBoxes=n;
  },tileBoundaries(n){
    this.map.showTileBoundaries=n;
  },repaint(n){
    this.map.repaint=n;
  },zoom(n){
    this.map.setZoom(n);
  },center(n){
    console.log("watch center is running"),this.$props.activeTopicConfig&&this.$props.activeTopicConfig.zoomToShape||this.map.setCenter(n);
  },bearing(n){
    this.map.setBearing(n);
  },pitch(n){
    this.map.setPitch(n);
  },light(n){
    this.map.setLigh(n);
  } };function _(n,t,e,o){
    this.initial||(this.$listeners["update:"+n]?(this.propsIsUpdating[n]?(this._watcher.active=!1,this.$nextTick(()=>{
      this._watcher.active=!0;
    })):(this._watcher.active=!0,t(e,o)),this.propsIsUpdating[n]=!1):t(e,o));
  }function M(){
    const n={};return Object.entries(x).forEach(t=>{
      n[t[0]]=function(n,e){
        return _.call(this,t[0],t[1].bind(this),n,e);
      };
    }),n;
  }var I={ watch:M() },$={ methods:{ $_updateSyncedPropsFabric(n,t){
      return()=>{
        this.propsIsUpdating[n]=!0;let e="function"===typeof t?t():t;return this.$emit("update:"+n,e);
      };
    },$_bindPropsUpdateEvents(){
      const n=[{ events:[ "moveend" ],prop:"center",getter:this.map.getCenter.bind(this.map) },{ events:[ "zoomend" ],prop:"zoom",getter:this.map.getZoom.bind(this.map) },{ events:[ "rotate" ],prop:"bearing",getter:this.map.getBearing.bind(this.map) },{ events:[ "pitch" ],prop:"pitch",getter:this.map.getPitch.bind(this.map) }];n.forEach(({ events:n,prop:t,getter:e })=>{
        n.forEach(n=>{
          this.$listeners["update:"+t]&&this.map.on(n,this.$_updateSyncedPropsFabric(t,e));
        });
      });
    },$_loadMap(){
      return this.mapboxPromise.then(n=>(this.mapbox=n.default?n.default:n,new Promise(n=>{
        this.accessToken&&(this.mapbox.accessToken=this.accessToken);const t=new this.mapbox.Map({ ...this._props,container:this.$refs.container,style:this.mapStyle });this.$emit("preload",{ map:t,component:this }),t.on("load",(function(){
          n(t);
        }));
      })));
    },$_RTLTextPluginError(n){
      this.$emit("rtl-plugin-error",{ map:this.map,error:n });
    },$_bindMapEvents(n){
      Object.keys(this.$listeners).forEach(t=>{
        n.includes(t)&&this.map.on(t,this.$_emitMapEvent);
      });
    },$_unbindEvents(n){
      n.forEach(n=>{
        this.map.off(n,this.$_emitMapEvent);
      });
    } }},F=e("7f84"),R=e.n(F),j={ created(){
      this.actions={};
    },methods:{ $_registerAsyncActions(n){
      this.actions={ ...R()(n),stop(){
        this.map.stop();const n={ pitch:this.map.getPitch(),zoom:this.map.getZoom(),bearing:this.map.getBearing(),center:this.map.getCenter() };return Object.entries(n).forEach(n=>{
          this.$_updateSyncedPropsFabric(n[0],n[1])();
        }),Promise.resolve(n);
      } };
    } }},T={ name:"GlMap",mixins:[ I,j,$,A["a"] ],props:Object(h["a"])({ mapboxGl:{ type:Object,default:null },activeTopicConfig:{ type:Object,default:null }},E),provide:function(){
      var n=this;return{ get mapbox(){
        return n.mapbox;
      },get map(){
        return n.map;
      },get actions(){
        return n.actions;
      } };
    },data:function(){
      return{ initial:!0,initialized:!1 };
    },computed:{ mapBounds:function(){
      return this.$store.state.map.bounds;
    },cyclomediaActive:function(){
      var n;return this.$store.state.cyclomedia&&(n=this.$store.state.cyclomedia.active),n;
    },pictometryActive:function(){
      var n;return this.$store.state.pictometry&&(n=this.$store.state.pictometry.active),n;
    },picOrCycloActive:function(){
      return!(!this.cyclomediaActive&&!this.pictometryActive);
    },mapContainerClass:function(){
      var n;return this.$config&&(n=!this.picOrCycloActive||"horizontal"!==this.$config.cyclomedia.orientation&&"horizontal"!==this.$config.pictometry.orientation?this.picOrCycloActive?this.$config.map.containerClassWCyclo?this.$config.map.containerClassWCyclo:"height50":this.$config.map.containerClass?this.$config.map.containerClass:"map-container":this.$config.map.containerClassWCyclo?this.$config.map.containerClassWCyclo:"height50"),n;
    },loaded:function(){
      return!!this.map&&this.map.loaded();
    },version:function(){
      return this.map?this.map.version:null;
    },isStyleLoaded:function(){
      return!!this.map&&this.map.isStyleLoaded();
    },areTilesLoaded:function(){
      return!!this.map&&this.map.areTilesLoaded();
    },isMoving:function(){
      return!!this.map&&this.map.isMoving();
    },canvas:function(){
      return this.map?this.map.getCanvas():null;
    },canvasContainer:function(){
      return this.map?this.map.getCanvasContainer():null;
    },images:function(){
      return this.map?this.map.listImages():null;
    } },created:function(){
      console.log("GlMap.vue created is running, this.$props.mapStyle:",this.$props.mapStyle,"this.$props.mapStyle.version:",this.$props.mapStyle.version),this.map=null,this.propsIsUpdating={},this.mapboxPromise=this.mapboxGl?Promise.resolve(this.mapboxGl):e.e("chunk-2d22497b").then(e.t.bind(null,"e192",7));
    },mounted:function(){
      var n=this;this.$props.accessToken="pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA",this.$_loadMap().then((function(t){
        n.map=t,void 0!==n.RTLTextPluginUrl&&n.mapbox.setRTLTextPlugin(n.RTLTextPluginUrl,n.$_RTLTextPluginError);var e=Object.keys(k);n.$_bindMapEvents(e),n.$_registerAsyncActions(t),n.$_bindPropsUpdateEvents(),n.initial=!1,n.initialized=!0,n.testMethod(t),n.$emit("load",{ map:t,component:n });
      }));
    },beforeDestroy:function(){
      var n=this;this.$nextTick((function(){
        n.map&&n.map.remove();
      }));
    },methods:{ testMethod:function(n){
      var t=this;this.$nextTick((function(){
        var n,e=Object(s["a"])(t.$children);try{
          for(e.s();!(n=e.n()).done;){
            var o=n.value;o.parentMounted&&o.parentMounted(t,o.$props);
          }
        }catch(a){
          e.e(a);
        }finally{
          e.f();
        }
      }));
    } }},D=T,L=(e("4b1e"),Object(b["a"])(D,C,O,!1,null,null,null)),P=L.exports,N=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticStyle:{ display:"none" }},[ n._t("marker"),n.marker?n._t("default"):n._e() ],2);
    },z=[],V={ drag:"drag",dragstart:"dragstart",dragend:"dragend" },U={ click:"click",mouseenter:"mouseenter",mouseleave:"mouseleave" },H={ name:"MapMarker",mixins:[ A["a"],m ],inject:[ "mapbox","map" ],provide:function(){
      var n=this;return{ get marker(){
        return n.marker;
      } };
    },props:{ offset:{ type:[ Object,Array ],default:function(){
      return[ 0,0 ];
    } },coordinates:{ type:Array,required:!0 },color:{ type:String },anchor:{ type:String,default:"center" },draggable:{ type:Boolean,default:!1 }},data:function(){
      return{ initial:!0,marker:void 0 };
    },watch:{ coordinates:function(n){
      this.initial||this.marker.setLngLat(n);
    },draggable:function(n){
      this.initial||this.marker.setDraggable(n);
    } },mounted:function(){
      var n=this,t=Object(h["a"])({},this.$props);this.$slots.marker&&(t.element=this.$slots.marker[0].elm),this.marker=new this.mapbox.Marker(t),this.$listeners["update:coordinates"]&&this.marker.on("dragend",(function(t){
        var e;e=n.coordinates instanceof Array?[ t.target._lngLat.lng,t.target._lngLat.lat ]:t.target._lngLat,n.$emit("update:coordinates",e);
      }));var e=Object.keys(V);this.$_bindSelfEvents(e,this.marker),this.initial=!1,this.$_addMarker();
    },beforeDestroy:function(){
      void 0!==this.map&&void 0!==this.marker&&this.marker.remove();
    },methods:{ $_addMarker:function(){
      this.marker.setLngLat(this.coordinates).addTo(this.map),this.$_bindMarkerDOMEvents(),this.$_emitEvent("added",{ marker:this.marker });
    },$_emitSelfEvent:function(n){
      this.$_emitMapEvent(n,{ marker:this.marker });
    },$_bindMarkerDOMEvents:function(){
      var n=this;Object.keys(this.$listeners).forEach((function(t){
        Object.values(U).includes(t)&&n.marker._element.addEventListener(t,(function(t){
          n.$_emitSelfEvent(t);
        }));
      }));
    },remove:function(){
      this.marker.remove(),this.$_emitEvent("removed");
    },togglePopup:function(){
      return this.marker.togglePopup();
    } }},q=H,W=(e("14f9"),Object(b["a"])(q,N,z,!1,null,null,null)),G=W.exports,Y=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticStyle:{ display:"none" }},[ n._t("icon"),n.marker?n._t("default"):n._e() ],2);
    },Z=[],Q=(e("a9e3"),{ drag:"drag",dragstart:"dragstart",dragend:"dragend" }),K={ click:"click",mouseenter:"mouseenter",mouseleave:"mouseleave" },J={ name:"MapCircleMarker",mixins:[ A["a"],m ],inject:[ "mapbox","map" ],provide:function(){
      var n=this;return{ get marker(){
        return n.marker;
      } };
    },props:{ offset:{ type:[ Object,Array ],default:function(){
      return[ 0,0 ];
    } },coordinates:{ type:Array,required:!0 },color:{ type:String },fillColor:{ type:String },opacity:{ type:Number },fillOpacity:{ type:Number },weight:{ type:Number },size:{ type:Number },anchor:{ type:String,default:"center" },draggable:{ type:Boolean,default:!1 },markerId:{ type:String,default:null },data:{ type:Object,default:function(){
      return{ featureId:null,tableId:null };
    } }},data:function(){
      return{ initial:!0,marker:void 0 };
    },computed:{ featureId:function(){
      return this.$props.data.featureId;
    } },watch:{ featureId:function(){
      this.initial||(void 0!==this.map&&void 0!==this.marker&&this.marker.remove(),this.createCircleMarker());
    },size:function(){
      this.initial||(void 0!==this.map&&void 0!==this.marker&&this.marker.remove(),this.createCircleMarker());
    },fillColor:function(){
      this.initial||(void 0!==this.map&&void 0!==this.marker&&this.marker.remove(),this.createCircleMarker());
    },draggable:function(n){
      this.initial||this.marker.setDraggable(n);
    } },mounted:function(){
      this.createCircleMarker();
    },beforeDestroy:function(){
      void 0!==this.map&&void 0!==this.marker&&this.marker.remove();
    },methods:{ createCircleMarker:function(){
      var n=this,t=Object(h["a"])({},this.$props),e=document.createElement("div");e.addEventListener("click",(function(n){
        n.stopPropagation();
      })),e.className="circle-div",e.style.color=t.color,e.style["background-color"]=t.fillColor,e.style["border-width"]=t.weight,e.style["opacity"]=t.opacity,e.style.height=t.size+"px",e.style.width=t.size+"px",t.data&&t.data.featureId&&e.setAttribute("feature",t.data.featureId),this.$slots.marker?t.element=this.$slots.marker[0].elm:t.element=e,this.marker=new this.mapbox.Marker(e),this.$listeners["update:coordinates"]&&this.marker.on("dragend",(function(t){
        var e;e=n.coordinates instanceof Array?[ t.target._lngLat.lng,t.target._lngLat.lat ]:t.target._lngLat,n.$emit("update:coordinates",e);
      }));var o=Object.keys(Q);this.$_bindSelfEvents(o,this.marker),this.initial=!1,this.$_addMarker();
    },$_addMarker:function(){
      this.marker.setLngLat(this.coordinates).addTo(this.map),this.$_bindMarkerDOMEvents(),this.$_emitEvent("added",{ marker:this.marker });
    },$_emitSelfEvent:function(n){
      this.$_emitMapEvent(n,{ marker:this.marker });
    },$_bindMarkerDOMEvents:function(){
      var n=this;Object.keys(this.$listeners).forEach((function(t){
        Object.values(K).includes(t)&&n.marker._element.addEventListener(t,(function(t){
          n.$_emitSelfEvent(t);
        }));
      }));
    },remove:function(){
      this.marker.remove(),this.$_emitEvent("removed");
    },togglePopup:function(){
      return this.marker.togglePopup();
    } }},X=J,nn=(e("9317"),Object(b["a"])(X,Y,Z,!1,null,null,null)),tn=nn.exports,en={ mixins:[ A["a"],m ],inject:[ "mapbox","map","actions" ],props:{ position:{ type:String,default:"top-right" }},beforeDestroy(){
      this.map&&this.control&&this.map.removeControl(this.control);
    },methods:{ $_addControl(){
      try{
        this.map.addControl(this.control,this.position);
      }catch(n){
        return void this.$_emitEvent("error",{ error:n });
      }this.$_emitEvent("added",{ control:this.control });
    } },render(){} },on={ name:"NavigationControl",mixins:[ en ],props:{ showCompass:{ type:Boolean,default:!0 },showZoom:{ type:Boolean,default:!0 }},created(){
      this.control=new this.mapbox.NavigationControl(this.$props),this.$_addControl();
    } },an=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return null!=n.initialOpacity?e("opacity-slider",{ attrs:{ position:"topleft","initial-opacity":n.opacity },on:{ opacityChange:n.handleOpacityChange }}):n._e();
    },sn=[],rn=(e("ac1f"),e("5319"),function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticClass:"map-overlay top" },[ e("div",{ staticClass:"map-overlay-inner" },[ e("input",{ staticClass:"opacity-slider",attrs:{ id:"slider",type:"range",min:"0",max:"100",step:"0" },domProps:{ value:n.value },on:{ input:n.handleSliderValueChange,change:n.handleSliderValueChange }}) ]) ]);
    }),ln=[],fn={ name:"OpacitySlider",props:[ "position","initialOpacity" ],data:function(){
      var n={ value:100 };return n;
    },mounted:function(){
      this.$data.value=this.$props.initialOpacity;
    },methods:{ handleSliderValueChange:function(n){
      this.$data.value=n.target.value,this.$emit("opacityChange",n.target.value);
    } }},cn=fn,un=(e("d52b"),Object(b["a"])(cn,rn,ln,!1,null,null,null)),pn=un.exports,dn=e("a2c7"),hn=e("521f"),An={ name:"RasterLayer",components:{ OpacitySlider:pn },mixins:[ hn["a"] ],props:{ initialOpacity:{ default:null }},data:function(){
      var n={ opacity:null };return n;
    },created:function(){
      if(this.$_deferredMount(),this.$props.initialOpacity){
        var n=this.$props.initialOpacity;this.handleOpacityChange(n);
      }
    },methods:{ handleOpacityChange:function(n){
      this.$data.opacity=n;var t=this.$store.map;t.setPaintProperty(this.$props.layer.id,"raster-opacity",parseFloat(n/100));
    },$_deferredMount:function(){
      var n=Object(h["a"])({ type:"raster" },this.source);this.map.on("dataloading",this.$_watchSourceLoading);try{
        this.map.addSource(this.sourceId,n);
      }catch(t){
        this.replaceSource&&(this.map.removeSource(this.sourceId),this.map.addSource(this.sourceId,n));
      }this.$_addLayer(),this.$_bindLayerEvents(dn["a"]),this.map.off("dataloading",this.$_watchSourceLoading),this.initial=!1;
    },$_addLayer:function(){
      var n=this.map.getLayer(this.layerId);if(n){
        if(!this.replace) {
          return this.$_emitEvent("layer-exists",{ layerId:this.layerId }),n;
        }this.map.removeLayer(this.layerId);
      }var t=Object(h["a"])({ id:this.layerId,type:"raster",source:this.sourceId },this.layer),e=this.before,o=this.map.getStyle().layers,a=[];if(null!=e){
        var i,r=Object(s["a"])(o);try{
          for(r.s();!(i=r.n()).done;){
            var l=i.value;if(e.includes(l.id)){
              a.push(l.id);break;
            }
          }
        }catch(f){
          r.e(f);
        }finally{
          r.f();
        }
      }a.length?this.map.addLayer(t,a[0]):this.map.addLayer(t),this.$_emitEvent("added",{ layerId:this.layerId }),this.map.resize();
    } }},mn=An,gn=Object(b["a"])(mn,an,sn,!1,null,null,null),wn=gn.exports,vn=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ staticStyle:{ display:"none" }},[ n._t("default") ],2);
    },yn=[],bn={ open:"open",close:"close" },Bn={ name:"Popup",mixins:[ A["a"],m ],inject:{ mapbox:{ default:null },map:{ default:null },marker:{ default:null }},props:{ closeButton:{ type:Boolean,default:!0 },closeOnClick:{ type:Boolean,default:!0 },anchor:{ validator:function(n){
      var t=[ "top","bottom","left","right","top-left","top-right","bottom-left","bottom-right" ];return"string"===typeof n&&t.includes(n);
    },default:void 0 },offset:{ type:[ Number,Object,Array ],default:function(){
      return[ 0,0 ];
    } },coordinates:{ type:Array },onlyText:{ type:Boolean,default:!1 },showed:{ type:Boolean,default:!1 }},data:function(){
      return{ initial:!0,popup:void 0 };
    },computed:{ open:{ get:function(){
      return void 0!==this.popup&&this.popup.isOpen();
    },set:function(n){
      this.map&&this.popup&&(n?this.popup.addTo(this.map):this.popup.remove());
    } }},watch:{ coordinates:function(n){
      this.initial||this.popup.setLngLat(n);
    },showed:function(n,t){
      n!==t&&(this.open=n,this.marker&&this.marker.togglePopup());
    } },created:function(){
      this.popup=new this.mapbox.Popup(this.$props);
    },mounted:function(){
      this.$_addPopup(),this.initial=!1;
    },beforeDestroy:function(){
      this.map&&(this.popup.remove(),this.$_emitEvent("removed"));
    },methods:{ $_addPopup:function(){
      if(this.popup=new this.mapbox.Popup(this.$props),void 0!==this.coordinates&&this.popup.setLngLat(this.coordinates),void 0!==this.$slots.default) {
        if(this.onlyText) {
          if(3===this.$slots.default[0].elm.nodeType){
            var n=document.createElement("span");n.appendChild(this.$slots.default[0].elm),this.popup.setText(n.innerText);
          }else {
this.popup.setText(this.$slots.default[0].elm.innerText);
}
        }else {
          this.popup.setDOMContent(this.$slots.default[0].elm);
        }
      }this.$_bindSelfEvents(Object.keys(bn),this.popup),this.$_emitEvent("added",{ popup:this.popup }),this.marker&&this.marker.setPopup(this.popup),this.showed&&this.marker&&this.marker.togglePopup();
    },$_emitSelfEvent:function(n){
      this.$_emitMapEvent(n,{ popup:this.popup });
    },remove:function(){
      this.popup.remove(),this.$_emitEvent("remove",{ popup:this.popup });
    } }},Sn=Bn,Cn=(e("1f0e"),Object(b["a"])(Sn,vn,yn,!1,null,null,null)),On=Cn.exports,kn=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ directives:[{ name:"show",rawName:"v-show",value:n.shouldShowLegend,expression:"shouldShowLegend" }],class:"legend-overlay "+n.position,style:"margin-bottom:"+n.options.marginBottom+"; margin-right:"+n.options.marginRight },[ e("div",{ staticClass:"legend legend-overlay-inner" },[ e("ul",{ staticClass:"legend-list" },n._l(n.keys,(function(t){
        return e("li",{ key:t,staticClass:"legend-listitem",style:"font-size:"+n.items[t]["font-size"]+";" },[ !n.$props.options.shape||n.$props.options.shape&&"square"===n.$props.options.shape?e("div",{ staticClass:"legend-box",style:"background-color:"+n.items[t]["background-color"]+"; border-color:"+n.items[t]["border-color"]+"; border-style:"+n.items[t]["border-style"]+"; border-width:"+n.items[t]["border-weight"]+"; width:"+n.items[t].width+"; height:"+n.items[t].height+";" }):n._e(),"circle"===n.$props.options.shape?e("div",{ staticClass:"legend-circle",style:"background-color:"+n.items[t]["background-color"]+"; border-color:"+n.items[t]["border-color"]+"; border-style:"+n.items[t]["border-style"]+"; border-width:"+n.items[t]["border-weight"]+"; width:"+n.items[t].width+"; height:"+n.items[t].height+";" }):n._e(),e("div",{ staticClass:"list-text" },[ n._v(" "+n._s(t)+" ") ]) ]);
      })),0) ]) ]);
    },En=[],xn={ name:"OverlayLegend",props:[ "position","options","items" ],computed:{ keys:function(){
      return Object.keys(this.$props.items);
    },shape:function(){
      return this.$props.options.shape;
    },shouldShowBasemapSelectControl:function(){
      return this.$store.state.map.shouldShowBasemapSelectControl;
    },shouldShowLegend:function(){
      var n=!0;return this.$props.options.showWithBaseMapOnly&&this.shouldShowBasemapSelectControl&&(n=!1),n;
    } }},_n=xn,Mn=(e("eb3f"),Object(b["a"])(_n,kn,En,!1,null,null,null)),In=Mn.exports,$n=e("499e"),Fn=e("cd1f"),Rn={ name:"MapPanel",components:{ MglMap:P,MglMarker:G,MglCircleMarker:tn,MglNavigationControl:on,MglRasterLayer:wn,MglPopup:On,OverlayLegend:In,PhilaUiAddressInput:u["a"],MglGeojsonLayer:function(){
      return e.e("pvm_MglGeojsonLayer").then(e.bind(null,"760f"));
    },MglFontAwesomeMarker:S },props:{ view:{ type:String,default:"app" }},mixins:[ f["a"],c ],data:function(){
      var n={ rows:[],accessToken:"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA",addressInputPlaceholder:null,geojsonForZipcodeBoolean:!1,geojsonForZipcodeSource:{ type:"geojson",data:{ type:"Feature",geometry:{ type:"Polygon",coordinates:[]}}},geojsonForZipcodeFillLayer:{ id:"geojsonForZipcodeFill",type:"fill",source:"geojsonForZipcode",layout:{},paint:{ "fill-color":"#9e9ac8","fill-opacity":.4,"fill-outline-color":"rgb(0,102,255)" }},geojsonForZipcodeLineLayer:{ id:"geojsonForZipcodeLine",type:"line",source:"geojsonForZipcode",layout:{},paint:{ "line-color":"#9e9ac8","line-width":2 }},geojsonForBufferBoolean:!1,geojsonForBufferSource:{ type:"geojson",data:{ type:"Feature",geometry:{ type:"Polygon",coordinates:[]}}},geojsonForBufferFillLayer:{ id:"geojsonForBufferFill",type:"fill",source:"geojsonForBuffer",layout:{},paint:{ "fill-color":"#9e9ac8","fill-opacity":.4,"fill-outline-color":"rgb(0,102,255)" }},geojsonForBufferLineLayer:{ id:"geojsonForBufferLine",type:"line",source:"geojsonForBuffer",layout:{},paint:{ "line-color":"#9e9ac8","line-width":2 }},geojsonForResourceBoolean:!1,geojsonForResourceSource:{ type:"geojson",data:{ type:"Feature",geometry:{ type:"Polygon",coordinates:[]}}},geojsonForResourceFillLayer:{ id:"geojsonForResourceFill",type:"fill",source:"geojsonForResource",layout:{},paint:{ "fill-color":"#9e9ac8","fill-opacity":.4,"fill-outline-color":"rgb(0,102,255)" }},geojsonForResourceLineLayer:{ id:"geojsonForResourceLine",type:"line",source:"geojsonForResource",layout:{},paint:{ "line-color":"#9e9ac8","line-width":2 }},zoomToShape:{ geojsonParcels:[],geojsonForResource:[],markersForAddress:[],markersForTopic:[]}};return n;
    },computed:{ bufferShape:function(){
      return this.$store.state.bufferShape;
    },zipcodeData:function(){
      var n;if(this.$store.state.sources.zipcodes){
        var t=this.$store.state.sources.zipcodes.data,e=this.selectedZipcode;t&&e&&(n=t.features.filter((function(n){
          return n.attributes.CODE==e;
        }))[0]);
      }return n;
    },selectedZipcode:function(){
      return this.$store.state.selectedZipcode;
    },boundsProp:function(){
      var n,t=this.$store.state.map.bounds;return"leaflet"===this.mapType?n=t:t._northEast&&null!=t._northEast.lat?n=[[ t._southWest.lng,t._southWest.lat ],[ t._northEast.lng,t._northEast.lat ]]:t._northEast&&null==t._northEast.lat||(n=t),n;
    },geojsonForResource:function(){
      var n=this.$store.state.selectedResources[0],t=this.currentMapData.filter((function(t){
          return t._featureId==n;
        })),e=[],o=[];if(this.$config&&this.$config.geojsonForResource){
        var a=this.$store.state.sources[this.$config.geojsonForResource.source].data;if(a&&a.features&&t[0]&&t[0].fields&&t[0].fields.polygon){
          var i=a.features.filter((function(n){
            return n.attributes.globalid==t[0].fields.globalid;
          }));e=i[0].geometry.rings[0],o=[{ resource:n,color:"#9e9ac8",fillColor:"#9e9ac8",fillOpacity:.3,opacity:1,weight:2,geojson:{ type:"Feature",_featureId:"feat-divisions-0",id:1384,geometry:{ type:"Polygon",coordinates:[ e ]},properties:{}}}];
        }
      }return o;
    },printHide:function(){
      var n;return"print"!=this.view&&(n="print-hide"),n;
    },addressInputWidth:function(){
      return this.$config.addressInput?this.$config.addressInput.mapWidth:415;
    },map:function(){
      return this.$store.map;
    },shouldShowRasterLayer:function(){
      var n=!0;return"hosted"===this.$config.map.tiles&&(n=!1),n;
    },locationInfo:function(){
      return this.$config.locationInfo;
    },isMobileOrTablet:function(){
      return this.$store.state.isMobileOrTablet;
    },legendControls:function(){
      return this.$config.legendControls||{};
    },isLoadingPins:function(){
      return"waiting"===this.$store.state.sources[this.$appType].status;
    },markerType:function(){
      var n;return n=this.$config.markerType&&"pin-marker"!==this.$config.markerType?this.$config.markerType:"pin-marker",n;
    },selectedResources:function(){
      return this.$store.state.selectedResources;
    },latestSelectedResourceFromExpand:function(){
      return this.$store.state.latestSelectedResourceFromExpand;
    },latestSelectedResourceFromMap:function(){
      return this.$store.state.map.latestSelectedResourceFromMap;
    },currentData:function(){
      return this.$store.state.currentData;
    },projection4326:function(){
      return"+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    },projection2272:function(){
      return"+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs";
    },projection3857:function(){
      return"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs";
    },currentMapData:function(){
      for(var n=[],t=0,e=Object(r["a"])(this.currentData);t<e.length;t++){
        var o=e[t],a=void 0,i=void 0,s=void 0,f=void 0;if(i=this.$config.circleMarkers&&this.$config.circleMarkers.size?this.isMobileOrTablet&&this.$config.circleMarkers.mobileSize?this.$config.circleMarkers.mobileSize:this.$config.circleMarkers.size:14,this.selectedResources.includes(o._featureId)?(console.log("row is selected, row._featureId:",o._featureId),a="#0f4d90",i=30,f="4x",s=0):(this.$config.circleMarkers&&this.$config.circleMarkers.circleColors?o.attributes?a=this.$config.circleMarkers.circleColors[o.attributes.category_type]:o.category_type?a=this.$config.circleMarkers.circleColors[o.category_type]:o.site_type?a=this.$config.circleMarkers.circleColors[o.site_type]:o.fields&&(a=this.$config.circleMarkers.circleColors[o.fields.category_type]):a=this.$config.circleMarkers&&this.$config.circleMarkers.color?this.$config.circleMarkers.color:"purple",f="2x",s=this.$config.circleMarkers&&this.$config.circleMarkers.weight||this.$config.circleMarkers&&0===this.$config.circleMarkers.weight?this.$config.circleMarkers.weight:1),o.fields&&o.fields.lat&&(o.lat=o.fields.lat,o.lon=o.fields.lon),o.lat){
          var c=this.getProjection(o);if("3857"===c){
            var u=Object(l["a"])(this.projection3857,this.projection4326,[ o.lon,o.lat ]);o.latlng=[ u[1],u[0] ];
          }else if("2272"===c){
            var p=Object(l["a"])(this.projection2272,this.projection4326,[ o.geometry.x,o.geometry.y ]);o.latlng=[ p[1],p[0] ];
          }else {
            o.latlng=[ o.lat,o.lon ];
          }
        }else if(o.geometry){
          var d=this.getProjection(o);if("3857"===d){
            var h=Object(l["a"])(this.projection3857,this.projection4326,[ o.geometry.x,o.geometry.y ]);o.latlng=[ h[1],h[0] ];
          }else if("2272"===d){
            var A=Object(l["a"])(this.projection2272,this.projection4326,[ o.geometry.x,o.geometry.y ]);o.latlng=[ A[1],A[0] ];
          }else {
            o.latlng=[ o.geometry.y,o.geometry.x ];
          }
        }o.color=a,o.size=i,o.weight=s,o.icon={ prefix:"fas",icon:"map-marker-alt",shadow:!1,size:f },o.latlng&&n.push(o);
      }return n;
    },geocodeStatus:function(){
      return this.$store.state.geocode.status;
    },geocodeResult:function(){
      return this.$store.state.geocode.data||{};
    },geocodeGeom:function(){
      return this.geocodeResult.geometry;
    },markersForAddress:function(){
      var n=[],t=this.geocodeGeom;if(t){
        var e,o=Object(r["a"])(t.coordinates).reverse(),a=this.geocodeResult.properties.street_address;e=this.$config.addressMarkerColor?this.$config.addressMarkerColor:"#cc3000";var i="geocode",s={ prefix:"fas",icon:"map-marker-alt",shadow:!1,size:30 },l={ latlng:o,key:a,color:e,markerType:i,icon:s };n.push(l);
      }return n;
    },cycloLatlng:function(){
      if(null!==this.$store.state.cyclomedia.orientation.xyz){
        var n=this.$store.state.cyclomedia.orientation.xyz;return[ n[1],n[0] ];
      }var t=this.$config.map.center;return t;
    },cycloRotationAngle:function(){
      return 57.29577951307855*this.$store.state.cyclomedia.orientation.yaw;
    },cycloHFov:function(){
      return this.$store.state.cyclomedia.orientation.hFov;
    },shouldShowCyclomediaButton:function(){
      return this.$config.cyclomedia.enabled&&!this.isMobileOrTablet;
    },picOrCycloActive:function(){
      return!(!this.cyclomediaActive&&!this.pictometryActive);
    },activeBasemap:function(){
      var n=this.$store.state.map.shouldShowBasemapSelectControl;if(n) {
        return this.$store.state.map.imagery;
      }var t=this.$config.map.defaultBasemap,e=this.$store.state.map.basemap||t;return e;
    },tiledLayers:function(){
      var n=this.activeBasemap,t=this.configForBasemap(n);return t.tiledLayers||[];
    },basemapSelectControlPosition:function(){
      return this.isMobileOrTablet?"topright":"topalmostright";
    },basemaps:function(){
      return Object.values(this.$config.map.basemaps);
    },imageryBasemaps:function(){
      return this.basemaps.filter((function(n){
        return"imagery"===n.type;
      }));
    },hasImageryBasemaps:function(){
      return this.imageryBasemaps.length>0;
    },shouldShowBasemapToggleControl:function(){
      return this.$config.map.imagery?this.hasImageryBasemaps&&this.$config.map.imagery.enabled:this.hasImageryBasemaps;
    },sitePath:function(){
      return window.location.origin+"/";
    },intersectingFeatures:function(){
      return this.$store.state.map.intersectingFeatures;
    },shouldShowPopup:function(){
      return this.intersectingFeatures.length>0;
    },geocodeZoom:function(){
      var n;return n=this.$config.map.geocodeZoom?this.$config.map.geocodeZoom:19,n;
    },basemapSources:function(){
      return this.$config.basemapSources;
    },basemapLabelSources:function(){
      return this.$config.basemapLabelSources;
    },overlaySources:function(){
      return this.$config.overlaySources;
    },mapType:function(){
      return this.$store.state.map.type;
    },firstOverlay:function(){
      var n,t=this.$store.map;if(this.$config.overlaySources){
        var e=Object.keys(this.$config.overlaySources);if(t){
          var o=t.getStyle().layers.filter((function(n){
            return e.includes(n.id);
          }));o.length&&(n=o[0].id);
        }
      }return n;
    } },watch:{ bufferShape:function(n){
      var t;console.log("watch bufferShape is firing, nextBufferShape:",n),n?(t=n.geometry,this.$data.geojsonForBufferSource.data.geometry.coordinates=t.coordinates,this.$data.geojsonForBufferBoolean=!0):(this.$data.geojsonForBufferSource.data.geometry.coordinates=[],this.$data.geojsonForBufferBoolean=!1);
    },zipcodeData:function(n){
      var t;n?(t=n.geometry.rings,this.$data.geojsonForZipcodeSource.data.geometry.coordinates=t,this.$data.geojsonForZipcodeBoolean=!0):(this.$data.geojsonForZipcodeSource.data.geometry.coordinates=[],this.$data.geojsonForZipcodeBoolean=!1);
    },map:function(n){
      console.log("MapPanel watch map is firing, nextMap:",n);
    },geocodeResult:function(n){
      n._featureId&&(this.$store.commit("setMapCenter",n.geometry.coordinates),this.$store.commit("setMapZoom",this.geocodeZoom));
    },latestSelectedResourceFromExpand:function(n){
      if(console.log("watch latestSelectedResourceFromExpand:",n,"this.$appType:",this.$appType,"this.$store.state.sources[this.$appType].data:",this.$store.state.sources[this.$appType].data),n){
        var t,e=this.$store.map;if(this.$store.state.sources[this.$appType].data.rows){
          t=this.$store.state.sources[this.$appType].data.rows;var o=t.filter((function(t){
            return t._featureId===n;
          }));console.log("in watch latestSelectedResourceFromExpand, rows, nextLatestSelectedResource:",n,"rows:",t,"dataValue:",o),o[0].lat&&e.setCenter([ o[0].lon,o[0].lat ],this.geocodeZoom);
        }else if(this.$store.state.sources[this.$appType].data.features){
          t=this.$store.state.sources[this.$appType].data.features;var a=t.filter((function(t){
            return t._featureId===n;
          }));console.log("in watch latestSelectedResourceFromExpand, features, nextLatestSelectedResource:",n,"rows:",t,"dataValue:",a,"dataValue[0].latlng:",a[0].latlng),a[0].latlng[0]&&e.setCenter([ a[0].latlng[1],a[0].latlng[0] ],this.geocodeZoom);
        }else if(this.$store.state.sources[this.$appType].data.records){
          t=this.$store.state.sources[this.$appType].data.records;var i=t.filter((function(t){
            return t._featureId===n;
          }));e.setCenter([ i[0].latlng[1],i[0].latlng[0] ],this.geocodeZoom);
        }else if(Array.isArray(this.$store.state.sources[this.$appType].data)){
          t=this.$store.state.sources[this.$appType].data;var s=t.filter((function(t){
            return t._featureId===n;
          }));console.log("in watch latestSelectedResourceFromExpand, array, nextLatestSelectedResource:",n,"rows:",t,"dataValue:",s),e.setCenter([ s[0].latlng[1],s[0].latlng[0] ],this.geocodeZoom);
        }
      }
    },latestSelectedResourceFromMap:function(n){
      document.getElementById("customPopup");
    },cyclomediaActive:function(n){
      var t=this;this.$nextTick((function(){
        t.$store.map.invalidateSize();
      }));
    },currentMapData:function(n){
      console.log("MapPanel.vue, watch currentMapData, this.view:",this.view,"nextCurrentMapData:",n,"nextCurrentMapData[0].latlng:",n[0].latlng),"print"==this.view&&(console.log("watch, its print view"),this.$store.commit("setMapCenter",[ n[0].latlng[1],n[0].latlng[0] ]));
    },geojsonForResource:function(n){
      if(console.log("watch geojsonForResource is firing, nextGeojson[0]:",n[0]),this.$store.map&&console.log("watch geojsonForResource is running, map.getStyle():",this.$store.map.getStyle(),"map.getStyle().layers:",this.$store.map.getStyle().layers,"nextGeojson:",n),n[0]&&n.length>1){
        console.log("watch geojsonForResource is running, nextGeojson:",n,"nextGeojson[0].geojson:",n[0].geojson),this.$data.geojsonCollectionForTopicSource.data.features=[];var t,e=Object(s["a"])(n);try{
          for(e.s();!(t=e.n()).done;){
            var o=t.value;this.$data.geojsonCollectionForTopicSource.data.features.push(o.geojson);
          }
        }catch(d){
          e.e(d);
        }finally{
          e.f();
        }var a,r=n[0].fillColor,l=Object(i["a"])(r);if("function"===l){
          var f=this.$store.state,c=r;a=c(f);
        }else {
          a=r;
        }this.$data.geojsonCollectionForTopicFillLayer.paint["fill-color"]=a,this.$data.geojsonCollectionForTopicFillLayer.paint["fill-opacity"]=n[0].fillOpacity,n[0].labelField&&(this.$data.geojsonCollectionForTopicLabelsLayer.layout={ "text-font":[ "Open Sans Regular" ],"text-field":[ "get",n[0].labelField ],"text-variable-anchor":[ "top","bottom","left","right" ],"text-radial-offset":.5,"text-justify":"auto" }),n[0].labelMinZoom&&(this.$data.geojsonCollectionForTopicLabelsLayer.minzoom=n[0].labelMinZoom),this.$data.geojsonForResourceBoolean=!0;
      }else {
        n[0]?(console.log("watch geojsonForResource else if is running, nextGeojson[0].geojson.geometry:",n[0].geojson.geometry),this.$data.geojsonForResourceSource.data.geometry.coordinates=n[0].geojson.geometry.coordinates,this.$data.geojsonForResourceBoolean=!0):(console.log("watch geojsonForResource else is running"),this.$data.geojsonForResourceSource.data.geometry.coordinates=[],this.$data.geojsonForResourceBoolean=!1);
      }var u=[ "geojsonForResource" ],p=this.$data.zoomToShape;u&&u.includes("geojsonForResource")?(p.geojsonForResource=n,n[0]&&n[0].geojson.geometry.coordinates.length&&(console.log("end of watch geojsonForResource, calling checkBoundsChanges, nextGeojson[0].geojson.geometry.coordinates.length:",n[0].geojson.geometry.coordinates.length),this.checkBoundsChanges())):p.geojsonForResource=[];
    } },mounted:function(){
      console.log("MapPanel mounted, this.view:",this.view,"this.currentData:",this.currentData,"this.$store.map:",this.$store.map,"this.$config.map.zoom:",this.$config.map.zoom);document.getElementsByClassName("mapboxgl-ctrl-logo");"print"==this.view?this.$store.commit("setMapZoom",17):this.$config.map.zoom&&this.$store.commit("setMapZoom",this.$config.map.zoom),"print"!=this.view&&this.$config.map.center&&this.$store.commit("setMapCenter",this.$config.map.center),window.addEventListener("resize",this.handleResize),this.$config.searchBar&&(this.addressInputPlaceholder=this.$config.searchBar.placeholder);
    },beforeDestroy:function(){
      window.removeEventListener("resize",this.handleResize);
    },methods:{ handleSearchFormSubmit:function(n){
      this.$emit("handle-search-form-submit",n);
    },handleClearSearch:function(){
      this.$emit("clear-search");
    },mapboxSiteName:function(n){
      return'<span class="popup-text">'+this.getSiteName(n)+"</span>";
    },configForBasemap:function(n){
      return this.$config.map.basemaps[n]||{};
    },handleMarkerClick:function(n){
      var t,e,o=n.component._props.markerId,a=Object(s["a"])(this.currentData);try{
        for(a.s();!(e=a.n()).done;){
          var i=e.value;i._featureId!==o||(t=this.getSiteName(i));
        }
      }catch(f){
        a.e(f);
      }finally{
        a.f();
      }console.log("handleMarkerClick is running, e:",n,"siteName:",t);var l=Object(r["a"])(this.selectedResources);l.includes(o)?(l.splice(l.indexOf(o),1),this.$store.commit("setLatestSelectedResourceFromMap",null)):(l=[],console.log("markerClick open marker, featureId",o),this.$gtag.event("map-click",{ event_category:this.$store.state.gtag.category,event_label:t }),l.push(o),window.innerWidth<750&&this.$store.commit("setLatestSelectedResourceFromMap",o)),this.$store.commit("setSelectedResources",l);
    },handleResize:function(n){
      this.$store.map.resize();
    },handleMapMove:function(n){
      var t=this.$store.map,e=this.$config.pictometry||{},o=t.getCenter(),a=o.lat,i=o.lng,s=[ i,a ];if(e.enabled){
        this.$store.commit("setPictometryMapCenter",s);var r=t.getZoom();this.$store.commit("setPictometryMapZoom",r);
      }var l=this.$config.cyclomedia||{};l.enabled&&(this.updateCyclomediaRecordings(),this.$store.commit("setCyclomediaLatLngFromMap",[ a,i ]));
    },toggleMap:function(){
      console.log("MapPanel.vue toggleMap is running"),this.$emit("toggleMap");
    },onMapLoaded:function(n){
      this.$store.map=n.map;var t=document.querySelector(".mapboxgl-canvas");t.setAttribute("tabindex",-1),setTimeout((function(){
        var n=document.querySelector(".mapboxgl-ctrl-zoom-in");n.setAttribute("tabindex",-1);var t=document.querySelector(".mapboxgl-ctrl-zoom-out");t.setAttribute("tabindex",-1);var e=document.querySelector(".mapboxgl-ctrl-compass");e.setAttribute("tabindex",-1);
      }),1e3);
    },onMapPreloaded:function(n){
      var t=document.getElementsByClassName("mapboxgl-ctrl-logo");console.log("MapPanel onMapPreloaded, logo:",t,"logo.length:",t.length,"logo.item(0):",t.item(0)),t[0].remove();var e=document.getElementsByClassName("mapboxgl-ctrl-attrib");e[0].remove();
    },checkBoundsChanges:function(){
      console.log("checkBoundsChanges is running");var n=[ "geojsonForResource" ];if(n){
        for(var t=this.$data.zoomToShape,e=[],o=0,a=n;o<a.length;o++){
          var i=a[o];!1!==t[i]&&t[i].length>0?e.push(!0):e.push(!1);
        }console.log("MapPanel.vue checkBoundsChanges, dzts:",t,"czts:",n,"tf:",e),e.includes(!1)||this.setMapToBounds();
      }
    },setMapToBounds:function(){
      console.log("setMapToBounds is running, this.geojsonForResource[0].geojson.geometry.coordinates:",this.geojsonForResource[0].geojson.geometry.coordinates);var n=[],t=[ "geojsonForResource" ];if(t){
        if(t.includes("geojsonForResource")){
          console.log("setMapToBounds is still running");var e,o=Object(s["a"])(this.geojsonForResource);try{
            for(o.s();!(e=o.n()).done;){
              var a=e.value,i=a.geojson.geometry.coordinates;console.log("theCoords:",i);var r=Object(Fn["k"])(i);console.log("setMapToBounds geojsonFeature.geojson:",a.geojson,"thePolygon:",r),n.push(r);
            }
          }catch(u){
            o.e(u);
          }finally{
            o.f();
          }
        }var l=Object(Fn["d"])(n);console.log("featureArray:",n,"theFeatureCollection:",l);var f=Object($n["a"])(l);if(console.log("bounds:",f),"leaflet"===this.mapType) {
          this.$store.commit("setMapBounds",f);
        }else if("mapbox"===this.mapType){
          var c=[[ f[0],f[1] ],[ f[2],f[3] ]];this.$store.commit("setMapBounds",c);
        }
      }
    } }},jn=Rn,Tn=(e("effd"),Object(b["a"])(jn,o,a,!1,null,null,null));t["a"]=Tn.exports;
},b47c:function(n,t,e){
  var o=e("0bc2"),a=e("2f9a"),i=e("807d"),s=e("9f5e"),r=e("d7bd"),l=TypeError,f=Object.defineProperty,c=Object.getOwnPropertyDescriptor,u="enumerable",p="configurable",d="writable";t.f=o?i?function(n,t,e){
    if(s(n),t=r(t),s(e),"function"===typeof n&&"prototype"===t&&"value"in e&&d in e&&!e[d]){
      var o=c(n,t);o&&o[d]&&(n[t]=e.value,e={ configurable:p in e?e[p]:o[p],enumerable:u in e?e[u]:o[u],writable:!1 });
    }return f(n,t,e);
  }:f:function(n,t,e){
    if(s(n),t=r(t),s(e),a) {
      try{
        return f(n,t,e);
      }catch(o){}
    }if("get"in e||"set"in e) {
      throw l("Accessors not supported");
    }return"value"in e&&(n[t]=e.value),n;
  };
},b481:function(n,t,e){
  var o=e("9ce1"),a=TypeError;n.exports=function(n){
    if(o(n)) {
      throw a("Can't call method on "+n);
    }return n;
  };
},b4f8:function(n,t,e){
  var o=e("23e7"),a=e("d066"),i=e("1a2d"),s=e("577e"),r=e("5692"),l=e("3d87"),f=r("string-to-symbol-registry"),c=r("symbol-to-string-registry");o({ target:"Symbol",stat:!0,forced:!l },{ for:function(n){
    var t=s(n);if(i(f,t)) {
      return f[t];
    }var e=a("Symbol")(t);return f[t]=e,c[e]=t,e;
  } });
},b64b:function(n,t,e){
  var o=e("23e7"),a=e("7b0b"),i=e("df75"),s=e("d039"),r=s((function(){
    i(1);
  }));o({ target:"Object",stat:!0,forced:r },{ keys:function(n){
    return i(a(n));
  } });
},b853:function(n,t){
  n.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||"";
},b85c:function(n,t,e){
  "use strict";e.d(t,"a",(function(){
    return a;
  }));e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("d9e2");var o=e("06c5");function a(n,t){
    var e="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){
      if(Array.isArray(n)||(e=Object(o["a"])(n))||t&&n&&"number"===typeof n.length){
        e&&(n=e);var a=0,i=function(){};return{ s:i,n:function(){
          return a>=n.length?{ done:!0 }:{ done:!1,value:n[a++] };
        },e:function(n){
          throw n;
        },f:i };
      }throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }var s,r=!0,l=!1;return{ s:function(){
      e=e.call(n);
    },n:function(){
      var n=e.next();return r=n.done,n;
    },e:function(n){
      l=!0,s=n;
    },f:function(){
      try{
        r||null==e["return"]||e["return"]();
      }finally{
        if(l) {
          throw s;
        }
      }
    } };
  }
},b888:function(n,t,e){
  "use strict";var o=e("d7bd"),a=e("b47c"),i=e("1eec");n.exports=function(n,t,e){
    var s=o(t);s in n?a.f(n,s,i(0,e)):n[s]=e;
  };
},b96a:function(n,t,e){
  var o=e("9b24"),a=e("9ce1");n.exports=function(n,t){
    var e=n[t];return a(e)?void 0:o(e);
  };
},b96e:function(n,t){
  n.exports=function(n){
    try{
      return!!n();
    }catch(t){
      return!0;
    }
  };
},b980:function(n,t,e){
  var o=e("d039"),a=e("5c6c");n.exports=!o((function(){
    var n=Error("a");return!("stack"in n)||(Object.defineProperty(n,"stack",a(1,7)),7!==n.stack);
  }));
},b9e4:function(n,t,e){
  var o=e("85c6"),a=Math.max,i=Math.min;n.exports=function(n,t){
    var e=o(n);return e<0?a(e+t,0):i(e,t);
  };
},ba38:function(n,t,e){
  var o=e("0bc2"),a=e("807d"),i=e("b47c"),s=e("9f5e"),r=e("bfa1"),l=e("fcb7");t.f=o&&!a?Object.defineProperties:function(n,t){
    s(n);var e,o=r(t),a=l(t),f=a.length,c=0;while(f>c) {
      i.f(n,e=a[c++],o[e]);
    }return n;
  };
},bbca:function(n,t){
  var e=String;n.exports=function(n){
    try{
      return e(n);
    }catch(t){
      return"Object";
    }
  };
},bc6f:function(n,t,e){
  "use strict";var o=function(){
      var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ class:{ "over-map":n.overMap,"pvm-search-control-container":!0 },style:n.containerStyle },[ e("form",{ class:n.formClass,attrs:{ id:"search-form",autocomplete:"off",title:"addressform" },on:{ submit:function(t){
        return t.preventDefault(),n.handleSearchFormSubmit.apply(null,arguments);
      } }},[ e("textbox",{ style:n.inputStyle,attrs:{ id:"map-textbox",placeholder:n.placeholderComputed||"Search by address or keyword" },model:{ value:n.addressEntered,callback:function(t){
        n.addressEntered=t;
      },expression:"addressEntered" }}) ],1),""!=n.addressEntered&&null!=n.addressEntered?e("button",{ class:"pvm-search-control-x-button "+n.buttonClass,attrs:{ "aria-label":"delete button",title:"delete button" },on:{ click:n.handleFormX }},[ e("font-awesome-icon",{ attrs:{ icon:"times",size:"2x" }}) ],1):n._e(),e("button",{ class:"pvm-search-control-button "+n.buttonClass,attrs:{ "aria-label":"search button",title:"search button" },on:{ click:n.handleSearchFormSubmit }},[ e("font-awesome-icon",{ attrs:{ icon:"search",size:"2x","aria-hidden":"true" }}) ],1) ]);
    },a=[];e("d3b7");function i(n,t,e,o,a,i,s){
    try{
      var r=n[i](s),l=r.value;
    }catch(f){
      return void e(f);
    }r.done?t(l):Promise.resolve(l).then(o,a);
  }function s(n){
    return function(){
      var t=this,e=arguments;return new Promise((function(o,a){
        var s=n.apply(t,e);function r(n){
          i(s,o,a,r,l,"next",n);
        }function l(n){
          i(s,o,a,r,l,"throw",n);
        }r(void 0);
      }));
    };
  }e("96cf"),e("e8fd"),e("97cc"),e("1c7d"),e("bc3a");function r(){
    return"id-"+Math.random().toString(36).substring(7);
  }var l=r,f=e("6502"),c={ name:"PhilaUiAddressInput",components:{ Textbox:f["h"] },props:{ placeholder:{ type:String,default:"address" },overMap:{ type:Boolean,default:!0 }},data:function(){
      var n={ inputID:l(),addressEntered:null };return n;
    },computed:{ i18nEnabled:function(){
      return!(!this.$config.i18n||!this.$config.i18n.enabled);
    },i18nLocale:function(){
      return this.$i18n.locale;
    },searchBarType:function(){
      var n,t=this.$config.searchBar.searchTypes;return n=1==t.length&&t.includes("address")?"address":1==t.length&&t.includes("keyword")?"keyword":"all",console.log("searchBarType computed, searchTypes:",t,"value:",n),n;
    },placeholderComputed:function(){
      return this.i18nEnabled?(console.log("placeholderComputed and i18nEnabled, this.searchBarType:",this.searchBarType,"this.$i18n.messages[this.i18nLocale]:",this.$i18n.messages[this.i18nLocale]),this.$i18n.messages[this.i18nLocale].app.searchPlaceholders[this.searchBarType]):this.$config.searchBar&&this.$config.searchBar.labelText?"string"===typeof this.$config.searchBar.labelText?this.$config.searchBar.labelText:this.$config.searchBar.labelText[this.searchBarType]:"Search";
    },containerStyle:function(){
      var n={};return n=this.isMobile?{ width:"98%" }:this.isTablet&&this.addressEntered||this.isTablet?{ width:"305px" }:(this.addressEntered,{ width:"505px" }),n;
    },inputStyle:function(){
      var n={};return n=this.isMobile?{ width:"100%" }:this.isTablet&&this.addressEntered?{ width:"297px" }:this.isTablet?{ width:"352px" }:this.addressEntered?{ width:"415px" }:{ width:"470px" },n;
    },map:function(){
      return this.$store.state.map.map;
    },formClass:function(){
      return this.isMobile?"pvm-search-control-form":"";
    },buttonClass:function(){
      return this.isMobile?"pvm-search-control-button-mobile":"pvm-search-control-button-non-mobile";
    },addressAutocompleteEnabled:function(){
      return!!this.$config.addressInput&&!0===this.$config.addressInput.autocompleteEnabled;
    },isMobileOrTablet:function(){
      return this.$store.state.isMobileOrTablet;
    },currentSearch:function(){
      return this.$store.state.currentSearch;
    } },created:function(){
      this.$config.defaultAddress&&(this.addressEntered=this.$config.defaultAddress);
    },mounted:function(){
      console.log("PhilaUiAddressInput mounted is running, this.currentSearch:",this.currentSearch),this.currentSearch&&(console.log("inside mounted if"),this.addressEntered=this.currentSearch);
    },watch:{ currentSearch:function(n){
      console.log("watch currentSearch, nextCurrentSearch:",n),this.addressEntered=this.currentSearch;
    } },methods:{ handleFormX:function(){
      console.log("handleFormX is running"),this.$data.addressEntered="",this.$emit("clear-search");
    },handleSearchFormSubmit:function(){
      var n=this;return s(regeneratorRuntime.mark((function t(){
        var e;return regeneratorRuntime.wrap((function(t){
          while(1) {
            switch(t.prev=t.next){
            case 0:e=n.$data.addressEntered,e&&n.$emit("handle-search-form-submit",e);case 2:case"end":return t.stop();
            }
          }
        }),t);
      })))();
    } }},u=c,p=(e("4707"),e("2877")),d=Object(p["a"])(u,o,a,!1,null,null,null);t["a"]=d.exports;
},bc99:function(n,t,e){
  var o=e("0885"),a=e("7942"),i=o.document,s=a(i)&&a(i.createElement);n.exports=function(n){
    return s?i.createElement(n):{};
  };
},bd06:function(n,t,e){
  var o=e("b96e"),a=e("db82"),i=/#|\.prototype\./,s=function(n,t){
      var e=l[r(n)];return e==c||e!=f&&(a(t)?o(t):!!t);
    },r=s.normalize=function(n){
      return String(n).replace(i,".").toLowerCase();
    },l=s.data={},f=s.NATIVE="N",c=s.POLYFILL="P";n.exports=s;
},bd28:function(n,t,e){
  "use strict";Object.defineProperty(t,"__esModule",{ value:!0 });var o="far",a="dot-circle",i=512,s=512,r=[],l="f192",f="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z";t.definition={ prefix:o,iconName:a,icon:[ i,s,r,l,f ]},t.faDotCircle=t.definition,t.prefix=o,t.iconName=a,t.width=i,t.height=s,t.ligatures=r,t.unicode=l,t.svgPathData=f;
},bec4:function(n,t,e){
  var o=e("e246"),a=e("57b5"),i=e("0e07"),s=e("b47c");n.exports=function(n,t,e){
    for(var r=a(t),l=s.f,f=i.f,c=0;c<r.length;c++){
      var u=r[c];o(n,u)||e&&o(e,u)||l(n,u,f(t,u));
    }
  };
},bf5d:function(n,t,e){
  var o=e("230c"),a=e("730e"),i=e("7942"),s=e("49be"),r=s("species"),l=Array;n.exports=function(n){
    var t;return o(n)&&(t=n.constructor,a(t)&&(t===l||o(t.prototype))?t=void 0:i(t)&&(t=t[r],null===t&&(t=void 0))),void 0===t?l:t;
  };
},bfa1:function(n,t,e){
  var o=e("6ba1"),a=e("b481");n.exports=function(n){
    return o(a(n));
  };
},c000:function(n,t,e){
  "use strict";var o,a,i,s=e("b96e"),r=e("db82"),l=e("7942"),f=e("d521"),c=e("34d0"),u=e("4ecc"),p=e("49be"),d=e("02e2"),h=p("iterator"),A=!1;[].keys&&(i=[].keys(),"next"in i?(a=c(c(i)),a!==Object.prototype&&(o=a)):A=!0);var m=!l(o)||s((function(){
    var n={};return o[h].call(n)!==n;
  }));m?o={}:d&&(o=f(o)),r(o[h])||u(o,h,(function(){
    return this;
  })),n.exports={ IteratorPrototype:o,BUGGY_SAFARI_ITERATORS:A };
},c0fe:function(n,t,e){
  var o=e("02e2"),a=e("6159");(n.exports=function(n,t){
    return a[n]||(a[n]=void 0!==t?t:{});
  })("versions",[]).push({ version:"3.27.2",mode:o?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.2/LICENSE",source:"https://github.com/zloirock/core-js" });
},c513:function(n,t,e){
  var o=e("23e7"),a=e("1a2d"),i=e("d9b5"),s=e("0d51"),r=e("5692"),l=e("3d87"),f=r("symbol-to-string-registry");o({ target:"Symbol",stat:!0,forced:!l },{ keyFor:function(n){
    if(!i(n)) {
      throw TypeError(s(n)+" is not a symbol");
    }if(a(f,n)) {
      return f[n];
    }
  } });
},c749:function(n,t,e){
  var o=e("7942"),a=e("2750"),i=e("49be"),s=i("match");n.exports=function(n){
    var t;return o(n)&&(void 0!==(t=n[s])?!!t:"RegExp"==a(n));
  };
},c770:function(n,t,e){
  var o=e("e330"),a=Error,i=o("".replace),s=function(n){
      return String(a(n).stack);
    }("zxcasd"),r=/\n\s*at [^:]*:[^\n]*/,l=r.test(s);n.exports=function(n,t){
    if(l&&"string"==typeof n&&!a.prepareStackTrace) {
      while(t--) {
        n=i(n,r,"");
      }
    }return n;
  };
},cbe0:function(n,t,e){
  var o=e("0102"),a=String;n.exports=function(n){
    if("Symbol"===o(n)) {
      throw TypeError("Cannot convert a Symbol value to a string");
    }return a(n);
  };
},cc3e:function(n,t,e){
  var o=e("0885"),a=Object.defineProperty;n.exports=function(n,t){
    try{
      a(o,n,{ value:t,configurable:!0,writable:!0 });
    }catch(e){
      o[n]=t;
    }return t;
  };
},cd9d8:function(n,t,e){
  var o=e("bfa1"),a=e("b9e4"),i=e("442b"),s=function(n){
    return function(t,e,s){
      var r,l=o(t),f=i(l),c=a(s,f);if(n&&e!=e){
        while(f>c) {
          if(r=l[c++],r!=r) {
            return!0;
          }
        }
      }else {
        for(;f>c;c++) {
          if((n||c in l)&&l[c]===e) {
return n||c||0;
}
        }
      }return!n&&-1;
    };
  };n.exports={ includes:s(!0),indexOf:s(!1) };
},d031:function(n,t,e){
  var o=e("c0fe"),a=e("b0a2"),i=o("keys");n.exports=function(n){
    return i[n]||(i[n]=a(n));
  };
},d28b:function(n,t,e){
  var o=e("746f");o("iterator");
},d423:function(n,t,e){
  var o=e("d6cc"),a=Function.prototype.call;n.exports=o?a.bind(a):function(){
    return a.apply(a,arguments);
  };
},d521:function(n,t,e){
  var o,a=e("9f5e"),i=e("ba38"),s=e("db22"),r=e("0b59"),l=e("3b52"),f=e("bc99"),c=e("d031"),u=">",p="<",d="prototype",h="script",A=c("IE_PROTO"),m=function(){},g=function(n){
      return p+h+u+n+p+"/"+h+u;
    },w=function(n){
      n.write(g("")),n.close();var t=n.parentWindow.Object;return n=null,t;
    },v=function(){
      var n,t=f("iframe"),e="java"+h+":";return t.style.display="none",l.appendChild(t),t.src=String(e),n=t.contentWindow.document,n.open(),n.write(g("document.F=Object")),n.close(),n.F;
    },y=function(){
      try{
        o=new ActiveXObject("htmlfile");
      }catch(t){}y="undefined"!=typeof document?document.domain&&o?w(o):v():w(o);var n=s.length;while(n--) {
        delete y[d][s[n]];
      }return y();
    };r[A]=!0,n.exports=Object.create||function(n,t){
    var e;return null!==n?(m[d]=a(n),e=new m,m[d]=null,e[A]=n):e=y(),void 0===t?e:i.f(e,t);
  };
},d52b:function(n,t,e){
  "use strict";e("aa16");
},d6cc:function(n,t,e){
  var o=e("b96e");n.exports=!o((function(){
    var n=function(){}.bind();return"function"!=typeof n||n.hasOwnProperty("prototype");
  }));
},d7bd:function(n,t,e){
  var o=e("355b"),a=e("7f5e");n.exports=function(n){
    var t=o(n,"string");return a(t)?t:t+"";
  };
},d81d:function(n,t,e){
  "use strict";var o=e("23e7"),a=e("b727").map,i=e("1dde"),s=i("map");o({ target:"Array",proto:!0,forced:!s },{ map:function(n){
    return a(this,n,arguments.length>1?arguments[1]:void 0);
  } });
},d9e2:function(n,t,e){
  var o=e("23e7"),a=e("da84"),i=e("2ba4"),s=e("e5cb"),r="WebAssembly",l=a[r],f=7!==Error("e",{ cause:7 }).cause,c=function(n,t){
      var e={};e[n]=s(n,t,f),o({ global:!0,constructor:!0,arity:1,forced:f },e);
    },u=function(n,t){
      if(l&&l[n]){
        var e={};e[n]=s(r+"."+n,t,f),o({ target:r,stat:!0,constructor:!0,arity:1,forced:f },e);
      }
    };c("Error",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),c("EvalError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),c("RangeError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),c("ReferenceError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),c("SyntaxError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),c("TypeError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),c("URIError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),u("CompileError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),u("LinkError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  })),u("RuntimeError",(function(n){
    return function(t){
      return i(n,this,arguments);
    };
  }));
},d9f5:function(n,t,e){
  "use strict";var o=e("23e7"),a=e("da84"),i=e("c65b"),s=e("e330"),r=e("c430"),l=e("83ab"),f=e("4930"),c=e("d039"),u=e("1a2d"),p=e("3a9b"),d=e("825a"),h=e("fc6a"),A=e("a04b"),m=e("577e"),g=e("5c6c"),w=e("7c73"),v=e("df75"),y=e("241c"),b=e("057f"),B=e("7418"),S=e("06cf"),C=e("9bf2"),O=e("37e8"),k=e("d1e7"),E=e("cb2d"),x=e("5692"),_=e("f772"),M=e("d012"),I=e("90e3"),$=e("b622"),F=e("e5383"),R=e("746f"),j=e("57b9"),T=e("d44e"),D=e("69f3"),L=e("b727").forEach,P=_("hidden"),N="Symbol",z="prototype",V=D.set,U=D.getterFor(N),H=Object[z],q=a.Symbol,W=q&&q[z],G=a.TypeError,Y=a.QObject,Z=S.f,Q=C.f,K=b.f,J=k.f,X=s([].push),nn=x("symbols"),tn=x("op-symbols"),en=x("wks"),on=!Y||!Y[z]||!Y[z].findChild,an=l&&c((function(){
      return 7!=w(Q({},"a",{ get:function(){
        return Q(this,"a",{ value:7 }).a;
      } })).a;
    }))?function(n,t,e){
        var o=Z(H,t);o&&delete H[t],Q(n,t,e),o&&n!==H&&Q(H,t,o);
      }:Q,sn=function(n,t){
      var e=nn[n]=w(W);return V(e,{ type:N,tag:n,description:t }),l||(e.description=t),e;
    },rn=function(n,t,e){
      n===H&&rn(tn,t,e),d(n);var o=A(t);return d(e),u(nn,o)?(e.enumerable?(u(n,P)&&n[P][o]&&(n[P][o]=!1),e=w(e,{ enumerable:g(0,!1) })):(u(n,P)||Q(n,P,g(1,{})),n[P][o]=!0),an(n,o,e)):Q(n,o,e);
    },ln=function(n,t){
      d(n);var e=h(t),o=v(e).concat(dn(e));return L(o,(function(t){
        l&&!i(cn,e,t)||rn(n,t,e[t]);
      })),n;
    },fn=function(n,t){
      return void 0===t?w(n):ln(w(n),t);
    },cn=function(n){
      var t=A(n),e=i(J,this,t);return!(this===H&&u(nn,t)&&!u(tn,t))&&(!(e||!u(this,t)||!u(nn,t)||u(this,P)&&this[P][t])||e);
    },un=function(n,t){
      var e=h(n),o=A(t);if(e!==H||!u(nn,o)||u(tn,o)){
        var a=Z(e,o);return!a||!u(nn,o)||u(e,P)&&e[P][o]||(a.enumerable=!0),a;
      }
    },pn=function(n){
      var t=K(h(n)),e=[];return L(t,(function(n){
        u(nn,n)||u(M,n)||X(e,n);
      })),e;
    },dn=function(n){
      var t=n===H,e=K(t?tn:h(n)),o=[];return L(e,(function(n){
        !u(nn,n)||t&&!u(H,n)||X(o,nn[n]);
      })),o;
    };f||(q=function(){
    if(p(W,this)) {
      throw G("Symbol is not a constructor");
    }var n=arguments.length&&void 0!==arguments[0]?m(arguments[0]):void 0,t=I(n),e=function(n){
      this===H&&i(e,tn,n),u(this,P)&&u(this[P],t)&&(this[P][t]=!1),an(this,t,g(1,n));
    };return l&&on&&an(H,t,{ configurable:!0,set:e }),sn(t,n);
  },W=q[z],E(W,"toString",(function(){
    return U(this).tag;
  })),E(q,"withoutSetter",(function(n){
    return sn(I(n),n);
  })),k.f=cn,C.f=rn,O.f=ln,S.f=un,y.f=b.f=pn,B.f=dn,F.f=function(n){
    return sn($(n),n);
  },l&&(Q(W,"description",{ configurable:!0,get:function(){
    return U(this).description;
  } }),r||E(H,"propertyIsEnumerable",cn,{ unsafe:!0 }))),o({ global:!0,constructor:!0,wrap:!0,forced:!f,sham:!f },{ Symbol:q }),L(v(en),(function(n){
    R(n);
  })),o({ target:N,stat:!0,forced:!f },{ useSetter:function(){
    on=!0;
  },useSimple:function(){
    on=!1;
  } }),o({ target:"Object",stat:!0,forced:!f,sham:!l },{ create:fn,defineProperty:rn,defineProperties:ln,getOwnPropertyDescriptor:un }),o({ target:"Object",stat:!0,forced:!f },{ getOwnPropertyNames:pn }),j(),T(q,N),M[P]=!0;
},db22:function(n,t){
  n.exports=[ "constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf" ];
},db82:function(n,t,e){
  var o=e("98bd"),a=o.all;n.exports=o.IS_HTMLDDA?function(n){
    return"function"==typeof n||n===a;
  }:function(n){
    return"function"==typeof n;
  };
},dbb4:function(n,t,e){
  var o=e("23e7"),a=e("83ab"),i=e("56ef"),s=e("fc6a"),r=e("06cf"),l=e("8418");o({ target:"Object",stat:!0,sham:!a },{ getOwnPropertyDescriptors:function(n){
    var t,e,o=s(n),a=r.f,f=i(o),c={},u=0;while(f.length>u) {
      e=a(o,t=f[u++]),void 0!==e&&l(c,t,e);
    }return c;
  } });
},ddb0:function(n,t,e){
  var o=e("da84"),a=e("fdbc"),i=e("785a"),s=e("e260"),r=e("9112"),l=e("b622"),f=l("iterator"),c=l("toStringTag"),u=s.values,p=function(n,t){
    if(n){
      if(n[f]!==u) {
        try{
          r(n,f,u);
        }catch(o){
          n[f]=u;
        }
      }if(n[c]||r(n,c,t),a[t]) {
        for(var e in s) {
          if(n[e]!==s[e]) {
try{
            r(n,e,s[e]);
          }catch(o){
            n[e]=s[e];
          }
}
        }
      }
    }
  };for(var d in a) {
    p(o[d]&&o[d].prototype,d);
  }p(i,"DOMTokenList");
},e01a:function(n,t,e){
  "use strict";var o=e("23e7"),a=e("83ab"),i=e("da84"),s=e("e330"),r=e("1a2d"),l=e("1626"),f=e("3a9b"),c=e("577e"),u=e("9bf2").f,p=e("e893"),d=i.Symbol,h=d&&d.prototype;if(a&&l(d)&&(!("description"in h)||void 0!==d().description)){
    var A={},m=function(){
      var n=arguments.length<1||void 0===arguments[0]?void 0:c(arguments[0]),t=f(h,this)?new d(n):void 0===n?d():d(n);return""===n&&(A[t]=!0),t;
    };p(m,d),m.prototype=h,h.constructor=m;var g="Symbol(test)"==String(d("test")),w=s(h.toString),v=s(h.valueOf),y=/^Symbol\((.*)\)[^)]+$/,b=s("".replace),B=s("".slice);u(h,"description",{ configurable:!0,get:function(){
      var n=v(this),t=w(n);if(r(A,n)) {
        return"";
      }var e=g?B(t,7,-1):b(t,y,"$1");return""===e?void 0:e;
    } }),o({ global:!0,constructor:!0,forced:!0 },{ Symbol:m });
  }
},e246:function(n,t,e){
  var o=e("550a"),a=e("251c"),i=o({}.hasOwnProperty);n.exports=Object.hasOwn||function(n,t){
    return i(a(n),t);
  };
},e391:function(n,t,e){
  var o=e("577e");n.exports=function(n,t){
    return void 0===n?arguments.length<2?"":t:o(n);
  };
},e439:function(n,t,e){
  var o=e("23e7"),a=e("d039"),i=e("fc6a"),s=e("06cf").f,r=e("83ab"),l=a((function(){
      s(1);
    })),f=!r||l;o({ target:"Object",stat:!0,forced:f,sham:!r },{ getOwnPropertyDescriptor:function(n,t){
    return s(i(n),t);
  } });
},e5383:function(n,t,e){
  var o=e("b622");t.f=o;
},e5cb:function(n,t,e){
  "use strict";var o=e("d066"),a=e("1a2d"),i=e("9112"),s=e("3a9b"),r=e("d2bb"),l=e("e893"),f=e("aeb0"),c=e("7156"),u=e("e391"),p=e("ab36"),d=e("c770"),h=e("b980"),A=e("83ab"),m=e("c430");n.exports=function(n,t,e,g){
    var w="stackTraceLimit",v=g?2:1,y=n.split("."),b=y[y.length-1],B=o.apply(null,y);if(B){
      var S=B.prototype;if(!m&&a(S,"cause")&&delete S.cause,!e) {
        return B;
      }var C=o("Error"),O=t((function(n,t){
        var e=u(g?t:n,void 0),o=g?new B(n):new B;return void 0!==e&&i(o,"message",e),h&&i(o,"stack",d(o.stack,2)),this&&s(S,this)&&c(o,this,O),arguments.length>v&&p(o,arguments[v]),o;
      }));if(O.prototype=S,"Error"!==b?r?r(O,C):l(O,C,{ name:!0 }):A&&w in B&&(f(O,B,w),f(O,B,"prepareStackTrace")),l(O,B),!m) {
        try{
          S.name!==b&&i(S,"name",b),S.constructor=O;
        }catch(k){}
      }return O;
    }
  };
},e8fd:function(n,t,e){
  "use strict";var o=e("67b2"),a=e("cd9d8").includes,i=e("b96e"),s=e("3f81"),r=i((function(){
    return!Array(1).includes();
  }));o({ target:"Array",proto:!0,forced:r },{ includes:function(n){
    return a(this,n,arguments.length>1?arguments[1]:void 0);
  } }),s("includes");
},e9c4:function(n,t,e){
  var o=e("23e7"),a=e("d066"),i=e("2ba4"),s=e("c65b"),r=e("e330"),l=e("d039"),f=e("e8b5"),c=e("1626"),u=e("861d"),p=e("d9b5"),d=e("f36a"),h=e("4930"),A=a("JSON","stringify"),m=r(/./.exec),g=r("".charAt),w=r("".charCodeAt),v=r("".replace),y=r(1..toString),b=/[\uD800-\uDFFF]/g,B=/^[\uD800-\uDBFF]$/,S=/^[\uDC00-\uDFFF]$/,C=!h||l((function(){
      var n=a("Symbol")();return"[null]"!=A([ n ])||"{}"!=A({ a:n })||"{}"!=A(Object(n));
    })),O=l((function(){
      return'"\\udf06\\ud834"'!==A("\udf06\ud834")||'"\\udead"'!==A("\udead");
    })),k=function(n,t){
      var e=d(arguments),o=t;if((u(t)||void 0!==n)&&!p(n)) {
        return f(t)||(t=function(n,t){
          if(c(o)&&(t=s(o,this,n,t)),!p(t)) {
            return t;
          }
        }),e[1]=t,i(A,null,e);
      }
    },E=function(n,t,e){
      var o=g(e,t-1),a=g(e,t+1);return m(B,n)&&!m(S,a)||m(S,n)&&!m(B,o)?"\\u"+y(w(n,0),16):n;
    };A&&o({ target:"JSON",stat:!0,arity:3,forced:C||O },{ stringify:function(n,t,e){
    var o=d(arguments),a=i(C?k:A,null,o);return O&&"string"==typeof a?v(a,b,E):a;
  } });
},e9f0:function(n,t,e){},eb3f:function(n,t,e){
  "use strict";e("5947");
},ee54:function(n,t){
  var e=TypeError,o=9007199254740991;n.exports=function(n){
    if(n>o) {
      throw e("Maximum allowed index exceeded");
    }return n;
  };
},effd:function(n,t,e){
  "use strict";e("a4af");
},f8c9:function(n,t,e){
  "use strict";Object.defineProperty(t,"__esModule",{ value:!0 });var o="fas",a="caret-down",i=320,s=512,r=[],l="f0d7",f="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z";t.definition={ prefix:o,iconName:a,icon:[ i,s,r,l,f ]},t.faCaretDown=t.definition,t.prefix=o,t.iconName=a,t.width=i,t.height=s,t.ligatures=r,t.unicode=l,t.svgPathData=f;
},f9d3:function(n,t,e){
  var o=e("4dc3"),a=e("550a"),i=e("6ba1"),s=e("251c"),r=e("442b"),l=e("84d7"),f=a([].push),c=function(n){
    var t=1==n,e=2==n,a=3==n,c=4==n,u=6==n,p=7==n,d=5==n||u;return function(h,A,m,g){
      for(var w,v,y=s(h),b=i(y),B=o(A,m),S=r(b),C=0,O=g||l,k=t?O(h,S):e||p?O(h,0):void 0;S>C;C++) {
        if((d||C in b)&&(w=b[C],v=B(w,C,y),n)) {
          if(t) {
k[C]=v;
}else if(v) {
switch(n){
          case 3:return!0;case 5:return w;case 6:return C;case 2:f(k,w);
          }
}else {
switch(n){
          case 4:return!1;case 7:f(k,w);
          }
}
        }
      }return u?-1:a||c?c:k;
    };
  };n.exports={ forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7) };
},fb6a:function(n,t,e){
  "use strict";var o=e("23e7"),a=e("da84"),i=e("e8b5"),s=e("68ee"),r=e("861d"),l=e("23cb"),f=e("07fa"),c=e("fc6a"),u=e("8418"),p=e("b622"),d=e("1dde"),h=e("f36a"),A=d("slice"),m=p("species"),g=a.Array,w=Math.max;o({ target:"Array",proto:!0,forced:!A },{ slice:function(n,t){
    var e,o,a,p=c(this),d=f(p),A=l(n,d),v=l(void 0===t?d:t,d);if(i(p)&&(e=p.constructor,s(e)&&(e===g||i(e.prototype))?e=void 0:r(e)&&(e=e[m],null===e&&(e=void 0)),e===g||void 0===e)) {
      return h(p,A,v);
    }for(o=new(void 0===e?g:e)(w(v-A,0)),a=0;A<v;A++,a++) {
      A in p&&u(o,a,p[A]);
    }return o.length=a,o;
  } });
},fc9f:function(n,t,e){
  "use strict";Object.defineProperty(t,"__esModule",{ value:!0 });var o="fas",a="caret-up",i=320,s=512,r=[],l="f0d8",f="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z";t.definition={ prefix:o,iconName:a,icon:[ i,s,r,l,f ]},t.faCaretUp=t.definition,t.prefix=o,t.iconName=a,t.width=i,t.height=s,t.ligatures=r,t.unicode=l,t.svgPathData=f;
},fcb7:function(n,t,e){
  var o=e("a9a1"),a=e("db22");n.exports=Object.keys||function(n){
    return o(n,a);
  };
},fdbc:function(n,t){
  n.exports={ CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0 };
} }]);
//# sourceMappingURL=chunk-5bfaf6a5.d84e7faf.js.map