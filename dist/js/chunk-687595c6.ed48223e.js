(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[ "chunk-687595c6" ],{ "02a5":function(t,e,n){
  "use strict";var i=n("67b2"),r=n("230c"),o=n("730e"),s=n("7942"),a=n("b9e4"),u=n("442b"),c=n("bfa1"),l=n("b888"),h=n("49be"),p=n("4329"),f=n("78b5"),d=p("slice"),g=h("species"),y=Array,_=Math.max;i({ target:"Array",proto:!0,forced:!d },{ slice:function(t,e){
    var n,i,h,p=c(this),d=u(p),v=a(t,d),m=a(void 0===e?d:e,d);if(r(p)&&(n=p.constructor,o(n)&&(n===y||r(n.prototype))?n=void 0:s(n)&&(n=n[g],null===n&&(n=void 0)),n===y||void 0===n)) {
      return f(p,v,m);
    }for(i=new(void 0===n?y:n)(_(m-v,0)),h=0;v<m;v++,h++) {
      v in p&&l(i,h,p[v]);
    }return i.length=h,i;
  } });
},"0691":function(t,e,n){
  var i=n("2750"),r=n("bfa1"),o=n("1abf").f,s=n("1302"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){
    try{
      return o(t);
    }catch(e){
      return s(a);
    }
  };t.exports.f=function(t){
    return a&&"Window"==i(t)?u(t):o(r(t));
  };
},"0f72":function(t,e,n){
  "use strict";var i=n("b50c"),r=n("d423"),o=n("550a"),s=n("a7af"),a=n("9f5e"),u=n("9ce1"),c=n("c749"),l=n("b481"),h=n("6020"),p=n("9e9c"),f=n("5aeb"),d=n("cbe0"),g=n("b96a"),y=n("1302"),_=n("fc4c"),v=n("658c"),m=n("9098"),b=n("b96e"),x=m.UNSUPPORTED_Y,E=4294967295,I=Math.min,N=[].push,C=o(/./.exec),S=o(N),w=o("".slice),L=!b((function(){
    var t=/(?:)/,e=t.exec;t.exec=function(){
      return e.apply(this,arguments);
    };var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1];
  }));s("split",(function(t,e,n){
    var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){
      var o=d(l(this)),s=void 0===n?E:n>>>0;if(0===s) {
        return[];
      }if(void 0===t) {
        return[ o ];
      }if(!c(t)) {
        return r(e,o,t,s);
      }var a,u,h,p=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,_=new RegExp(t.source,f+"g");while(a=r(v,_,o)){
        if(u=_.lastIndex,u>g&&(S(p,w(o,g,a.index)),a.length>1&&a.index<o.length&&i(N,p,y(a,1)),h=a[0].length,g=u,p.length>=s)) {
          break;
        }_.lastIndex===a.index&&_.lastIndex++;
      }return g===o.length?!h&&C(_,"")||S(p,""):S(p,w(o,g)),p.length>s?y(p,0,s):p;
    }:"0".split(void 0,0).length?function(t,n){
      return void 0===t&&0===n?[]:r(e,this,t,n);
    }:e,[ function(e,n){
      var i=l(this),s=u(e)?void 0:g(e,t);return s?r(s,e,i,n):r(o,d(i),e,n);
    },function(t,i){
      var r=a(this),s=d(t),u=n(o,r,s,i,o!==e);if(u.done) {
        return u.value;
      }var c=h(r,RegExp),l=r.unicode,g=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(x?"g":"y"),y=new c(x?"^(?:"+r.source+")":r,g),v=void 0===i?E:i>>>0;if(0===v) {
        return[];
      }if(0===s.length) {
        return null===_(y,s)?[ s ]:[];
      }var m=0,b=0,N=[];while(b<s.length){
        y.lastIndex=x?0:b;var C,L=_(y,x?w(s,b):s);if(null===L||(C=I(f(y.lastIndex+(x?b:0)),s.length))===m) {
          b=p(s,b,l);
        }else{
          if(S(N,w(s,m,b)),N.length===v) {
            return N;
          }for(var O=1;O<=L.length-1;O++) {
            if(S(N,L[O]),N.length===v) {
              return N;
            }
          }b=m=C;
        }
      }return S(N,w(s,m)),N;
    } ];
  }),!L,x);
},1302:function(t,e,n){
  var i=n("b9e4"),r=n("442b"),o=n("b888"),s=Array,a=Math.max;t.exports=function(t,e,n){
    for(var u=r(t),c=i(e,u),l=i(void 0===n?u:n,u),h=s(a(l-c,0)),p=0;c<l;c++,p++) {
      o(h,p,t[c]);
    }return h.length=p,h;
  };
},"14d6":function(t,e,n){},"21b8":function(t,e,n){
  var i=n("67b2"),r=n("550a"),o=n("0b59"),s=n("7942"),a=n("e246"),u=n("b47c").f,c=n("1abf"),l=n("0691"),h=n("3deb"),p=n("b0a2"),f=n("ae6a"),d=!1,g=p("meta"),y=0,_=function(t){
      u(t,g,{ value:{ objectID:"O"+y++,weakData:{}}});
    },v=function(t,e){
      if(!s(t)) {
        return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;
      }if(!a(t,g)){
        if(!h(t)) {
          return"F";
        }if(!e) {
          return"E";
        }_(t);
      }return t[g].objectID;
    },m=function(t,e){
      if(!a(t,g)){
        if(!h(t)) {
          return!0;
        }if(!e) {
          return!1;
        }_(t);
      }return t[g].weakData;
    },b=function(t){
      return f&&d&&h(t)&&!a(t,g)&&_(t),t;
    },x=function(){
      E.enable=function(){},d=!0;var t=c.f,e=r([].splice),n={};n[g]=1,t(n).length&&(c.f=function(n){
        for(var i=t(n),r=0,o=i.length;r<o;r++) {
          if(i[r]===g){
            e(i,r,1);break;
          }
        }return i;
      },i({ target:"Object",stat:!0,forced:!0 },{ getOwnPropertyNames:l.f }));
    },E=t.exports={ enable:x,fastKey:v,getWeakData:m,onFreeze:b };o[g]=!0;
},"221e":function(t,e,n){
  "use strict";var i=n("67b2"),r=n("550a"),o=n("9b24"),s=n("251c"),a=n("442b"),u=n("60f3"),c=n("cbe0"),l=n("b96e"),h=n("c4ee"),p=n("d10d"),f=n("3fa5"),d=n("6400"),g=n("7bb6"),y=n("3787"),_=[],v=r(_.sort),m=r(_.push),b=l((function(){
      _.sort(void 0);
    })),x=l((function(){
      _.sort(null);
    })),E=p("sort"),I=!l((function(){
      if(g) {
        return g<70;
      }if(!(f&&f>3)){
        if(d) {
          return!0;
        }if(y) {
          return y<603;
        }var t,e,n,i,r="";for(t=65;t<76;t++){
          switch(e=String.fromCharCode(t),t){
          case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2;
          }for(i=0;i<47;i++) {
            _.push({ k:e+i,v:n });
          }
        }for(_.sort((function(t,e){
          return e.v-t.v;
        })),i=0;i<_.length;i++) {
          e=_[i].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);
        }return"DGBEFHACIJK"!==r;
      }
    })),N=b||!x||!E||!I,C=function(t){
      return function(e,n){
        return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1;
      };
    };i({ target:"Array",proto:!0,forced:N },{ sort:function(t){
    void 0!==t&&o(t);var e=s(this);if(I) {
      return void 0===t?v(e):v(e,t);
    }var n,i,r=[],c=a(e);for(i=0;i<c;i++) {
      i in e&&m(r,e[i]);
    }h(r,C(t)),n=a(r),i=0;while(i<n) {
      e[i]=r[i++];
    }while(i<c) {
      u(e,i++);
    }return e;
  } });
},"27f8":function(t,e,n){
  var i=n("4dc3"),r=n("d423"),o=n("9f5e"),s=n("bbca"),a=n("b081"),u=n("442b"),c=n("3bed"),l=n("e521"),h=n("aab1"),p=n("4935"),f=TypeError,d=function(t,e){
      this.stopped=t,this.result=e;
    },g=d.prototype;t.exports=function(t,e,n){
    var y,_,v,m,b,x,E,I=n&&n.that,N=!(!n||!n.AS_ENTRIES),C=!(!n||!n.IS_RECORD),S=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),L=i(e,I),O=function(t){
        return y&&p(y,"normal",t),new d(!0,t);
      },T=function(t){
        return N?(o(t),w?L(t[0],t[1],O):L(t[0],t[1])):w?L(t,O):L(t);
      };if(C) {
      y=t.iterator;
    }else if(S) {
      y=t;
    }else{
      if(_=h(t),!_) {
        throw f(s(t)+" is not iterable");
      }if(a(_)){
        for(v=0,m=u(t);m>v;v++) {
          if(b=T(t[v]),b&&c(g,b)) {
            return b;
          }
        }return new d(!1);
      }y=l(t,_);
    }x=C?t.next:y.next;while(!(E=r(x,y)).done){
      try{
        b=T(E.value);
      }catch(R){
        p(y,"throw",R);
      }if("object"==typeof b&&b&&c(g,b)) {
        return b;
      }
    }return new d(!1);
  };
},"286a":function(t,e,n){
  var i=n("550a"),r=n("b481"),o=n("cbe0"),s=/"/g,a=i("".replace);t.exports=function(t,e,n,i){
    var u=o(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+a(o(i),s,"&quot;")+'"'),c+">"+u+"</"+e+">";
  };
},"2c52":function(t,e,n){
  var i=n("b96e"),r=n("0885"),o=r.RegExp;t.exports=i((function(){
    var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags);
  }));
},"2d67":function(t,e,n){
  var i=n("550a"),r=n("b481"),o=n("cbe0"),s=n("e0a3"),a=i("".replace),u="["+s+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),h=function(t){
    return function(e){
      var n=o(r(e));return 1&t&&(n=a(n,c,"")),2&t&&(n=a(n,l,"")),n;
    };
  };t.exports={ start:h(1),end:h(2),trim:h(3) };
},"2fae":function(t,e,n){},"2fc7":function(t,e,n){
  var i=n("3bed"),r=TypeError;t.exports=function(t,e){
    if(i(e,t)) {
      return t;
    }throw r("Incorrect invocation");
  };
},"36ad":function(t,e,n){
  "use strict";var i=n("9f5e");t.exports=function(){
    var t=i(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e;
  };
},"36f5":function(t,e,n){
  "use strict";n("6bf6");
},3787:function(t,e,n){
  var i=n("b853"),r=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1];
},"3a8c":function(t,e,n){
  var i=n("0885"),r=n("0e63"),o=n("4c1c"),s=n("c991"),a=n("a3b1"),u=function(t){
    if(t&&t.forEach!==s) {
      try{
        a(t,"forEach",s);
      }catch(e){
        t.forEach=s;
      }
    }
  };for(var c in r) {
    r[c]&&u(i[c]&&i[c].prototype);
  }u(o);
},"3deb":function(t,e,n){
  var i=n("b96e"),r=n("7942"),o=n("2750"),s=n("7ec7"),a=Object.isExtensible,u=i((function(){
    a(1);
  }));t.exports=u||s?function(t){
    return!!r(t)&&((!s||"ArrayBuffer"!=o(t))&&(!a||a(t)));
  }:a;
},"3fa5":function(t,e,n){
  var i=n("b853"),r=i.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1];
},"44e9":function(t,e,n){
  "use strict";var i=n("67b2"),r=n("658c");i({ target:"RegExp",proto:!0,forced:/./.exec!==r },{ exec:r });
},4935:function(t,e,n){
  var i=n("d423"),r=n("9f5e"),o=n("b96a");t.exports=function(t,e,n){
    var s,a;r(t);try{
      if(s=o(t,"return"),!s){
        if("throw"===e) {
          throw n;
        }return n;
      }s=i(s,t);
    }catch(u){
      a=!0,s=u;
    }if("throw"===e) {
      throw n;
    }if(a) {
      throw s;
    }return r(s),n;
  };
},4977:function(t,e,n){
  "use strict";n("889d");
},"4a10":function(t,e,n){
  "use strict";var i=n("b47c").f,r=n("d521"),o=n("bf5d7"),s=n("4dc3"),a=n("2fc7"),u=n("9ce1"),c=n("27f8"),l=n("0f85"),h=n("1a2b"),p=n("8493"),f=n("0bc2"),d=n("21b8").fastKey,g=n("35b6"),y=g.set,_=g.getterFor;t.exports={ getConstructor:function(t,e,n,l){
    var h=t((function(t,i){
        a(t,p),y(t,{ type:e,index:r(null),first:void 0,last:void 0,size:0 }),f||(t.size=0),u(i)||c(i,t[l],{ that:t,AS_ENTRIES:n });
      })),p=h.prototype,g=_(e),v=function(t,e,n){
        var i,r,o=g(t),s=m(t,e);return s?s.value=n:(o.last=s={ index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1 },o.first||(o.first=s),i&&(i.next=s),f?o.size++:t.size++,"F"!==r&&(o.index[r]=s)),t;
      },m=function(t,e){
        var n,i=g(t),r=d(e);if("F"!==r) {
          return i.index[r];
        }for(n=i.first;n;n=n.next) {
          if(n.key==e) {
            return n;
          }
        }
      };return o(p,{ clear:function(){
      var t=this,e=g(t),n=e.index,i=e.first;while(i) {
        i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;
      }e.first=e.last=void 0,f?e.size=0:t.size=0;
    },delete:function(t){
      var e=this,n=g(e),i=m(e,t);if(i){
        var r=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==i&&(n.first=r),n.last==i&&(n.last=o),f?n.size--:e.size--;
      }return!!i;
    },forEach:function(t){
      var e,n=g(this),i=s(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){
        i(e.value,e.key,this);while(e&&e.removed) {
          e=e.previous;
        }
      }
    },has:function(t){
      return!!m(this,t);
    } }),o(p,n?{ get:function(t){
      var e=m(this,t);return e&&e.value;
    },set:function(t,e){
      return v(this,0===t?0:t,e);
    } }:{ add:function(t){
      return v(this,t=0===t?0:t,t);
    } }),f&&i(p,"size",{ get:function(){
      return g(this).size;
    } }),h;
  },setStrong:function(t,e,n){
    var i=e+" Iterator",r=_(e),o=_(i);l(t,e,(function(t,e){
      y(this,{ type:i,target:t,state:r(t),kind:e,last:void 0 });
    }),(function(){
      var t=o(this),e=t.kind,n=t.last;while(n&&n.removed) {
        n=n.previous;
      }return t.target&&(t.last=n=n?n.next:t.state.first)?h("keys"==e?n.key:"values"==e?n.value:[ n.key,n.value ],!1):(t.target=void 0,h(void 0,!0));
    }),n?"entries":"values",!n,!0),p(e);
  } };
},"4caf":function(t,e,n){
  var i=n("550a"),r=n("251c"),o=Math.floor,s=i("".charAt),a=i("".replace),u=i("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,i,h,p){
    var f=n+t.length,d=i.length,g=l;return void 0!==h&&(h=r(h),g=c),a(p,g,(function(r,a){
      var c;switch(s(a,0)){
      case"$":return"$";case"&":return t;case"`":return u(e,0,n);case"'":return u(e,f);case"<":c=h[u(a,1,-1)];break;default:var l=+a;if(0===l) {
        return r;
      }if(l>d){
          var p=o(l/10);return 0===p?r:p<=d?void 0===i[p-1]?s(a,1):i[p-1]+s(a,1):r;
        }c=i[l-1];
      }return void 0===c?"":c;
    }));
  };
},"4dee":function(t,e,n){
  "use strict";n("44e9");var i=n("67b2"),r=n("d423"),o=n("db82"),s=n("9f5e"),a=n("cbe0"),u=function(){
      var t=!1,e=/[ac]/;return e.exec=function(){
        return t=!0,/./.exec.apply(this,arguments);
      },!0===e.test("abc")&&t;
    }(),c=/./.test;i({ target:"RegExp",proto:!0,forced:!u },{ test:function(t){
    var e=s(this),n=a(t),i=e.exec;if(!o(i)) {
      return r(c,e,n);
    }var u=r(i,e,n);return null!==u&&(s(u),!0);
  } });
},"4f6f":function(t,e,n){
  "use strict";var i=n("67b2"),r=n("286a"),o=n("9439");i({ target:"String",proto:!0,forced:o("link") },{ link:function(t){
    return r(this,"a","href",t);
  } });
},"51eb":function(t,e,n){
  "use strict";var i=n("da84"),r=n("825a"),o=n("485a"),s=i.TypeError;t.exports=function(t){
    if(r(this),"string"===t||"default"===t) {
      t="string";
    }else if("number"!==t) {
      throw s("Incorrect hint");
    }return o(this,t);
  };
},5912:function(t,e,n){
  "use strict";var i=n("d423"),r=n("a7af"),o=n("9f5e"),s=n("9ce1"),a=n("b481"),u=n("f74c"),c=n("cbe0"),l=n("b96a"),h=n("fc4c");r("search",(function(t,e,n){
    return[ function(e){
      var n=a(this),r=s(e)?void 0:l(e,t);return r?i(r,e,n):new RegExp(e)[t](c(n));
    },function(t){
      var i=o(this),r=c(t),s=n(e,i,r);if(s.done) {
        return s.value;
      }var a=i.lastIndex;u(a,0)||(i.lastIndex=0);var l=h(i,r);return u(i.lastIndex,a)||(i.lastIndex=a),null===l?-1:l.index;
    } ];
  }));
},"5ca2":function(t,e,n){
  "use strict";var i=n("6386").PROPER,r=n("4ecc"),o=n("9f5e"),s=n("cbe0"),a=n("b96e"),u=n("a32c"),c="toString",l=RegExp.prototype,h=l[c],p=a((function(){
      return"/a/b"!=h.call({ source:"a",flags:"b" });
    })),f=i&&h.name!=c;(p||f)&&r(RegExp.prototype,c,(function(){
    var t=o(this),e=s(t.source),n=s(u(t));return"/"+e+"/"+n;
  }),{ unsafe:!0 });
},"5e01":function(t,e,n){
  var i=n("0885");t.exports=i;
},"5e64":function(t,e,n){},6020:function(t,e,n){
  var i=n("9f5e"),r=n("68c0"),o=n("9ce1"),s=n("49be"),a=s("species");t.exports=function(t,e){
    var n,s=i(t).constructor;return void 0===s||o(n=i(s)[a])?e:r(n);
  };
},6400:function(t,e,n){
  var i=n("b853");t.exports=/MSIE|Trident/.test(i);
},6589:function(t,e,n){
  n("6d3f");
},"658c":function(t,e,n){
  "use strict";var i=n("d423"),r=n("550a"),o=n("cbe0"),s=n("36ad"),a=n("9098"),u=n("c0fe"),c=n("d521"),l=n("35b6").get,h=n("2c52"),p=n("751c"),f=u("native-string-replace",String.prototype.replace),d=RegExp.prototype.exec,g=d,y=r("".charAt),_=r("".indexOf),v=r("".replace),m=r("".slice),b=function(){
      var t=/a/,e=/b*/g;return i(d,t,"a"),i(d,e,"a"),0!==t.lastIndex||0!==e.lastIndex;
    }(),x=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],I=b||E||x||h||p;I&&(g=function(t){
    var e,n,r,a,u,h,p,I=this,N=l(I),C=o(t),S=N.raw;if(S) {
      return S.lastIndex=I.lastIndex,e=i(g,S,C),I.lastIndex=S.lastIndex,e;
    }var w=N.groups,L=x&&I.sticky,O=i(s,I),T=I.source,R=0,M=C;if(L&&(O=v(O,"y",""),-1===_(O,"g")&&(O+="g"),M=m(C,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==y(C,I.lastIndex-1))&&(T="(?: "+T+")",M=" "+M,R++),n=new RegExp("^(?:"+T+")",O)),E&&(n=new RegExp("^"+T+"$(?!\\s)",O)),b&&(r=I.lastIndex),a=i(d,L?n:I,M),L?a?(a.input=m(a.input,R),a[0]=m(a[0],R),a.index=I.lastIndex,I.lastIndex+=a[0].length):I.lastIndex=0:b&&a&&(I.lastIndex=I.global?a.index+a[0].length:r),E&&a&&a.length>1&&i(f,a[0],n,(function(){
      for(u=1;u<arguments.length-2;u++) {
        void 0===arguments[u]&&(a[u]=void 0);
      }
    })),a&&w) {
      for(a.groups=h=c(null),u=0;u<w.length;u++) {
        p=w[u],h[p[0]]=a[p[1]];
      }
    }return a;
  }),t.exports=g;
},"65ed":function(t,e,n){
  "use strict";n("ebb5");
},"68c0":function(t,e,n){
  var i=n("730e"),r=n("bbca"),o=TypeError;t.exports=function(t){
    if(i(t)) {
      return t;
    }throw o(r(t)+" is not a constructor");
  };
},"6bf6":function(t,e,n){},"6d3f":function(t,e,n){
  "use strict";var i=n("95eb"),r=n("4a10");i("Set",(function(t){
    return function(){
      return t(this,arguments.length?arguments[0]:void 0);
    };
  }),r);
},"751c":function(t,e,n){
  var i=n("b96e"),r=n("0885"),o=r.RegExp;t.exports=i((function(){
    var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c");
  }));
},"78b5":function(t,e,n){
  var i=n("550a");t.exports=i([].slice);
},"7ec7":function(t,e,n){
  var i=n("b96e");t.exports=i((function(){
    if("function"==typeof ArrayBuffer){
      var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{ value:8 });
    }
  }));
},8172:function(t,e,n){
  var i=n("746f"),r=n("57b9");i("toPrimitive"),r();
},"824b":function(t,e,n){
  "use strict";n.r(e);var i=function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ staticClass:"app",attrs:{ id:"app" }},[ n("a",{ staticClass:"skip-to-main-content-link",attrs:{ href:"#main-area" }},[ t._v("Skip to main content") ]),n("PhilaModal",{ directives:[{ name:"show",rawName:"v-show",value:t.isModalOpen,expression:"isModalOpen" }],on:{ close:t.closeModal }},[ n("div",{ attrs:{ slot:"body" },slot:"body" },[ n("p",[ t._v("The resource finder helps you locate services related to a particular topic. You can browse the list of providers, search by keyword or address, and narrow your results by category.") ]),n("p",[ t._v("The providers are listed alphabetically. To learn about what they offer and where they are, select their name. This will expand their listing and locate them on the map. You can also: "),n("ul",[ n("li",[ n("b",[ t._v("Search by location or keyword.") ]),t._v(" To find service providers near you, select “Address” in the dropdown and enter a street address. To search for a specific term, select “Keyword” in the dropdown and enter your term.") ]),n("li",[ n("b",[ t._v("Choose a category.") ]),t._v(" If you’re looking for a specific type of resource, select the appropriate topic under “Filter list by category.” You can pick multiple categories.") ]) ]) ]),n("p",[ t._v("If you’re interested in a particular service or resource, contact the provider to learn more and confirm that it’s still available.") ]) ]) ]),n("PhilaModal",{ directives:[{ name:"show",rawName:"v-show",value:t.isAlertModalOpen,expression:"isAlertModalOpen" }],on:{ close:t.closeModal }},[ n("div",{ attrs:{ slot:"header" },domProps:{ innerHTML:t._s(t.alertModalHeader) },slot:"header" }),n("div",{ attrs:{ slot:"body" },domProps:{ innerHTML:t._s(t.alertModalBody) },slot:"body" }) ]),n("div",{ staticClass:"header-holder" },[ n("app-header",{ attrs:{ "app-title":t.appTitle,"app-subtitle":t.appSubTitle,"app-link":t.appLink,"is-sticky":!1,"branding-image":t.brandingImage,"branding-link":t.brandingLink,isFluid:!0 }},[ n("mobile-nav",{ attrs:{ slot:"mobile-nav",links:t.footerLinks },slot:"mobile-nav" }),t.i18nEnabled?n("lang-selector",{ attrs:{ slot:"lang-selector-nav",languages:t.i18nLanguages },slot:"lang-selector-nav" }):t._e() ],1) ],1),n("div",{ directives:[{ name:"show",rawName:"v-show",value:t.isMobile&&!this.$config.searchBar.hide,expression:"isMobile && !this.$config.searchBar.hide" }],staticClass:"search-bar-container-class" },[ n("phila-ui-address-input",{ attrs:{ "over-map":!1,placeholder:t.addressInputPlaceholder },on:{ "clear-search":t.clearSearchTriggered,"handle-search-form-submit":t.handleSubmit }}) ],1),t.refineEnabled?n("div",{ class:t.refinePanelClass },[ n("refine-panel",{ attrs:{ "refine-title":t.refineTitle }}) ],1):t._e(),n("div",{ directives:[{ name:"show",rawName:"v-show",value:!t.isMobile||t.isMobile&&!t.refineOpen,expression:"!isMobile || isMobile && !refineOpen" }],staticClass:"invisible-scrollbar locations-and-map-panels-holder columns" },[ n("div",{ directives:[{ name:"show",rawName:"v-show",value:t.mapPanelVisible,expression:"mapPanelVisible" }],staticClass:"map-panel-holder column" },[ n("map-panel",{ on:{ "handle-search-form-submit":t.handleSubmit,"clear-search":t.clearSearchTriggered,toggleMap:t.toggleMap }}) ],1),n("div",{ directives:[{ name:"show",rawName:"v-show",value:t.locationsPanelVisible,expression:"locationsPanelVisible" }],class:t.locationsPanelClass+" locations-panel-holder column" },[ n("locations-panel",{ attrs:{ "is-map-visible":t.isMapVisible }}) ],1) ]),n("div",{ directives:[{ name:"show",rawName:"v-show",value:t.toggleButtonVisible,expression:"toggleButtonVisible" }],on:{ click:t.toggleMap }},[ n("button",{ staticClass:"button capitalized is-primary toggle-button is-fullwidth" },[ t._v(" "+t._s(t.$t(this.$data.buttonText))+" ") ]) ]),n("div",{ staticClass:"footer-holder" },[ n("app-footer",{ attrs:{ id:"app-footer","is-sticky":!1,"is-hidden-mobile":!0,links:t.footerLinks }}) ],1) ],1);
    },r=[],o=n("5530"),s=n("3835"),a=n("b85c"),u=(n("09a4"),n("3188"),n("3909"),n("2d6d"),n("5d53"),n("4f6f"),n("1c7d"),n("5e4e"),n("b28b"),n("e8fd"),n("3a8c"),n("5ca2"),n("97cc"),n("44e9"),n("0f72"),n("5912"),n("a79f")),c=n("9448");n("5e64");function l(t){
    return Array.isArray?Array.isArray(t):"[object Array]"===x(t);
  }const h=1/0;function p(t){
    if("string"==typeof t) {
      return t;
    }let e=t+"";return"0"==e&&1/t==-h?"-0":e;
  }function f(t){
    return null==t?"":p(t);
  }function d(t){
    return"string"===typeof t;
  }function g(t){
    return"number"===typeof t;
  }function y(t){
    return!0===t||!1===t||v(t)&&"[object Boolean]"==x(t);
  }function _(t){
    return"object"===typeof t;
  }function v(t){
    return _(t)&&null!==t;
  }function m(t){
    return void 0!==t&&null!==t;
  }function b(t){
    return!t.trim().length;
  }function x(t){
    return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t);
  }const E="Incorrect 'index' type",I=t=>"Invalid value for key "+t,N=t=>`Pattern length exceeds max of ${t}.`,C=t=>`Missing ${t} property in key`,S=t=>`Property 'weight' in key '${t}' must be a positive integer`,w=Object.prototype.hasOwnProperty;class L{
    constructor(t){
      this._keys=[],this._keyMap={};let e=0;t.forEach(t=>{
        let n=O(t);e+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,e+=n.weight;
      }),this._keys.forEach(t=>{
        t.weight/=e;
      });
    }get(t){
      return this._keyMap[t];
    }keys(){
      return this._keys;
    }toJSON(){
      return JSON.stringify(this._keys);
    }
  }function O(t){
    let e=null,n=null,i=null,r=1,o=null;if(d(t)||l(t)) {
      i=t,e=T(t),n=R(t);
    }else{
      if(!w.call(t,"name")) {
        throw new Error(C("name"));
      }const s=t.name;if(i=s,w.call(t,"weight")&&(r=t.weight,r<=0)) {
        throw new Error(S(s));
      }e=T(s),n=R(s),o=t.getFn;
    }return{ path:e,id:n,weight:r,src:i,getFn:o };
  }function T(t){
    return l(t)?t:t.split(".");
  }function R(t){
    return l(t)?t.join("."):t;
  }function M(t,e){
    let n=[],i=!1;const r=(t,e,o)=>{
      if(m(t)) {
        if(e[o]){
          let s=e[o];const a=t[s];if(!m(a)) {
            return;
          }if(o===e.length-1&&(d(a)||g(a)||y(a))) {
            n.push(f(a));
          }else if(l(a)){
            i=!0;for(let t=0,n=a.length;t<n;t+=1) {
              r(a[t],e,o+1);
            }
          }else {
            e.length&&r(a,e,o+1);
          }
        }else {
          n.push(t);
        }
      }
    };return r(t,d(e)?e.split("."):e,0),i?n:n[0];
  }const P={ includeMatches:!1,findAllMatches:!1,minMatchCharLength:1 },D={ isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1 },A={ location:0,threshold:.6,distance:100 },F={ useExtendedSearch:!1,getFn:M,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1 };var $={ ...D,...P,...A,...F };const k=/[^ ]+/g;function G(t=1,e=3){
    const n=new Map,i=Math.pow(10,e);return{ get(e){
      const r=e.match(k).length;if(n.has(r)) {
        return n.get(r);
      }const o=1/Math.pow(r,.5*t),s=parseFloat(Math.round(o*i)/i);return n.set(r,s),s;
    },clear(){
      n.clear();
    } };
  }class j{
    constructor({ getFn:t=$.getFn,fieldNormWeight:e=$.fieldNormWeight }={}){
      this.norm=G(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords();
    }setSources(t=[]){
      this.docs=t;
    }setIndexRecords(t=[]){
      this.records=t;
    }setKeys(t=[]){
      this.keys=t,this._keysMap={},t.forEach((t,e)=>{
        this._keysMap[t.id]=e;
      });
    }create(){
      !this.isCreated&&this.docs.length&&(this.isCreated=!0,d(this.docs[0])?this.docs.forEach((t,e)=>{
        this._addString(t,e);
      }):this.docs.forEach((t,e)=>{
        this._addObject(t,e);
      }),this.norm.clear());
    }add(t){
      const e=this.size();d(t)?this._addString(t,e):this._addObject(t,e);
    }removeAt(t){
      this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1) {
        this.records[e].i-=1;
      }
    }getValueForItemAtKeyId(t,e){
      return t[this._keysMap[e]];
    }size(){
      return this.records.length;
    }_addString(t,e){
      if(!m(t)||b(t)) {
        return;
      }let n={ v:t,i:e,n:this.norm.get(t) };this.records.push(n);
    }_addObject(t,e){
      let n={ i:e,$:{}};this.keys.forEach((e,i)=>{
        let r=e.getFn?e.getFn(t):this.getFn(t,e.path);if(m(r)) {
          if(l(r)){
            let t=[];const e=[{ nestedArrIndex:-1,value:r }];while(e.length){
              const{ nestedArrIndex:n,value:i }=e.pop();if(m(i)) {
                if(d(i)&&!b(i)){
                  let e={ v:i,i:n,n:this.norm.get(i) };t.push(e);
                }else {
l(i)&&i.forEach((t,n)=>{
                  e.push({ nestedArrIndex:n,value:t });
                });
}
              }
            }n.$[i]=t;
          }else if(d(r)&&!b(r)){
            let t={ v:r,n:this.norm.get(r) };n.$[i]=t;
          }
        }
      }),this.records.push(n);
    }toJSON(){
      return{ keys:this.keys,records:this.records };
    }
  }function B(t,e,{ getFn:n=$.getFn,fieldNormWeight:i=$.fieldNormWeight }={}){
    const r=new j({ getFn:n,fieldNormWeight:i });return r.setKeys(t.map(O)),r.setSources(e),r.create(),r;
  }function q(t,{ getFn:e=$.getFn,fieldNormWeight:n=$.fieldNormWeight }={}){
    const{ keys:i,records:r }=t,o=new j({ getFn:e,fieldNormWeight:n });return o.setKeys(i),o.setIndexRecords(r),o;
  }function V(t,{ errors:e=0,currentLocation:n=0,expectedLocation:i=0,distance:r=$.distance,ignoreLocation:o=$.ignoreLocation }={}){
    const s=e/t.length;if(o) {
      return s;
    }const a=Math.abs(i-n);return r?s+a/r:a?1:s;
  }function z(t=[],e=$.minMatchCharLength){
    let n=[],i=-1,r=-1,o=0;for(let s=t.length;o<s;o+=1){
      let s=t[o];s&&-1===i?i=o:s||-1===i||(r=o-1,r-i+1>=e&&n.push([ i,r ]),i=-1);
    }return t[o-1]&&o-i>=e&&n.push([ i,o-1 ]),n;
  }const U=32;function Y(t,e,n,{ location:i=$.location,distance:r=$.distance,threshold:o=$.threshold,findAllMatches:s=$.findAllMatches,minMatchCharLength:a=$.minMatchCharLength,includeMatches:u=$.includeMatches,ignoreLocation:c=$.ignoreLocation }={}){
    if(e.length>U) {
      throw new Error(N(U));
    }const l=e.length,h=t.length,p=Math.max(0,Math.min(i,h));let f=o,d=p;const g=a>1||u,y=g?Array(h):[];let _;while((_=t.indexOf(e,d))>-1){
      let t=V(e,{ currentLocation:_,expectedLocation:p,distance:r,ignoreLocation:c });if(f=Math.min(t,f),d=_+l,g){
        let t=0;while(t<l) {
          y[_+t]=1,t+=1;
        }
      }
    }d=-1;let v=[],m=1,b=l+h;const x=1<<l-1;for(let I=0;I<l;I+=1){
      let i=0,o=b;while(i<o){
        const t=V(e,{ errors:I,currentLocation:p+o,expectedLocation:p,distance:r,ignoreLocation:c });t<=f?i=o:b=o,o=Math.floor((b-i)/2+i);
      }b=o;let a=Math.max(1,p-o+1),u=s?h:Math.min(p+o,h)+l,_=Array(u+2);_[u+1]=(1<<I)-1;for(let s=u;s>=a;s-=1){
        let i=s-1,o=n[t.charAt(i)];if(g&&(y[i]=+!!o),_[s]=(_[s+1]<<1|1)&o,I&&(_[s]|=(v[s+1]|v[s])<<1|1|v[s+1]),_[s]&x&&(m=V(e,{ errors:I,currentLocation:i,expectedLocation:p,distance:r,ignoreLocation:c }),m<=f)){
          if(f=m,d=i,d<=p) {
            break;
          }a=Math.max(1,2*p-d);
        }
      }const E=V(e,{ errors:I+1,currentLocation:p,expectedLocation:p,distance:r,ignoreLocation:c });if(E>f) {
        break;
      }v=_;
    }const E={ isMatch:d>=0,score:Math.max(.001,m) };if(g){
      const t=z(y,a);t.length?u&&(E.indices=t):E.isMatch=!1;
    }return E;
  }function X(t){
    let e={};for(let n=0,i=t.length;n<i;n+=1){
      const r=t.charAt(n);e[r]=(e[r]||0)|1<<i-n-1;
    }return e;
  }class W{
    constructor(t,{ location:e=$.location,threshold:n=$.threshold,distance:i=$.distance,includeMatches:r=$.includeMatches,findAllMatches:o=$.findAllMatches,minMatchCharLength:s=$.minMatchCharLength,isCaseSensitive:a=$.isCaseSensitive,ignoreLocation:u=$.ignoreLocation }={}){
      if(this.options={ location:e,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:a,ignoreLocation:u },this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length) {
        return;
      }const c=(t,e)=>{
          this.chunks.push({ pattern:t,alphabet:X(t),startIndex:e });
        },l=this.pattern.length;if(l>U){
        let t=0;const e=l%U,n=l-e;while(t<n) {
          c(this.pattern.substr(t,U),t),t+=U;
        }if(e){
          const t=l-U;c(this.pattern.substr(t),t);
        }
      }else {
        c(this.pattern,0);
      }
    }searchIn(t){
      const{ isCaseSensitive:e,includeMatches:n }=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){
        let e={ isMatch:!0,score:0 };return n&&(e.indices=[[ 0,t.length-1 ]]),e;
      }const{ location:i,distance:r,threshold:o,findAllMatches:s,minMatchCharLength:a,ignoreLocation:u }=this.options;let c=[],l=0,h=!1;this.chunks.forEach(({ pattern:e,alphabet:p,startIndex:f })=>{
        const{ isMatch:d,score:g,indices:y }=Y(t,e,p,{ location:i+f,distance:r,threshold:o,findAllMatches:s,minMatchCharLength:a,includeMatches:n,ignoreLocation:u });d&&(h=!0),l+=g,d&&y&&(c=[ ...c,...y ]);
      });let p={ isMatch:h,score:h?l/this.chunks.length:1 };return h&&n&&(p.indices=c),p;
    }
  }class H{
    constructor(t){
      this.pattern=t;
    }static isMultiMatch(t){
      return K(t,this.multiRegex);
    }static isSingleMatch(t){
      return K(t,this.singleRegex);
    }search(){}
  }function K(t,e){
    const n=t.match(e);return n?n[1]:null;
  }class J extends H{
    constructor(t){
      super(t);
    }static get type(){
      return"exact";
    }static get multiRegex(){
      return/^="(.*)"$/;
    }static get singleRegex(){
      return/^=(.*)$/;
    }search(t){
      const e=t===this.pattern;return{ isMatch:e,score:e?0:1,indices:[ 0,this.pattern.length-1 ]};
    }
  }class Q extends H{
    constructor(t){
      super(t);
    }static get type(){
      return"inverse-exact";
    }static get multiRegex(){
      return/^!"(.*)"$/;
    }static get singleRegex(){
      return/^!(.*)$/;
    }search(t){
      const e=t.indexOf(this.pattern),n=-1===e;return{ isMatch:n,score:n?0:1,indices:[ 0,t.length-1 ]};
    }
  }class Z extends H{
    constructor(t){
      super(t);
    }static get type(){
      return"prefix-exact";
    }static get multiRegex(){
      return/^\^"(.*)"$/;
    }static get singleRegex(){
      return/^\^(.*)$/;
    }search(t){
      const e=t.startsWith(this.pattern);return{ isMatch:e,score:e?0:1,indices:[ 0,this.pattern.length-1 ]};
    }
  }class tt extends H{
    constructor(t){
      super(t);
    }static get type(){
      return"inverse-prefix-exact";
    }static get multiRegex(){
      return/^!\^"(.*)"$/;
    }static get singleRegex(){
      return/^!\^(.*)$/;
    }search(t){
      const e=!t.startsWith(this.pattern);return{ isMatch:e,score:e?0:1,indices:[ 0,t.length-1 ]};
    }
  }class et extends H{
    constructor(t){
      super(t);
    }static get type(){
      return"suffix-exact";
    }static get multiRegex(){
      return/^"(.*)"\$$/;
    }static get singleRegex(){
      return/^(.*)\$$/;
    }search(t){
      const e=t.endsWith(this.pattern);return{ isMatch:e,score:e?0:1,indices:[ t.length-this.pattern.length,t.length-1 ]};
    }
  }class nt extends H{
    constructor(t){
      super(t);
    }static get type(){
      return"inverse-suffix-exact";
    }static get multiRegex(){
      return/^!"(.*)"\$$/;
    }static get singleRegex(){
      return/^!(.*)\$$/;
    }search(t){
      const e=!t.endsWith(this.pattern);return{ isMatch:e,score:e?0:1,indices:[ 0,t.length-1 ]};
    }
  }class it extends H{
    constructor(t,{ location:e=$.location,threshold:n=$.threshold,distance:i=$.distance,includeMatches:r=$.includeMatches,findAllMatches:o=$.findAllMatches,minMatchCharLength:s=$.minMatchCharLength,isCaseSensitive:a=$.isCaseSensitive,ignoreLocation:u=$.ignoreLocation }={}){
      super(t),this._bitapSearch=new W(t,{ location:e,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:s,isCaseSensitive:a,ignoreLocation:u });
    }static get type(){
      return"fuzzy";
    }static get multiRegex(){
      return/^"(.*)"$/;
    }static get singleRegex(){
      return/^(.*)$/;
    }search(t){
      return this._bitapSearch.searchIn(t);
    }
  }class rt extends H{
    constructor(t){
      super(t);
    }static get type(){
      return"include";
    }static get multiRegex(){
      return/^'"(.*)"$/;
    }static get singleRegex(){
      return/^'(.*)$/;
    }search(t){
      let e,n=0;const i=[],r=this.pattern.length;while((e=t.indexOf(this.pattern,n))>-1) {
        n=e+r,i.push([ e,n-1 ]);
      }const o=!!i.length;return{ isMatch:o,score:o?0:1,indices:i };
    }
  }const ot=[ J,rt,Z,tt,nt,et,Q,it ],st=ot.length,at=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ut="|";function ct(t,e={}){
    return t.split(ut).map(t=>{
      let n=t.trim().split(at).filter(t=>t&&!!t.trim()),i=[];for(let r=0,o=n.length;r<o;r+=1){
        const t=n[r];let o=!1,s=-1;while(!o&&++s<st){
          const n=ot[s];let r=n.isMultiMatch(t);r&&(i.push(new n(r,e)),o=!0);
        }if(!o){
          s=-1;while(++s<st){
            const n=ot[s];let r=n.isSingleMatch(t);if(r){
              i.push(new n(r,e));break;
            }
          }
        }
      }return i;
    });
  }const lt=new Set([ it.type,rt.type ]);class ht{
    constructor(t,{ isCaseSensitive:e=$.isCaseSensitive,includeMatches:n=$.includeMatches,minMatchCharLength:i=$.minMatchCharLength,ignoreLocation:r=$.ignoreLocation,findAllMatches:o=$.findAllMatches,location:s=$.location,threshold:a=$.threshold,distance:u=$.distance }={}){
      this.query=null,this.options={ isCaseSensitive:e,includeMatches:n,minMatchCharLength:i,findAllMatches:o,ignoreLocation:r,location:s,threshold:a,distance:u },this.pattern=e?t:t.toLowerCase(),this.query=ct(this.pattern,this.options);
    }static condition(t,e){
      return e.useExtendedSearch;
    }searchIn(t){
      const e=this.query;if(!e) {
        return{ isMatch:!1,score:1 };
      }const{ includeMatches:n,isCaseSensitive:i }=this.options;t=i?t:t.toLowerCase();let r=0,o=[],s=0;for(let a=0,u=e.length;a<u;a+=1){
        const i=e[a];o.length=0,r=0;for(let e=0,a=i.length;e<a;e+=1){
          const a=i[e],{ isMatch:u,indices:c,score:l }=a.search(t);if(!u){
            s=0,r=0,o.length=0;break;
          }if(r+=1,s+=l,n){
            const t=a.constructor.type;lt.has(t)?o=[ ...o,...c ]:o.push(c);
          }
        }if(r){
          let t={ isMatch:!0,score:s/r };return n&&(t.indices=o),t;
        }
      }return{ isMatch:!1,score:1 };
    }
  }const pt=[];function ft(...t){
    pt.push(...t);
  }function dt(t,e){
    for(let n=0,i=pt.length;n<i;n+=1){
      let i=pt[n];if(i.condition(t,e)) {
        return new i(t,e);
      }
    }return new W(t,e);
  }const gt={ AND:"$and",OR:"$or" },yt={ PATH:"$path",PATTERN:"$val" },_t=t=>!(!t[gt.AND]&&!t[gt.OR]),vt=t=>!!t[yt.PATH],mt=t=>!l(t)&&_(t)&&!_t(t),bt=t=>({ [gt.AND]:Object.keys(t).map(e=>({ [e]:t[e] })) });function xt(t,e,{ auto:n=!0 }={}){
    const i=t=>{
      let r=Object.keys(t);const o=vt(t);if(!o&&r.length>1&&!_t(t)) {
        return i(bt(t));
      }if(mt(t)){
        const i=o?t[yt.PATH]:r[0],s=o?t[yt.PATTERN]:t[i];if(!d(s)) {
          throw new Error(I(i));
        }const a={ keyId:R(i),pattern:s };return n&&(a.searcher=dt(s,e)),a;
      }let s={ children:[],operator:r[0] };return r.forEach(e=>{
        const n=t[e];l(n)&&n.forEach(t=>{
          s.children.push(i(t));
        });
      }),s;
    };return _t(t)||(t=bt(t)),i(t);
  }function Et(t,{ ignoreFieldNorm:e=$.ignoreFieldNorm }){
    t.forEach(t=>{
      let n=1;t.matches.forEach(({ key:t,norm:i,score:r })=>{
        const o=t?t.weight:null;n*=Math.pow(0===r&&o?Number.EPSILON:r,(o||1)*(e?1:i));
      }),t.score=n;
    });
  }function It(t,e){
    const n=t.matches;e.matches=[],m(n)&&n.forEach(t=>{
      if(!m(t.indices)||!t.indices.length) {
        return;
      }const{ indices:n,value:i }=t;let r={ indices:n,value:i };t.key&&(r.key=t.key.src),t.idx>-1&&(r.refIndex=t.idx),e.matches.push(r);
    });
  }function Nt(t,e){
    e.score=t.score;
  }function Ct(t,e,{ includeMatches:n=$.includeMatches,includeScore:i=$.includeScore }={}){
    const r=[];return n&&r.push(It),i&&r.push(Nt),t.map(t=>{
      const{ idx:n }=t,i={ item:e[n],refIndex:n };return r.length&&r.forEach(e=>{
        e(t,i);
      }),i;
    });
  }class St{
    constructor(t,e={},n){
      this.options={ ...$,...e },this.options.useExtendedSearch,this._keyStore=new L(this.options.keys),this.setCollection(t,n);
    }setCollection(t,e){
      if(this._docs=t,e&&!(e instanceof j)) {
        throw new Error(E);
      }this._myIndex=e||B(this.options.keys,this._docs,{ getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight });
    }add(t){
      m(t)&&(this._docs.push(t),this._myIndex.add(t));
    }remove(t=(()=>!1)){
      const e=[];for(let n=0,i=this._docs.length;n<i;n+=1){
        const r=this._docs[n];t(r,n)&&(this.removeAt(n),n-=1,i-=1,e.push(r));
      }return e;
    }removeAt(t){
      this._docs.splice(t,1),this._myIndex.removeAt(t);
    }getIndex(){
      return this._myIndex;
    }search(t,{ limit:e=-1 }={}){
      const{ includeMatches:n,includeScore:i,shouldSort:r,sortFn:o,ignoreFieldNorm:s }=this.options;let a=d(t)?d(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Et(a,{ ignoreFieldNorm:s }),r&&a.sort(o),g(e)&&e>-1&&(a=a.slice(0,e)),Ct(a,this._docs,{ includeMatches:n,includeScore:i });
    }_searchStringList(t){
      const e=dt(t,this.options),{ records:n }=this._myIndex,i=[];return n.forEach(({ v:t,i:n,n:r })=>{
        if(!m(t)) {
          return;
        }const{ isMatch:o,score:s,indices:a }=e.searchIn(t);o&&i.push({ item:t,idx:n,matches:[{ score:s,value:t,norm:r,indices:a }]});
      }),i;
    }_searchLogical(t){
      const e=xt(t,this.options),n=(t,e,i)=>{
          if(!t.children){
            const{ keyId:n,searcher:r }=t,o=this._findMatches({ key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(e,n),searcher:r });return o&&o.length?[{ idx:i,item:e,matches:o }]:[];
          }const r=[];for(let o=0,s=t.children.length;o<s;o+=1){
            const s=t.children[o],a=n(s,e,i);if(a.length) {
              r.push(...a);
            }else if(t.operator===gt.AND) {
              return[];
            }
          }return r;
        },i=this._myIndex.records,r={},o=[];return i.forEach(({ $:t,i:i })=>{
        if(m(t)){
          let s=n(e,t,i);s.length&&(r[i]||(r[i]={ idx:i,item:t,matches:[]},o.push(r[i])),s.forEach(({ matches:t })=>{
            r[i].matches.push(...t);
          }));
        }
      }),o;
    }_searchObjectList(t){
      const e=dt(t,this.options),{ keys:n,records:i }=this._myIndex,r=[];return i.forEach(({ $:t,i:i })=>{
        if(!m(t)) {
          return;
        }let o=[];n.forEach((n,i)=>{
          o.push(...this._findMatches({ key:n,value:t[i],searcher:e }));
        }),o.length&&r.push({ idx:i,item:t,matches:o });
      }),r;
    }_findMatches({ key:t,value:e,searcher:n }){
      if(!m(e)) {
        return[];
      }let i=[];if(l(e)) {
        e.forEach(({ v:e,i:r,n:o })=>{
          if(!m(e)) {
            return;
          }const{ isMatch:s,score:a,indices:u }=n.searchIn(e);s&&i.push({ score:a,key:t,value:e,idx:r,norm:o,indices:u });
        });
      }else{
        const{ v:r,n:o }=e,{ isMatch:s,score:a,indices:u }=n.searchIn(r);s&&i.push({ score:a,key:t,value:r,norm:o,indices:u });
      }return i;
    }
  }St.version="6.6.2",St.createIndex=B,St.parseIndex=q,St.config=$,St.parseQuery=xt,ft(ht);var wt=n("cd1f"),Lt=n("499e");function Ot(t,e){
    if(e=e||{},!Object(wt["f"])(e)) {
      throw new Error("options is invalid");
    }var n=e.properties;if(!t) {
      throw new Error("geojson is required");
    }var i=Object(Lt["a"])(t),r=(i[0]+i[2])/2,o=(i[1]+i[3])/2;return Object(wt["j"])([ r,o ],n);
  }var Tt=Ot,Rt=n("90c2"),Mt=n("7c8d"),Pt=n("28770");function Dt(t,e){
    return Ft(t,"mercator",e);
  }function At(t,e){
    return Ft(t,"wgs84",e);
  }function Ft(t,e,n){
    if(n=n||{},!Object(wt["f"])(n)) {
      throw new Error("options is invalid");
    }var i=n.mutate;if(!t) {
      throw new Error("geojson is required");
    }return Array.isArray(t)&&Object(wt["e"])(t[0])?t="mercator"===e?$t(t):kt(t):(!0!==i&&(t=Object(Pt["a"])(t)),Object(Mt["a"])(t,(function(t){
      var n="mercator"===e?$t(t):kt(t);t[0]=n[0],t[1]=n[1];
    }))),t;
  }function $t(t){
    var e=Math.PI/180,n=6378137,i=20037508.342789244,r=Math.abs(t[0])<=180?t[0]:t[0]-360*Gt(t[0]),o=[ n*r*e,n*Math.log(Math.tan(.25*Math.PI+.5*t[1]*e)) ];return o[0]>i&&(o[0]=i),o[0]<-i&&(o[0]=-i),o[1]>i&&(o[1]=i),o[1]<-i&&(o[1]=-i),o;
  }function kt(t){
    var e=180/Math.PI,n=6378137;return[ t[0]*e/n,(.5*Math.PI-2*Math.atan(Math.exp(-t[1]/n)))*e ];
  }function Gt(t){
    return t<0?-1:t>0?1:0;
  }var jt=function(){
    return new Bt;
  };function Bt(){
    this.reset();
  }Bt.prototype={ constructor:Bt,reset:function(){
    this.s=this.t=0;
  },add:function(t){
    Vt(qt,t,this.t),Vt(this,qt.s,this.s),this.s?this.t+=qt.t:this.s=qt.t;
  },valueOf:function(){
    return this.s;
  } };var qt=new Bt;function Vt(t,e,n){
    var i=t.s=e+n,r=i-e,o=i-r;t.t=e-o+(n-r);
  }var zt=1e-6,Ut=Math.PI,Yt=Ut/2,Xt=Ut/4,Wt=2*Ut,Ht=180/Ut,Kt=Ut/180,Jt=Math.abs,Qt=Math.atan,Zt=Math.atan2,te=Math.cos,ee=(Math.ceil,Math.exp),ne=(Math.floor,Math.log),ie=(Math.pow,Math.sin),re=(Math.sign,Math.sqrt),oe=Math.tan;function se(t){
    return t>1?0:t<-1?Ut:Math.acos(t);
  }function ae(t){
    return t>1?Yt:t<-1?-Yt:Math.asin(t);
  }function ue(){}function ce(t,e){
    t&&he.hasOwnProperty(t.type)&&he[t.type](t,e);
  }var le={ Feature:function(t,e){
      ce(t.geometry,e);
    },FeatureCollection:function(t,e){
      var n=t.features,i=-1,r=n.length;while(++i<r) {
        ce(n[i].geometry,e);
      }
    } },he={ Sphere:function(t,e){
      e.sphere();
    },Point:function(t,e){
      t=t.coordinates,e.point(t[0],t[1],t[2]);
    },MultiPoint:function(t,e){
      var n=t.coordinates,i=-1,r=n.length;while(++i<r) {
        t=n[i],e.point(t[0],t[1],t[2]);
      }
    },LineString:function(t,e){
      pe(t.coordinates,e,0);
    },MultiLineString:function(t,e){
      var n=t.coordinates,i=-1,r=n.length;while(++i<r) {
        pe(n[i],e,0);
      }
    },Polygon:function(t,e){
      fe(t.coordinates,e);
    },MultiPolygon:function(t,e){
      var n=t.coordinates,i=-1,r=n.length;while(++i<r) {
        fe(n[i],e);
      }
    },GeometryCollection:function(t,e){
      var n=t.geometries,i=-1,r=n.length;while(++i<r) {
        ce(n[i],e);
      }
    } };function pe(t,e,n){
    var i,r=-1,o=t.length-n;e.lineStart();while(++r<o) {
      i=t[r],e.point(i[0],i[1],i[2]);
    }e.lineEnd();
  }function fe(t,e){
    var n=-1,i=t.length;e.polygonStart();while(++n<i) {
      pe(t[n],e,1);
    }e.polygonEnd();
  }var de=function(t,e){
    t&&le.hasOwnProperty(t.type)?le[t.type](t,e):ce(t,e);
  };jt(),jt();function ge(t){
    return[ Zt(t[1],t[0]),ae(t[2]) ];
  }function ye(t){
    var e=t[0],n=t[1],i=te(n);return[ i*te(e),i*ie(e),ie(n) ];
  }function _e(t,e){
    return t[0]*e[0]+t[1]*e[1]+t[2]*e[2];
  }function ve(t,e){
    return[ t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0] ];
  }function me(t,e){
    t[0]+=e[0],t[1]+=e[1],t[2]+=e[2];
  }function be(t,e){
    return[ t[0]*e,t[1]*e,t[2]*e ];
  }function xe(t){
    var e=re(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e;
  }jt();var Ee=function(t,e){
    function n(n,i){
      return n=t(n,i),e(n[0],n[1]);
    }return t.invert&&e.invert&&(n.invert=function(n,i){
      return n=e.invert(n,i),n&&t.invert(n[0],n[1]);
    }),n;
  };function Ie(t,e){
    return[ t>Ut?t-Wt:t<-Ut?t+Wt:t,e ];
  }function Ne(t,e,n){
    return(t%=Wt)?e||n?Ee(Se(t),we(e,n)):Se(t):e||n?we(e,n):Ie;
  }function Ce(t){
    return function(e,n){
      return e+=t,[ e>Ut?e-Wt:e<-Ut?e+Wt:e,n ];
    };
  }function Se(t){
    var e=Ce(t);return e.invert=Ce(-t),e;
  }function we(t,e){
    var n=te(t),i=ie(t),r=te(e),o=ie(e);function s(t,e){
      var s=te(e),a=te(t)*s,u=ie(t)*s,c=ie(e),l=c*n+a*i;return[ Zt(u*r-l*o,a*n-c*i),ae(l*r+u*o) ];
    }return s.invert=function(t,e){
      var s=te(e),a=te(t)*s,u=ie(t)*s,c=ie(e),l=c*r-u*o;return[ Zt(u*r+c*o,a*n+l*i),ae(l*n-a*i) ];
    },s;
  }Ie.invert=Ie;var Le=function(t){
    function e(e){
      return e=t(e[0]*Kt,e[1]*Kt),e[0]*=Ht,e[1]*=Ht,e;
    }return t=Ne(t[0]*Kt,t[1]*Kt,t.length>2?t[2]*Kt:0),e.invert=function(e){
      return e=t.invert(e[0]*Kt,e[1]*Kt),e[0]*=Ht,e[1]*=Ht,e;
    },e;
  };function Oe(t,e,n,i,r,o){
    if(n){
      var s=te(e),a=ie(e),u=i*n;null==r?(r=e+i*Wt,o=e-u/2):(r=Te(s,r),o=Te(s,o),(i>0?r<o:r>o)&&(r+=i*Wt));for(var c,l=r;i>0?l>o:l<o;l-=u) {
        c=ge([ s,-a*te(l),-a*ie(l) ]),t.point(c[0],c[1]);
      }
    }
  }function Te(t,e){
    e=ye(e),e[0]-=t,xe(e);var n=se(-e[1]);return((-e[2]<0?-n:n)+Wt-zt)%Wt;
  }var Re=function(){
      var t,e=[];return{ point:function(e,n){
        t.push([ e,n ]);
      },lineStart:function(){
        e.push(t=[]);
      },lineEnd:ue,rejoin:function(){
        e.length>1&&e.push(e.pop().concat(e.shift()));
      },result:function(){
        var n=e;return e=[],t=null,n;
      } };
    },Me=function(t,e,n,i,r,o){
      var s,a=t[0],u=t[1],c=e[0],l=e[1],h=0,p=1,f=c-a,d=l-u;if(s=n-a,f||!(s>0)){
        if(s/=f,f<0){
          if(s<h) {
            return;
          }s<p&&(p=s);
        }else if(f>0){
          if(s>p) {
            return;
          }s>h&&(h=s);
        }if(s=r-a,f||!(s<0)){
          if(s/=f,f<0){
            if(s>p) {
              return;
            }s>h&&(h=s);
          }else if(f>0){
            if(s<h) {
              return;
            }s<p&&(p=s);
          }if(s=i-u,d||!(s>0)){
            if(s/=d,d<0){
              if(s<h) {
                return;
              }s<p&&(p=s);
            }else if(d>0){
              if(s>p) {
                return;
              }s>h&&(h=s);
            }if(s=o-u,d||!(s<0)){
              if(s/=d,d<0){
                if(s>p) {
                  return;
                }s>h&&(h=s);
              }else if(d>0){
                if(s<h) {
                  return;
                }s<p&&(p=s);
              }return h>0&&(t[0]=a+h*f,t[1]=u+h*d),p<1&&(e[0]=a+p*f,e[1]=u+p*d),!0;
            }
          }
        }
      }
    },Pe=function(t,e){
      return Jt(t[0]-e[0])<zt&&Jt(t[1]-e[1])<zt;
    };function De(t,e,n,i){
    this.x=t,this.z=e,this.o=n,this.e=i,this.v=!1,this.n=this.p=null;
  }var Ae=function(t,e,n,i,r){
    var o,s,a=[],u=[];if(t.forEach((function(t){
      if(!((e=t.length-1)<=0)){
        var e,n,i=t[0],s=t[e];if(Pe(i,s)){
          for(r.lineStart(),o=0;o<e;++o) {
            r.point((i=t[o])[0],i[1]);
          }r.lineEnd();
        }else {
          a.push(n=new De(i,t,null,!0)),u.push(n.o=new De(i,null,n,!1)),a.push(n=new De(s,t,null,!1)),u.push(n.o=new De(s,null,n,!0));
        }
      }
    })),a.length){
      for(u.sort(e),Fe(a),Fe(u),o=0,s=u.length;o<s;++o) {
        u[o].e=n=!n;
      }var c,l,h=a[0];while(1){
        var p=h,f=!0;while(p.v) {
          if((p=p.n)===h) {
            return;
          }
        }c=p.z,r.lineStart();do{
          if(p.v=p.o.v=!0,p.e){
            if(f) {
              for(o=0,s=c.length;o<s;++o) {
                r.point((l=c[o])[0],l[1]);
              }
            }else {
              i(p.x,p.n.x,1,r);
            }p=p.n;
          }else{
            if(f) {
              for(c=p.p.z,o=c.length-1;o>=0;--o) {
                r.point((l=c[o])[0],l[1]);
              }
            }else {
              i(p.x,p.p.x,-1,r);
            }p=p.p;
          }p=p.o,c=p.z,f=!f;
        }while(!p.v);r.lineEnd();
      }
    }
  };function Fe(t){
    if(e=t.length){
      var e,n,i=0,r=t[0];while(++i<e) {
        r.n=n=t[i],n.p=r,r=n;
      }r.n=n=t[0],n.p=r;
    }
  }var $e=function(t,e){
      return t<e?-1:t>e?1:t>=e?0:NaN;
    },ke=function(t){
      return 1===t.length&&(t=Ge(t)),{ left:function(e,n,i,r){
        null==i&&(i=0),null==r&&(r=e.length);while(i<r){
          var o=i+r>>>1;t(e[o],n)<0?i=o+1:r=o;
        }return i;
      },right:function(e,n,i,r){
        null==i&&(i=0),null==r&&(r=e.length);while(i<r){
          var o=i+r>>>1;t(e[o],n)>0?r=o:i=o+1;
        }return i;
      } };
    };function Ge(t){
    return function(e,n){
      return $e(t(e),n);
    };
  }var je=ke($e);je.right,je.left;var Be=Array.prototype;Be.slice,Be.map,Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var qe=function(t){
    var e,n,i,r=t.length,o=-1,s=0;while(++o<r) {
      s+=t[o].length;
    }n=new Array(s);while(--r>=0){
      i=t[r],e=i.length;while(--e>=0) {
        n[--s]=i[e];
      }
    }return n;
  };var Ve=1e9,ze=-Ve;function Ue(t,e,n,i){
    function r(r,o){
      return t<=r&&r<=n&&e<=o&&o<=i;
    }function o(r,o,a,c){
      var l=0,h=0;if(null==r||(l=s(r,a))!==(h=s(o,a))||u(r,o)<0^a>0) {
        do{
          c.point(0===l||3===l?t:n,l>1?i:e);
        }while((l=(l+a+4)%4)!==h);
      }else {
        c.point(o[0],o[1]);
      }
    }function s(i,r){
      return Jt(i[0]-t)<zt?r>0?0:3:Jt(i[0]-n)<zt?r>0?2:1:Jt(i[1]-e)<zt?r>0?1:0:r>0?3:2;
    }function a(t,e){
      return u(t.x,e.x);
    }function u(t,e){
      var n=s(t,1),i=s(e,1);return n!==i?n-i:0===n?e[1]-t[1]:1===n?t[0]-e[0]:2===n?t[1]-e[1]:e[0]-t[0];
    }return function(s){
      var u,c,l,h,p,f,d,g,y,_,v,m=s,b=Re(),x={ point:E,lineStart:S,lineEnd:w,polygonStart:N,polygonEnd:C };function E(t,e){
        r(t,e)&&m.point(t,e);
      }function I(){
        for(var e=0,n=0,r=c.length;n<r;++n) {
          for(var o,s,a=c[n],u=1,l=a.length,h=a[0],p=h[0],f=h[1];u<l;++u) {
            o=p,s=f,h=a[u],p=h[0],f=h[1],s<=i?f>i&&(p-o)*(i-s)>(f-s)*(t-o)&&++e:f<=i&&(p-o)*(i-s)<(f-s)*(t-o)&&--e;
          }
        }return e;
      }function N(){
        m=b,u=[],c=[],v=!0;
      }function C(){
        var t=I(),e=v&&t,n=(u=qe(u)).length;(e||n)&&(s.polygonStart(),e&&(s.lineStart(),o(null,null,1,s),s.lineEnd()),n&&Ae(u,a,t,o,s),s.polygonEnd()),m=s,u=c=l=null;
      }function S(){
        x.point=L,c&&c.push(l=[]),_=!0,y=!1,d=g=NaN;
      }function w(){
        u&&(L(h,p),f&&y&&b.rejoin(),u.push(b.result())),x.point=E,y&&m.lineEnd();
      }function L(o,s){
        var a=r(o,s);if(c&&l.push([ o,s ]),_) {
          h=o,p=s,f=a,_=!1,a&&(m.lineStart(),m.point(o,s));
        }else if(a&&y) {
          m.point(o,s);
        }else{
          var u=[ d=Math.max(ze,Math.min(Ve,d)),g=Math.max(ze,Math.min(Ve,g)) ],b=[ o=Math.max(ze,Math.min(Ve,o)),s=Math.max(ze,Math.min(Ve,s)) ];Me(u,b,t,e,n,i)?(y||(m.lineStart(),m.point(u[0],u[1])),m.point(b[0],b[1]),a||m.lineEnd(),v=!1):a&&(m.lineStart(),m.point(o,s),v=!1);
        }d=o,g=s,y=a;
      }return x;
    };
  }var Ye=jt(),Xe=function(t,e){
    var n=e[0],i=e[1],r=[ ie(n),-te(n),0 ],o=0,s=0;Ye.reset();for(var a=0,u=t.length;a<u;++a) {
      if(l=(c=t[a]).length) {
        for(var c,l,h=c[l-1],p=h[0],f=h[1]/2+Xt,d=ie(f),g=te(f),y=0;y<l;++y,p=v,d=b,g=x,h=_){
          var _=c[y],v=_[0],m=_[1]/2+Xt,b=ie(m),x=te(m),E=v-p,I=E>=0?1:-1,N=I*E,C=N>Ut,S=d*b;if(Ye.add(Zt(S*I*ie(N),g*x+S*te(N))),o+=C?E+I*Wt:E,C^p>=n^v>=n){
            var w=ve(ye(h),ye(_));xe(w);var L=ve(r,w);xe(L);var O=(C^E>=0?-1:1)*ae(L[2]);(i>O||i===O&&(w[0]||w[1]))&&(s+=C^E>=0?1:-1);
          }
        }
      }
    }return(o<-zt||o<zt&&Ye<-zt)^1&s;
  };jt();var We=function(t){
    return t;
  };jt(),jt();var He=1/0,Ke=He,Je=-He,Qe=Je,Ze={ point:tn,lineStart:ue,lineEnd:ue,polygonStart:ue,polygonEnd:ue,result:function(){
    var t=[[ He,Ke ],[ Je,Qe ]];return Je=Qe=-(Ke=He=1/0),t;
  } };function tn(t,e){
    t<He&&(He=t),t>Je&&(Je=t),e<Ke&&(Ke=e),e>Qe&&(Qe=e);
  }var en=Ze;function nn(t){
    this._context=t;
  }nn.prototype={ _radius:4.5,pointRadius:function(t){
    return this._radius=t,this;
  },polygonStart:function(){
    this._line=0;
  },polygonEnd:function(){
    this._line=NaN;
  },lineStart:function(){
    this._point=0;
  },lineEnd:function(){
    0===this._line&&this._context.closePath(),this._point=NaN;
  },point:function(t,e){
    switch(this._point){
    case 0:this._context.moveTo(t,e),this._point=1;break;case 1:this._context.lineTo(t,e);break;default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Wt);break;
    }
  },result:ue };jt();function rn(){
    this._string=[];
  }function on(t){
    return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z";
  }rn.prototype={ _radius:4.5,_circle:on(4.5),pointRadius:function(t){
    return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this;
  },polygonStart:function(){
    this._line=0;
  },polygonEnd:function(){
    this._line=NaN;
  },lineStart:function(){
    this._point=0;
  },lineEnd:function(){
    0===this._line&&this._string.push("Z"),this._point=NaN;
  },point:function(t,e){
    switch(this._point){
    case 0:this._string.push("M",t,",",e),this._point=1;break;case 1:this._string.push("L",t,",",e);break;default:null==this._circle&&(this._circle=on(this._radius)),this._string.push("M",t,",",e,this._circle);break;
    }
  },result:function(){
    if(this._string.length){
      var t=this._string.join("");return this._string=[],t;
    }return null;
  } };var sn=function(t,e,n,i){
    return function(r,o){
      var s,a,u,c=e(o),l=r.invert(i[0],i[1]),h=Re(),p=e(h),f=!1,d={ point:g,lineStart:_,lineEnd:v,polygonStart:function(){
        d.point=m,d.lineStart=b,d.lineEnd=x,a=[],s=[];
      },polygonEnd:function(){
        d.point=g,d.lineStart=_,d.lineEnd=v,a=qe(a);var t=Xe(s,l);a.length?(f||(o.polygonStart(),f=!0),Ae(a,un,t,n,o)):t&&(f||(o.polygonStart(),f=!0),o.lineStart(),n(null,null,1,o),o.lineEnd()),f&&(o.polygonEnd(),f=!1),a=s=null;
      },sphere:function(){
        o.polygonStart(),o.lineStart(),n(null,null,1,o),o.lineEnd(),o.polygonEnd();
      } };function g(e,n){
        var i=r(e,n);t(e=i[0],n=i[1])&&o.point(e,n);
      }function y(t,e){
        var n=r(t,e);c.point(n[0],n[1]);
      }function _(){
        d.point=y,c.lineStart();
      }function v(){
        d.point=g,c.lineEnd();
      }function m(t,e){
        u.push([ t,e ]);var n=r(t,e);p.point(n[0],n[1]);
      }function b(){
        p.lineStart(),u=[];
      }function x(){
        m(u[0][0],u[0][1]),p.lineEnd();var t,e,n,i,r=p.clean(),c=h.result(),l=c.length;if(u.pop(),s.push(u),u=null,l) {
          if(1&r){
            if(n=c[0],(e=n.length-1)>0){
              for(f||(o.polygonStart(),f=!0),o.lineStart(),t=0;t<e;++t) {
                o.point((i=n[t])[0],i[1]);
              }o.lineEnd();
            }
          }else {
            l>1&&2&r&&c.push(c.pop().concat(c.shift())),a.push(c.filter(an));
          }
        }
      }return d;
    };
  };function an(t){
    return t.length>1;
  }function un(t,e){
    return((t=t.x)[0]<0?t[1]-Yt-zt:Yt-t[1])-((e=e.x)[0]<0?e[1]-Yt-zt:Yt-e[1]);
  }var cn=sn((function(){
    return!0;
  }),ln,pn,[ -Ut,-Yt ]);function ln(t){
    var e,n=NaN,i=NaN,r=NaN;return{ lineStart:function(){
      t.lineStart(),e=1;
    },point:function(o,s){
      var a=o>0?Ut:-Ut,u=Jt(o-n);Jt(u-Ut)<zt?(t.point(n,i=(i+s)/2>0?Yt:-Yt),t.point(r,i),t.lineEnd(),t.lineStart(),t.point(a,i),t.point(o,i),e=0):r!==a&&u>=Ut&&(Jt(n-r)<zt&&(n-=r*zt),Jt(o-a)<zt&&(o-=a*zt),i=hn(n,i,o,s),t.point(r,i),t.lineEnd(),t.lineStart(),t.point(a,i),e=0),t.point(n=o,i=s),r=a;
    },lineEnd:function(){
      t.lineEnd(),n=i=NaN;
    },clean:function(){
      return 2-e;
    } };
  }function hn(t,e,n,i){
    var r,o,s=ie(t-n);return Jt(s)>zt?Qt((ie(e)*(o=te(i))*ie(n)-ie(i)*(r=te(e))*ie(t))/(r*o*s)):(e+i)/2;
  }function pn(t,e,n,i){
    var r;if(null==t) {
      r=n*Yt,i.point(-Ut,r),i.point(0,r),i.point(Ut,r),i.point(Ut,0),i.point(Ut,-r),i.point(0,-r),i.point(-Ut,-r),i.point(-Ut,0),i.point(-Ut,r);
    }else if(Jt(t[0]-e[0])>zt){
      var o=t[0]<e[0]?Ut:-Ut;r=n*o/2,i.point(-o,r),i.point(0,r),i.point(o,r);
    }else {
      i.point(e[0],e[1]);
    }
  }var fn=function(t,e){
    var n=te(t),i=n>0,r=Jt(n)>zt;function o(n,i,r,o){
      Oe(o,t,e,r,n,i);
    }function s(t,e){
      return te(t)*te(e)>n;
    }function a(t){
      var e,n,o,a,l;return{ lineStart:function(){
        a=o=!1,l=1;
      },point:function(h,p){
        var f,d=[ h,p ],g=s(h,p),y=i?g?0:c(h,p):g?c(h+(h<0?Ut:-Ut),p):0;if(!e&&(a=o=g)&&t.lineStart(),g!==o&&(f=u(e,d),(!f||Pe(e,f)||Pe(d,f))&&(d[0]+=zt,d[1]+=zt,g=s(d[0],d[1]))),g!==o) {
          l=0,g?(t.lineStart(),f=u(d,e),t.point(f[0],f[1])):(f=u(e,d),t.point(f[0],f[1]),t.lineEnd()),e=f;
        }else if(r&&e&&i^g){
          var _;y&n||!(_=u(d,e,!0))||(l=0,i?(t.lineStart(),t.point(_[0][0],_[0][1]),t.point(_[1][0],_[1][1]),t.lineEnd()):(t.point(_[1][0],_[1][1]),t.lineEnd(),t.lineStart(),t.point(_[0][0],_[0][1])));
        }!g||e&&Pe(e,d)||t.point(d[0],d[1]),e=d,o=g,n=y;
      },lineEnd:function(){
        o&&t.lineEnd(),e=null;
      },clean:function(){
        return l|(a&&o)<<1;
      } };
    }function u(t,e,i){
      var r=ye(t),o=ye(e),s=[ 1,0,0 ],a=ve(r,o),u=_e(a,a),c=a[0],l=u-c*c;if(!l) {
        return!i&&t;
      }var h=n*u/l,p=-n*c/l,f=ve(s,a),d=be(s,h),g=be(a,p);me(d,g);var y=f,_=_e(d,y),v=_e(y,y),m=_*_-v*(_e(d,d)-1);if(!(m<0)){
        var b=re(m),x=be(y,(-_-b)/v);if(me(x,d),x=ge(x),!i) {
          return x;
        }var E,I=t[0],N=e[0],C=t[1],S=e[1];N<I&&(E=I,I=N,N=E);var w=N-I,L=Jt(w-Ut)<zt,O=L||w<zt;if(!L&&S<C&&(E=C,C=S,S=E),O?L?C+S>0^x[1]<(Jt(x[0]-I)<zt?C:S):C<=x[1]&&x[1]<=S:w>Ut^(I<=x[0]&&x[0]<=N)){
          var T=be(y,(-_+b)/v);return me(T,d),[ x,ge(T) ];
        }
      }
    }function c(e,n){
      var r=i?t:Ut-t,o=0;return e<-r?o|=1:e>r&&(o|=2),n<-r?o|=4:n>r&&(o|=8),o;
    }return sn(s,a,o,i?[ 0,-t ]:[ -Ut,t-Ut ]);
  };function dn(t){
    return function(e){
      var n=new gn;for(var i in t) {
        n[i]=t[i];
      }return n.stream=e,n;
    };
  }function gn(){}function yn(t,e,n){
    var i=e[1][0]-e[0][0],r=e[1][1]-e[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([ 0,0 ]),null!=o&&t.clipExtent(null),de(n,t.stream(en));var s=en.result(),a=Math.min(i/(s[1][0]-s[0][0]),r/(s[1][1]-s[0][1])),u=+e[0][0]+(i-a*(s[1][0]+s[0][0]))/2,c=+e[0][1]+(r-a*(s[1][1]+s[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*a).translate([ u,c ]);
  }function _n(t,e,n){
    return yn(t,[[ 0,0 ],e ],n);
  }gn.prototype={ constructor:gn,point:function(t,e){
    this.stream.point(t,e);
  },sphere:function(){
    this.stream.sphere();
  },lineStart:function(){
    this.stream.lineStart();
  },lineEnd:function(){
    this.stream.lineEnd();
  },polygonStart:function(){
    this.stream.polygonStart();
  },polygonEnd:function(){
    this.stream.polygonEnd();
  } };var vn=16,mn=te(30*Kt),bn=function(t,e){
    return+e?En(t,e):xn(t);
  };function xn(t){
    return dn({ point:function(e,n){
      e=t(e,n),this.stream.point(e[0],e[1]);
    } });
  }function En(t,e){
    function n(i,r,o,s,a,u,c,l,h,p,f,d,g,y){
      var _=c-i,v=l-r,m=_*_+v*v;if(m>4*e&&g--){
        var b=s+p,x=a+f,E=u+d,I=re(b*b+x*x+E*E),N=ae(E/=I),C=Jt(Jt(E)-1)<zt||Jt(o-h)<zt?(o+h)/2:Zt(x,b),S=t(C,N),w=S[0],L=S[1],O=w-i,T=L-r,R=v*O-_*T;(R*R/m>e||Jt((_*O+v*T)/m-.5)>.3||s*p+a*f+u*d<mn)&&(n(i,r,o,s,a,u,w,L,C,b/=I,x/=I,E,g,y),y.point(w,L),n(w,L,C,b,x,E,c,l,h,p,f,d,g,y));
      }
    }return function(e){
      var i,r,o,s,a,u,c,l,h,p,f,d,g={ point:y,lineStart:_,lineEnd:m,polygonStart:function(){
        e.polygonStart(),g.lineStart=b;
      },polygonEnd:function(){
        e.polygonEnd(),g.lineStart=_;
      } };function y(n,i){
        n=t(n,i),e.point(n[0],n[1]);
      }function _(){
        l=NaN,g.point=v,e.lineStart();
      }function v(i,r){
        var o=ye([ i,r ]),s=t(i,r);n(l,h,c,p,f,d,l=s[0],h=s[1],c=i,p=o[0],f=o[1],d=o[2],vn,e),e.point(l,h);
      }function m(){
        g.point=y,e.lineEnd();
      }function b(){
        _(),g.point=x,g.lineEnd=E;
      }function x(t,e){
        v(i=t,e),r=l,o=h,s=p,a=f,u=d,g.point=v;
      }function E(){
        n(l,h,c,p,f,d,r,o,i,s,a,u,vn,e),g.lineEnd=m,m();
      }return g;
    };
  }var In=dn({ point:function(t,e){
    this.stream.point(t*Kt,e*Kt);
  } });function Nn(t){
    return Cn((function(){
      return t;
    }))();
  }function Cn(t){
    var e,n,i,r,o,s,a,u,c,l,h=150,p=480,f=250,d=0,g=0,y=0,_=0,v=0,m=null,b=cn,x=null,E=We,I=.5,N=bn(w,I);function C(t){
      return t=o(t[0]*Kt,t[1]*Kt),[ t[0]*h+n,i-t[1]*h ];
    }function S(t){
      return t=o.invert((t[0]-n)/h,(i-t[1])/h),t&&[ t[0]*Ht,t[1]*Ht ];
    }function w(t,r){
      return t=e(t,r),[ t[0]*h+n,i-t[1]*h ];
    }function L(){
      o=Ee(r=Ne(y,_,v),e);var t=e(d,g);return n=p-t[0]*h,i=f+t[1]*h,O();
    }function O(){
      return c=l=null,C;
    }return C.stream=function(t){
      return c&&l===t?c:c=In(b(r,N(E(l=t))));
    },C.clipAngle=function(t){
      return arguments.length?(b=+t?fn(m=t*Kt,6*Kt):(m=null,cn),O()):m*Ht;
    },C.clipExtent=function(t){
      return arguments.length?(E=null==t?(x=s=a=u=null,We):Ue(x=+t[0][0],s=+t[0][1],a=+t[1][0],u=+t[1][1]),O()):null==x?null:[[ x,s ],[ a,u ]];
    },C.scale=function(t){
      return arguments.length?(h=+t,L()):h;
    },C.translate=function(t){
      return arguments.length?(p=+t[0],f=+t[1],L()):[ p,f ];
    },C.center=function(t){
      return arguments.length?(d=t[0]%360*Kt,g=t[1]%360*Kt,L()):[ d*Ht,g*Ht ];
    },C.rotate=function(t){
      return arguments.length?(y=t[0]%360*Kt,_=t[1]%360*Kt,v=t.length>2?t[2]%360*Kt:0,L()):[ y*Ht,_*Ht,v*Ht ];
    },C.precision=function(t){
      return arguments.length?(N=bn(w,I=t*t),O()):re(I);
    },C.fitExtent=function(t,e){
      return yn(C,t,e);
    },C.fitSize=function(t,e){
      return _n(C,t,e);
    },function(){
      return e=t.apply(this,arguments),C.invert=e.invert&&S,L();
    };
  }function Sn(t){
    return function(e,n){
      var i=te(e),r=te(n),o=t(i*r);return[ o*r*ie(e),o*ie(n) ];
    };
  }function wn(t){
    return function(e,n){
      var i=re(e*e+n*n),r=t(i),o=ie(r),s=te(r);return[ Zt(e*o,i*s),ae(i&&n*o/i) ];
    };
  }var Ln=Sn((function(t){
    return re(2/(1+t));
  }));Ln.invert=wn((function(t){
    return 2*ae(t/2);
  }));var On=Sn((function(t){
    return(t=se(t))&&t/ie(t);
  }));On.invert=wn((function(t){
    return t;
  }));function Tn(t,e){
    return[ t,ne(oe((Yt+e)/2)) ];
  }Tn.invert=function(t,e){
    return[ t,2*Qt(ee(e))-Yt ];
  };function Rn(t){
    var e,n,i,r=Nn(t),o=r.center,s=r.scale,a=r.translate,u=r.clipExtent,c=null;function l(){
      var o=Ut*s(),a=r(Le(r.rotate()).invert([ 0,0 ]));return u(null==c?[[ a[0]-o,a[1]-o ],[ a[0]+o,a[1]+o ]]:t===Tn?[[ Math.max(a[0]-o,c),e ],[ Math.min(a[0]+o,n),i ]]:[[ c,Math.max(a[1]-o,e) ],[ n,Math.min(a[1]+o,i) ]]);
    }return r.scale=function(t){
      return arguments.length?(s(t),l()):s();
    },r.translate=function(t){
      return arguments.length?(a(t),l()):a();
    },r.center=function(t){
      return arguments.length?(o(t),l()):o();
    },r.clipExtent=function(t){
      return arguments.length?(null==t?c=e=n=i=null:(c=+t[0][0],e=+t[0][1],n=+t[1][0],i=+t[1][1]),l()):null==c?null:[[ c,e ],[ n,i ]];
    },l();
  }function Mn(t,e){
    return[ t,e ];
  }Mn.invert=Mn;function Pn(t,e){
    var n=te(e),i=te(t)*n;return[ n*ie(t)/i,ie(e)/i ];
  }Pn.invert=wn(Qt);function Dn(t,e){
    var n=e*e,i=n*n;return[ t*(.8707-.131979*n+i*(i*(.003971*n-.001529*i)-.013791)),e*(1.007226+n*(.015085+i*(.028874*n-.044475-.005916*i))) ];
  }Dn.invert=function(t,e){
    var n,i=e,r=25;do{
      var o=i*i,s=o*o;i-=n=(i*(1.007226+o*(.015085+s*(.028874*o-.044475-.005916*s)))-e)/(1.007226+o*(.045255+s*(.259866*o-.311325-.005916*11*s)));
    }while(Jt(n)>zt&&--r>0);return[ t/(.8707+(o=i*i)*(o*(o*o*o*(.003971-.001529*o)-.013791)-.131979)),i ];
  };function An(t,e){
    return[ te(e)*ie(t),ie(e) ];
  }An.invert=wn(ae);function Fn(t,e){
    var n=te(e),i=1+te(t)*n;return[ n*ie(t)/i,ie(e)/i ];
  }Fn.invert=wn((function(t){
    return 2*Qt(t);
  }));function $n(t,e){
    return[ ne(oe((Yt+e)/2)),-t ];
  }$n.invert=function(t,e){
    return[ -e,2*Qt(ee(t))-Yt ];
  };var kn=function(){
    var t=Rn($n),e=t.center,n=t.rotate;return t.center=function(t){
      return arguments.length?e([ -t[1],t[0] ]):(t=e(),[ t[1],-t[0] ]);
    },t.rotate=function(t){
      return arguments.length?n([ t[0],t[1],t.length>2?t[2]+90:90 ]):(t=n(),[ t[0],t[1],t[2]-90 ]);
    },n([ 0,0,90 ]).scale(159.155);
  };function Gn(t,e,n){
    n=n||{};var i=n.units,r=n.steps||64;if(!t) {
      throw new Error("geojson is required");
    }if("object"!==typeof n) {
      throw new Error("options must be an object");
    }if("number"!==typeof r) {
      throw new Error("steps must be an number");
    }if(void 0===e) {
      throw new Error("radius is required");
    }if(r<=0) {
      throw new Error("steps must be greater than 0");
    }r=r||64,i=i||"kilometers";var o=[];switch(t.type){
    case"GeometryCollection":return Object(Mt["c"])(t,(function(t){
      var n=jn(t,e,i,r);n&&o.push(n);
    })),Object(wt["d"])(o);case"FeatureCollection":return Object(Mt["b"])(t,(function(t){
      var n=jn(t,e,i,r);n&&Object(Mt["b"])(n,(function(t){
        t&&o.push(t);
      }));
    })),Object(wt["d"])(o);
    }return jn(t,e,i,r);
  }function jn(t,e,n,i){
    var r,o=t.properties||{},s="Feature"===t.type?t.geometry:t;if("GeometryCollection"===s.type){
      var a=[];return Object(Mt["c"])(t,(function(t){
        var r=jn(t,e,n,i);r&&a.push(r);
      })),Object(wt["d"])(a);
    }var u=Object(Lt["a"])(t),c=u[1]>50&&u[3]>50;r=c?{ type:s.type,coordinates:qn(s.coordinates,zn(s)) }:Dt(s);var l,h=new Rt["GeoJSONReader"],p=h.read(r),f=Object(wt["l"])(Object(wt["g"])(e,n),"meters"),d=Rt["BufferOp"].bufferOp(p,f),g=new Rt["GeoJSONWriter"];if(d=g.write(d),!Bn(d.coordinates)) {
      return l=c?{ type:d.type,coordinates:Vn(d.coordinates,zn(s)) }:At(d),l.geometry?l:Object(wt["c"])(l,o);
    }
  }function Bn(t){
    return Array.isArray(t[0])?Bn(t[0]):isNaN(t[0]);
  }function qn(t,e){
    return"object"!==typeof t[0]?e(t):t.map((function(t){
      return qn(t,e);
    }));
  }function Vn(t,e){
    return"object"!==typeof t[0]?e.invert(t):t.map((function(t){
      return Vn(t,e);
    }));
  }function zn(t){
    var e=Tt(t).geometry.coordinates.reverse(),n=e.map((function(t){
      return-t;
    }));return kn().center(e).rotate(n).scale(wt["b"]);
  }var Un=Gn,Yn=n("166e");function Xn(t,e,n){
    if(n=n||{},"object"!==typeof n) {
      throw new Error("options is invalid");
    }var i=n.ignoreBoundary;if(!t) {
      throw new Error("point is required");
    }if(!e) {
      throw new Error("polygon is required");
    }var r=Object(Yn["a"])(t),o=Object(Yn["b"])(e),s=e.geometry?e.geometry.type:e.type,a=e.bbox;if(a&&!1===Hn(r,a)) {
      return!1;
    }"Polygon"===s&&(o=[ o ]);for(var u=0,c=!1;u<o.length&&!c;u++) {
      if(Wn(r,o[u][0],i)){
        var l=!1,h=1;while(h<o[u].length&&!l) {
          Wn(r,o[u][h],!i)&&(l=!0),h++;
        }l||(c=!0);
      }
    }return c;
  }function Wn(t,e,n){
    var i=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var r=0,o=e.length-1;r<e.length;o=r++){
      var s=e[r][0],a=e[r][1],u=e[o][0],c=e[o][1],l=t[1]*(s-u)+a*(u-t[0])+c*(t[0]-s)===0&&(s-t[0])*(u-t[0])<=0&&(a-t[1])*(c-t[1])<=0;if(l) {
        return!n;
      }var h=a>t[1]!==c>t[1]&&t[0]<(u-s)*(t[1]-a)/(c-a)+s;h&&(i=!i);
    }return i;
  }function Hn(t,e){
    return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1];
  }var Kn=Xn,Jn=function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ staticClass:"background-div" },[ n("div",{ staticClass:"alert" },[ t.isMobileOrTablet?t._e():n("font-awesome-icon",{ attrs:{ icon:"exclamation" }}),n("p",{ staticClass:"inline-paragraph no-margin",domProps:{ innerHTML:t._s(t.alertContent) }}) ],1) ]);
    },Qn=[],Zn={ name:"AlertBanner",computed:{ isMobileOrTablet:function(){
      return this.$store.state.isMobileOrTablet;
    },i18nLocale:function(){
      return this.$i18n.locale;
    },i18nEnabled:function(){
      return!(!this.$config.i18n||!this.$config.i18n.enabled);
    },alertContent:function(){
      var t;return t=this.i18nEnabled?this.$i18n.messages[this.i18nLocale].app.bannerAlert:this.$config.alerts&&this.$config.alerts.header&&this.$config.alerts.header.content?this.$config.alerts.header.content:"<b>Until further notice:</b> Please call ahead or check hours of operation while business restrictions are still in effect.",t;
    } }},ti=Zn,ei=(n("cb31"),n("2877")),ni=Object(ei["a"])(ti,Jn,Qn,!1,null,null,null),ii=ni.exports,ri=function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ attrs:{ id:"modal" }},[ n("div",{ staticClass:"modal-container" },[ n("div",{ staticClass:"modal-wrapper" },[ n("div",{ staticClass:"modal-container-inner" },[ n("div",{ staticClass:"modal-header" },[ n("button",{ staticClass:"btn-close",attrs:{ type:"button","aria-label":"Close modal" },on:{ click:t.close }},[ n("font-awesome-icon",{ attrs:{ icon:"times" }}) ],1),t._t("header") ],2),n("hr"),n("div",{ staticClass:"modal-body" },[ t._t("body") ],2),n("div",{ staticClass:"modal-footer" },[ t._t("footer") ],2) ]) ]),n("div",{ staticClass:"modal-bg",on:{ click:t.close }}) ]) ]);
    },oi=[],si={ name:"Modal",methods:{ close:function(){
      this.$emit("close");
    } }},ai=si,ui=(n("bf75"),Object(ei["a"])(ai,ri,oi,!1,null,null,null)),ci=ui.exports,li=function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ class:t.refinePanelClass,attrs:{ id:"refine-panel-component" }},[ n("div",{ class:t.refineTitleClass+" refine-title",attrs:{ id:"refine-top",tabindex:"0",role:"button" },on:{ click:t.expandRefine }},[ n("div",{ staticClass:"slider-icon" },[ n("font-awesome-icon",{ attrs:{ icon:"sliders-h" }}) ],1),t.i18nEnabled?t._e():n("h2",{ staticClass:"refine-label-text" },[ t._v(" "+t._s(t.refineTitle)+" ") ]),t.i18nEnabled?n("h2",{ staticClass:"refine-label-text" },[ t._v(" "+t._s(t.$t("refinePanel.refine"))+" ") ]):t._e(),n("div",{ staticClass:"open-close-icon" },[ t.refineOpen&&t.retractable||t.refineOpen&&t.isMobile?n("font-awesome-icon",{ attrs:{ icon:[ t.angleIconWeight,"angle-up" ]}}):t._e(),!t.refineOpen&&t.retractable||!t.refineOpen&&t.isMobile?n("font-awesome-icon",{ attrs:{ icon:[ t.angleIconWeight,"angle-down" ]}}):t._e() ],1),!t.i18nEnabled&&t.isTablet&&t.selected.length||!t.i18nEnabled&&t.isDesktop&&t.selected.length||!t.i18nEnabled&&t.isWideScreen&&t.selected.length?n("button",{ staticClass:"clear-all",on:{ click:function(e){
        return e.preventDefault(),t.clearAll.apply(null,arguments);
      } }},[ t._v(" Clear all ") ]):t._e(),t.i18nEnabled&&t.isTablet&&t.selected.length||t.i18nEnabled&&t.isDesktop&&t.selected.length||t.i18nEnabled&&t.isWideScreen&&t.selected.length?n("button",{ staticClass:"clear-all",domProps:{ innerHTML:t._s(t.$t("refinePanel.clearAll")) },on:{ click:function(e){
        return e.preventDefault(),t.clearAll.apply(null,arguments);
      } }}):t._e(),t.isTablet||t.isDesktop||t.isWideScreen?n("div",{ staticClass:"selected-boxes columns",attrs:{ id:"selected-boxes" },on:{ click:t.clickBox }},[ t._l(t.selected,(function(e){
        return"categoryField_value"!==t.refineType?n("button",{ staticClass:"box-value column is-narrow",on:{ click:function(n){
          return t.closeBox(e);
        } }},[ t._v(" "+t._s(t.$t(t.getBoxValue(e)))+" "),n("font-awesome-icon",{ staticClass:"fa-x",attrs:{ icon:[ t.timesIconWeight,"times" ]}}) ],1):t._e();
      })),"categoryField_value"==t.refineType&&t.selected.length&&t.i18nEnabled?n("button",{ staticClass:"box-value column is-narrow",on:{ click:function(e){
        return t.closeBox(t.selected);
      } }},[ t._v(" "+t._s(t.$t("sections."+t.getCategoryFieldValue(t.selected)+".header"))+" "),n("font-awesome-icon",{ staticClass:"fa-x",attrs:{ icon:[ t.timesIconWeight,"times" ]}}) ],1):t._e(),"categoryField_value"==t.refineType&&t.selected.length&&!t.i18nEnabled?n("button",{ staticClass:"box-value column is-narrow",on:{ click:function(e){
        return t.closeBox(t.selected);
      } }},[ t._v(" "+t._s(t.selected)+" "),n("font-awesome-icon",{ staticClass:"fa-x",attrs:{ icon:[ t.timesIconWeight,"times" ]}}) ],1):t._e() ],2):t._e() ]),t.isMobile&&t.refineOpen?n("div",[ t.i18nEnabled?t._e():n("div",[ n("button",{ staticClass:"clear-all",on:{ click:function(e){
        return e.preventDefault(),t.clearAll.apply(null,arguments);
      } }},[ t._v(" Clear all ") ]) ]),t.i18nEnabled?n("div",[ n("button",{ staticClass:"clear-all",domProps:{ innerHTML:t._s(t.$t("refinePanel.clearAll")) },on:{ click:function(e){
        return e.preventDefault(),t.clearAll.apply(null,arguments);
      } }}) ]):t._e() ]):t._e(),"success"===t.dataStatus&&[ "categoryField_array","multipleFields" ].includes(t.refineType)?n("div",{ directives:[{ name:"show",rawName:"v-show",value:!t.retractable&&!t.isMobile||t.refineOpen,expression:"!retractable && !isMobile || refineOpen" }],staticClass:"refine-holder",attrs:{ id:"field-div" }},[ n("checkbox",{ attrs:{ options:t.getRefineSearchList(),numOfColumns:t.NumRefineColumns,small:!t.isMobile,"text-key":"textLabel","value-key":"data" },model:{ value:t.selected,callback:function(e){
        t.selected=e;
      },expression:"selected" }}) ],1):t._e(),"success"===t.dataStatus&&"categoryField_value"==t.refineType?n("div",{ directives:[{ name:"show",rawName:"v-show",value:!t.retractable&&!t.isMobile||t.refineOpen,expression:"!retractable && !isMobile || refineOpen" }],staticClass:"refine-holder",attrs:{ id:"field-div" }},[ n("radio",{ attrs:{ options:t.refineListTranslated,"text-key":"text","value-key":"value",numOfColumns:t.NumRefineColumns,small:!t.isMobile },model:{ value:t.selected,callback:function(e){
        t.selected=e;
      },expression:"selected" }}) ],1):t._e(),"success"!==t.dataStatus||"multipleFieldGroups"!==t.refineType||t.dropdownRefine?t._e():n("div",{ directives:[{ name:"show",rawName:"v-show",value:!t.retractable&&!t.isMobile||t.refineOpen,expression:"!retractable && !isMobile || refineOpen" }],staticClass:"columns is-multiline multiple-field-groups",attrs:{ id:"multiple-field-groups-div" }},t._l(Object.keys(t.refineListTranslated),(function(e){
        return n("div",{ key:e,staticClass:"column is-narrow service-group-holder-x",attrs:{ id:"refine-list-"+e }},[ n("div",{ staticClass:"columns",attrs:{ id:"columns-div-for-checkboxes" }},[ t.refineListTranslated[e]["radio"]?n("radio",{ attrs:{ options:t.refineListTranslated[e]["radio"],"text-key":"textLabel","value-key":"data",small:!t.isMobile,"num-of-columns":t.calculateColumns(t.refineList[e]["radio"]) },model:{ value:t.selectedList["radio_"+e],callback:function(n){
          t.$set(t.selectedList,"radio_"+e,n);
        },expression:"selectedList['radio_'+ind]" }},[ n("div",{ class:t.isMobile?"large-label":"small-label",attrs:{ slot:"label" },slot:"label" },[ t._v(" "+t._s(t.$t(e+".category"))+" ") ]) ]):t._e(),t.refineListTranslated[e]["checkbox"]?n("checkbox",{ attrs:{ options:t.refineListTranslated[e]["checkbox"],small:!t.isMobile,"text-key":"textLabel","value-key":"data",shrinkToFit:"true","num-of-columns":t.calculateColumns(t.refineList[e]["checkbox"]) },model:{ value:t.selectedList[e],callback:function(n){
          t.$set(t.selectedList,e,n);
        },expression:"selectedList[ind]" }},[ n("div",{ class:t.isMobile?"large-label":"small-label",attrs:{ slot:"label" },slot:"label" },[ t._v(" "+t._s(t.$t(e+".category"))+" "),!t.isMobile&&t.refineListTranslated[e]["tooltip"]?n("icon-tool-tip",{ attrs:{ tip:t.refineListTranslated[e]["tooltip"],"circle-type":t.click,position:"bottom" }}):t._e(),t.isMobile&&t.refineListTranslated[e]["tooltip"]?n("div",{ staticClass:"mobile-tooltip" },[ n("font-awesome-icon",{ staticClass:"fa-infoCircle",attrs:{ icon:"info-circle" }}),t._v(" "+t._s(t.$t(t.refineListTranslated[e]["tooltip"]))+" ") ],1):t._e() ],1) ]):t._e() ],1) ]);
      })),0),"success"===t.dataStatus&&"multipleFieldGroups"===t.refineType&&t.dropdownRefine?n("div",{ staticClass:"columns is-multiline multiple-field-groups",attrs:{ id:"multiple-field-groups-dropdown-div" }},t._l(Object.keys(t.refineListTranslated),(function(e){
        return n("div",{ key:e,staticClass:"column",attrs:{ id:"refine-list-"+e }},[ n("div",{ staticClass:"columns",attrs:{ id:"columns-div-for-checkboxes" }},[ n("div",{ staticClass:"column dropdown-checkbox-div",style:{ width:100/Object.keys(t.refineListTranslated).length+"%" }},[ n("div",{ staticClass:"dropdown-checkbox-header",on:{ click:function(n){
          return t.expandCheckbox(e);
        } }},[ t._v(" "+t._s(t.$t(e+".category"))+" ") ]),t.refineList[e].expanded?n("div",{ staticClass:"refine-dropdown" },[ t.refineListTranslated[e]["radio"]?n("radio",{ attrs:{ options:t.refineListTranslated[e]["radio"],"text-key":"textLabel","value-key":"data",small:!t.isMobile,"num-of-columns":t.calculateColumns(t.refineList[e]["radio"]) },model:{ value:t.selectedList["radio_"+e],callback:function(n){
          t.$set(t.selectedList,"radio_"+e,n);
        },expression:"selectedList['radio_'+ind]" }},[ n("div",{ attrs:{ slot:"label" },slot:"label" }) ]):t._e(),t.refineListTranslated[e]["checkbox"]?n("checkbox",{ attrs:{ options:t.refineListTranslated[e]["checkbox"],small:!t.isMobile,"text-key":"textLabel","value-key":"data",shrinkToFit:"true","num-of-columns":t.calculateColumns(t.refineList[e]["checkbox"]) },model:{ value:t.selectedList[e],callback:function(n){
          t.$set(t.selectedList,e,n);
        },expression:"selectedList[ind]" }},[ n("div",{ attrs:{ slot:"label" },slot:"label" }) ]):t._e() ],1):t._e() ]) ]) ]);
      })),0):t._e(),"success"===t.dataStatus&&"multipleDependentFieldGroups"===t.refineType?n("div",{ staticClass:"columns is-multiline multiple-field-groups",attrs:{ id:"multiple-dependent-field-groups-div" }},t._l(Object.keys(t.refineListTranslated),(function(e){
        return n("div",{ key:e,staticClass:"column is-narrow service-group-holder-x",attrs:{ id:"refine-list-"+e }},[ n("div",{ staticClass:"columns",attrs:{ id:"columns-div-for-checkboxes" }},[ n("div",{ staticClass:"column" },[ t.refineListTranslated[e]["radio"]?n("radio",{ attrs:{ options:t.refineListTranslated[e]["radio"],"text-key":"textLabel","value-key":"data","num-of-columns":1,small:!t.isMobile },model:{ value:t.selectedList["radio_"+e],callback:function(n){
          t.$set(t.selectedList,"radio_"+e,n);
        },expression:"selectedList['radio_'+ind]" }},[ n("div",{ attrs:{ slot:"label" },slot:"label" },[ t._v(" "+t._s(t.$t(e+".category"))+" "),Object.keys(t.infoCircles).includes(e)?n("icon-tool-tip",{ attrs:{ item:e,circleData:t.infoCircles[e],circleType:"click" }}):t._e() ],1) ]):t._e(),n("checkbox",{ attrs:{ options:t.refineListTranslated[e]["checkbox"],"num-of-columns":1,small:!t.isMobile,"text-key":"textLabel","value-key":"data",shrinkToFit:"true" },model:{ value:t.selectedList[e],callback:function(n){
          t.$set(t.selectedList,e,n);
        },expression:"selectedList[ind]" }},[ t.refineListTranslated[e]["radio"]?t._e():n("div",{ attrs:{ slot:"label" },slot:"label" },[ t._v(" "+t._s(t.$t(e+".category"))+" "),Object.keys(t.infoCircles).includes(e)?n("icon-tool-tip",{ attrs:{ item:e,circleData:t.infoCircles[e],circleType:"click" }}):t._e() ],1) ]) ],1) ]) ]);
      })),0):t._e(),t.isMobile&&t.refineOpen?n("div",{ staticClass:"columns is-mobile mobile-clear-all" },[ t.i18nEnabled?t._e():n("div",{ staticClass:"column is-narrow add-margin-left small-side-padding" },[ n("button",{ staticClass:"button apply-filters-button medium-side-padding",on:{ click:function(e){
        t.expandRefine(),t.scrollToTop();
      } }},[ n("div",{ staticClass:"apply-filters-text" },[ t._v(" Apply filters ") ]) ]) ]),t.i18nEnabled?n("div",{ staticClass:"column is-narrow add-margin-left small-side-padding" },[ n("div",{ staticClass:"button apply-filters-button medium-side-padding",on:{ click:function(e){
        t.expandRefine(),t.scrollToTop();
      } }},[ n("div",{ staticClass:"apply-filters-text",domProps:{ innerHTML:t._s(t.$t("refinePanel.applyFilters")) }}) ]) ]):t._e() ]):t._e() ]);
    },hi=[],pi=n("2909");n("a4d3"),n("b64b");function fi(t,e){
    if(null==t) {
      return{};
    }var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++) {
      n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);
    }return r;
  }function di(t,e){
    if(null==t) {
      return{};
    }var n,i,r=fi(t,e);if(Object.getOwnPropertySymbols){
      var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++) {
        n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n]);
      }
    }return r;
  }var gi=n("53ca");n("8172"),n("efec"),n("e01a"),n("d3b7"),n("d9e2"),n("a9e3");function yi(t,e){
    if("object"!==Object(gi["a"])(t)||null===t) {
      return t;
    }var n=t[Symbol.toPrimitive];if(void 0!==n){
      var i=n.call(t,e||"default");if("object"!==Object(gi["a"])(i)) {
        return i;
      }throw new TypeError("@@toPrimitive must return a primitive value.");
    }return("string"===e?String:Number)(t);
  }function _i(t){
    var e=yi(t,"string");return"symbol"===Object(gi["a"])(e)?e:String(e);
  }n("da0f"),n("f0c9"),n("f196"),n("eafe"),n("6589"),n("221e");var vi=n("ecee"),mi=n("2f62"),bi=function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ staticClass:"input-wrap input-checkbox",class:t.checkRadioClasses },[ n("fieldset",[ n("legend",[ t.label?[ t._v(" "+t._s(t.label)+" ") ]:[ t._t("label") ] ],2),t.error?[ n("div",{ staticClass:"input-error-msg" },[ t._m(0),n("span",[ t._v(t._s(t.error)) ]) ]) ]:t._e(),t.desc?n("div",{ staticClass:"is-field-info" },[ t._v(" "+t._s(t.desc)+" ") ]):[ t.$slots["desc"]?n("div",{ staticClass:"is-field-info" },[ t._t("desc") ],2):t._e() ],n("div",{ style:"columns: "+t.numOfColumns+" auto",attrs:{ id:"cb-group-"+t.id }},t._l(t.options,(function(e,i){
        return n("div",{ key:"k-"+i,staticClass:"control" },[ n("input",t._g(t._b({ directives:[{ name:"model",rawName:"v-model",value:t.localValue,expression:"localValue" }],staticClass:"is-checkradio",attrs:{ id:"cb-"+i+"-"+t.id,name:"cb-"+i+"-"+t.id,type:"checkbox","aria-checked":t.value.includes(t.optionValue(e,i)),role:"checkbox" },domProps:{ value:t.optionValue(e,i),checked:Array.isArray(t.localValue)?t._i(t.localValue,t.optionValue(e,i))>-1:t.localValue },on:{ change:function(n){
          var r=t.localValue,o=n.target,s=!!o.checked;if(Array.isArray(r)){
            var a=t.optionValue(e,i),u=t._i(r,a);o.checked?u<0&&(t.localValue=r.concat([ a ])):u>-1&&(t.localValue=r.slice(0,u).concat(r.slice(u+1)));
          }else {
            t.localValue=s;
          }
        } }},"input",e.attrs||{},!1),t.inputListeners)),n("label",{ attrs:{ for:"cb-"+i+"-"+t.id }},[ t._v(" "+t._s(t.textKey?e[t.textKey]:e)+" "),t.isMobile&&e.tooltip?n("div",{ staticClass:"mobile-tooltip" },[ n("font-awesome-icon",{ staticClass:"fa-infoCircle",attrs:{ icon:"info-circle" }}),t._v(" "+t._s(e.tooltip.tip)+" ") ],1):t._e() ]),!t.isMobile&&e.tooltip?n("icon-tool-tip",{ attrs:{ tip:e.tooltip.tip,"circle-type":t.tooltipType,multiline:e.tooltip.multiline }}):t._e() ],1);
      })),0) ],2) ]);
    },xi=[ function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{ staticClass:"icon" },[ n("i",{ staticClass:"fas fa-exclamation-circle" }) ]);
    } ];n("dd4b"),n("db80");const Ei={ props:{ id:{ type:String,default:()=>"ta_"+Math.random().toString(12).substring(2,8) },errors:{ type:[ Array,String ],default(){
    return"";
  } }},watch:{ error(){
    this.hasError();
  } },computed:{ error(){
    return Array.isArray(this.errors)?this.errors[0]:this.errors;
  },classes(){
    let t=[];return void 0!==this.$attrs.required&&t.push("required"),this.error&&t.push("has-error"),this.innerLabel&&t.push("inner-label"),this.forceInputBoxSize&&t.push("input-width"),t.join(" ");
  } },mounted(){
    this.hasError();
  },methods:{ hasError(){
    this.error&&this.$parent.$emit("hasError",{ [this.id]:""!==this.error });
  },optionValue(t,e){
    let n=this.options;return this.optgroup&&(n=this.ungroupedOptions),Array.isArray(n)?"string"===typeof t?t:"object"===typeof t?t[this.valueKey]:void 0:e;
  } }};var Ii=function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ class:"inline has-tooltip-hidden-mobile has-tooltip-arrow "+t.tooltipPosition+" "+t.tooltipMultiline,attrs:{ "data-tooltip":t.tip }},[ "hover"===t.circleType?n("font-awesome-icon",{ staticClass:"fa-infoCircle",attrs:{ id:t.item+"-icon",icon:"info-circle" }}):t._e(),"click"===t.circleType?n("font-awesome-icon",{ staticClass:"fa-infoCircle",attrs:{ id:t.item+"-icon",icon:"info-circle" },on:{ click:t.infoClick }}):t._e(),t.active?n("div",{ class:t.tipClass,style:t.tooltipStyle,attrs:{ id:t.item+"-tooltip" },domProps:{ innerHTML:t._s(t.circleData.html) }}):t._e() ],1);
    },Ni=[],Ci={ props:{ item:{},tip:{},circleData:{},circleType:{ type:String,default:"hover" },position:{ type:String,default:"right" },multiline:{ type:Boolean,default:!1 }},data:function(){
      return{ active:!1,tipClass:"popup-tip",tooltipStyle:{}};
    },computed:{ tooltipPosition:function(){
      var t;return"right"===this.position?t="has-tooltip-right":"bottom"===this.position&&(t="has-tooltip-bottom"),t;
    },tooltipMultiline:function(){
      var t;return this.multiline&&(t="has-tooltip-multiline"),t;
    } },methods:{ infoClick:function(t){
      this.active=!this.active;var e=this.$props.item+"-icon",n=document.getElementById(e),i=n.getBoundingClientRect(),r=document.getElementById("app"),o=window.getComputedStyle(r),s=o.getPropertyValue("width"),a=parseInt(s.replace("px","")),u=a-i.right;console.log("iconToolTip mounted, iconStyle:",i,"rootWidthNum:",a,"gap:",u),this.tooltipStyle=u<250?{ top:"-20px",right:"10px" }:{ top:"-20px" };
    },infoOn:function(){
      this.active=!0;var t=this.$props.item+"-icon",e=document.getElementById(t),n=e.getBoundingClientRect(),i=document.getElementById("app"),r=window.getComputedStyle(i),o=r.getPropertyValue("width"),s=parseInt(o.replace("px","")),a=s-n.right;console.log("iconToolTip mounted, iconStyle:",n,"rootWidthNum:",s,"gap:",a),this.tooltipStyle=a<250?{ top:n.top+20+"px",right:"10px" }:{ top:n.top+20+"px" };
    },infoOff:function(){
      this.active=!1;
    } }},Si=Ci,wi=(n("ffdd"),Object(ei["a"])(Si,Ii,Ni,!1,null,null,null)),Li=wi.exports,Oi={ name:"Checkbox",mixins:[ Ei ],inheritAttrs:!1,components:{ IconToolTip:Li },props:{ options:{ type:[ Object,Array ],default:function(){
      return{ "option-1":"Option 1","option-2":"Option 2","option-3":"Option 3" };
    } },textKey:{ type:String,default:"" },valueKey:{ type:String,default:"" },value:{ type:[ Array ],default:function(){
      return[];
    } },label:{ type:String,default:"" },desc:{ type:String,default:"" },numOfColumns:{ type:[ String,Number ],default:1 },small:{ type:Boolean,default:!1 }},data:function(){
      return{ localValue:this.value };
    },computed:{ tooltipType:function(){
      var t;return t=(this.isMobile,"hover"),t;
    },inputListeners:function(){
      delete this.$listeners["input"];var t=this;return Object.assign({},this.$listeners,{ change:function(e){
        t.$emit("change",t.localValue),t.$emit("input",t.localValue);
      } });
    },checkRadioClasses:function(){
      return this.small?"".concat(this.classes," small-checkradio"):this.classes;
    } },watch:{ value:function(t){
      this.localValue=t;
    } },methods:{ testFunc:function(t){
      console.log("testFunc, option:",t);
    } }},Ti=Oi,Ri=(n("65ed"),Object(ei["a"])(Ti,bi,xi,!1,null,null,null)),Mi=Ri.exports,Pi=n("6502"),Di={ components:{ Checkbox:Mi,Radio:Pi["g"],IconToolTip:Li },props:{ refineTitle:{ type:String,default:"FILTER" }},data:function(){
      return{ baseUrl:Object({ NODE_ENV:"production",VUE_APP_AIRTABLE_API_KEY:"keyBHGwF2m5iiTYzN",VUE_APP_CLI_UI_URL:"",VUE_APP_MAPBOX_ACCESSTOKEN:"pk.eyJ1IjoiYWpyb3Rod2VsbCIsImEiOiJXa3ZKNDg0In0.gFdKTdvy550fY_iy16YkSA",VUE_APP_PUBLICPATH:"/",BASE_URL:"/" }).VUE_APP_BASE_URL,refineList:null,selected:[],selectedList:{}};
    },computed:Object(o["a"])(Object(o["a"])({ angleIconWeight:function(){
      var t="fas",e=Object(vi["c"])({ prefix:"far",iconName:"angle-down" });return e&&(t="far"),t;
    },timesIconWeight:function(){
      var t="fas",e=Object(vi["c"])({ prefix:"far",iconName:"times" });return e&&(t="far"),t;
    },dropdownRefine:function(){
      var t;return t=!!this.$config.dropdownRefine,t;
    },NumRefineColumns:function(){
      var t;return t=this.isMobile?1:4,t;
    },selectedListCompiled:function(){
      for(var t=[],e=0,n=Object.keys(this.$data.selectedList);e<n.length;e++){
        var i=n[e];if(console.log("in selectedListCompiled computed, value:",i,i.split("_")[0]),"radio"==i.split("_")[0]) {
          t.push(this.$data.selectedList[i]);
        }else{
          var r,o=Object(a["a"])(this.$data.selectedList[i]);try{
            for(o.s();!(r=o.n()).done;){
              var s=r.value;t.push(s);
            }
          }catch(u){
            o.e(u);
          }finally{
            o.f();
          }
        }
      }return t;
    },refineListTranslated:function(){
      var t={},e=[];if("categoryField_value"===this.refineType){
        var n,i=Object(a["a"])(this.$data.refineList);try{
          for(i.s();!(n=i.n()).done;){
            var r=n.value;e.push({ value:r.data,text:this.$t(r.data) }),console.log("refineListTranslated computed, category:",r,"mainArray:",e);
          }
        }catch(A){
          i.e(A);
        }finally{
          i.f();
        }return e;
      }if("multipleFieldGroups"!==this.refineType&&"multipleDependentFieldGroups"!==this.refineType){
        var o,s=Object(a["a"])(this.$data.refineList);try{
          for(s.s();!(o=s.n()).done;){
            var u=o.value;e.push({ value:u,text:this.$t(u) }),console.log("refineListTranslated computed, category:",u,"this.$t(category):",this.$t(u),"mainArray:",e);
          }
        }catch(A){
          s.e(A);
        }finally{
          s.f();
        }return e;
      }if("multipleFieldGroups"==this.refineType){
        if(this.$data.refineList) {
          for(var c=0,l=Object.keys(this.$data.refineList);c<l.length;c++){
            var h=l[c];t[h]={};for(var p=0,f=Object.keys(this.$data.refineList[h]);p<f.length;p++){
              var d=f[p];if("tooltip"!==d){
                t[h][d]=[];for(var g=0,y=Object.keys(this.$data.refineList[h][d]);g<y.length;g++){
                  var _=y[g],v=this.$data.refineList[h][d][_].unique_key,m=this.$t(this.$data.refineList[h][d][_].box_label),b=void 0;this.$data.refineList[h][d][_].tooltip&&(b={},b.tip=this.$t(this.$data.refineList[h][d][_].tooltip.tip),b.multiline=this.$data.refineList[h][d][_].tooltip.multiline);var x={ data:v,textLabel:m,tooltip:b };t[h][d].push(x);
                }
              }else {
                t[h][d]=this.$t(this.$data.refineList[h][d].tip);
              }
            }
          }
        }return t;
      }for(var E=0,I=Object.keys(this.$data.refineList);E<I.length;E++){
        var N=I[E];t[N]={};for(var C=0,S=Object.keys(this.$data.refineList[N]);C<S.length;C++){
          var w=S[C];t[N][w]=[];for(var L=0,O=Object.keys(this.$data.refineList[N][w]);L<O.length;L++){
            var T=O[L],R=this.$data.refineList[N][w][T].unique_key,M=this.$t(this.$data.refineList[N][w][T].box_label),P=void 0;this.$data.refineList[N][w][T].tooltip&&(P=this.$t(this.$data.refineList[N][w][T].tooltip));var D={ data:R,textLabel:M,tooltip:P };t[N][w].push(D);
          }
        }
      }return t;
    },retractable:function(){
      var t=!1;return this.$config.retractableRefine&&(t=!0),t;
    },refineTitleClass:function(){
      var t;return this.retractable&&(t="retractable-refine-title"),t;
    },refinePanelClass:function(){
      var t;return this.isMobile?t=this.refineOpen?"refine-panel refine-panel-open invisible-scrollbar":"refine-panel refine-panel-closed invisible-scrollbar":this.retractable?this.refineOpen?this.refineOpen&&(t="refine-panel refine-retractable-open refine-panel-non-mobile invisible-scrollbar"):t="refine-panel refine-retractable-closed refine-panel-non-mobile-closed invisible-scrollbar":this.$config.dropdownRefine?(console.log("dropdownRefine is used"),t="refine-panel refine-dropdown-closed refine-panel-non-mobile-closed invisible-scrollbar"):t="refine-panel refine-panel-non-mobile invisible-scrollbar",t;
    },infoCircles:function(){
      var t={};return this.$config.infoCircles&&(t=this.$config.infoCircles),t;
    },refineType:function(){
      if(this.$config.refine) {
        return this.$config.refine.type;
      }
    } },Object(mi["b"])([ "sources","geocode","selectedServices" ])),{},{ refineOpen:function(){
      return this.$store.state.refineOpen;
    },i18nEnabled:function(){
      return!(!this.$config.i18n||!this.$config.i18n.enabled);
    },addressEntered:function(){
      var t;return"success"===this.geocode.status&&(t=this.geocode.data.properties.street_address),t;
    },keywordsEntered:function(){
      return this.$store.state.selectedKeywords.toString();
    },dataStatus:function(){
      var t;return this.$store.state.sources[this.$appType]&&(t=this.$store.state.sources[this.$appType].status),t;
    },database:function(){
      if(this.$store.state.sources[this.$appType]&&this.$store.state.sources[this.$appType].data) {
        return this.$store.state.sources[this.$appType].data.rows||this.$store.state.sources[this.$appType].data.features||this.$store.state.sources[this.$appType].data;
      }
    },i18nLocale:function(){
      return this.$i18n.locale;
    } }),watch:{ refineOpen:function(t){
      var e=this;this.$nextTick((function(){
        e.$store.map.resize();
      }));
    },database:function(t){
      this.getRefineSearchList();
    },selected:function(t,e){
      var n;"categoryField_value"!==this.refineType?(n=t.filter((function(t){
        return!e.includes(t);
      })),n.length&&this.$gtag.event("refine-checkbox-click",{ event_category:this.$store.state.gtag.category,event_label:n[0] })):(n=t,n.length&&this.$gtag.event("refine-checkbox-click",{ event_category:this.$store.state.gtag.category,event_label:n })),console.log("watch selected is firing, nextSelected:",t,"oldSelected:",e,"newSelection:",n),this.$store.commit("setSelectedServices",t),"categoryField_value"!==this.refineType&&t.length?this.$router.push({ query:Object(o["a"])(Object(o["a"])({},this.$route.query),{ services:t.join(",") }) }):this.$router.push({ query:Object(o["a"])(Object(o["a"])({},this.$route.query),{ services:t }) });
    },selectedListCompiled:function(t){
      window.theRouter=this.$router,this.$store.commit("setSelectedServices",t),"string"===typeof t&&(t=[ t ]),console.log("RefinePanel watch selectedListCompiled is firing, nextSelected",t),t.length&&this.$router.push({ query:Object(o["a"])(Object(o["a"])({},this.$route.query),{ services:t.join(",") }) });
    },selectedServices:function(t){
      this.$data.selected=t;
    } },beforeMount:function(){
      this.$route.query.services&&(console.log("RefinePanel.vue beforeMount is running, this.selectedList:",this.selectedList,"this.$route.query:",this.$route.query,"this.$route.query.services.split(","):",this.$route.query.services.split(",")),"categoryField_value"!==this.refineType?this.$data.selected=this.$route.query.services.split(","):this.$data.selected=this.$route.query.services);
    },mounted:function(){
      var t=document.querySelector("#refine-top");function e(t){
        console.log("activate, e:",t,"e.path[0]:",t.path[0]),"keypress"===t.type&&[ 13,32 ].includes(t.keyCode)&&"refine-top"==t.srcElement.id&&this.expandRefine();
      }t.addEventListener("keypress",e.bind(this));
    },methods:{ getCategoryFieldValue:function(t){
      for(var e,n=t.toLowerCase().replaceAll(" ",""),i=Object.keys(this.$i18n.messages[this.i18nLocale].sections),r=0,o=i;r<o.length;r++){
        var s=o[r],a=s.toLowerCase().replaceAll(" ","");a!==n&&a!==n+"s"||(e=s);
      }return e;
    },findTooltip:function(t){
      return console.log("findTooltip is running, test:",t),"test";
    },getBoxValue:function(t){
      var e;return console.log("getBoxValue is running, box:",t),t&&(e=t.replace("_",".")),e;
    },calculateColumns:function(t){
      var e;return e=this.isMobile||this.$config.refine.columns?1:Object.keys(t).length,e;
    },clickedRefineBox:function(t){
      console.log("clickedRefineBox, item:",t,"typeof item:",Object(gi["a"])(t),"this.$data.selected:",this.$data.selected);var e=this.$data,n=this.$gtag,i=this.$store.state.gtag.category;setTimeout((function(){
        "object"===Object(gi["a"])(t)?e.selected.includes(t.unique_key)&&n.event("refine",{ event_category:i,event_label:t.unique_key }):"string"===typeof t&&(console.log("data.selected:",e.selected),e.selected.includes(t)&&n.event("refine",{ event_category:i,event_label:t }));
      }),2e3);
    },clickBox:function(t){
      console.log("clickBox is running, e:",t),t.stopPropagation();
    },closeBox:function(t){
      if("categoryField_value"!==this.refineType){
        var e=t.split("_")[0];if(console.log("closeBox is running, section:",e,"this.$data.selected:",this.$data.selected,"this.$data.selected[section]:",this.$data.selected[e]),this.$data.selectedList[e]){
          console.log("it's there in selectedList");var n=this.$data.selectedList[e].indexOf(t);this.$data.selectedList[e].splice(n,1);
        }else if(this.$data.selectedList["radio_"+e]){
          console.log("1 it's there in selectedList WITH radio, box:",t,'this.$data.selectedList["radio_" + section]:',this.$data.selectedList["radio_"+e]);var i="radio_"+e,r=this.$data.selectedList,o=(r[i],di(r,[ i ].map(_i)));this.$data.selectedList=o,console.log("2 exceptBoth:",o,"it's there in selectedList WITH radio, box:",t,'this.$data.selectedList["radio_" + section]:',this.$data.selectedList["radio_"+e]);
        }else if(this.$data.selected.includes(e)){
          console.log("its in the array");var s=this.$data.selected.indexOf(e);this.$data.selected.splice(s,1);
        }else {
          console.log("not there in selected list");
        }
      }else {
        this.$data.selectedList=[];
      }
    },clearAll:function(t){
      if(t.stopPropagation(),console.log("RefinePanel clearAll is running, e:",t),"multipleFieldGroups"===this.refineType||"multipleDependentFieldGroups"===this.refineType) {
        for(var e=0,n=Object.keys(this.$data.selectedList);e<n.length;e++){
          var i=n[e];if(console.log("this.$data.selectedList[checkbox]:",this.$data.selectedList[i]),Array.isArray(this.$data.selectedList[i])) {
            this.$data.selectedList[i].splice(0);
          }else{
            var r=this.$data.selectedList,o=(r[i],di(r,[ i ].map(_i)));this.$data.selectedList=o;
          }
        }
      }else {
        this.selected=[];
      }
    },getRefineSearchList:function(){
      var t=this;console.log("getRefineSearchList is running");var e=this.database;e.records&&(e=e.records);var n,i,r="",o=[];if(!this.$config.refine||this.$config.refine&&[ "categoryField_array","categoryField_value" ].includes(this.$config.refine.type)){
        console.log("in getRefineSearchList, refineData:",e),e.forEach((function(e){
          if(t.$config.refine){
            var n=t.$config.refine.value(e);r+="".concat(n,",");
          }else {
            e.services_offered&&(r+="".concat(e.services_offered,","));
          }
        }));var s=r.split(/(,|;)/);s=s.map((function(t){
          return t.trim();
        }));var u=Object(pi["a"])(new Set(s));n=u.filter((function(t){
          return t.length>2;
        })),n.filter(Boolean);var c=n.indexOf("undefined");c>-1&&n.splice(c,1);var l=n.indexOf("null");l>-1&&n.splice(l,1),n.sort();var h,p=Object(a["a"])(n);try{
          for(p.s();!(h=p.n()).done;){
            var f=h.value,d=void 0;this.$config.infoCircles&&Object.keys(this.$config.infoCircles).includes(f)&&(d=this.$config.infoCircles[f]),o.push({ data:f,textLabel:f,tooltip:d });
          }
        }catch(J){
          p.e(J);
        }finally{
          p.f();
        }i=u.filter((function(t){
          return t.length>2;
        })),i.filter(Boolean),i.sort(),console.log("uniq:",o,"uniqPrep:",n,"uniqArray:",u,"selected:",i);
      }else {
        this.$config.refine&&"multipleFields"===this.$config.refine.type&&(o=Object.keys(this.$config.refine.multipleFields),o.sort(),i=Object.keys(this.$config.refine.multipleFields),i.sort());
      }if(this.$config.refine&&"multipleFieldGroups"===this.$config.refine.type){
        o={},i={};for(var g=0,y=Object.keys(this.$config.refine.multipleFieldGroups);g<y.length;g++){
          var _=y[g];o[_]={ expanded:!1 };for(var v=0,m=Object.keys(this.$config.refine.multipleFieldGroups[_]);v<m.length;v++){
            var b=m[v];if("tooltip"!==b){
              o[_][b]={};for(var x=0,E=Object.keys(this.$config.refine.multipleFieldGroups[_][b]);x<E.length;x++){
                var I=E[x];o[_][b][I]={},this.$config.refine.multipleFieldGroups[_][b][I].i18n_key?o[_][b][I].box_label=this.$config.refine.multipleFieldGroups[_][b][I].i18n_key:o[_][b][I].box_label=I,o[_][b][I].unique_key=this.$config.refine.multipleFieldGroups[_][b][I].unique_key,o[_][b][I].tooltip=this.$config.refine.multipleFieldGroups[_][b][I].tooltip;
              }
            }else {
              o[_][b]=this.$config.refine.multipleFieldGroups[_][b];
            }
          }
        }if(this.selected.length) {
          for(var N=0,C=Object.keys(o);N<C.length;N++) {
            for(var S=C[N],w=0,L=Object.keys(o[S]);w<L.length;w++) {
for(var O=L[w],T=0,R=Object.keys(o[S][O]);T<R.length;T++){
              var M=R[T];"checkbox"==O&&this.selected.includes(o[S][O][M].unique_key)?(i[S]||(i[S]=[]),i[S].push(o[S][O][M].unique_key)):"radio"==O&&this.selected.includes(o[S][O][M].unique_key)&&(i["radio_"+S]||(i["radio_"+S]=void 0),i["radio_"+S]=o[S][O][M].unique_key);
            }
}
          }
        }this.$data.selectedList=i;
      }if(this.$config.refine&&"multipleDependentFieldGroups"===this.$config.refine.type){
        o={},i={};for(var P=0,D=Object.keys(this.$config.refine.multipleDependentFieldGroups);P<D.length;P++){
          var A=D[P];o[A]={};for(var F=0,$=Object.keys(this.$config.refine.multipleDependentFieldGroups[A]);F<$.length;F++){
            var k=$[F];o[A][k]={};for(var G=0,j=Object.keys(this.$config.refine.multipleDependentFieldGroups[A][k]);G<j.length;G++){
              var B=j[G];o[A][k][B]={},this.$config.refine.multipleDependentFieldGroups[A][k][B].i18n_key?o[A][k][B].box_label=this.$config.refine.multipleDependentFieldGroups[A][k][B].i18n_key:o[A][k][B].box_label=B,o[A][k][B].unique_key=this.$config.refine.multipleDependentFieldGroups[A][k][B].unique_key;
            }
          }
        }if(console.log("RefinePanel end of getRefineSearchList, uniq:",o,"selected:",i,"this.selected:",this.selected),this.selected.length) {
          for(var q=0,V=Object.keys(o);q<V.length;q++) {
            for(var z=V[q],U=0,Y=Object.keys(o[z]);U<Y.length;U++) {
for(var X=Y[U],W=0,H=Object.keys(o[z][X]);W<H.length;W++){
              var K=H[W];this.selected.includes(o[z][X][K].unique_key)&&(i[z]||(i[z]=[]),i[z].push(o[z][X][K].unique_key));
            }
}
          }
        }console.log("RefinePanel end of getRefineSearchList, selected:",i),this.$data.selectedList=i;
      }return this.$data.refineList=o,o;
    },scrollToTop:function(){
      var t=document.querySelector(".refine-panel");t.scrollTo(0,0);
    },expandCheckbox:function(t){
      console.log("expandCheckbox is running"),this.refineList[t].expanded=!this.refineList[t].expanded;
    },expandRefine:function(){
      var t;t=this.refineOpen?"retract refine panel":"expand refine panel",console.log("expandRefine is running, tagValue:",t),this.$gtag.event("refine-panel-open",{ event_category:this.$store.state.gtag.category,event_label:t }),this.$store.commit("setRefineOpen",!this.refineOpen);
    },closeRefinePanel:function(){
      console.log("closeRefinePanel is running"),this.scrollToTop(),this.expandRefine(),this.clearAll();
    } }},Ai=Di,Fi=(n("c7d5"),Object(ei["a"])(Ai,li,hi,!1,null,null,null)),$i=Fi.exports,ki=function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ staticClass:"locations-panel" },[ t.shouldShowGreeting?n("div",{ staticClass:"topics-container cell medium-cell-block-y" },[ t.shouldShowGreeting&&t.hasCustomGreeting?n("custom-greeting",{ on:{ "view-list":t.clickedViewList }}):t._e() ],1):t._e(),t.shouldShowGreeting||"success"!==t.dataStatus?t._e():n("div",{ staticClass:"location-container" },[ 0===t.currentData.length?n("div",{ staticClass:"h3 no-results" },[ t.i18nEnabled?t._e():n("p",[ t._v(" We're sorry, there are no results for that search. Adjust the filters you've selected and try again. ") ]),t.i18nEnabled?n("p",{ domProps:{ innerHTML:t._s(t.$t("app.noResults")) }}):t._e() ]):t._e(),t._l(t.currentData,(function(e){
        return n("div",{ key:e._featureId },[ n("expand-collapse",{ attrs:{ item:e,"is-map-visible":t.isMapVisible }},[ t.$config.customComps&&Object.keys(t.$config.customComps).includes("expandCollapseContent")&&t.selectedResources.includes(e._featureId)?n("expandCollapseContent",{ tag:"component",attrs:{ item:e,"is-map-visible":t.isMapVisible }}):t._e(),!t.$config.customComps||!Object.keys(t.$config.customComps).includes("expandCollapseContent")&&t.selectedResources.includes(e._featureId)?n("div",{ class:t.isMobile?"main-content-mobile":"main-content" },[ n("div",{ staticClass:"columns" },[ n("div",{ staticClass:"column is-6" },[ e.street_address?n("div",{ staticClass:"columns is-mobile" },[ n("div",{ staticClass:"column is-1" },[ n("font-awesome-icon",{ attrs:{ icon:"map-marker-alt" }}) ],1),n("div",{ staticClass:"column is-11",domProps:{ innerHTML:t._s(t.parseAddress(e.street_address)) }}) ]):t._e() ]),n("div",{ staticClass:"column is-6" },[ e.phone_number?n("div",{ staticClass:"columns is-mobile" },[ n("div",{ staticClass:"column is-1" },[ n("font-awesome-icon",{ attrs:{ icon:"phone" }}) ],1),n("div",{ staticClass:"column is-11" },[ t._v(" "+t._s(e.phone_number)+" ") ]) ]):t._e(),e.email?n("div",{ staticClass:"columns is-mobile" },[ n("div",{ staticClass:"column is-1" },[ n("font-awesome-icon",{ attrs:{ icon:"envelope" }}) ],1),n("div",{ staticClass:"column is-11" },[ n("a",{ attrs:{ href:"mailto:"+e.email }},[ t._v(t._s(e.email)) ]) ]) ]):t._e(),e.website?n("div",{ staticClass:"columns is-mobile website-div" },[ n("div",{ staticClass:"column is-1" },[ n("font-awesome-icon",{ attrs:{ icon:"globe" }}) ],1),n("div",{ staticClass:"column is-11" },[ n("a",{ attrs:{ target:"_blank",href:t.makeValidUrl(e.website) }},[ t._v(" "+t._s(e.website)+" "),n("font-awesome-icon",{ attrs:{ icon:"external-link-alt" }}) ],1) ]) ]):t._e(),e.facebook_name?n("div",{ staticClass:"columns is-mobile" },[ n("div",{ staticClass:"column is-1" },[ n("font-awesome-icon",{ attrs:{ icon:[ "fab","facebook" ]}}) ],1),n("div",{ staticClass:"column is-11" },[ n("a",{ attrs:{ target:"_blank",href:e.facebook_name }},[ t._v(" Facebook ") ]) ]) ]):t._e(),e.twitter?n("div",{ staticClass:"columns is-mobile" },[ n("div",{ staticClass:"column is-1" },[ n("font-awesome-icon",{ attrs:{ icon:[ "fab","twitter" ]}}) ],1),n("div",{ staticClass:"column is-11" },[ n("a",{ attrs:{ target:"_blank",href:e.twitter }},[ t._v(" Twitter ") ]) ]) ]):t._e() ]) ]),e.services_offered?n("div",[ n("h3",[ t._v(" Services offered ") ]),n("div",{ staticClass:"columns is-multiline is-gapless" },t._l(t.parseServiceList(e.services_offered),(function(e){
          return n("div",{ key:e,staticClass:"column is-half" },[ t._v(" "+t._s(e)+" ") ]);
        })),0) ]):t._e(),e.tags&&e.tags.length?n("div",[ n("h3",[ t._v(" Tags ") ]),n("div",[ t._v(" "+t._s(t.parseTagsList(e.tags))+" ") ]) ]):t._e() ]):t._e() ],1) ],1);
      })) ],2) ]);
    },Gi=[],ji=(n("02a5"),n("4dee"),function(){
      var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ staticClass:"location-item",class:{ open:t.locationOpen }},[ n("div",{ staticClass:"columns location-row is-mobile",attrs:{ tabindex:"0" },on:{ click:t.expandLocation,keypress:function(e){
        if(!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[ " ","Spacebar" ])) {
          return null;
        }e.preventDefault();
      },keyup:[ function(e){
        return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[ " ","Spacebar" ])?null:t.expandLocation.apply(null,arguments);
      },function(e){
        return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.expandLocation.apply(null,arguments);
      } ]}},[ n("div",{ staticClass:"location-title column",class:{ "is-8":t.locationOpen&&this.$config.printView,"is-11":!t.locationOpen }},[ n("h2",{ staticClass:"h5",attrs:{ "aria-expanded":t.locationOpen }},[ t._v(" "+t._s(t.getSiteName(t.item))+" "),t.section&&!t.i18nEnabled?n("div",{ staticClass:"section-name",style:{ "background-color":t.sectionColor }},[ t._v(" "+t._s(t.sectionTitle)+" ") ]):t._e(),t.section&&t.i18nEnabled?n("div",{ staticClass:"section-name",style:{ "background-color":t.sectionColor },domProps:{ innerHTML:t._s("<b>"+t.$t(t.sectionTitle)+"</b>") }}):t._e() ]) ]),t.locationOpen&&this.$config.printView?n("div",{ staticClass:"column is-3" },[ n("button",{ staticClass:"button is-small print-view-button",on:{ click:t.openPrintView }},[ t._v(" Print View ") ]),n("button",{ staticClass:"button is-small print-button",on:{ click:t.openPrintView }},[ t._v(" Print ") ]) ]):t._e(),n("div",{ staticClass:"location-icon column is-1" },[ t.locationOpen?t._e():n("font-awesome-icon",{ staticClass:"plus-icon",attrs:{ icon:[ t.plusIconWeight,"plus" ]}}),t.locationOpen?n("font-awesome-icon",{ attrs:{ icon:[ t.plusIconWeight,"minus" ]}}):t._e() ],1) ]),n("div",{ class:t.locationClass },[ t._t("default") ],2) ]);
    }),Bi=[],qi=(n("a58a"),{ props:{ isMapVisible:{ type:Boolean,default:!0 },item:{ type:Object }},data:function(){
      return{ locationOpen:!1 };
    },mixins:[ c["a"] ],computed:{ locationClass:function(){
      var t;return t=this.locationOpen&&this.isMobile?"location-content-mobile location-open":this.locationOpen?"location-content location-open":this.isMobile?"location-content-mobile":"location-content",t;
    },plusIconWeight:function(){
      var t="fas",e=Object(vi["c"])({ prefix:"far",iconName:"plus" });return e&&(t="far"),t;
    },showLabels:function(){
      var t=!1;return this.$config.refine.showLabels&&(t=!0),t;
    },i18nEnabled:function(){
      var t;return t=!(!this.$config.i18n||!this.$config.i18n.enabled),t;
    },subsections:function(){
      return this.$config.subsections||{};
    },section:function(){
      var t;return Object.keys(this.subsections).length?t=this.subsections[this.$props.item.attributes["CATEGORY"]]:this.$config.sections&&(t=this.$props.item.site_type),t;
    },sectionItem:function(){
      var t={};return Object.keys(this.subsections).length&&(t=this.$config.sections[this.section]),t;
    },sectionTitle:function(){
      var t;return Object.keys(this.subsections).length?t=this.$config.sections[this.section].titleSingular:this.$config.sections&&(t=this.$props.item.site_type),t;
    },sectionColor:function(){
      var t;return(Object.keys(this.subsections).length||this.$config.sections)&&(t=this.$config.sections[this.section].color),t;
    },selectedResources:function(){
      return this.$store.state.selectedResources;
    },latestSelectedResourceFromMap:function(){
      return this.$store.state.map.latestSelectedResourceFromMap;
    } },watch:{ selectedResources:function(t){
      this.locationOpen||t.includes(this.$props.item._featureId)?!1===this.locationOpen?this.openLocation():this.locationOpen&&!t.includes(this.$props.item._featureId)&&(this.locationOpen=!1):this.locationOpen=!1;
    },isMapVisible:function(t){
      if(!t&&this.latestSelectedResourceFromMap&&this.latestSelectedResourceFromMap===this.item._featureId){
        var e=this.$el,n=this.isElementInViewport(e);n||e.scrollIntoView();
      }
    } },mounted:function(){
      this.selectedResources.includes(this.item._featureId)&&this.openLocation();
    },methods:{ openPrintView:function(t){
      t.stopPropagation(),console.log("openPrintView is running, e:",t,"this.$props.item._featureId:",this.$props.item._featureId),window.open("./resource-view/"+this.$props.item._featureId,"_blank");
    },openLocation:function(){
      this.locationOpen=!0;var t=this.$el,e=this.isElementInViewport(t);e||t.scrollIntoView();
    },isElementInViewport:function(t){
      var e=t.getBoundingClientRect(),n={ top:e.top>=108,left:e.left>=0,bottom:e.bottom<=(window.innerHeight||document.documentElement.clientHeight),right:e.right<=(window.innerWidth||document.documentElement.clientWidth) };return Object.values(n).every((function(t){
        return t;
      }));
    },expandLocation:function(){
      var t=this.getSiteName(this.$props.item);console.log("ExpandCollapse expandLocation is starting, siteName:",t),this.locationOpen=!this.locationOpen;var e=this.$props.item._featureId,n=[],i=null;this.locationOpen?(n.push(e),i=e,this.$gtag.event("list-click",{ event_category:this.$store.state.gtag.category,event_label:t })):n.splice(n.indexOf(e),1),this.$store.commit("setSelectedResources",n),this.$store.commit("setLatestSelectedResourceFromExpand",i);
    },makeID:function(t){
      var e;return e=t?t.replace(/\s+/g,"-").toLowerCase():"",e;
    } }}),Vi=qi,zi=(n("36f5"),Object(ei["a"])(Vi,ji,Bi,!1,null,null,null)),Ui=zi.exports,Yi=n("5da5"),Xi={ components:{ ExpandCollapse:Ui },props:{ isMapVisible:{ type:Boolean,default:!0 }},mounted:function(){
      this.$config.greeting||this.$config.customComps&&this.$config.customComps.customGreeting||this.$store.commit(setShouldShowGreeting,!1);
    },computed:Object(o["a"])(Object(o["a"])({ shouldShowGreeting:function(){
      return this.$store.state.shouldShowGreeting;
    },i18nEnabled:function(){
      var t;return t=!(!this.$config.i18n||!this.$config.i18n.enabled),t;
    },hasCustomGreeting:function(){
      var t=!1;return this.$config.customComps&&(t=Object.keys(this.$config.customComps).includes("customGreeting")),t;
    },greetingText:function(){
      var t;return t=this.$config.greeting?this.$config.greeting.message:null,t;
    },greetingOptions:function(){
      var t;return t=this.$config.greeting?this.$config.greeting.options:{},t;
    },geocode:function(){
      return this.$store.state.geocode.data;
    },geocodeStatus:function(){
      return this.$store.state.geocode.status;
    },selectedKeywords:function(){
      return this.$store.state.selectedKeywords;
    },selectedServices:function(){
      return this.$store.state.selectedServices;
    },selectedResources:function(){
      return this.$store.state.selectedResources;
    },latestSelectedResourceFromMap:function(){
      return this.$store.state.map.latestSelectedResourceFromMap;
    },orgTitle:function(){
      return"agencyname";
    } },Object(mi["b"])([ "sources" ])),{},{ currentData:function(){
      var t,e=this.$store.state.currentData,n=this.locationInfo.siteName,i=Object(gi["a"])(n);if("function"===i){
        var r=n;e.sort((function(t,e){
          var n,i=r(t,Yi["a"]),o=r(e,Yi["a"]);return i&&o&&(n=i.localeCompare(o,void 0,{ numeric:!0 })),n;
        }));
      }else {
        t=n,e.sort((function(e,n){
          if(null!=e[t]&&null!=n[t]) {
            return e[t].localeCompare(n[t]);
          }
        }));
      }return e;
    },currentDataList:function(){
      return this.currentData.map((function(t){
        return t._featureId;
      }));
    },dataStatus:function(){
      return this.$store.state.sources[this.$appType].status;
    },locationInfo:function(){
      return this.$config.locationInfo;
    } }),watch:{ geocode:function(t){
      this.$store.commit("setShouldShowGreeting",!1);
    },selectedKeywords:function(t){
      this.$store.commit("setShouldShowGreeting",!1);
    },selectedServices:function(t){
      t.length&&this.$store.commit("setShouldShowGreeting",!1);
    },selectedResources:function(t){
      this.$store.commit("setShouldShowGreeting",!1);
    } },methods:{ clickedViewList:function(){
      this.isMobile||this.$store.commit("setRefineOpen",!0),this.$store.commit("setShouldShowGreeting",!1),this.$gtag.event("click",{ event_category:this.$store.state.gtag.category,event_label:"view list" });
    },getLocationsList:function(){
      var t=this.sources[this.$appType].data.rows;return t;
    },parseAddress:function(t){
      var e=t.replace(/(Phila.+)/g,(function(t){
        return"<div>".concat(t,"</div>");
      })).replace(/^\d+\s[A-z]+\s[A-z]+/g,(function(t){
        return"<div>".concat(t,"</div>");
      })).replace(/,/,"");return e;
    },parseServiceList:function(t){
      var e=t;return e;
    },parseTagsList:function(t){
      var e=t.slice().sort().join(", ");return e;
    },makeValidUrl:function(t){
      var e=window.decodeURIComponent(t);return e=e.trim().replace(/\s/g,""),/^(:\/\/)/.test(e)?"http".concat(e):/^(f|ht)tps?:\/\//i.test(e)?e:"http://".concat(e);
    } }},Wi=Xi,Hi=(n("4977"),Object(ei["a"])(Wi,ki,Gi,!1,null,null,null)),Ki=Hi.exports,Ji=n("b37c"),Qi=n("bc6f"),Zi={ name:"Main",components:{ AppHeader:Pi["b"],MobileNav:Pi["f"],AppFooter:Pi["a"],InputForm:Pi["d"],Textbox:Pi["h"],Checkbox:Pi["c"],LangSelector:Pi["e"],AlertBanner:ii,PhilaModal:ci,RefinePanel:$i,LocationsPanel:Ki,MapPanel:Ji["a"],PhilaUiAddressInput:Qi["a"],CyclomediaWidget:function(){
      return n.e("mbmb_pvm_CyclomediaWidget").then(n.bind(null,"65c9"));
    } },mixins:[ c["a"] ],data:function(){
      return{ publicPath:"/",isMapVisible:!1,isModalOpen:!1,isAlertModalOpen:!1,isLarge:!0,buffer:null,buttonText:"Toggle to map",appLink:"/",myValue:"",brandingImage:null,brandingLink:{ href:"https://www.phila.gov/",target:"_blank" },searchString:null,refineEnabled:!0,searchBarType:"address",addressInputPlaceholder:null };
    },computed:{ zipcodeData:function(){
      var t;if(this.$store.state.sources.zipcodes){
        var e=this.$store.state.sources.zipcodes.data,n=this.selectedZipcode;e&&n&&(t=e.features.filter((function(t){
          return t.attributes.CODE==n;
        }))[0]);
      }return t;
    },selectedZipcode:function(){
      return this.$store.state.selectedZipcode;
    },refineTitle:function(){
      return this.$config.refine.title;
    },projection4326:function(){
      return"+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    },projection2272:function(){
      return"+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs";
    },projection3857:function(){
      return"+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs";
    },shouldShowGreeting:function(){
      return this.$store.state.shouldShowGreeting;
    },locationsPanelClass:function(){
      var t;return t=this.isMobile?"invisible-scrollbar":"",t;
    },footerLinks:function(){
      if(this.$config.footer){
        var t,e=[],n=Object(a["a"])(this.$config.footer);try{
          for(n.s();!(t=n.n()).done;){
            for(var i=t.value,r={},o=0,s=Object.keys(i);o<s.length;o++){
              var u=s[o];this.i18nEnabled&&"text"===u?r[u]=this.$i18n.messages[this.i18nLocale].app[i[u]]:r[u]=i[u];
            }e.push(r);
          }
        }catch(c){
          n.e(c);
        }finally{
          n.f();
        }return e;
      }
    },appTitle:function(){
      var t;return this.$config.app.title?t=this.$config.app.title:this.i18nEnabled&&(t=this.$i18n.messages[this.i18nLocale].app.title),t;
    },appSubTitle:function(){
      var t;return this.$config.app.subtitle?t=this.$config.app.subtitle:this.i18nEnabled&&(t=this.$i18n.messages[this.i18nLocale].app.subtitle),t;
    },i18nLocale:function(){
      return this.$i18n.locale;
    },i18nLanguages:function(){
      var t=[];if(this.$config.i18n.languages) {
        console.log("in if, this.$config.i18n.languages"),t=this.$config.i18n.languages;
      }else {
        for(var e=0,n=Object.keys(this.$i18n.messages);e<n.length;e++){
          var i=n[e],r={};r.language=i,r.title=this.$i18n.messages[i].language,t.push(r);
        }
      }return console.log("end of i18nLanguages, values:",t),t;
    },feedbackLink:function(){
      var t;return this.$config.footer&&this.$config.footer.feedback&&this.$config.footer.feedback.link&&(t=this.$config.footer.feedback.link),t;
    },mapType:function(){
      return this.$store.state.map.type;
    },alertResponse:function(){
      return this.$store.state.alertResponse||null;
    },shouldShowHeaderAlert:function(){
      var t=!1;return this.$config.alerts&&this.$config.alerts.header&&(t=this.$config.alerts.header.enabled(this.$store.state)),t;
    },alertModalHeader:function(){
      var t="";return this.$config.alerts&&this.$config.alerts.modal&&this.$config.alerts.modal.header&&(t=this.$config.alerts.modal.header),t;
    },alertModalBody:function(){
      var t="";return this.$config.alerts&&this.$config.alerts.modal&&this.$config.alerts.modal.body&&(t=this.$config.alerts.modal.body),t;
    },i18nEnabled:function(){
      return!(!this.$config.i18n||!this.$config.i18n.enabled);
    },geocodeStatus:function(){
      return this.$store.state.geocode.status;
    },geocodeResult:function(){
      return this.$store.state.geocode.data||{};
    },geocodeGeom:function(){
      return this.geocodeResult.geometry;
    },bufferList:function(){
      return this.$store.state.bufferList;
    },selectedKeywords:function(){
      return this.$store.state.selectedKeywords;
    },selectedServices:function(){
      return this.$store.state.selectedServices;
    },dataStatus:function(){
      var t;return this.$store.state.sources[this.$appType]&&(t=this.$store.state.sources[this.$appType].status),t;
    },database:function(){
      var t=this.$store.state.sources[this.$appType].data.rows||this.$store.state.sources[this.$appType].data.features||this.$store.state.sources[this.$appType].data.records;console.log("computed database is running, database:",t,"this.$appType:",this.$appType);for(var e=0,n=Object.entries(t);e<n.length;e++){
        var i=Object(s["a"])(n[e],2),r=i[0],o=i[1];if(this.$config.hiddenRefine) {
          for(var a in this.$config.hiddenRefine){
            var u=this.$config.hiddenRefine[a],c=u(o);!1===c&&delete t[r];
          }
        }for(var l=0,h=Object.entries(o);l<h.length;l++){
          var p=Object(s["a"])(h[l],2),f=p[0],d=p[1];"hide_on_finder"==f&&1==d&&delete t[r];
        }
      }var g=t.filter((function(t){
        return!0;
      }));return g;
    },shouldLoadCyclomediaWidget:function(){
      return this.$config.cyclomedia&&this.$config.cyclomedia.enabled&&!this.isMobileOrTablet;
    },cyclomediaActive:function(){
      return this.$store.state.cyclomedia.active;
    },cycloLatlng:function(){
      if(null!==this.$store.state.cyclomedia.orientation.xyz){
        var t=this.$store.state.cyclomedia.orientation.xyz;return[ t[1],t[0] ];
      }var e=this.$config.map.center;return e;
    },cycloRotationAngle:function(){
      return 57.29577951307855*this.$store.state.cyclomedia.orientation.yaw;
    },cycloHFov:function(){
      return this.$store.state.cyclomedia.orientation.hFov;
    },selectedResources:function(){
      return this.$store.state.selectedResources;
    },sourcesWatched:function(){
      var t=Object.keys(this.$store.state.sources),e=t.indexOf("compiled");if(e>-1){
        t.splice(e,1);var n,i={},r=Object(a["a"])(t);try{
          for(r.s();!(n=r.n()).done;){
            var o=n.value;i[o]=this.$store.state.sources[o].data;
          }
        }catch(s){
          r.e(s);
        }finally{
          r.f();
        }return i;
      }return null;
    },layoutDescription:function(){
      var t;return t=this.isMobile&&!this.refineEnabled?"mobileNoRefine":this.isMobile&&this.refineEnabled&&this.refineOpen?"mobileRefineOpen":this.isMobile&&this.refineEnabled&&!this.refineOpen?"mobileRefineClosed":this.refineEnabled?"nonMobileRefine":"nonMobileNoRefine",t;
    },refinePanelClass:function(){
      var t;return t=this.isMobile&&this.refineOpen?"mobile-refine-panel-holder-open":this.refineOpen?"refine-panel-holder-open":"refine-panel-holder",t;
    },locationsPanelVisible:function(){
      return!this.isMobile||"mobileRefineOpen"!==this.layoutDescription&&!this.isMapVisible;
    },mapPanelVisible:function(){
      return!this.isMobile||"mobileRefineOpen"!==this.layoutDescription&&this.isMapVisible;
    },toggleButtonVisible:function(){
      return this.isMobile&&"mobileRefineOpen"!==this.layoutDescription;
    },refineOpen:function(){
      return this.$store.state.refineOpen;
    } },watch:{ zipcodeData:function(t){
      if(t){
        var e={ geometry:{ coordinates:t.geometry.rings,type:"Polygon" },type:"Feature" };this.$data.buffer=e;
      }else {
        this.$data.buffer=null;
      }
    },i18nLocale:function(t){
      var e=Object(o["a"])({},this.$route.query);if(delete e["lang"],"en-US"!==t){
        var n={ lang:t };this.$router.push({ query:Object(o["a"])(Object(o["a"])({},e),n) });
      }else {
        this.$router.push({ query:Object(o["a"])({},e) });
      }this.$gtag.event("language-click",{ event_category:this.$store.state.gtag.category,event_label:t });
    },sourcesWatched:function(t){
      console.log("watch sourcesWatched, nextSourcesWatched:",t);for(var e=[],n=0,i=Object.keys(t);n<i.length;n++){
        var r=i[n];e.push(t[r]);
      }e.includes(null)||this.setUpData(t);
    },geocodeStatus:function(t){
      "success"===t?this.runBuffer():null===t&&(this.$data.buffer=null);
    },buffer:function(){
      this.filterPoints();
    },selectedServices:function(){
      this.$store.state.sources[this.$appType].data&&this.filterPoints();
    },selectedResources:function(t){
      var e=Object(o["a"])({},this.$route.query);if(console.log("watch selectedResources fired, startQuery:",e,"nextSelectedResources:",t,"nextSelectedResources.length:",t.length),delete e["resource"],t.length){
        var n={ resource:t[0] };this.$router.push({ query:Object(o["a"])(Object(o["a"])({},e),n) });
      }else {
        this.$router.push({ query:Object(o["a"])({},e) });
      }
    },selectedKeywords:function(){
      this.$store.state.sources[this.$appType].data&&this.filterPoints();
    },dataStatus:function(t){
      "success"===t&&this.filterPoints();
    } },mounted:function(){
      var t=this;if(console.log("in App.vue mounted 210818, this.$store.state:",this.$store.state,"this.$config:",this.$config,"window.location.href:",window.location.href),this.$config.searchBar.searchTypes.forEach((function(e){
        t.$route.query[e]&&(t.$controller.handleSearchFormSubmit(t.$route.query[e],e),t.searchString=t.$route.query[e]);
      })),this.$route.query.resource){
        console.log("App.vue mounted, this.$route.query.resource:",this.$route.query.resource);var e=[ this.$route.query.resource ];this.$store.commit("setSelectedResources",e);
      }if(this.$route.query.lang&&(this.$i18n.locale=this.$route.query.lang),this.$config.searchBar){
        for(var n,i=Object.keys(this.$route.query),r=0,o=i;r<o.length;r++){
          var s=o[r];"address"!==s&&"keyword"!==s||(n=this.$route.query[s]);
        }this.$store.commit("setCurrentSearch",n),this.addressInputPlaceholder=this.$config.searchBar.placeholder;
      }if(this.$config.appLink?this.appLink=this.$config.appLink:this.appLink=".",this.$config.dataSources&&this.$controller.dataManager.fetchData(),this.i18nEnabled?this.$data.buttonText=this.$data.isMapVisible?"app.viewList":"app.viewMap":this.$data.buttonText=this.$data.isMapVisible?"Toggle to resource list":"Toggle to map",this.$config.alerts&&this.$config.alerts.modal&&this.$config.alerts.modal.enabled&&(this.isAlertModalOpen=!0),this.$config.gtag&&this.$config.gtag.category&&this.$store.commit("setGtagCategory",this.$config.gtag.category),this.$config.app.trustedSite&&"hidden"===this.$config.app.trustedSite){
        var a=document.getElementById("trusted-site");console.log("trusted:",a),a.classList.add("trusted-site-hidden");
      }this.$config.app.skipGreeting&&this.$store.commit("setShouldShowGreeting",!1);
    },created:function(){
      var t=document.getElementsByTagName("html")[0];t.setAttribute("class","invisible-scrollbar"),console.log("Pinboard Main.vue created, this.$config:",this.$config),this.$config.map&&(!1===this.$config.map.shouldInitialize&&this.$store.commit("setShouldInitializeMap",!1),this.$config.map.type&&this.$store.commit("setMapType",this.$config.map.type)),this.$config.app.logoSrc&&(this.brandingImage={ src:this.$config.app.logoSrc,alt:this.$config.app.logoAlt,width:"200px" });
    },methods:{ compareArrays:function(t,e){
      var n=[];return t.forEach((function(t){
        return e.forEach((function(e){
          t===e&&n.push(t);
        }));
      })),n;
    },handleSubmit:function(t){
      var e,n,i=parseFloat(t.substring(0)),r=i.toString(),s=t===r;if(console.log("handleSubmit 1, val.substring(0):",t.substring(0),"valAsFloat:",i,"checkVals:",s,"this.$config.searchBar.searchTypes:",this.$config.searchBar.searchTypes),isNaN(i)){
        if(!this.$config.searchBar.searchTypes.includes("keyword")) {
          return console.log("cannot search keywords"),void this.$warning("Please search an address",{ duration:4e3,closeOnClick:!0 });
        }e={ keyword:t },this.searchBarType="keyword",n="keyword";
      }else {
        s?(console.log("its a zipcode"),e={ zipcode:t },this.searchBarType="zipcode",n="zipcode"):(e={ address:t },this.searchBarType="address",n="address");
      }var a=Object(o["a"])({},this.$route.query);delete a["address"],delete a["keyword"],delete a["zipcode"],console.log("handleSubmit is running, valAsFloat:",i,"searchBarType:",n,"startQuery:",a,"this.$route.query:",this.$route.query,"query:",e,"val:",t,"val.substring(0, 1):",t.substring(0,1)),this.$router.push({ query:Object(o["a"])(Object(o["a"])({},a),e) }),this.searchString=e[this.searchBarType];var u=Object.keys(e)[0],c=e[u];this.$gtag.event(this.searchBarType+"-search",{ event_category:this.$store.state.gtag.category,event_label:c }),this.$store.commit("setCurrentSearch",t),this.$controller.handleSearchFormSubmit(t,n);
    },clearSearchTriggered:function(){
      var t=Object(o["a"])({},this.$route.query);delete t["address"],delete t["zipcode"],delete t["keyword"],this.$router.push({ query:t }),this.searchString="",this.$store.commit("setSelectedKeywords",[]),this.$store.commit("setSelectedZipcode",null),this.$store.commit("setBufferShape",null),this.$controller.resetGeocode(),this.$store.commit("setCurrentSearch",null);
    },setUpData:function(t){
      console.log("Pinboard App.vue setUpData is running, theSources:",t);var e={ key:"compiled",data:{ records:[]},status:"success" },n=Object.keys(t);if(n.length>1){
        console.log("theSources:",t,"this.$config.dataSources:",this.$config.dataSources);var i,r=Object(a["a"])(n);try{
          for(r.s();!(i=r.n()).done;){
            var o=i.value;if(console.log("source:",o),t[o].features&&this.$config.dataSources[o].compile){
              var s,u=Object(a["a"])(t[o].features);try{
                for(u.s();!(s=u.n()).done;){
                  var c=s.value;e.data.push(c);
                }
              }catch(d){
                u.e(d);
              }finally{
                u.f();
              }
            }else if(t[o].records&&this.$config.dataSources[o].compile){
              var l,h=Object(a["a"])(t[o].records);try{
                for(h.s();!(l=h.n()).done;){
                  var p=l.value,f=p._featureId.split("-")[1];this.$config.app.categorizeCompiled&&(p.fields.category_type=f),e.data.records.push(p);
                }
              }catch(d){
                h.e(d);
              }finally{
                h.f();
              }
            }
          }
        }catch(d){
          r.e(d);
        }finally{
          r.f();
        }this.$store.commit("setSourceData",e),this.$store.commit("setSourceStatus",e);
      }
    },runBuffer:function(){
      var t=1;this.$config.searchBar.searchDistance&&(t=this.$config.searchBar.searchDistance);var e=Object(wt["j"])(this.geocodeGeom.coordinates),n=Un(e,t,{ units:"miles" });this.$data.buffer=n,this.$store.commit("setBufferShape",n);
    },filterPoints:function(){
      var t=this;console.log("App.vue filterPoints is running, this.database:",this.database);var e,n=[],i=Object(a["a"])(this.database.entries());try{
        var r=function(){
          var i=Object(s["a"])(e.value,2),r=(i[0],i[1]),o=void 0,c=t.$store.state.selectedServices;if(t.$config.refine&&t.$config.refine.type&&[ "multipleFields","multipleFieldGroups","multipleDependentFieldGroups" ].includes(t.$config.refine.type)){
            var l=[];if(0===c.length) {
              l.push(!0);
            }else if("multipleFields"===t.$config.refine.type){
              for(var h in t.$config.refine.multipleFields) {
                if(c.includes(h)){
                  var p=t.$config.refine.multipleFields[h],f=p(r);l.push(f);
                }
              }
            }else if("multipleFieldGroups"===t.$config.refine.type){
              var d,g=[],y=Object(a["a"])(c);try{
                for(y.s();!(d=y.n()).done;){
                  var _=d.value,v=void 0;_&&(v=_.split("_",1)[0]),v&&!g.includes(v)&&g.push(v);
                }
              }catch(Lt){
                y.e(Lt);
              }finally{
                y.f();
              }for(var m=0,b=g;m<b.length;m++){
                var x,E=b[m],I=[],N=Object(a["a"])(c);try{
                  for(N.s();!(x=N.n()).done;){
                    var C=x.value;if(C.split("_",1)[0]===E&&t.$config.refine.multipleFieldGroups[E]["radio"]){
                      var S,w=t.$config.refine.multipleFieldGroups[E]["radio"][C.split("_")[1]]["dependentGroups"]||[],L=t.$config.refine.multipleFieldGroups[E]["radio"][C.split("_")[1]]["value"],O=[],T=Object(a["a"])(c);try{
                        for(T.s();!(S=T.n()).done;){
                          var R=S.value;w.length&&w.includes(R.split("_")[0])&&O.push(R.split("_")[1]);
                        }
                      }catch(Lt){
                        T.e(Lt);
                      }finally{
                        T.f();
                      }var M=L(r,O);I.push(M);
                    }if(C.split("_",1)[0]===E&&t.$config.refine.multipleFieldGroups[E]["checkbox"]){
                      var P,D=t.$config.refine.multipleFieldGroups[E]["checkbox"][C.split("_")[1]]["independentGroups"]||[],A=t.$config.refine.multipleFieldGroups[E]["checkbox"][C.split("_")[1]]["value"],F=[],$=Object(a["a"])(c);try{
                        for($.s();!(P=$.n()).done;){
                          var k=P.value;D.length&&D.includes(k.split("_")[0])&&F.push(k.split("_")[1]);
                        }
                      }catch(Lt){
                        $.e(Lt);
                      }finally{
                        $.f();
                      }var G=A(r,F);I.push(G);
                    }
                  }
                }catch(Lt){
                  N.e(Lt);
                }finally{
                  N.f();
                }console.log("group:",E,"groupBooleanConditions:",I),I.includes(!0)?l.push(!0):I.length&&l.push(!1);
              }
            }else{
              var j,B=[],q=Object(a["a"])(c);try{
                for(q.s();!(j=q.n()).done;){
                  var V=j.value,z=V.split("_",1)[0];B.includes(z)||B.push(z);
                }
              }catch(Lt){
                q.e(Lt);
              }finally{
                q.f();
              }for(var U=0,Y=B;U<Y.length;U++){
                var X,W=Y[U],H=[],K=Object(a["a"])(c);try{
                  for(K.s();!(X=K.n()).done;){
                    var J=X.value;if(J.split("_",1)[0]===W){
                      var Q=t.$config.refine.multipleDependentFieldGroups[W]["independent"],Z=(J.split("_")[1],void 0);if(t.$config.refine.multipleDependentFieldGroups[W]["dependent"][J.split("_")[1]]){
                        Z=t.$config.refine.multipleDependentFieldGroups[W]["dependent"][J.split("_")[1]]["value"];var tt=[];if(Q){
                          var et,nt=Object(a["a"])(c);try{
                            for(nt.s();!(et=nt.n()).done;){
                              var it=et.value;Object.keys(Q).includes(it.split("_")[1])&&tt.push(it.split("_")[1]);
                            }
                          }catch(Lt){
                            nt.e(Lt);
                          }finally{
                            nt.f();
                          }
                        }var rt=Z(r,tt);H.push(rt);
                      }
                    }
                  }
                }catch(Lt){
                  K.e(Lt);
                }finally{
                  K.f();
                }H.includes(!0)||!H.length?l.push(!0):l.push(!1);
              }
            }l.includes(!1)||(o=!0);
          }else if(t.$config.refine&&"categoryField_value"===t.$config.refine.type) {
            if(0===c.length) {
              o=!0;
            }else{
              var ot=t.$config.refine.value(r);o=c.includes(ot);
            }
          }else{
            var st;if(t.$config.refine?st=t.$config.refine.value(r):r.services_offered&&(st=r.services_offered),"string"===typeof st&&(st=st.split(",")),0===c.length) {
              o=!0;
            }else{
              var at=[];st&&(at=st.filter((function(t){
                return c.includes(t);
              }))),o=at.length==c.length;
            }
          }var ut=!1;if(t.$data.buffer){
            if(r.latlng){
              if("number"===typeof r.latlng[0]&&null!==r.latlng[0]){
                var ct=Object(wt["j"])([ r.latlng[1],r.latlng[0] ]);Kn(ct,t.$data.buffer)&&(ut=!0);
              }else if("string"===typeof r.latlng[0]&&null!==r.latlng[0]){
                var lt=Object(wt["j"])([ parseFloat(r.latlng[1]),parseFloat(r.latlng[0]) ]);Kn(lt,t.$data.buffer)&&(ut=!0);
              }
            }else if(r.lat&&r.lon){
              if("number"===typeof r.lat&&"number"===typeof r.lon){
                var ht,pt=t.getProjection(r);ht="3857"===pt?Object(u["a"])(t.projection3857,t.projection4326,[ r.lon,r.lat ]):"2272"===pt?Object(u["a"])(t.projection2272,t.projection4326,[ r.lon,r.lat ]):[ r.lon,r.lat ];var ft=Object(wt["j"])(ht);Kn(ft,t.$data.buffer)&&(ut=!0);
              }
            }else if(r.geometry&&r.geometry.x&&"number"===typeof r.geometry.x&&"number"===typeof r.geometry.y){
              var dt,gt=t.getProjection(r);dt="3857"===gt?Object(u["a"])(t.projection3857,t.projection4326,[ r.geometry.x,r.geometry.y ]):"2272"===gt?Object(u["a"])(t.projection2272,t.projection4326,[ r.geometry.x,r.geometry.y ]):[ r.geometry.x,r.geometry.y ];var yt=Object(wt["j"])(dt);Kn(yt,t.$data.buffer)&&(ut=!0);
            }
          }else {
            ut=!0;
          }var _t=!0;if(t.selectedKeywords.length>0){
            _t=!1;var vt=[];if(Array.isArray(r.tags)) {
              vt=r.tags;
            }else if(r.tags) {
              vt=r.tags.split(", ");
            }else if(t.$config.tags&&"tagLocation"==t.$config.tags.type) {
              Array.isArray(t.$config.tags.location(r))?vt=t.$config.tags.location(r):t.$config.tags.location(r)&&(vt=t.$config.tags.location(r).split(", "));
            }else if(t.$config.tags&&"fieldValues"==t.$config.tags.type){
              var mt,bt=Object(a["a"])(t.$config.tags.tags);try{
                for(bt.s();!(mt=bt.n()).done;){
                  var xt=mt.value;"boolean"==xt.type&&"Yes"==r.attributes[xt.field]?vt.push(xt.value):"value"==xt.type&&null!==r.attributes[xt.field]&&" "!=r.attributes[xt.field]&&vt.push(r.attributes[xt.field].charAt(0)+r.attributes[xt.field].substring(1).toLowerCase());
                }
              }catch(Lt){
                bt.e(Lt);
              }finally{
                bt.f();
              }
            }var Et=.2;t.$config.searchBar.fuseThreshold&&(Et=t.$config.searchBar.fuseThreshold);var It={ minMatchCharLength:3,location:0,threshold:Et },Nt=new St(vt,It),Ct=Nt.search(t.selectedKeywords[0]);Ct.length>0&&(_t=!0);
          }o&&ut&&_t&&n.push(r);
        };for(i.s();!(e=i.n()).done;) {
          r();
        }
      }catch(o){
        i.e(o);
      }finally{
        i.f();
      }this.$store.commit("setCurrentData",n);
    },toggleMap:function(){
      if(this.$data.isMapVisible=!this.$data.isMapVisible,console.log("toggleMap is running"),!0===this.$data.isMapVisible){
        console.log("toggleMap is running, this.$data.isMapVisible === true");var t=this.$store.map;setTimeout((function(){
          console.log("mapbox running map resize now"),t.resize(),console.log("mapbox ran map resize");
        }),250);
      }this.i18nEnabled?this.$data.buttonText=this.$data.isMapVisible?"app.viewList":"app.viewMap":this.$data.buttonText=this.$data.isMapVisible?"Toggle to resource list":"Toggle to map";
    },toggleModal:function(){
      this.isModalOpen=!this.isModalOpen,this.toggleBodyClass("no-scroll");
    },showModal:function(){
      this.isModalOpen=!0,this.toggleBodyClass("no-scroll");
    },closeModal:function(){
      this.isModalOpen=!1,this.isAlertModalOpen=!1,this.toggleBodyClass("no-scroll");
    },toggleBodyClass:function(t){
      var e=document.body;return this.isOpen?e.classList.add(t):e.classList.remove(t);
    } }},tr=Zi,er=(n("d702"),Object(ei["a"])(tr,i,r,!1,null,null,null));e["default"]=er.exports;
},8493:function(t,e,n){
  "use strict";var i=n("2ef3"),r=n("b47c"),o=n("49be"),s=n("0bc2"),a=o("species");t.exports=function(t){
    var e=i(t),n=r.f;s&&e&&!e[a]&&n(e,a,{ configurable:!0,get:function(){
      return this;
    } });
  };
},"84f4":function(t,e,n){
  var i=n("6386").PROPER,r=n("b96e"),o=n("e0a3"),s="​᠎";t.exports=function(t){
    return r((function(){
      return!!o[t]()||s[t]()!==s||i&&o[t].name!==t;
    }));
  };
},"889d":function(t,e,n){},9098:function(t,e,n){
  var i=n("b96e"),r=n("0885"),o=r.RegExp,s=i((function(){
      var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd");
    })),a=s||i((function(){
      return!o("a","y").sticky;
    })),u=s||i((function(){
      var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str");
    }));t.exports={ BROKEN_CARET:u,MISSED_STICKY:a,UNSUPPORTED_Y:s };
},"90c2":function(t,e,n){
  !function(t,n){
    n(e);
  }(0,(function(t){
    "use strict";function e(){}function n(t){
      this.message=t||"";
    }function i(t){
      this.message=t||"";
    }function r(t){
      this.message=t||"";
    }function o(){}function s(t){
      return null===t?Dt:t.color;
    }function a(t){
      return null===t?null:t.parent;
    }function u(t,e){
      null!==t&&(t.color=e);
    }function c(t){
      return null===t?null:t.left;
    }function l(t){
      return null===t?null:t.right;
    }function h(){
      this.root_=null,this.size_=0;
    }function p(){}function f(){
      this.array_=[],arguments[0]instanceof bt&&this.addAll(arguments[0]);
    }function d(){}function g(t){
      this.message=t||"";
    }function y(){
      this.array_=[];
    }"fill"in Array.prototype||Object.defineProperty(Array.prototype,"fill",{ configurable:!0,value:function(t){
      if(void 0===this||null===this) {
        throw new TypeError(this+" is not an object");
      }var e=Object(this),n=Math.max(Math.min(e.length,9007199254740991),0)||0,i=1 in arguments&&parseInt(Number(arguments[1]),10)||0;i=i<0?Math.max(n+i,0):Math.min(i,n);var r=2 in arguments&&void 0!==arguments[2]?parseInt(Number(arguments[2]),10)||0:n;for(r=r<0?Math.max(n+arguments[2],0):Math.min(r,n);i<r;) {
        e[i]=t,++i;
      }return e;
    },writable:!0 }),Number.isFinite=Number.isFinite||function(t){
      return"number"==typeof t&&isFinite(t);
    },Number.isInteger=Number.isInteger||function(t){
      return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t;
    },Number.parseFloat=Number.parseFloat||parseFloat,Number.isNaN=Number.isNaN||function(t){
      return t!=t;
    },Math.trunc=Math.trunc||function(t){
      return t<0?Math.ceil(t):Math.floor(t);
    };var _=function(){};_.prototype.interfaces_=function(){
      return[];
    },_.prototype.getClass=function(){
      return _;
    },_.prototype.equalsWithTolerance=function(t,e,n){
      return Math.abs(t-e)<=n;
    };var v=function(t){
        function e(e){
          t.call(this,e),this.name="IllegalArgumentException",this.message=e,this.stack=(new t).stack;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e;
      }(Error),m=function(){},b={ MAX_VALUE:{ configurable:!0 }};m.isNaN=function(t){
      return Number.isNaN(t);
    },m.doubleToLongBits=function(t){
      return t;
    },m.longBitsToDouble=function(t){
      return t;
    },m.isInfinite=function(t){
      return!Number.isFinite(t);
    },b.MAX_VALUE.get=function(){
      return Number.MAX_VALUE;
    },Object.defineProperties(m,b);var x=function(){},E=function(){},I=function(){},N=function t(){
        if(this.x=null,this.y=null,this.z=null,0===arguments.length) {
          this.x=0,this.y=0,this.z=t.NULL_ORDINATE;
        }else if(1===arguments.length){
          var e=arguments[0];this.x=e.x,this.y=e.y,this.z=e.z;
        }else {
          2===arguments.length?(this.x=arguments[0],this.y=arguments[1],this.z=t.NULL_ORDINATE):3===arguments.length&&(this.x=arguments[0],this.y=arguments[1],this.z=arguments[2]);
        }
      },C={ DimensionalComparator:{ configurable:!0 },serialVersionUID:{ configurable:!0 },NULL_ORDINATE:{ configurable:!0 },X:{ configurable:!0 },Y:{ configurable:!0 },Z:{ configurable:!0 }};N.prototype.setOrdinate=function(t,e){
      switch(t){
      case N.X:this.x=e;break;case N.Y:this.y=e;break;case N.Z:this.z=e;break;default:throw new v("Invalid ordinate index: "+t);
      }
    },N.prototype.equals2D=function(){
      if(1===arguments.length){
        var t=arguments[0];return this.x===t.x&&this.y===t.y;
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return!!_.equalsWithTolerance(this.x,e.x,n)&&!!_.equalsWithTolerance(this.y,e.y,n);
      }
    },N.prototype.getOrdinate=function(t){
      switch(t){
      case N.X:return this.x;case N.Y:return this.y;case N.Z:return this.z;
      }throw new v("Invalid ordinate index: "+t);
    },N.prototype.equals3D=function(t){
      return this.x===t.x&&this.y===t.y&&(this.z===t.z||m.isNaN(this.z))&&m.isNaN(t.z);
    },N.prototype.equals=function(t){
      return t instanceof N&&this.equals2D(t);
    },N.prototype.equalInZ=function(t,e){
      return _.equalsWithTolerance(this.z,t.z,e);
    },N.prototype.compareTo=function(t){
      var e=t;return this.x<e.x?-1:this.x>e.x?1:this.y<e.y?-1:this.y>e.y?1:0;
    },N.prototype.clone=function(){},N.prototype.copy=function(){
      return new N(this);
    },N.prototype.toString=function(){
      return"("+this.x+", "+this.y+", "+this.z+")";
    },N.prototype.distance3D=function(t){
      var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return Math.sqrt(e*e+n*n+i*i);
    },N.prototype.distance=function(t){
      var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n);
    },N.prototype.hashCode=function(){
      var t=17;return t=37*t+N.hashCode(this.x),37*t+N.hashCode(this.y);
    },N.prototype.setCoordinate=function(t){
      this.x=t.x,this.y=t.y,this.z=t.z;
    },N.prototype.interfaces_=function(){
      return[ x,E,e ];
    },N.prototype.getClass=function(){
      return N;
    },N.hashCode=function(){
      if(1===arguments.length){
        var t=arguments[0],e=m.doubleToLongBits(t);return Math.trunc((e^e)>>>32);
      }
    },C.DimensionalComparator.get=function(){
      return S;
    },C.serialVersionUID.get=function(){
      return 0x5cbf2c235c7e5800;
    },C.NULL_ORDINATE.get=function(){
      return m.NaN;
    },C.X.get=function(){
      return 0;
    },C.Y.get=function(){
      return 1;
    },C.Z.get=function(){
      return 2;
    },Object.defineProperties(N,C);var S=function(t){
      if(this._dimensionsToTest=2,0===arguments.length) {

      }else if(1===arguments.length){
        var e=arguments[0];if(2!==e&&3!==e) {
          throw new v("only 2 or 3 dimensions may be specified");
        }this._dimensionsToTest=e;
      }
    };S.prototype.compare=function(t,e){
      var n=t,i=e,r=S.compare(n.x,i.x);if(0!==r) {
        return r;
      }var o=S.compare(n.y,i.y);return 0!==o?o:this._dimensionsToTest<=2?0:S.compare(n.z,i.z);
    },S.prototype.interfaces_=function(){
      return[ I ];
    },S.prototype.getClass=function(){
      return S;
    },S.compare=function(t,e){
      return t<e?-1:t>e?1:m.isNaN(t)?m.isNaN(e)?0:-1:m.isNaN(e)?1:0;
    };var w=function(){};w.prototype.create=function(){},w.prototype.interfaces_=function(){
      return[];
    },w.prototype.getClass=function(){
      return w;
    };var L=function(){},O={ INTERIOR:{ configurable:!0 },BOUNDARY:{ configurable:!0 },EXTERIOR:{ configurable:!0 },NONE:{ configurable:!0 }};L.prototype.interfaces_=function(){
      return[];
    },L.prototype.getClass=function(){
      return L;
    },L.toLocationSymbol=function(t){
      switch(t){
      case L.EXTERIOR:return"e";case L.BOUNDARY:return"b";case L.INTERIOR:return"i";case L.NONE:return"-";
      }throw new v("Unknown location value: "+t);
    },O.INTERIOR.get=function(){
      return 0;
    },O.BOUNDARY.get=function(){
      return 1;
    },O.EXTERIOR.get=function(){
      return 2;
    },O.NONE.get=function(){
      return-1;
    },Object.defineProperties(L,O);var T=function(t,e){
        return t.interfaces_&&t.interfaces_().indexOf(e)>-1;
      },R=function(){},M={ LOG_10:{ configurable:!0 }};R.prototype.interfaces_=function(){
      return[];
    },R.prototype.getClass=function(){
      return R;
    },R.log10=function(t){
      var e=Math.log(t);return m.isInfinite(e)||m.isNaN(e)?e:e/R.LOG_10;
    },R.min=function(t,e,n,i){
      var r=t;return e<r&&(r=e),n<r&&(r=n),i<r&&(r=i),r;
    },R.clamp=function(){
      if("number"==typeof arguments[2]&&"number"==typeof arguments[0]&&"number"==typeof arguments[1]){
        var t=arguments[0],e=arguments[1],n=arguments[2];return t<e?e:t>n?n:t;
      }if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){
        var i=arguments[0],r=arguments[1],o=arguments[2];return i<r?r:i>o?o:i;
      }
    },R.wrap=function(t,e){
      return t<0?e- -t%e:t%e;
    },R.max=function(){
      if(3===arguments.length){
        var t=arguments[0],e=arguments[1],n=arguments[2],i=t;return e>i&&(i=e),n>i&&(i=n),i;
      }if(4===arguments.length){
        var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=r;return o>u&&(u=o),s>u&&(u=s),a>u&&(u=a),u;
      }
    },R.average=function(t,e){
      return(t+e)/2;
    },M.LOG_10.get=function(){
      return Math.log(10);
    },Object.defineProperties(R,M);var P=function(t){
      this.str=t;
    };P.prototype.append=function(t){
      this.str+=t;
    },P.prototype.setCharAt=function(t,e){
      this.str=this.str.substr(0,t)+e+this.str.substr(t+1);
    },P.prototype.toString=function(t){
      return this.str;
    };var D=function(t){
      this.value=t;
    };D.prototype.intValue=function(){
      return this.value;
    },D.prototype.compareTo=function(t){
      return this.value<t?-1:this.value>t?1:0;
    },D.isNaN=function(t){
      return Number.isNaN(t);
    };var A=function(){};A.isWhitespace=function(t){
      return t<=32&&t>=0||127===t;
    },A.toUpperCase=function(t){
      return t.toUpperCase();
    };var F=function t(){
        if(this._hi=0,this._lo=0,0===arguments.length) {
          this.init(0);
        }else if(1===arguments.length){
          if("number"==typeof arguments[0]){
            var e=arguments[0];this.init(e);
          }else if(arguments[0]instanceof t){
            var n=arguments[0];this.init(n);
          }else if("string"==typeof arguments[0]){
            var i=arguments[0];t.call(this,t.parse(i));
          }
        }else if(2===arguments.length){
          var r=arguments[0],o=arguments[1];this.init(r,o);
        }
      },$={ PI:{ configurable:!0 },TWO_PI:{ configurable:!0 },PI_2:{ configurable:!0 },E:{ configurable:!0 },NaN:{ configurable:!0 },EPS:{ configurable:!0 },SPLIT:{ configurable:!0 },MAX_PRINT_DIGITS:{ configurable:!0 },TEN:{ configurable:!0 },ONE:{ configurable:!0 },SCI_NOT_EXPONENT_CHAR:{ configurable:!0 },SCI_NOT_ZERO:{ configurable:!0 }};F.prototype.le=function(t){
      return(this._hi<t._hi||this._hi===t._hi)&&this._lo<=t._lo;
    },F.prototype.extractSignificantDigits=function(t,e){
      var n=this.abs(),i=F.magnitude(n._hi),r=F.TEN.pow(i);(n=n.divide(r)).gt(F.TEN)?(n=n.divide(F.TEN),i+=1):n.lt(F.ONE)&&(n=n.multiply(F.TEN),i-=1);for(var o=i+1,s=new P,a=F.MAX_PRINT_DIGITS-1,u=0;u<=a;u++){
        t&&u===o&&s.append(".");var c=Math.trunc(n._hi);if(c<0) {
          break;
        }var l=!1,h=0;c>9?(l=!0,h="9"):h="0"+c,s.append(h),n=n.subtract(F.valueOf(c)).multiply(F.TEN),l&&n.selfAdd(F.TEN);var p=!0,f=F.magnitude(n._hi);if(f<0&&Math.abs(f)>=a-u&&(p=!1),!p) {
          break;
        }
      }return e[0]=i,s.toString();
    },F.prototype.sqr=function(){
      return this.multiply(this);
    },F.prototype.doubleValue=function(){
      return this._hi+this._lo;
    },F.prototype.subtract=function(){
      if(arguments[0]instanceof F){
        var t=arguments[0];return this.add(t.negate());
      }if("number"==typeof arguments[0]){
        var e=arguments[0];return this.add(-e);
      }
    },F.prototype.equals=function(){
      if(1===arguments.length){
        var t=arguments[0];return this._hi===t._hi&&this._lo===t._lo;
      }
    },F.prototype.isZero=function(){
      return 0===this._hi&&0===this._lo;
    },F.prototype.selfSubtract=function(){
      if(arguments[0]instanceof F){
        var t=arguments[0];return this.isNaN()?this:this.selfAdd(-t._hi,-t._lo);
      }if("number"==typeof arguments[0]){
        var e=arguments[0];return this.isNaN()?this:this.selfAdd(-e,0);
      }
    },F.prototype.getSpecialNumberString=function(){
      return this.isZero()?"0.0":this.isNaN()?"NaN ":null;
    },F.prototype.min=function(t){
      return this.le(t)?this:t;
    },F.prototype.selfDivide=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof F){
          var t=arguments[0];return this.selfDivide(t._hi,t._lo);
        }if("number"==typeof arguments[0]){
          var e=arguments[0];return this.selfDivide(e,0);
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1],r=null,o=null,s=null,a=null,u=null,c=null,l=null,h=null;return u=this._hi/n,c=F.SPLIT*u,r=c-u,h=F.SPLIT*n,r=c-r,o=u-r,s=h-n,l=u*n,s=h-s,a=n-s,h=r*s-l+r*a+o*s+o*a,c=(this._hi-l-h+this._lo-u*i)/n,h=u+c,this._hi=h,this._lo=u-h+c,this;
      }
    },F.prototype.dump=function(){
      return"DD<"+this._hi+", "+this._lo+">";
    },F.prototype.divide=function(){
      if(arguments[0]instanceof F){
        var t=arguments[0],e=null,n=null,i=null,r=null,o=null,s=null,a=null,u=null;return n=(o=this._hi/t._hi)-(e=(s=F.SPLIT*o)-(e=s-o)),u=e*(i=(u=F.SPLIT*t._hi)-(i=u-t._hi))-(a=o*t._hi)+e*(r=t._hi-i)+n*i+n*r,s=(this._hi-a-u+this._lo-o*t._lo)/t._hi,new F(u=o+s,o-u+s);
      }if("number"==typeof arguments[0]){
        var c=arguments[0];return m.isNaN(c)?F.createNaN():F.copy(this).selfDivide(c,0);
      }
    },F.prototype.ge=function(t){
      return(this._hi>t._hi||this._hi===t._hi)&&this._lo>=t._lo;
    },F.prototype.pow=function(t){
      if(0===t) {
        return F.valueOf(1);
      }var e=new F(this),n=F.valueOf(1),i=Math.abs(t);if(i>1) {
        for(;i>0;) {
          i%2==1&&n.selfMultiply(e),(i/=2)>0&&(e=e.sqr());
        }
      }else {
        n=e;
      }return t<0?n.reciprocal():n;
    },F.prototype.ceil=function(){
      if(this.isNaN()) {
        return F.NaN;
      }var t=Math.ceil(this._hi),e=0;return t===this._hi&&(e=Math.ceil(this._lo)),new F(t,e);
    },F.prototype.compareTo=function(t){
      var e=t;return this._hi<e._hi?-1:this._hi>e._hi?1:this._lo<e._lo?-1:this._lo>e._lo?1:0;
    },F.prototype.rint=function(){
      return this.isNaN()?this:this.add(.5).floor();
    },F.prototype.setValue=function(){
      if(arguments[0]instanceof F){
        var t=arguments[0];return this.init(t),this;
      }if("number"==typeof arguments[0]){
        var e=arguments[0];return this.init(e),this;
      }
    },F.prototype.max=function(t){
      return this.ge(t)?this:t;
    },F.prototype.sqrt=function(){
      if(this.isZero()) {
        return F.valueOf(0);
      }if(this.isNegative()) {
        return F.NaN;
      }var t=1/Math.sqrt(this._hi),e=this._hi*t,n=F.valueOf(e),i=this.subtract(n.sqr())._hi*(.5*t);return n.add(i);
    },F.prototype.selfAdd=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof F){
          var t=arguments[0];return this.selfAdd(t._hi,t._lo);
        }if("number"==typeof arguments[0]){
          var e=arguments[0],n=null,i=null,r=null,o=null,s=null,a=null;return r=this._hi+e,s=r-this._hi,o=r-s,o=e-s+(this._hi-o),a=o+this._lo,n=r+a,i=a+(r-n),this._hi=n+i,this._lo=i+(n-this._hi),this;
        }
      }else if(2===arguments.length){
        var u=arguments[0],c=arguments[1],l=null,h=null,p=null,f=null,d=null,g=null,y=null;f=this._hi+u,h=this._lo+c,d=f-(g=f-this._hi),p=h-(y=h-this._lo);var _=(l=f+(g=(d=u-g+(this._hi-d))+h))+(g=(p=c-y+(this._lo-p))+(g+(f-l))),v=g+(l-_);return this._hi=_,this._lo=v,this;
      }
    },F.prototype.selfMultiply=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof F){
          var t=arguments[0];return this.selfMultiply(t._hi,t._lo);
        }if("number"==typeof arguments[0]){
          var e=arguments[0];return this.selfMultiply(e,0);
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1],r=null,o=null,s=null,a=null,u=null,c=null;r=(u=F.SPLIT*this._hi)-this._hi,c=F.SPLIT*n,r=u-r,o=this._hi-r,s=c-n;var l=(u=this._hi*n)+(c=r*(s=c-s)-u+r*(a=n-s)+o*s+o*a+(this._hi*i+this._lo*n)),h=c+(r=u-l);return this._hi=l,this._lo=h,this;
      }
    },F.prototype.selfSqr=function(){
      return this.selfMultiply(this);
    },F.prototype.floor=function(){
      if(this.isNaN()) {
        return F.NaN;
      }var t=Math.floor(this._hi),e=0;return t===this._hi&&(e=Math.floor(this._lo)),new F(t,e);
    },F.prototype.negate=function(){
      return this.isNaN()?this:new F(-this._hi,-this._lo);
    },F.prototype.clone=function(){},F.prototype.multiply=function(){
      if(arguments[0]instanceof F){
        var t=arguments[0];return t.isNaN()?F.createNaN():F.copy(this).selfMultiply(t);
      }if("number"==typeof arguments[0]){
        var e=arguments[0];return m.isNaN(e)?F.createNaN():F.copy(this).selfMultiply(e,0);
      }
    },F.prototype.isNaN=function(){
      return m.isNaN(this._hi);
    },F.prototype.intValue=function(){
      return Math.trunc(this._hi);
    },F.prototype.toString=function(){
      var t=F.magnitude(this._hi);return t>=-3&&t<=20?this.toStandardNotation():this.toSciNotation();
    },F.prototype.toStandardNotation=function(){
      var t=this.getSpecialNumberString();if(null!==t) {
        return t;
      }var e=new Array(1).fill(null),n=this.extractSignificantDigits(!0,e),i=e[0]+1,r=n;if("."===n.charAt(0)) {
        r="0"+n;
      }else if(i<0) {
        r="0."+F.stringOfChar("0",-i)+n;
      }else if(-1===n.indexOf(".")){
        var o=i-n.length;r=n+F.stringOfChar("0",o)+".0";
      }return this.isNegative()?"-"+r:r;
    },F.prototype.reciprocal=function(){
      var t=null,e=null,n=null,i=null,r=null,o=null,s=null,a=null;e=(r=1/this._hi)-(t=(o=F.SPLIT*r)-(t=o-r)),n=(a=F.SPLIT*this._hi)-this._hi;var u=r+(o=(1-(s=r*this._hi)-(a=t*(n=a-n)-s+t*(i=this._hi-n)+e*n+e*i)-r*this._lo)/this._hi);return new F(u,r-u+o);
    },F.prototype.toSciNotation=function(){
      if(this.isZero()) {
        return F.SCI_NOT_ZERO;
      }var t=this.getSpecialNumberString();if(null!==t) {
        return t;
      }var e=new Array(1).fill(null),n=this.extractSignificantDigits(!1,e),i=F.SCI_NOT_EXPONENT_CHAR+e[0];if("0"===n.charAt(0)) {
        throw new Error("Found leading zero: "+n);
      }var r="";n.length>1&&(r=n.substring(1));var o=n.charAt(0)+"."+r;return this.isNegative()?"-"+o+i:o+i;
    },F.prototype.abs=function(){
      return this.isNaN()?F.NaN:this.isNegative()?this.negate():new F(this);
    },F.prototype.isPositive=function(){
      return(this._hi>0||0===this._hi)&&this._lo>0;
    },F.prototype.lt=function(t){
      return(this._hi<t._hi||this._hi===t._hi)&&this._lo<t._lo;
    },F.prototype.add=function(){
      if(arguments[0]instanceof F){
        var t=arguments[0];return F.copy(this).selfAdd(t);
      }if("number"==typeof arguments[0]){
        var e=arguments[0];return F.copy(this).selfAdd(e);
      }
    },F.prototype.init=function(){
      if(1===arguments.length){
        if("number"==typeof arguments[0]){
          var t=arguments[0];this._hi=t,this._lo=0;
        }else if(arguments[0]instanceof F){
          var e=arguments[0];this._hi=e._hi,this._lo=e._lo;
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1];this._hi=n,this._lo=i;
      }
    },F.prototype.gt=function(t){
      return(this._hi>t._hi||this._hi===t._hi)&&this._lo>t._lo;
    },F.prototype.isNegative=function(){
      return(this._hi<0||0===this._hi)&&this._lo<0;
    },F.prototype.trunc=function(){
      return this.isNaN()?F.NaN:this.isPositive()?this.floor():this.ceil();
    },F.prototype.signum=function(){
      return this._hi>0?1:this._hi<0?-1:this._lo>0?1:this._lo<0?-1:0;
    },F.prototype.interfaces_=function(){
      return[ e,x,E ];
    },F.prototype.getClass=function(){
      return F;
    },F.sqr=function(t){
      return F.valueOf(t).selfMultiply(t);
    },F.valueOf=function(){
      if("string"==typeof arguments[0]){
        var t=arguments[0];return F.parse(t);
      }if("number"==typeof arguments[0]){
        var e=arguments[0];return new F(e);
      }
    },F.sqrt=function(t){
      return F.valueOf(t).sqrt();
    },F.parse=function(t){
      for(var e=0,n=t.length;A.isWhitespace(t.charAt(e));) {
        e++;
      }var i=!1;if(e<n){
        var r=t.charAt(e);"-"!==r&&"+"!==r||(e++,"-"===r&&(i=!0));
      }for(var o=new F,s=0,a=0,u=0;!(e>=n);){
        var c=t.charAt(e);if(e++,A.isDigit(c)){
          var l=c-"0";o.selfMultiply(F.TEN),o.selfAdd(l),s++;
        }else{
          if("."!==c){
            if("e"===c||"E"===c){
              var h=t.substring(e);try{
                u=D.parseInt(h);
              }catch(e){
                throw e instanceof Error?new Error("Invalid exponent "+h+" in string "+t):e;
              }break;
            }throw new Error("Unexpected character '"+c+"' at position "+e+" in string "+t);
          }a=s;
        }
      }var p=o,f=s-a-u;if(0===f) {
        p=o;
      }else if(f>0){
        var d=F.TEN.pow(f);p=o.divide(d);
      }else if(f<0){
        var g=F.TEN.pow(-f);p=o.multiply(g);
      }return i?p.negate():p;
    },F.createNaN=function(){
      return new F(m.NaN,m.NaN);
    },F.copy=function(t){
      return new F(t);
    },F.magnitude=function(t){
      var e=Math.abs(t),n=Math.log(e)/Math.log(10),i=Math.trunc(Math.floor(n));return 10*Math.pow(10,i)<=e&&(i+=1),i;
    },F.stringOfChar=function(t,e){
      for(var n=new P,i=0;i<e;i++) {
        n.append(t);
      }return n.toString();
    },$.PI.get=function(){
      return new F(3.141592653589793,12246467991473532e-32);
    },$.TWO_PI.get=function(){
      return new F(6.283185307179586,24492935982947064e-32);
    },$.PI_2.get=function(){
      return new F(1.5707963267948966,6123233995736766e-32);
    },$.E.get=function(){
      return new F(2.718281828459045,14456468917292502e-32);
    },$.NaN.get=function(){
      return new F(m.NaN,m.NaN);
    },$.EPS.get=function(){
      return 123259516440783e-46;
    },$.SPLIT.get=function(){
      return 134217729;
    },$.MAX_PRINT_DIGITS.get=function(){
      return 32;
    },$.TEN.get=function(){
      return F.valueOf(10);
    },$.ONE.get=function(){
      return F.valueOf(1);
    },$.SCI_NOT_EXPONENT_CHAR.get=function(){
      return"E";
    },$.SCI_NOT_ZERO.get=function(){
      return"0.0E0";
    },Object.defineProperties(F,$);var k=function(){},G={ DP_SAFE_EPSILON:{ configurable:!0 }};k.prototype.interfaces_=function(){
      return[];
    },k.prototype.getClass=function(){
      return k;
    },k.orientationIndex=function(t,e,n){
      var i=k.orientationIndexFilter(t,e,n);if(i<=1) {
        return i;
      }var r=F.valueOf(e.x).selfAdd(-t.x),o=F.valueOf(e.y).selfAdd(-t.y),s=F.valueOf(n.x).selfAdd(-e.x),a=F.valueOf(n.y).selfAdd(-e.y);return r.selfMultiply(a).selfSubtract(o.selfMultiply(s)).signum();
    },k.signOfDet2x2=function(t,e,n,i){
      return t.multiply(i).selfSubtract(e.multiply(n)).signum();
    },k.intersection=function(t,e,n,i){
      var r=F.valueOf(i.y).selfSubtract(n.y).selfMultiply(F.valueOf(e.x).selfSubtract(t.x)),o=F.valueOf(i.x).selfSubtract(n.x).selfMultiply(F.valueOf(e.y).selfSubtract(t.y)),s=r.subtract(o),a=F.valueOf(i.x).selfSubtract(n.x).selfMultiply(F.valueOf(t.y).selfSubtract(n.y)),u=F.valueOf(i.y).selfSubtract(n.y).selfMultiply(F.valueOf(t.x).selfSubtract(n.x)),c=a.subtract(u).selfDivide(s).doubleValue(),l=F.valueOf(t.x).selfAdd(F.valueOf(e.x).selfSubtract(t.x).selfMultiply(c)).doubleValue(),h=F.valueOf(e.x).selfSubtract(t.x).selfMultiply(F.valueOf(t.y).selfSubtract(n.y)),p=F.valueOf(e.y).selfSubtract(t.y).selfMultiply(F.valueOf(t.x).selfSubtract(n.x)),f=h.subtract(p).selfDivide(s).doubleValue(),d=F.valueOf(n.y).selfAdd(F.valueOf(i.y).selfSubtract(n.y).selfMultiply(f)).doubleValue();return new N(l,d);
    },k.orientationIndexFilter=function(t,e,n){
      var i=null,r=(t.x-n.x)*(e.y-n.y),o=(t.y-n.y)*(e.x-n.x),s=r-o;if(r>0){
        if(o<=0) {
          return k.signum(s);
        }i=r+o;
      }else{
        if(!(r<0)) {
          return k.signum(s);
        }if(o>=0) {
          return k.signum(s);
        }i=-r-o;
      }var a=k.DP_SAFE_EPSILON*i;return s>=a||-s>=a?k.signum(s):2;
    },k.signum=function(t){
      return t>0?1:t<0?-1:0;
    },G.DP_SAFE_EPSILON.get=function(){
      return 1e-15;
    },Object.defineProperties(k,G);var j=function(){},B={ X:{ configurable:!0 },Y:{ configurable:!0 },Z:{ configurable:!0 },M:{ configurable:!0 }};B.X.get=function(){
      return 0;
    },B.Y.get=function(){
      return 1;
    },B.Z.get=function(){
      return 2;
    },B.M.get=function(){
      return 3;
    },j.prototype.setOrdinate=function(t,e,n){},j.prototype.size=function(){},j.prototype.getOrdinate=function(t,e){},j.prototype.getCoordinate=function(){},j.prototype.getCoordinateCopy=function(t){},j.prototype.getDimension=function(){},j.prototype.getX=function(t){},j.prototype.clone=function(){},j.prototype.expandEnvelope=function(t){},j.prototype.copy=function(){},j.prototype.getY=function(t){},j.prototype.toCoordinateArray=function(){},j.prototype.interfaces_=function(){
      return[ E ];
    },j.prototype.getClass=function(){
      return j;
    },Object.defineProperties(j,B);var q=function(){},V=function(t){
        function e(){
          t.call(this,"Projective point not representable on the Cartesian plane.");
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(q),z=function(){};z.arraycopy=function(t,e,n,i,r){
      for(var o=0,s=e;s<e+r;s++) {
        n[i+o]=t[s],o++;
      }
    },z.getProperty=function(t){
      return{ "line.separator":"\n" }[t];
    };var U=function t(){
      if(this.x=null,this.y=null,this.w=null,0===arguments.length) {
        this.x=0,this.y=0,this.w=1;
      }else if(1===arguments.length){
        var e=arguments[0];this.x=e.x,this.y=e.y,this.w=1;
      }else if(2===arguments.length){
        if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){
          var n=arguments[0],i=arguments[1];this.x=n,this.y=i,this.w=1;
        }else if(arguments[0]instanceof t&&arguments[1]instanceof t){
          var r=arguments[0],o=arguments[1];this.x=r.y*o.w-o.y*r.w,this.y=o.x*r.w-r.x*o.w,this.w=r.x*o.y-o.x*r.y;
        }else if(arguments[0]instanceof N&&arguments[1]instanceof N){
          var s=arguments[0],a=arguments[1];this.x=s.y-a.y,this.y=a.x-s.x,this.w=s.x*a.y-a.x*s.y;
        }
      }else if(3===arguments.length){
        var u=arguments[0],c=arguments[1],l=arguments[2];this.x=u,this.y=c,this.w=l;
      }else if(4===arguments.length){
        var h=arguments[0],p=arguments[1],f=arguments[2],d=arguments[3],g=h.y-p.y,y=p.x-h.x,_=h.x*p.y-p.x*h.y,v=f.y-d.y,m=d.x-f.x,b=f.x*d.y-d.x*f.y;this.x=y*b-m*_,this.y=v*_-g*b,this.w=g*m-v*y;
      }
    };U.prototype.getY=function(){
      var t=this.y/this.w;if(m.isNaN(t)||m.isInfinite(t)) {
        throw new V;
      }return t;
    },U.prototype.getX=function(){
      var t=this.x/this.w;if(m.isNaN(t)||m.isInfinite(t)) {
        throw new V;
      }return t;
    },U.prototype.getCoordinate=function(){
      var t=new N;return t.x=this.getX(),t.y=this.getY(),t;
    },U.prototype.interfaces_=function(){
      return[];
    },U.prototype.getClass=function(){
      return U;
    },U.intersection=function(t,e,n,i){
      var r=t.y-e.y,o=e.x-t.x,s=t.x*e.y-e.x*t.y,a=n.y-i.y,u=i.x-n.x,c=n.x*i.y-i.x*n.y,l=r*u-a*o,h=(o*c-u*s)/l,p=(a*s-r*c)/l;if(m.isNaN(h)||m.isInfinite(h)||m.isNaN(p)||m.isInfinite(p)) {
        throw new V;
      }return new N(h,p);
    };var Y=function t(){
        if(this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,0===arguments.length) {
          this.init();
        }else if(1===arguments.length){
          if(arguments[0]instanceof N){
            var e=arguments[0];this.init(e.x,e.x,e.y,e.y);
          }else if(arguments[0]instanceof t){
            var n=arguments[0];this.init(n);
          }
        }else if(2===arguments.length){
          var i=arguments[0],r=arguments[1];this.init(i.x,r.x,i.y,r.y);
        }else if(4===arguments.length){
          var o=arguments[0],s=arguments[1],a=arguments[2],u=arguments[3];this.init(o,s,a,u);
        }
      },X={ serialVersionUID:{ configurable:!0 }};Y.prototype.getArea=function(){
      return this.getWidth()*this.getHeight();
    },Y.prototype.equals=function(t){
      if(!(t instanceof Y)) {
        return!1;
      }var e=t;return this.isNull()?e.isNull():this._maxx===e.getMaxX()&&this._maxy===e.getMaxY()&&this._minx===e.getMinX()&&this._miny===e.getMinY();
    },Y.prototype.intersection=function(t){
      if(this.isNull()||t.isNull()||!this.intersects(t)) {
        return new Y;
      }var e=this._minx>t._minx?this._minx:t._minx,n=this._miny>t._miny?this._miny:t._miny,i=this._maxx<t._maxx?this._maxx:t._maxx,r=this._maxy<t._maxy?this._maxy:t._maxy;return new Y(e,i,n,r);
    },Y.prototype.isNull=function(){
      return this._maxx<this._minx;
    },Y.prototype.getMaxX=function(){
      return this._maxx;
    },Y.prototype.covers=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof N){
          var t=arguments[0];return this.covers(t.x,t.y);
        }if(arguments[0]instanceof Y){
          var e=arguments[0];return!this.isNull()&&!e.isNull()&&e.getMinX()>=this._minx&&e.getMaxX()<=this._maxx&&e.getMinY()>=this._miny&&e.getMaxY()<=this._maxy;
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1];return!this.isNull()&&n>=this._minx&&n<=this._maxx&&i>=this._miny&&i<=this._maxy;
      }
    },Y.prototype.intersects=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof Y){
          var t=arguments[0];return!this.isNull()&&!t.isNull()&&!(t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny);
        }if(arguments[0]instanceof N){
          var e=arguments[0];return this.intersects(e.x,e.y);
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1];return!this.isNull()&&!(n>this._maxx||n<this._minx||i>this._maxy||i<this._miny);
      }
    },Y.prototype.getMinY=function(){
      return this._miny;
    },Y.prototype.getMinX=function(){
      return this._minx;
    },Y.prototype.expandToInclude=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof N){
          var t=arguments[0];this.expandToInclude(t.x,t.y);
        }else if(arguments[0]instanceof Y){
          var e=arguments[0];if(e.isNull()) {
            return null;
          }this.isNull()?(this._minx=e.getMinX(),this._maxx=e.getMaxX(),this._miny=e.getMinY(),this._maxy=e.getMaxY()):(e._minx<this._minx&&(this._minx=e._minx),e._maxx>this._maxx&&(this._maxx=e._maxx),e._miny<this._miny&&(this._miny=e._miny),e._maxy>this._maxy&&(this._maxy=e._maxy));
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1];this.isNull()?(this._minx=n,this._maxx=n,this._miny=i,this._maxy=i):(n<this._minx&&(this._minx=n),n>this._maxx&&(this._maxx=n),i<this._miny&&(this._miny=i),i>this._maxy&&(this._maxy=i));
      }
    },Y.prototype.minExtent=function(){
      if(this.isNull()) {
        return 0;
      }var t=this.getWidth(),e=this.getHeight();return t<e?t:e;
    },Y.prototype.getWidth=function(){
      return this.isNull()?0:this._maxx-this._minx;
    },Y.prototype.compareTo=function(t){
      var e=t;return this.isNull()?e.isNull()?0:-1:e.isNull()?1:this._minx<e._minx?-1:this._minx>e._minx?1:this._miny<e._miny?-1:this._miny>e._miny?1:this._maxx<e._maxx?-1:this._maxx>e._maxx?1:this._maxy<e._maxy?-1:this._maxy>e._maxy?1:0;
    },Y.prototype.translate=function(t,e){
      if(this.isNull()) {
        return null;
      }this.init(this.getMinX()+t,this.getMaxX()+t,this.getMinY()+e,this.getMaxY()+e);
    },Y.prototype.toString=function(){
      return"Env["+this._minx+" : "+this._maxx+", "+this._miny+" : "+this._maxy+"]";
    },Y.prototype.setToNull=function(){
      this._minx=0,this._maxx=-1,this._miny=0,this._maxy=-1;
    },Y.prototype.getHeight=function(){
      return this.isNull()?0:this._maxy-this._miny;
    },Y.prototype.maxExtent=function(){
      if(this.isNull()) {
        return 0;
      }var t=this.getWidth(),e=this.getHeight();return t>e?t:e;
    },Y.prototype.expandBy=function(){
      if(1===arguments.length){
        var t=arguments[0];this.expandBy(t,t);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];if(this.isNull()) {
          return null;
        }this._minx-=e,this._maxx+=e,this._miny-=n,this._maxy+=n,(this._minx>this._maxx||this._miny>this._maxy)&&this.setToNull();
      }
    },Y.prototype.contains=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof Y){
          var t=arguments[0];return this.covers(t);
        }if(arguments[0]instanceof N){
          var e=arguments[0];return this.covers(e);
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1];return this.covers(n,i);
      }
    },Y.prototype.centre=function(){
      return this.isNull()?null:new N((this.getMinX()+this.getMaxX())/2,(this.getMinY()+this.getMaxY())/2);
    },Y.prototype.init=function(){
      if(0===arguments.length) {
        this.setToNull();
      }else if(1===arguments.length){
        if(arguments[0]instanceof N){
          var t=arguments[0];this.init(t.x,t.x,t.y,t.y);
        }else if(arguments[0]instanceof Y){
          var e=arguments[0];this._minx=e._minx,this._maxx=e._maxx,this._miny=e._miny,this._maxy=e._maxy;
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1];this.init(n.x,i.x,n.y,i.y);
      }else if(4===arguments.length){
        var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];r<o?(this._minx=r,this._maxx=o):(this._minx=o,this._maxx=r),s<a?(this._miny=s,this._maxy=a):(this._miny=a,this._maxy=s);
      }
    },Y.prototype.getMaxY=function(){
      return this._maxy;
    },Y.prototype.distance=function(t){
      if(this.intersects(t)) {
        return 0;
      }var e=0;this._maxx<t._minx?e=t._minx-this._maxx:this._minx>t._maxx&&(e=this._minx-t._maxx);var n=0;return this._maxy<t._miny?n=t._miny-this._maxy:this._miny>t._maxy&&(n=this._miny-t._maxy),0===e?n:0===n?e:Math.sqrt(e*e+n*n);
    },Y.prototype.hashCode=function(){
      var t=17;return t=37*t+N.hashCode(this._minx),t=37*t+N.hashCode(this._maxx),t=37*t+N.hashCode(this._miny),37*t+N.hashCode(this._maxy);
    },Y.prototype.interfaces_=function(){
      return[ x,e ];
    },Y.prototype.getClass=function(){
      return Y;
    },Y.intersects=function(){
      if(3===arguments.length){
        var t=arguments[0],e=arguments[1],n=arguments[2];return n.x>=(t.x<e.x?t.x:e.x)&&n.x<=(t.x>e.x?t.x:e.x)&&n.y>=(t.y<e.y?t.y:e.y)&&n.y<=(t.y>e.y?t.y:e.y);
      }if(4===arguments.length){
        var i=arguments[0],r=arguments[1],o=arguments[2],s=arguments[3],a=Math.min(o.x,s.x),u=Math.max(o.x,s.x),c=Math.min(i.x,r.x),l=Math.max(i.x,r.x);return!(c>u)&&!(l<a)&&(a=Math.min(o.y,s.y),u=Math.max(o.y,s.y),c=Math.min(i.y,r.y),l=Math.max(i.y,r.y),!(c>u)&&!(l<a));
      }
    },X.serialVersionUID.get=function(){
      return 0x51845cd552189800;
    },Object.defineProperties(Y,X);var W={ typeStr:/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,emptyTypeStr:/^\s*(\w+)\s*EMPTY\s*$/,spaces:/\s+/,parenComma:/\)\s*,\s*\(/,doubleParenComma:/\)\s*\)\s*,\s*\(\s*\(/,trimParens:/^\s*\(?(.*?)\)?\s*$/ },H=function(t){
      this.geometryFactory=t||new _e;
    };H.prototype.read=function(t){
      var e,n,i;t=t.replace(/[\n\r]/g," ");var r=W.typeStr.exec(t);if(-1!==t.search("EMPTY")&&((r=W.emptyTypeStr.exec(t))[2]=void 0),r&&(n=r[1].toLowerCase(),i=r[2],J[n]&&(e=J[n].apply(this,[ i ]))),void 0===e) {
        throw new Error("Could not parse WKT "+t);
      }return e;
    },H.prototype.write=function(t){
      return this.extractGeometry(t);
    },H.prototype.extractGeometry=function(t){
      var e=t.getGeometryType().toLowerCase();if(!K[e]) {
        return null;
      }var n=e.toUpperCase();return t.isEmpty()?n+" EMPTY":n+"("+K[e].apply(this,[ t ])+")";
    };var K={ coordinate:function(t){
        return t.x+" "+t.y;
      },point:function(t){
        return K.coordinate.call(this,t._coordinates._coordinates[0]);
      },multipoint:function(t){
        for(var e=[],n=0,i=t._geometries.length;n<i;++n) {
          e.push("("+K.point.apply(this,[ t._geometries[n] ])+")");
        }return e.join(",");
      },linestring:function(t){
        for(var e=[],n=0,i=t._points._coordinates.length;n<i;++n) {
          e.push(K.coordinate.apply(this,[ t._points._coordinates[n] ]));
        }return e.join(",");
      },linearring:function(t){
        for(var e=[],n=0,i=t._points._coordinates.length;n<i;++n) {
          e.push(K.coordinate.apply(this,[ t._points._coordinates[n] ]));
        }return e.join(",");
      },multilinestring:function(t){
        for(var e=[],n=0,i=t._geometries.length;n<i;++n) {
          e.push("("+K.linestring.apply(this,[ t._geometries[n] ])+")");
        }return e.join(",");
      },polygon:function(t){
        var e=[];e.push("("+K.linestring.apply(this,[ t._shell ])+")");for(var n=0,i=t._holes.length;n<i;++n) {
          e.push("("+K.linestring.apply(this,[ t._holes[n] ])+")");
        }return e.join(",");
      },multipolygon:function(t){
        for(var e=[],n=0,i=t._geometries.length;n<i;++n) {
          e.push("("+K.polygon.apply(this,[ t._geometries[n] ])+")");
        }return e.join(",");
      },geometrycollection:function(t){
        for(var e=[],n=0,i=t._geometries.length;n<i;++n) {
          e.push(this.extractGeometry(t._geometries[n]));
        }return e.join(",");
      } },J={ point:function(t){
        if(void 0===t) {
          return this.geometryFactory.createPoint();
        }var e=t.trim().split(W.spaces);return this.geometryFactory.createPoint(new N(Number.parseFloat(e[0]),Number.parseFloat(e[1])));
      },multipoint:function(t){
        if(void 0===t) {
          return this.geometryFactory.createMultiPoint();
        }for(var e,n=t.trim().split(","),i=[],r=0,o=n.length;r<o;++r) {
          e=n[r].replace(W.trimParens,"$1"),i.push(J.point.apply(this,[ e ]));
        }return this.geometryFactory.createMultiPoint(i);
      },linestring:function(t){
        if(void 0===t) {
          return this.geometryFactory.createLineString();
        }for(var e,n=t.trim().split(","),i=[],r=0,o=n.length;r<o;++r) {
          e=n[r].trim().split(W.spaces),i.push(new N(Number.parseFloat(e[0]),Number.parseFloat(e[1])));
        }return this.geometryFactory.createLineString(i);
      },linearring:function(t){
        if(void 0===t) {
          return this.geometryFactory.createLinearRing();
        }for(var e,n=t.trim().split(","),i=[],r=0,o=n.length;r<o;++r) {
          e=n[r].trim().split(W.spaces),i.push(new N(Number.parseFloat(e[0]),Number.parseFloat(e[1])));
        }return this.geometryFactory.createLinearRing(i);
      },multilinestring:function(t){
        if(void 0===t) {
          return this.geometryFactory.createMultiLineString();
        }for(var e,n=t.trim().split(W.parenComma),i=[],r=0,o=n.length;r<o;++r) {
          e=n[r].replace(W.trimParens,"$1"),i.push(J.linestring.apply(this,[ e ]));
        }return this.geometryFactory.createMultiLineString(i);
      },polygon:function(t){
        if(void 0===t) {
          return this.geometryFactory.createPolygon();
        }for(var e,n,i,r,o=t.trim().split(W.parenComma),s=[],a=0,u=o.length;a<u;++a) {
          e=o[a].replace(W.trimParens,"$1"),n=J.linestring.apply(this,[ e ]),i=this.geometryFactory.createLinearRing(n._points),0===a?r=i:s.push(i);
        }return this.geometryFactory.createPolygon(r,s);
      },multipolygon:function(t){
        if(void 0===t) {
          return this.geometryFactory.createMultiPolygon();
        }for(var e,n=t.trim().split(W.doubleParenComma),i=[],r=0,o=n.length;r<o;++r) {
          e=n[r].replace(W.trimParens,"$1"),i.push(J.polygon.apply(this,[ e ]));
        }return this.geometryFactory.createMultiPolygon(i);
      },geometrycollection:function(t){
        if(void 0===t) {
          return this.geometryFactory.createGeometryCollection();
        }for(var e=(t=t.replace(/,\s*([A-Za-z])/g,"|$1")).trim().split("|"),n=[],i=0,r=e.length;i<r;++i) {
          n.push(this.read(e[i]));
        }return this.geometryFactory.createGeometryCollection(n);
      } },Q=function(t){
        this.parser=new H(t);
      };Q.prototype.write=function(t){
      return this.parser.write(t);
    },Q.toLineString=function(t,e){
      if(2!==arguments.length) {
        throw new Error("Not implemented");
      }return"LINESTRING ( "+t.x+" "+t.y+", "+e.x+" "+e.y+" )";
    };var Z=function(t){
        function e(e){
          t.call(this,e),this.name="RuntimeException",this.message=e,this.stack=(new t).stack;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e;
      }(Error),tt=function(t){
        function e(){
          if(t.call(this),0===arguments.length) {
            t.call(this);
          }else if(1===arguments.length){
            var e=arguments[0];t.call(this,e);
          }
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Z),et=function(){};et.prototype.interfaces_=function(){
      return[];
    },et.prototype.getClass=function(){
      return et;
    },et.shouldNeverReachHere=function(){
      if(0===arguments.length) {
        et.shouldNeverReachHere(null);
      }else if(1===arguments.length){
        var t=arguments[0];throw new tt("Should never reach here"+(null!==t?": "+t:""));
      }
    },et.isTrue=function(){
      var t,e;if(1===arguments.length) {
        t=arguments[0],et.isTrue(t,null);
      }else if(2===arguments.length&&(t=arguments[0],e=arguments[1],!t)) {
        throw null===e?new tt:new tt(e);
      }
    },et.equals=function(){
      var t,e,n;if(2===arguments.length) {
        t=arguments[0],e=arguments[1],et.equals(t,e,null);
      }else if(3===arguments.length&&(t=arguments[0],e=arguments[1],n=arguments[2],!e.equals(t))) {
        throw new tt("Expected "+t+" but encountered "+e+(null!==n?": "+n:""));
      }
    };var nt=function(){
        this._result=null,this._inputLines=Array(2).fill().map((function(){
          return Array(2);
        })),this._intPt=new Array(2).fill(null),this._intLineIndex=null,this._isProper=null,this._pa=null,this._pb=null,this._precisionModel=null,this._intPt[0]=new N,this._intPt[1]=new N,this._pa=this._intPt[0],this._pb=this._intPt[1],this._result=0;
      },it={ DONT_INTERSECT:{ configurable:!0 },DO_INTERSECT:{ configurable:!0 },COLLINEAR:{ configurable:!0 },NO_INTERSECTION:{ configurable:!0 },POINT_INTERSECTION:{ configurable:!0 },COLLINEAR_INTERSECTION:{ configurable:!0 }};nt.prototype.getIndexAlongSegment=function(t,e){
      return this.computeIntLineIndex(),this._intLineIndex[t][e];
    },nt.prototype.getTopologySummary=function(){
      var t=new P;return this.isEndPoint()&&t.append(" endpoint"),this._isProper&&t.append(" proper"),this.isCollinear()&&t.append(" collinear"),t.toString();
    },nt.prototype.computeIntersection=function(t,e,n,i){
      this._inputLines[0][0]=t,this._inputLines[0][1]=e,this._inputLines[1][0]=n,this._inputLines[1][1]=i,this._result=this.computeIntersect(t,e,n,i);
    },nt.prototype.getIntersectionNum=function(){
      return this._result;
    },nt.prototype.computeIntLineIndex=function(){
      if(0===arguments.length) {
        null===this._intLineIndex&&(this._intLineIndex=Array(2).fill().map((function(){
          return Array(2);
        })),this.computeIntLineIndex(0),this.computeIntLineIndex(1));
      }else if(1===arguments.length){
        var t=arguments[0];this.getEdgeDistance(t,0)>this.getEdgeDistance(t,1)?(this._intLineIndex[t][0]=0,this._intLineIndex[t][1]=1):(this._intLineIndex[t][0]=1,this._intLineIndex[t][1]=0);
      }
    },nt.prototype.isProper=function(){
      return this.hasIntersection()&&this._isProper;
    },nt.prototype.setPrecisionModel=function(t){
      this._precisionModel=t;
    },nt.prototype.isInteriorIntersection=function(){
      if(0===arguments.length) {
        return!!this.isInteriorIntersection(0)||!!this.isInteriorIntersection(1);
      }if(1===arguments.length){
        for(var t=arguments[0],e=0;e<this._result;e++) {
          if(!this._intPt[e].equals2D(this._inputLines[t][0])&&!this._intPt[e].equals2D(this._inputLines[t][1])) {
            return!0;
          }
        }return!1;
      }
    },nt.prototype.getIntersection=function(t){
      return this._intPt[t];
    },nt.prototype.isEndPoint=function(){
      return this.hasIntersection()&&!this._isProper;
    },nt.prototype.hasIntersection=function(){
      return this._result!==nt.NO_INTERSECTION;
    },nt.prototype.getEdgeDistance=function(t,e){
      return nt.computeEdgeDistance(this._intPt[e],this._inputLines[t][0],this._inputLines[t][1]);
    },nt.prototype.isCollinear=function(){
      return this._result===nt.COLLINEAR_INTERSECTION;
    },nt.prototype.toString=function(){
      return Q.toLineString(this._inputLines[0][0],this._inputLines[0][1])+" - "+Q.toLineString(this._inputLines[1][0],this._inputLines[1][1])+this.getTopologySummary();
    },nt.prototype.getEndpoint=function(t,e){
      return this._inputLines[t][e];
    },nt.prototype.isIntersection=function(t){
      for(var e=0;e<this._result;e++) {
        if(this._intPt[e].equals2D(t)) {
          return!0;
        }
      }return!1;
    },nt.prototype.getIntersectionAlongSegment=function(t,e){
      return this.computeIntLineIndex(),this._intPt[this._intLineIndex[t][e]];
    },nt.prototype.interfaces_=function(){
      return[];
    },nt.prototype.getClass=function(){
      return nt;
    },nt.computeEdgeDistance=function(t,e,n){
      var i=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y),o=-1;if(t.equals(e)) {
        o=0;
      }else if(t.equals(n)) {
        o=i>r?i:r;
      }else{
        var s=Math.abs(t.x-e.x),a=Math.abs(t.y-e.y);0!==(o=i>r?s:a)||t.equals(e)||(o=Math.max(s,a));
      }return et.isTrue(!(0===o&&!t.equals(e)),"Bad distance calculation"),o;
    },nt.nonRobustComputeEdgeDistance=function(t,e,n){
      var i=t.x-e.x,r=t.y-e.y,o=Math.sqrt(i*i+r*r);return et.isTrue(!(0===o&&!t.equals(e)),"Invalid distance calculation"),o;
    },it.DONT_INTERSECT.get=function(){
      return 0;
    },it.DO_INTERSECT.get=function(){
      return 1;
    },it.COLLINEAR.get=function(){
      return 2;
    },it.NO_INTERSECTION.get=function(){
      return 0;
    },it.POINT_INTERSECTION.get=function(){
      return 1;
    },it.COLLINEAR_INTERSECTION.get=function(){
      return 2;
    },Object.defineProperties(nt,it);var rt=function(t){
        function e(){
          t.apply(this,arguments);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isInSegmentEnvelopes=function(t){
          var e=new Y(this._inputLines[0][0],this._inputLines[0][1]),n=new Y(this._inputLines[1][0],this._inputLines[1][1]);return e.contains(t)&&n.contains(t);
        },e.prototype.computeIntersection=function(){
          if(3!==arguments.length) {
            return t.prototype.computeIntersection.apply(this,arguments);
          }var e=arguments[0],n=arguments[1],i=arguments[2];if(this._isProper=!1,Y.intersects(n,i,e)&&0===at.orientationIndex(n,i,e)&&0===at.orientationIndex(i,n,e)) {
            return this._isProper=!0,(e.equals(n)||e.equals(i))&&(this._isProper=!1),this._result=t.POINT_INTERSECTION,null;
          }this._result=t.NO_INTERSECTION;
        },e.prototype.normalizeToMinimum=function(t,e,n,i,r){
          r.x=this.smallestInAbsValue(t.x,e.x,n.x,i.x),r.y=this.smallestInAbsValue(t.y,e.y,n.y,i.y),t.x-=r.x,t.y-=r.y,e.x-=r.x,e.y-=r.y,n.x-=r.x,n.y-=r.y,i.x-=r.x,i.y-=r.y;
        },e.prototype.safeHCoordinateIntersection=function(t,n,i,r){
          var o=null;try{
            o=U.intersection(t,n,i,r);
          }catch(s){
            if(!(s instanceof V)) {
              throw s;
            }o=e.nearestEndpoint(t,n,i,r);
          }return o;
        },e.prototype.intersection=function(t,n,i,r){
          var o=this.intersectionWithNormalization(t,n,i,r);return this.isInSegmentEnvelopes(o)||(o=new N(e.nearestEndpoint(t,n,i,r))),null!==this._precisionModel&&this._precisionModel.makePrecise(o),o;
        },e.prototype.smallestInAbsValue=function(t,e,n,i){
          var r=t,o=Math.abs(r);return Math.abs(e)<o&&(r=e,o=Math.abs(e)),Math.abs(n)<o&&(r=n,o=Math.abs(n)),Math.abs(i)<o&&(r=i),r;
        },e.prototype.checkDD=function(t,e,n,i,r){
          var o=k.intersection(t,e,n,i),s=this.isInSegmentEnvelopes(o);z.out.println("DD in env = "+s+"  --------------------- "+o),r.distance(o)>1e-4&&z.out.println("Distance = "+r.distance(o));
        },e.prototype.intersectionWithNormalization=function(t,e,n,i){
          var r=new N(t),o=new N(e),s=new N(n),a=new N(i),u=new N;this.normalizeToEnvCentre(r,o,s,a,u);var c=this.safeHCoordinateIntersection(r,o,s,a);return c.x+=u.x,c.y+=u.y,c;
        },e.prototype.computeCollinearIntersection=function(e,n,i,r){
          var o=Y.intersects(e,n,i),s=Y.intersects(e,n,r),a=Y.intersects(i,r,e),u=Y.intersects(i,r,n);return o&&s?(this._intPt[0]=i,this._intPt[1]=r,t.COLLINEAR_INTERSECTION):a&&u?(this._intPt[0]=e,this._intPt[1]=n,t.COLLINEAR_INTERSECTION):o&&a?(this._intPt[0]=i,this._intPt[1]=e,!i.equals(e)||s||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):o&&u?(this._intPt[0]=i,this._intPt[1]=n,!i.equals(n)||s||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&a?(this._intPt[0]=r,this._intPt[1]=e,!r.equals(e)||o||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&u?(this._intPt[0]=r,this._intPt[1]=n,!r.equals(n)||o||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):t.NO_INTERSECTION;
        },e.prototype.normalizeToEnvCentre=function(t,e,n,i,r){
          var o=t.x<e.x?t.x:e.x,s=t.y<e.y?t.y:e.y,a=t.x>e.x?t.x:e.x,u=t.y>e.y?t.y:e.y,c=n.x<i.x?n.x:i.x,l=n.y<i.y?n.y:i.y,h=n.x>i.x?n.x:i.x,p=n.y>i.y?n.y:i.y,f=((o>c?o:c)+(a<h?a:h))/2,d=((s>l?s:l)+(u<p?u:p))/2;r.x=f,r.y=d,t.x-=r.x,t.y-=r.y,e.x-=r.x,e.y-=r.y,n.x-=r.x,n.y-=r.y,i.x-=r.x,i.y-=r.y;
        },e.prototype.computeIntersect=function(e,n,i,r){
          if(this._isProper=!1,!Y.intersects(e,n,i,r)) {
            return t.NO_INTERSECTION;
          }var o=at.orientationIndex(e,n,i),s=at.orientationIndex(e,n,r);if(o>0&&s>0||o<0&&s<0) {
            return t.NO_INTERSECTION;
          }var a=at.orientationIndex(i,r,e),u=at.orientationIndex(i,r,n);return a>0&&u>0||a<0&&u<0?t.NO_INTERSECTION:0===o&&0===s&&0===a&&0===u?this.computeCollinearIntersection(e,n,i,r):(0===o||0===s||0===a||0===u?(this._isProper=!1,e.equals2D(i)||e.equals2D(r)?this._intPt[0]=e:n.equals2D(i)||n.equals2D(r)?this._intPt[0]=n:0===o?this._intPt[0]=new N(i):0===s?this._intPt[0]=new N(r):0===a?this._intPt[0]=new N(e):0===u&&(this._intPt[0]=new N(n))):(this._isProper=!0,this._intPt[0]=this.intersection(e,n,i,r)),t.POINT_INTERSECTION);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e.nearestEndpoint=function(t,e,n,i){
          var r=t,o=at.distancePointLine(t,n,i),s=at.distancePointLine(e,n,i);return s<o&&(o=s,r=e),(s=at.distancePointLine(n,t,e))<o&&(o=s,r=n),(s=at.distancePointLine(i,t,e))<o&&(o=s,r=i),r;
        },e;
      }(nt),ot=function(){};ot.prototype.interfaces_=function(){
      return[];
    },ot.prototype.getClass=function(){
      return ot;
    },ot.orientationIndex=function(t,e,n){
      var i=e.x-t.x,r=e.y-t.y,o=n.x-e.x,s=n.y-e.y;return ot.signOfDet2x2(i,r,o,s);
    },ot.signOfDet2x2=function(t,e,n,i){
      var r=null,o=null,s=null;if(r=1,0===t||0===i) {
        return 0===e||0===n?0:e>0?n>0?-r:r:n>0?r:-r;
      }if(0===e||0===n) {
        return i>0?t>0?r:-r:t>0?-r:r;
      }if(e>0?i>0?e<=i||(r=-r,o=t,t=n,n=o,o=e,e=i,i=o):e<=-i?(r=-r,n=-n,i=-i):(o=t,t=-n,n=o,o=e,e=-i,i=o):i>0?-e<=i?(r=-r,t=-t,e=-e):(o=-t,t=n,n=o,o=-e,e=i,i=o):e>=i?(t=-t,e=-e,n=-n,i=-i):(r=-r,o=-t,t=-n,n=o,o=-e,e=-i,i=o),t>0){
        if(!(n>0)) {
          return r;
        }if(!(t<=n)) {
          return r;
        }
      }else{
        if(n>0) {
          return-r;
        }if(!(t>=n)) {
          return-r;
        }r=-r,t=-t,n=-n;
      }for(;;){
        if(s=Math.floor(n/t),n-=s*t,(i-=s*e)<0) {
          return-r;
        }if(i>e) {
          return r;
        }if(t>n+n){
          if(e<i+i) {
            return r;
          }
        }else{
          if(e>i+i) {
            return-r;
          }n=t-n,i=e-i,r=-r;
        }if(0===i) {
          return 0===n?0:-r;
        }if(0===n) {
          return r;
        }if(s=Math.floor(t/n),t-=s*n,(e-=s*i)<0) {
          return r;
        }if(e>i) {
          return-r;
        }if(n>t+t){
          if(i<e+e) {
            return-r;
          }
        }else{
          if(i>e+e) {
            return r;
          }t=n-t,e=i-e,r=-r;
        }if(0===e) {
          return 0===t?0:r;
        }if(0===t) {
          return-r;
        }
      }
    };var st=function(){
      this._p=null,this._crossingCount=0,this._isPointOnSegment=!1;var t=arguments[0];this._p=t;
    };st.prototype.countSegment=function(t,e){
      if(t.x<this._p.x&&e.x<this._p.x) {
        return null;
      }if(this._p.x===e.x&&this._p.y===e.y) {
        return this._isPointOnSegment=!0,null;
      }if(t.y===this._p.y&&e.y===this._p.y){
        var n=t.x,i=e.x;return n>i&&(n=e.x,i=t.x),this._p.x>=n&&this._p.x<=i&&(this._isPointOnSegment=!0),null;
      }if(t.y>this._p.y&&e.y<=this._p.y||e.y>this._p.y&&t.y<=this._p.y){
        var r=t.x-this._p.x,o=t.y-this._p.y,s=e.x-this._p.x,a=e.y-this._p.y,u=ot.signOfDet2x2(r,o,s,a);if(0===u) {
          return this._isPointOnSegment=!0,null;
        }a<o&&(u=-u),u>0&&this._crossingCount++;
      }
    },st.prototype.isPointInPolygon=function(){
      return this.getLocation()!==L.EXTERIOR;
    },st.prototype.getLocation=function(){
      return this._isPointOnSegment?L.BOUNDARY:this._crossingCount%2==1?L.INTERIOR:L.EXTERIOR;
    },st.prototype.isOnSegment=function(){
      return this._isPointOnSegment;
    },st.prototype.interfaces_=function(){
      return[];
    },st.prototype.getClass=function(){
      return st;
    },st.locatePointInRing=function(){
      if(arguments[0]instanceof N&&T(arguments[1],j)){
        for(var t=arguments[0],e=arguments[1],n=new st(t),i=new N,r=new N,o=1;o<e.size();o++) {
          if(e.getCoordinate(o,i),e.getCoordinate(o-1,r),n.countSegment(i,r),n.isOnSegment()) {
            return n.getLocation();
          }
        }return n.getLocation();
      }if(arguments[0]instanceof N&&arguments[1]instanceof Array){
        for(var s=arguments[0],a=arguments[1],u=new st(s),c=1;c<a.length;c++){
          var l=a[c],h=a[c-1];if(u.countSegment(l,h),u.isOnSegment()) {
            return u.getLocation();
          }
        }return u.getLocation();
      }
    };var at=function(){},ut={ CLOCKWISE:{ configurable:!0 },RIGHT:{ configurable:!0 },COUNTERCLOCKWISE:{ configurable:!0 },LEFT:{ configurable:!0 },COLLINEAR:{ configurable:!0 },STRAIGHT:{ configurable:!0 }};at.prototype.interfaces_=function(){
      return[];
    },at.prototype.getClass=function(){
      return at;
    },at.orientationIndex=function(t,e,n){
      return k.orientationIndex(t,e,n);
    },at.signedArea=function(){
      if(arguments[0]instanceof Array){
        var t=arguments[0];if(t.length<3) {
          return 0;
        }for(var e=0,n=t[0].x,i=1;i<t.length-1;i++){
          var r=t[i].x-n,o=t[i+1].y;e+=r*(t[i-1].y-o);
        }return e/2;
      }if(T(arguments[0],j)){
        var s=arguments[0],a=s.size();if(a<3) {
          return 0;
        }var u=new N,c=new N,l=new N;s.getCoordinate(0,c),s.getCoordinate(1,l);var h=c.x;l.x-=h;for(var p=0,f=1;f<a-1;f++) {
          u.y=c.y,c.x=l.x,c.y=l.y,s.getCoordinate(f+1,l),l.x-=h,p+=c.x*(u.y-l.y);
        }return p/2;
      }
    },at.distanceLineLine=function(t,e,n,i){
      if(t.equals(e)) {
        return at.distancePointLine(t,n,i);
      }if(n.equals(i)) {
        return at.distancePointLine(i,t,e);
      }var r=!1;if(Y.intersects(t,e,n,i)){
        var o=(e.x-t.x)*(i.y-n.y)-(e.y-t.y)*(i.x-n.x);if(0===o) {
          r=!0;
        }else{
          var s=(t.y-n.y)*(i.x-n.x)-(t.x-n.x)*(i.y-n.y),a=((t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y))/o,u=s/o;(u<0||u>1||a<0||a>1)&&(r=!0);
        }
      }else {
        r=!0;
      }return r?R.min(at.distancePointLine(t,n,i),at.distancePointLine(e,n,i),at.distancePointLine(n,t,e),at.distancePointLine(i,t,e)):0;
    },at.isPointInRing=function(t,e){
      return at.locatePointInRing(t,e)!==L.EXTERIOR;
    },at.computeLength=function(t){
      var e=t.size();if(e<=1) {
        return 0;
      }var n=0,i=new N;t.getCoordinate(0,i);for(var r=i.x,o=i.y,s=1;s<e;s++){
        t.getCoordinate(s,i);var a=i.x,u=i.y,c=a-r,l=u-o;n+=Math.sqrt(c*c+l*l),r=a,o=u;
      }return n;
    },at.isCCW=function(t){
      var e=t.length-1;if(e<3) {
        throw new v("Ring has fewer than 4 points, so orientation cannot be determined");
      }for(var n=t[0],i=0,r=1;r<=e;r++){
        var o=t[r];o.y>n.y&&(n=o,i=r);
      }var s=i;do{
        (s-=1)<0&&(s=e);
      }while(t[s].equals2D(n)&&s!==i);var a=i;do{
        a=(a+1)%e;
      }while(t[a].equals2D(n)&&a!==i);var u=t[s],c=t[a];if(u.equals2D(n)||c.equals2D(n)||u.equals2D(c)) {
        return!1;
      }var l=at.computeOrientation(u,n,c),h=!1;return h=0===l?u.x>c.x:l>0,h;
    },at.locatePointInRing=function(t,e){
      return st.locatePointInRing(t,e);
    },at.distancePointLinePerpendicular=function(t,e,n){
      var i=(n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y),r=((e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y))/i;return Math.abs(r)*Math.sqrt(i);
    },at.computeOrientation=function(t,e,n){
      return at.orientationIndex(t,e,n);
    },at.distancePointLine=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1];if(0===e.length) {
          throw new v("Line array must contain at least one vertex");
        }for(var n=t.distance(e[0]),i=0;i<e.length-1;i++){
          var r=at.distancePointLine(t,e[i],e[i+1]);r<n&&(n=r);
        }return n;
      }if(3===arguments.length){
        var o=arguments[0],s=arguments[1],a=arguments[2];if(s.x===a.x&&s.y===a.y) {
          return o.distance(s);
        }var u=(a.x-s.x)*(a.x-s.x)+(a.y-s.y)*(a.y-s.y),c=((o.x-s.x)*(a.x-s.x)+(o.y-s.y)*(a.y-s.y))/u;if(c<=0) {
          return o.distance(s);
        }if(c>=1) {
          return o.distance(a);
        }var l=((s.y-o.y)*(a.x-s.x)-(s.x-o.x)*(a.y-s.y))/u;return Math.abs(l)*Math.sqrt(u);
      }
    },at.isOnLine=function(t,e){
      for(var n=new rt,i=1;i<e.length;i++){
        var r=e[i-1],o=e[i];if(n.computeIntersection(t,r,o),n.hasIntersection()) {
          return!0;
        }
      }return!1;
    },ut.CLOCKWISE.get=function(){
      return-1;
    },ut.RIGHT.get=function(){
      return at.CLOCKWISE;
    },ut.COUNTERCLOCKWISE.get=function(){
      return 1;
    },ut.LEFT.get=function(){
      return at.COUNTERCLOCKWISE;
    },ut.COLLINEAR.get=function(){
      return 0;
    },ut.STRAIGHT.get=function(){
      return at.COLLINEAR;
    },Object.defineProperties(at,ut);var ct=function(){};ct.prototype.filter=function(t){},ct.prototype.interfaces_=function(){
      return[];
    },ct.prototype.getClass=function(){
      return ct;
    };var lt=function(){
        var t=arguments[0];this._envelope=null,this._factory=null,this._SRID=null,this._userData=null,this._factory=t,this._SRID=t.getSRID();
      },ht={ serialVersionUID:{ configurable:!0 },SORTINDEX_POINT:{ configurable:!0 },SORTINDEX_MULTIPOINT:{ configurable:!0 },SORTINDEX_LINESTRING:{ configurable:!0 },SORTINDEX_LINEARRING:{ configurable:!0 },SORTINDEX_MULTILINESTRING:{ configurable:!0 },SORTINDEX_POLYGON:{ configurable:!0 },SORTINDEX_MULTIPOLYGON:{ configurable:!0 },SORTINDEX_GEOMETRYCOLLECTION:{ configurable:!0 },geometryChangedFilter:{ configurable:!0 }};lt.prototype.isGeometryCollection=function(){
      return this.getSortIndex()===lt.SORTINDEX_GEOMETRYCOLLECTION;
    },lt.prototype.getFactory=function(){
      return this._factory;
    },lt.prototype.getGeometryN=function(t){
      return this;
    },lt.prototype.getArea=function(){
      return 0;
    },lt.prototype.isRectangle=function(){
      return!1;
    },lt.prototype.equals=function(){
      if(arguments[0]instanceof lt){
        var t=arguments[0];return null!==t&&this.equalsTopo(t);
      }if(arguments[0]instanceof Object){
        var e=arguments[0];if(!(e instanceof lt)) {
          return!1;
        }var n=e;return this.equalsExact(n);
      }
    },lt.prototype.equalsExact=function(t){
      return this===t||this.equalsExact(t,0);
    },lt.prototype.geometryChanged=function(){
      this.apply(lt.geometryChangedFilter);
    },lt.prototype.geometryChangedAction=function(){
      this._envelope=null;
    },lt.prototype.equalsNorm=function(t){
      return null!==t&&this.norm().equalsExact(t.norm());
    },lt.prototype.getLength=function(){
      return 0;
    },lt.prototype.getNumGeometries=function(){
      return 1;
    },lt.prototype.compareTo=function(){
      if(1===arguments.length){
        var t=arguments[0],e=t;return this.getSortIndex()!==e.getSortIndex()?this.getSortIndex()-e.getSortIndex():this.isEmpty()&&e.isEmpty()?0:this.isEmpty()?-1:e.isEmpty()?1:this.compareToSameClass(t);
      }if(2===arguments.length){
        var n=arguments[0],i=arguments[1];return this.getSortIndex()!==n.getSortIndex()?this.getSortIndex()-n.getSortIndex():this.isEmpty()&&n.isEmpty()?0:this.isEmpty()?-1:n.isEmpty()?1:this.compareToSameClass(n,i);
      }
    },lt.prototype.getUserData=function(){
      return this._userData;
    },lt.prototype.getSRID=function(){
      return this._SRID;
    },lt.prototype.getEnvelope=function(){
      return this.getFactory().toGeometry(this.getEnvelopeInternal());
    },lt.prototype.checkNotGeometryCollection=function(t){
      if(t.getSortIndex()===lt.SORTINDEX_GEOMETRYCOLLECTION) {
        throw new v("This method does not support GeometryCollection arguments");
      }
    },lt.prototype.equal=function(t,e,n){
      return 0===n?t.equals(e):t.distance(e)<=n;
    },lt.prototype.norm=function(){
      var t=this.copy();return t.normalize(),t;
    },lt.prototype.getPrecisionModel=function(){
      return this._factory.getPrecisionModel();
    },lt.prototype.getEnvelopeInternal=function(){
      return null===this._envelope&&(this._envelope=this.computeEnvelopeInternal()),new Y(this._envelope);
    },lt.prototype.setSRID=function(t){
      this._SRID=t;
    },lt.prototype.setUserData=function(t){
      this._userData=t;
    },lt.prototype.compare=function(t,e){
      for(var n=t.iterator(),i=e.iterator();n.hasNext()&&i.hasNext();){
        var r=n.next(),o=i.next(),s=r.compareTo(o);if(0!==s) {
          return s;
        }
      }return n.hasNext()?1:i.hasNext()?-1:0;
    },lt.prototype.hashCode=function(){
      return this.getEnvelopeInternal().hashCode();
    },lt.prototype.isGeometryCollectionOrDerived=function(){
      return this.getSortIndex()===lt.SORTINDEX_GEOMETRYCOLLECTION||this.getSortIndex()===lt.SORTINDEX_MULTIPOINT||this.getSortIndex()===lt.SORTINDEX_MULTILINESTRING||this.getSortIndex()===lt.SORTINDEX_MULTIPOLYGON;
    },lt.prototype.interfaces_=function(){
      return[ E,x,e ];
    },lt.prototype.getClass=function(){
      return lt;
    },lt.hasNonEmptyElements=function(t){
      for(var e=0;e<t.length;e++) {
        if(!t[e].isEmpty()) {
          return!0;
        }
      }return!1;
    },lt.hasNullElements=function(t){
      for(var e=0;e<t.length;e++) {
        if(null===t[e]) {
          return!0;
        }
      }return!1;
    },ht.serialVersionUID.get=function(){
      return 0x799ea46522854c00;
    },ht.SORTINDEX_POINT.get=function(){
      return 0;
    },ht.SORTINDEX_MULTIPOINT.get=function(){
      return 1;
    },ht.SORTINDEX_LINESTRING.get=function(){
      return 2;
    },ht.SORTINDEX_LINEARRING.get=function(){
      return 3;
    },ht.SORTINDEX_MULTILINESTRING.get=function(){
      return 4;
    },ht.SORTINDEX_POLYGON.get=function(){
      return 5;
    },ht.SORTINDEX_MULTIPOLYGON.get=function(){
      return 6;
    },ht.SORTINDEX_GEOMETRYCOLLECTION.get=function(){
      return 7;
    },ht.geometryChangedFilter.get=function(){
      return pt;
    },Object.defineProperties(lt,ht);var pt=function(){};pt.interfaces_=function(){
      return[ ct ];
    },pt.filter=function(t){
      t.geometryChangedAction();
    };var ft=function(){};ft.prototype.filter=function(t){},ft.prototype.interfaces_=function(){
      return[];
    },ft.prototype.getClass=function(){
      return ft;
    };var dt=function(){},gt={ Mod2BoundaryNodeRule:{ configurable:!0 },EndPointBoundaryNodeRule:{ configurable:!0 },MultiValentEndPointBoundaryNodeRule:{ configurable:!0 },MonoValentEndPointBoundaryNodeRule:{ configurable:!0 },MOD2_BOUNDARY_RULE:{ configurable:!0 },ENDPOINT_BOUNDARY_RULE:{ configurable:!0 },MULTIVALENT_ENDPOINT_BOUNDARY_RULE:{ configurable:!0 },MONOVALENT_ENDPOINT_BOUNDARY_RULE:{ configurable:!0 },OGC_SFS_BOUNDARY_RULE:{ configurable:!0 }};dt.prototype.isInBoundary=function(t){},dt.prototype.interfaces_=function(){
      return[];
    },dt.prototype.getClass=function(){
      return dt;
    },gt.Mod2BoundaryNodeRule.get=function(){
      return yt;
    },gt.EndPointBoundaryNodeRule.get=function(){
      return _t;
    },gt.MultiValentEndPointBoundaryNodeRule.get=function(){
      return vt;
    },gt.MonoValentEndPointBoundaryNodeRule.get=function(){
      return mt;
    },gt.MOD2_BOUNDARY_RULE.get=function(){
      return new yt;
    },gt.ENDPOINT_BOUNDARY_RULE.get=function(){
      return new _t;
    },gt.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){
      return new vt;
    },gt.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){
      return new mt;
    },gt.OGC_SFS_BOUNDARY_RULE.get=function(){
      return dt.MOD2_BOUNDARY_RULE;
    },Object.defineProperties(dt,gt);var yt=function(){};yt.prototype.isInBoundary=function(t){
      return t%2==1;
    },yt.prototype.interfaces_=function(){
      return[ dt ];
    },yt.prototype.getClass=function(){
      return yt;
    };var _t=function(){};_t.prototype.isInBoundary=function(t){
      return t>0;
    },_t.prototype.interfaces_=function(){
      return[ dt ];
    },_t.prototype.getClass=function(){
      return _t;
    };var vt=function(){};vt.prototype.isInBoundary=function(t){
      return t>1;
    },vt.prototype.interfaces_=function(){
      return[ dt ];
    },vt.prototype.getClass=function(){
      return vt;
    };var mt=function(){};mt.prototype.isInBoundary=function(t){
      return 1===t;
    },mt.prototype.interfaces_=function(){
      return[ dt ];
    },mt.prototype.getClass=function(){
      return mt;
    };var bt=function(){};bt.prototype.add=function(){},bt.prototype.addAll=function(){},bt.prototype.isEmpty=function(){},bt.prototype.iterator=function(){},bt.prototype.size=function(){},bt.prototype.toArray=function(){},bt.prototype.remove=function(){},(n.prototype=new Error).name="IndexOutOfBoundsException";var xt=function(){};xt.prototype.hasNext=function(){},xt.prototype.next=function(){},xt.prototype.remove=function(){};var Et=function(t){
      function e(){
        t.apply(this,arguments);
      }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(){},e.prototype.set=function(){},e.prototype.isEmpty=function(){},e;
    }(bt);(i.prototype=new Error).name="NoSuchElementException";var It=function(t){
        function e(){
          t.call(this),this.array_=[],arguments[0]instanceof bt&&this.addAll(arguments[0]);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.ensureCapacity=function(){},e.prototype.interfaces_=function(){
          return[ t,bt ];
        },e.prototype.add=function(t){
          return 1===arguments.length?this.array_.push(t):this.array_.splice(arguments[0],arguments[1]),!0;
        },e.prototype.clear=function(){
          this.array_=[];
        },e.prototype.addAll=function(t){
          for(var e=t.iterator();e.hasNext();) {
            this.add(e.next());
          }return!0;
        },e.prototype.set=function(t,e){
          var n=this.array_[t];return this.array_[t]=e,n;
        },e.prototype.iterator=function(){
          return new Nt(this);
        },e.prototype.get=function(t){
          if(t<0||t>=this.size()) {
            throw new n;
          }return this.array_[t];
        },e.prototype.isEmpty=function(){
          return 0===this.array_.length;
        },e.prototype.size=function(){
          return this.array_.length;
        },e.prototype.toArray=function(){
          for(var t=[],e=0,n=this.array_.length;e<n;e++) {
            t.push(this.array_[e]);
          }return t;
        },e.prototype.remove=function(t){
          for(var e=!1,n=0,i=this.array_.length;n<i;n++) {
            if(this.array_[n]===t){
              this.array_.splice(n,1),e=!0;break;
            }
          }return e;
        },e;
      }(Et),Nt=function(t){
        function e(e){
          t.call(this),this.arrayList_=e,this.position_=0;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){
          if(this.position_===this.arrayList_.size()) {
            throw new i;
          }return this.arrayList_.get(this.position_++);
        },e.prototype.hasNext=function(){
          return this.position_<this.arrayList_.size();
        },e.prototype.set=function(t){
          return this.arrayList_.set(this.position_-1,t);
        },e.prototype.remove=function(){
          this.arrayList_.remove(this.arrayList_.get(this.position_));
        },e;
      }(xt),Ct=function(t){
        function e(){
          if(t.call(this),0===arguments.length) {

          }else if(1===arguments.length){
            var e=arguments[0];this.ensureCapacity(e.length),this.add(e,!0);
          }else if(2===arguments.length){
            var n=arguments[0],i=arguments[1];this.ensureCapacity(n.length),this.add(n,i);
          }
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ coordArrayType:{ configurable:!0 }};return n.coordArrayType.get=function(){
          return new Array(0).fill(null);
        },e.prototype.getCoordinate=function(t){
          return this.get(t);
        },e.prototype.addAll=function(){
          if(2===arguments.length){
            for(var e=arguments[0],n=arguments[1],i=!1,r=e.iterator();r.hasNext();) {
              this.add(r.next(),n),i=!0;
            }return i;
          }return t.prototype.addAll.apply(this,arguments);
        },e.prototype.clone=function(){
          for(var e=t.prototype.clone.call(this),n=0;n<this.size();n++) {
            e.add(n,this.get(n).copy());
          }return e;
        },e.prototype.toCoordinateArray=function(){
          return this.toArray(e.coordArrayType);
        },e.prototype.add=function(){
          if(1===arguments.length){
            var e=arguments[0];t.prototype.add.call(this,e);
          }else if(2===arguments.length){
            if(arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){
              var n=arguments[0],i=arguments[1];return this.add(n,i,!0),!0;
            }if(arguments[0]instanceof N&&"boolean"==typeof arguments[1]){
              var r=arguments[0];if(!arguments[1]&&this.size()>=1&&this.get(this.size()-1).equals2D(r)) {
                return null;
              }t.prototype.add.call(this,r);
            }else if(arguments[0]instanceof Object&&"boolean"==typeof arguments[1]){
              var o=arguments[0],s=arguments[1];return this.add(o,s),!0;
            }
          }else if(3===arguments.length){
            if("boolean"==typeof arguments[2]&&arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){
              var a=arguments[0],u=arguments[1];if(arguments[2]) {
                for(var c=0;c<a.length;c++) {
                  this.add(a[c],u);
                }
              }else {
                for(var l=a.length-1;l>=0;l--) {
                  this.add(a[l],u);
                }
              }return!0;
            }if("boolean"==typeof arguments[2]&&Number.isInteger(arguments[0])&&arguments[1]instanceof N){
              var h=arguments[0],p=arguments[1];if(!arguments[2]){
                var f=this.size();if(f>0){
                  if(h>0&&this.get(h-1).equals2D(p)) {
                    return null;
                  }if(h<f&&this.get(h).equals2D(p)) {
                    return null;
                  }
                }
              }t.prototype.add.call(this,h,p);
            }
          }else if(4===arguments.length){
            var d=arguments[0],g=arguments[1],y=arguments[2],_=arguments[3],v=1;y>_&&(v=-1);for(var m=y;m!==_;m+=v) {
              this.add(d[m],g);
            }return!0;
          }
        },e.prototype.closeRing=function(){
          this.size()>0&&this.add(new N(this.get(0)),!1);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },Object.defineProperties(e,n),e;
      }(It),St=function(){},wt={ ForwardComparator:{ configurable:!0 },BidirectionalComparator:{ configurable:!0 },coordArrayType:{ configurable:!0 }};wt.ForwardComparator.get=function(){
      return Lt;
    },wt.BidirectionalComparator.get=function(){
      return Ot;
    },wt.coordArrayType.get=function(){
      return new Array(0).fill(null);
    },St.prototype.interfaces_=function(){
      return[];
    },St.prototype.getClass=function(){
      return St;
    },St.isRing=function(t){
      return!(t.length<4)&&!!t[0].equals2D(t[t.length-1]);
    },St.ptNotInList=function(t,e){
      for(var n=0;n<t.length;n++){
        var i=t[n];if(St.indexOf(i,e)<0) {
          return i;
        }
      }return null;
    },St.scroll=function(t,e){
      var n=St.indexOf(e,t);if(n<0) {
        return null;
      }var i=new Array(t.length).fill(null);z.arraycopy(t,n,i,0,t.length-n),z.arraycopy(t,0,i,t.length-n,n),z.arraycopy(i,0,t,0,t.length);
    },St.equals=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1];if(t===e) {
          return!0;
        }if(null===t||null===e) {
          return!1;
        }if(t.length!==e.length) {
          return!1;
        }for(var n=0;n<t.length;n++) {
          if(!t[n].equals(e[n])) {
            return!1;
          }
        }return!0;
      }if(3===arguments.length){
        var i=arguments[0],r=arguments[1],o=arguments[2];if(i===r) {
          return!0;
        }if(null===i||null===r) {
          return!1;
        }if(i.length!==r.length) {
          return!1;
        }for(var s=0;s<i.length;s++) {
          if(0!==o.compare(i[s],r[s])) {
            return!1;
          }
        }return!0;
      }
    },St.intersection=function(t,e){
      for(var n=new Ct,i=0;i<t.length;i++) {
        e.intersects(t[i])&&n.add(t[i],!0);
      }return n.toCoordinateArray();
    },St.hasRepeatedPoints=function(t){
      for(var e=1;e<t.length;e++) {
        if(t[e-1].equals(t[e])) {
          return!0;
        }
      }return!1;
    },St.removeRepeatedPoints=function(t){
      return St.hasRepeatedPoints(t)?new Ct(t,!1).toCoordinateArray():t;
    },St.reverse=function(t){
      for(var e=t.length-1,n=Math.trunc(e/2),i=0;i<=n;i++){
        var r=t[i];t[i]=t[e-i],t[e-i]=r;
      }
    },St.removeNull=function(t){
      for(var e=0,n=0;n<t.length;n++) {
        null!==t[n]&&e++;
      }var i=new Array(e).fill(null);if(0===e) {
        return i;
      }for(var r=0,o=0;o<t.length;o++) {
        null!==t[o]&&(i[r++]=t[o]);
      }return i;
    },St.copyDeep=function(){
      if(1===arguments.length){
        for(var t=arguments[0],e=new Array(t.length).fill(null),n=0;n<t.length;n++) {
          e[n]=new N(t[n]);
        }return e;
      }if(5===arguments.length) {
        for(var i=arguments[0],r=arguments[1],o=arguments[2],s=arguments[3],a=arguments[4],u=0;u<a;u++) {
          o[s+u]=new N(i[r+u]);
        }
      }
    },St.isEqualReversed=function(t,e){
      for(var n=0;n<t.length;n++){
        var i=t[n],r=e[t.length-n-1];if(0!==i.compareTo(r)) {
          return!1;
        }
      }return!0;
    },St.envelope=function(t){
      for(var e=new Y,n=0;n<t.length;n++) {
        e.expandToInclude(t[n]);
      }return e;
    },St.toCoordinateArray=function(t){
      return t.toArray(St.coordArrayType);
    },St.atLeastNCoordinatesOrNothing=function(t,e){
      return e.length>=t?e:[];
    },St.indexOf=function(t,e){
      for(var n=0;n<e.length;n++) {
        if(t.equals(e[n])) {
          return n;
        }
      }return-1;
    },St.increasingDirection=function(t){
      for(var e=0;e<Math.trunc(t.length/2);e++){
        var n=t.length-1-e,i=t[e].compareTo(t[n]);if(0!==i) {
          return i;
        }
      }return 1;
    },St.compare=function(t,e){
      for(var n=0;n<t.length&&n<e.length;){
        var i=t[n].compareTo(e[n]);if(0!==i) {
          return i;
        }n++;
      }return n<e.length?-1:n<t.length?1:0;
    },St.minCoordinate=function(t){
      for(var e=null,n=0;n<t.length;n++) {
        (null===e||e.compareTo(t[n])>0)&&(e=t[n]);
      }return e;
    },St.extract=function(t,e,n){
      e=R.clamp(e,0,t.length);var i=(n=R.clamp(n,-1,t.length))-e+1;n<0&&(i=0),e>=t.length&&(i=0),n<e&&(i=0);var r=new Array(i).fill(null);if(0===i) {
        return r;
      }for(var o=0,s=e;s<=n;s++) {
        r[o++]=t[s];
      }return r;
    },Object.defineProperties(St,wt);var Lt=function(){};Lt.prototype.compare=function(t,e){
      return St.compare(t,e);
    },Lt.prototype.interfaces_=function(){
      return[ I ];
    },Lt.prototype.getClass=function(){
      return Lt;
    };var Ot=function(){};Ot.prototype.compare=function(t,e){
      var n=t,i=e;if(n.length<i.length) {
        return-1;
      }if(n.length>i.length) {
        return 1;
      }if(0===n.length) {
        return 0;
      }var r=St.compare(n,i);return St.isEqualReversed(n,i)?0:r;
    },Ot.prototype.OLDcompare=function(t,e){
      var n=t,i=e;if(n.length<i.length) {
        return-1;
      }if(n.length>i.length) {
        return 1;
      }if(0===n.length) {
        return 0;
      }for(var r=St.increasingDirection(n),o=St.increasingDirection(i),s=r>0?0:n.length-1,a=o>0?0:n.length-1,u=0;u<n.length;u++){
        var c=n[s].compareTo(i[a]);if(0!==c) {
          return c;
        }s+=r,a+=o;
      }return 0;
    },Ot.prototype.interfaces_=function(){
      return[ I ];
    },Ot.prototype.getClass=function(){
      return Ot;
    };var Tt=function(){};Tt.prototype.get=function(){},Tt.prototype.put=function(){},Tt.prototype.size=function(){},Tt.prototype.values=function(){},Tt.prototype.entrySet=function(){};var Rt=function(t){
      function e(){
        t.apply(this,arguments);
      }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e;
    }(Tt);(r.prototype=new Error).name="OperationNotSupported",(o.prototype=new bt).contains=function(){};var Mt=function(t){
        function e(){
          t.call(this),this.array_=[],arguments[0]instanceof bt&&this.addAll(arguments[0]);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.contains=function(t){
          for(var e=0,n=this.array_.length;e<n;e++) {
            if(this.array_[e]===t) {
              return!0;
            }
          }return!1;
        },e.prototype.add=function(t){
          return!this.contains(t)&&(this.array_.push(t),!0);
        },e.prototype.addAll=function(t){
          for(var e=t.iterator();e.hasNext();) {
            this.add(e.next());
          }return!0;
        },e.prototype.remove=function(t){
          throw new Error;
        },e.prototype.size=function(){
          return this.array_.length;
        },e.prototype.isEmpty=function(){
          return 0===this.array_.length;
        },e.prototype.toArray=function(){
          for(var t=[],e=0,n=this.array_.length;e<n;e++) {
            t.push(this.array_[e]);
          }return t;
        },e.prototype.iterator=function(){
          return new Pt(this);
        },e;
      }(o),Pt=function(t){
        function e(e){
          t.call(this),this.hashSet_=e,this.position_=0;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){
          if(this.position_===this.hashSet_.size()) {
            throw new i;
          }return this.hashSet_.array_[this.position_++];
        },e.prototype.hasNext=function(){
          return this.position_<this.hashSet_.size();
        },e.prototype.remove=function(){
          throw new r;
        },e;
      }(xt),Dt=0;(h.prototype=new Rt).get=function(t){
      for(var e=this.root_;null!==e;){
        var n=t.compareTo(e.key);if(n<0) {
          e=e.left;
        }else{
          if(!(n>0)) {
            return e.value;
          }e=e.right;
        }
      }return null;
    },h.prototype.put=function(t,e){
      if(null===this.root_) {
        return this.root_={ key:t,value:e,left:null,right:null,parent:null,color:Dt,getValue:function(){
          return this.value;
        },getKey:function(){
          return this.key;
        } },this.size_=1,null;
      }var n,i,r=this.root_;do{
        if(n=r,(i=t.compareTo(r.key))<0) {
          r=r.left;
        }else{
          if(!(i>0)){
            var o=r.value;return r.value=e,o;
          }r=r.right;
        }
      }while(null!==r);var s={ key:t,left:null,right:null,value:e,parent:n,color:Dt,getValue:function(){
        return this.value;
      },getKey:function(){
        return this.key;
      } };return i<0?n.left=s:n.right=s,this.fixAfterInsertion(s),this.size_++,null;
    },h.prototype.fixAfterInsertion=function(t){
      for(t.color=1;null!=t&&t!==this.root_&&1===t.parent.color;) {
        if(a(t)===c(a(a(t)))){
          var e=l(a(a(t)));1===s(e)?(u(a(t),Dt),u(e,Dt),u(a(a(t)),1),t=a(a(t))):(t===l(a(t))&&(t=a(t),this.rotateLeft(t)),u(a(t),Dt),u(a(a(t)),1),this.rotateRight(a(a(t))));
        }else{
          var n=c(a(a(t)));1===s(n)?(u(a(t),Dt),u(n,Dt),u(a(a(t)),1),t=a(a(t))):(t===c(a(t))&&(t=a(t),this.rotateRight(t)),u(a(t),Dt),u(a(a(t)),1),this.rotateLeft(a(a(t))));
        }
      }this.root_.color=Dt;
    },h.prototype.values=function(){
      var t=new It,e=this.getFirstEntry();if(null!==e) {
        for(t.add(e.value);null!==(e=h.successor(e));) {
          t.add(e.value);
        }
      }return t;
    },h.prototype.entrySet=function(){
      var t=new Mt,e=this.getFirstEntry();if(null!==e) {
        for(t.add(e);null!==(e=h.successor(e));) {
          t.add(e);
        }
      }return t;
    },h.prototype.rotateLeft=function(t){
      if(null!=t){
        var e=t.right;t.right=e.left,null!=e.left&&(e.left.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.left===t?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e;
      }
    },h.prototype.rotateRight=function(t){
      if(null!=t){
        var e=t.left;t.left=e.right,null!=e.right&&(e.right.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.right===t?t.parent.right=e:t.parent.left=e,e.right=t,t.parent=e;
      }
    },h.prototype.getFirstEntry=function(){
      var t=this.root_;if(null!=t) {
        for(;null!=t.left;) {
          t=t.left;
        }
      }return t;
    },h.successor=function(t){
      if(null===t) {
        return null;
      }if(null!==t.right){
        for(var e=t.right;null!==e.left;) {
          e=e.left;
        }return e;
      }for(var n=t.parent,i=t;null!==n&&i===n.right;) {
        i=n,n=n.parent;
      }return n;
    },h.prototype.size=function(){
      return this.size_;
    };var At=function(){};At.prototype.interfaces_=function(){
      return[];
    },At.prototype.getClass=function(){
      return At;
    },p.prototype=new o,(f.prototype=new p).contains=function(t){
      for(var e=0,n=this.array_.length;e<n;e++) {
        if(0===this.array_[e].compareTo(t)) {
          return!0;
        }
      }return!1;
    },f.prototype.add=function(t){
      if(this.contains(t)) {
        return!1;
      }for(var e=0,n=this.array_.length;e<n;e++) {
        if(1===this.array_[e].compareTo(t)) {
          return this.array_.splice(e,0,t),!0;
        }
      }return this.array_.push(t),!0;
    },f.prototype.addAll=function(t){
      for(var e=t.iterator();e.hasNext();) {
        this.add(e.next());
      }return!0;
    },f.prototype.remove=function(t){
      throw new r;
    },f.prototype.size=function(){
      return this.array_.length;
    },f.prototype.isEmpty=function(){
      return 0===this.array_.length;
    },f.prototype.toArray=function(){
      for(var t=[],e=0,n=this.array_.length;e<n;e++) {
        t.push(this.array_[e]);
      }return t;
    },f.prototype.iterator=function(){
      return new Ft(this);
    };var Ft=function(t){
      this.treeSet_=t,this.position_=0;
    };Ft.prototype.next=function(){
      if(this.position_===this.treeSet_.size()) {
        throw new i;
      }return this.treeSet_.array_[this.position_++];
    },Ft.prototype.hasNext=function(){
      return this.position_<this.treeSet_.size();
    },Ft.prototype.remove=function(){
      throw new r;
    };var $t=function(){};$t.sort=function(){
      var t,e,n,i,r=arguments[0];if(1===arguments.length) {
        i=function(t,e){
          return t.compareTo(e);
        },r.sort(i);
      }else if(2===arguments.length) {
        n=arguments[1],i=function(t,e){
          return n.compare(t,e);
        },r.sort(i);
      }else if(3===arguments.length){
        (e=r.slice(arguments[1],arguments[2])).sort();var o=r.slice(0,arguments[1]).concat(e,r.slice(arguments[2],r.length));for(r.splice(0,r.length),t=0;t<o.length;t++) {
          r.push(o[t]);
        }
      }else if(4===arguments.length) {
        for(e=r.slice(arguments[1],arguments[2]),n=arguments[3],i=function(t,e){
          return n.compare(t,e);
        },e.sort(i),o=r.slice(0,arguments[1]).concat(e,r.slice(arguments[2],r.length)),r.splice(0,r.length),t=0;t<o.length;t++) {
          r.push(o[t]);
        }
      }
    },$t.asList=function(t){
      for(var e=new It,n=0,i=t.length;n<i;n++) {
        e.add(t[n]);
      }return e;
    };var kt=function(){},Gt={ P:{ configurable:!0 },L:{ configurable:!0 },A:{ configurable:!0 },FALSE:{ configurable:!0 },TRUE:{ configurable:!0 },DONTCARE:{ configurable:!0 },SYM_FALSE:{ configurable:!0 },SYM_TRUE:{ configurable:!0 },SYM_DONTCARE:{ configurable:!0 },SYM_P:{ configurable:!0 },SYM_L:{ configurable:!0 },SYM_A:{ configurable:!0 }};Gt.P.get=function(){
      return 0;
    },Gt.L.get=function(){
      return 1;
    },Gt.A.get=function(){
      return 2;
    },Gt.FALSE.get=function(){
      return-1;
    },Gt.TRUE.get=function(){
      return-2;
    },Gt.DONTCARE.get=function(){
      return-3;
    },Gt.SYM_FALSE.get=function(){
      return"F";
    },Gt.SYM_TRUE.get=function(){
      return"T";
    },Gt.SYM_DONTCARE.get=function(){
      return"*";
    },Gt.SYM_P.get=function(){
      return"0";
    },Gt.SYM_L.get=function(){
      return"1";
    },Gt.SYM_A.get=function(){
      return"2";
    },kt.prototype.interfaces_=function(){
      return[];
    },kt.prototype.getClass=function(){
      return kt;
    },kt.toDimensionSymbol=function(t){
      switch(t){
      case kt.FALSE:return kt.SYM_FALSE;case kt.TRUE:return kt.SYM_TRUE;case kt.DONTCARE:return kt.SYM_DONTCARE;case kt.P:return kt.SYM_P;case kt.L:return kt.SYM_L;case kt.A:return kt.SYM_A;
      }throw new v("Unknown dimension value: "+t);
    },kt.toDimensionValue=function(t){
      switch(A.toUpperCase(t)){
      case kt.SYM_FALSE:return kt.FALSE;case kt.SYM_TRUE:return kt.TRUE;case kt.SYM_DONTCARE:return kt.DONTCARE;case kt.SYM_P:return kt.P;case kt.SYM_L:return kt.L;case kt.SYM_A:return kt.A;
      }throw new v("Unknown dimension symbol: "+t);
    },Object.defineProperties(kt,Gt);var jt=function(){};jt.prototype.filter=function(t){},jt.prototype.interfaces_=function(){
      return[];
    },jt.prototype.getClass=function(){
      return jt;
    };var Bt=function(){};Bt.prototype.filter=function(t,e){},Bt.prototype.isDone=function(){},Bt.prototype.isGeometryChanged=function(){},Bt.prototype.interfaces_=function(){
      return[];
    },Bt.prototype.getClass=function(){
      return Bt;
    };var qt=function(t){
        function e(e,n){
          if(t.call(this,n),this._geometries=e||[],t.hasNullElements(this._geometries)) {
            throw new v("geometries must not contain null elements");
          }
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ serialVersionUID:{ configurable:!0 }};return e.prototype.computeEnvelopeInternal=function(){
          for(var t=new Y,e=0;e<this._geometries.length;e++) {
            t.expandToInclude(this._geometries[e].getEnvelopeInternal());
          }return t;
        },e.prototype.getGeometryN=function(t){
          return this._geometries[t];
        },e.prototype.getSortIndex=function(){
          return t.SORTINDEX_GEOMETRYCOLLECTION;
        },e.prototype.getCoordinates=function(){
          for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=0;n<this._geometries.length;n++) {
            for(var i=this._geometries[n].getCoordinates(),r=0;r<i.length;r++) {
              t[++e]=i[r];
            }
          }return t;
        },e.prototype.getArea=function(){
          for(var t=0,e=0;e<this._geometries.length;e++) {
            t+=this._geometries[e].getArea();
          }return t;
        },e.prototype.equalsExact=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e)) {
              return!1;
            }var i=e;if(this._geometries.length!==i._geometries.length) {
              return!1;
            }for(var r=0;r<this._geometries.length;r++) {
              if(!this._geometries[r].equalsExact(i._geometries[r],n)) {
                return!1;
              }
            }return!0;
          }return t.prototype.equalsExact.apply(this,arguments);
        },e.prototype.normalize=function(){
          for(var t=0;t<this._geometries.length;t++) {
            this._geometries[t].normalize();
          }$t.sort(this._geometries);
        },e.prototype.getCoordinate=function(){
          return this.isEmpty()?null:this._geometries[0].getCoordinate();
        },e.prototype.getBoundaryDimension=function(){
          for(var t=kt.FALSE,e=0;e<this._geometries.length;e++) {
            t=Math.max(t,this._geometries[e].getBoundaryDimension());
          }return t;
        },e.prototype.getDimension=function(){
          for(var t=kt.FALSE,e=0;e<this._geometries.length;e++) {
            t=Math.max(t,this._geometries[e].getDimension());
          }return t;
        },e.prototype.getLength=function(){
          for(var t=0,e=0;e<this._geometries.length;e++) {
            t+=this._geometries[e].getLength();
          }return t;
        },e.prototype.getNumPoints=function(){
          for(var t=0,e=0;e<this._geometries.length;e++) {
            t+=this._geometries[e].getNumPoints();
          }return t;
        },e.prototype.getNumGeometries=function(){
          return this._geometries.length;
        },e.prototype.reverse=function(){
          for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++) {
            e[n]=this._geometries[n].reverse();
          }return this.getFactory().createGeometryCollection(e);
        },e.prototype.compareToSameClass=function(){
          if(1===arguments.length){
            var t=arguments[0],e=new f($t.asList(this._geometries)),n=new f($t.asList(t._geometries));return this.compare(e,n);
          }if(2===arguments.length){
            for(var i=arguments[0],r=arguments[1],o=i,s=this.getNumGeometries(),a=o.getNumGeometries(),u=0;u<s&&u<a;){
              var c=this.getGeometryN(u),l=o.getGeometryN(u),h=c.compareToSameClass(l,r);if(0!==h) {
                return h;
              }u++;
            }return u<s?1:u<a?-1:0;
          }
        },e.prototype.apply=function(){
          if(T(arguments[0],ft)) {
            for(var t=arguments[0],e=0;e<this._geometries.length;e++) {
              this._geometries[e].apply(t);
            }
          }else if(T(arguments[0],Bt)){
            var n=arguments[0];if(0===this._geometries.length) {
              return null;
            }for(var i=0;i<this._geometries.length&&(this._geometries[i].apply(n),!n.isDone());i++) {

            }n.isGeometryChanged()&&this.geometryChanged();
          }else if(T(arguments[0],jt)){
            var r=arguments[0];r.filter(this);for(var o=0;o<this._geometries.length;o++) {
              this._geometries[o].apply(r);
            }
          }else if(T(arguments[0],ct)){
            var s=arguments[0];s.filter(this);for(var a=0;a<this._geometries.length;a++) {
              this._geometries[a].apply(s);
            }
          }
        },e.prototype.getBoundary=function(){
          return this.checkNotGeometryCollection(this),et.shouldNeverReachHere(),null;
        },e.prototype.clone=function(){
          var e=t.prototype.clone.call(this);e._geometries=new Array(this._geometries.length).fill(null);for(var n=0;n<this._geometries.length;n++) {
            e._geometries[n]=this._geometries[n].clone();
          }return e;
        },e.prototype.getGeometryType=function(){
          return"GeometryCollection";
        },e.prototype.copy=function(){
          for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++) {
            t[n]=this._geometries[n].copy();
          }return new e(t,this._factory);
        },e.prototype.isEmpty=function(){
          for(var t=0;t<this._geometries.length;t++) {
            if(!this._geometries[t].isEmpty()) {
              return!1;
            }
          }return!0;
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },n.serialVersionUID.get=function(){
          return-0x4f07bcb1f857d800;
        },Object.defineProperties(e,n),e;
      }(lt),Vt=function(t){
        function e(){
          t.apply(this,arguments);
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ serialVersionUID:{ configurable:!0 }};return e.prototype.getSortIndex=function(){
          return lt.SORTINDEX_MULTILINESTRING;
        },e.prototype.equalsExact=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n);
          }return t.prototype.equalsExact.apply(this,arguments);
        },e.prototype.getBoundaryDimension=function(){
          return this.isClosed()?kt.FALSE:0;
        },e.prototype.isClosed=function(){
          if(this.isEmpty()) {
            return!1;
          }for(var t=0;t<this._geometries.length;t++) {
            if(!this._geometries[t].isClosed()) {
              return!1;
            }
          }return!0;
        },e.prototype.getDimension=function(){
          return 1;
        },e.prototype.reverse=function(){
          for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++) {
            e[t-1-n]=this._geometries[n].reverse();
          }return this.getFactory().createMultiLineString(e);
        },e.prototype.getBoundary=function(){
          return new zt(this).getBoundary();
        },e.prototype.getGeometryType=function(){
          return"MultiLineString";
        },e.prototype.copy=function(){
          for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++) {
            t[n]=this._geometries[n].copy();
          }return new e(t,this._factory);
        },e.prototype.interfaces_=function(){
          return[ At ];
        },e.prototype.getClass=function(){
          return e;
        },n.serialVersionUID.get=function(){
          return 0x7155d2ab4afa8000;
        },Object.defineProperties(e,n),e;
      }(qt),zt=function(){
        if(this._geom=null,this._geomFact=null,this._bnRule=null,this._endpointMap=null,1===arguments.length){
          var t=arguments[0],e=dt.MOD2_BOUNDARY_RULE;this._geom=t,this._geomFact=t.getFactory(),this._bnRule=e;
        }else if(2===arguments.length){
          var n=arguments[0],i=arguments[1];this._geom=n,this._geomFact=n.getFactory(),this._bnRule=i;
        }
      };zt.prototype.boundaryMultiLineString=function(t){
      if(this._geom.isEmpty()) {
        return this.getEmptyMultiPoint();
      }var e=this.computeBoundaryCoordinates(t);return 1===e.length?this._geomFact.createPoint(e[0]):this._geomFact.createMultiPointFromCoords(e);
    },zt.prototype.getBoundary=function(){
      return this._geom instanceof Ht?this.boundaryLineString(this._geom):this._geom instanceof Vt?this.boundaryMultiLineString(this._geom):this._geom.getBoundary();
    },zt.prototype.boundaryLineString=function(t){
      return this._geom.isEmpty()?this.getEmptyMultiPoint():t.isClosed()?this._bnRule.isInBoundary(2)?t.getStartPoint():this._geomFact.createMultiPoint():this._geomFact.createMultiPoint([ t.getStartPoint(),t.getEndPoint() ]);
    },zt.prototype.getEmptyMultiPoint=function(){
      return this._geomFact.createMultiPoint();
    },zt.prototype.computeBoundaryCoordinates=function(t){
      var e=new It;this._endpointMap=new h;for(var n=0;n<t.getNumGeometries();n++){
        var i=t.getGeometryN(n);0!==i.getNumPoints()&&(this.addEndpoint(i.getCoordinateN(0)),this.addEndpoint(i.getCoordinateN(i.getNumPoints()-1)));
      }for(var r=this._endpointMap.entrySet().iterator();r.hasNext();){
        var o=r.next(),s=o.getValue().count;this._bnRule.isInBoundary(s)&&e.add(o.getKey());
      }return St.toCoordinateArray(e);
    },zt.prototype.addEndpoint=function(t){
      var e=this._endpointMap.get(t);null===e&&(e=new Ut,this._endpointMap.put(t,e)),e.count++;
    },zt.prototype.interfaces_=function(){
      return[];
    },zt.prototype.getClass=function(){
      return zt;
    },zt.getBoundary=function(){
      if(1===arguments.length){
        var t=arguments[0];return new zt(t).getBoundary();
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return new zt(e,n).getBoundary();
      }
    };var Ut=function(){
      this.count=null;
    };Ut.prototype.interfaces_=function(){
      return[];
    },Ut.prototype.getClass=function(){
      return Ut;
    };var Yt=function(){},Xt={ NEWLINE:{ configurable:!0 },SIMPLE_ORDINATE_FORMAT:{ configurable:!0 }};Yt.prototype.interfaces_=function(){
      return[];
    },Yt.prototype.getClass=function(){
      return Yt;
    },Yt.chars=function(t,e){
      for(var n=new Array(e).fill(null),i=0;i<e;i++) {
        n[i]=t;
      }return String(n);
    },Yt.getStackTrace=function(){
      if(1===arguments.length){
        var t=arguments[0],e=new function(){},n=new function(){}(e);return t.printStackTrace(n),e.toString();
      }if(2===arguments.length){
        for(var i=arguments[0],r=arguments[1],o="",s=new function(){}(new function(){}(Yt.getStackTrace(i))),a=0;a<r;a++) {
          try{
            o+=s.readLine()+Yt.NEWLINE;
          }catch(t){
            if(!(t instanceof d)) {
              throw t;
            }et.shouldNeverReachHere();
          }
        }return o;
      }
    },Yt.split=function(t,e){
      for(var n=e.length,i=new It,r=""+t,o=r.indexOf(e);o>=0;){
        var s=r.substring(0,o);i.add(s),o=(r=r.substring(o+n)).indexOf(e);
      }r.length>0&&i.add(r);for(var a=new Array(i.size()).fill(null),u=0;u<a.length;u++) {
        a[u]=i.get(u);
      }return a;
    },Yt.toString=function(){
      if(1===arguments.length){
        var t=arguments[0];return Yt.SIMPLE_ORDINATE_FORMAT.format(t);
      }
    },Yt.spaces=function(t){
      return Yt.chars(" ",t);
    },Xt.NEWLINE.get=function(){
      return z.getProperty("line.separator");
    },Xt.SIMPLE_ORDINATE_FORMAT.get=function(){
      return new function(){}("0.#");
    },Object.defineProperties(Yt,Xt);var Wt=function(){};Wt.prototype.interfaces_=function(){
      return[];
    },Wt.prototype.getClass=function(){
      return Wt;
    },Wt.copyCoord=function(t,e,n,i){
      for(var r=Math.min(t.getDimension(),n.getDimension()),o=0;o<r;o++) {
        n.setOrdinate(i,o,t.getOrdinate(e,o));
      }
    },Wt.isRing=function(t){
      var e=t.size();return 0===e||!(e<=3)&&t.getOrdinate(0,j.X)===t.getOrdinate(e-1,j.X)&&t.getOrdinate(0,j.Y)===t.getOrdinate(e-1,j.Y);
    },Wt.isEqual=function(t,e){
      var n=t.size();if(n!==e.size()) {
        return!1;
      }for(var i=Math.min(t.getDimension(),e.getDimension()),r=0;r<n;r++) {
        for(var o=0;o<i;o++){
          var s=t.getOrdinate(r,o),a=e.getOrdinate(r,o);if(t.getOrdinate(r,o)!==e.getOrdinate(r,o)&&(!m.isNaN(s)||!m.isNaN(a))) {
            return!1;
          }
        }
      }return!0;
    },Wt.extend=function(t,e,n){
      var i=t.create(n,e.getDimension()),r=e.size();if(Wt.copy(e,0,i,0,r),r>0) {
        for(var o=r;o<n;o++) {
          Wt.copy(e,r-1,i,o,1);
        }
      }return i;
    },Wt.reverse=function(t){
      for(var e=t.size()-1,n=Math.trunc(e/2),i=0;i<=n;i++) {
        Wt.swap(t,i,e-i);
      }
    },Wt.swap=function(t,e,n){
      if(e===n) {
        return null;
      }for(var i=0;i<t.getDimension();i++){
        var r=t.getOrdinate(e,i);t.setOrdinate(e,i,t.getOrdinate(n,i)),t.setOrdinate(n,i,r);
      }
    },Wt.copy=function(t,e,n,i,r){
      for(var o=0;o<r;o++) {
        Wt.copyCoord(t,e+o,n,i+o);
      }
    },Wt.toString=function(){
      if(1===arguments.length){
        var t=arguments[0],e=t.size();if(0===e) {
          return"()";
        }var n=t.getDimension(),i=new P;i.append("(");for(var r=0;r<e;r++){
          r>0&&i.append(" ");for(var o=0;o<n;o++) {
            o>0&&i.append(","),i.append(Yt.toString(t.getOrdinate(r,o)));
          }
        }return i.append(")"),i.toString();
      }
    },Wt.ensureValidRing=function(t,e){
      var n=e.size();return 0===n?e:n<=3?Wt.createClosedRing(t,e,4):e.getOrdinate(0,j.X)===e.getOrdinate(n-1,j.X)&&e.getOrdinate(0,j.Y)===e.getOrdinate(n-1,j.Y)?e:Wt.createClosedRing(t,e,n+1);
    },Wt.createClosedRing=function(t,e,n){
      var i=t.create(n,e.getDimension()),r=e.size();Wt.copy(e,0,i,0,r);for(var o=r;o<n;o++) {
        Wt.copy(e,0,i,o,1);
      }return i;
    };var Ht=function(t){
        function e(e,n){
          t.call(this,n),this._points=null,this.init(e);
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ serialVersionUID:{ configurable:!0 }};return e.prototype.computeEnvelopeInternal=function(){
          return this.isEmpty()?new Y:this._points.expandEnvelope(new Y);
        },e.prototype.isRing=function(){
          return this.isClosed()&&this.isSimple();
        },e.prototype.getSortIndex=function(){
          return t.SORTINDEX_LINESTRING;
        },e.prototype.getCoordinates=function(){
          return this._points.toCoordinateArray();
        },e.prototype.equalsExact=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e)) {
              return!1;
            }var i=e;if(this._points.size()!==i._points.size()) {
              return!1;
            }for(var r=0;r<this._points.size();r++) {
              if(!this.equal(this._points.getCoordinate(r),i._points.getCoordinate(r),n)) {
                return!1;
              }
            }return!0;
          }return t.prototype.equalsExact.apply(this,arguments);
        },e.prototype.normalize=function(){
          for(var t=0;t<Math.trunc(this._points.size()/2);t++){
            var e=this._points.size()-1-t;if(!this._points.getCoordinate(t).equals(this._points.getCoordinate(e))) {
              return this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e))>0&&Wt.reverse(this._points),null;
            }
          }
        },e.prototype.getCoordinate=function(){
          return this.isEmpty()?null:this._points.getCoordinate(0);
        },e.prototype.getBoundaryDimension=function(){
          return this.isClosed()?kt.FALSE:0;
        },e.prototype.isClosed=function(){
          return!this.isEmpty()&&this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints()-1));
        },e.prototype.getEndPoint=function(){
          return this.isEmpty()?null:this.getPointN(this.getNumPoints()-1);
        },e.prototype.getDimension=function(){
          return 1;
        },e.prototype.getLength=function(){
          return at.computeLength(this._points);
        },e.prototype.getNumPoints=function(){
          return this._points.size();
        },e.prototype.reverse=function(){
          var t=this._points.copy();return Wt.reverse(t),this.getFactory().createLineString(t);
        },e.prototype.compareToSameClass=function(){
          if(1===arguments.length){
            for(var t=arguments[0],e=0,n=0;e<this._points.size()&&n<t._points.size();){
              var i=this._points.getCoordinate(e).compareTo(t._points.getCoordinate(n));if(0!==i) {
                return i;
              }e++,n++;
            }return e<this._points.size()?1:n<t._points.size()?-1:0;
          }if(2===arguments.length){
            var r=arguments[0];return arguments[1].compare(this._points,r._points);
          }
        },e.prototype.apply=function(){
          if(T(arguments[0],ft)) {
            for(var t=arguments[0],e=0;e<this._points.size();e++) {
              t.filter(this._points.getCoordinate(e));
            }
          }else if(T(arguments[0],Bt)){
            var n=arguments[0];if(0===this._points.size()) {
              return null;
            }for(var i=0;i<this._points.size()&&(n.filter(this._points,i),!n.isDone());i++) {

            }n.isGeometryChanged()&&this.geometryChanged();
          }else {
            (T(arguments[0],jt)||T(arguments[0],ct))&&arguments[0].filter(this);
          }
        },e.prototype.getBoundary=function(){
          return new zt(this).getBoundary();
        },e.prototype.isEquivalentClass=function(t){
          return t instanceof e;
        },e.prototype.clone=function(){
          var e=t.prototype.clone.call(this);return e._points=this._points.clone(),e;
        },e.prototype.getCoordinateN=function(t){
          return this._points.getCoordinate(t);
        },e.prototype.getGeometryType=function(){
          return"LineString";
        },e.prototype.copy=function(){
          return new e(this._points.copy(),this._factory);
        },e.prototype.getCoordinateSequence=function(){
          return this._points;
        },e.prototype.isEmpty=function(){
          return 0===this._points.size();
        },e.prototype.init=function(t){
          if(null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),1===t.size()) {
            throw new v("Invalid number of points in LineString (found "+t.size()+" - must be 0 or >= 2)");
          }this._points=t;
        },e.prototype.isCoordinate=function(t){
          for(var e=0;e<this._points.size();e++) {
            if(this._points.getCoordinate(e).equals(t)) {
              return!0;
            }
          }return!1;
        },e.prototype.getStartPoint=function(){
          return this.isEmpty()?null:this.getPointN(0);
        },e.prototype.getPointN=function(t){
          return this.getFactory().createPoint(this._points.getCoordinate(t));
        },e.prototype.interfaces_=function(){
          return[ At ];
        },e.prototype.getClass=function(){
          return e;
        },n.serialVersionUID.get=function(){
          return 0x2b2b51ba435c8e00;
        },Object.defineProperties(e,n),e;
      }(lt),Kt=function(){};Kt.prototype.interfaces_=function(){
      return[];
    },Kt.prototype.getClass=function(){
      return Kt;
    };var Jt=function(t){
        function e(e,n){
          t.call(this,n),this._coordinates=e||null,this.init(this._coordinates);
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ serialVersionUID:{ configurable:!0 }};return e.prototype.computeEnvelopeInternal=function(){
          if(this.isEmpty()) {
            return new Y;
          }var t=new Y;return t.expandToInclude(this._coordinates.getX(0),this._coordinates.getY(0)),t;
        },e.prototype.getSortIndex=function(){
          return t.SORTINDEX_POINT;
        },e.prototype.getCoordinates=function(){
          return this.isEmpty()?[]:[ this.getCoordinate() ];
        },e.prototype.equalsExact=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&(!(!this.isEmpty()||!e.isEmpty())||this.isEmpty()===e.isEmpty()&&this.equal(e.getCoordinate(),this.getCoordinate(),n));
          }return t.prototype.equalsExact.apply(this,arguments);
        },e.prototype.normalize=function(){},e.prototype.getCoordinate=function(){
          return 0!==this._coordinates.size()?this._coordinates.getCoordinate(0):null;
        },e.prototype.getBoundaryDimension=function(){
          return kt.FALSE;
        },e.prototype.getDimension=function(){
          return 0;
        },e.prototype.getNumPoints=function(){
          return this.isEmpty()?0:1;
        },e.prototype.reverse=function(){
          return this.copy();
        },e.prototype.getX=function(){
          if(null===this.getCoordinate()) {
            throw new Error("getX called on empty Point");
          }return this.getCoordinate().x;
        },e.prototype.compareToSameClass=function(){
          if(1===arguments.length){
            var t=arguments[0];return this.getCoordinate().compareTo(t.getCoordinate());
          }if(2===arguments.length){
            var e=arguments[0];return arguments[1].compare(this._coordinates,e._coordinates);
          }
        },e.prototype.apply=function(){
          if(T(arguments[0],ft)){
            var t=arguments[0];if(this.isEmpty()) {
              return null;
            }t.filter(this.getCoordinate());
          }else if(T(arguments[0],Bt)){
            var e=arguments[0];if(this.isEmpty()) {
              return null;
            }e.filter(this._coordinates,0),e.isGeometryChanged()&&this.geometryChanged();
          }else {
            (T(arguments[0],jt)||T(arguments[0],ct))&&arguments[0].filter(this);
          }
        },e.prototype.getBoundary=function(){
          return this.getFactory().createGeometryCollection(null);
        },e.prototype.clone=function(){
          var e=t.prototype.clone.call(this);return e._coordinates=this._coordinates.clone(),e;
        },e.prototype.getGeometryType=function(){
          return"Point";
        },e.prototype.copy=function(){
          return new e(this._coordinates.copy(),this._factory);
        },e.prototype.getCoordinateSequence=function(){
          return this._coordinates;
        },e.prototype.getY=function(){
          if(null===this.getCoordinate()) {
            throw new Error("getY called on empty Point");
          }return this.getCoordinate().y;
        },e.prototype.isEmpty=function(){
          return 0===this._coordinates.size();
        },e.prototype.init=function(t){
          null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),et.isTrue(t.size()<=1),this._coordinates=t;
        },e.prototype.isSimple=function(){
          return!0;
        },e.prototype.interfaces_=function(){
          return[ Kt ];
        },e.prototype.getClass=function(){
          return e;
        },n.serialVersionUID.get=function(){
          return 0x44077bad161cbc00;
        },Object.defineProperties(e,n),e;
      }(lt),Qt=function(){};Qt.prototype.interfaces_=function(){
      return[];
    },Qt.prototype.getClass=function(){
      return Qt;
    };var Zt=function(t){
        function e(e,n,i){
          if(t.call(this,i),this._shell=null,this._holes=null,null===e&&(e=this.getFactory().createLinearRing()),null===n&&(n=[]),t.hasNullElements(n)) {
            throw new v("holes must not contain null elements");
          }if(e.isEmpty()&&t.hasNonEmptyElements(n)) {
            throw new v("shell is empty but holes are not");
          }this._shell=e,this._holes=n;
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ serialVersionUID:{ configurable:!0 }};return e.prototype.computeEnvelopeInternal=function(){
          return this._shell.getEnvelopeInternal();
        },e.prototype.getSortIndex=function(){
          return t.SORTINDEX_POLYGON;
        },e.prototype.getCoordinates=function(){
          if(this.isEmpty()) {
            return[];
          }for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=this._shell.getCoordinates(),i=0;i<n.length;i++) {
            t[++e]=n[i];
          }for(var r=0;r<this._holes.length;r++) {
            for(var o=this._holes[r].getCoordinates(),s=0;s<o.length;s++) {
              t[++e]=o[s];
            }
          }return t;
        },e.prototype.getArea=function(){
          var t=0;t+=Math.abs(at.signedArea(this._shell.getCoordinateSequence()));for(var e=0;e<this._holes.length;e++) {
            t-=Math.abs(at.signedArea(this._holes[e].getCoordinateSequence()));
          }return t;
        },e.prototype.isRectangle=function(){
          if(0!==this.getNumInteriorRing()) {
            return!1;
          }if(null===this._shell) {
            return!1;
          }if(5!==this._shell.getNumPoints()) {
            return!1;
          }for(var t=this._shell.getCoordinateSequence(),e=this.getEnvelopeInternal(),n=0;n<5;n++){
            var i=t.getX(n);if(i!==e.getMinX()&&i!==e.getMaxX()) {
              return!1;
            }var r=t.getY(n);if(r!==e.getMinY()&&r!==e.getMaxY()) {
              return!1;
            }
          }for(var o=t.getX(0),s=t.getY(0),a=1;a<=4;a++){
            var u=t.getX(a),c=t.getY(a);if(u!==o===(c!==s)) {
              return!1;
            }o=u,s=c;
          }return!0;
        },e.prototype.equalsExact=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e)) {
              return!1;
            }var i=e,r=this._shell,o=i._shell;if(!r.equalsExact(o,n)) {
              return!1;
            }if(this._holes.length!==i._holes.length) {
              return!1;
            }for(var s=0;s<this._holes.length;s++) {
              if(!this._holes[s].equalsExact(i._holes[s],n)) {
                return!1;
              }
            }return!0;
          }return t.prototype.equalsExact.apply(this,arguments);
        },e.prototype.normalize=function(){
          if(0===arguments.length){
            this.normalize(this._shell,!0);for(var t=0;t<this._holes.length;t++) {
              this.normalize(this._holes[t],!1);
            }$t.sort(this._holes);
          }else if(2===arguments.length){
            var e=arguments[0],n=arguments[1];if(e.isEmpty()) {
              return null;
            }var i=new Array(e.getCoordinates().length-1).fill(null);z.arraycopy(e.getCoordinates(),0,i,0,i.length);var r=St.minCoordinate(e.getCoordinates());St.scroll(i,r),z.arraycopy(i,0,e.getCoordinates(),0,i.length),e.getCoordinates()[i.length]=i[0],at.isCCW(e.getCoordinates())===n&&St.reverse(e.getCoordinates());
          }
        },e.prototype.getCoordinate=function(){
          return this._shell.getCoordinate();
        },e.prototype.getNumInteriorRing=function(){
          return this._holes.length;
        },e.prototype.getBoundaryDimension=function(){
          return 1;
        },e.prototype.getDimension=function(){
          return 2;
        },e.prototype.getLength=function(){
          var t=0;t+=this._shell.getLength();for(var e=0;e<this._holes.length;e++) {
            t+=this._holes[e].getLength();
          }return t;
        },e.prototype.getNumPoints=function(){
          for(var t=this._shell.getNumPoints(),e=0;e<this._holes.length;e++) {
            t+=this._holes[e].getNumPoints();
          }return t;
        },e.prototype.reverse=function(){
          var t=this.copy();t._shell=this._shell.copy().reverse(),t._holes=new Array(this._holes.length).fill(null);for(var e=0;e<this._holes.length;e++) {
            t._holes[e]=this._holes[e].copy().reverse();
          }return t;
        },e.prototype.convexHull=function(){
          return this.getExteriorRing().convexHull();
        },e.prototype.compareToSameClass=function(){
          if(1===arguments.length){
            var t=arguments[0],e=this._shell,n=t._shell;return e.compareToSameClass(n);
          }if(2===arguments.length){
            var i=arguments[0],r=arguments[1],o=i,s=this._shell,a=o._shell,u=s.compareToSameClass(a,r);if(0!==u) {
              return u;
            }for(var c=this.getNumInteriorRing(),l=o.getNumInteriorRing(),h=0;h<c&&h<l;){
              var p=this.getInteriorRingN(h),f=o.getInteriorRingN(h),d=p.compareToSameClass(f,r);if(0!==d) {
                return d;
              }h++;
            }return h<c?1:h<l?-1:0;
          }
        },e.prototype.apply=function(t){
          if(T(t,ft)){
            this._shell.apply(t);for(var e=0;e<this._holes.length;e++) {
              this._holes[e].apply(t);
            }
          }else if(T(t,Bt)){
            if(this._shell.apply(t),!t.isDone()) {
              for(var n=0;n<this._holes.length&&(this._holes[n].apply(t),!t.isDone());n++) {

              }
            }t.isGeometryChanged()&&this.geometryChanged();
          }else if(T(t,jt)) {
            t.filter(this);
          }else if(T(t,ct)){
            t.filter(this),this._shell.apply(t);for(var i=0;i<this._holes.length;i++) {
              this._holes[i].apply(t);
            }
          }
        },e.prototype.getBoundary=function(){
          if(this.isEmpty()) {
            return this.getFactory().createMultiLineString();
          }var t=new Array(this._holes.length+1).fill(null);t[0]=this._shell;for(var e=0;e<this._holes.length;e++) {
            t[e+1]=this._holes[e];
          }return t.length<=1?this.getFactory().createLinearRing(t[0].getCoordinateSequence()):this.getFactory().createMultiLineString(t);
        },e.prototype.clone=function(){
          var e=t.prototype.clone.call(this);e._shell=this._shell.clone(),e._holes=new Array(this._holes.length).fill(null);for(var n=0;n<this._holes.length;n++) {
            e._holes[n]=this._holes[n].clone();
          }return e;
        },e.prototype.getGeometryType=function(){
          return"Polygon";
        },e.prototype.copy=function(){
          for(var t=this._shell.copy(),n=new Array(this._holes.length).fill(null),i=0;i<n.length;i++) {
            n[i]=this._holes[i].copy();
          }return new e(t,n,this._factory);
        },e.prototype.getExteriorRing=function(){
          return this._shell;
        },e.prototype.isEmpty=function(){
          return this._shell.isEmpty();
        },e.prototype.getInteriorRingN=function(t){
          return this._holes[t];
        },e.prototype.interfaces_=function(){
          return[ Qt ];
        },e.prototype.getClass=function(){
          return e;
        },n.serialVersionUID.get=function(){
          return-0x307ffefd8dc97200;
        },Object.defineProperties(e,n),e;
      }(lt),te=function(t){
        function e(){
          t.apply(this,arguments);
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ serialVersionUID:{ configurable:!0 }};return e.prototype.getSortIndex=function(){
          return lt.SORTINDEX_MULTIPOINT;
        },e.prototype.isValid=function(){
          return!0;
        },e.prototype.equalsExact=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n);
          }return t.prototype.equalsExact.apply(this,arguments);
        },e.prototype.getCoordinate=function(){
          if(1===arguments.length){
            var e=arguments[0];return this._geometries[e].getCoordinate();
          }return t.prototype.getCoordinate.apply(this,arguments);
        },e.prototype.getBoundaryDimension=function(){
          return kt.FALSE;
        },e.prototype.getDimension=function(){
          return 0;
        },e.prototype.getBoundary=function(){
          return this.getFactory().createGeometryCollection(null);
        },e.prototype.getGeometryType=function(){
          return"MultiPoint";
        },e.prototype.copy=function(){
          for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++) {
            t[n]=this._geometries[n].copy();
          }return new e(t,this._factory);
        },e.prototype.interfaces_=function(){
          return[ Kt ];
        },e.prototype.getClass=function(){
          return e;
        },n.serialVersionUID.get=function(){
          return-0x6fb1ed4162e0fc00;
        },Object.defineProperties(e,n),e;
      }(qt),ee=function(t){
        function e(e,n){
          e instanceof N&&n instanceof _e&&(e=n.getCoordinateSequenceFactory().create(e)),t.call(this,e,n),this.validateConstruction();
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ MINIMUM_VALID_SIZE:{ configurable:!0 },serialVersionUID:{ configurable:!0 }};return e.prototype.getSortIndex=function(){
          return lt.SORTINDEX_LINEARRING;
        },e.prototype.getBoundaryDimension=function(){
          return kt.FALSE;
        },e.prototype.isClosed=function(){
          return!!this.isEmpty()||t.prototype.isClosed.call(this);
        },e.prototype.reverse=function(){
          var t=this._points.copy();return Wt.reverse(t),this.getFactory().createLinearRing(t);
        },e.prototype.validateConstruction=function(){
          if(!this.isEmpty()&&!t.prototype.isClosed.call(this)) {
            throw new v("Points of LinearRing do not form a closed linestring");
          }if(this.getCoordinateSequence().size()>=1&&this.getCoordinateSequence().size()<e.MINIMUM_VALID_SIZE) {
            throw new v("Invalid number of points in LinearRing (found "+this.getCoordinateSequence().size()+" - must be 0 or >= 4)");
          }
        },e.prototype.getGeometryType=function(){
          return"LinearRing";
        },e.prototype.copy=function(){
          return new e(this._points.copy(),this._factory);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },n.MINIMUM_VALID_SIZE.get=function(){
          return 4;
        },n.serialVersionUID.get=function(){
          return-0x3b229e262367a600;
        },Object.defineProperties(e,n),e;
      }(Ht),ne=function(t){
        function e(){
          t.apply(this,arguments);
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ serialVersionUID:{ configurable:!0 }};return e.prototype.getSortIndex=function(){
          return lt.SORTINDEX_MULTIPOLYGON;
        },e.prototype.equalsExact=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n);
          }return t.prototype.equalsExact.apply(this,arguments);
        },e.prototype.getBoundaryDimension=function(){
          return 1;
        },e.prototype.getDimension=function(){
          return 2;
        },e.prototype.reverse=function(){
          for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++) {
            e[n]=this._geometries[n].reverse();
          }return this.getFactory().createMultiPolygon(e);
        },e.prototype.getBoundary=function(){
          if(this.isEmpty()) {
            return this.getFactory().createMultiLineString();
          }for(var t=new It,e=0;e<this._geometries.length;e++) {
            for(var n=this._geometries[e].getBoundary(),i=0;i<n.getNumGeometries();i++) {
              t.add(n.getGeometryN(i));
            }
          }var r=new Array(t.size()).fill(null);return this.getFactory().createMultiLineString(t.toArray(r));
        },e.prototype.getGeometryType=function(){
          return"MultiPolygon";
        },e.prototype.copy=function(){
          for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++) {
            t[n]=this._geometries[n].copy();
          }return new e(t,this._factory);
        },e.prototype.interfaces_=function(){
          return[ Qt ];
        },e.prototype.getClass=function(){
          return e;
        },n.serialVersionUID.get=function(){
          return-0x7a5aa1369171980;
        },Object.defineProperties(e,n),e;
      }(qt),ie=function(t){
        this._factory=t||null,this._isUserDataCopied=!1;
      },re={ NoOpGeometryOperation:{ configurable:!0 },CoordinateOperation:{ configurable:!0 },CoordinateSequenceOperation:{ configurable:!0 }};ie.prototype.setCopyUserData=function(t){
      this._isUserDataCopied=t;
    },ie.prototype.edit=function(t,e){
      if(null===t) {
        return null;
      }var n=this.editInternal(t,e);return this._isUserDataCopied&&n.setUserData(t.getUserData()),n;
    },ie.prototype.editInternal=function(t,e){
      return null===this._factory&&(this._factory=t.getFactory()),t instanceof qt?this.editGeometryCollection(t,e):t instanceof Zt?this.editPolygon(t,e):t instanceof Jt||t instanceof Ht?e.edit(t,this._factory):(et.shouldNeverReachHere("Unsupported Geometry class: "+t.getClass().getName()),null);
    },ie.prototype.editGeometryCollection=function(t,e){
      for(var n=e.edit(t,this._factory),i=new It,r=0;r<n.getNumGeometries();r++){
        var o=this.edit(n.getGeometryN(r),e);null===o||o.isEmpty()||i.add(o);
      }return n.getClass()===te?this._factory.createMultiPoint(i.toArray([])):n.getClass()===Vt?this._factory.createMultiLineString(i.toArray([])):n.getClass()===ne?this._factory.createMultiPolygon(i.toArray([])):this._factory.createGeometryCollection(i.toArray([]));
    },ie.prototype.editPolygon=function(t,e){
      var n=e.edit(t,this._factory);if(null===n&&(n=this._factory.createPolygon(null)),n.isEmpty()) {
        return n;
      }var i=this.edit(n.getExteriorRing(),e);if(null===i||i.isEmpty()) {
        return this._factory.createPolygon();
      }for(var r=new It,o=0;o<n.getNumInteriorRing();o++){
        var s=this.edit(n.getInteriorRingN(o),e);null===s||s.isEmpty()||r.add(s);
      }return this._factory.createPolygon(i,r.toArray([]));
    },ie.prototype.interfaces_=function(){
      return[];
    },ie.prototype.getClass=function(){
      return ie;
    },ie.GeometryEditorOperation=function(){},re.NoOpGeometryOperation.get=function(){
      return oe;
    },re.CoordinateOperation.get=function(){
      return se;
    },re.CoordinateSequenceOperation.get=function(){
      return ae;
    },Object.defineProperties(ie,re);var oe=function(){};oe.prototype.edit=function(t,e){
      return t;
    },oe.prototype.interfaces_=function(){
      return[ ie.GeometryEditorOperation ];
    },oe.prototype.getClass=function(){
      return oe;
    };var se=function(){};se.prototype.edit=function(t,e){
      var n=this.editCoordinates(t.getCoordinates(),t);return null===n?t:t instanceof ee?e.createLinearRing(n):t instanceof Ht?e.createLineString(n):t instanceof Jt?n.length>0?e.createPoint(n[0]):e.createPoint():t;
    },se.prototype.interfaces_=function(){
      return[ ie.GeometryEditorOperation ];
    },se.prototype.getClass=function(){
      return se;
    };var ae=function(){};ae.prototype.edit=function(t,e){
      return t instanceof ee?e.createLinearRing(this.edit(t.getCoordinateSequence(),t)):t instanceof Ht?e.createLineString(this.edit(t.getCoordinateSequence(),t)):t instanceof Jt?e.createPoint(this.edit(t.getCoordinateSequence(),t)):t;
    },ae.prototype.interfaces_=function(){
      return[ ie.GeometryEditorOperation ];
    },ae.prototype.getClass=function(){
      return ae;
    };var ue=function(){
        if(this._dimension=3,this._coordinates=null,1===arguments.length){
          if(arguments[0]instanceof Array) {
            this._coordinates=arguments[0],this._dimension=3;
          }else if(Number.isInteger(arguments[0])){
            var t=arguments[0];this._coordinates=new Array(t).fill(null);for(var e=0;e<t;e++) {
              this._coordinates[e]=new N;
            }
          }else if(T(arguments[0],j)){
            var n=arguments[0];if(null===n) {
              return this._coordinates=new Array(0).fill(null),null;
            }this._dimension=n.getDimension(),this._coordinates=new Array(n.size()).fill(null);for(var i=0;i<this._coordinates.length;i++) {
              this._coordinates[i]=n.getCoordinateCopy(i);
            }
          }
        }else if(2===arguments.length) {
          if(arguments[0]instanceof Array&&Number.isInteger(arguments[1])){
            var r=arguments[0],o=arguments[1];this._coordinates=r,this._dimension=o,null===r&&(this._coordinates=new Array(0).fill(null));
          }else if(Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){
            var s=arguments[0],a=arguments[1];this._coordinates=new Array(s).fill(null),this._dimension=a;for(var u=0;u<s;u++) {
              this._coordinates[u]=new N;
            }
          }
        }
      },ce={ serialVersionUID:{ configurable:!0 }};ue.prototype.setOrdinate=function(t,e,n){
      switch(e){
      case j.X:this._coordinates[t].x=n;break;case j.Y:this._coordinates[t].y=n;break;case j.Z:this._coordinates[t].z=n;break;default:throw new v("invalid ordinateIndex");
      }
    },ue.prototype.size=function(){
      return this._coordinates.length;
    },ue.prototype.getOrdinate=function(t,e){
      switch(e){
      case j.X:return this._coordinates[t].x;case j.Y:return this._coordinates[t].y;case j.Z:return this._coordinates[t].z;
      }return m.NaN;
    },ue.prototype.getCoordinate=function(){
      if(1===arguments.length){
        var t=arguments[0];return this._coordinates[t];
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];n.x=this._coordinates[e].x,n.y=this._coordinates[e].y,n.z=this._coordinates[e].z;
      }
    },ue.prototype.getCoordinateCopy=function(t){
      return new N(this._coordinates[t]);
    },ue.prototype.getDimension=function(){
      return this._dimension;
    },ue.prototype.getX=function(t){
      return this._coordinates[t].x;
    },ue.prototype.clone=function(){
      for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++) {
        t[e]=this._coordinates[e].clone();
      }return new ue(t,this._dimension);
    },ue.prototype.expandEnvelope=function(t){
      for(var e=0;e<this._coordinates.length;e++) {
        t.expandToInclude(this._coordinates[e]);
      }return t;
    },ue.prototype.copy=function(){
      for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++) {
        t[e]=this._coordinates[e].copy();
      }return new ue(t,this._dimension);
    },ue.prototype.toString=function(){
      if(this._coordinates.length>0){
        var t=new P(17*this._coordinates.length);t.append("("),t.append(this._coordinates[0]);for(var e=1;e<this._coordinates.length;e++) {
          t.append(", "),t.append(this._coordinates[e]);
        }return t.append(")"),t.toString();
      }return"()";
    },ue.prototype.getY=function(t){
      return this._coordinates[t].y;
    },ue.prototype.toCoordinateArray=function(){
      return this._coordinates;
    },ue.prototype.interfaces_=function(){
      return[ j,e ];
    },ue.prototype.getClass=function(){
      return ue;
    },ce.serialVersionUID.get=function(){
      return-0xcb44a778db18e00;
    },Object.defineProperties(ue,ce);var le=function(){},he={ serialVersionUID:{ configurable:!0 },instanceObject:{ configurable:!0 }};le.prototype.readResolve=function(){
      return le.instance();
    },le.prototype.create=function(){
      if(1===arguments.length){
        if(arguments[0]instanceof Array){
          var t=arguments[0];return new ue(t);
        }if(T(arguments[0],j)){
          var e=arguments[0];return new ue(e);
        }
      }else if(2===arguments.length){
        var n=arguments[0],i=arguments[1];return i>3&&(i=3),i<2?new ue(n):new ue(n,i);
      }
    },le.prototype.interfaces_=function(){
      return[ w,e ];
    },le.prototype.getClass=function(){
      return le;
    },le.instance=function(){
      return le.instanceObject;
    },he.serialVersionUID.get=function(){
      return-0x38e49fa6cf6f2e00;
    },he.instanceObject.get=function(){
      return new le;
    },Object.defineProperties(le,he);var pe=function(t){
        function e(){
          t.call(this),this.map_=new Map;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){
          return this.map_.get(t)||null;
        },e.prototype.put=function(t,e){
          return this.map_.set(t,e),e;
        },e.prototype.values=function(){
          for(var t=new It,e=this.map_.values(),n=e.next();!n.done;) {
            t.add(n.value),n=e.next();
          }return t;
        },e.prototype.entrySet=function(){
          var t=new Mt;return this.map_.entries().forEach((function(e){
            return t.add(e);
          })),t;
        },e.prototype.size=function(){
          return this.map_.size();
        },e;
      }(Tt),fe=function t(){
        if(this._modelType=null,this._scale=null,0===arguments.length) {
          this._modelType=t.FLOATING;
        }else if(1===arguments.length) {
          if(arguments[0]instanceof ge){
            var e=arguments[0];this._modelType=e,e===t.FIXED&&this.setScale(1);
          }else if("number"==typeof arguments[0]){
            var n=arguments[0];this._modelType=t.FIXED,this.setScale(n);
          }else if(arguments[0]instanceof t){
            var i=arguments[0];this._modelType=i._modelType,this._scale=i._scale;
          }
        }
      },de={ serialVersionUID:{ configurable:!0 },maximumPreciseValue:{ configurable:!0 }};fe.prototype.equals=function(t){
      if(!(t instanceof fe)) {
        return!1;
      }var e=t;return this._modelType===e._modelType&&this._scale===e._scale;
    },fe.prototype.compareTo=function(t){
      var e=t,n=this.getMaximumSignificantDigits(),i=e.getMaximumSignificantDigits();return new D(n).compareTo(new D(i));
    },fe.prototype.getScale=function(){
      return this._scale;
    },fe.prototype.isFloating=function(){
      return this._modelType===fe.FLOATING||this._modelType===fe.FLOATING_SINGLE;
    },fe.prototype.getType=function(){
      return this._modelType;
    },fe.prototype.toString=function(){
      var t="UNKNOWN";return this._modelType===fe.FLOATING?t="Floating":this._modelType===fe.FLOATING_SINGLE?t="Floating-Single":this._modelType===fe.FIXED&&(t="Fixed (Scale="+this.getScale()+")"),t;
    },fe.prototype.makePrecise=function(){
      if("number"==typeof arguments[0]){
        var t=arguments[0];return m.isNaN(t)||this._modelType===fe.FLOATING_SINGLE?t:this._modelType===fe.FIXED?Math.round(t*this._scale)/this._scale:t;
      }if(arguments[0]instanceof N){
        var e=arguments[0];if(this._modelType===fe.FLOATING) {
          return null;
        }e.x=this.makePrecise(e.x),e.y=this.makePrecise(e.y);
      }
    },fe.prototype.getMaximumSignificantDigits=function(){
      var t=16;return this._modelType===fe.FLOATING?t=16:this._modelType===fe.FLOATING_SINGLE?t=6:this._modelType===fe.FIXED&&(t=1+Math.trunc(Math.ceil(Math.log(this.getScale())/Math.log(10)))),t;
    },fe.prototype.setScale=function(t){
      this._scale=Math.abs(t);
    },fe.prototype.interfaces_=function(){
      return[ e,x ];
    },fe.prototype.getClass=function(){
      return fe;
    },fe.mostPrecise=function(t,e){
      return t.compareTo(e)>=0?t:e;
    },de.serialVersionUID.get=function(){
      return 0x6bee6404e9a25c00;
    },de.maximumPreciseValue.get=function(){
      return 9007199254740992;
    },Object.defineProperties(fe,de);var ge=function t(e){
        this._name=e||null,t.nameToTypeMap.put(e,this);
      },ye={ serialVersionUID:{ configurable:!0 },nameToTypeMap:{ configurable:!0 }};ge.prototype.readResolve=function(){
      return ge.nameToTypeMap.get(this._name);
    },ge.prototype.toString=function(){
      return this._name;
    },ge.prototype.interfaces_=function(){
      return[ e ];
    },ge.prototype.getClass=function(){
      return ge;
    },ye.serialVersionUID.get=function(){
      return-552860263173159e4;
    },ye.nameToTypeMap.get=function(){
      return new pe;
    },Object.defineProperties(ge,ye),fe.Type=ge,fe.FIXED=new ge("FIXED"),fe.FLOATING=new ge("FLOATING"),fe.FLOATING_SINGLE=new ge("FLOATING SINGLE");var _e=function t(){
        this._precisionModel=new fe,this._SRID=0,this._coordinateSequenceFactory=t.getDefaultCoordinateSequenceFactory(),0===arguments.length||(1===arguments.length?T(arguments[0],w)?this._coordinateSequenceFactory=arguments[0]:arguments[0]instanceof fe&&(this._precisionModel=arguments[0]):2===arguments.length?(this._precisionModel=arguments[0],this._SRID=arguments[1]):3===arguments.length&&(this._precisionModel=arguments[0],this._SRID=arguments[1],this._coordinateSequenceFactory=arguments[2]));
      },ve={ serialVersionUID:{ configurable:!0 }};_e.prototype.toGeometry=function(t){
      return t.isNull()?this.createPoint(null):t.getMinX()===t.getMaxX()&&t.getMinY()===t.getMaxY()?this.createPoint(new N(t.getMinX(),t.getMinY())):t.getMinX()===t.getMaxX()||t.getMinY()===t.getMaxY()?this.createLineString([ new N(t.getMinX(),t.getMinY()),new N(t.getMaxX(),t.getMaxY()) ]):this.createPolygon(this.createLinearRing([ new N(t.getMinX(),t.getMinY()),new N(t.getMinX(),t.getMaxY()),new N(t.getMaxX(),t.getMaxY()),new N(t.getMaxX(),t.getMinY()),new N(t.getMinX(),t.getMinY()) ]),null);
    },_e.prototype.createLineString=function(t){
      return t?t instanceof Array?new Ht(this.getCoordinateSequenceFactory().create(t),this):T(t,j)?new Ht(t,this):void 0:new Ht(this.getCoordinateSequenceFactory().create([]),this);
    },_e.prototype.createMultiLineString=function(){
      if(0===arguments.length) {
        return new Vt(null,this);
      }if(1===arguments.length){
        var t=arguments[0];return new Vt(t,this);
      }
    },_e.prototype.buildGeometry=function(t){
      for(var e=null,n=!1,i=!1,r=t.iterator();r.hasNext();){
        var o=r.next(),s=o.getClass();null===e&&(e=s),s!==e&&(n=!0),o.isGeometryCollectionOrDerived()&&(i=!0);
      }if(null===e) {
        return this.createGeometryCollection();
      }if(n||i) {
        return this.createGeometryCollection(_e.toGeometryArray(t));
      }var a=t.iterator().next();if(t.size()>1){
        if(a instanceof Zt) {
          return this.createMultiPolygon(_e.toPolygonArray(t));
        }if(a instanceof Ht) {
          return this.createMultiLineString(_e.toLineStringArray(t));
        }if(a instanceof Jt) {
          return this.createMultiPoint(_e.toPointArray(t));
        }et.shouldNeverReachHere("Unhandled class: "+a.getClass().getName());
      }return a;
    },_e.prototype.createMultiPointFromCoords=function(t){
      return this.createMultiPoint(null!==t?this.getCoordinateSequenceFactory().create(t):null);
    },_e.prototype.createPoint=function(){
      if(0===arguments.length) {
        return this.createPoint(this.getCoordinateSequenceFactory().create([]));
      }if(1===arguments.length){
        if(arguments[0]instanceof N){
          var t=arguments[0];return this.createPoint(null!==t?this.getCoordinateSequenceFactory().create([ t ]):null);
        }if(T(arguments[0],j)){
          var e=arguments[0];return new Jt(e,this);
        }
      }
    },_e.prototype.getCoordinateSequenceFactory=function(){
      return this._coordinateSequenceFactory;
    },_e.prototype.createPolygon=function(){
      if(0===arguments.length) {
        return new Zt(null,null,this);
      }if(1===arguments.length){
        if(T(arguments[0],j)){
          var t=arguments[0];return this.createPolygon(this.createLinearRing(t));
        }if(arguments[0]instanceof Array){
          var e=arguments[0];return this.createPolygon(this.createLinearRing(e));
        }if(arguments[0]instanceof ee){
          var n=arguments[0];return this.createPolygon(n,null);
        }
      }else if(2===arguments.length){
        var i=arguments[0],r=arguments[1];return new Zt(i,r,this);
      }
    },_e.prototype.getSRID=function(){
      return this._SRID;
    },_e.prototype.createGeometryCollection=function(){
      if(0===arguments.length) {
        return new qt(null,this);
      }if(1===arguments.length){
        var t=arguments[0];return new qt(t,this);
      }
    },_e.prototype.createGeometry=function(t){
      return new ie(this).edit(t,{ edit:function(){
        if(2===arguments.length){
          var t=arguments[0];return this._coordinateSequenceFactory.create(t);
        }
      } });
    },_e.prototype.getPrecisionModel=function(){
      return this._precisionModel;
    },_e.prototype.createLinearRing=function(){
      if(0===arguments.length) {
        return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
      }if(1===arguments.length){
        if(arguments[0]instanceof Array){
          var t=arguments[0];return this.createLinearRing(null!==t?this.getCoordinateSequenceFactory().create(t):null);
        }if(T(arguments[0],j)){
          var e=arguments[0];return new ee(e,this);
        }
      }
    },_e.prototype.createMultiPolygon=function(){
      if(0===arguments.length) {
        return new ne(null,this);
      }if(1===arguments.length){
        var t=arguments[0];return new ne(t,this);
      }
    },_e.prototype.createMultiPoint=function(){
      if(0===arguments.length) {
        return new te(null,this);
      }if(1===arguments.length){
        if(arguments[0]instanceof Array){
          var t=arguments[0];return new te(t,this);
        }if(arguments[0]instanceof Array){
          var e=arguments[0];return this.createMultiPoint(null!==e?this.getCoordinateSequenceFactory().create(e):null);
        }if(T(arguments[0],j)){
          var n=arguments[0];if(null===n) {
            return this.createMultiPoint(new Array(0).fill(null));
          }for(var i=new Array(n.size()).fill(null),r=0;r<n.size();r++){
            var o=this.getCoordinateSequenceFactory().create(1,n.getDimension());Wt.copy(n,r,o,0,1),i[r]=this.createPoint(o);
          }return this.createMultiPoint(i);
        }
      }
    },_e.prototype.interfaces_=function(){
      return[ e ];
    },_e.prototype.getClass=function(){
      return _e;
    },_e.toMultiPolygonArray=function(t){
      var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.toGeometryArray=function(t){
      if(null===t) {
        return null;
      }var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.getDefaultCoordinateSequenceFactory=function(){
      return le.instance();
    },_e.toMultiLineStringArray=function(t){
      var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.toLineStringArray=function(t){
      var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.toMultiPointArray=function(t){
      var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.toLinearRingArray=function(t){
      var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.toPointArray=function(t){
      var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.toPolygonArray=function(t){
      var e=new Array(t.size()).fill(null);return t.toArray(e);
    },_e.createPointFromInternalCoord=function(t,e){
      return e.getPrecisionModel().makePrecise(t),e.getFactory().createPoint(t);
    },ve.serialVersionUID.get=function(){
      return-0x5ea75f2051eeb400;
    },Object.defineProperties(_e,ve);var me=[ "Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon" ],be=function(t){
      this.geometryFactory=t||new _e;
    };be.prototype.read=function(t){
      var e,n=(e="string"==typeof t?JSON.parse(t):t).type;if(!xe[n]) {
        throw new Error("Unknown GeoJSON type: "+e.type);
      }return-1!==me.indexOf(n)?xe[n].apply(this,[ e.coordinates ]):"GeometryCollection"===n?xe[n].apply(this,[ e.geometries ]):xe[n].apply(this,[ e ]);
    },be.prototype.write=function(t){
      var e=t.getGeometryType();if(!Ee[e]) {
        throw new Error("Geometry is not supported");
      }return Ee[e].apply(this,[ t ]);
    };var xe={ Feature:function(t){
        var e={};for(var n in t) {
          e[n]=t[n];
        }if(t.geometry){
          var i=t.geometry.type;if(!xe[i]) {
            throw new Error("Unknown GeoJSON type: "+t.type);
          }e.geometry=this.read(t.geometry);
        }return t.bbox&&(e.bbox=xe.bbox.apply(this,[ t.bbox ])),e;
      },FeatureCollection:function(t){
        var e={};if(t.features){
          e.features=[];for(var n=0;n<t.features.length;++n) {
            e.features.push(this.read(t.features[n]));
          }
        }return t.bbox&&(e.bbox=this.parse.bbox.apply(this,[ t.bbox ])),e;
      },coordinates:function(t){
        for(var e=[],n=0;n<t.length;++n){
          var i=t[n];e.push(new N(i[0],i[1]));
        }return e;
      },bbox:function(t){
        return this.geometryFactory.createLinearRing([ new N(t[0],t[1]),new N(t[2],t[1]),new N(t[2],t[3]),new N(t[0],t[3]),new N(t[0],t[1]) ]);
      },Point:function(t){
        var e=new N(t[0],t[1]);return this.geometryFactory.createPoint(e);
      },MultiPoint:function(t){
        for(var e=[],n=0;n<t.length;++n) {
          e.push(xe.Point.apply(this,[ t[n] ]));
        }return this.geometryFactory.createMultiPoint(e);
      },LineString:function(t){
        var e=xe.coordinates.apply(this,[ t ]);return this.geometryFactory.createLineString(e);
      },MultiLineString:function(t){
        for(var e=[],n=0;n<t.length;++n) {
          e.push(xe.LineString.apply(this,[ t[n] ]));
        }return this.geometryFactory.createMultiLineString(e);
      },Polygon:function(t){
        for(var e=xe.coordinates.apply(this,[ t[0] ]),n=this.geometryFactory.createLinearRing(e),i=[],r=1;r<t.length;++r){
          var o=t[r],s=xe.coordinates.apply(this,[ o ]),a=this.geometryFactory.createLinearRing(s);i.push(a);
        }return this.geometryFactory.createPolygon(n,i);
      },MultiPolygon:function(t){
        for(var e=[],n=0;n<t.length;++n){
          var i=t[n];e.push(xe.Polygon.apply(this,[ i ]));
        }return this.geometryFactory.createMultiPolygon(e);
      },GeometryCollection:function(t){
        for(var e=[],n=0;n<t.length;++n){
          var i=t[n];e.push(this.read(i));
        }return this.geometryFactory.createGeometryCollection(e);
      } },Ee={ coordinate:function(t){
        return[ t.x,t.y ];
      },Point:function(t){
        return{ type:"Point",coordinates:Ee.coordinate.apply(this,[ t.getCoordinate() ]) };
      },MultiPoint:function(t){
        for(var e=[],n=0;n<t._geometries.length;++n){
          var i=t._geometries[n],r=Ee.Point.apply(this,[ i ]);e.push(r.coordinates);
        }return{ type:"MultiPoint",coordinates:e };
      },LineString:function(t){
        for(var e=[],n=t.getCoordinates(),i=0;i<n.length;++i){
          var r=n[i];e.push(Ee.coordinate.apply(this,[ r ]));
        }return{ type:"LineString",coordinates:e };
      },MultiLineString:function(t){
        for(var e=[],n=0;n<t._geometries.length;++n){
          var i=t._geometries[n],r=Ee.LineString.apply(this,[ i ]);e.push(r.coordinates);
        }return{ type:"MultiLineString",coordinates:e };
      },Polygon:function(t){
        var e=[],n=Ee.LineString.apply(this,[ t._shell ]);e.push(n.coordinates);for(var i=0;i<t._holes.length;++i){
          var r=t._holes[i],o=Ee.LineString.apply(this,[ r ]);e.push(o.coordinates);
        }return{ type:"Polygon",coordinates:e };
      },MultiPolygon:function(t){
        for(var e=[],n=0;n<t._geometries.length;++n){
          var i=t._geometries[n],r=Ee.Polygon.apply(this,[ i ]);e.push(r.coordinates);
        }return{ type:"MultiPolygon",coordinates:e };
      },GeometryCollection:function(t){
        for(var e=[],n=0;n<t._geometries.length;++n){
          var i=t._geometries[n],r=i.getGeometryType();e.push(Ee[r].apply(this,[ i ]));
        }return{ type:"GeometryCollection",geometries:e };
      } },Ie=function(t){
        this.geometryFactory=t||new _e,this.precisionModel=this.geometryFactory.getPrecisionModel(),this.parser=new be(this.geometryFactory);
      };Ie.prototype.read=function(t){
      var e=this.parser.read(t);return this.precisionModel.getType()===fe.FIXED&&this.reducePrecision(e),e;
    },Ie.prototype.reducePrecision=function(t){
      var e,n;if(t.coordinate) {
        this.precisionModel.makePrecise(t.coordinate);
      }else if(t.points) {
        for(e=0,n=t.points.length;e<n;e++) {
          this.precisionModel.makePrecise(t.points[e]);
        }
      }else if(t.geometries) {
        for(e=0,n=t.geometries.length;e<n;e++) {
          this.reducePrecision(t.geometries[e]);
        }
      }
    };var Ne=function(){
      this.parser=new be(this.geometryFactory);
    };Ne.prototype.write=function(t){
      return this.parser.write(t);
    };var Ce=function(){},Se={ ON:{ configurable:!0 },LEFT:{ configurable:!0 },RIGHT:{ configurable:!0 }};Ce.prototype.interfaces_=function(){
      return[];
    },Ce.prototype.getClass=function(){
      return Ce;
    },Ce.opposite=function(t){
      return t===Ce.LEFT?Ce.RIGHT:t===Ce.RIGHT?Ce.LEFT:t;
    },Se.ON.get=function(){
      return 0;
    },Se.LEFT.get=function(){
      return 1;
    },Se.RIGHT.get=function(){
      return 2;
    },Object.defineProperties(Ce,Se),(g.prototype=new Error).name="EmptyStackException",(y.prototype=new Et).add=function(t){
      return this.array_.push(t),!0;
    },y.prototype.get=function(t){
      if(t<0||t>=this.size()) {
        throw new Error;
      }return this.array_[t];
    },y.prototype.push=function(t){
      return this.array_.push(t),t;
    },y.prototype.pop=function(t){
      if(0===this.array_.length) {
        throw new g;
      }return this.array_.pop();
    },y.prototype.peek=function(){
      if(0===this.array_.length) {
        throw new g;
      }return this.array_[this.array_.length-1];
    },y.prototype.empty=function(){
      return 0===this.array_.length;
    },y.prototype.isEmpty=function(){
      return this.empty();
    },y.prototype.search=function(t){
      return this.array_.indexOf(t);
    },y.prototype.size=function(){
      return this.array_.length;
    },y.prototype.toArray=function(){
      for(var t=[],e=0,n=this.array_.length;e<n;e++) {
        t.push(this.array_[e]);
      }return t;
    };var we=function(){
      this._minIndex=-1,this._minCoord=null,this._minDe=null,this._orientedDe=null;
    };we.prototype.getCoordinate=function(){
      return this._minCoord;
    },we.prototype.getRightmostSide=function(t,e){
      var n=this.getRightmostSideOfSegment(t,e);return n<0&&(n=this.getRightmostSideOfSegment(t,e-1)),n<0&&(this._minCoord=null,this.checkForRightmostCoordinate(t)),n;
    },we.prototype.findRightmostEdgeAtVertex=function(){
      var t=this._minDe.getEdge().getCoordinates();et.isTrue(this._minIndex>0&&this._minIndex<t.length,"rightmost point expected to be interior vertex of edge");var e=t[this._minIndex-1],n=t[this._minIndex+1],i=at.computeOrientation(this._minCoord,n,e),r=!1;(e.y<this._minCoord.y&&n.y<this._minCoord.y&&i===at.COUNTERCLOCKWISE||e.y>this._minCoord.y&&n.y>this._minCoord.y&&i===at.CLOCKWISE)&&(r=!0),r&&(this._minIndex=this._minIndex-1);
    },we.prototype.getRightmostSideOfSegment=function(t,e){
      var n=t.getEdge().getCoordinates();if(e<0||e+1>=n.length) {
        return-1;
      }if(n[e].y===n[e+1].y) {
        return-1;
      }var i=Ce.LEFT;return n[e].y<n[e+1].y&&(i=Ce.RIGHT),i;
    },we.prototype.getEdge=function(){
      return this._orientedDe;
    },we.prototype.checkForRightmostCoordinate=function(t){
      for(var e=t.getEdge().getCoordinates(),n=0;n<e.length-1;n++) {
        (null===this._minCoord||e[n].x>this._minCoord.x)&&(this._minDe=t,this._minIndex=n,this._minCoord=e[n]);
      }
    },we.prototype.findRightmostEdgeAtNode=function(){
      var t=this._minDe.getNode().getEdges();this._minDe=t.getRightmostEdge(),this._minDe.isForward()||(this._minDe=this._minDe.getSym(),this._minIndex=this._minDe.getEdge().getCoordinates().length-1);
    },we.prototype.findEdge=function(t){
      for(var e=t.iterator();e.hasNext();){
        var n=e.next();n.isForward()&&this.checkForRightmostCoordinate(n);
      }et.isTrue(0!==this._minIndex||this._minCoord.equals(this._minDe.getCoordinate()),"inconsistency in rightmost processing"),0===this._minIndex?this.findRightmostEdgeAtNode():this.findRightmostEdgeAtVertex(),this._orientedDe=this._minDe,this.getRightmostSide(this._minDe,this._minIndex)===Ce.LEFT&&(this._orientedDe=this._minDe.getSym());
    },we.prototype.interfaces_=function(){
      return[];
    },we.prototype.getClass=function(){
      return we;
    };var Le=function(t){
        function e(n,i){
          t.call(this,e.msgWithCoord(n,i)),this.pt=i?new N(i):null,this.name="TopologyException";
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCoordinate=function(){
          return this.pt;
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e.msgWithCoord=function(t,e){
          return e?t:t+" [ "+e+" ]";
        },e;
      }(Z),Oe=function(){
        this.array_=[];
      };Oe.prototype.addLast=function(t){
      this.array_.push(t);
    },Oe.prototype.removeFirst=function(){
      return this.array_.shift();
    },Oe.prototype.isEmpty=function(){
      return 0===this.array_.length;
    };var Te=function(){
      this._finder=null,this._dirEdgeList=new It,this._nodes=new It,this._rightMostCoord=null,this._env=null,this._finder=new we;
    };Te.prototype.clearVisitedEdges=function(){
      for(var t=this._dirEdgeList.iterator();t.hasNext();) {
        t.next().setVisited(!1);
      }
    },Te.prototype.getRightmostCoordinate=function(){
      return this._rightMostCoord;
    },Te.prototype.computeNodeDepth=function(t){
      for(var e=null,n=t.getEdges().iterator();n.hasNext();){
        var i=n.next();if(i.isVisited()||i.getSym().isVisited()){
          e=i;break;
        }
      }if(null===e) {
        throw new Le("unable to find edge to compute depths at "+t.getCoordinate());
      }t.getEdges().computeDepths(e);for(var r=t.getEdges().iterator();r.hasNext();){
        var o=r.next();o.setVisited(!0),this.copySymDepths(o);
      }
    },Te.prototype.computeDepth=function(t){
      this.clearVisitedEdges();var e=this._finder.getEdge();e.setEdgeDepths(Ce.RIGHT,t),this.copySymDepths(e),this.computeDepths(e);
    },Te.prototype.create=function(t){
      this.addReachable(t),this._finder.findEdge(this._dirEdgeList),this._rightMostCoord=this._finder.getCoordinate();
    },Te.prototype.findResultEdges=function(){
      for(var t=this._dirEdgeList.iterator();t.hasNext();){
        var e=t.next();e.getDepth(Ce.RIGHT)>=1&&e.getDepth(Ce.LEFT)<=0&&!e.isInteriorAreaEdge()&&e.setInResult(!0);
      }
    },Te.prototype.computeDepths=function(t){
      var e=new Mt,n=new Oe,i=t.getNode();for(n.addLast(i),e.add(i),t.setVisited(!0);!n.isEmpty();){
        var r=n.removeFirst();e.add(r),this.computeNodeDepth(r);for(var o=r.getEdges().iterator();o.hasNext();){
          var s=o.next().getSym();if(!s.isVisited()){
            var a=s.getNode();e.contains(a)||(n.addLast(a),e.add(a));
          }
        }
      }
    },Te.prototype.compareTo=function(t){
      var e=t;return this._rightMostCoord.x<e._rightMostCoord.x?-1:this._rightMostCoord.x>e._rightMostCoord.x?1:0;
    },Te.prototype.getEnvelope=function(){
      if(null===this._env){
        for(var t=new Y,e=this._dirEdgeList.iterator();e.hasNext();) {
          for(var n=e.next().getEdge().getCoordinates(),i=0;i<n.length-1;i++) {
            t.expandToInclude(n[i]);
          }
        }this._env=t;
      }return this._env;
    },Te.prototype.addReachable=function(t){
      var e=new y;for(e.add(t);!e.empty();){
        var n=e.pop();this.add(n,e);
      }
    },Te.prototype.copySymDepths=function(t){
      var e=t.getSym();e.setDepth(Ce.LEFT,t.getDepth(Ce.RIGHT)),e.setDepth(Ce.RIGHT,t.getDepth(Ce.LEFT));
    },Te.prototype.add=function(t,e){
      t.setVisited(!0),this._nodes.add(t);for(var n=t.getEdges().iterator();n.hasNext();){
        var i=n.next();this._dirEdgeList.add(i);var r=i.getSym().getNode();r.isVisited()||e.push(r);
      }
    },Te.prototype.getNodes=function(){
      return this._nodes;
    },Te.prototype.getDirectedEdges=function(){
      return this._dirEdgeList;
    },Te.prototype.interfaces_=function(){
      return[ x ];
    },Te.prototype.getClass=function(){
      return Te;
    };var Re=function t(){
      if(this.location=null,1===arguments.length){
        if(arguments[0]instanceof Array){
          var e=arguments[0];this.init(e.length);
        }else if(Number.isInteger(arguments[0])){
          var n=arguments[0];this.init(1),this.location[Ce.ON]=n;
        }else if(arguments[0]instanceof t){
          var i=arguments[0];if(this.init(i.location.length),null!==i) {
            for(var r=0;r<this.location.length;r++) {
              this.location[r]=i.location[r];
            }
          }
        }
      }else if(3===arguments.length){
        var o=arguments[0],s=arguments[1],a=arguments[2];this.init(3),this.location[Ce.ON]=o,this.location[Ce.LEFT]=s,this.location[Ce.RIGHT]=a;
      }
    };Re.prototype.setAllLocations=function(t){
      for(var e=0;e<this.location.length;e++) {
        this.location[e]=t;
      }
    },Re.prototype.isNull=function(){
      for(var t=0;t<this.location.length;t++) {
        if(this.location[t]!==L.NONE) {
          return!1;
        }
      }return!0;
    },Re.prototype.setAllLocationsIfNull=function(t){
      for(var e=0;e<this.location.length;e++) {
        this.location[e]===L.NONE&&(this.location[e]=t);
      }
    },Re.prototype.isLine=function(){
      return 1===this.location.length;
    },Re.prototype.merge=function(t){
      if(t.location.length>this.location.length){
        var e=new Array(3).fill(null);e[Ce.ON]=this.location[Ce.ON],e[Ce.LEFT]=L.NONE,e[Ce.RIGHT]=L.NONE,this.location=e;
      }for(var n=0;n<this.location.length;n++) {
        this.location[n]===L.NONE&&n<t.location.length&&(this.location[n]=t.location[n]);
      }
    },Re.prototype.getLocations=function(){
      return this.location;
    },Re.prototype.flip=function(){
      if(this.location.length<=1) {
        return null;
      }var t=this.location[Ce.LEFT];this.location[Ce.LEFT]=this.location[Ce.RIGHT],this.location[Ce.RIGHT]=t;
    },Re.prototype.toString=function(){
      var t=new P;return this.location.length>1&&t.append(L.toLocationSymbol(this.location[Ce.LEFT])),t.append(L.toLocationSymbol(this.location[Ce.ON])),this.location.length>1&&t.append(L.toLocationSymbol(this.location[Ce.RIGHT])),t.toString();
    },Re.prototype.setLocations=function(t,e,n){
      this.location[Ce.ON]=t,this.location[Ce.LEFT]=e,this.location[Ce.RIGHT]=n;
    },Re.prototype.get=function(t){
      return t<this.location.length?this.location[t]:L.NONE;
    },Re.prototype.isArea=function(){
      return this.location.length>1;
    },Re.prototype.isAnyNull=function(){
      for(var t=0;t<this.location.length;t++) {
        if(this.location[t]===L.NONE) {
          return!0;
        }
      }return!1;
    },Re.prototype.setLocation=function(){
      if(1===arguments.length){
        var t=arguments[0];this.setLocation(Ce.ON,t);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];this.location[e]=n;
      }
    },Re.prototype.init=function(t){
      this.location=new Array(t).fill(null),this.setAllLocations(L.NONE);
    },Re.prototype.isEqualOnSide=function(t,e){
      return this.location[e]===t.location[e];
    },Re.prototype.allPositionsEqual=function(t){
      for(var e=0;e<this.location.length;e++) {
        if(this.location[e]!==t) {
          return!1;
        }
      }return!0;
    },Re.prototype.interfaces_=function(){
      return[];
    },Re.prototype.getClass=function(){
      return Re;
    };var Me=function t(){
      if(this.elt=new Array(2).fill(null),1===arguments.length){
        if(Number.isInteger(arguments[0])){
          var e=arguments[0];this.elt[0]=new Re(e),this.elt[1]=new Re(e);
        }else if(arguments[0]instanceof t){
          var n=arguments[0];this.elt[0]=new Re(n.elt[0]),this.elt[1]=new Re(n.elt[1]);
        }
      }else if(2===arguments.length){
        var i=arguments[0],r=arguments[1];this.elt[0]=new Re(L.NONE),this.elt[1]=new Re(L.NONE),this.elt[i].setLocation(r);
      }else if(3===arguments.length){
        var o=arguments[0],s=arguments[1],a=arguments[2];this.elt[0]=new Re(o,s,a),this.elt[1]=new Re(o,s,a);
      }else if(4===arguments.length){
        var u=arguments[0],c=arguments[1],l=arguments[2],h=arguments[3];this.elt[0]=new Re(L.NONE,L.NONE,L.NONE),this.elt[1]=new Re(L.NONE,L.NONE,L.NONE),this.elt[u].setLocations(c,l,h);
      }
    };Me.prototype.getGeometryCount=function(){
      var t=0;return this.elt[0].isNull()||t++,this.elt[1].isNull()||t++,t;
    },Me.prototype.setAllLocations=function(t,e){
      this.elt[t].setAllLocations(e);
    },Me.prototype.isNull=function(t){
      return this.elt[t].isNull();
    },Me.prototype.setAllLocationsIfNull=function(){
      if(1===arguments.length){
        var t=arguments[0];this.setAllLocationsIfNull(0,t),this.setAllLocationsIfNull(1,t);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];this.elt[e].setAllLocationsIfNull(n);
      }
    },Me.prototype.isLine=function(t){
      return this.elt[t].isLine();
    },Me.prototype.merge=function(t){
      for(var e=0;e<2;e++) {
        null===this.elt[e]&&null!==t.elt[e]?this.elt[e]=new Re(t.elt[e]):this.elt[e].merge(t.elt[e]);
      }
    },Me.prototype.flip=function(){
      this.elt[0].flip(),this.elt[1].flip();
    },Me.prototype.getLocation=function(){
      if(1===arguments.length){
        var t=arguments[0];return this.elt[t].get(Ce.ON);
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return this.elt[e].get(n);
      }
    },Me.prototype.toString=function(){
      var t=new P;return null!==this.elt[0]&&(t.append("A:"),t.append(this.elt[0].toString())),null!==this.elt[1]&&(t.append(" B:"),t.append(this.elt[1].toString())),t.toString();
    },Me.prototype.isArea=function(){
      if(0===arguments.length) {
        return this.elt[0].isArea()||this.elt[1].isArea();
      }if(1===arguments.length){
        var t=arguments[0];return this.elt[t].isArea();
      }
    },Me.prototype.isAnyNull=function(t){
      return this.elt[t].isAnyNull();
    },Me.prototype.setLocation=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1];this.elt[t].setLocation(Ce.ON,e);
      }else if(3===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2];this.elt[n].setLocation(i,r);
      }
    },Me.prototype.isEqualOnSide=function(t,e){
      return this.elt[0].isEqualOnSide(t.elt[0],e)&&this.elt[1].isEqualOnSide(t.elt[1],e);
    },Me.prototype.allPositionsEqual=function(t,e){
      return this.elt[t].allPositionsEqual(e);
    },Me.prototype.toLine=function(t){
      this.elt[t].isArea()&&(this.elt[t]=new Re(this.elt[t].location[0]));
    },Me.prototype.interfaces_=function(){
      return[];
    },Me.prototype.getClass=function(){
      return Me;
    },Me.toLineLabel=function(t){
      for(var e=new Me(L.NONE),n=0;n<2;n++) {
        e.setLocation(n,t.getLocation(n));
      }return e;
    };var Pe=function(){
      this._startDe=null,this._maxNodeDegree=-1,this._edges=new It,this._pts=new It,this._label=new Me(L.NONE),this._ring=null,this._isHole=null,this._shell=null,this._holes=new It,this._geometryFactory=null;var t=arguments[0],e=arguments[1];this._geometryFactory=e,this.computePoints(t),this.computeRing();
    };Pe.prototype.computeRing=function(){
      if(null!==this._ring) {
        return null;
      }for(var t=new Array(this._pts.size()).fill(null),e=0;e<this._pts.size();e++) {
        t[e]=this._pts.get(e);
      }this._ring=this._geometryFactory.createLinearRing(t),this._isHole=at.isCCW(this._ring.getCoordinates());
    },Pe.prototype.isIsolated=function(){
      return 1===this._label.getGeometryCount();
    },Pe.prototype.computePoints=function(t){
      this._startDe=t;var e=t,n=!0;do{
        if(null===e) {
          throw new Le("Found null DirectedEdge");
        }if(e.getEdgeRing()===this) {
          throw new Le("Directed Edge visited twice during ring-building at "+e.getCoordinate());
        }this._edges.add(e);var i=e.getLabel();et.isTrue(i.isArea()),this.mergeLabel(i),this.addPoints(e.getEdge(),e.isForward(),n),n=!1,this.setEdgeRing(e,this),e=this.getNext(e);
      }while(e!==this._startDe);
    },Pe.prototype.getLinearRing=function(){
      return this._ring;
    },Pe.prototype.getCoordinate=function(t){
      return this._pts.get(t);
    },Pe.prototype.computeMaxNodeDegree=function(){
      this._maxNodeDegree=0;var t=this._startDe;do{
        var e=t.getNode().getEdges().getOutgoingDegree(this);e>this._maxNodeDegree&&(this._maxNodeDegree=e),t=this.getNext(t);
      }while(t!==this._startDe);this._maxNodeDegree*=2;
    },Pe.prototype.addPoints=function(t,e,n){
      var i=t.getCoordinates();if(e){
        var r=1;n&&(r=0);for(var o=r;o<i.length;o++) {
          this._pts.add(i[o]);
        }
      }else{
        var s=i.length-2;n&&(s=i.length-1);for(var a=s;a>=0;a--) {
          this._pts.add(i[a]);
        }
      }
    },Pe.prototype.isHole=function(){
      return this._isHole;
    },Pe.prototype.setInResult=function(){
      var t=this._startDe;do{
        t.getEdge().setInResult(!0),t=t.getNext();
      }while(t!==this._startDe);
    },Pe.prototype.containsPoint=function(t){
      var e=this.getLinearRing();if(!e.getEnvelopeInternal().contains(t)) {
        return!1;
      }if(!at.isPointInRing(t,e.getCoordinates())) {
        return!1;
      }for(var n=this._holes.iterator();n.hasNext();) {
        if(n.next().containsPoint(t)) {
          return!1;
        }
      }return!0;
    },Pe.prototype.addHole=function(t){
      this._holes.add(t);
    },Pe.prototype.isShell=function(){
      return null===this._shell;
    },Pe.prototype.getLabel=function(){
      return this._label;
    },Pe.prototype.getEdges=function(){
      return this._edges;
    },Pe.prototype.getMaxNodeDegree=function(){
      return this._maxNodeDegree<0&&this.computeMaxNodeDegree(),this._maxNodeDegree;
    },Pe.prototype.getShell=function(){
      return this._shell;
    },Pe.prototype.mergeLabel=function(){
      if(1===arguments.length){
        var t=arguments[0];this.mergeLabel(t,0),this.mergeLabel(t,1);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1],i=e.getLocation(n,Ce.RIGHT);if(i===L.NONE) {
          return null;
        }if(this._label.getLocation(n)===L.NONE) {
          return this._label.setLocation(n,i),null;
        }
      }
    },Pe.prototype.setShell=function(t){
      this._shell=t,null!==t&&t.addHole(this);
    },Pe.prototype.toPolygon=function(t){
      for(var e=new Array(this._holes.size()).fill(null),n=0;n<this._holes.size();n++) {
        e[n]=this._holes.get(n).getLinearRing();
      }return t.createPolygon(this.getLinearRing(),e);
    },Pe.prototype.interfaces_=function(){
      return[];
    },Pe.prototype.getClass=function(){
      return Pe;
    };var De=function(t){
        function e(){
          var e=arguments[0],n=arguments[1];t.call(this,e,n);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setEdgeRing=function(t,e){
          t.setMinEdgeRing(e);
        },e.prototype.getNext=function(t){
          return t.getNextMin();
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Pe),Ae=function(t){
        function e(){
          var e=arguments[0],n=arguments[1];t.call(this,e,n);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildMinimalRings=function(){
          var t=new It,e=this._startDe;do{
            if(null===e.getMinEdgeRing()){
              var n=new De(e,this._geometryFactory);t.add(n);
            }e=e.getNext();
          }while(e!==this._startDe);return t;
        },e.prototype.setEdgeRing=function(t,e){
          t.setEdgeRing(e);
        },e.prototype.linkDirectedEdgesForMinimalEdgeRings=function(){
          var t=this._startDe;do{
            t.getNode().getEdges().linkMinimalDirectedEdges(this),t=t.getNext();
          }while(t!==this._startDe);
        },e.prototype.getNext=function(t){
          return t.getNext();
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Pe),Fe=function(){
        if(this._label=null,this._isInResult=!1,this._isCovered=!1,this._isCoveredSet=!1,this._isVisited=!1,0===arguments.length) {

        }else if(1===arguments.length){
          var t=arguments[0];this._label=t;
        }
      };Fe.prototype.setVisited=function(t){
      this._isVisited=t;
    },Fe.prototype.setInResult=function(t){
      this._isInResult=t;
    },Fe.prototype.isCovered=function(){
      return this._isCovered;
    },Fe.prototype.isCoveredSet=function(){
      return this._isCoveredSet;
    },Fe.prototype.setLabel=function(t){
      this._label=t;
    },Fe.prototype.getLabel=function(){
      return this._label;
    },Fe.prototype.setCovered=function(t){
      this._isCovered=t,this._isCoveredSet=!0;
    },Fe.prototype.updateIM=function(t){
      et.isTrue(this._label.getGeometryCount()>=2,"found partial label"),this.computeIM(t);
    },Fe.prototype.isInResult=function(){
      return this._isInResult;
    },Fe.prototype.isVisited=function(){
      return this._isVisited;
    },Fe.prototype.interfaces_=function(){
      return[];
    },Fe.prototype.getClass=function(){
      return Fe;
    };var $e=function(t){
        function e(){
          t.call(this),this._coord=null,this._edges=null;var e=arguments[0],n=arguments[1];this._coord=e,this._edges=n,this._label=new Me(0,L.NONE);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isIncidentEdgeInResult=function(){
          for(var t=this.getEdges().getEdges().iterator();t.hasNext();) {
            if(t.next().getEdge().isInResult()) {
              return!0;
            }
          }return!1;
        },e.prototype.isIsolated=function(){
          return 1===this._label.getGeometryCount();
        },e.prototype.getCoordinate=function(){
          return this._coord;
        },e.prototype.print=function(t){
          t.println("node "+this._coord+" lbl: "+this._label);
        },e.prototype.computeIM=function(t){},e.prototype.computeMergedLocation=function(t,e){
          var n=L.NONE;if(n=this._label.getLocation(e),!t.isNull(e)){
            var i=t.getLocation(e);n!==L.BOUNDARY&&(n=i);
          }return n;
        },e.prototype.setLabel=function(){
          if(2!==arguments.length) {
            return t.prototype.setLabel.apply(this,arguments);
          }var e=arguments[0],n=arguments[1];null===this._label?this._label=new Me(e,n):this._label.setLocation(e,n);
        },e.prototype.getEdges=function(){
          return this._edges;
        },e.prototype.mergeLabel=function(){
          if(arguments[0]instanceof e){
            var t=arguments[0];this.mergeLabel(t._label);
          }else if(arguments[0]instanceof Me) {
            for(var n=arguments[0],i=0;i<2;i++){
              var r=this.computeMergedLocation(n,i);this._label.getLocation(i)===L.NONE&&this._label.setLocation(i,r);
            }
          }
        },e.prototype.add=function(t){
          this._edges.insert(t),t.setNode(this);
        },e.prototype.setLabelBoundary=function(t){
          if(null===this._label) {
            return null;
          }var e=L.NONE;null!==this._label&&(e=this._label.getLocation(t));var n=null;switch(e){
          case L.BOUNDARY:n=L.INTERIOR;break;case L.INTERIOR:default:n=L.BOUNDARY;
          }this._label.setLocation(t,n);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Fe),ke=function(){
        this.nodeMap=new h,this.nodeFact=null;var t=arguments[0];this.nodeFact=t;
      };ke.prototype.find=function(t){
      return this.nodeMap.get(t);
    },ke.prototype.addNode=function(){
      if(arguments[0]instanceof N){
        var t=arguments[0],e=this.nodeMap.get(t);return null===e&&(e=this.nodeFact.createNode(t),this.nodeMap.put(t,e)),e;
      }if(arguments[0]instanceof $e){
        var n=arguments[0],i=this.nodeMap.get(n.getCoordinate());return null===i?(this.nodeMap.put(n.getCoordinate(),n),n):(i.mergeLabel(n),i);
      }
    },ke.prototype.print=function(t){
      for(var e=this.iterator();e.hasNext();) {
        e.next().print(t);
      }
    },ke.prototype.iterator=function(){
      return this.nodeMap.values().iterator();
    },ke.prototype.values=function(){
      return this.nodeMap.values();
    },ke.prototype.getBoundaryNodes=function(t){
      for(var e=new It,n=this.iterator();n.hasNext();){
        var i=n.next();i.getLabel().getLocation(t)===L.BOUNDARY&&e.add(i);
      }return e;
    },ke.prototype.add=function(t){
      var e=t.getCoordinate();this.addNode(e).add(t);
    },ke.prototype.interfaces_=function(){
      return[];
    },ke.prototype.getClass=function(){
      return ke;
    };var Ge=function(){},je={ NE:{ configurable:!0 },NW:{ configurable:!0 },SW:{ configurable:!0 },SE:{ configurable:!0 }};Ge.prototype.interfaces_=function(){
      return[];
    },Ge.prototype.getClass=function(){
      return Ge;
    },Ge.isNorthern=function(t){
      return t===Ge.NE||t===Ge.NW;
    },Ge.isOpposite=function(t,e){
      return t!==e&&2===(t-e+4)%4;
    },Ge.commonHalfPlane=function(t,e){
      if(t===e) {
        return t;
      }if(2===(t-e+4)%4) {
        return-1;
      }var n=t<e?t:e;return 0===n&&3===(t>e?t:e)?3:n;
    },Ge.isInHalfPlane=function(t,e){
      return e===Ge.SE?t===Ge.SE||t===Ge.SW:t===e||t===e+1;
    },Ge.quadrant=function(){
      if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){
        var t=arguments[0],e=arguments[1];if(0===t&&0===e) {
          throw new v("Cannot compute the quadrant for point ( "+t+", "+e+" )");
        }return t>=0?e>=0?Ge.NE:Ge.SE:e>=0?Ge.NW:Ge.SW;
      }if(arguments[0]instanceof N&&arguments[1]instanceof N){
        var n=arguments[0],i=arguments[1];if(i.x===n.x&&i.y===n.y) {
          throw new v("Cannot compute the quadrant for two identical points "+n);
        }return i.x>=n.x?i.y>=n.y?Ge.NE:Ge.SE:i.y>=n.y?Ge.NW:Ge.SW;
      }
    },je.NE.get=function(){
      return 0;
    },je.NW.get=function(){
      return 1;
    },je.SW.get=function(){
      return 2;
    },je.SE.get=function(){
      return 3;
    },Object.defineProperties(Ge,je);var Be=function(){
      if(this._edge=null,this._label=null,this._node=null,this._p0=null,this._p1=null,this._dx=null,this._dy=null,this._quadrant=null,1===arguments.length){
        var t=arguments[0];this._edge=t;
      }else if(3===arguments.length){
        var e=arguments[0],n=arguments[1],i=arguments[2];this._edge=e,this.init(n,i),this._label=null;
      }else if(4===arguments.length){
        var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];this._edge=r,this.init(o,s),this._label=a;
      }
    };Be.prototype.compareDirection=function(t){
      return this._dx===t._dx&&this._dy===t._dy?0:this._quadrant>t._quadrant?1:this._quadrant<t._quadrant?-1:at.computeOrientation(t._p0,t._p1,this._p1);
    },Be.prototype.getDy=function(){
      return this._dy;
    },Be.prototype.getCoordinate=function(){
      return this._p0;
    },Be.prototype.setNode=function(t){
      this._node=t;
    },Be.prototype.print=function(t){
      var e=Math.atan2(this._dy,this._dx),n=this.getClass().getName(),i=n.lastIndexOf("."),r=n.substring(i+1);t.print("  "+r+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+e+"   "+this._label);
    },Be.prototype.compareTo=function(t){
      var e=t;return this.compareDirection(e);
    },Be.prototype.getDirectedCoordinate=function(){
      return this._p1;
    },Be.prototype.getDx=function(){
      return this._dx;
    },Be.prototype.getLabel=function(){
      return this._label;
    },Be.prototype.getEdge=function(){
      return this._edge;
    },Be.prototype.getQuadrant=function(){
      return this._quadrant;
    },Be.prototype.getNode=function(){
      return this._node;
    },Be.prototype.toString=function(){
      var t=Math.atan2(this._dy,this._dx),e=this.getClass().getName(),n=e.lastIndexOf(".");return"  "+e.substring(n+1)+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+t+"   "+this._label;
    },Be.prototype.computeLabel=function(t){},Be.prototype.init=function(t,e){
      this._p0=t,this._p1=e,this._dx=e.x-t.x,this._dy=e.y-t.y,this._quadrant=Ge.quadrant(this._dx,this._dy),et.isTrue(!(0===this._dx&&0===this._dy),"EdgeEnd with identical endpoints found");
    },Be.prototype.interfaces_=function(){
      return[ x ];
    },Be.prototype.getClass=function(){
      return Be;
    };var qe=function(t){
        function e(){
          var e=arguments[0],n=arguments[1];if(t.call(this,e),this._isForward=null,this._isInResult=!1,this._isVisited=!1,this._sym=null,this._next=null,this._nextMin=null,this._edgeRing=null,this._minEdgeRing=null,this._depth=[ 0,-999,-999 ],this._isForward=n,n) {
            this.init(e.getCoordinate(0),e.getCoordinate(1));
          }else{
            var i=e.getNumPoints()-1;this.init(e.getCoordinate(i),e.getCoordinate(i-1));
          }this.computeDirectedLabel();
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getNextMin=function(){
          return this._nextMin;
        },e.prototype.getDepth=function(t){
          return this._depth[t];
        },e.prototype.setVisited=function(t){
          this._isVisited=t;
        },e.prototype.computeDirectedLabel=function(){
          this._label=new Me(this._edge.getLabel()),this._isForward||this._label.flip();
        },e.prototype.getNext=function(){
          return this._next;
        },e.prototype.setDepth=function(t,e){
          if(-999!==this._depth[t]&&this._depth[t]!==e) {
            throw new Le("assigned depths do not match",this.getCoordinate());
          }this._depth[t]=e;
        },e.prototype.isInteriorAreaEdge=function(){
          for(var t=!0,e=0;e<2;e++) {
            this._label.isArea(e)&&this._label.getLocation(e,Ce.LEFT)===L.INTERIOR&&this._label.getLocation(e,Ce.RIGHT)===L.INTERIOR||(t=!1);
          }return t;
        },e.prototype.setNextMin=function(t){
          this._nextMin=t;
        },e.prototype.print=function(e){
          t.prototype.print.call(this,e),e.print(" "+this._depth[Ce.LEFT]+"/"+this._depth[Ce.RIGHT]),e.print(" ("+this.getDepthDelta()+")"),this._isInResult&&e.print(" inResult");
        },e.prototype.setMinEdgeRing=function(t){
          this._minEdgeRing=t;
        },e.prototype.isLineEdge=function(){
          var t=this._label.isLine(0)||this._label.isLine(1),e=!this._label.isArea(0)||this._label.allPositionsEqual(0,L.EXTERIOR),n=!this._label.isArea(1)||this._label.allPositionsEqual(1,L.EXTERIOR);return t&&e&&n;
        },e.prototype.setEdgeRing=function(t){
          this._edgeRing=t;
        },e.prototype.getMinEdgeRing=function(){
          return this._minEdgeRing;
        },e.prototype.getDepthDelta=function(){
          var t=this._edge.getDepthDelta();return this._isForward||(t=-t),t;
        },e.prototype.setInResult=function(t){
          this._isInResult=t;
        },e.prototype.getSym=function(){
          return this._sym;
        },e.prototype.isForward=function(){
          return this._isForward;
        },e.prototype.getEdge=function(){
          return this._edge;
        },e.prototype.printEdge=function(t){
          this.print(t),t.print(" "),this._isForward?this._edge.print(t):this._edge.printReverse(t);
        },e.prototype.setSym=function(t){
          this._sym=t;
        },e.prototype.setVisitedEdge=function(t){
          this.setVisited(t),this._sym.setVisited(t);
        },e.prototype.setEdgeDepths=function(t,e){
          var n=this.getEdge().getDepthDelta();this._isForward||(n=-n);var i=1;t===Ce.LEFT&&(i=-1);var r=Ce.opposite(t),o=e+n*i;this.setDepth(t,e),this.setDepth(r,o);
        },e.prototype.getEdgeRing=function(){
          return this._edgeRing;
        },e.prototype.isInResult=function(){
          return this._isInResult;
        },e.prototype.setNext=function(t){
          this._next=t;
        },e.prototype.isVisited=function(){
          return this._isVisited;
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e.depthFactor=function(t,e){
          return t===L.EXTERIOR&&e===L.INTERIOR?1:t===L.INTERIOR&&e===L.EXTERIOR?-1:0;
        },e;
      }(Be),Ve=function(){};Ve.prototype.createNode=function(t){
      return new $e(t,null);
    },Ve.prototype.interfaces_=function(){
      return[];
    },Ve.prototype.getClass=function(){
      return Ve;
    };var ze=function(){
      if(this._edges=new It,this._nodes=null,this._edgeEndList=new It,0===arguments.length) {
        this._nodes=new ke(new Ve);
      }else if(1===arguments.length){
        var t=arguments[0];this._nodes=new ke(t);
      }
    };ze.prototype.printEdges=function(t){
      t.println("Edges:");for(var e=0;e<this._edges.size();e++){
        t.println("edge "+e+":");var n=this._edges.get(e);n.print(t),n.eiList.print(t);
      }
    },ze.prototype.find=function(t){
      return this._nodes.find(t);
    },ze.prototype.addNode=function(){
      if(arguments[0]instanceof $e){
        var t=arguments[0];return this._nodes.addNode(t);
      }if(arguments[0]instanceof N){
        var e=arguments[0];return this._nodes.addNode(e);
      }
    },ze.prototype.getNodeIterator=function(){
      return this._nodes.iterator();
    },ze.prototype.linkResultDirectedEdges=function(){
      for(var t=this._nodes.iterator();t.hasNext();) {
        t.next().getEdges().linkResultDirectedEdges();
      }
    },ze.prototype.debugPrintln=function(t){
      z.out.println(t);
    },ze.prototype.isBoundaryNode=function(t,e){
      var n=this._nodes.find(e);if(null===n) {
        return!1;
      }var i=n.getLabel();return null!==i&&i.getLocation(t)===L.BOUNDARY;
    },ze.prototype.linkAllDirectedEdges=function(){
      for(var t=this._nodes.iterator();t.hasNext();) {
        t.next().getEdges().linkAllDirectedEdges();
      }
    },ze.prototype.matchInSameDirection=function(t,e,n,i){
      return!!t.equals(n)&&at.computeOrientation(t,e,i)===at.COLLINEAR&&Ge.quadrant(t,e)===Ge.quadrant(n,i);
    },ze.prototype.getEdgeEnds=function(){
      return this._edgeEndList;
    },ze.prototype.debugPrint=function(t){
      z.out.print(t);
    },ze.prototype.getEdgeIterator=function(){
      return this._edges.iterator();
    },ze.prototype.findEdgeInSameDirection=function(t,e){
      for(var n=0;n<this._edges.size();n++){
        var i=this._edges.get(n),r=i.getCoordinates();if(this.matchInSameDirection(t,e,r[0],r[1])) {
          return i;
        }if(this.matchInSameDirection(t,e,r[r.length-1],r[r.length-2])) {
          return i;
        }
      }return null;
    },ze.prototype.insertEdge=function(t){
      this._edges.add(t);
    },ze.prototype.findEdgeEnd=function(t){
      for(var e=this.getEdgeEnds().iterator();e.hasNext();){
        var n=e.next();if(n.getEdge()===t) {
          return n;
        }
      }return null;
    },ze.prototype.addEdges=function(t){
      for(var e=t.iterator();e.hasNext();){
        var n=e.next();this._edges.add(n);var i=new qe(n,!0),r=new qe(n,!1);i.setSym(r),r.setSym(i),this.add(i),this.add(r);
      }
    },ze.prototype.add=function(t){
      this._nodes.add(t),this._edgeEndList.add(t);
    },ze.prototype.getNodes=function(){
      return this._nodes.values();
    },ze.prototype.findEdge=function(t,e){
      for(var n=0;n<this._edges.size();n++){
        var i=this._edges.get(n),r=i.getCoordinates();if(t.equals(r[0])&&e.equals(r[1])) {
          return i;
        }
      }return null;
    },ze.prototype.interfaces_=function(){
      return[];
    },ze.prototype.getClass=function(){
      return ze;
    },ze.linkResultDirectedEdges=function(t){
      for(var e=t.iterator();e.hasNext();) {
        e.next().getEdges().linkResultDirectedEdges();
      }
    };var Ue=function(){
      this._geometryFactory=null,this._shellList=new It;var t=arguments[0];this._geometryFactory=t;
    };Ue.prototype.sortShellsAndHoles=function(t,e,n){
      for(var i=t.iterator();i.hasNext();){
        var r=i.next();r.isHole()?n.add(r):e.add(r);
      }
    },Ue.prototype.computePolygons=function(t){
      for(var e=new It,n=t.iterator();n.hasNext();){
        var i=n.next().toPolygon(this._geometryFactory);e.add(i);
      }return e;
    },Ue.prototype.placeFreeHoles=function(t,e){
      for(var n=e.iterator();n.hasNext();){
        var i=n.next();if(null===i.getShell()){
          var r=this.findEdgeRingContaining(i,t);if(null===r) {
            throw new Le("unable to assign hole to a shell",i.getCoordinate(0));
          }i.setShell(r);
        }
      }
    },Ue.prototype.buildMinimalEdgeRings=function(t,e,n){
      for(var i=new It,r=t.iterator();r.hasNext();){
        var o=r.next();if(o.getMaxNodeDegree()>2){
          o.linkDirectedEdgesForMinimalEdgeRings();var s=o.buildMinimalRings(),a=this.findShell(s);null!==a?(this.placePolygonHoles(a,s),e.add(a)):n.addAll(s);
        }else {
          i.add(o);
        }
      }return i;
    },Ue.prototype.containsPoint=function(t){
      for(var e=this._shellList.iterator();e.hasNext();) {
        if(e.next().containsPoint(t)) {
          return!0;
        }
      }return!1;
    },Ue.prototype.buildMaximalEdgeRings=function(t){
      for(var e=new It,n=t.iterator();n.hasNext();){
        var i=n.next();if(i.isInResult()&&i.getLabel().isArea()&&null===i.getEdgeRing()){
          var r=new Ae(i,this._geometryFactory);e.add(r),r.setInResult();
        }
      }return e;
    },Ue.prototype.placePolygonHoles=function(t,e){
      for(var n=e.iterator();n.hasNext();){
        var i=n.next();i.isHole()&&i.setShell(t);
      }
    },Ue.prototype.getPolygons=function(){
      return this.computePolygons(this._shellList);
    },Ue.prototype.findEdgeRingContaining=function(t,e){
      for(var n=t.getLinearRing(),i=n.getEnvelopeInternal(),r=n.getCoordinateN(0),o=null,s=null,a=e.iterator();a.hasNext();){
        var u=a.next(),c=u.getLinearRing(),l=c.getEnvelopeInternal();null!==o&&(s=o.getLinearRing().getEnvelopeInternal());var h=!1;l.contains(i)&&at.isPointInRing(r,c.getCoordinates())&&(h=!0),h&&(null===o||s.contains(l))&&(o=u);
      }return o;
    },Ue.prototype.findShell=function(t){
      for(var e=0,n=null,i=t.iterator();i.hasNext();){
        var r=i.next();r.isHole()||(n=r,e++);
      }return et.isTrue(e<=1,"found two shells in MinimalEdgeRing list"),n;
    },Ue.prototype.add=function(){
      if(1===arguments.length){
        var t=arguments[0];this.add(t.getEdgeEnds(),t.getNodes());
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];ze.linkResultDirectedEdges(n);var i=this.buildMaximalEdgeRings(e),r=new It,o=this.buildMinimalEdgeRings(i,this._shellList,r);this.sortShellsAndHoles(o,this._shellList,r),this.placeFreeHoles(this._shellList,r);
      }
    },Ue.prototype.interfaces_=function(){
      return[];
    },Ue.prototype.getClass=function(){
      return Ue;
    };var Ye=function(){};Ye.prototype.getBounds=function(){},Ye.prototype.interfaces_=function(){
      return[];
    },Ye.prototype.getClass=function(){
      return Ye;
    };var Xe=function(){
      this._bounds=null,this._item=null;var t=arguments[0],e=arguments[1];this._bounds=t,this._item=e;
    };Xe.prototype.getItem=function(){
      return this._item;
    },Xe.prototype.getBounds=function(){
      return this._bounds;
    },Xe.prototype.interfaces_=function(){
      return[ Ye,e ];
    },Xe.prototype.getClass=function(){
      return Xe;
    };var We=function(){
      this._size=null,this._items=null,this._size=0,this._items=new It,this._items.add(null);
    };We.prototype.poll=function(){
      if(this.isEmpty()) {
        return null;
      }var t=this._items.get(1);return this._items.set(1,this._items.get(this._size)),this._size-=1,this.reorder(1),t;
    },We.prototype.size=function(){
      return this._size;
    },We.prototype.reorder=function(t){
      for(var e=null,n=this._items.get(t);2*t<=this._size&&((e=2*t)!==this._size&&this._items.get(e+1).compareTo(this._items.get(e))<0&&e++,this._items.get(e).compareTo(n)<0);t=e) {
        this._items.set(t,this._items.get(e));
      }this._items.set(t,n);
    },We.prototype.clear=function(){
      this._size=0,this._items.clear();
    },We.prototype.isEmpty=function(){
      return 0===this._size;
    },We.prototype.add=function(t){
      this._items.add(null),this._size+=1;var e=this._size;for(this._items.set(0,t);t.compareTo(this._items.get(Math.trunc(e/2)))<0;e/=2) {
        this._items.set(e,this._items.get(Math.trunc(e/2)));
      }this._items.set(e,t);
    },We.prototype.interfaces_=function(){
      return[];
    },We.prototype.getClass=function(){
      return We;
    };var He=function(){};He.prototype.visitItem=function(t){},He.prototype.interfaces_=function(){
      return[];
    },He.prototype.getClass=function(){
      return He;
    };var Ke=function(){};Ke.prototype.insert=function(t,e){},Ke.prototype.remove=function(t,e){},Ke.prototype.query=function(){},Ke.prototype.interfaces_=function(){
      return[];
    },Ke.prototype.getClass=function(){
      return Ke;
    };var Je=function(){
        if(this._childBoundables=new It,this._bounds=null,this._level=null,0===arguments.length) {

        }else if(1===arguments.length){
          var t=arguments[0];this._level=t;
        }
      },Qe={ serialVersionUID:{ configurable:!0 }};Je.prototype.getLevel=function(){
      return this._level;
    },Je.prototype.size=function(){
      return this._childBoundables.size();
    },Je.prototype.getChildBoundables=function(){
      return this._childBoundables;
    },Je.prototype.addChildBoundable=function(t){
      et.isTrue(null===this._bounds),this._childBoundables.add(t);
    },Je.prototype.isEmpty=function(){
      return this._childBoundables.isEmpty();
    },Je.prototype.getBounds=function(){
      return null===this._bounds&&(this._bounds=this.computeBounds()),this._bounds;
    },Je.prototype.interfaces_=function(){
      return[ Ye,e ];
    },Je.prototype.getClass=function(){
      return Je;
    },Qe.serialVersionUID.get=function(){
      return 0x5a1e55ec41369800;
    },Object.defineProperties(Je,Qe);var Ze=function(){};Ze.reverseOrder=function(){
      return{ compare:function(t,e){
        return e.compareTo(t);
      } };
    },Ze.min=function(t){
      return Ze.sort(t),t.get(0);
    },Ze.sort=function(t,e){
      var n=t.toArray();e?$t.sort(n,e):$t.sort(n);for(var i=t.iterator(),r=0,o=n.length;r<o;r++) {
        i.next(),i.set(n[r]);
      }
    },Ze.singletonList=function(t){
      var e=new It;return e.add(t),e;
    };var tn=function(){
      this._boundable1=null,this._boundable2=null,this._distance=null,this._itemDistance=null;var t=arguments[0],e=arguments[1],n=arguments[2];this._boundable1=t,this._boundable2=e,this._itemDistance=n,this._distance=this.distance();
    };tn.prototype.expandToQueue=function(t,e){
      var n=tn.isComposite(this._boundable1),i=tn.isComposite(this._boundable2);if(n&&i) {
        return tn.area(this._boundable1)>tn.area(this._boundable2)?(this.expand(this._boundable1,this._boundable2,t,e),null):(this.expand(this._boundable2,this._boundable1,t,e),null);
      }if(n) {
        return this.expand(this._boundable1,this._boundable2,t,e),null;
      }if(i) {
        return this.expand(this._boundable2,this._boundable1,t,e),null;
      }throw new v("neither boundable is composite");
    },tn.prototype.isLeaves=function(){
      return!(tn.isComposite(this._boundable1)||tn.isComposite(this._boundable2));
    },tn.prototype.compareTo=function(t){
      var e=t;return this._distance<e._distance?-1:this._distance>e._distance?1:0;
    },tn.prototype.expand=function(t,e,n,i){
      for(var r=t.getChildBoundables().iterator();r.hasNext();){
        var o=r.next(),s=new tn(o,e,this._itemDistance);s.getDistance()<i&&n.add(s);
      }
    },tn.prototype.getBoundable=function(t){
      return 0===t?this._boundable1:this._boundable2;
    },tn.prototype.getDistance=function(){
      return this._distance;
    },tn.prototype.distance=function(){
      return this.isLeaves()?this._itemDistance.distance(this._boundable1,this._boundable2):this._boundable1.getBounds().distance(this._boundable2.getBounds());
    },tn.prototype.interfaces_=function(){
      return[ x ];
    },tn.prototype.getClass=function(){
      return tn;
    },tn.area=function(t){
      return t.getBounds().getArea();
    },tn.isComposite=function(t){
      return t instanceof Je;
    };var en=function t(){
        if(this._root=null,this._built=!1,this._itemBoundables=new It,this._nodeCapacity=null,0===arguments.length){
          var e=t.DEFAULT_NODE_CAPACITY;this._nodeCapacity=e;
        }else if(1===arguments.length){
          var n=arguments[0];et.isTrue(n>1,"Node capacity must be greater than 1"),this._nodeCapacity=n;
        }
      },nn={ IntersectsOp:{ configurable:!0 },serialVersionUID:{ configurable:!0 },DEFAULT_NODE_CAPACITY:{ configurable:!0 }};en.prototype.getNodeCapacity=function(){
      return this._nodeCapacity;
    },en.prototype.lastNode=function(t){
      return t.get(t.size()-1);
    },en.prototype.size=function(){
      if(0===arguments.length) {
        return this.isEmpty()?0:(this.build(),this.size(this._root));
      }if(1===arguments.length){
        for(var t=0,e=arguments[0].getChildBoundables().iterator();e.hasNext();){
          var n=e.next();n instanceof Je?t+=this.size(n):n instanceof Xe&&(t+=1);
        }return t;
      }
    },en.prototype.removeItem=function(t,e){
      for(var n=null,i=t.getChildBoundables().iterator();i.hasNext();){
        var r=i.next();r instanceof Xe&&r.getItem()===e&&(n=r);
      }return null!==n&&(t.getChildBoundables().remove(n),!0);
    },en.prototype.itemsTree=function(){
      if(0===arguments.length){
        this.build();var t=this.itemsTree(this._root);return null===t?new It:t;
      }if(1===arguments.length){
        for(var e=arguments[0],n=new It,i=e.getChildBoundables().iterator();i.hasNext();){
          var r=i.next();if(r instanceof Je){
            var o=this.itemsTree(r);null!==o&&n.add(o);
          }else {
            r instanceof Xe?n.add(r.getItem()):et.shouldNeverReachHere();
          }
        }return n.size()<=0?null:n;
      }
    },en.prototype.insert=function(t,e){
      et.isTrue(!this._built,"Cannot insert items into an STR packed R-tree after it has been built."),this._itemBoundables.add(new Xe(t,e));
    },en.prototype.boundablesAtLevel=function(){
      if(1===arguments.length){
        var t=arguments[0],e=new It;return this.boundablesAtLevel(t,this._root,e),e;
      }if(3===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2];if(et.isTrue(n>-2),i.getLevel()===n) {
          return r.add(i),null;
        }for(var o=i.getChildBoundables().iterator();o.hasNext();){
          var s=o.next();s instanceof Je?this.boundablesAtLevel(n,s,r):(et.isTrue(s instanceof Xe),-1===n&&r.add(s));
        }return null;
      }
    },en.prototype.query=function(){
      if(1===arguments.length){
        var t=arguments[0];this.build();var e=new It;return this.isEmpty()||this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.query(t,this._root,e),e;
      }if(2===arguments.length){
        var n=arguments[0],i=arguments[1];if(this.build(),this.isEmpty()) {
          return null;
        }this.getIntersectsOp().intersects(this._root.getBounds(),n)&&this.query(n,this._root,i);
      }else if(3===arguments.length) {
        if(T(arguments[2],He)&&arguments[0]instanceof Object&&arguments[1]instanceof Je) {
          for(var r=arguments[0],o=arguments[1],s=arguments[2],a=o.getChildBoundables(),u=0;u<a.size();u++){
            var c=a.get(u);this.getIntersectsOp().intersects(c.getBounds(),r)&&(c instanceof Je?this.query(r,c,s):c instanceof Xe?s.visitItem(c.getItem()):et.shouldNeverReachHere());
          }
        }else if(T(arguments[2],Et)&&arguments[0]instanceof Object&&arguments[1]instanceof Je) {
          for(var l=arguments[0],h=arguments[1],p=arguments[2],f=h.getChildBoundables(),d=0;d<f.size();d++){
            var g=f.get(d);this.getIntersectsOp().intersects(g.getBounds(),l)&&(g instanceof Je?this.query(l,g,p):g instanceof Xe?p.add(g.getItem()):et.shouldNeverReachHere());
          }
        }
      }
    },en.prototype.build=function(){
      if(this._built) {
        return null;
      }this._root=this._itemBoundables.isEmpty()?this.createNode(0):this.createHigherLevels(this._itemBoundables,-1),this._itemBoundables=null,this._built=!0;
    },en.prototype.getRoot=function(){
      return this.build(),this._root;
    },en.prototype.remove=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1];return this.build(),!!this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.remove(t,this._root,e);
      }if(3===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2],o=this.removeItem(i,r);if(o) {
          return!0;
        }for(var s=null,a=i.getChildBoundables().iterator();a.hasNext();){
          var u=a.next();if(this.getIntersectsOp().intersects(u.getBounds(),n)&&u instanceof Je&&(o=this.remove(n,u,r))){
            s=u;break;
          }
        }return null!==s&&s.getChildBoundables().isEmpty()&&i.getChildBoundables().remove(s),o;
      }
    },en.prototype.createHigherLevels=function(t,e){
      et.isTrue(!t.isEmpty());var n=this.createParentBoundables(t,e+1);return 1===n.size()?n.get(0):this.createHigherLevels(n,e+1);
    },en.prototype.depth=function(){
      if(0===arguments.length) {
        return this.isEmpty()?0:(this.build(),this.depth(this._root));
      }if(1===arguments.length){
        for(var t=0,e=arguments[0].getChildBoundables().iterator();e.hasNext();){
          var n=e.next();if(n instanceof Je){
            var i=this.depth(n);i>t&&(t=i);
          }
        }return t+1;
      }
    },en.prototype.createParentBoundables=function(t,e){
      et.isTrue(!t.isEmpty());var n=new It;n.add(this.createNode(e));var i=new It(t);Ze.sort(i,this.getComparator());for(var r=i.iterator();r.hasNext();){
        var o=r.next();this.lastNode(n).getChildBoundables().size()===this.getNodeCapacity()&&n.add(this.createNode(e)),this.lastNode(n).addChildBoundable(o);
      }return n;
    },en.prototype.isEmpty=function(){
      return this._built?this._root.isEmpty():this._itemBoundables.isEmpty();
    },en.prototype.interfaces_=function(){
      return[ e ];
    },en.prototype.getClass=function(){
      return en;
    },en.compareDoubles=function(t,e){
      return t>e?1:t<e?-1:0;
    },nn.IntersectsOp.get=function(){
      return rn;
    },nn.serialVersionUID.get=function(){
      return-0x35ef64c82d4c5400;
    },nn.DEFAULT_NODE_CAPACITY.get=function(){
      return 10;
    },Object.defineProperties(en,nn);var rn=function(){},on=function(){};on.prototype.distance=function(t,e){},on.prototype.interfaces_=function(){
      return[];
    },on.prototype.getClass=function(){
      return on;
    };var sn=function(t){
        function n(e){
          e=e||n.DEFAULT_NODE_CAPACITY,t.call(this,e);
        }t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n;var i={ STRtreeNode:{ configurable:!0 },serialVersionUID:{ configurable:!0 },xComparator:{ configurable:!0 },yComparator:{ configurable:!0 },intersectsOp:{ configurable:!0 },DEFAULT_NODE_CAPACITY:{ configurable:!0 }};return n.prototype.createParentBoundablesFromVerticalSlices=function(t,e){
          et.isTrue(t.length>0);for(var n=new It,i=0;i<t.length;i++) {
            n.addAll(this.createParentBoundablesFromVerticalSlice(t[i],e));
          }return n;
        },n.prototype.createNode=function(t){
          return new an(t);
        },n.prototype.size=function(){
          return 0===arguments.length?t.prototype.size.call(this):t.prototype.size.apply(this,arguments);
        },n.prototype.insert=function(){
          if(2!==arguments.length) {
            return t.prototype.insert.apply(this,arguments);
          }var e=arguments[0],n=arguments[1];if(e.isNull()) {
            return null;
          }t.prototype.insert.call(this,e,n);
        },n.prototype.getIntersectsOp=function(){
          return n.intersectsOp;
        },n.prototype.verticalSlices=function(t,e){
          for(var n=Math.trunc(Math.ceil(t.size()/e)),i=new Array(e).fill(null),r=t.iterator(),o=0;o<e;o++){
            i[o]=new It;for(var s=0;r.hasNext()&&s<n;){
              var a=r.next();i[o].add(a),s++;
            }
          }return i;
        },n.prototype.query=function(){
          if(1===arguments.length){
            var e=arguments[0];return t.prototype.query.call(this,e);
          }if(2===arguments.length){
            var n=arguments[0],i=arguments[1];t.prototype.query.call(this,n,i);
          }else if(3===arguments.length) {
            if(T(arguments[2],He)&&arguments[0]instanceof Object&&arguments[1]instanceof Je){
              var r=arguments[0],o=arguments[1],s=arguments[2];t.prototype.query.call(this,r,o,s);
            }else if(T(arguments[2],Et)&&arguments[0]instanceof Object&&arguments[1]instanceof Je){
              var a=arguments[0],u=arguments[1],c=arguments[2];t.prototype.query.call(this,a,u,c);
            }
          }
        },n.prototype.getComparator=function(){
          return n.yComparator;
        },n.prototype.createParentBoundablesFromVerticalSlice=function(e,n){
          return t.prototype.createParentBoundables.call(this,e,n);
        },n.prototype.remove=function(){
          if(2===arguments.length){
            var e=arguments[0],n=arguments[1];return t.prototype.remove.call(this,e,n);
          }return t.prototype.remove.apply(this,arguments);
        },n.prototype.depth=function(){
          return 0===arguments.length?t.prototype.depth.call(this):t.prototype.depth.apply(this,arguments);
        },n.prototype.createParentBoundables=function(t,e){
          et.isTrue(!t.isEmpty());var i=Math.trunc(Math.ceil(t.size()/this.getNodeCapacity())),r=new It(t);Ze.sort(r,n.xComparator);var o=this.verticalSlices(r,Math.trunc(Math.ceil(Math.sqrt(i))));return this.createParentBoundablesFromVerticalSlices(o,e);
        },n.prototype.nearestNeighbour=function(){
          if(1===arguments.length){
            if(T(arguments[0],on)){
              var t=arguments[0],e=new tn(this.getRoot(),this.getRoot(),t);return this.nearestNeighbour(e);
            }if(arguments[0]instanceof tn){
              var i=arguments[0];return this.nearestNeighbour(i,m.POSITIVE_INFINITY);
            }
          }else if(2===arguments.length){
            if(arguments[0]instanceof n&&T(arguments[1],on)){
              var r=arguments[0],o=arguments[1],s=new tn(this.getRoot(),r.getRoot(),o);return this.nearestNeighbour(s);
            }if(arguments[0]instanceof tn&&"number"==typeof arguments[1]){
              var a=arguments[0],u=arguments[1],c=null,l=new We;for(l.add(a);!l.isEmpty()&&u>0;){
                var h=l.poll(),p=h.getDistance();if(p>=u) {
                  break;
                }h.isLeaves()?(u=p,c=h):h.expandToQueue(l,u);
              }return[ c.getBoundable(0).getItem(),c.getBoundable(1).getItem() ];
            }
          }else if(3===arguments.length){
            var f=arguments[0],d=arguments[1],g=arguments[2],y=new Xe(f,d),_=new tn(this.getRoot(),y,g);return this.nearestNeighbour(_)[0];
          }
        },n.prototype.interfaces_=function(){
          return[ Ke,e ];
        },n.prototype.getClass=function(){
          return n;
        },n.centreX=function(t){
          return n.avg(t.getMinX(),t.getMaxX());
        },n.avg=function(t,e){
          return(t+e)/2;
        },n.centreY=function(t){
          return n.avg(t.getMinY(),t.getMaxY());
        },i.STRtreeNode.get=function(){
          return an;
        },i.serialVersionUID.get=function(){
          return 0x39920f7d5f261e0;
        },i.xComparator.get=function(){
          return{ interfaces_:function(){
            return[ I ];
          },compare:function(e,i){
            return t.compareDoubles(n.centreX(e.getBounds()),n.centreX(i.getBounds()));
          } };
        },i.yComparator.get=function(){
          return{ interfaces_:function(){
            return[ I ];
          },compare:function(e,i){
            return t.compareDoubles(n.centreY(e.getBounds()),n.centreY(i.getBounds()));
          } };
        },i.intersectsOp.get=function(){
          return{ interfaces_:function(){
            return[ t.IntersectsOp ];
          },intersects:function(t,e){
            return t.intersects(e);
          } };
        },i.DEFAULT_NODE_CAPACITY.get=function(){
          return 10;
        },Object.defineProperties(n,i),n;
      }(en),an=function(t){
        function e(){
          var e=arguments[0];t.call(this,e);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.computeBounds=function(){
          for(var t=null,e=this.getChildBoundables().iterator();e.hasNext();){
            var n=e.next();null===t?t=new Y(n.getBounds()):t.expandToInclude(n.getBounds());
          }return t;
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Je),un=function(){};un.prototype.interfaces_=function(){
      return[];
    },un.prototype.getClass=function(){
      return un;
    },un.relativeSign=function(t,e){
      return t<e?-1:t>e?1:0;
    },un.compare=function(t,e,n){
      if(e.equals2D(n)) {
        return 0;
      }var i=un.relativeSign(e.x,n.x),r=un.relativeSign(e.y,n.y);switch(t){
      case 0:return un.compareValue(i,r);case 1:return un.compareValue(r,i);case 2:return un.compareValue(r,-i);case 3:return un.compareValue(-i,r);case 4:return un.compareValue(-i,-r);case 5:return un.compareValue(-r,-i);case 6:return un.compareValue(-r,i);case 7:return un.compareValue(i,-r);
      }return et.shouldNeverReachHere("invalid octant value"),0;
    },un.compareValue=function(t,e){
      return t<0?-1:t>0?1:e<0?-1:e>0?1:0;
    };var cn=function(){
      this._segString=null,this.coord=null,this.segmentIndex=null,this._segmentOctant=null,this._isInterior=null;var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];this._segString=t,this.coord=new N(e),this.segmentIndex=n,this._segmentOctant=i,this._isInterior=!e.equals2D(t.getCoordinate(n));
    };cn.prototype.getCoordinate=function(){
      return this.coord;
    },cn.prototype.print=function(t){
      t.print(this.coord),t.print(" seg # = "+this.segmentIndex);
    },cn.prototype.compareTo=function(t){
      var e=t;return this.segmentIndex<e.segmentIndex?-1:this.segmentIndex>e.segmentIndex?1:this.coord.equals2D(e.coord)?0:un.compare(this._segmentOctant,this.coord,e.coord);
    },cn.prototype.isEndPoint=function(t){
      return 0===this.segmentIndex&&!this._isInterior||this.segmentIndex===t;
    },cn.prototype.isInterior=function(){
      return this._isInterior;
    },cn.prototype.interfaces_=function(){
      return[ x ];
    },cn.prototype.getClass=function(){
      return cn;
    };var ln=function(){
      this._nodeMap=new h,this._edge=null;var t=arguments[0];this._edge=t;
    };ln.prototype.getSplitCoordinates=function(){
      var t=new Ct;this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){
        var i=e.next();this.addEdgeCoordinates(n,i,t),n=i;
      }return t.toCoordinateArray();
    },ln.prototype.addCollapsedNodes=function(){
      var t=new It;this.findCollapsesFromInsertedNodes(t),this.findCollapsesFromExistingVertices(t);for(var e=t.iterator();e.hasNext();){
        var n=e.next().intValue();this.add(this._edge.getCoordinate(n),n);
      }
    },ln.prototype.print=function(t){
      t.println("Intersections:");for(var e=this.iterator();e.hasNext();) {
        e.next().print(t);
      }
    },ln.prototype.findCollapsesFromExistingVertices=function(t){
      for(var e=0;e<this._edge.size()-2;e++){
        var n=this._edge.getCoordinate(e),i=this._edge.getCoordinate(e+2);n.equals2D(i)&&t.add(new D(e+1));
      }
    },ln.prototype.addEdgeCoordinates=function(t,e,n){
      var i=this._edge.getCoordinate(e.segmentIndex),r=e.isInterior()||!e.coord.equals2D(i);n.add(new N(t.coord),!1);for(var o=t.segmentIndex+1;o<=e.segmentIndex;o++) {
        n.add(this._edge.getCoordinate(o));
      }r&&n.add(new N(e.coord));
    },ln.prototype.iterator=function(){
      return this._nodeMap.values().iterator();
    },ln.prototype.addSplitEdges=function(t){
      this.addEndpoints(),this.addCollapsedNodes();for(var e=this.iterator(),n=e.next();e.hasNext();){
        var i=e.next(),r=this.createSplitEdge(n,i);t.add(r),n=i;
      }
    },ln.prototype.findCollapseIndex=function(t,e,n){
      if(!t.coord.equals2D(e.coord)) {
        return!1;
      }var i=e.segmentIndex-t.segmentIndex;return e.isInterior()||i--,1===i&&(n[0]=t.segmentIndex+1,!0);
    },ln.prototype.findCollapsesFromInsertedNodes=function(t){
      for(var e=new Array(1).fill(null),n=this.iterator(),i=n.next();n.hasNext();){
        var r=n.next();this.findCollapseIndex(i,r,e)&&t.add(new D(e[0])),i=r;
      }
    },ln.prototype.getEdge=function(){
      return this._edge;
    },ln.prototype.addEndpoints=function(){
      var t=this._edge.size()-1;this.add(this._edge.getCoordinate(0),0),this.add(this._edge.getCoordinate(t),t);
    },ln.prototype.createSplitEdge=function(t,e){
      var n=e.segmentIndex-t.segmentIndex+2,i=this._edge.getCoordinate(e.segmentIndex),r=e.isInterior()||!e.coord.equals2D(i);r||n--;var o=new Array(n).fill(null),s=0;o[s++]=new N(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++) {
        o[s++]=this._edge.getCoordinate(a);
      }return r&&(o[s]=new N(e.coord)),new dn(o,this._edge.getData());
    },ln.prototype.add=function(t,e){
      var n=new cn(this._edge,t,e,this._edge.getSegmentOctant(e)),i=this._nodeMap.get(n);return null!==i?(et.isTrue(i.coord.equals2D(t),"Found equal nodes with different coordinates"),i):(this._nodeMap.put(n,n),n);
    },ln.prototype.checkSplitEdgesCorrectness=function(t){
      var e=this._edge.getCoordinates(),n=t.get(0).getCoordinate(0);if(!n.equals2D(e[0])) {
        throw new Z("bad split edge start point at "+n);
      }var i=t.get(t.size()-1).getCoordinates(),r=i[i.length-1];if(!r.equals2D(e[e.length-1])) {
        throw new Z("bad split edge end point at "+r);
      }
    },ln.prototype.interfaces_=function(){
      return[];
    },ln.prototype.getClass=function(){
      return ln;
    };var hn=function(){};hn.prototype.interfaces_=function(){
      return[];
    },hn.prototype.getClass=function(){
      return hn;
    },hn.octant=function(){
      if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){
        var t=arguments[0],e=arguments[1];if(0===t&&0===e) {
          throw new v("Cannot compute the octant for point ( "+t+", "+e+" )");
        }var n=Math.abs(t),i=Math.abs(e);return t>=0?e>=0?n>=i?0:1:n>=i?7:6:e>=0?n>=i?3:2:n>=i?4:5;
      }if(arguments[0]instanceof N&&arguments[1]instanceof N){
        var r=arguments[0],o=arguments[1],s=o.x-r.x,a=o.y-r.y;if(0===s&&0===a) {
          throw new v("Cannot compute the octant for two identical points "+r);
        }return hn.octant(s,a);
      }
    };var pn=function(){};pn.prototype.getCoordinates=function(){},pn.prototype.size=function(){},pn.prototype.getCoordinate=function(t){},pn.prototype.isClosed=function(){},pn.prototype.setData=function(t){},pn.prototype.getData=function(){},pn.prototype.interfaces_=function(){
      return[];
    },pn.prototype.getClass=function(){
      return pn;
    };var fn=function(){};fn.prototype.addIntersection=function(t,e){},fn.prototype.interfaces_=function(){
      return[ pn ];
    },fn.prototype.getClass=function(){
      return fn;
    };var dn=function(){
      this._nodeList=new ln(this),this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e;
    };dn.prototype.getCoordinates=function(){
      return this._pts;
    },dn.prototype.size=function(){
      return this._pts.length;
    },dn.prototype.getCoordinate=function(t){
      return this._pts[t];
    },dn.prototype.isClosed=function(){
      return this._pts[0].equals(this._pts[this._pts.length-1]);
    },dn.prototype.getSegmentOctant=function(t){
      return t===this._pts.length-1?-1:this.safeOctant(this.getCoordinate(t),this.getCoordinate(t+1));
    },dn.prototype.setData=function(t){
      this._data=t;
    },dn.prototype.safeOctant=function(t,e){
      return t.equals2D(e)?0:hn.octant(t,e);
    },dn.prototype.getData=function(){
      return this._data;
    },dn.prototype.addIntersection=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1];this.addIntersectionNode(t,e);
      }else if(4===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[3],o=new N(n.getIntersection(r));this.addIntersection(o,i);
      }
    },dn.prototype.toString=function(){
      return Q.toLineString(new ue(this._pts));
    },dn.prototype.getNodeList=function(){
      return this._nodeList;
    },dn.prototype.addIntersectionNode=function(t,e){
      var n=e,i=n+1;if(i<this._pts.length){
        var r=this._pts[i];t.equals2D(r)&&(n=i);
      }return this._nodeList.add(t,n);
    },dn.prototype.addIntersections=function(t,e,n){
      for(var i=0;i<t.getIntersectionNum();i++) {
        this.addIntersection(t,e,n,i);
      }
    },dn.prototype.interfaces_=function(){
      return[ fn ];
    },dn.prototype.getClass=function(){
      return dn;
    },dn.getNodedSubstrings=function(){
      if(1===arguments.length){
        var t=arguments[0],e=new It;return dn.getNodedSubstrings(t,e),e;
      }if(2===arguments.length) {
        for(var n=arguments[0],i=arguments[1],r=n.iterator();r.hasNext();) {
          r.next().getNodeList().addSplitEdges(i);
        }
      }
    };var gn=function(){
        if(this.p0=null,this.p1=null,0===arguments.length) {
          this.p0=new N,this.p1=new N;
        }else if(1===arguments.length){
          var t=arguments[0];this.p0=new N(t.p0),this.p1=new N(t.p1);
        }else if(2===arguments.length) {
          this.p0=arguments[0],this.p1=arguments[1];
        }else if(4===arguments.length){
          var e=arguments[0],n=arguments[1],i=arguments[2],r=arguments[3];this.p0=new N(e,n),this.p1=new N(i,r);
        }
      },yn={ serialVersionUID:{ configurable:!0 }};gn.prototype.minX=function(){
      return Math.min(this.p0.x,this.p1.x);
    },gn.prototype.orientationIndex=function(){
      if(arguments[0]instanceof gn){
        var t=arguments[0],e=at.orientationIndex(this.p0,this.p1,t.p0),n=at.orientationIndex(this.p0,this.p1,t.p1);return e>=0&&n>=0||e<=0&&n<=0?Math.max(e,n):0;
      }if(arguments[0]instanceof N){
        var i=arguments[0];return at.orientationIndex(this.p0,this.p1,i);
      }
    },gn.prototype.toGeometry=function(t){
      return t.createLineString([ this.p0,this.p1 ]);
    },gn.prototype.isVertical=function(){
      return this.p0.x===this.p1.x;
    },gn.prototype.equals=function(t){
      if(!(t instanceof gn)) {
        return!1;
      }var e=t;return this.p0.equals(e.p0)&&this.p1.equals(e.p1);
    },gn.prototype.intersection=function(t){
      var e=new rt;return e.computeIntersection(this.p0,this.p1,t.p0,t.p1),e.hasIntersection()?e.getIntersection(0):null;
    },gn.prototype.project=function(){
      if(arguments[0]instanceof N){
        var t=arguments[0];if(t.equals(this.p0)||t.equals(this.p1)) {
          return new N(t);
        }var e=this.projectionFactor(t),n=new N;return n.x=this.p0.x+e*(this.p1.x-this.p0.x),n.y=this.p0.y+e*(this.p1.y-this.p0.y),n;
      }if(arguments[0]instanceof gn){
        var i=arguments[0],r=this.projectionFactor(i.p0),o=this.projectionFactor(i.p1);if(r>=1&&o>=1) {
          return null;
        }if(r<=0&&o<=0) {
          return null;
        }var s=this.project(i.p0);r<0&&(s=this.p0),r>1&&(s=this.p1);var a=this.project(i.p1);return o<0&&(a=this.p0),o>1&&(a=this.p1),new gn(s,a);
      }
    },gn.prototype.normalize=function(){
      this.p1.compareTo(this.p0)<0&&this.reverse();
    },gn.prototype.angle=function(){
      return Math.atan2(this.p1.y-this.p0.y,this.p1.x-this.p0.x);
    },gn.prototype.getCoordinate=function(t){
      return 0===t?this.p0:this.p1;
    },gn.prototype.distancePerpendicular=function(t){
      return at.distancePointLinePerpendicular(t,this.p0,this.p1);
    },gn.prototype.minY=function(){
      return Math.min(this.p0.y,this.p1.y);
    },gn.prototype.midPoint=function(){
      return gn.midPoint(this.p0,this.p1);
    },gn.prototype.projectionFactor=function(t){
      if(t.equals(this.p0)) {
        return 0;
      }if(t.equals(this.p1)) {
        return 1;
      }var e=this.p1.x-this.p0.x,n=this.p1.y-this.p0.y,i=e*e+n*n;return i<=0?m.NaN:((t.x-this.p0.x)*e+(t.y-this.p0.y)*n)/i;
    },gn.prototype.closestPoints=function(t){
      var e=this.intersection(t);if(null!==e) {
        return[ e,e ];
      }var n=new Array(2).fill(null),i=m.MAX_VALUE,r=null,o=this.closestPoint(t.p0);i=o.distance(t.p0),n[0]=o,n[1]=t.p0;var s=this.closestPoint(t.p1);(r=s.distance(t.p1))<i&&(i=r,n[0]=s,n[1]=t.p1);var a=t.closestPoint(this.p0);(r=a.distance(this.p0))<i&&(i=r,n[0]=this.p0,n[1]=a);var u=t.closestPoint(this.p1);return(r=u.distance(this.p1))<i&&(i=r,n[0]=this.p1,n[1]=u),n;
    },gn.prototype.closestPoint=function(t){
      var e=this.projectionFactor(t);return e>0&&e<1?this.project(t):this.p0.distance(t)<this.p1.distance(t)?this.p0:this.p1;
    },gn.prototype.maxX=function(){
      return Math.max(this.p0.x,this.p1.x);
    },gn.prototype.getLength=function(){
      return this.p0.distance(this.p1);
    },gn.prototype.compareTo=function(t){
      var e=t,n=this.p0.compareTo(e.p0);return 0!==n?n:this.p1.compareTo(e.p1);
    },gn.prototype.reverse=function(){
      var t=this.p0;this.p0=this.p1,this.p1=t;
    },gn.prototype.equalsTopo=function(t){
      return this.p0.equals(t.p0)&&(this.p1.equals(t.p1)||this.p0.equals(t.p1))&&this.p1.equals(t.p0);
    },gn.prototype.lineIntersection=function(t){
      try{
        return U.intersection(this.p0,this.p1,t.p0,t.p1);
      }catch(t){
        if(!(t instanceof V)) {
          throw t;
        }
      }return null;
    },gn.prototype.maxY=function(){
      return Math.max(this.p0.y,this.p1.y);
    },gn.prototype.pointAlongOffset=function(t,e){
      var n=this.p0.x+t*(this.p1.x-this.p0.x),i=this.p0.y+t*(this.p1.y-this.p0.y),r=this.p1.x-this.p0.x,o=this.p1.y-this.p0.y,s=Math.sqrt(r*r+o*o),a=0,u=0;if(0!==e){
        if(s<=0) {
          throw new Error("Cannot compute offset from zero-length line segment");
        }a=e*r/s,u=e*o/s;
      }return new N(n-u,i+a);
    },gn.prototype.setCoordinates=function(){
      if(1===arguments.length){
        var t=arguments[0];this.setCoordinates(t.p0,t.p1);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];this.p0.x=e.x,this.p0.y=e.y,this.p1.x=n.x,this.p1.y=n.y;
      }
    },gn.prototype.segmentFraction=function(t){
      var e=this.projectionFactor(t);return e<0?e=0:(e>1||m.isNaN(e))&&(e=1),e;
    },gn.prototype.toString=function(){
      return"LINESTRING( "+this.p0.x+" "+this.p0.y+", "+this.p1.x+" "+this.p1.y+")";
    },gn.prototype.isHorizontal=function(){
      return this.p0.y===this.p1.y;
    },gn.prototype.distance=function(){
      if(arguments[0]instanceof gn){
        var t=arguments[0];return at.distanceLineLine(this.p0,this.p1,t.p0,t.p1);
      }if(arguments[0]instanceof N){
        var e=arguments[0];return at.distancePointLine(e,this.p0,this.p1);
      }
    },gn.prototype.pointAlong=function(t){
      var e=new N;return e.x=this.p0.x+t*(this.p1.x-this.p0.x),e.y=this.p0.y+t*(this.p1.y-this.p0.y),e;
    },gn.prototype.hashCode=function(){
      var t=m.doubleToLongBits(this.p0.x);t^=31*m.doubleToLongBits(this.p0.y);var e=Math.trunc(t)^Math.trunc(t>>32),n=m.doubleToLongBits(this.p1.x);return n^=31*m.doubleToLongBits(this.p1.y),e^Math.trunc(n)^Math.trunc(n>>32);
    },gn.prototype.interfaces_=function(){
      return[ x,e ];
    },gn.prototype.getClass=function(){
      return gn;
    },gn.midPoint=function(t,e){
      return new N((t.x+e.x)/2,(t.y+e.y)/2);
    },yn.serialVersionUID.get=function(){
      return 0x2d2172135f411c00;
    },Object.defineProperties(gn,yn);var _n=function(){
      this.tempEnv1=new Y,this.tempEnv2=new Y,this._overlapSeg1=new gn,this._overlapSeg2=new gn;
    };_n.prototype.overlap=function(){
      if(2===arguments.length) {

      }else if(4===arguments.length){
        var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];t.getLineSegment(e,this._overlapSeg1),n.getLineSegment(i,this._overlapSeg2),this.overlap(this._overlapSeg1,this._overlapSeg2);
      }
    },_n.prototype.interfaces_=function(){
      return[];
    },_n.prototype.getClass=function(){
      return _n;
    };var vn=function(){
      this._pts=null,this._start=null,this._end=null,this._env=null,this._context=null,this._id=null;var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];this._pts=t,this._start=e,this._end=n,this._context=i;
    };vn.prototype.getLineSegment=function(t,e){
      e.p0=this._pts[t],e.p1=this._pts[t+1];
    },vn.prototype.computeSelect=function(t,e,n,i){
      var r=this._pts[e],o=this._pts[n];if(i.tempEnv1.init(r,o),n-e==1) {
        return i.select(this,e),null;
      }if(!t.intersects(i.tempEnv1)) {
        return null;
      }var s=Math.trunc((e+n)/2);e<s&&this.computeSelect(t,e,s,i),s<n&&this.computeSelect(t,s,n,i);
    },vn.prototype.getCoordinates=function(){
      for(var t=new Array(this._end-this._start+1).fill(null),e=0,n=this._start;n<=this._end;n++) {
        t[e++]=this._pts[n];
      }return t;
    },vn.prototype.computeOverlaps=function(t,e){
      this.computeOverlapsInternal(this._start,this._end,t,t._start,t._end,e);
    },vn.prototype.setId=function(t){
      this._id=t;
    },vn.prototype.select=function(t,e){
      this.computeSelect(t,this._start,this._end,e);
    },vn.prototype.getEnvelope=function(){
      if(null===this._env){
        var t=this._pts[this._start],e=this._pts[this._end];this._env=new Y(t,e);
      }return this._env;
    },vn.prototype.getEndIndex=function(){
      return this._end;
    },vn.prototype.getStartIndex=function(){
      return this._start;
    },vn.prototype.getContext=function(){
      return this._context;
    },vn.prototype.getId=function(){
      return this._id;
    },vn.prototype.computeOverlapsInternal=function(t,e,n,i,r,o){
      var s=this._pts[t],a=this._pts[e],u=n._pts[i],c=n._pts[r];if(e-t==1&&r-i==1) {
        return o.overlap(this,t,n,i),null;
      }if(o.tempEnv1.init(s,a),o.tempEnv2.init(u,c),!o.tempEnv1.intersects(o.tempEnv2)) {
        return null;
      }var l=Math.trunc((t+e)/2),h=Math.trunc((i+r)/2);t<l&&(i<h&&this.computeOverlapsInternal(t,l,n,i,h,o),h<r&&this.computeOverlapsInternal(t,l,n,h,r,o)),l<e&&(i<h&&this.computeOverlapsInternal(l,e,n,i,h,o),h<r&&this.computeOverlapsInternal(l,e,n,h,r,o));
    },vn.prototype.interfaces_=function(){
      return[];
    },vn.prototype.getClass=function(){
      return vn;
    };var mn=function(){};mn.prototype.interfaces_=function(){
      return[];
    },mn.prototype.getClass=function(){
      return mn;
    },mn.getChainStartIndices=function(t){
      var e=0,n=new It;n.add(new D(e));do{
        var i=mn.findChainEnd(t,e);n.add(new D(i)),e=i;
      }while(e<t.length-1);return mn.toIntArray(n);
    },mn.findChainEnd=function(t,e){
      for(var n=e;n<t.length-1&&t[n].equals2D(t[n+1]);) {
        n++;
      }if(n>=t.length-1) {
        return t.length-1;
      }for(var i=Ge.quadrant(t[n],t[n+1]),r=e+1;r<t.length;){
        if(!t[r-1].equals2D(t[r])&&Ge.quadrant(t[r-1],t[r])!==i) {
          break;
        }r++;
      }return r-1;
    },mn.getChains=function(){
      if(1===arguments.length){
        var t=arguments[0];return mn.getChains(t,null);
      }if(2===arguments.length){
        for(var e=arguments[0],n=arguments[1],i=new It,r=mn.getChainStartIndices(e),o=0;o<r.length-1;o++){
          var s=new vn(e,r[o],r[o+1],n);i.add(s);
        }return i;
      }
    },mn.toIntArray=function(t){
      for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++) {
        e[n]=t.get(n).intValue();
      }return e;
    };var bn=function(){};bn.prototype.computeNodes=function(t){},bn.prototype.getNodedSubstrings=function(){},bn.prototype.interfaces_=function(){
      return[];
    },bn.prototype.getClass=function(){
      return bn;
    };var xn=function(){
      if(this._segInt=null,0===arguments.length) {

      }else if(1===arguments.length){
        var t=arguments[0];this.setSegmentIntersector(t);
      }
    };xn.prototype.setSegmentIntersector=function(t){
      this._segInt=t;
    },xn.prototype.interfaces_=function(){
      return[ bn ];
    },xn.prototype.getClass=function(){
      return xn;
    };var En=function(t){
        function e(e){
          e?t.call(this,e):t.call(this),this._monoChains=new It,this._index=new sn,this._idCounter=0,this._nodedSegStrings=null,this._nOverlaps=0;
        }t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={ SegmentOverlapAction:{ configurable:!0 }};return e.prototype.getMonotoneChains=function(){
          return this._monoChains;
        },e.prototype.getNodedSubstrings=function(){
          return dn.getNodedSubstrings(this._nodedSegStrings);
        },e.prototype.getIndex=function(){
          return this._index;
        },e.prototype.add=function(t){
          for(var e=mn.getChains(t.getCoordinates(),t).iterator();e.hasNext();){
            var n=e.next();n.setId(this._idCounter++),this._index.insert(n.getEnvelope(),n),this._monoChains.add(n);
          }
        },e.prototype.computeNodes=function(t){
          this._nodedSegStrings=t;for(var e=t.iterator();e.hasNext();) {
            this.add(e.next());
          }this.intersectChains();
        },e.prototype.intersectChains=function(){
          for(var t=new In(this._segInt),e=this._monoChains.iterator();e.hasNext();) {
            for(var n=e.next(),i=this._index.query(n.getEnvelope()).iterator();i.hasNext();){
              var r=i.next();if(r.getId()>n.getId()&&(n.computeOverlaps(r,t),this._nOverlaps++),this._segInt.isDone()) {
                return null;
              }
            }
          }
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },n.SegmentOverlapAction.get=function(){
          return In;
        },Object.defineProperties(e,n),e;
      }(xn),In=function(t){
        function e(){
          t.call(this),this._si=null;var e=arguments[0];this._si=e;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.overlap=function(){
          if(4!==arguments.length) {
            return t.prototype.overlap.apply(this,arguments);
          }var e=arguments[0],n=arguments[1],i=arguments[2],r=arguments[3],o=e.getContext(),s=i.getContext();this._si.processIntersections(o,n,s,r);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(_n),Nn=function t(){
        if(this._quadrantSegments=t.DEFAULT_QUADRANT_SEGMENTS,this._endCapStyle=t.CAP_ROUND,this._joinStyle=t.JOIN_ROUND,this._mitreLimit=t.DEFAULT_MITRE_LIMIT,this._isSingleSided=!1,this._simplifyFactor=t.DEFAULT_SIMPLIFY_FACTOR,0===arguments.length) {

        }else if(1===arguments.length){
          var e=arguments[0];this.setQuadrantSegments(e);
        }else if(2===arguments.length){
          var n=arguments[0],i=arguments[1];this.setQuadrantSegments(n),this.setEndCapStyle(i);
        }else if(4===arguments.length){
          var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];this.setQuadrantSegments(r),this.setEndCapStyle(o),this.setJoinStyle(s),this.setMitreLimit(a);
        }
      },Cn={ CAP_ROUND:{ configurable:!0 },CAP_FLAT:{ configurable:!0 },CAP_SQUARE:{ configurable:!0 },JOIN_ROUND:{ configurable:!0 },JOIN_MITRE:{ configurable:!0 },JOIN_BEVEL:{ configurable:!0 },DEFAULT_QUADRANT_SEGMENTS:{ configurable:!0 },DEFAULT_MITRE_LIMIT:{ configurable:!0 },DEFAULT_SIMPLIFY_FACTOR:{ configurable:!0 }};Nn.prototype.getEndCapStyle=function(){
      return this._endCapStyle;
    },Nn.prototype.isSingleSided=function(){
      return this._isSingleSided;
    },Nn.prototype.setQuadrantSegments=function(t){
      this._quadrantSegments=t,0===this._quadrantSegments&&(this._joinStyle=Nn.JOIN_BEVEL),this._quadrantSegments<0&&(this._joinStyle=Nn.JOIN_MITRE,this._mitreLimit=Math.abs(this._quadrantSegments)),t<=0&&(this._quadrantSegments=1),this._joinStyle!==Nn.JOIN_ROUND&&(this._quadrantSegments=Nn.DEFAULT_QUADRANT_SEGMENTS);
    },Nn.prototype.getJoinStyle=function(){
      return this._joinStyle;
    },Nn.prototype.setJoinStyle=function(t){
      this._joinStyle=t;
    },Nn.prototype.setSimplifyFactor=function(t){
      this._simplifyFactor=t<0?0:t;
    },Nn.prototype.getSimplifyFactor=function(){
      return this._simplifyFactor;
    },Nn.prototype.getQuadrantSegments=function(){
      return this._quadrantSegments;
    },Nn.prototype.setEndCapStyle=function(t){
      this._endCapStyle=t;
    },Nn.prototype.getMitreLimit=function(){
      return this._mitreLimit;
    },Nn.prototype.setMitreLimit=function(t){
      this._mitreLimit=t;
    },Nn.prototype.setSingleSided=function(t){
      this._isSingleSided=t;
    },Nn.prototype.interfaces_=function(){
      return[];
    },Nn.prototype.getClass=function(){
      return Nn;
    },Nn.bufferDistanceError=function(t){
      var e=Math.PI/2/t;return 1-Math.cos(e/2);
    },Cn.CAP_ROUND.get=function(){
      return 1;
    },Cn.CAP_FLAT.get=function(){
      return 2;
    },Cn.CAP_SQUARE.get=function(){
      return 3;
    },Cn.JOIN_ROUND.get=function(){
      return 1;
    },Cn.JOIN_MITRE.get=function(){
      return 2;
    },Cn.JOIN_BEVEL.get=function(){
      return 3;
    },Cn.DEFAULT_QUADRANT_SEGMENTS.get=function(){
      return 8;
    },Cn.DEFAULT_MITRE_LIMIT.get=function(){
      return 5;
    },Cn.DEFAULT_SIMPLIFY_FACTOR.get=function(){
      return.01;
    },Object.defineProperties(Nn,Cn);var Sn=function(t){
        this._distanceTol=null,this._isDeleted=null,this._angleOrientation=at.COUNTERCLOCKWISE,this._inputLine=t||null;
      },wn={ INIT:{ configurable:!0 },DELETE:{ configurable:!0 },KEEP:{ configurable:!0 },NUM_PTS_TO_CHECK:{ configurable:!0 }};Sn.prototype.isDeletable=function(t,e,n,i){
      var r=this._inputLine[t],o=this._inputLine[e],s=this._inputLine[n];return!!this.isConcave(r,o,s)&&!!this.isShallow(r,o,s,i)&&this.isShallowSampled(r,o,t,n,i);
    },Sn.prototype.deleteShallowConcavities=function(){
      for(var t=1,e=this.findNextNonDeletedIndex(t),n=this.findNextNonDeletedIndex(e),i=!1;n<this._inputLine.length;){
        var r=!1;this.isDeletable(t,e,n,this._distanceTol)&&(this._isDeleted[e]=Sn.DELETE,r=!0,i=!0),t=r?n:e,e=this.findNextNonDeletedIndex(t),n=this.findNextNonDeletedIndex(e);
      }return i;
    },Sn.prototype.isShallowConcavity=function(t,e,n,i){
      return at.computeOrientation(t,e,n)===this._angleOrientation&&at.distancePointLine(e,t,n)<i;
    },Sn.prototype.isShallowSampled=function(t,e,n,i,r){
      var o=Math.trunc((i-n)/Sn.NUM_PTS_TO_CHECK);o<=0&&(o=1);for(var s=n;s<i;s+=o) {
        if(!this.isShallow(t,e,this._inputLine[s],r)) {
          return!1;
        }
      }return!0;
    },Sn.prototype.isConcave=function(t,e,n){
      var i=at.computeOrientation(t,e,n)===this._angleOrientation;return i;
    },Sn.prototype.simplify=function(t){
      this._distanceTol=Math.abs(t),t<0&&(this._angleOrientation=at.CLOCKWISE),this._isDeleted=new Array(this._inputLine.length).fill(null);var e=!1;do{
        e=this.deleteShallowConcavities();
      }while(e);return this.collapseLine();
    },Sn.prototype.findNextNonDeletedIndex=function(t){
      for(var e=t+1;e<this._inputLine.length&&this._isDeleted[e]===Sn.DELETE;) {
        e++;
      }return e;
    },Sn.prototype.isShallow=function(t,e,n,i){
      return at.distancePointLine(e,t,n)<i;
    },Sn.prototype.collapseLine=function(){
      for(var t=new Ct,e=0;e<this._inputLine.length;e++) {
        this._isDeleted[e]!==Sn.DELETE&&t.add(this._inputLine[e]);
      }return t.toCoordinateArray();
    },Sn.prototype.interfaces_=function(){
      return[];
    },Sn.prototype.getClass=function(){
      return Sn;
    },Sn.simplify=function(t,e){
      return new Sn(t).simplify(e);
    },wn.INIT.get=function(){
      return 0;
    },wn.DELETE.get=function(){
      return 1;
    },wn.KEEP.get=function(){
      return 1;
    },wn.NUM_PTS_TO_CHECK.get=function(){
      return 10;
    },Object.defineProperties(Sn,wn);var Ln=function(){
        this._ptList=null,this._precisionModel=null,this._minimimVertexDistance=0,this._ptList=new It;
      },On={ COORDINATE_ARRAY_TYPE:{ configurable:!0 }};Ln.prototype.getCoordinates=function(){
      return this._ptList.toArray(Ln.COORDINATE_ARRAY_TYPE);
    },Ln.prototype.setPrecisionModel=function(t){
      this._precisionModel=t;
    },Ln.prototype.addPt=function(t){
      var e=new N(t);if(this._precisionModel.makePrecise(e),this.isRedundant(e)) {
        return null;
      }this._ptList.add(e);
    },Ln.prototype.revere=function(){},Ln.prototype.addPts=function(t,e){
      if(e) {
        for(var n=0;n<t.length;n++) {
          this.addPt(t[n]);
        }
      }else {
        for(var i=t.length-1;i>=0;i--) {
          this.addPt(t[i]);
        }
      }
    },Ln.prototype.isRedundant=function(t){
      if(this._ptList.size()<1) {
        return!1;
      }var e=this._ptList.get(this._ptList.size()-1);return t.distance(e)<this._minimimVertexDistance;
    },Ln.prototype.toString=function(){
      return(new _e).createLineString(this.getCoordinates()).toString();
    },Ln.prototype.closeRing=function(){
      if(this._ptList.size()<1) {
        return null;
      }var t=new N(this._ptList.get(0)),e=this._ptList.get(this._ptList.size()-1);if(t.equals(e)) {
        return null;
      }this._ptList.add(t);
    },Ln.prototype.setMinimumVertexDistance=function(t){
      this._minimimVertexDistance=t;
    },Ln.prototype.interfaces_=function(){
      return[];
    },Ln.prototype.getClass=function(){
      return Ln;
    },On.COORDINATE_ARRAY_TYPE.get=function(){
      return new Array(0).fill(null);
    },Object.defineProperties(Ln,On);var Tn=function(){},Rn={ PI_TIMES_2:{ configurable:!0 },PI_OVER_2:{ configurable:!0 },PI_OVER_4:{ configurable:!0 },COUNTERCLOCKWISE:{ configurable:!0 },CLOCKWISE:{ configurable:!0 },NONE:{ configurable:!0 }};Tn.prototype.interfaces_=function(){
      return[];
    },Tn.prototype.getClass=function(){
      return Tn;
    },Tn.toDegrees=function(t){
      return 180*t/Math.PI;
    },Tn.normalize=function(t){
      for(;t>Math.PI;) {
        t-=Tn.PI_TIMES_2;
      }for(;t<=-Math.PI;) {
        t+=Tn.PI_TIMES_2;
      }return t;
    },Tn.angle=function(){
      if(1===arguments.length){
        var t=arguments[0];return Math.atan2(t.y,t.x);
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1],i=n.x-e.x,r=n.y-e.y;return Math.atan2(r,i);
      }
    },Tn.isAcute=function(t,e,n){
      var i=t.x-e.x,r=t.y-e.y;return i*(n.x-e.x)+r*(n.y-e.y)>0;
    },Tn.isObtuse=function(t,e,n){
      var i=t.x-e.x,r=t.y-e.y;return i*(n.x-e.x)+r*(n.y-e.y)<0;
    },Tn.interiorAngle=function(t,e,n){
      var i=Tn.angle(e,t),r=Tn.angle(e,n);return Math.abs(r-i);
    },Tn.normalizePositive=function(t){
      if(t<0){
        for(;t<0;) {
          t+=Tn.PI_TIMES_2;
        }t>=Tn.PI_TIMES_2&&(t=0);
      }else{
        for(;t>=Tn.PI_TIMES_2;) {
          t-=Tn.PI_TIMES_2;
        }t<0&&(t=0);
      }return t;
    },Tn.angleBetween=function(t,e,n){
      var i=Tn.angle(e,t),r=Tn.angle(e,n);return Tn.diff(i,r);
    },Tn.diff=function(t,e){
      var n=null;return(n=t<e?e-t:t-e)>Math.PI&&(n=2*Math.PI-n),n;
    },Tn.toRadians=function(t){
      return t*Math.PI/180;
    },Tn.getTurn=function(t,e){
      var n=Math.sin(e-t);return n>0?Tn.COUNTERCLOCKWISE:n<0?Tn.CLOCKWISE:Tn.NONE;
    },Tn.angleBetweenOriented=function(t,e,n){
      var i=Tn.angle(e,t),r=Tn.angle(e,n)-i;return r<=-Math.PI?r+Tn.PI_TIMES_2:r>Math.PI?r-Tn.PI_TIMES_2:r;
    },Rn.PI_TIMES_2.get=function(){
      return 2*Math.PI;
    },Rn.PI_OVER_2.get=function(){
      return Math.PI/2;
    },Rn.PI_OVER_4.get=function(){
      return Math.PI/4;
    },Rn.COUNTERCLOCKWISE.get=function(){
      return at.COUNTERCLOCKWISE;
    },Rn.CLOCKWISE.get=function(){
      return at.CLOCKWISE;
    },Rn.NONE.get=function(){
      return at.COLLINEAR;
    },Object.defineProperties(Tn,Rn);var Mn=function t(){
        this._maxCurveSegmentError=0,this._filletAngleQuantum=null,this._closingSegLengthFactor=1,this._segList=null,this._distance=0,this._precisionModel=null,this._bufParams=null,this._li=null,this._s0=null,this._s1=null,this._s2=null,this._seg0=new gn,this._seg1=new gn,this._offset0=new gn,this._offset1=new gn,this._side=0,this._hasNarrowConcaveAngle=!1;var e=arguments[0],n=arguments[1],i=arguments[2];this._precisionModel=e,this._bufParams=n,this._li=new rt,this._filletAngleQuantum=Math.PI/2/n.getQuadrantSegments(),n.getQuadrantSegments()>=8&&n.getJoinStyle()===Nn.JOIN_ROUND&&(this._closingSegLengthFactor=t.MAX_CLOSING_SEG_LEN_FACTOR),this.init(i);
      },Pn={ OFFSET_SEGMENT_SEPARATION_FACTOR:{ configurable:!0 },INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR:{ configurable:!0 },CURVE_VERTEX_SNAP_DISTANCE_FACTOR:{ configurable:!0 },MAX_CLOSING_SEG_LEN_FACTOR:{ configurable:!0 }};Mn.prototype.addNextSegment=function(t,e){
      if(this._s0=this._s1,this._s1=this._s2,this._s2=t,this._seg0.setCoordinates(this._s0,this._s1),this.computeOffsetSegment(this._seg0,this._side,this._distance,this._offset0),this._seg1.setCoordinates(this._s1,this._s2),this.computeOffsetSegment(this._seg1,this._side,this._distance,this._offset1),this._s1.equals(this._s2)) {
        return null;
      }var n=at.computeOrientation(this._s0,this._s1,this._s2),i=n===at.CLOCKWISE&&this._side===Ce.LEFT||n===at.COUNTERCLOCKWISE&&this._side===Ce.RIGHT;0===n?this.addCollinear(e):i?this.addOutsideTurn(n,e):this.addInsideTurn(n,e);
    },Mn.prototype.addLineEndCap=function(t,e){
      var n=new gn(t,e),i=new gn;this.computeOffsetSegment(n,Ce.LEFT,this._distance,i);var r=new gn;this.computeOffsetSegment(n,Ce.RIGHT,this._distance,r);var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o);switch(this._bufParams.getEndCapStyle()){
      case Nn.CAP_ROUND:this._segList.addPt(i.p1),this.addFilletArc(e,a+Math.PI/2,a-Math.PI/2,at.CLOCKWISE,this._distance),this._segList.addPt(r.p1);break;case Nn.CAP_FLAT:this._segList.addPt(i.p1),this._segList.addPt(r.p1);break;case Nn.CAP_SQUARE:var u=new N;u.x=Math.abs(this._distance)*Math.cos(a),u.y=Math.abs(this._distance)*Math.sin(a);var c=new N(i.p1.x+u.x,i.p1.y+u.y),l=new N(r.p1.x+u.x,r.p1.y+u.y);this._segList.addPt(c),this._segList.addPt(l);
      }
    },Mn.prototype.getCoordinates=function(){
      return this._segList.getCoordinates();
    },Mn.prototype.addMitreJoin=function(t,e,n,i){
      var r=!0,o=null;try{
        o=U.intersection(e.p0,e.p1,n.p0,n.p1),(i<=0?1:o.distance(t)/Math.abs(i))>this._bufParams.getMitreLimit()&&(r=!1);
      }catch(t){
        if(!(t instanceof V)) {
          throw t;
        }o=new N(0,0),r=!1;
      }r?this._segList.addPt(o):this.addLimitedMitreJoin(e,n,i,this._bufParams.getMitreLimit());
    },Mn.prototype.addFilletCorner=function(t,e,n,i,r){
      var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o),u=n.x-t.x,c=n.y-t.y,l=Math.atan2(c,u);i===at.CLOCKWISE?a<=l&&(a+=2*Math.PI):a>=l&&(a-=2*Math.PI),this._segList.addPt(e),this.addFilletArc(t,a,l,i,r),this._segList.addPt(n);
    },Mn.prototype.addOutsideTurn=function(t,e){
      if(this._offset0.p1.distance(this._offset1.p0)<this._distance*Mn.OFFSET_SEGMENT_SEPARATION_FACTOR) {
        return this._segList.addPt(this._offset0.p1),null;
      }this._bufParams.getJoinStyle()===Nn.JOIN_MITRE?this.addMitreJoin(this._s1,this._offset0,this._offset1,this._distance):this._bufParams.getJoinStyle()===Nn.JOIN_BEVEL?this.addBevelJoin(this._offset0,this._offset1):(e&&this._segList.addPt(this._offset0.p1),this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,t,this._distance),this._segList.addPt(this._offset1.p0));
    },Mn.prototype.createSquare=function(t){
      this._segList.addPt(new N(t.x+this._distance,t.y+this._distance)),this._segList.addPt(new N(t.x+this._distance,t.y-this._distance)),this._segList.addPt(new N(t.x-this._distance,t.y-this._distance)),this._segList.addPt(new N(t.x-this._distance,t.y+this._distance)),this._segList.closeRing();
    },Mn.prototype.addSegments=function(t,e){
      this._segList.addPts(t,e);
    },Mn.prototype.addFirstSegment=function(){
      this._segList.addPt(this._offset1.p0);
    },Mn.prototype.addLastSegment=function(){
      this._segList.addPt(this._offset1.p1);
    },Mn.prototype.initSideSegments=function(t,e,n){
      this._s1=t,this._s2=e,this._side=n,this._seg1.setCoordinates(t,e),this.computeOffsetSegment(this._seg1,n,this._distance,this._offset1);
    },Mn.prototype.addLimitedMitreJoin=function(t,e,n,i){
      var r=this._seg0.p1,o=Tn.angle(r,this._seg0.p0),s=Tn.angleBetweenOriented(this._seg0.p0,r,this._seg1.p1)/2,a=Tn.normalize(o+s),u=Tn.normalize(a+Math.PI),c=i*n,l=n-c*Math.abs(Math.sin(s)),h=r.x+c*Math.cos(u),p=r.y+c*Math.sin(u),f=new N(h,p),d=new gn(r,f),g=d.pointAlongOffset(1,l),y=d.pointAlongOffset(1,-l);this._side===Ce.LEFT?(this._segList.addPt(g),this._segList.addPt(y)):(this._segList.addPt(y),this._segList.addPt(g));
    },Mn.prototype.computeOffsetSegment=function(t,e,n,i){
      var r=e===Ce.LEFT?1:-1,o=t.p1.x-t.p0.x,s=t.p1.y-t.p0.y,a=Math.sqrt(o*o+s*s),u=r*n*o/a,c=r*n*s/a;i.p0.x=t.p0.x-c,i.p0.y=t.p0.y+u,i.p1.x=t.p1.x-c,i.p1.y=t.p1.y+u;
    },Mn.prototype.addFilletArc=function(t,e,n,i,r){
      var o=i===at.CLOCKWISE?-1:1,s=Math.abs(e-n),a=Math.trunc(s/this._filletAngleQuantum+.5);if(a<1) {
        return null;
      }for(var u=s/a,c=0,l=new N;c<s;){
        var h=e+o*c;l.x=t.x+r*Math.cos(h),l.y=t.y+r*Math.sin(h),this._segList.addPt(l),c+=u;
      }
    },Mn.prototype.addInsideTurn=function(t,e){
      if(this._li.computeIntersection(this._offset0.p0,this._offset0.p1,this._offset1.p0,this._offset1.p1),this._li.hasIntersection()) {
        this._segList.addPt(this._li.getIntersection(0));
      }else if(this._hasNarrowConcaveAngle=!0,this._offset0.p1.distance(this._offset1.p0)<this._distance*Mn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) {
        this._segList.addPt(this._offset0.p1);
      }else{
        if(this._segList.addPt(this._offset0.p1),this._closingSegLengthFactor>0){
          var n=new N((this._closingSegLengthFactor*this._offset0.p1.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset0.p1.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(n);var i=new N((this._closingSegLengthFactor*this._offset1.p0.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset1.p0.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(i);
        }else {
          this._segList.addPt(this._s1);
        }this._segList.addPt(this._offset1.p0);
      }
    },Mn.prototype.createCircle=function(t){
      var e=new N(t.x+this._distance,t.y);this._segList.addPt(e),this.addFilletArc(t,0,2*Math.PI,-1,this._distance),this._segList.closeRing();
    },Mn.prototype.addBevelJoin=function(t,e){
      this._segList.addPt(t.p1),this._segList.addPt(e.p0);
    },Mn.prototype.init=function(t){
      this._distance=t,this._maxCurveSegmentError=t*(1-Math.cos(this._filletAngleQuantum/2)),this._segList=new Ln,this._segList.setPrecisionModel(this._precisionModel),this._segList.setMinimumVertexDistance(t*Mn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
    },Mn.prototype.addCollinear=function(t){
      this._li.computeIntersection(this._s0,this._s1,this._s1,this._s2),this._li.getIntersectionNum()>=2&&(this._bufParams.getJoinStyle()===Nn.JOIN_BEVEL||this._bufParams.getJoinStyle()===Nn.JOIN_MITRE?(t&&this._segList.addPt(this._offset0.p1),this._segList.addPt(this._offset1.p0)):this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,at.CLOCKWISE,this._distance));
    },Mn.prototype.closeRing=function(){
      this._segList.closeRing();
    },Mn.prototype.hasNarrowConcaveAngle=function(){
      return this._hasNarrowConcaveAngle;
    },Mn.prototype.interfaces_=function(){
      return[];
    },Mn.prototype.getClass=function(){
      return Mn;
    },Pn.OFFSET_SEGMENT_SEPARATION_FACTOR.get=function(){
      return.001;
    },Pn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){
      return.001;
    },Pn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){
      return 1e-6;
    },Pn.MAX_CLOSING_SEG_LEN_FACTOR.get=function(){
      return 80;
    },Object.defineProperties(Mn,Pn);var Dn=function(){
      this._distance=0,this._precisionModel=null,this._bufParams=null;var t=arguments[0],e=arguments[1];this._precisionModel=t,this._bufParams=e;
    };Dn.prototype.getOffsetCurve=function(t,e){
      if(this._distance=e,0===e) {
        return null;
      }var n=e<0,i=Math.abs(e),r=this.getSegGen(i);t.length<=1?this.computePointCurve(t[0],r):this.computeOffsetCurve(t,n,r);var o=r.getCoordinates();return n&&St.reverse(o),o;
    },Dn.prototype.computeSingleSidedBufferCurve=function(t,e,n){
      var i=this.simplifyTolerance(this._distance);if(e){
        n.addSegments(t,!0);var r=Sn.simplify(t,-i),o=r.length-1;n.initSideSegments(r[o],r[o-1],Ce.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--) {
          n.addNextSegment(r[s],!0);
        }
      }else{
        n.addSegments(t,!1);var a=Sn.simplify(t,i),u=a.length-1;n.initSideSegments(a[0],a[1],Ce.LEFT),n.addFirstSegment();for(var c=2;c<=u;c++) {
          n.addNextSegment(a[c],!0);
        }
      }n.addLastSegment(),n.closeRing();
    },Dn.prototype.computeRingBufferCurve=function(t,e,n){
      var i=this.simplifyTolerance(this._distance);e===Ce.RIGHT&&(i=-i);var r=Sn.simplify(t,i),o=r.length-1;n.initSideSegments(r[o-1],r[0],e);for(var s=1;s<=o;s++){
        var a=1!==s;n.addNextSegment(r[s],a);
      }n.closeRing();
    },Dn.prototype.computeLineBufferCurve=function(t,e){
      var n=this.simplifyTolerance(this._distance),i=Sn.simplify(t,n),r=i.length-1;e.initSideSegments(i[0],i[1],Ce.LEFT);for(var o=2;o<=r;o++) {
        e.addNextSegment(i[o],!0);
      }e.addLastSegment(),e.addLineEndCap(i[r-1],i[r]);var s=Sn.simplify(t,-n),a=s.length-1;e.initSideSegments(s[a],s[a-1],Ce.LEFT);for(var u=a-2;u>=0;u--) {
        e.addNextSegment(s[u],!0);
      }e.addLastSegment(),e.addLineEndCap(s[1],s[0]),e.closeRing();
    },Dn.prototype.computePointCurve=function(t,e){
      switch(this._bufParams.getEndCapStyle()){
      case Nn.CAP_ROUND:e.createCircle(t);break;case Nn.CAP_SQUARE:e.createSquare(t);
      }
    },Dn.prototype.getLineCurve=function(t,e){
      if(this._distance=e,e<0&&!this._bufParams.isSingleSided()) {
        return null;
      }if(0===e) {
        return null;
      }var n=Math.abs(e),i=this.getSegGen(n);if(t.length<=1) {
        this.computePointCurve(t[0],i);
      }else if(this._bufParams.isSingleSided()){
        var r=e<0;this.computeSingleSidedBufferCurve(t,r,i);
      }else {
        this.computeLineBufferCurve(t,i);
      }return i.getCoordinates();
    },Dn.prototype.getBufferParameters=function(){
      return this._bufParams;
    },Dn.prototype.simplifyTolerance=function(t){
      return t*this._bufParams.getSimplifyFactor();
    },Dn.prototype.getRingCurve=function(t,e,n){
      if(this._distance=n,t.length<=2) {
        return this.getLineCurve(t,n);
      }if(0===n) {
        return Dn.copyCoordinates(t);
      }var i=this.getSegGen(n);return this.computeRingBufferCurve(t,e,i),i.getCoordinates();
    },Dn.prototype.computeOffsetCurve=function(t,e,n){
      var i=this.simplifyTolerance(this._distance);if(e){
        var r=Sn.simplify(t,-i),o=r.length-1;n.initSideSegments(r[o],r[o-1],Ce.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--) {
          n.addNextSegment(r[s],!0);
        }
      }else{
        var a=Sn.simplify(t,i),u=a.length-1;n.initSideSegments(a[0],a[1],Ce.LEFT),n.addFirstSegment();for(var c=2;c<=u;c++) {
          n.addNextSegment(a[c],!0);
        }
      }n.addLastSegment();
    },Dn.prototype.getSegGen=function(t){
      return new Mn(this._precisionModel,this._bufParams,t);
    },Dn.prototype.interfaces_=function(){
      return[];
    },Dn.prototype.getClass=function(){
      return Dn;
    },Dn.copyCoordinates=function(t){
      for(var e=new Array(t.length).fill(null),n=0;n<e.length;n++) {
        e[n]=new N(t[n]);
      }return e;
    };var An=function(){
        this._subgraphs=null,this._seg=new gn,this._cga=new at;var t=arguments[0];this._subgraphs=t;
      },Fn={ DepthSegment:{ configurable:!0 }};An.prototype.findStabbedSegments=function(){
      if(1===arguments.length){
        for(var t=arguments[0],e=new It,n=this._subgraphs.iterator();n.hasNext();){
          var i=n.next(),r=i.getEnvelope();t.y<r.getMinY()||t.y>r.getMaxY()||this.findStabbedSegments(t,i.getDirectedEdges(),e);
        }return e;
      }if(3===arguments.length) {
        if(T(arguments[2],Et)&&arguments[0]instanceof N&&arguments[1]instanceof qe){
          for(var o=arguments[0],s=arguments[1],a=arguments[2],u=s.getEdge().getCoordinates(),c=0;c<u.length-1;c++) {
            if(this._seg.p0=u[c],this._seg.p1=u[c+1],this._seg.p0.y>this._seg.p1.y&&this._seg.reverse(),!(Math.max(this._seg.p0.x,this._seg.p1.x)<o.x)&&!(this._seg.isHorizontal()||o.y<this._seg.p0.y||o.y>this._seg.p1.y||at.computeOrientation(this._seg.p0,this._seg.p1,o)===at.RIGHT)){
              var l=s.getDepth(Ce.LEFT);this._seg.p0.equals(u[c])||(l=s.getDepth(Ce.RIGHT));var h=new $n(this._seg,l);a.add(h);
            }
          }
        }else if(T(arguments[2],Et)&&arguments[0]instanceof N&&T(arguments[1],Et)) {
          for(var p=arguments[0],f=arguments[1],d=arguments[2],g=f.iterator();g.hasNext();){
            var y=g.next();y.isForward()&&this.findStabbedSegments(p,y,d);
          }
        }
      }
    },An.prototype.getDepth=function(t){
      var e=this.findStabbedSegments(t);return 0===e.size()?0:Ze.min(e)._leftDepth;
    },An.prototype.interfaces_=function(){
      return[];
    },An.prototype.getClass=function(){
      return An;
    },Fn.DepthSegment.get=function(){
      return $n;
    },Object.defineProperties(An,Fn);var $n=function(){
      this._upwardSeg=null,this._leftDepth=null;var t=arguments[0],e=arguments[1];this._upwardSeg=new gn(t),this._leftDepth=e;
    };$n.prototype.compareTo=function(t){
      var e=t;if(this._upwardSeg.minX()>=e._upwardSeg.maxX()) {
        return 1;
      }if(this._upwardSeg.maxX()<=e._upwardSeg.minX()) {
        return-1;
      }var n=this._upwardSeg.orientationIndex(e._upwardSeg);return 0!==n||0!=(n=-1*e._upwardSeg.orientationIndex(this._upwardSeg))?n:this._upwardSeg.compareTo(e._upwardSeg);
    },$n.prototype.compareX=function(t,e){
      var n=t.p0.compareTo(e.p0);return 0!==n?n:t.p1.compareTo(e.p1);
    },$n.prototype.toString=function(){
      return this._upwardSeg.toString();
    },$n.prototype.interfaces_=function(){
      return[ x ];
    },$n.prototype.getClass=function(){
      return $n;
    };var kn=function(t,e,n){
      this.p0=t||null,this.p1=e||null,this.p2=n||null;
    };kn.prototype.area=function(){
      return kn.area(this.p0,this.p1,this.p2);
    },kn.prototype.signedArea=function(){
      return kn.signedArea(this.p0,this.p1,this.p2);
    },kn.prototype.interpolateZ=function(t){
      if(null===t) {
        throw new v("Supplied point is null.");
      }return kn.interpolateZ(t,this.p0,this.p1,this.p2);
    },kn.prototype.longestSideLength=function(){
      return kn.longestSideLength(this.p0,this.p1,this.p2);
    },kn.prototype.isAcute=function(){
      return kn.isAcute(this.p0,this.p1,this.p2);
    },kn.prototype.circumcentre=function(){
      return kn.circumcentre(this.p0,this.p1,this.p2);
    },kn.prototype.area3D=function(){
      return kn.area3D(this.p0,this.p1,this.p2);
    },kn.prototype.centroid=function(){
      return kn.centroid(this.p0,this.p1,this.p2);
    },kn.prototype.inCentre=function(){
      return kn.inCentre(this.p0,this.p1,this.p2);
    },kn.prototype.interfaces_=function(){
      return[];
    },kn.prototype.getClass=function(){
      return kn;
    },kn.area=function(t,e,n){
      return Math.abs(((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2);
    },kn.signedArea=function(t,e,n){
      return((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2;
    },kn.det=function(t,e,n,i){
      return t*i-e*n;
    },kn.interpolateZ=function(t,e,n,i){
      var r=e.x,o=e.y,s=n.x-r,a=i.x-r,u=n.y-o,c=i.y-o,l=s*c-a*u,h=t.x-r,p=t.y-o,f=(c*h-a*p)/l,d=(-u*h+s*p)/l;return e.z+f*(n.z-e.z)+d*(i.z-e.z);
    },kn.longestSideLength=function(t,e,n){
      var i=t.distance(e),r=e.distance(n),o=n.distance(t),s=i;return r>s&&(s=r),o>s&&(s=o),s;
    },kn.isAcute=function(t,e,n){
      return!!Tn.isAcute(t,e,n)&&!!Tn.isAcute(e,n,t)&&!!Tn.isAcute(n,t,e);
    },kn.circumcentre=function(t,e,n){
      var i=n.x,r=n.y,o=t.x-i,s=t.y-r,a=e.x-i,u=e.y-r,c=2*kn.det(o,s,a,u),l=kn.det(s,o*o+s*s,u,a*a+u*u),h=kn.det(o,o*o+s*s,a,a*a+u*u);return new N(i-l/c,r+h/c);
    },kn.perpendicularBisector=function(t,e){
      var n=e.x-t.x,i=e.y-t.y,r=new U(t.x+n/2,t.y+i/2,1),o=new U(t.x-i+n/2,t.y+n+i/2,1);return new U(r,o);
    },kn.angleBisector=function(t,e,n){
      var i=e.distance(t),r=i/(i+e.distance(n)),o=n.x-t.x,s=n.y-t.y;return new N(t.x+r*o,t.y+r*s);
    },kn.area3D=function(t,e,n){
      var i=e.x-t.x,r=e.y-t.y,o=e.z-t.z,s=n.x-t.x,a=n.y-t.y,u=n.z-t.z,c=r*u-o*a,l=o*s-i*u,h=i*a-r*s,p=c*c+l*l+h*h,f=Math.sqrt(p)/2;return f;
    },kn.centroid=function(t,e,n){
      var i=(t.x+e.x+n.x)/3,r=(t.y+e.y+n.y)/3;return new N(i,r);
    },kn.inCentre=function(t,e,n){
      var i=e.distance(n),r=t.distance(n),o=t.distance(e),s=i+r+o,a=(i*t.x+r*e.x+o*n.x)/s,u=(i*t.y+r*e.y+o*n.y)/s;return new N(a,u);
    };var Gn=function(){
      this._inputGeom=null,this._distance=null,this._curveBuilder=null,this._curveList=new It;var t=arguments[0],e=arguments[1],n=arguments[2];this._inputGeom=t,this._distance=e,this._curveBuilder=n;
    };Gn.prototype.addPoint=function(t){
      if(this._distance<=0) {
        return null;
      }var e=t.getCoordinates(),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,L.EXTERIOR,L.INTERIOR);
    },Gn.prototype.addPolygon=function(t){
      var e=this._distance,n=Ce.LEFT;this._distance<0&&(e=-this._distance,n=Ce.RIGHT);var i=t.getExteriorRing(),r=St.removeRepeatedPoints(i.getCoordinates());if(this._distance<0&&this.isErodedCompletely(i,this._distance)) {
        return null;
      }if(this._distance<=0&&r.length<3) {
        return null;
      }this.addPolygonRing(r,e,n,L.EXTERIOR,L.INTERIOR);for(var o=0;o<t.getNumInteriorRing();o++){
        var s=t.getInteriorRingN(o),a=St.removeRepeatedPoints(s.getCoordinates());this._distance>0&&this.isErodedCompletely(s,-this._distance)||this.addPolygonRing(a,e,Ce.opposite(n),L.INTERIOR,L.EXTERIOR);
      }
    },Gn.prototype.isTriangleErodedCompletely=function(t,e){
      var n=new kn(t[0],t[1],t[2]),i=n.inCentre();return at.distancePointLine(i,n.p0,n.p1)<Math.abs(e);
    },Gn.prototype.addLineString=function(t){
      if(this._distance<=0&&!this._curveBuilder.getBufferParameters().isSingleSided()) {
        return null;
      }var e=St.removeRepeatedPoints(t.getCoordinates()),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,L.EXTERIOR,L.INTERIOR);
    },Gn.prototype.addCurve=function(t,e,n){
      if(null===t||t.length<2) {
        return null;
      }var i=new dn(t,new Me(0,L.BOUNDARY,e,n));this._curveList.add(i);
    },Gn.prototype.getCurves=function(){
      return this.add(this._inputGeom),this._curveList;
    },Gn.prototype.addPolygonRing=function(t,e,n,i,r){
      if(0===e&&t.length<ee.MINIMUM_VALID_SIZE) {
        return null;
      }var o=i,s=r;t.length>=ee.MINIMUM_VALID_SIZE&&at.isCCW(t)&&(o=r,s=i,n=Ce.opposite(n));var a=this._curveBuilder.getRingCurve(t,n,e);this.addCurve(a,o,s);
    },Gn.prototype.add=function(t){
      if(t.isEmpty()) {
        return null;
      }t instanceof Zt?this.addPolygon(t):t instanceof Ht?this.addLineString(t):t instanceof Jt?this.addPoint(t):(t instanceof te||t instanceof Vt||t instanceof ne||t instanceof qt)&&this.addCollection(t);
    },Gn.prototype.isErodedCompletely=function(t,e){
      var n=t.getCoordinates();if(n.length<4) {
        return e<0;
      }if(4===n.length) {
        return this.isTriangleErodedCompletely(n,e);
      }var i=t.getEnvelopeInternal(),r=Math.min(i.getHeight(),i.getWidth());return e<0&&2*Math.abs(e)>r;
    },Gn.prototype.addCollection=function(t){
      for(var e=0;e<t.getNumGeometries();e++){
        var n=t.getGeometryN(e);this.add(n);
      }
    },Gn.prototype.interfaces_=function(){
      return[];
    },Gn.prototype.getClass=function(){
      return Gn;
    };var jn=function(){};jn.prototype.locate=function(t){},jn.prototype.interfaces_=function(){
      return[];
    },jn.prototype.getClass=function(){
      return jn;
    };var Bn=function(){
      this._parent=null,this._atStart=null,this._max=null,this._index=null,this._subcollectionIterator=null;var t=arguments[0];this._parent=t,this._atStart=!0,this._index=0,this._max=t.getNumGeometries();
    };Bn.prototype.next=function(){
      if(this._atStart) {
        return this._atStart=!1,Bn.isAtomic(this._parent)&&this._index++,this._parent;
      }if(null!==this._subcollectionIterator){
        if(this._subcollectionIterator.hasNext()) {
          return this._subcollectionIterator.next();
        }this._subcollectionIterator=null;
      }if(this._index>=this._max) {
        throw new i;
      }var t=this._parent.getGeometryN(this._index++);return t instanceof qt?(this._subcollectionIterator=new Bn(t),this._subcollectionIterator.next()):t;
    },Bn.prototype.remove=function(){
      throw new Error(this.getClass().getName());
    },Bn.prototype.hasNext=function(){
      if(this._atStart) {
        return!0;
      }if(null!==this._subcollectionIterator){
        if(this._subcollectionIterator.hasNext()) {
          return!0;
        }this._subcollectionIterator=null;
      }return!(this._index>=this._max);
    },Bn.prototype.interfaces_=function(){
      return[ xt ];
    },Bn.prototype.getClass=function(){
      return Bn;
    },Bn.isAtomic=function(t){
      return!(t instanceof qt);
    };var qn=function(){
      this._geom=null;var t=arguments[0];this._geom=t;
    };qn.prototype.locate=function(t){
      return qn.locate(t,this._geom);
    },qn.prototype.interfaces_=function(){
      return[ jn ];
    },qn.prototype.getClass=function(){
      return qn;
    },qn.isPointInRing=function(t,e){
      return!!e.getEnvelopeInternal().intersects(t)&&at.isPointInRing(t,e.getCoordinates());
    },qn.containsPointInPolygon=function(t,e){
      if(e.isEmpty()) {
        return!1;
      }var n=e.getExteriorRing();if(!qn.isPointInRing(t,n)) {
        return!1;
      }for(var i=0;i<e.getNumInteriorRing();i++){
        var r=e.getInteriorRingN(i);if(qn.isPointInRing(t,r)) {
          return!1;
        }
      }return!0;
    },qn.containsPoint=function(t,e){
      if(e instanceof Zt) {
        return qn.containsPointInPolygon(t,e);
      }if(e instanceof qt) {
        for(var n=new Bn(e);n.hasNext();){
          var i=n.next();if(i!==e&&qn.containsPoint(t,i)) {
            return!0;
          }
        }
      }return!1;
    },qn.locate=function(t,e){
      return e.isEmpty()?L.EXTERIOR:qn.containsPoint(t,e)?L.INTERIOR:L.EXTERIOR;
    };var Vn=function(){
      this._edgeMap=new h,this._edgeList=null,this._ptInAreaLocation=[ L.NONE,L.NONE ];
    };Vn.prototype.getNextCW=function(t){
      this.getEdges();var e=this._edgeList.indexOf(t),n=e-1;return 0===e&&(n=this._edgeList.size()-1),this._edgeList.get(n);
    },Vn.prototype.propagateSideLabels=function(t){
      for(var e=L.NONE,n=this.iterator();n.hasNext();){
        var i=n.next().getLabel();i.isArea(t)&&i.getLocation(t,Ce.LEFT)!==L.NONE&&(e=i.getLocation(t,Ce.LEFT));
      }if(e===L.NONE) {
        return null;
      }for(var r=e,o=this.iterator();o.hasNext();){
        var s=o.next(),a=s.getLabel();if(a.getLocation(t,Ce.ON)===L.NONE&&a.setLocation(t,Ce.ON,r),a.isArea(t)){
          var u=a.getLocation(t,Ce.LEFT),c=a.getLocation(t,Ce.RIGHT);if(c!==L.NONE){
            if(c!==r) {
              throw new Le("side location conflict",s.getCoordinate());
            }u===L.NONE&&et.shouldNeverReachHere("found single null side (at "+s.getCoordinate()+")"),r=u;
          }else {
            et.isTrue(a.getLocation(t,Ce.LEFT)===L.NONE,"found single null side"),a.setLocation(t,Ce.RIGHT,r),a.setLocation(t,Ce.LEFT,r);
          }
        }
      }
    },Vn.prototype.getCoordinate=function(){
      var t=this.iterator();return t.hasNext()?t.next().getCoordinate():null;
    },Vn.prototype.print=function(t){
      z.out.println("EdgeEndStar:   "+this.getCoordinate());for(var e=this.iterator();e.hasNext();) {
        e.next().print(t);
      }
    },Vn.prototype.isAreaLabelsConsistent=function(t){
      return this.computeEdgeEndLabels(t.getBoundaryNodeRule()),this.checkAreaLabelsConsistent(0);
    },Vn.prototype.checkAreaLabelsConsistent=function(t){
      var e=this.getEdges();if(e.size()<=0) {
        return!0;
      }var n=e.size()-1,i=e.get(n).getLabel().getLocation(t,Ce.LEFT);et.isTrue(i!==L.NONE,"Found unlabelled area edge");for(var r=i,o=this.iterator();o.hasNext();){
        var s=o.next().getLabel();et.isTrue(s.isArea(t),"Found non-area edge");var a=s.getLocation(t,Ce.LEFT),u=s.getLocation(t,Ce.RIGHT);if(a===u) {
          return!1;
        }if(u!==r) {
          return!1;
        }r=a;
      }return!0;
    },Vn.prototype.findIndex=function(t){
      this.iterator();for(var e=0;e<this._edgeList.size();e++) {
        if(this._edgeList.get(e)===t) {
          return e;
        }
      }return-1;
    },Vn.prototype.iterator=function(){
      return this.getEdges().iterator();
    },Vn.prototype.getEdges=function(){
      return null===this._edgeList&&(this._edgeList=new It(this._edgeMap.values())),this._edgeList;
    },Vn.prototype.getLocation=function(t,e,n){
      return this._ptInAreaLocation[t]===L.NONE&&(this._ptInAreaLocation[t]=qn.locate(e,n[t].getGeometry())),this._ptInAreaLocation[t];
    },Vn.prototype.toString=function(){
      var t=new P;t.append("EdgeEndStar:   "+this.getCoordinate()),t.append("\n");for(var e=this.iterator();e.hasNext();){
        var n=e.next();t.append(n),t.append("\n");
      }return t.toString();
    },Vn.prototype.computeEdgeEndLabels=function(t){
      for(var e=this.iterator();e.hasNext();) {
        e.next().computeLabel(t);
      }
    },Vn.prototype.computeLabelling=function(t){
      this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),this.propagateSideLabels(0),this.propagateSideLabels(1);for(var e=[ !1,!1 ],n=this.iterator();n.hasNext();) {
        for(var i=n.next().getLabel(),r=0;r<2;r++) {
          i.isLine(r)&&i.getLocation(r)===L.BOUNDARY&&(e[r]=!0);
        }
      }for(var o=this.iterator();o.hasNext();) {
        for(var s=o.next(),a=s.getLabel(),u=0;u<2;u++) {
          if(a.isAnyNull(u)){
            var c=L.NONE;if(e[u]) {
c=L.EXTERIOR;
}else{
              var l=s.getCoordinate();c=this.getLocation(u,l,t);
            }a.setAllLocationsIfNull(u,c);
          }
        }
      }
    },Vn.prototype.getDegree=function(){
      return this._edgeMap.size();
    },Vn.prototype.insertEdgeEnd=function(t,e){
      this._edgeMap.put(t,e),this._edgeList=null;
    },Vn.prototype.interfaces_=function(){
      return[];
    },Vn.prototype.getClass=function(){
      return Vn;
    };var zn=function(t){
        function e(){
          t.call(this),this._resultAreaEdgeList=null,this._label=null,this._SCANNING_FOR_INCOMING=1,this._LINKING_TO_OUTGOING=2;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.linkResultDirectedEdges=function(){
          this.getResultAreaEdges();for(var t=null,e=null,n=this._SCANNING_FOR_INCOMING,i=0;i<this._resultAreaEdgeList.size();i++){
            var r=this._resultAreaEdgeList.get(i),o=r.getSym();if(r.getLabel().isArea()) {
              switch(null===t&&r.isInResult()&&(t=r),n){
              case this._SCANNING_FOR_INCOMING:if(!o.isInResult()) {
                continue;
              }e=o,n=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(!r.isInResult()) {
                continue;
              }e.setNext(r),n=this._SCANNING_FOR_INCOMING;
              }
            }
          }if(n===this._LINKING_TO_OUTGOING){
            if(null===t) {
              throw new Le("no outgoing dirEdge found",this.getCoordinate());
            }et.isTrue(t.isInResult(),"unable to link last incoming dirEdge"),e.setNext(t);
          }
        },e.prototype.insert=function(t){
          var e=t;this.insertEdgeEnd(e,e);
        },e.prototype.getRightmostEdge=function(){
          var t=this.getEdges(),e=t.size();if(e<1) {
            return null;
          }var n=t.get(0);if(1===e) {
            return n;
          }var i=t.get(e-1),r=n.getQuadrant(),o=i.getQuadrant();return Ge.isNorthern(r)&&Ge.isNorthern(o)?n:Ge.isNorthern(r)||Ge.isNorthern(o)?0!==n.getDy()?n:0!==i.getDy()?i:(et.shouldNeverReachHere("found two horizontal edges incident on node"),null):i;
        },e.prototype.print=function(t){
          z.out.println("DirectedEdgeStar: "+this.getCoordinate());for(var e=this.iterator();e.hasNext();){
            var n=e.next();t.print("out "),n.print(t),t.println(),t.print("in "),n.getSym().print(t),t.println();
          }
        },e.prototype.getResultAreaEdges=function(){
          if(null!==this._resultAreaEdgeList) {
            return this._resultAreaEdgeList;
          }this._resultAreaEdgeList=new It;for(var t=this.iterator();t.hasNext();){
            var e=t.next();(e.isInResult()||e.getSym().isInResult())&&this._resultAreaEdgeList.add(e);
          }return this._resultAreaEdgeList;
        },e.prototype.updateLabelling=function(t){
          for(var e=this.iterator();e.hasNext();){
            var n=e.next().getLabel();n.setAllLocationsIfNull(0,t.getLocation(0)),n.setAllLocationsIfNull(1,t.getLocation(1));
          }
        },e.prototype.linkAllDirectedEdges=function(){
          this.getEdges();for(var t=null,e=null,n=this._edgeList.size()-1;n>=0;n--){
            var i=this._edgeList.get(n),r=i.getSym();null===e&&(e=r),null!==t&&r.setNext(t),t=i;
          }e.setNext(t);
        },e.prototype.computeDepths=function(){
          if(1===arguments.length){
            var t=arguments[0],e=this.findIndex(t),n=t.getDepth(Ce.LEFT),i=t.getDepth(Ce.RIGHT),r=this.computeDepths(e+1,this._edgeList.size(),n);if(this.computeDepths(0,e,r)!==i) {
              throw new Le("depth mismatch at "+t.getCoordinate());
            }
          }else if(3===arguments.length){
            for(var o=arguments[0],s=arguments[1],a=arguments[2],u=o;u<s;u++){
              var c=this._edgeList.get(u);c.setEdgeDepths(Ce.RIGHT,a),a=c.getDepth(Ce.LEFT);
            }return a;
          }
        },e.prototype.mergeSymLabels=function(){
          for(var t=this.iterator();t.hasNext();){
            var e=t.next();e.getLabel().merge(e.getSym().getLabel());
          }
        },e.prototype.linkMinimalDirectedEdges=function(t){
          for(var e=null,n=null,i=this._SCANNING_FOR_INCOMING,r=this._resultAreaEdgeList.size()-1;r>=0;r--){
            var o=this._resultAreaEdgeList.get(r),s=o.getSym();switch(null===e&&o.getEdgeRing()===t&&(e=o),i){
            case this._SCANNING_FOR_INCOMING:if(s.getEdgeRing()!==t) {
              continue;
            }n=s,i=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(o.getEdgeRing()!==t) {
              continue;
            }n.setNextMin(o),i=this._SCANNING_FOR_INCOMING;
            }
          }i===this._LINKING_TO_OUTGOING&&(et.isTrue(null!==e,"found null for first outgoing dirEdge"),et.isTrue(e.getEdgeRing()===t,"unable to link last incoming dirEdge"),n.setNextMin(e));
        },e.prototype.getOutgoingDegree=function(){
          if(0===arguments.length){
            for(var t=0,e=this.iterator();e.hasNext();) {
              e.next().isInResult()&&t++;
            }return t;
          }if(1===arguments.length){
            for(var n=arguments[0],i=0,r=this.iterator();r.hasNext();) {
              r.next().getEdgeRing()===n&&i++;
            }return i;
          }
        },e.prototype.getLabel=function(){
          return this._label;
        },e.prototype.findCoveredLineEdges=function(){
          for(var t=L.NONE,e=this.iterator();e.hasNext();){
            var n=e.next(),i=n.getSym();if(!n.isLineEdge()){
              if(n.isInResult()){
                t=L.INTERIOR;break;
              }if(i.isInResult()){
                t=L.EXTERIOR;break;
              }
            }
          }if(t===L.NONE) {
            return null;
          }for(var r=t,o=this.iterator();o.hasNext();){
            var s=o.next(),a=s.getSym();s.isLineEdge()?s.getEdge().setCovered(r===L.INTERIOR):(s.isInResult()&&(r=L.EXTERIOR),a.isInResult()&&(r=L.INTERIOR));
          }
        },e.prototype.computeLabelling=function(e){
          t.prototype.computeLabelling.call(this,e),this._label=new Me(L.NONE);for(var n=this.iterator();n.hasNext();) {
            for(var i=n.next().getEdge().getLabel(),r=0;r<2;r++){
              var o=i.getLocation(r);o!==L.INTERIOR&&o!==L.BOUNDARY||this._label.setLocation(r,L.INTERIOR);
            }
          }
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Vn),Un=function(t){
        function e(){
          t.apply(this,arguments);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createNode=function(t){
          return new $e(t,new zn);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Ve),Yn=function t(){
        this._pts=null,this._orientation=null;var e=arguments[0];this._pts=e,this._orientation=t.orientation(e);
      };Yn.prototype.compareTo=function(t){
      var e=t;return Yn.compareOriented(this._pts,this._orientation,e._pts,e._orientation);
    },Yn.prototype.interfaces_=function(){
      return[ x ];
    },Yn.prototype.getClass=function(){
      return Yn;
    },Yn.orientation=function(t){
      return 1===St.increasingDirection(t);
    },Yn.compareOriented=function(t,e,n,i){
      for(var r=e?1:-1,o=i?1:-1,s=e?t.length:-1,a=i?n.length:-1,u=e?0:t.length-1,c=i?0:n.length-1;;){
        var l=t[u].compareTo(n[c]);if(0!==l) {
          return l;
        }var h=(u+=r)===s,p=(c+=o)===a;if(h&&!p) {
          return-1;
        }if(!h&&p) {
          return 1;
        }if(h&&p) {
          return 0;
        }
      }
    };var Xn=function(){
      this._edges=new It,this._ocaMap=new h;
    };Xn.prototype.print=function(t){
      t.print("MULTILINESTRING ( ");for(var e=0;e<this._edges.size();e++){
        var n=this._edges.get(e);e>0&&t.print(","),t.print("(");for(var i=n.getCoordinates(),r=0;r<i.length;r++) {
          r>0&&t.print(","),t.print(i[r].x+" "+i[r].y);
        }t.println(")");
      }t.print(")  ");
    },Xn.prototype.addAll=function(t){
      for(var e=t.iterator();e.hasNext();) {
        this.add(e.next());
      }
    },Xn.prototype.findEdgeIndex=function(t){
      for(var e=0;e<this._edges.size();e++) {
        if(this._edges.get(e).equals(t)) {
          return e;
        }
      }return-1;
    },Xn.prototype.iterator=function(){
      return this._edges.iterator();
    },Xn.prototype.getEdges=function(){
      return this._edges;
    },Xn.prototype.get=function(t){
      return this._edges.get(t);
    },Xn.prototype.findEqualEdge=function(t){
      var e=new Yn(t.getCoordinates());return this._ocaMap.get(e);
    },Xn.prototype.add=function(t){
      this._edges.add(t);var e=new Yn(t.getCoordinates());this._ocaMap.put(e,t);
    },Xn.prototype.interfaces_=function(){
      return[];
    },Xn.prototype.getClass=function(){
      return Xn;
    };var Wn=function(){};Wn.prototype.processIntersections=function(t,e,n,i){},Wn.prototype.isDone=function(){},Wn.prototype.interfaces_=function(){
      return[];
    },Wn.prototype.getClass=function(){
      return Wn;
    };var Hn=function(){
      this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._hasInterior=!1,this._properIntersectionPoint=null,this._li=null,this._isSelfIntersection=null,this.numIntersections=0,this.numInteriorIntersections=0,this.numProperIntersections=0,this.numTests=0;var t=arguments[0];this._li=t;
    };Hn.prototype.isTrivialIntersection=function(t,e,n,i){
      if(t===n&&1===this._li.getIntersectionNum()){
        if(Hn.isAdjacentSegments(e,i)) {
          return!0;
        }if(t.isClosed()){
          var r=t.size()-1;if(0===e&&i===r||0===i&&e===r) {
            return!0;
          }
        }
      }return!1;
    },Hn.prototype.getProperIntersectionPoint=function(){
      return this._properIntersectionPoint;
    },Hn.prototype.hasProperInteriorIntersection=function(){
      return this._hasProperInterior;
    },Hn.prototype.getLineIntersector=function(){
      return this._li;
    },Hn.prototype.hasProperIntersection=function(){
      return this._hasProper;
    },Hn.prototype.processIntersections=function(t,e,n,i){
      if(t===n&&e===i) {
        return null;
      }this.numTests++;var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&(this.numIntersections++,this._li.isInteriorIntersection()&&(this.numInteriorIntersections++,this._hasInterior=!0),this.isTrivialIntersection(t,e,n,i)||(this._hasIntersection=!0,t.addIntersections(this._li,e,0),n.addIntersections(this._li,i,1),this._li.isProper()&&(this.numProperIntersections++,this._hasProper=!0,this._hasProperInterior=!0)));
    },Hn.prototype.hasIntersection=function(){
      return this._hasIntersection;
    },Hn.prototype.isDone=function(){
      return!1;
    },Hn.prototype.hasInteriorIntersection=function(){
      return this._hasInterior;
    },Hn.prototype.interfaces_=function(){
      return[ Wn ];
    },Hn.prototype.getClass=function(){
      return Hn;
    },Hn.isAdjacentSegments=function(t,e){
      return 1===Math.abs(t-e);
    };var Kn=function(){
      this.coord=null,this.segmentIndex=null,this.dist=null;var t=arguments[0],e=arguments[1],n=arguments[2];this.coord=new N(t),this.segmentIndex=e,this.dist=n;
    };Kn.prototype.getSegmentIndex=function(){
      return this.segmentIndex;
    },Kn.prototype.getCoordinate=function(){
      return this.coord;
    },Kn.prototype.print=function(t){
      t.print(this.coord),t.print(" seg # = "+this.segmentIndex),t.println(" dist = "+this.dist);
    },Kn.prototype.compareTo=function(t){
      var e=t;return this.compare(e.segmentIndex,e.dist);
    },Kn.prototype.isEndPoint=function(t){
      return 0===this.segmentIndex&&0===this.dist||this.segmentIndex===t;
    },Kn.prototype.toString=function(){
      return this.coord+" seg # = "+this.segmentIndex+" dist = "+this.dist;
    },Kn.prototype.getDistance=function(){
      return this.dist;
    },Kn.prototype.compare=function(t,e){
      return this.segmentIndex<t?-1:this.segmentIndex>t?1:this.dist<e?-1:this.dist>e?1:0;
    },Kn.prototype.interfaces_=function(){
      return[ x ];
    },Kn.prototype.getClass=function(){
      return Kn;
    };var Jn=function(){
      this._nodeMap=new h,this.edge=null;var t=arguments[0];this.edge=t;
    };Jn.prototype.print=function(t){
      t.println("Intersections:");for(var e=this.iterator();e.hasNext();) {
        e.next().print(t);
      }
    },Jn.prototype.iterator=function(){
      return this._nodeMap.values().iterator();
    },Jn.prototype.addSplitEdges=function(t){
      this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){
        var i=e.next(),r=this.createSplitEdge(n,i);t.add(r),n=i;
      }
    },Jn.prototype.addEndpoints=function(){
      var t=this.edge.pts.length-1;this.add(this.edge.pts[0],0,0),this.add(this.edge.pts[t],t,0);
    },Jn.prototype.createSplitEdge=function(t,e){
      var n=e.segmentIndex-t.segmentIndex+2,i=this.edge.pts[e.segmentIndex],r=e.dist>0||!e.coord.equals2D(i);r||n--;var o=new Array(n).fill(null),s=0;o[s++]=new N(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++) {
        o[s++]=this.edge.pts[a];
      }return r&&(o[s]=e.coord),new ni(o,new Me(this.edge._label));
    },Jn.prototype.add=function(t,e,n){
      var i=new Kn(t,e,n),r=this._nodeMap.get(i);return null!==r?r:(this._nodeMap.put(i,i),i);
    },Jn.prototype.isIntersection=function(t){
      for(var e=this.iterator();e.hasNext();) {
        if(e.next().coord.equals(t)) {
          return!0;
        }
      }return!1;
    },Jn.prototype.interfaces_=function(){
      return[];
    },Jn.prototype.getClass=function(){
      return Jn;
    };var Qn=function(){};Qn.prototype.getChainStartIndices=function(t){
      var e=0,n=new It;n.add(new D(e));do{
        var i=this.findChainEnd(t,e);n.add(new D(i)),e=i;
      }while(e<t.length-1);return Qn.toIntArray(n);
    },Qn.prototype.findChainEnd=function(t,e){
      for(var n=Ge.quadrant(t[e],t[e+1]),i=e+1;i<t.length;){
        if(Ge.quadrant(t[i-1],t[i])!==n) {
          break;
        }i++;
      }return i-1;
    },Qn.prototype.interfaces_=function(){
      return[];
    },Qn.prototype.getClass=function(){
      return Qn;
    },Qn.toIntArray=function(t){
      for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++) {
        e[n]=t.get(n).intValue();
      }return e;
    };var Zn=function(){
      this.e=null,this.pts=null,this.startIndex=null,this.env1=new Y,this.env2=new Y;var t=arguments[0];this.e=t,this.pts=t.getCoordinates();var e=new Qn;this.startIndex=e.getChainStartIndices(this.pts);
    };Zn.prototype.getCoordinates=function(){
      return this.pts;
    },Zn.prototype.getMaxX=function(t){
      var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e>n?e:n;
    },Zn.prototype.getMinX=function(t){
      var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e<n?e:n;
    },Zn.prototype.computeIntersectsForChain=function(){
      if(4===arguments.length){
        var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];this.computeIntersectsForChain(this.startIndex[t],this.startIndex[t+1],e,e.startIndex[n],e.startIndex[n+1],i);
      }else if(6===arguments.length){
        var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=arguments[4],c=arguments[5],l=this.pts[r],h=this.pts[o],p=s.pts[a],f=s.pts[u];if(o-r==1&&u-a==1) {
          return c.addIntersections(this.e,r,s.e,a),null;
        }if(this.env1.init(l,h),this.env2.init(p,f),!this.env1.intersects(this.env2)) {
          return null;
        }var d=Math.trunc((r+o)/2),g=Math.trunc((a+u)/2);r<d&&(a<g&&this.computeIntersectsForChain(r,d,s,a,g,c),g<u&&this.computeIntersectsForChain(r,d,s,g,u,c)),d<o&&(a<g&&this.computeIntersectsForChain(d,o,s,a,g,c),g<u&&this.computeIntersectsForChain(d,o,s,g,u,c));
      }
    },Zn.prototype.getStartIndexes=function(){
      return this.startIndex;
    },Zn.prototype.computeIntersects=function(t,e){
      for(var n=0;n<this.startIndex.length-1;n++) {
        for(var i=0;i<t.startIndex.length-1;i++) {
          this.computeIntersectsForChain(n,t,i,e);
        }
      }
    },Zn.prototype.interfaces_=function(){
      return[];
    },Zn.prototype.getClass=function(){
      return Zn;
    };var ti=function t(){
        this._depth=Array(2).fill().map((function(){
          return Array(3);
        }));for(var e=0;e<2;e++) {
          for(var n=0;n<3;n++) {
            this._depth[e][n]=t.NULL_VALUE;
          }
        }
      },ei={ NULL_VALUE:{ configurable:!0 }};ti.prototype.getDepth=function(t,e){
      return this._depth[t][e];
    },ti.prototype.setDepth=function(t,e,n){
      this._depth[t][e]=n;
    },ti.prototype.isNull=function(){
      if(0===arguments.length){
        for(var t=0;t<2;t++) {
          for(var e=0;e<3;e++) {
            if(this._depth[t][e]!==ti.NULL_VALUE) {
return!1;
}
          }
        }return!0;
      }if(1===arguments.length){
        var n=arguments[0];return this._depth[n][1]===ti.NULL_VALUE;
      }if(2===arguments.length){
        var i=arguments[0],r=arguments[1];return this._depth[i][r]===ti.NULL_VALUE;
      }
    },ti.prototype.normalize=function(){
      for(var t=0;t<2;t++) {
        if(!this.isNull(t)){
          var e=this._depth[t][1];this._depth[t][2]<e&&(e=this._depth[t][2]),e<0&&(e=0);for(var n=1;n<3;n++){
            var i=0;this._depth[t][n]>e&&(i=1),this._depth[t][n]=i;
          }
        }
      }
    },ti.prototype.getDelta=function(t){
      return this._depth[t][Ce.RIGHT]-this._depth[t][Ce.LEFT];
    },ti.prototype.getLocation=function(t,e){
      return this._depth[t][e]<=0?L.EXTERIOR:L.INTERIOR;
    },ti.prototype.toString=function(){
      return"A: "+this._depth[0][1]+","+this._depth[0][2]+" B: "+this._depth[1][1]+","+this._depth[1][2];
    },ti.prototype.add=function(){
      if(1===arguments.length) {
        for(var t=arguments[0],e=0;e<2;e++) {
          for(var n=1;n<3;n++){
            var i=t.getLocation(e,n);i!==L.EXTERIOR&&i!==L.INTERIOR||(this.isNull(e,n)?this._depth[e][n]=ti.depthAtLocation(i):this._depth[e][n]+=ti.depthAtLocation(i));
          }
        }
      }else if(3===arguments.length){
        var r=arguments[0],o=arguments[1];arguments[2]===L.INTERIOR&&this._depth[r][o]++;
      }
    },ti.prototype.interfaces_=function(){
      return[];
    },ti.prototype.getClass=function(){
      return ti;
    },ti.depthAtLocation=function(t){
      return t===L.EXTERIOR?0:t===L.INTERIOR?1:ti.NULL_VALUE;
    },ei.NULL_VALUE.get=function(){
      return-1;
    },Object.defineProperties(ti,ei);var ni=function(t){
        function e(){
          if(t.call(this),this.pts=null,this._env=null,this.eiList=new Jn(this),this._name=null,this._mce=null,this._isIsolated=!0,this._depth=new ti,this._depthDelta=0,1===arguments.length){
            var n=arguments[0];e.call(this,n,null);
          }else if(2===arguments.length){
            var i=arguments[0],r=arguments[1];this.pts=i,this._label=r;
          }
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDepth=function(){
          return this._depth;
        },e.prototype.getCollapsedEdge=function(){
          var t=new Array(2).fill(null);return t[0]=this.pts[0],t[1]=this.pts[1],new e(t,Me.toLineLabel(this._label));
        },e.prototype.isIsolated=function(){
          return this._isIsolated;
        },e.prototype.getCoordinates=function(){
          return this.pts;
        },e.prototype.setIsolated=function(t){
          this._isIsolated=t;
        },e.prototype.setName=function(t){
          this._name=t;
        },e.prototype.equals=function(t){
          if(!(t instanceof e)) {
            return!1;
          }var n=t;if(this.pts.length!==n.pts.length) {
            return!1;
          }for(var i=!0,r=!0,o=this.pts.length,s=0;s<this.pts.length;s++) {
            if(this.pts[s].equals2D(n.pts[s])||(i=!1),this.pts[s].equals2D(n.pts[--o])||(r=!1),!i&&!r) {
              return!1;
            }
          }return!0;
        },e.prototype.getCoordinate=function(){
          if(0===arguments.length) {
            return this.pts.length>0?this.pts[0]:null;
          }if(1===arguments.length){
            var t=arguments[0];return this.pts[t];
          }
        },e.prototype.print=function(t){
          t.print("edge "+this._name+": "),t.print("LINESTRING (");for(var e=0;e<this.pts.length;e++) {
            e>0&&t.print(","),t.print(this.pts[e].x+" "+this.pts[e].y);
          }t.print(")  "+this._label+" "+this._depthDelta);
        },e.prototype.computeIM=function(t){
          e.updateIM(this._label,t);
        },e.prototype.isCollapsed=function(){
          return!!this._label.isArea()&&3===this.pts.length&&!!this.pts[0].equals(this.pts[2]);
        },e.prototype.isClosed=function(){
          return this.pts[0].equals(this.pts[this.pts.length-1]);
        },e.prototype.getMaximumSegmentIndex=function(){
          return this.pts.length-1;
        },e.prototype.getDepthDelta=function(){
          return this._depthDelta;
        },e.prototype.getNumPoints=function(){
          return this.pts.length;
        },e.prototype.printReverse=function(t){
          t.print("edge "+this._name+": ");for(var e=this.pts.length-1;e>=0;e--) {
            t.print(this.pts[e]+" ");
          }t.println("");
        },e.prototype.getMonotoneChainEdge=function(){
          return null===this._mce&&(this._mce=new Zn(this)),this._mce;
        },e.prototype.getEnvelope=function(){
          if(null===this._env){
            this._env=new Y;for(var t=0;t<this.pts.length;t++) {
              this._env.expandToInclude(this.pts[t]);
            }
          }return this._env;
        },e.prototype.addIntersection=function(t,e,n,i){
          var r=new N(t.getIntersection(i)),o=e,s=t.getEdgeDistance(n,i),a=o+1;if(a<this.pts.length){
            var u=this.pts[a];r.equals2D(u)&&(o=a,s=0);
          }this.eiList.add(r,o,s);
        },e.prototype.toString=function(){
          var t=new P;t.append("edge "+this._name+": "),t.append("LINESTRING (");for(var e=0;e<this.pts.length;e++) {
            e>0&&t.append(","),t.append(this.pts[e].x+" "+this.pts[e].y);
          }return t.append(")  "+this._label+" "+this._depthDelta),t.toString();
        },e.prototype.isPointwiseEqual=function(t){
          if(this.pts.length!==t.pts.length) {
            return!1;
          }for(var e=0;e<this.pts.length;e++) {
            if(!this.pts[e].equals2D(t.pts[e])) {
              return!1;
            }
          }return!0;
        },e.prototype.setDepthDelta=function(t){
          this._depthDelta=t;
        },e.prototype.getEdgeIntersectionList=function(){
          return this.eiList;
        },e.prototype.addIntersections=function(t,e,n){
          for(var i=0;i<t.getIntersectionNum();i++) {
            this.addIntersection(t,e,n,i);
          }
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e.updateIM=function(){
          if(2!==arguments.length) {
            return t.prototype.updateIM.apply(this,arguments);
          }var e=arguments[0],n=arguments[1];n.setAtLeastIfValid(e.getLocation(0,Ce.ON),e.getLocation(1,Ce.ON),1),e.isArea()&&(n.setAtLeastIfValid(e.getLocation(0,Ce.LEFT),e.getLocation(1,Ce.LEFT),2),n.setAtLeastIfValid(e.getLocation(0,Ce.RIGHT),e.getLocation(1,Ce.RIGHT),2));
        },e;
      }(Fe),ii=function(t){
        this._workingPrecisionModel=null,this._workingNoder=null,this._geomFact=null,this._graph=null,this._edgeList=new Xn,this._bufParams=t||null;
      };ii.prototype.setWorkingPrecisionModel=function(t){
      this._workingPrecisionModel=t;
    },ii.prototype.insertUniqueEdge=function(t){
      var e=this._edgeList.findEqualEdge(t);if(null!==e){
        var n=e.getLabel(),i=t.getLabel();e.isPointwiseEqual(t)||(i=new Me(t.getLabel())).flip(),n.merge(i);var r=ii.depthDelta(i),o=e.getDepthDelta()+r;e.setDepthDelta(o);
      }else {
        this._edgeList.add(t),t.setDepthDelta(ii.depthDelta(t.getLabel()));
      }
    },ii.prototype.buildSubgraphs=function(t,e){
      for(var n=new It,i=t.iterator();i.hasNext();){
        var r=i.next(),o=r.getRightmostCoordinate(),s=new An(n).getDepth(o);r.computeDepth(s),r.findResultEdges(),n.add(r),e.add(r.getDirectedEdges(),r.getNodes());
      }
    },ii.prototype.createSubgraphs=function(t){
      for(var e=new It,n=t.getNodes().iterator();n.hasNext();){
        var i=n.next();if(!i.isVisited()){
          var r=new Te;r.create(i),e.add(r);
        }
      }return Ze.sort(e,Ze.reverseOrder()),e;
    },ii.prototype.createEmptyResultGeometry=function(){
      return this._geomFact.createPolygon();
    },ii.prototype.getNoder=function(t){
      if(null!==this._workingNoder) {
        return this._workingNoder;
      }var e=new En,n=new rt;return n.setPrecisionModel(t),e.setSegmentIntersector(new Hn(n)),e;
    },ii.prototype.buffer=function(t,e){
      var n=this._workingPrecisionModel;null===n&&(n=t.getPrecisionModel()),this._geomFact=t.getFactory();var i=new Dn(n,this._bufParams),r=new Gn(t,e,i).getCurves();if(r.size()<=0) {
        return this.createEmptyResultGeometry();
      }this.computeNodedEdges(r,n),this._graph=new ze(new Un),this._graph.addEdges(this._edgeList.getEdges());var o=this.createSubgraphs(this._graph),s=new Ue(this._geomFact);this.buildSubgraphs(o,s);var a=s.getPolygons();return a.size()<=0?this.createEmptyResultGeometry():this._geomFact.buildGeometry(a);
    },ii.prototype.computeNodedEdges=function(t,e){
      var n=this.getNoder(e);n.computeNodes(t);for(var i=n.getNodedSubstrings().iterator();i.hasNext();){
        var r=i.next(),o=r.getCoordinates();if(2!==o.length||!o[0].equals2D(o[1])){
          var s=r.getData(),a=new ni(r.getCoordinates(),new Me(s));this.insertUniqueEdge(a);
        }
      }
    },ii.prototype.setNoder=function(t){
      this._workingNoder=t;
    },ii.prototype.interfaces_=function(){
      return[];
    },ii.prototype.getClass=function(){
      return ii;
    },ii.depthDelta=function(t){
      var e=t.getLocation(0,Ce.LEFT),n=t.getLocation(0,Ce.RIGHT);return e===L.INTERIOR&&n===L.EXTERIOR?1:e===L.EXTERIOR&&n===L.INTERIOR?-1:0;
    },ii.convertSegStrings=function(t){
      for(var e=new _e,n=new It;t.hasNext();){
        var i=t.next(),r=e.createLineString(i.getCoordinates());n.add(r);
      }return e.buildGeometry(n);
    };var ri=function(){
      if(this._noder=null,this._scaleFactor=null,this._offsetX=null,this._offsetY=null,this._isScaled=!1,2===arguments.length){
        var t=arguments[0],e=arguments[1];this._noder=t,this._scaleFactor=e,this._offsetX=0,this._offsetY=0,this._isScaled=!this.isIntegerPrecision();
      }else if(4===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2],o=arguments[3];this._noder=n,this._scaleFactor=i,this._offsetX=r,this._offsetY=o,this._isScaled=!this.isIntegerPrecision();
      }
    };ri.prototype.rescale=function(){
      if(T(arguments[0],bt)) {
        for(var t=arguments[0].iterator();t.hasNext();){
          var e=t.next();this.rescale(e.getCoordinates());
        }
      }else if(arguments[0]instanceof Array){
        for(var n=arguments[0],i=0;i<n.length;i++) {
          n[i].x=n[i].x/this._scaleFactor+this._offsetX,n[i].y=n[i].y/this._scaleFactor+this._offsetY;
        }2===n.length&&n[0].equals2D(n[1])&&z.out.println(n);
      }
    },ri.prototype.scale=function(){
      if(T(arguments[0],bt)){
        for(var t=arguments[0],e=new It,n=t.iterator();n.hasNext();){
          var i=n.next();e.add(new dn(this.scale(i.getCoordinates()),i.getData()));
        }return e;
      }if(arguments[0]instanceof Array){
        for(var r=arguments[0],o=new Array(r.length).fill(null),s=0;s<r.length;s++) {
          o[s]=new N(Math.round((r[s].x-this._offsetX)*this._scaleFactor),Math.round((r[s].y-this._offsetY)*this._scaleFactor),r[s].z);
        }return St.removeRepeatedPoints(o);
      }
    },ri.prototype.isIntegerPrecision=function(){
      return 1===this._scaleFactor;
    },ri.prototype.getNodedSubstrings=function(){
      var t=this._noder.getNodedSubstrings();return this._isScaled&&this.rescale(t),t;
    },ri.prototype.computeNodes=function(t){
      var e=t;this._isScaled&&(e=this.scale(t)),this._noder.computeNodes(e);
    },ri.prototype.interfaces_=function(){
      return[ bn ];
    },ri.prototype.getClass=function(){
      return ri;
    };var oi=function(){
        this._li=new rt,this._segStrings=null;var t=arguments[0];this._segStrings=t;
      },si={ fact:{ configurable:!0 }};oi.prototype.checkEndPtVertexIntersections=function(){
      if(0===arguments.length) {
        for(var t=this._segStrings.iterator();t.hasNext();){
          var e=t.next().getCoordinates();this.checkEndPtVertexIntersections(e[0],this._segStrings),this.checkEndPtVertexIntersections(e[e.length-1],this._segStrings);
        }
      }else if(2===arguments.length) {
        for(var n=arguments[0],i=arguments[1].iterator();i.hasNext();) {
          for(var r=i.next().getCoordinates(),o=1;o<r.length-1;o++) {
if(r[o].equals(n))
            throw new Z("found endpt/interior pt intersection at index "+o+" :pt "+n);
}
        }
      }
    },oi.prototype.checkInteriorIntersections=function(){
      if(0===arguments.length) {
        for(var t=this._segStrings.iterator();t.hasNext();) {
          for(var e=t.next(),n=this._segStrings.iterator();n.hasNext();){
            var i=n.next();this.checkInteriorIntersections(e,i);
          }
        }
      }else if(2===arguments.length) {
        for(var r=arguments[0],o=arguments[1],s=r.getCoordinates(),a=o.getCoordinates(),u=0;u<s.length-1;u++) {
          for(var c=0;c<a.length-1;c++) {
this.checkInteriorIntersections(r,u,o,c);
}
        }
      }else if(4===arguments.length){
        var l=arguments[0],h=arguments[1],p=arguments[2],f=arguments[3];if(l===p&&h===f) {
          return null;
        }var d=l.getCoordinates()[h],g=l.getCoordinates()[h+1],y=p.getCoordinates()[f],_=p.getCoordinates()[f+1];if(this._li.computeIntersection(d,g,y,_),this._li.hasIntersection()&&(this._li.isProper()||this.hasInteriorIntersection(this._li,d,g)||this.hasInteriorIntersection(this._li,y,_))) {
          throw new Z("found non-noded intersection at "+d+"-"+g+" and "+y+"-"+_);
        }
      }
    },oi.prototype.checkValid=function(){
      this.checkEndPtVertexIntersections(),this.checkInteriorIntersections(),this.checkCollapses();
    },oi.prototype.checkCollapses=function(){
      if(0===arguments.length) {
        for(var t=this._segStrings.iterator();t.hasNext();){
          var e=t.next();this.checkCollapses(e);
        }
      }else if(1===arguments.length) {
        for(var n=arguments[0].getCoordinates(),i=0;i<n.length-2;i++) {
          this.checkCollapse(n[i],n[i+1],n[i+2]);
        }
      }
    },oi.prototype.hasInteriorIntersection=function(t,e,n){
      for(var i=0;i<t.getIntersectionNum();i++){
        var r=t.getIntersection(i);if(!r.equals(e)&&!r.equals(n)) {
          return!0;
        }
      }return!1;
    },oi.prototype.checkCollapse=function(t,e,n){
      if(t.equals(n)) {
        throw new Z("found non-noded collapse at "+oi.fact.createLineString([ t,e,n ]));
      }
    },oi.prototype.interfaces_=function(){
      return[];
    },oi.prototype.getClass=function(){
      return oi;
    },si.fact.get=function(){
      return new _e;
    },Object.defineProperties(oi,si);var ai=function(){
        this._li=null,this._pt=null,this._originalPt=null,this._ptScaled=null,this._p0Scaled=null,this._p1Scaled=null,this._scaleFactor=null,this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,this._corner=new Array(4).fill(null),this._safeEnv=null;var t=arguments[0],e=arguments[1],n=arguments[2];if(this._originalPt=t,this._pt=t,this._scaleFactor=e,this._li=n,e<=0) {
          throw new v("Scale factor must be non-zero");
        }1!==e&&(this._pt=new N(this.scale(t.x),this.scale(t.y)),this._p0Scaled=new N,this._p1Scaled=new N),this.initCorners(this._pt);
      },ui={ SAFE_ENV_EXPANSION_FACTOR:{ configurable:!0 }};ai.prototype.intersectsScaled=function(t,e){
      var n=Math.min(t.x,e.x),i=Math.max(t.x,e.x),r=Math.min(t.y,e.y),o=Math.max(t.y,e.y),s=this._maxx<n||this._minx>i||this._maxy<r||this._miny>o;if(s) {
        return!1;
      }var a=this.intersectsToleranceSquare(t,e);return et.isTrue(!(s&&a),"Found bad envelope test"),a;
    },ai.prototype.initCorners=function(t){
      this._minx=t.x-.5,this._maxx=t.x+.5,this._miny=t.y-.5,this._maxy=t.y+.5,this._corner[0]=new N(this._maxx,this._maxy),this._corner[1]=new N(this._minx,this._maxy),this._corner[2]=new N(this._minx,this._miny),this._corner[3]=new N(this._maxx,this._miny);
    },ai.prototype.intersects=function(t,e){
      return 1===this._scaleFactor?this.intersectsScaled(t,e):(this.copyScaled(t,this._p0Scaled),this.copyScaled(e,this._p1Scaled),this.intersectsScaled(this._p0Scaled,this._p1Scaled));
    },ai.prototype.scale=function(t){
      return Math.round(t*this._scaleFactor);
    },ai.prototype.getCoordinate=function(){
      return this._originalPt;
    },ai.prototype.copyScaled=function(t,e){
      e.x=this.scale(t.x),e.y=this.scale(t.y);
    },ai.prototype.getSafeEnvelope=function(){
      if(null===this._safeEnv){
        var t=ai.SAFE_ENV_EXPANSION_FACTOR/this._scaleFactor;this._safeEnv=new Y(this._originalPt.x-t,this._originalPt.x+t,this._originalPt.y-t,this._originalPt.y+t);
      }return this._safeEnv;
    },ai.prototype.intersectsPixelClosure=function(t,e){
      return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.hasIntersection())));
    },ai.prototype.intersectsToleranceSquare=function(t,e){
      var n=!1,i=!1;return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.isProper()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.isProper()||(this._li.hasIntersection()&&(n=!0),this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.isProper()||(this._li.hasIntersection()&&(i=!0),this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.isProper()||!(!n||!i)||!!t.equals(this._pt)||!!e.equals(this._pt))));
    },ai.prototype.addSnappedNode=function(t,e){
      var n=t.getCoordinate(e),i=t.getCoordinate(e+1);return!!this.intersects(n,i)&&(t.addIntersection(this.getCoordinate(),e),!0);
    },ai.prototype.interfaces_=function(){
      return[];
    },ai.prototype.getClass=function(){
      return ai;
    },ui.SAFE_ENV_EXPANSION_FACTOR.get=function(){
      return.75;
    },Object.defineProperties(ai,ui);var ci=function(){
      this.tempEnv1=new Y,this.selectedSegment=new gn;
    };ci.prototype.select=function(){
      if(1===arguments.length) {

      }else if(2===arguments.length){
        var t=arguments[0],e=arguments[1];t.getLineSegment(e,this.selectedSegment),this.select(this.selectedSegment);
      }
    },ci.prototype.interfaces_=function(){
      return[];
    },ci.prototype.getClass=function(){
      return ci;
    };var li=function(){
        this._index=null;var t=arguments[0];this._index=t;
      },hi={ HotPixelSnapAction:{ configurable:!0 }};li.prototype.snap=function(){
      if(1===arguments.length){
        var t=arguments[0];return this.snap(t,null,-1);
      }if(3===arguments.length){
        var e=arguments[0],n=arguments[1],i=arguments[2],r=e.getSafeEnvelope(),o=new pi(e,n,i);return this._index.query(r,{ interfaces_:function(){
          return[ He ];
        },visitItem:function(t){
          t.select(r,o);
        } }),o.isNodeAdded();
      }
    },li.prototype.interfaces_=function(){
      return[];
    },li.prototype.getClass=function(){
      return li;
    },hi.HotPixelSnapAction.get=function(){
      return pi;
    },Object.defineProperties(li,hi);var pi=function(t){
        function e(){
          t.call(this),this._hotPixel=null,this._parentEdge=null,this._hotPixelVertexIndex=null,this._isNodeAdded=!1;var e=arguments[0],n=arguments[1],i=arguments[2];this._hotPixel=e,this._parentEdge=n,this._hotPixelVertexIndex=i;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isNodeAdded=function(){
          return this._isNodeAdded;
        },e.prototype.select=function(){
          if(2!==arguments.length) {
            return t.prototype.select.apply(this,arguments);
          }var e=arguments[0],n=arguments[1],i=e.getContext();if(null!==this._parentEdge&&i===this._parentEdge&&n===this._hotPixelVertexIndex) {
            return null;
          }this._isNodeAdded=this._hotPixel.addSnappedNode(i,n);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(ci),fi=function(){
        this._li=null,this._interiorIntersections=null;var t=arguments[0];this._li=t,this._interiorIntersections=new It;
      };fi.prototype.processIntersections=function(t,e,n,i){
      if(t===n&&e===i) {
        return null;
      }var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];if(this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()){
        for(var u=0;u<this._li.getIntersectionNum();u++) {
          this._interiorIntersections.add(this._li.getIntersection(u));
        }t.addIntersections(this._li,e,0),n.addIntersections(this._li,i,1);
      }
    },fi.prototype.isDone=function(){
      return!1;
    },fi.prototype.getInteriorIntersections=function(){
      return this._interiorIntersections;
    },fi.prototype.interfaces_=function(){
      return[ Wn ];
    },fi.prototype.getClass=function(){
      return fi;
    };var di=function(){
      this._pm=null,this._li=null,this._scaleFactor=null,this._noder=null,this._pointSnapper=null,this._nodedSegStrings=null;var t=arguments[0];this._pm=t,this._li=new rt,this._li.setPrecisionModel(t),this._scaleFactor=t.getScale();
    };di.prototype.checkCorrectness=function(t){
      var e=dn.getNodedSubstrings(t),n=new oi(e);try{
        n.checkValid();
      }catch(t){
        if(!(t instanceof q)) {
          throw t;
        }t.printStackTrace();
      }
    },di.prototype.getNodedSubstrings=function(){
      return dn.getNodedSubstrings(this._nodedSegStrings);
    },di.prototype.snapRound=function(t,e){
      var n=this.findInteriorIntersections(t,e);this.computeIntersectionSnaps(n),this.computeVertexSnaps(t);
    },di.prototype.findInteriorIntersections=function(t,e){
      var n=new fi(e);return this._noder.setSegmentIntersector(n),this._noder.computeNodes(t),n.getInteriorIntersections();
    },di.prototype.computeVertexSnaps=function(){
      if(T(arguments[0],bt)) {
        for(var t=arguments[0].iterator();t.hasNext();){
          var e=t.next();this.computeVertexSnaps(e);
        }
      }else if(arguments[0]instanceof dn) {
        for(var n=arguments[0],i=n.getCoordinates(),r=0;r<i.length;r++){
          var o=new ai(i[r],this._scaleFactor,this._li);this._pointSnapper.snap(o,n,r)&&n.addIntersection(i[r],r);
        }
      }
    },di.prototype.computeNodes=function(t){
      this._nodedSegStrings=t,this._noder=new En,this._pointSnapper=new li(this._noder.getIndex()),this.snapRound(t,this._li);
    },di.prototype.computeIntersectionSnaps=function(t){
      for(var e=t.iterator();e.hasNext();){
        var n=e.next(),i=new ai(n,this._scaleFactor,this._li);this._pointSnapper.snap(i);
      }
    },di.prototype.interfaces_=function(){
      return[ bn ];
    },di.prototype.getClass=function(){
      return di;
    };var gi=function(){
        if(this._argGeom=null,this._distance=null,this._bufParams=new Nn,this._resultGeometry=null,this._saveException=null,1===arguments.length){
          var t=arguments[0];this._argGeom=t;
        }else if(2===arguments.length){
          var e=arguments[0],n=arguments[1];this._argGeom=e,this._bufParams=n;
        }
      },yi={ CAP_ROUND:{ configurable:!0 },CAP_BUTT:{ configurable:!0 },CAP_FLAT:{ configurable:!0 },CAP_SQUARE:{ configurable:!0 },MAX_PRECISION_DIGITS:{ configurable:!0 }};gi.prototype.bufferFixedPrecision=function(t){
      var e=new ri(new di(new fe(1)),t.getScale()),n=new ii(this._bufParams);n.setWorkingPrecisionModel(t),n.setNoder(e),this._resultGeometry=n.buffer(this._argGeom,this._distance);
    },gi.prototype.bufferReducedPrecision=function(){
      var t=this;if(0===arguments.length){
        for(var e=gi.MAX_PRECISION_DIGITS;e>=0;e--){
          try{
            t.bufferReducedPrecision(e);
          }catch(e){
            if(!(e instanceof Le)) {
              throw e;
            }t._saveException=e;
          }if(null!==t._resultGeometry) {
            return null;
          }
        }throw this._saveException;
      }if(1===arguments.length){
        var n=arguments[0],i=gi.precisionScaleFactor(this._argGeom,this._distance,n),r=new fe(i);this.bufferFixedPrecision(r);
      }
    },gi.prototype.computeGeometry=function(){
      if(this.bufferOriginalPrecision(),null!==this._resultGeometry) {
        return null;
      }var t=this._argGeom.getFactory().getPrecisionModel();t.getType()===fe.FIXED?this.bufferFixedPrecision(t):this.bufferReducedPrecision();
    },gi.prototype.setQuadrantSegments=function(t){
      this._bufParams.setQuadrantSegments(t);
    },gi.prototype.bufferOriginalPrecision=function(){
      try{
        var t=new ii(this._bufParams);this._resultGeometry=t.buffer(this._argGeom,this._distance);
      }catch(t){
        if(!(t instanceof Z)) {
          throw t;
        }this._saveException=t;
      }
    },gi.prototype.getResultGeometry=function(t){
      return this._distance=t,this.computeGeometry(),this._resultGeometry;
    },gi.prototype.setEndCapStyle=function(t){
      this._bufParams.setEndCapStyle(t);
    },gi.prototype.interfaces_=function(){
      return[];
    },gi.prototype.getClass=function(){
      return gi;
    },gi.bufferOp=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1];return new gi(t).getResultGeometry(e);
      }if(3===arguments.length){
        if(Number.isInteger(arguments[2])&&arguments[0]instanceof lt&&"number"==typeof arguments[1]){
          var n=arguments[0],i=arguments[1],r=arguments[2],o=new gi(n);return o.setQuadrantSegments(r),o.getResultGeometry(i);
        }if(arguments[2]instanceof Nn&&arguments[0]instanceof lt&&"number"==typeof arguments[1]){
          var s=arguments[0],a=arguments[1],u=arguments[2];return new gi(s,u).getResultGeometry(a);
        }
      }else if(4===arguments.length){
        var c=arguments[0],l=arguments[1],h=arguments[2],p=arguments[3],f=new gi(c);return f.setQuadrantSegments(h),f.setEndCapStyle(p),f.getResultGeometry(l);
      }
    },gi.precisionScaleFactor=function(t,e,n){
      var i=t.getEnvelopeInternal(),r=R.max(Math.abs(i.getMaxX()),Math.abs(i.getMaxY()),Math.abs(i.getMinX()),Math.abs(i.getMinY()))+2*(e>0?e:0),o=n-Math.trunc(Math.log(r)/Math.log(10)+1);return Math.pow(10,o);
    },yi.CAP_ROUND.get=function(){
      return Nn.CAP_ROUND;
    },yi.CAP_BUTT.get=function(){
      return Nn.CAP_FLAT;
    },yi.CAP_FLAT.get=function(){
      return Nn.CAP_FLAT;
    },yi.CAP_SQUARE.get=function(){
      return Nn.CAP_SQUARE;
    },yi.MAX_PRECISION_DIGITS.get=function(){
      return 12;
    },Object.defineProperties(gi,yi);var _i=function(){
      this._pt=[ new N,new N ],this._distance=m.NaN,this._isNull=!0;
    };_i.prototype.getCoordinates=function(){
      return this._pt;
    },_i.prototype.getCoordinate=function(t){
      return this._pt[t];
    },_i.prototype.setMinimum=function(){
      if(1===arguments.length){
        var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1]);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];if(this._isNull) {
          return this.initialize(e,n),null;
        }var i=e.distance(n);i<this._distance&&this.initialize(e,n,i);
      }
    },_i.prototype.initialize=function(){
      if(0===arguments.length) {
        this._isNull=!0;
      }else if(2===arguments.length){
        var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1;
      }else if(3===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(i),this._distance=r,this._isNull=!1;
      }
    },_i.prototype.getDistance=function(){
      return this._distance;
    },_i.prototype.setMaximum=function(){
      if(1===arguments.length){
        var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1]);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];if(this._isNull) {
          return this.initialize(e,n),null;
        }var i=e.distance(n);i>this._distance&&this.initialize(e,n,i);
      }
    },_i.prototype.interfaces_=function(){
      return[];
    },_i.prototype.getClass=function(){
      return _i;
    };var vi=function(){};vi.prototype.interfaces_=function(){
      return[];
    },vi.prototype.getClass=function(){
      return vi;
    },vi.computeDistance=function(){
      if(arguments[2]instanceof _i&&arguments[0]instanceof Ht&&arguments[1]instanceof N) {
        for(var t=arguments[0],e=arguments[1],n=arguments[2],i=t.getCoordinates(),r=new gn,o=0;o<i.length-1;o++){
          r.setCoordinates(i[o],i[o+1]);var s=r.closestPoint(e);n.setMinimum(s,e);
        }
      }else if(arguments[2]instanceof _i&&arguments[0]instanceof Zt&&arguments[1]instanceof N){
        var a=arguments[0],u=arguments[1],c=arguments[2];vi.computeDistance(a.getExteriorRing(),u,c);for(var l=0;l<a.getNumInteriorRing();l++) {
          vi.computeDistance(a.getInteriorRingN(l),u,c);
        }
      }else if(arguments[2]instanceof _i&&arguments[0]instanceof lt&&arguments[1]instanceof N){
        var h=arguments[0],p=arguments[1],f=arguments[2];if(h instanceof Ht) {
          vi.computeDistance(h,p,f);
        }else if(h instanceof Zt) {
          vi.computeDistance(h,p,f);
        }else if(h instanceof qt) {
          for(var d=h,g=0;g<d.getNumGeometries();g++){
            var y=d.getGeometryN(g);vi.computeDistance(y,p,f);
          }
        }else {
          f.setMinimum(h.getCoordinate(),p);
        }
      }else if(arguments[2]instanceof _i&&arguments[0]instanceof gn&&arguments[1]instanceof N){
        var _=arguments[0],v=arguments[1],m=arguments[2],b=_.closestPoint(v);m.setMinimum(b,v);
      }
    };var mi=function(t){
        this._maxPtDist=new _i,this._inputGeom=t||null;
      },bi={ MaxPointDistanceFilter:{ configurable:!0 },MaxMidpointDistanceFilter:{ configurable:!0 }};mi.prototype.computeMaxMidpointDistance=function(t){
      var e=new Ei(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance());
    },mi.prototype.computeMaxVertexDistance=function(t){
      var e=new xi(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance());
    },mi.prototype.findDistance=function(t){
      return this.computeMaxVertexDistance(t),this.computeMaxMidpointDistance(t),this._maxPtDist.getDistance();
    },mi.prototype.getDistancePoints=function(){
      return this._maxPtDist;
    },mi.prototype.interfaces_=function(){
      return[];
    },mi.prototype.getClass=function(){
      return mi;
    },bi.MaxPointDistanceFilter.get=function(){
      return xi;
    },bi.MaxMidpointDistanceFilter.get=function(){
      return Ei;
    },Object.defineProperties(mi,bi);var xi=function(t){
      this._maxPtDist=new _i,this._minPtDist=new _i,this._geom=t||null;
    };xi.prototype.filter=function(t){
      this._minPtDist.initialize(),vi.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist);
    },xi.prototype.getMaxPointDistance=function(){
      return this._maxPtDist;
    },xi.prototype.interfaces_=function(){
      return[ ft ];
    },xi.prototype.getClass=function(){
      return xi;
    };var Ei=function(t){
      this._maxPtDist=new _i,this._minPtDist=new _i,this._geom=t||null;
    };Ei.prototype.filter=function(t,e){
      if(0===e) {
        return null;
      }var n=t.getCoordinate(e-1),i=t.getCoordinate(e),r=new N((n.x+i.x)/2,(n.y+i.y)/2);this._minPtDist.initialize(),vi.computeDistance(this._geom,r,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist);
    },Ei.prototype.isDone=function(){
      return!1;
    },Ei.prototype.isGeometryChanged=function(){
      return!1;
    },Ei.prototype.getMaxPointDistance=function(){
      return this._maxPtDist;
    },Ei.prototype.interfaces_=function(){
      return[ Bt ];
    },Ei.prototype.getClass=function(){
      return Ei;
    };var Ii=function(t){
      this._comps=t||null;
    };Ii.prototype.filter=function(t){
      t instanceof Zt&&this._comps.add(t);
    },Ii.prototype.interfaces_=function(){
      return[ jt ];
    },Ii.prototype.getClass=function(){
      return Ii;
    },Ii.getPolygons=function(){
      if(1===arguments.length){
        var t=arguments[0];return Ii.getPolygons(t,new It);
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return e instanceof Zt?n.add(e):e instanceof qt&&e.apply(new Ii(n)),n;
      }
    };var Ni=function(){
      if(this._lines=null,this._isForcedToLineString=!1,1===arguments.length){
        var t=arguments[0];this._lines=t;
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];this._lines=e,this._isForcedToLineString=n;
      }
    };Ni.prototype.filter=function(t){
      if(this._isForcedToLineString&&t instanceof ee){
        var e=t.getFactory().createLineString(t.getCoordinateSequence());return this._lines.add(e),null;
      }t instanceof Ht&&this._lines.add(t);
    },Ni.prototype.setForceToLineString=function(t){
      this._isForcedToLineString=t;
    },Ni.prototype.interfaces_=function(){
      return[ ct ];
    },Ni.prototype.getClass=function(){
      return Ni;
    },Ni.getGeometry=function(){
      if(1===arguments.length){
        var t=arguments[0];return t.getFactory().buildGeometry(Ni.getLines(t));
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return e.getFactory().buildGeometry(Ni.getLines(e,n));
      }
    },Ni.getLines=function(){
      if(1===arguments.length){
        var t=arguments[0];return Ni.getLines(t,!1);
      }if(2===arguments.length){
        if(T(arguments[0],bt)&&T(arguments[1],bt)){
          for(var e=arguments[0],n=arguments[1],i=e.iterator();i.hasNext();){
            var r=i.next();Ni.getLines(r,n);
          }return n;
        }if(arguments[0]instanceof lt&&"boolean"==typeof arguments[1]){
          var o=arguments[0],s=arguments[1],a=new It;return o.apply(new Ni(a,s)),a;
        }if(arguments[0]instanceof lt&&T(arguments[1],bt)){
          var u=arguments[0],c=arguments[1];return u instanceof Ht?c.add(u):u.apply(new Ni(c)),c;
        }
      }else if(3===arguments.length){
        if("boolean"==typeof arguments[2]&&T(arguments[0],bt)&&T(arguments[1],bt)){
          for(var l=arguments[0],h=arguments[1],p=arguments[2],f=l.iterator();f.hasNext();){
            var d=f.next();Ni.getLines(d,h,p);
          }return h;
        }if("boolean"==typeof arguments[2]&&arguments[0]instanceof lt&&T(arguments[1],bt)){
          var g=arguments[0],y=arguments[1],_=arguments[2];return g.apply(new Ni(y,_)),y;
        }
      }
    };var Ci=function(){
      if(this._boundaryRule=dt.OGC_SFS_BOUNDARY_RULE,this._isIn=null,this._numBoundaries=null,0===arguments.length) {

      }else if(1===arguments.length){
        var t=arguments[0];if(null===t) {
          throw new v("Rule must be non-null");
        }this._boundaryRule=t;
      }
    };Ci.prototype.locateInternal=function(){
      if(arguments[0]instanceof N&&arguments[1]instanceof Zt){
        var t=arguments[0],e=arguments[1];if(e.isEmpty()) {
          return L.EXTERIOR;
        }var n=e.getExteriorRing(),i=this.locateInPolygonRing(t,n);if(i===L.EXTERIOR) {
          return L.EXTERIOR;
        }if(i===L.BOUNDARY) {
          return L.BOUNDARY;
        }for(var r=0;r<e.getNumInteriorRing();r++){
          var o=e.getInteriorRingN(r),s=this.locateInPolygonRing(t,o);if(s===L.INTERIOR) {
            return L.EXTERIOR;
          }if(s===L.BOUNDARY) {
            return L.BOUNDARY;
          }
        }return L.INTERIOR;
      }if(arguments[0]instanceof N&&arguments[1]instanceof Ht){
        var a=arguments[0],u=arguments[1];if(!u.getEnvelopeInternal().intersects(a)) {
          return L.EXTERIOR;
        }var c=u.getCoordinates();return u.isClosed()||!a.equals(c[0])&&!a.equals(c[c.length-1])?at.isOnLine(a,c)?L.INTERIOR:L.EXTERIOR:L.BOUNDARY;
      }if(arguments[0]instanceof N&&arguments[1]instanceof Jt){
        var l=arguments[0];return arguments[1].getCoordinate().equals2D(l)?L.INTERIOR:L.EXTERIOR;
      }
    },Ci.prototype.locateInPolygonRing=function(t,e){
      return e.getEnvelopeInternal().intersects(t)?at.locatePointInRing(t,e.getCoordinates()):L.EXTERIOR;
    },Ci.prototype.intersects=function(t,e){
      return this.locate(t,e)!==L.EXTERIOR;
    },Ci.prototype.updateLocationInfo=function(t){
      t===L.INTERIOR&&(this._isIn=!0),t===L.BOUNDARY&&this._numBoundaries++;
    },Ci.prototype.computeLocation=function(t,e){
      if(e instanceof Jt&&this.updateLocationInfo(this.locateInternal(t,e)),e instanceof Ht) {
        this.updateLocationInfo(this.locateInternal(t,e));
      }else if(e instanceof Zt) {
        this.updateLocationInfo(this.locateInternal(t,e));
      }else if(e instanceof Vt) {
        for(var n=e,i=0;i<n.getNumGeometries();i++){
          var r=n.getGeometryN(i);this.updateLocationInfo(this.locateInternal(t,r));
        }
      }else if(e instanceof ne) {
        for(var o=e,s=0;s<o.getNumGeometries();s++){
          var a=o.getGeometryN(s);this.updateLocationInfo(this.locateInternal(t,a));
        }
      }else if(e instanceof qt) {
        for(var u=new Bn(e);u.hasNext();){
          var c=u.next();c!==e&&this.computeLocation(t,c);
        }
      }
    },Ci.prototype.locate=function(t,e){
      return e.isEmpty()?L.EXTERIOR:e instanceof Ht||e instanceof Zt?this.locateInternal(t,e):(this._isIn=!1,this._numBoundaries=0,this.computeLocation(t,e),this._boundaryRule.isInBoundary(this._numBoundaries)?L.BOUNDARY:this._numBoundaries>0||this._isIn?L.INTERIOR:L.EXTERIOR);
    },Ci.prototype.interfaces_=function(){
      return[];
    },Ci.prototype.getClass=function(){
      return Ci;
    };var Si=function t(){
        if(this._component=null,this._segIndex=null,this._pt=null,2===arguments.length){
          var e=arguments[0],n=arguments[1];t.call(this,e,t.INSIDE_AREA,n);
        }else if(3===arguments.length){
          var i=arguments[0],r=arguments[1],o=arguments[2];this._component=i,this._segIndex=r,this._pt=o;
        }
      },wi={ INSIDE_AREA:{ configurable:!0 }};Si.prototype.isInsideArea=function(){
      return this._segIndex===Si.INSIDE_AREA;
    },Si.prototype.getCoordinate=function(){
      return this._pt;
    },Si.prototype.getGeometryComponent=function(){
      return this._component;
    },Si.prototype.getSegmentIndex=function(){
      return this._segIndex;
    },Si.prototype.interfaces_=function(){
      return[];
    },Si.prototype.getClass=function(){
      return Si;
    },wi.INSIDE_AREA.get=function(){
      return-1;
    },Object.defineProperties(Si,wi);var Li=function(t){
      this._pts=t||null;
    };Li.prototype.filter=function(t){
      t instanceof Jt&&this._pts.add(t);
    },Li.prototype.interfaces_=function(){
      return[ jt ];
    },Li.prototype.getClass=function(){
      return Li;
    },Li.getPoints=function(){
      if(1===arguments.length){
        var t=arguments[0];return t instanceof Jt?Ze.singletonList(t):Li.getPoints(t,new It);
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return e instanceof Jt?n.add(e):e instanceof qt&&e.apply(new Li(n)),n;
      }
    };var Oi=function(){
      this._locations=null;var t=arguments[0];this._locations=t;
    };Oi.prototype.filter=function(t){
      (t instanceof Jt||t instanceof Ht||t instanceof Zt)&&this._locations.add(new Si(t,0,t.getCoordinate()));
    },Oi.prototype.interfaces_=function(){
      return[ jt ];
    },Oi.prototype.getClass=function(){
      return Oi;
    },Oi.getLocations=function(t){
      var e=new It;return t.apply(new Oi(e)),e;
    };var Ti=function(){
      if(this._geom=null,this._terminateDistance=0,this._ptLocator=new Ci,this._minDistanceLocation=null,this._minDistance=m.MAX_VALUE,2===arguments.length){
        var t=arguments[0],e=arguments[1];this._geom=[ t,e ],this._terminateDistance=0;
      }else if(3===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2];this._geom=new Array(2).fill(null),this._geom[0]=n,this._geom[1]=i,this._terminateDistance=r;
      }
    };Ti.prototype.computeContainmentDistance=function(){
      if(0===arguments.length){
        var t=new Array(2).fill(null);if(this.computeContainmentDistance(0,t),this._minDistance<=this._terminateDistance) {
          return null;
        }this.computeContainmentDistance(1,t);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1],i=1-e,r=Ii.getPolygons(this._geom[e]);if(r.size()>0){
          var o=Oi.getLocations(this._geom[i]);if(this.computeContainmentDistance(o,r,n),this._minDistance<=this._terminateDistance) {
            return this._minDistanceLocation[i]=n[0],this._minDistanceLocation[e]=n[1],null;
          }
        }
      }else if(3===arguments.length) {
        if(arguments[2]instanceof Array&&T(arguments[0],Et)&&T(arguments[1],Et)){
          for(var s=arguments[0],a=arguments[1],u=arguments[2],c=0;c<s.size();c++) {
            for(var l=s.get(c),h=0;h<a.size();h++) {
if(this.computeContainmentDistance(l,a.get(h),u),this._minDistance<=this._terminateDistance)
              return null;
}
          }
        }else if(arguments[2]instanceof Array&&arguments[0]instanceof Si&&arguments[1]instanceof Zt){
          var p=arguments[0],f=arguments[1],d=arguments[2],g=p.getCoordinate();if(L.EXTERIOR!==this._ptLocator.locate(g,f)) {
            return this._minDistance=0,d[0]=p,d[1]=new Si(f,g),null;
          }
        }
      }
    },Ti.prototype.computeMinDistanceLinesPoints=function(t,e,n){
      for(var i=0;i<t.size();i++) {
        for(var r=t.get(i),o=0;o<e.size();o++){
          var s=e.get(o);if(this.computeMinDistance(r,s,n),this._minDistance<=this._terminateDistance) {
            return null;
          }
        }
      }
    },Ti.prototype.computeFacetDistance=function(){
      var t=new Array(2).fill(null),e=Ni.getLines(this._geom[0]),n=Ni.getLines(this._geom[1]),i=Li.getPoints(this._geom[0]),r=Li.getPoints(this._geom[1]);return this.computeMinDistanceLines(e,n,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(e,r,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(n,i,t),this.updateMinDistance(t,!0),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistancePoints(i,r,t),void this.updateMinDistance(t,!1))));
    },Ti.prototype.nearestLocations=function(){
      return this.computeMinDistance(),this._minDistanceLocation;
    },Ti.prototype.updateMinDistance=function(t,e){
      if(null===t[0]) {
        return null;
      }e?(this._minDistanceLocation[0]=t[1],this._minDistanceLocation[1]=t[0]):(this._minDistanceLocation[0]=t[0],this._minDistanceLocation[1]=t[1]);
    },Ti.prototype.nearestPoints=function(){
      return this.computeMinDistance(),[ this._minDistanceLocation[0].getCoordinate(),this._minDistanceLocation[1].getCoordinate() ];
    },Ti.prototype.computeMinDistance=function(){
      if(0===arguments.length){
        if(null!==this._minDistanceLocation) {
          return null;
        }if(this._minDistanceLocation=new Array(2).fill(null),this.computeContainmentDistance(),this._minDistance<=this._terminateDistance) {
          return null;
        }this.computeFacetDistance();
      }else if(3===arguments.length) {
        if(arguments[2]instanceof Array&&arguments[0]instanceof Ht&&arguments[1]instanceof Jt){
          var t=arguments[0],e=arguments[1],n=arguments[2];if(t.getEnvelopeInternal().distance(e.getEnvelopeInternal())>this._minDistance) {
            return null;
          }for(var i=t.getCoordinates(),r=e.getCoordinate(),o=0;o<i.length-1;o++){
            var s=at.distancePointLine(r,i[o],i[o+1]);if(s<this._minDistance){
              this._minDistance=s;var a=new gn(i[o],i[o+1]).closestPoint(r);n[0]=new Si(t,o,a),n[1]=new Si(e,0,r);
            }if(this._minDistance<=this._terminateDistance) {
              return null;
            }
          }
        }else if(arguments[2]instanceof Array&&arguments[0]instanceof Ht&&arguments[1]instanceof Ht){
          var u=arguments[0],c=arguments[1],l=arguments[2];if(u.getEnvelopeInternal().distance(c.getEnvelopeInternal())>this._minDistance) {
            return null;
          }for(var h=u.getCoordinates(),p=c.getCoordinates(),f=0;f<h.length-1;f++) {
            for(var d=0;d<p.length-1;d++){
              var g=at.distanceLineLine(h[f],h[f+1],p[d],p[d+1]);if(g<this._minDistance){
                this._minDistance=g;var y=new gn(h[f],h[f+1]),_=new gn(p[d],p[d+1]),v=y.closestPoints(_);l[0]=new Si(u,f,v[0]),l[1]=new Si(c,d,v[1]);
              }if(this._minDistance<=this._terminateDistance) {
return null;
}
            }
          }
        }
      }
    },Ti.prototype.computeMinDistancePoints=function(t,e,n){
      for(var i=0;i<t.size();i++) {
        for(var r=t.get(i),o=0;o<e.size();o++){
          var s=e.get(o),a=r.getCoordinate().distance(s.getCoordinate());if(a<this._minDistance&&(this._minDistance=a,n[0]=new Si(r,0,r.getCoordinate()),n[1]=new Si(s,0,s.getCoordinate())),this._minDistance<=this._terminateDistance) {
            return null;
          }
        }
      }
    },Ti.prototype.distance=function(){
      if(null===this._geom[0]||null===this._geom[1]) {
        throw new v("null geometries are not supported");
      }return this._geom[0].isEmpty()||this._geom[1].isEmpty()?0:(this.computeMinDistance(),this._minDistance);
    },Ti.prototype.computeMinDistanceLines=function(t,e,n){
      for(var i=0;i<t.size();i++) {
        for(var r=t.get(i),o=0;o<e.size();o++){
          var s=e.get(o);if(this.computeMinDistance(r,s,n),this._minDistance<=this._terminateDistance) {
            return null;
          }
        }
      }
    },Ti.prototype.interfaces_=function(){
      return[];
    },Ti.prototype.getClass=function(){
      return Ti;
    },Ti.distance=function(t,e){
      return new Ti(t,e).distance();
    },Ti.isWithinDistance=function(t,e,n){
      return new Ti(t,e,n).distance()<=n;
    },Ti.nearestPoints=function(t,e){
      return new Ti(t,e).nearestPoints();
    };var Ri=function(){
      this._pt=[ new N,new N ],this._distance=m.NaN,this._isNull=!0;
    };Ri.prototype.getCoordinates=function(){
      return this._pt;
    },Ri.prototype.getCoordinate=function(t){
      return this._pt[t];
    },Ri.prototype.setMinimum=function(){
      if(1===arguments.length){
        var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1]);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];if(this._isNull) {
          return this.initialize(e,n),null;
        }var i=e.distance(n);i<this._distance&&this.initialize(e,n,i);
      }
    },Ri.prototype.initialize=function(){
      if(0===arguments.length) {
        this._isNull=!0;
      }else if(2===arguments.length){
        var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1;
      }else if(3===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(i),this._distance=r,this._isNull=!1;
      }
    },Ri.prototype.toString=function(){
      return Q.toLineString(this._pt[0],this._pt[1]);
    },Ri.prototype.getDistance=function(){
      return this._distance;
    },Ri.prototype.setMaximum=function(){
      if(1===arguments.length){
        var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1]);
      }else if(2===arguments.length){
        var e=arguments[0],n=arguments[1];if(this._isNull) {
          return this.initialize(e,n),null;
        }var i=e.distance(n);i>this._distance&&this.initialize(e,n,i);
      }
    },Ri.prototype.interfaces_=function(){
      return[];
    },Ri.prototype.getClass=function(){
      return Ri;
    };var Mi=function(){};Mi.prototype.interfaces_=function(){
      return[];
    },Mi.prototype.getClass=function(){
      return Mi;
    },Mi.computeDistance=function(){
      if(arguments[2]instanceof Ri&&arguments[0]instanceof Ht&&arguments[1]instanceof N) {
        for(var t=arguments[0],e=arguments[1],n=arguments[2],i=new gn,r=t.getCoordinates(),o=0;o<r.length-1;o++){
          i.setCoordinates(r[o],r[o+1]);var s=i.closestPoint(e);n.setMinimum(s,e);
        }
      }else if(arguments[2]instanceof Ri&&arguments[0]instanceof Zt&&arguments[1]instanceof N){
        var a=arguments[0],u=arguments[1],c=arguments[2];Mi.computeDistance(a.getExteriorRing(),u,c);for(var l=0;l<a.getNumInteriorRing();l++) {
          Mi.computeDistance(a.getInteriorRingN(l),u,c);
        }
      }else if(arguments[2]instanceof Ri&&arguments[0]instanceof lt&&arguments[1]instanceof N){
        var h=arguments[0],p=arguments[1],f=arguments[2];if(h instanceof Ht) {
          Mi.computeDistance(h,p,f);
        }else if(h instanceof Zt) {
          Mi.computeDistance(h,p,f);
        }else if(h instanceof qt) {
          for(var d=h,g=0;g<d.getNumGeometries();g++){
            var y=d.getGeometryN(g);Mi.computeDistance(y,p,f);
          }
        }else {
          f.setMinimum(h.getCoordinate(),p);
        }
      }else if(arguments[2]instanceof Ri&&arguments[0]instanceof gn&&arguments[1]instanceof N){
        var _=arguments[0],v=arguments[1],m=arguments[2],b=_.closestPoint(v);m.setMinimum(b,v);
      }
    };var Pi=function(){
        this._g0=null,this._g1=null,this._ptDist=new Ri,this._densifyFrac=0;var t=arguments[0],e=arguments[1];this._g0=t,this._g1=e;
      },Di={ MaxPointDistanceFilter:{ configurable:!0 },MaxDensifiedByFractionDistanceFilter:{ configurable:!0 }};Pi.prototype.getCoordinates=function(){
      return this._ptDist.getCoordinates();
    },Pi.prototype.setDensifyFraction=function(t){
      if(t>1||t<=0) {
        throw new v("Fraction is not in range (0.0 - 1.0]");
      }this._densifyFrac=t;
    },Pi.prototype.compute=function(t,e){
      this.computeOrientedDistance(t,e,this._ptDist),this.computeOrientedDistance(e,t,this._ptDist);
    },Pi.prototype.distance=function(){
      return this.compute(this._g0,this._g1),this._ptDist.getDistance();
    },Pi.prototype.computeOrientedDistance=function(t,e,n){
      var i=new Ai(e);if(t.apply(i),n.setMaximum(i.getMaxPointDistance()),this._densifyFrac>0){
        var r=new Fi(e,this._densifyFrac);t.apply(r),n.setMaximum(r.getMaxPointDistance());
      }
    },Pi.prototype.orientedDistance=function(){
      return this.computeOrientedDistance(this._g0,this._g1,this._ptDist),this._ptDist.getDistance();
    },Pi.prototype.interfaces_=function(){
      return[];
    },Pi.prototype.getClass=function(){
      return Pi;
    },Pi.distance=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1];return new Pi(t,e).distance();
      }if(3===arguments.length){
        var n=arguments[0],i=arguments[1],r=arguments[2],o=new Pi(n,i);return o.setDensifyFraction(r),o.distance();
      }
    },Di.MaxPointDistanceFilter.get=function(){
      return Ai;
    },Di.MaxDensifiedByFractionDistanceFilter.get=function(){
      return Fi;
    },Object.defineProperties(Pi,Di);var Ai=function(){
      this._maxPtDist=new Ri,this._minPtDist=new Ri,this._euclideanDist=new Mi,this._geom=null;var t=arguments[0];this._geom=t;
    };Ai.prototype.filter=function(t){
      this._minPtDist.initialize(),Mi.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist);
    },Ai.prototype.getMaxPointDistance=function(){
      return this._maxPtDist;
    },Ai.prototype.interfaces_=function(){
      return[ ft ];
    },Ai.prototype.getClass=function(){
      return Ai;
    };var Fi=function(){
      this._maxPtDist=new Ri,this._minPtDist=new Ri,this._geom=null,this._numSubSegs=0;var t=arguments[0],e=arguments[1];this._geom=t,this._numSubSegs=Math.trunc(Math.round(1/e));
    };Fi.prototype.filter=function(t,e){
      if(0===e) {
        return null;
      }for(var n=t.getCoordinate(e-1),i=t.getCoordinate(e),r=(i.x-n.x)/this._numSubSegs,o=(i.y-n.y)/this._numSubSegs,s=0;s<this._numSubSegs;s++){
        var a=n.x+s*r,u=n.y+s*o,c=new N(a,u);this._minPtDist.initialize(),Mi.computeDistance(this._geom,c,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist);
      }
    },Fi.prototype.isDone=function(){
      return!1;
    },Fi.prototype.isGeometryChanged=function(){
      return!1;
    },Fi.prototype.getMaxPointDistance=function(){
      return this._maxPtDist;
    },Fi.prototype.interfaces_=function(){
      return[ Bt ];
    },Fi.prototype.getClass=function(){
      return Fi;
    };var $i=function(t,e,n){
        this._minValidDistance=null,this._maxValidDistance=null,this._minDistanceFound=null,this._maxDistanceFound=null,this._isValid=!0,this._errMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._bufDistance=e||null,this._result=n||null;
      },ki={ VERBOSE:{ configurable:!0 },MAX_DISTANCE_DIFF_FRAC:{ configurable:!0 }};$i.prototype.checkMaximumDistance=function(t,e,n){
      var i=new Pi(e,t);if(i.setDensifyFraction(.25),this._maxDistanceFound=i.orientedDistance(),this._maxDistanceFound>n){
        this._isValid=!1;var r=i.getCoordinates();this._errorLocation=r[1],this._errorIndicator=t.getFactory().createLineString(r),this._errMsg="Distance between buffer curve and input is too large ("+this._maxDistanceFound+" at "+Q.toLineString(r[0],r[1])+")";
      }
    },$i.prototype.isValid=function(){
      var t=Math.abs(this._bufDistance),e=$i.MAX_DISTANCE_DIFF_FRAC*t;return this._minValidDistance=t-e,this._maxValidDistance=t+e,!(!this._input.isEmpty()&&!this._result.isEmpty())||(this._bufDistance>0?this.checkPositiveValid():this.checkNegativeValid(),$i.VERBOSE&&z.out.println("Min Dist= "+this._minDistanceFound+"  err= "+(1-this._minDistanceFound/this._bufDistance)+"  Max Dist= "+this._maxDistanceFound+"  err= "+(this._maxDistanceFound/this._bufDistance-1)),this._isValid);
    },$i.prototype.checkNegativeValid=function(){
      if(!(this._input instanceof Zt||this._input instanceof ne||this._input instanceof qt)) {
        return null;
      }var t=this.getPolygonLines(this._input);if(this.checkMinimumDistance(t,this._result,this._minValidDistance),!this._isValid) {
        return null;
      }this.checkMaximumDistance(t,this._result,this._maxValidDistance);
    },$i.prototype.getErrorIndicator=function(){
      return this._errorIndicator;
    },$i.prototype.checkMinimumDistance=function(t,e,n){
      var i=new Ti(t,e,n);if(this._minDistanceFound=i.distance(),this._minDistanceFound<n){
        this._isValid=!1;var r=i.nearestPoints();this._errorLocation=i.nearestPoints()[1],this._errorIndicator=t.getFactory().createLineString(r),this._errMsg="Distance between buffer curve and input is too small ("+this._minDistanceFound+" at "+Q.toLineString(r[0],r[1])+" )";
      }
    },$i.prototype.checkPositiveValid=function(){
      var t=this._result.getBoundary();if(this.checkMinimumDistance(this._input,t,this._minValidDistance),!this._isValid) {
        return null;
      }this.checkMaximumDistance(this._input,t,this._maxValidDistance);
    },$i.prototype.getErrorLocation=function(){
      return this._errorLocation;
    },$i.prototype.getPolygonLines=function(t){
      for(var e=new It,n=new Ni(e),i=Ii.getPolygons(t).iterator();i.hasNext();) {
        i.next().apply(n);
      }return t.getFactory().buildGeometry(e);
    },$i.prototype.getErrorMessage=function(){
      return this._errMsg;
    },$i.prototype.interfaces_=function(){
      return[];
    },$i.prototype.getClass=function(){
      return $i;
    },ki.VERBOSE.get=function(){
      return!1;
    },ki.MAX_DISTANCE_DIFF_FRAC.get=function(){
      return.012;
    },Object.defineProperties($i,ki);var Gi=function(t,e,n){
        this._isValid=!0,this._errorMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._distance=e||null,this._result=n||null;
      },ji={ VERBOSE:{ configurable:!0 },MAX_ENV_DIFF_FRAC:{ configurable:!0 }};Gi.prototype.isValid=function(){
      return this.checkPolygonal(),this._isValid?(this.checkExpectedEmpty(),this._isValid?(this.checkEnvelope(),this._isValid?(this.checkArea(),this._isValid?(this.checkDistance(),this._isValid):this._isValid):this._isValid):this._isValid):this._isValid;
    },Gi.prototype.checkEnvelope=function(){
      if(this._distance<0) {
        return null;
      }var t=this._distance*Gi.MAX_ENV_DIFF_FRAC;0===t&&(t=.001);var e=new Y(this._input.getEnvelopeInternal());e.expandBy(this._distance);var n=new Y(this._result.getEnvelopeInternal());n.expandBy(t),n.contains(e)||(this._isValid=!1,this._errorMsg="Buffer envelope is incorrect",this._errorIndicator=this._input.getFactory().toGeometry(n)),this.report("Envelope");
    },Gi.prototype.checkDistance=function(){
      var t=new $i(this._input,this._distance,this._result);t.isValid()||(this._isValid=!1,this._errorMsg=t.getErrorMessage(),this._errorLocation=t.getErrorLocation(),this._errorIndicator=t.getErrorIndicator()),this.report("Distance");
    },Gi.prototype.checkArea=function(){
      var t=this._input.getArea(),e=this._result.getArea();this._distance>0&&t>e&&(this._isValid=!1,this._errorMsg="Area of positive buffer is smaller than input",this._errorIndicator=this._result),this._distance<0&&t<e&&(this._isValid=!1,this._errorMsg="Area of negative buffer is larger than input",this._errorIndicator=this._result),this.report("Area");
    },Gi.prototype.checkPolygonal=function(){
      this._result instanceof Zt||this._result instanceof ne||(this._isValid=!1),this._errorMsg="Result is not polygonal",this._errorIndicator=this._result,this.report("Polygonal");
    },Gi.prototype.getErrorIndicator=function(){
      return this._errorIndicator;
    },Gi.prototype.getErrorLocation=function(){
      return this._errorLocation;
    },Gi.prototype.checkExpectedEmpty=function(){
      return this._input.getDimension()>=2||this._distance>0?null:(this._result.isEmpty()||(this._isValid=!1,this._errorMsg="Result is non-empty",this._errorIndicator=this._result),void this.report("ExpectedEmpty"));
    },Gi.prototype.report=function(t){
      if(!Gi.VERBOSE) {
        return null;
      }z.out.println("Check "+t+": "+(this._isValid?"passed":"FAILED"));
    },Gi.prototype.getErrorMessage=function(){
      return this._errorMsg;
    },Gi.prototype.interfaces_=function(){
      return[];
    },Gi.prototype.getClass=function(){
      return Gi;
    },Gi.isValidMsg=function(t,e,n){
      var i=new Gi(t,e,n);return i.isValid()?null:i.getErrorMessage();
    },Gi.isValid=function(t,e,n){
      return!!new Gi(t,e,n).isValid();
    },ji.VERBOSE.get=function(){
      return!1;
    },ji.MAX_ENV_DIFF_FRAC.get=function(){
      return.012;
    },Object.defineProperties(Gi,ji);var Bi=function(){
      this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e;
    };Bi.prototype.getCoordinates=function(){
      return this._pts;
    },Bi.prototype.size=function(){
      return this._pts.length;
    },Bi.prototype.getCoordinate=function(t){
      return this._pts[t];
    },Bi.prototype.isClosed=function(){
      return this._pts[0].equals(this._pts[this._pts.length-1]);
    },Bi.prototype.getSegmentOctant=function(t){
      return t===this._pts.length-1?-1:hn.octant(this.getCoordinate(t),this.getCoordinate(t+1));
    },Bi.prototype.setData=function(t){
      this._data=t;
    },Bi.prototype.getData=function(){
      return this._data;
    },Bi.prototype.toString=function(){
      return Q.toLineString(new ue(this._pts));
    },Bi.prototype.interfaces_=function(){
      return[ pn ];
    },Bi.prototype.getClass=function(){
      return Bi;
    };var qi=function(){
      this._findAllIntersections=!1,this._isCheckEndSegmentsOnly=!1,this._li=null,this._interiorIntersection=null,this._intSegments=null,this._intersections=new It,this._intersectionCount=0,this._keepIntersections=!0;var t=arguments[0];this._li=t,this._interiorIntersection=null;
    };qi.prototype.getInteriorIntersection=function(){
      return this._interiorIntersection;
    },qi.prototype.setCheckEndSegmentsOnly=function(t){
      this._isCheckEndSegmentsOnly=t;
    },qi.prototype.getIntersectionSegments=function(){
      return this._intSegments;
    },qi.prototype.count=function(){
      return this._intersectionCount;
    },qi.prototype.getIntersections=function(){
      return this._intersections;
    },qi.prototype.setFindAllIntersections=function(t){
      this._findAllIntersections=t;
    },qi.prototype.setKeepIntersections=function(t){
      this._keepIntersections=t;
    },qi.prototype.processIntersections=function(t,e,n,i){
      if(!this._findAllIntersections&&this.hasIntersection()) {
        return null;
      }if(t===n&&e===i) {
        return null;
      }if(this._isCheckEndSegmentsOnly&&!this.isEndSegment(t,e)&&!this.isEndSegment(n,i)) {
        return null;
      }var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()&&(this._intSegments=new Array(4).fill(null),this._intSegments[0]=r,this._intSegments[1]=o,this._intSegments[2]=s,this._intSegments[3]=a,this._interiorIntersection=this._li.getIntersection(0),this._keepIntersections&&this._intersections.add(this._interiorIntersection),this._intersectionCount++);
    },qi.prototype.isEndSegment=function(t,e){
      return 0===e||e>=t.size()-2;
    },qi.prototype.hasIntersection=function(){
      return null!==this._interiorIntersection;
    },qi.prototype.isDone=function(){
      return!this._findAllIntersections&&null!==this._interiorIntersection;
    },qi.prototype.interfaces_=function(){
      return[ Wn ];
    },qi.prototype.getClass=function(){
      return qi;
    },qi.createAllIntersectionsFinder=function(t){
      var e=new qi(t);return e.setFindAllIntersections(!0),e;
    },qi.createAnyIntersectionFinder=function(t){
      return new qi(t);
    },qi.createIntersectionCounter=function(t){
      var e=new qi(t);return e.setFindAllIntersections(!0),e.setKeepIntersections(!1),e;
    };var Vi=function(){
      this._li=new rt,this._segStrings=null,this._findAllIntersections=!1,this._segInt=null,this._isValid=!0;var t=arguments[0];this._segStrings=t;
    };Vi.prototype.execute=function(){
      if(null!==this._segInt) {
        return null;
      }this.checkInteriorIntersections();
    },Vi.prototype.getIntersections=function(){
      return this._segInt.getIntersections();
    },Vi.prototype.isValid=function(){
      return this.execute(),this._isValid;
    },Vi.prototype.setFindAllIntersections=function(t){
      this._findAllIntersections=t;
    },Vi.prototype.checkInteriorIntersections=function(){
      this._isValid=!0,this._segInt=new qi(this._li),this._segInt.setFindAllIntersections(this._findAllIntersections);var t=new En;if(t.setSegmentIntersector(this._segInt),t.computeNodes(this._segStrings),this._segInt.hasIntersection()) {
        return this._isValid=!1,null;
      }
    },Vi.prototype.checkValid=function(){
      if(this.execute(),!this._isValid) {
        throw new Le(this.getErrorMessage(),this._segInt.getInteriorIntersection());
      }
    },Vi.prototype.getErrorMessage=function(){
      if(this._isValid) {
        return"no intersections found";
      }var t=this._segInt.getIntersectionSegments();return"found non-noded intersection between "+Q.toLineString(t[0],t[1])+" and "+Q.toLineString(t[2],t[3]);
    },Vi.prototype.interfaces_=function(){
      return[];
    },Vi.prototype.getClass=function(){
      return Vi;
    },Vi.computeIntersections=function(t){
      var e=new Vi(t);return e.setFindAllIntersections(!0),e.isValid(),e.getIntersections();
    };var zi=function t(){
      this._nv=null;var e=arguments[0];this._nv=new Vi(t.toSegmentStrings(e));
    };zi.prototype.checkValid=function(){
      this._nv.checkValid();
    },zi.prototype.interfaces_=function(){
      return[];
    },zi.prototype.getClass=function(){
      return zi;
    },zi.toSegmentStrings=function(t){
      for(var e=new It,n=t.iterator();n.hasNext();){
        var i=n.next();e.add(new Bi(i.getCoordinates(),i));
      }return e;
    },zi.checkValid=function(t){
      new zi(t).checkValid();
    };var Ui=function(t){
      this._mapOp=t;
    };Ui.prototype.map=function(t){
      for(var e=new It,n=0;n<t.getNumGeometries();n++){
        var i=this._mapOp.map(t.getGeometryN(n));i.isEmpty()||e.add(i);
      }return t.getFactory().createGeometryCollection(_e.toGeometryArray(e));
    },Ui.prototype.interfaces_=function(){
      return[];
    },Ui.prototype.getClass=function(){
      return Ui;
    },Ui.map=function(t,e){
      return new Ui(e).map(t);
    };var Yi=function(){
      this._op=null,this._geometryFactory=null,this._ptLocator=null,this._lineEdgesList=new It,this._resultLineList=new It;var t=arguments[0],e=arguments[1],n=arguments[2];this._op=t,this._geometryFactory=e,this._ptLocator=n;
    };Yi.prototype.collectLines=function(t){
      for(var e=this._op.getGraph().getEdgeEnds().iterator();e.hasNext();){
        var n=e.next();this.collectLineEdge(n,t,this._lineEdgesList),this.collectBoundaryTouchEdge(n,t,this._lineEdgesList);
      }
    },Yi.prototype.labelIsolatedLine=function(t,e){
      var n=this._ptLocator.locate(t.getCoordinate(),this._op.getArgGeometry(e));t.getLabel().setLocation(e,n);
    },Yi.prototype.build=function(t){
      return this.findCoveredLineEdges(),this.collectLines(t),this.buildLines(t),this._resultLineList;
    },Yi.prototype.collectLineEdge=function(t,e,n){
      var i=t.getLabel(),r=t.getEdge();t.isLineEdge()&&(t.isVisited()||!Sr.isResultOfOp(i,e)||r.isCovered()||(n.add(r),t.setVisitedEdge(!0)));
    },Yi.prototype.findCoveredLineEdges=function(){
      for(var t=this._op.getGraph().getNodes().iterator();t.hasNext();) {
        t.next().getEdges().findCoveredLineEdges();
      }for(var e=this._op.getGraph().getEdgeEnds().iterator();e.hasNext();){
        var n=e.next(),i=n.getEdge();if(n.isLineEdge()&&!i.isCoveredSet()){
          var r=this._op.isCoveredByA(n.getCoordinate());i.setCovered(r);
        }
      }
    },Yi.prototype.labelIsolatedLines=function(t){
      for(var e=t.iterator();e.hasNext();){
        var n=e.next(),i=n.getLabel();n.isIsolated()&&(i.isNull(0)?this.labelIsolatedLine(n,0):this.labelIsolatedLine(n,1));
      }
    },Yi.prototype.buildLines=function(t){
      for(var e=this._lineEdgesList.iterator();e.hasNext();){
        var n=e.next(),i=this._geometryFactory.createLineString(n.getCoordinates());this._resultLineList.add(i),n.setInResult(!0);
      }
    },Yi.prototype.collectBoundaryTouchEdge=function(t,e,n){
      var i=t.getLabel();return t.isLineEdge()||t.isVisited()||t.isInteriorAreaEdge()||t.getEdge().isInResult()?null:(et.isTrue(!(t.isInResult()||t.getSym().isInResult())||!t.getEdge().isInResult()),void(Sr.isResultOfOp(i,e)&&e===Sr.INTERSECTION&&(n.add(t.getEdge()),t.setVisitedEdge(!0))));
    },Yi.prototype.interfaces_=function(){
      return[];
    },Yi.prototype.getClass=function(){
      return Yi;
    };var Xi=function(){
      this._op=null,this._geometryFactory=null,this._resultPointList=new It;var t=arguments[0],e=arguments[1];this._op=t,this._geometryFactory=e;
    };Xi.prototype.filterCoveredNodeToPoint=function(t){
      var e=t.getCoordinate();if(!this._op.isCoveredByLA(e)){
        var n=this._geometryFactory.createPoint(e);this._resultPointList.add(n);
      }
    },Xi.prototype.extractNonCoveredResultNodes=function(t){
      for(var e=this._op.getGraph().getNodes().iterator();e.hasNext();){
        var n=e.next();if(!n.isInResult()&&!n.isIncidentEdgeInResult()&&(0===n.getEdges().getDegree()||t===Sr.INTERSECTION)){
          var i=n.getLabel();Sr.isResultOfOp(i,t)&&this.filterCoveredNodeToPoint(n);
        }
      }
    },Xi.prototype.build=function(t){
      return this.extractNonCoveredResultNodes(t),this._resultPointList;
    },Xi.prototype.interfaces_=function(){
      return[];
    },Xi.prototype.getClass=function(){
      return Xi;
    };var Wi=function(){
      this._inputGeom=null,this._factory=null,this._pruneEmptyGeometry=!0,this._preserveGeometryCollectionType=!0,this._preserveCollections=!1,this._preserveType=!1;
    };Wi.prototype.transformPoint=function(t,e){
      return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(),t));
    },Wi.prototype.transformPolygon=function(t,e){
      var n=!0,i=this.transformLinearRing(t.getExteriorRing(),t);null!==i&&i instanceof ee&&!i.isEmpty()||(n=!1);for(var r=new It,o=0;o<t.getNumInteriorRing();o++){
        var s=this.transformLinearRing(t.getInteriorRingN(o),t);null===s||s.isEmpty()||(s instanceof ee||(n=!1),r.add(s));
      }if(n) {
        return this._factory.createPolygon(i,r.toArray([]));
      }var a=new It;return null!==i&&a.add(i),a.addAll(r),this._factory.buildGeometry(a);
    },Wi.prototype.createCoordinateSequence=function(t){
      return this._factory.getCoordinateSequenceFactory().create(t);
    },Wi.prototype.getInputGeometry=function(){
      return this._inputGeom;
    },Wi.prototype.transformMultiLineString=function(t,e){
      for(var n=new It,i=0;i<t.getNumGeometries();i++){
        var r=this.transformLineString(t.getGeometryN(i),t);null!==r&&(r.isEmpty()||n.add(r));
      }return this._factory.buildGeometry(n);
    },Wi.prototype.transformCoordinates=function(t,e){
      return this.copy(t);
    },Wi.prototype.transformLineString=function(t,e){
      return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(),t));
    },Wi.prototype.transformMultiPoint=function(t,e){
      for(var n=new It,i=0;i<t.getNumGeometries();i++){
        var r=this.transformPoint(t.getGeometryN(i),t);null!==r&&(r.isEmpty()||n.add(r));
      }return this._factory.buildGeometry(n);
    },Wi.prototype.transformMultiPolygon=function(t,e){
      for(var n=new It,i=0;i<t.getNumGeometries();i++){
        var r=this.transformPolygon(t.getGeometryN(i),t);null!==r&&(r.isEmpty()||n.add(r));
      }return this._factory.buildGeometry(n);
    },Wi.prototype.copy=function(t){
      return t.copy();
    },Wi.prototype.transformGeometryCollection=function(t,e){
      for(var n=new It,i=0;i<t.getNumGeometries();i++){
        var r=this.transform(t.getGeometryN(i));null!==r&&(this._pruneEmptyGeometry&&r.isEmpty()||n.add(r));
      }return this._preserveGeometryCollectionType?this._factory.createGeometryCollection(_e.toGeometryArray(n)):this._factory.buildGeometry(n);
    },Wi.prototype.transform=function(t){
      if(this._inputGeom=t,this._factory=t.getFactory(),t instanceof Jt) {
        return this.transformPoint(t,null);
      }if(t instanceof te) {
        return this.transformMultiPoint(t,null);
      }if(t instanceof ee) {
        return this.transformLinearRing(t,null);
      }if(t instanceof Ht) {
        return this.transformLineString(t,null);
      }if(t instanceof Vt) {
        return this.transformMultiLineString(t,null);
      }if(t instanceof Zt) {
        return this.transformPolygon(t,null);
      }if(t instanceof ne) {
        return this.transformMultiPolygon(t,null);
      }if(t instanceof qt) {
        return this.transformGeometryCollection(t,null);
      }throw new v("Unknown Geometry subtype: "+t.getClass().getName());
    },Wi.prototype.transformLinearRing=function(t,e){
      var n=this.transformCoordinates(t.getCoordinateSequence(),t);if(null===n) {
        return this._factory.createLinearRing(null);
      }var i=n.size();return i>0&&i<4&&!this._preserveType?this._factory.createLineString(n):this._factory.createLinearRing(n);
    },Wi.prototype.interfaces_=function(){
      return[];
    },Wi.prototype.getClass=function(){
      return Wi;
    };var Hi=function t(){
      if(this._snapTolerance=0,this._srcPts=null,this._seg=new gn,this._allowSnappingToSourceVertices=!1,this._isClosed=!1,arguments[0]instanceof Ht&&"number"==typeof arguments[1]){
        var e=arguments[0],n=arguments[1];t.call(this,e.getCoordinates(),n);
      }else if(arguments[0]instanceof Array&&"number"==typeof arguments[1]){
        var i=arguments[0],r=arguments[1];this._srcPts=i,this._isClosed=t.isClosed(i),this._snapTolerance=r;
      }
    };Hi.prototype.snapVertices=function(t,e){
      for(var n=this._isClosed?t.size()-1:t.size(),i=0;i<n;i++){
        var r=t.get(i),o=this.findSnapForVertex(r,e);null!==o&&(t.set(i,new N(o)),0===i&&this._isClosed&&t.set(t.size()-1,new N(o)));
      }
    },Hi.prototype.findSnapForVertex=function(t,e){
      for(var n=0;n<e.length;n++){
        if(t.equals2D(e[n])) {
          return null;
        }if(t.distance(e[n])<this._snapTolerance) {
          return e[n];
        }
      }return null;
    },Hi.prototype.snapTo=function(t){
      var e=new Ct(this._srcPts);return this.snapVertices(e,t),this.snapSegments(e,t),e.toCoordinateArray();
    },Hi.prototype.snapSegments=function(t,e){
      if(0===e.length) {
        return null;
      }var n=e.length;e[0].equals2D(e[e.length-1])&&(n=e.length-1);for(var i=0;i<n;i++){
        var r=e[i],o=this.findSegmentIndexToSnap(r,t);o>=0&&t.add(o+1,new N(r),!1);
      }
    },Hi.prototype.findSegmentIndexToSnap=function(t,e){
      for(var n=m.MAX_VALUE,i=-1,r=0;r<e.size()-1;r++){
        if(this._seg.p0=e.get(r),this._seg.p1=e.get(r+1),this._seg.p0.equals2D(t)||this._seg.p1.equals2D(t)){
          if(this._allowSnappingToSourceVertices) {
            continue;
          }return-1;
        }var o=this._seg.distance(t);o<this._snapTolerance&&o<n&&(n=o,i=r);
      }return i;
    },Hi.prototype.setAllowSnappingToSourceVertices=function(t){
      this._allowSnappingToSourceVertices=t;
    },Hi.prototype.interfaces_=function(){
      return[];
    },Hi.prototype.getClass=function(){
      return Hi;
    },Hi.isClosed=function(t){
      return!(t.length<=1)&&t[0].equals2D(t[t.length-1]);
    };var Ki=function(t){
        this._srcGeom=t||null;
      },Ji={ SNAP_PRECISION_FACTOR:{ configurable:!0 }};Ki.prototype.snapTo=function(t,e){
      var n=this.extractTargetCoordinates(t);return new Qi(e,n).transform(this._srcGeom);
    },Ki.prototype.snapToSelf=function(t,e){
      var n=this.extractTargetCoordinates(this._srcGeom),i=new Qi(t,n,!0).transform(this._srcGeom),r=i;return e&&T(r,Qt)&&(r=i.buffer(0)),r;
    },Ki.prototype.computeSnapTolerance=function(t){
      return this.computeMinimumSegmentLength(t)/10;
    },Ki.prototype.extractTargetCoordinates=function(t){
      for(var e=new f,n=t.getCoordinates(),i=0;i<n.length;i++) {
        e.add(n[i]);
      }return e.toArray(new Array(0).fill(null));
    },Ki.prototype.computeMinimumSegmentLength=function(t){
      for(var e=m.MAX_VALUE,n=0;n<t.length-1;n++){
        var i=t[n].distance(t[n+1]);i<e&&(e=i);
      }return e;
    },Ki.prototype.interfaces_=function(){
      return[];
    },Ki.prototype.getClass=function(){
      return Ki;
    },Ki.snap=function(t,e,n){
      var i=new Array(2).fill(null),r=new Ki(t);i[0]=r.snapTo(e,n);var o=new Ki(e);return i[1]=o.snapTo(i[0],n),i;
    },Ki.computeOverlaySnapTolerance=function(){
      if(1===arguments.length){
        var t=arguments[0],e=Ki.computeSizeBasedSnapTolerance(t),n=t.getPrecisionModel();if(n.getType()===fe.FIXED){
          var i=1/n.getScale()*2/1.415;i>e&&(e=i);
        }return e;
      }if(2===arguments.length){
        var r=arguments[0],o=arguments[1];return Math.min(Ki.computeOverlaySnapTolerance(r),Ki.computeOverlaySnapTolerance(o));
      }
    },Ki.computeSizeBasedSnapTolerance=function(t){
      var e=t.getEnvelopeInternal();return Math.min(e.getHeight(),e.getWidth())*Ki.SNAP_PRECISION_FACTOR;
    },Ki.snapToSelf=function(t,e,n){
      return new Ki(t).snapToSelf(e,n);
    },Ji.SNAP_PRECISION_FACTOR.get=function(){
      return 1e-9;
    },Object.defineProperties(Ki,Ji);var Qi=function(t){
        function e(e,n,i){
          t.call(this),this._snapTolerance=e||null,this._snapPts=n||null,this._isSelfSnap=void 0!==i&&i;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.snapLine=function(t,e){
          var n=new Hi(t,this._snapTolerance);return n.setAllowSnappingToSourceVertices(this._isSelfSnap),n.snapTo(e);
        },e.prototype.transformCoordinates=function(t,e){
          var n=t.toCoordinateArray(),i=this.snapLine(n,this._snapPts);return this._factory.getCoordinateSequenceFactory().create(i);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(Wi),Zi=function(){
        this._isFirst=!0,this._commonMantissaBitsCount=53,this._commonBits=0,this._commonSignExp=null;
      };Zi.prototype.getCommon=function(){
      return m.longBitsToDouble(this._commonBits);
    },Zi.prototype.add=function(t){
      var e=m.doubleToLongBits(t);return this._isFirst?(this._commonBits=e,this._commonSignExp=Zi.signExpBits(this._commonBits),this._isFirst=!1,null):Zi.signExpBits(e)!==this._commonSignExp?(this._commonBits=0,null):(this._commonMantissaBitsCount=Zi.numCommonMostSigMantissaBits(this._commonBits,e),void(this._commonBits=Zi.zeroLowerBits(this._commonBits,64-(12+this._commonMantissaBitsCount))));
    },Zi.prototype.toString=function(){
      if(1===arguments.length){
        var t=arguments[0],e=m.longBitsToDouble(t),n="0000000000000000000000000000000000000000000000000000000000000000"+m.toBinaryString(t),i=n.substring(n.length-64);return i.substring(0,1)+"  "+i.substring(1,12)+"(exp) "+i.substring(12)+" [ "+e+" ]";
      }
    },Zi.prototype.interfaces_=function(){
      return[];
    },Zi.prototype.getClass=function(){
      return Zi;
    },Zi.getBit=function(t,e){
      return 0!=(t&1<<e)?1:0;
    },Zi.signExpBits=function(t){
      return t>>52;
    },Zi.zeroLowerBits=function(t,e){
      return t&~((1<<e)-1);
    },Zi.numCommonMostSigMantissaBits=function(t,e){
      for(var n=0,i=52;i>=0;i--){
        if(Zi.getBit(t,i)!==Zi.getBit(e,i)) {
          return n;
        }n++;
      }return 52;
    };var tr=function(){
        this._commonCoord=null,this._ccFilter=new nr;
      },er={ CommonCoordinateFilter:{ configurable:!0 },Translater:{ configurable:!0 }};tr.prototype.addCommonBits=function(t){
      var e=new ir(this._commonCoord);t.apply(e),t.geometryChanged();
    },tr.prototype.removeCommonBits=function(t){
      if(0===this._commonCoord.x&&0===this._commonCoord.y) {
        return t;
      }var e=new N(this._commonCoord);e.x=-e.x,e.y=-e.y;var n=new ir(e);return t.apply(n),t.geometryChanged(),t;
    },tr.prototype.getCommonCoordinate=function(){
      return this._commonCoord;
    },tr.prototype.add=function(t){
      t.apply(this._ccFilter),this._commonCoord=this._ccFilter.getCommonCoordinate();
    },tr.prototype.interfaces_=function(){
      return[];
    },tr.prototype.getClass=function(){
      return tr;
    },er.CommonCoordinateFilter.get=function(){
      return nr;
    },er.Translater.get=function(){
      return ir;
    },Object.defineProperties(tr,er);var nr=function(){
      this._commonBitsX=new Zi,this._commonBitsY=new Zi;
    };nr.prototype.filter=function(t){
      this._commonBitsX.add(t.x),this._commonBitsY.add(t.y);
    },nr.prototype.getCommonCoordinate=function(){
      return new N(this._commonBitsX.getCommon(),this._commonBitsY.getCommon());
    },nr.prototype.interfaces_=function(){
      return[ ft ];
    },nr.prototype.getClass=function(){
      return nr;
    };var ir=function(){
      this.trans=null;var t=arguments[0];this.trans=t;
    };ir.prototype.filter=function(t,e){
      var n=t.getOrdinate(e,0)+this.trans.x,i=t.getOrdinate(e,1)+this.trans.y;t.setOrdinate(e,0,n),t.setOrdinate(e,1,i);
    },ir.prototype.isDone=function(){
      return!1;
    },ir.prototype.isGeometryChanged=function(){
      return!0;
    },ir.prototype.interfaces_=function(){
      return[ Bt ];
    },ir.prototype.getClass=function(){
      return ir;
    };var rr=function(t,e){
      this._geom=new Array(2).fill(null),this._snapTolerance=null,this._cbr=null,this._geom[0]=t,this._geom[1]=e,this.computeSnapTolerance();
    };rr.prototype.selfSnap=function(t){
      return new Ki(t).snapTo(t,this._snapTolerance);
    },rr.prototype.removeCommonBits=function(t){
      this._cbr=new tr,this._cbr.add(t[0]),this._cbr.add(t[1]);var e=new Array(2).fill(null);return e[0]=this._cbr.removeCommonBits(t[0].copy()),e[1]=this._cbr.removeCommonBits(t[1].copy()),e;
    },rr.prototype.prepareResult=function(t){
      return this._cbr.addCommonBits(t),t;
    },rr.prototype.getResultGeometry=function(t){
      var e=this.snap(this._geom),n=Sr.overlayOp(e[0],e[1],t);return this.prepareResult(n);
    },rr.prototype.checkValid=function(t){
      t.isValid()||z.out.println("Snapped geometry is invalid");
    },rr.prototype.computeSnapTolerance=function(){
      this._snapTolerance=Ki.computeOverlaySnapTolerance(this._geom[0],this._geom[1]);
    },rr.prototype.snap=function(t){
      var e=this.removeCommonBits(t);return Ki.snap(e[0],e[1],this._snapTolerance);
    },rr.prototype.interfaces_=function(){
      return[];
    },rr.prototype.getClass=function(){
      return rr;
    },rr.overlayOp=function(t,e,n){
      return new rr(t,e).getResultGeometry(n);
    },rr.union=function(t,e){
      return rr.overlayOp(t,e,Sr.UNION);
    },rr.intersection=function(t,e){
      return rr.overlayOp(t,e,Sr.INTERSECTION);
    },rr.symDifference=function(t,e){
      return rr.overlayOp(t,e,Sr.SYMDIFFERENCE);
    },rr.difference=function(t,e){
      return rr.overlayOp(t,e,Sr.DIFFERENCE);
    };var or=function(t,e){
      this._geom=new Array(2).fill(null),this._geom[0]=t,this._geom[1]=e;
    };or.prototype.getResultGeometry=function(t){
      var e=null,n=!1,i=null;try{
        e=Sr.overlayOp(this._geom[0],this._geom[1],t),n=!0;
      }catch(t){
        if(!(t instanceof Z)) {
          throw t;
        }i=t;
      }if(!n) {
        try{
          e=rr.overlayOp(this._geom[0],this._geom[1],t);
        }catch(t){
          throw t instanceof Z?i:t;
        }
      }return e;
    },or.prototype.interfaces_=function(){
      return[];
    },or.prototype.getClass=function(){
      return or;
    },or.overlayOp=function(t,e,n){
      return new or(t,e).getResultGeometry(n);
    },or.union=function(t,e){
      return or.overlayOp(t,e,Sr.UNION);
    },or.intersection=function(t,e){
      return or.overlayOp(t,e,Sr.INTERSECTION);
    },or.symDifference=function(t,e){
      return or.overlayOp(t,e,Sr.SYMDIFFERENCE);
    },or.difference=function(t,e){
      return or.overlayOp(t,e,Sr.DIFFERENCE);
    };var sr=function(){
      this.mce=null,this.chainIndex=null;var t=arguments[0],e=arguments[1];this.mce=t,this.chainIndex=e;
    };sr.prototype.computeIntersections=function(t,e){
      this.mce.computeIntersectsForChain(this.chainIndex,t.mce,t.chainIndex,e);
    },sr.prototype.interfaces_=function(){
      return[];
    },sr.prototype.getClass=function(){
      return sr;
    };var ar=function t(){
        if(this._label=null,this._xValue=null,this._eventType=null,this._insertEvent=null,this._deleteEventIndex=null,this._obj=null,2===arguments.length){
          var e=arguments[0],n=arguments[1];this._eventType=t.DELETE,this._xValue=e,this._insertEvent=n;
        }else if(3===arguments.length){
          var i=arguments[0],r=arguments[1],o=arguments[2];this._eventType=t.INSERT,this._label=i,this._xValue=r,this._obj=o;
        }
      },ur={ INSERT:{ configurable:!0 },DELETE:{ configurable:!0 }};ar.prototype.isDelete=function(){
      return this._eventType===ar.DELETE;
    },ar.prototype.setDeleteEventIndex=function(t){
      this._deleteEventIndex=t;
    },ar.prototype.getObject=function(){
      return this._obj;
    },ar.prototype.compareTo=function(t){
      var e=t;return this._xValue<e._xValue?-1:this._xValue>e._xValue?1:this._eventType<e._eventType?-1:this._eventType>e._eventType?1:0;
    },ar.prototype.getInsertEvent=function(){
      return this._insertEvent;
    },ar.prototype.isInsert=function(){
      return this._eventType===ar.INSERT;
    },ar.prototype.isSameLabel=function(t){
      return null!==this._label&&this._label===t._label;
    },ar.prototype.getDeleteEventIndex=function(){
      return this._deleteEventIndex;
    },ar.prototype.interfaces_=function(){
      return[ x ];
    },ar.prototype.getClass=function(){
      return ar;
    },ur.INSERT.get=function(){
      return 1;
    },ur.DELETE.get=function(){
      return 2;
    },Object.defineProperties(ar,ur);var cr=function(){};cr.prototype.interfaces_=function(){
      return[];
    },cr.prototype.getClass=function(){
      return cr;
    };var lr=function(){
      this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._properIntersectionPoint=null,this._li=null,this._includeProper=null,this._recordIsolated=null,this._isSelfIntersection=null,this._numIntersections=0,this.numTests=0,this._bdyNodes=null,this._isDone=!1,this._isDoneWhenProperInt=!1;var t=arguments[0],e=arguments[1],n=arguments[2];this._li=t,this._includeProper=e,this._recordIsolated=n;
    };lr.prototype.isTrivialIntersection=function(t,e,n,i){
      if(t===n&&1===this._li.getIntersectionNum()){
        if(lr.isAdjacentSegments(e,i)) {
          return!0;
        }if(t.isClosed()){
          var r=t.getNumPoints()-1;if(0===e&&i===r||0===i&&e===r) {
            return!0;
          }
        }
      }return!1;
    },lr.prototype.getProperIntersectionPoint=function(){
      return this._properIntersectionPoint;
    },lr.prototype.setIsDoneIfProperInt=function(t){
      this._isDoneWhenProperInt=t;
    },lr.prototype.hasProperInteriorIntersection=function(){
      return this._hasProperInterior;
    },lr.prototype.isBoundaryPointInternal=function(t,e){
      for(var n=e.iterator();n.hasNext();){
        var i=n.next().getCoordinate();if(t.isIntersection(i)) {
          return!0;
        }
      }return!1;
    },lr.prototype.hasProperIntersection=function(){
      return this._hasProper;
    },lr.prototype.hasIntersection=function(){
      return this._hasIntersection;
    },lr.prototype.isDone=function(){
      return this._isDone;
    },lr.prototype.isBoundaryPoint=function(t,e){
      return null!==e&&(!!this.isBoundaryPointInternal(t,e[0])||!!this.isBoundaryPointInternal(t,e[1]));
    },lr.prototype.setBoundaryNodes=function(t,e){
      this._bdyNodes=new Array(2).fill(null),this._bdyNodes[0]=t,this._bdyNodes[1]=e;
    },lr.prototype.addIntersections=function(t,e,n,i){
      if(t===n&&e===i) {
        return null;
      }this.numTests++;var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&(this._recordIsolated&&(t.setIsolated(!1),n.setIsolated(!1)),this._numIntersections++,this.isTrivialIntersection(t,e,n,i)||(this._hasIntersection=!0,!this._includeProper&&this._li.isProper()||(t.addIntersections(this._li,e,0),n.addIntersections(this._li,i,1)),this._li.isProper()&&(this._properIntersectionPoint=this._li.getIntersection(0).copy(),this._hasProper=!0,this._isDoneWhenProperInt&&(this._isDone=!0),this.isBoundaryPoint(this._li,this._bdyNodes)||(this._hasProperInterior=!0))));
    },lr.prototype.interfaces_=function(){
      return[];
    },lr.prototype.getClass=function(){
      return lr;
    },lr.isAdjacentSegments=function(t,e){
      return 1===Math.abs(t-e);
    };var hr=function(t){
        function e(){
          t.call(this),this.events=new It,this.nOverlaps=null;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.prepareEvents=function(){
          Ze.sort(this.events);for(var t=0;t<this.events.size();t++){
            var e=this.events.get(t);e.isDelete()&&e.getInsertEvent().setDeleteEventIndex(t);
          }
        },e.prototype.computeIntersections=function(){
          if(1===arguments.length){
            var t=arguments[0];this.nOverlaps=0,this.prepareEvents();for(var e=0;e<this.events.size();e++){
              var n=this.events.get(e);if(n.isInsert()&&this.processOverlaps(e,n.getDeleteEventIndex(),n,t),t.isDone()) {
                break;
              }
            }
          }else if(3===arguments.length) {
            if(arguments[2]instanceof lr&&T(arguments[0],Et)&&T(arguments[1],Et)){
              var i=arguments[0],r=arguments[1],o=arguments[2];this.addEdges(i,i),this.addEdges(r,r),this.computeIntersections(o);
            }else if("boolean"==typeof arguments[2]&&T(arguments[0],Et)&&arguments[1]instanceof lr){
              var s=arguments[0],a=arguments[1];arguments[2]?this.addEdges(s,null):this.addEdges(s),this.computeIntersections(a);
            }
          }
        },e.prototype.addEdge=function(t,e){
          for(var n=t.getMonotoneChainEdge(),i=n.getStartIndexes(),r=0;r<i.length-1;r++){
            var o=new sr(n,r),s=new ar(e,n.getMinX(r),o);this.events.add(s),this.events.add(new ar(n.getMaxX(r),s));
          }
        },e.prototype.processOverlaps=function(t,e,n,i){
          for(var r=n.getObject(),o=t;o<e;o++){
            var s=this.events.get(o);if(s.isInsert()){
              var a=s.getObject();n.isSameLabel(s)||(r.computeIntersections(a,i),this.nOverlaps++);
            }
          }
        },e.prototype.addEdges=function(){
          if(1===arguments.length) {
            for(var t=arguments[0].iterator();t.hasNext();){
              var e=t.next();this.addEdge(e,e);
            }
          }else if(2===arguments.length) {
            for(var n=arguments[0],i=arguments[1],r=n.iterator();r.hasNext();){
              var o=r.next();this.addEdge(o,i);
            }
          }
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(cr),pr=function(){
        this._min=m.POSITIVE_INFINITY,this._max=m.NEGATIVE_INFINITY;
      },fr={ NodeComparator:{ configurable:!0 }};pr.prototype.getMin=function(){
      return this._min;
    },pr.prototype.intersects=function(t,e){
      return!(this._min>e||this._max<t);
    },pr.prototype.getMax=function(){
      return this._max;
    },pr.prototype.toString=function(){
      return Q.toLineString(new N(this._min,0),new N(this._max,0));
    },pr.prototype.interfaces_=function(){
      return[];
    },pr.prototype.getClass=function(){
      return pr;
    },fr.NodeComparator.get=function(){
      return dr;
    },Object.defineProperties(pr,fr);var dr=function(){};dr.prototype.compare=function(t,e){
      var n=t,i=e,r=(n._min+n._max)/2,o=(i._min+i._max)/2;return r<o?-1:r>o?1:0;
    },dr.prototype.interfaces_=function(){
      return[ I ];
    },dr.prototype.getClass=function(){
      return dr;
    };var gr=function(t){
        function e(){
          t.call(this),this._item=null;var e=arguments[0],n=arguments[1],i=arguments[2];this._min=e,this._max=n,this._item=i;
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.query=function(t,e,n){
          if(!this.intersects(t,e)) {
            return null;
          }n.visitItem(this._item);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(pr),yr=function(t){
        function e(){
          t.call(this),this._node1=null,this._node2=null;var e=arguments[0],n=arguments[1];this._node1=e,this._node2=n,this.buildExtent(this._node1,this._node2);
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildExtent=function(t,e){
          this._min=Math.min(t._min,e._min),this._max=Math.max(t._max,e._max);
        },e.prototype.query=function(t,e,n){
          if(!this.intersects(t,e)) {
            return null;
          }null!==this._node1&&this._node1.query(t,e,n),null!==this._node2&&this._node2.query(t,e,n);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e;
      }(pr),_r=function(){
        this._leaves=new It,this._root=null,this._level=0;
      };_r.prototype.buildTree=function(){
      Ze.sort(this._leaves,new pr.NodeComparator);for(var t=this._leaves,e=null,n=new It;;){
        if(this.buildLevel(t,n),1===n.size()) {
          return n.get(0);
        }e=t,t=n,n=e;
      }
    },_r.prototype.insert=function(t,e,n){
      if(null!==this._root) {
        throw new Error("Index cannot be added to once it has been queried");
      }this._leaves.add(new gr(t,e,n));
    },_r.prototype.query=function(t,e,n){
      this.init(),this._root.query(t,e,n);
    },_r.prototype.buildRoot=function(){
      if(null!==this._root) {
        return null;
      }this._root=this.buildTree();
    },_r.prototype.printNode=function(t){
      z.out.println(Q.toLineString(new N(t._min,this._level),new N(t._max,this._level)));
    },_r.prototype.init=function(){
      if(null!==this._root) {
        return null;
      }this.buildRoot();
    },_r.prototype.buildLevel=function(t,e){
      this._level++,e.clear();for(var n=0;n<t.size();n+=2){
        var i=t.get(n);if(null===(n+1<t.size()?t.get(n):null)) {
          e.add(i);
        }else{
          var r=new yr(t.get(n),t.get(n+1));e.add(r);
        }
      }
    },_r.prototype.interfaces_=function(){
      return[];
    },_r.prototype.getClass=function(){
      return _r;
    };var vr=function(){
      this._items=new It;
    };vr.prototype.visitItem=function(t){
      this._items.add(t);
    },vr.prototype.getItems=function(){
      return this._items;
    },vr.prototype.interfaces_=function(){
      return[ He ];
    },vr.prototype.getClass=function(){
      return vr;
    };var mr=function(){
        this._index=null;var t=arguments[0];if(!T(t,Qt)) {
          throw new v("Argument must be Polygonal");
        }this._index=new Er(t);
      },br={ SegmentVisitor:{ configurable:!0 },IntervalIndexedGeometry:{ configurable:!0 }};mr.prototype.locate=function(t){
      var e=new st(t),n=new xr(e);return this._index.query(t.y,t.y,n),e.getLocation();
    },mr.prototype.interfaces_=function(){
      return[ jn ];
    },mr.prototype.getClass=function(){
      return mr;
    },br.SegmentVisitor.get=function(){
      return xr;
    },br.IntervalIndexedGeometry.get=function(){
      return Er;
    },Object.defineProperties(mr,br);var xr=function(){
      this._counter=null;var t=arguments[0];this._counter=t;
    };xr.prototype.visitItem=function(t){
      var e=t;this._counter.countSegment(e.getCoordinate(0),e.getCoordinate(1));
    },xr.prototype.interfaces_=function(){
      return[ He ];
    },xr.prototype.getClass=function(){
      return xr;
    };var Er=function(){
      this._index=new _r;var t=arguments[0];this.init(t);
    };Er.prototype.init=function(t){
      for(var e=Ni.getLines(t).iterator();e.hasNext();){
        var n=e.next().getCoordinates();this.addLine(n);
      }
    },Er.prototype.addLine=function(t){
      for(var e=1;e<t.length;e++){
        var n=new gn(t[e-1],t[e]),i=Math.min(n.p0.y,n.p1.y),r=Math.max(n.p0.y,n.p1.y);this._index.insert(i,r,n);
      }
    },Er.prototype.query=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1],n=new vr;return this._index.query(t,e,n),n.getItems();
      }if(3===arguments.length){
        var i=arguments[0],r=arguments[1],o=arguments[2];this._index.query(i,r,o);
      }
    },Er.prototype.interfaces_=function(){
      return[];
    },Er.prototype.getClass=function(){
      return Er;
    };var Ir=function(t){
        function e(){
          if(t.call(this),this._parentGeom=null,this._lineEdgeMap=new pe,this._boundaryNodeRule=null,this._useBoundaryDeterminationRule=!0,this._argIndex=null,this._boundaryNodes=null,this._hasTooFewPoints=!1,this._invalidPoint=null,this._areaPtLocator=null,this._ptLocator=new Ci,2===arguments.length){
            var e=arguments[0],n=arguments[1],i=dt.OGC_SFS_BOUNDARY_RULE;this._argIndex=e,this._parentGeom=n,this._boundaryNodeRule=i,null!==n&&this.add(n);
          }else if(3===arguments.length){
            var r=arguments[0],o=arguments[1],s=arguments[2];this._argIndex=r,this._parentGeom=o,this._boundaryNodeRule=s,null!==o&&this.add(o);
          }
        }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertBoundaryPoint=function(t,n){
          var i=this._nodes.addNode(n).getLabel(),r=1;L.NONE,i.getLocation(t,Ce.ON)===L.BOUNDARY&&r++;var o=e.determineBoundary(this._boundaryNodeRule,r);i.setLocation(t,o);
        },e.prototype.computeSelfNodes=function(){
          if(2===arguments.length){
            var t=arguments[0],e=arguments[1];return this.computeSelfNodes(t,e,!1);
          }if(3===arguments.length){
            var n=arguments[0],i=arguments[1],r=arguments[2],o=new lr(n,!0,!1);o.setIsDoneIfProperInt(r);var s=this.createEdgeSetIntersector(),a=this._parentGeom instanceof ee||this._parentGeom instanceof Zt||this._parentGeom instanceof ne,u=i||!a;return s.computeIntersections(this._edges,o,u),this.addSelfIntersectionNodes(this._argIndex),o;
          }
        },e.prototype.computeSplitEdges=function(t){
          for(var e=this._edges.iterator();e.hasNext();) {
            e.next().eiList.addSplitEdges(t);
          }
        },e.prototype.computeEdgeIntersections=function(t,e,n){
          var i=new lr(e,n,!0);return i.setBoundaryNodes(this.getBoundaryNodes(),t.getBoundaryNodes()),this.createEdgeSetIntersector().computeIntersections(this._edges,t._edges,i),i;
        },e.prototype.getGeometry=function(){
          return this._parentGeom;
        },e.prototype.getBoundaryNodeRule=function(){
          return this._boundaryNodeRule;
        },e.prototype.hasTooFewPoints=function(){
          return this._hasTooFewPoints;
        },e.prototype.addPoint=function(){
          if(arguments[0]instanceof Jt){
            var t=arguments[0].getCoordinate();this.insertPoint(this._argIndex,t,L.INTERIOR);
          }else if(arguments[0]instanceof N){
            var e=arguments[0];this.insertPoint(this._argIndex,e,L.INTERIOR);
          }
        },e.prototype.addPolygon=function(t){
          this.addPolygonRing(t.getExteriorRing(),L.EXTERIOR,L.INTERIOR);for(var e=0;e<t.getNumInteriorRing();e++){
            var n=t.getInteriorRingN(e);this.addPolygonRing(n,L.INTERIOR,L.EXTERIOR);
          }
        },e.prototype.addEdge=function(t){
          this.insertEdge(t);var e=t.getCoordinates();this.insertPoint(this._argIndex,e[0],L.BOUNDARY),this.insertPoint(this._argIndex,e[e.length-1],L.BOUNDARY);
        },e.prototype.addLineString=function(t){
          var e=St.removeRepeatedPoints(t.getCoordinates());if(e.length<2) {
            return this._hasTooFewPoints=!0,this._invalidPoint=e[0],null;
          }var n=new ni(e,new Me(this._argIndex,L.INTERIOR));this._lineEdgeMap.put(t,n),this.insertEdge(n),et.isTrue(e.length>=2,"found LineString with single point"),this.insertBoundaryPoint(this._argIndex,e[0]),this.insertBoundaryPoint(this._argIndex,e[e.length-1]);
        },e.prototype.getInvalidPoint=function(){
          return this._invalidPoint;
        },e.prototype.getBoundaryPoints=function(){
          for(var t=this.getBoundaryNodes(),e=new Array(t.size()).fill(null),n=0,i=t.iterator();i.hasNext();){
            var r=i.next();e[n++]=r.getCoordinate().copy();
          }return e;
        },e.prototype.getBoundaryNodes=function(){
          return null===this._boundaryNodes&&(this._boundaryNodes=this._nodes.getBoundaryNodes(this._argIndex)),this._boundaryNodes;
        },e.prototype.addSelfIntersectionNode=function(t,e,n){
          if(this.isBoundaryNode(t,e)) {
            return null;
          }n===L.BOUNDARY&&this._useBoundaryDeterminationRule?this.insertBoundaryPoint(t,e):this.insertPoint(t,e,n);
        },e.prototype.addPolygonRing=function(t,e,n){
          if(t.isEmpty()) {
            return null;
          }var i=St.removeRepeatedPoints(t.getCoordinates());if(i.length<4) {
            return this._hasTooFewPoints=!0,this._invalidPoint=i[0],null;
          }var r=e,o=n;at.isCCW(i)&&(r=n,o=e);var s=new ni(i,new Me(this._argIndex,L.BOUNDARY,r,o));this._lineEdgeMap.put(t,s),this.insertEdge(s),this.insertPoint(this._argIndex,i[0],L.BOUNDARY);
        },e.prototype.insertPoint=function(t,e,n){
          var i=this._nodes.addNode(e),r=i.getLabel();null===r?i._label=new Me(t,n):r.setLocation(t,n);
        },e.prototype.createEdgeSetIntersector=function(){
          return new hr;
        },e.prototype.addSelfIntersectionNodes=function(t){
          for(var e=this._edges.iterator();e.hasNext();) {
            for(var n=e.next(),i=n.getLabel().getLocation(t),r=n.eiList.iterator();r.hasNext();){
              var o=r.next();this.addSelfIntersectionNode(t,o.coord,i);
            }
          }
        },e.prototype.add=function(){
          if(1!==arguments.length) {
            return t.prototype.add.apply(this,arguments);
          }var e=arguments[0];if(e.isEmpty()) {
            return null;
          }if(e instanceof ne&&(this._useBoundaryDeterminationRule=!1),e instanceof Zt) {
            this.addPolygon(e);
          }else if(e instanceof Ht) {
            this.addLineString(e);
          }else if(e instanceof Jt) {
            this.addPoint(e);
          }else if(e instanceof te) {
            this.addCollection(e);
          }else if(e instanceof Vt) {
            this.addCollection(e);
          }else if(e instanceof ne) {
            this.addCollection(e);
          }else{
            if(!(e instanceof qt)) {
              throw new Error(e.getClass().getName());
            }this.addCollection(e);
          }
        },e.prototype.addCollection=function(t){
          for(var e=0;e<t.getNumGeometries();e++){
            var n=t.getGeometryN(e);this.add(n);
          }
        },e.prototype.locate=function(t){
          return T(this._parentGeom,Qt)&&this._parentGeom.getNumGeometries()>50?(null===this._areaPtLocator&&(this._areaPtLocator=new mr(this._parentGeom)),this._areaPtLocator.locate(t)):this._ptLocator.locate(t,this._parentGeom);
        },e.prototype.findEdge=function(){
          if(1===arguments.length){
            var e=arguments[0];return this._lineEdgeMap.get(e);
          }return t.prototype.findEdge.apply(this,arguments);
        },e.prototype.interfaces_=function(){
          return[];
        },e.prototype.getClass=function(){
          return e;
        },e.determineBoundary=function(t,e){
          return t.isInBoundary(e)?L.BOUNDARY:L.INTERIOR;
        },e;
      }(ze),Nr=function(){
        if(this._li=new rt,this._resultPrecisionModel=null,this._arg=null,1===arguments.length){
          var t=arguments[0];this.setComputationPrecision(t.getPrecisionModel()),this._arg=new Array(1).fill(null),this._arg[0]=new Ir(0,t);
        }else if(2===arguments.length){
          var e=arguments[0],n=arguments[1],i=dt.OGC_SFS_BOUNDARY_RULE;e.getPrecisionModel().compareTo(n.getPrecisionModel())>=0?this.setComputationPrecision(e.getPrecisionModel()):this.setComputationPrecision(n.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new Ir(0,e,i),this._arg[1]=new Ir(1,n,i);
        }else if(3===arguments.length){
          var r=arguments[0],o=arguments[1],s=arguments[2];r.getPrecisionModel().compareTo(o.getPrecisionModel())>=0?this.setComputationPrecision(r.getPrecisionModel()):this.setComputationPrecision(o.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new Ir(0,r,s),this._arg[1]=new Ir(1,o,s);
        }
      };Nr.prototype.getArgGeometry=function(t){
      return this._arg[t].getGeometry();
    },Nr.prototype.setComputationPrecision=function(t){
      this._resultPrecisionModel=t,this._li.setPrecisionModel(this._resultPrecisionModel);
    },Nr.prototype.interfaces_=function(){
      return[];
    },Nr.prototype.getClass=function(){
      return Nr;
    };var Cr=function(){};Cr.prototype.interfaces_=function(){
      return[];
    },Cr.prototype.getClass=function(){
      return Cr;
    },Cr.map=function(){
      if(arguments[0]instanceof lt&&T(arguments[1],Cr.MapOp)){
        for(var t=arguments[0],e=arguments[1],n=new It,i=0;i<t.getNumGeometries();i++){
          var r=e.map(t.getGeometryN(i));null!==r&&n.add(r);
        }return t.getFactory().buildGeometry(n);
      }if(T(arguments[0],bt)&&T(arguments[1],Cr.MapOp)){
        for(var o=arguments[0],s=arguments[1],a=new It,u=o.iterator();u.hasNext();){
          var c=u.next(),l=s.map(c);null!==l&&a.add(l);
        }return a;
      }
    },Cr.MapOp=function(){};var Sr=function(t){
      function e(){
        var e=arguments[0],n=arguments[1];t.call(this,e,n),this._ptLocator=new Ci,this._geomFact=null,this._resultGeom=null,this._graph=null,this._edgeList=new Xn,this._resultPolyList=new It,this._resultLineList=new It,this._resultPointList=new It,this._graph=new ze(new Un),this._geomFact=e.getFactory();
      }return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertUniqueEdge=function(t){
        var e=this._edgeList.findEqualEdge(t);if(null!==e){
          var n=e.getLabel(),i=t.getLabel();e.isPointwiseEqual(t)||(i=new Me(t.getLabel())).flip();var r=e.getDepth();r.isNull()&&r.add(n),r.add(i),n.merge(i);
        }else {
          this._edgeList.add(t);
        }
      },e.prototype.getGraph=function(){
        return this._graph;
      },e.prototype.cancelDuplicateResultEdges=function(){
        for(var t=this._graph.getEdgeEnds().iterator();t.hasNext();){
          var e=t.next(),n=e.getSym();e.isInResult()&&n.isInResult()&&(e.setInResult(!1),n.setInResult(!1));
        }
      },e.prototype.isCoveredByLA=function(t){
        return!!this.isCovered(t,this._resultLineList)||!!this.isCovered(t,this._resultPolyList);
      },e.prototype.computeGeometry=function(t,n,i,r){
        var o=new It;return o.addAll(t),o.addAll(n),o.addAll(i),o.isEmpty()?e.createEmptyResult(r,this._arg[0].getGeometry(),this._arg[1].getGeometry(),this._geomFact):this._geomFact.buildGeometry(o);
      },e.prototype.mergeSymLabels=function(){
        for(var t=this._graph.getNodes().iterator();t.hasNext();) {
          t.next().getEdges().mergeSymLabels();
        }
      },e.prototype.isCovered=function(t,e){
        for(var n=e.iterator();n.hasNext();){
          var i=n.next();if(this._ptLocator.locate(t,i)!==L.EXTERIOR) {
            return!0;
          }
        }return!1;
      },e.prototype.replaceCollapsedEdges=function(){
        for(var t=new It,e=this._edgeList.iterator();e.hasNext();){
          var n=e.next();n.isCollapsed()&&(e.remove(),t.add(n.getCollapsedEdge()));
        }this._edgeList.addAll(t);
      },e.prototype.updateNodeLabelling=function(){
        for(var t=this._graph.getNodes().iterator();t.hasNext();){
          var e=t.next(),n=e.getEdges().getLabel();e.getLabel().merge(n);
        }
      },e.prototype.getResultGeometry=function(t){
        return this.computeOverlay(t),this._resultGeom;
      },e.prototype.insertUniqueEdges=function(t){
        for(var e=t.iterator();e.hasNext();){
          var n=e.next();this.insertUniqueEdge(n);
        }
      },e.prototype.computeOverlay=function(t){
        this.copyPoints(0),this.copyPoints(1),this._arg[0].computeSelfNodes(this._li,!1),this._arg[1].computeSelfNodes(this._li,!1),this._arg[0].computeEdgeIntersections(this._arg[1],this._li,!0);var e=new It;this._arg[0].computeSplitEdges(e),this._arg[1].computeSplitEdges(e),this.insertUniqueEdges(e),this.computeLabelsFromDepths(),this.replaceCollapsedEdges(),zi.checkValid(this._edgeList.getEdges()),this._graph.addEdges(this._edgeList.getEdges()),this.computeLabelling(),this.labelIncompleteNodes(),this.findResultAreaEdges(t),this.cancelDuplicateResultEdges();var n=new Ue(this._geomFact);n.add(this._graph),this._resultPolyList=n.getPolygons();var i=new Yi(this,this._geomFact,this._ptLocator);this._resultLineList=i.build(t);var r=new Xi(this,this._geomFact,this._ptLocator);this._resultPointList=r.build(t),this._resultGeom=this.computeGeometry(this._resultPointList,this._resultLineList,this._resultPolyList,t);
      },e.prototype.labelIncompleteNode=function(t,e){
        var n=this._ptLocator.locate(t.getCoordinate(),this._arg[e].getGeometry());t.getLabel().setLocation(e,n);
      },e.prototype.copyPoints=function(t){
        for(var e=this._arg[t].getNodeIterator();e.hasNext();){
          var n=e.next();this._graph.addNode(n.getCoordinate()).setLabel(t,n.getLabel().getLocation(t));
        }
      },e.prototype.findResultAreaEdges=function(t){
        for(var n=this._graph.getEdgeEnds().iterator();n.hasNext();){
          var i=n.next(),r=i.getLabel();r.isArea()&&!i.isInteriorAreaEdge()&&e.isResultOfOp(r.getLocation(0,Ce.RIGHT),r.getLocation(1,Ce.RIGHT),t)&&i.setInResult(!0);
        }
      },e.prototype.computeLabelsFromDepths=function(){
        for(var t=this._edgeList.iterator();t.hasNext();){
          var e=t.next(),n=e.getLabel(),i=e.getDepth();if(!i.isNull()){
            i.normalize();for(var r=0;r<2;r++) {
              n.isNull(r)||!n.isArea()||i.isNull(r)||(0===i.getDelta(r)?n.toLine(r):(et.isTrue(!i.isNull(r,Ce.LEFT),"depth of LEFT side has not been initialized"),n.setLocation(r,Ce.LEFT,i.getLocation(r,Ce.LEFT)),et.isTrue(!i.isNull(r,Ce.RIGHT),"depth of RIGHT side has not been initialized"),n.setLocation(r,Ce.RIGHT,i.getLocation(r,Ce.RIGHT))));
            }
          }
        }
      },e.prototype.computeLabelling=function(){
        for(var t=this._graph.getNodes().iterator();t.hasNext();) {
          t.next().getEdges().computeLabelling(this._arg);
        }this.mergeSymLabels(),this.updateNodeLabelling();
      },e.prototype.labelIncompleteNodes=function(){
        for(var t=this._graph.getNodes().iterator();t.hasNext();){
          var e=t.next(),n=e.getLabel();e.isIsolated()&&(n.isNull(0)?this.labelIncompleteNode(e,0):this.labelIncompleteNode(e,1)),e.getEdges().updateLabelling(n);
        }
      },e.prototype.isCoveredByA=function(t){
        return!!this.isCovered(t,this._resultPolyList);
      },e.prototype.interfaces_=function(){
        return[];
      },e.prototype.getClass=function(){
        return e;
      },e;
    }(Nr);Sr.overlayOp=function(t,e,n){
      return new Sr(t,e).getResultGeometry(n);
    },Sr.intersection=function(t,e){
      if(t.isEmpty()||e.isEmpty()) {
        return Sr.createEmptyResult(Sr.INTERSECTION,t,e,t.getFactory());
      }if(t.isGeometryCollection()){
        var n=e;return Ui.map(t,{ interfaces_:function(){
          return[ Cr.MapOp ];
        },map:function(t){
          return t.intersection(n);
        } });
      }return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Sr.INTERSECTION);
    },Sr.symDifference=function(t,e){
      if(t.isEmpty()||e.isEmpty()){
        if(t.isEmpty()&&e.isEmpty()) {
          return Sr.createEmptyResult(Sr.SYMDIFFERENCE,t,e,t.getFactory());
        }if(t.isEmpty()) {
          return e.copy();
        }if(e.isEmpty()) {
          return t.copy();
        }
      }return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Sr.SYMDIFFERENCE);
    },Sr.resultDimension=function(t,e,n){
      var i=e.getDimension(),r=n.getDimension(),o=-1;switch(t){
      case Sr.INTERSECTION:o=Math.min(i,r);break;case Sr.UNION:o=Math.max(i,r);break;case Sr.DIFFERENCE:o=i;break;case Sr.SYMDIFFERENCE:o=Math.max(i,r);
      }return o;
    },Sr.createEmptyResult=function(t,e,n,i){
      var r=null;switch(Sr.resultDimension(t,e,n)){
      case-1:r=i.createGeometryCollection(new Array(0).fill(null));break;case 0:r=i.createPoint();break;case 1:r=i.createLineString();break;case 2:r=i.createPolygon();
      }return r;
    },Sr.difference=function(t,e){
      return t.isEmpty()?Sr.createEmptyResult(Sr.DIFFERENCE,t,e,t.getFactory()):e.isEmpty()?t.copy():(t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Sr.DIFFERENCE));
    },Sr.isResultOfOp=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1],n=t.getLocation(0),i=t.getLocation(1);return Sr.isResultOfOp(n,i,e);
      }if(3===arguments.length){
        var r=arguments[0],o=arguments[1],s=arguments[2];switch(r===L.BOUNDARY&&(r=L.INTERIOR),o===L.BOUNDARY&&(o=L.INTERIOR),s){
        case Sr.INTERSECTION:return r===L.INTERIOR&&o===L.INTERIOR;case Sr.UNION:return r===L.INTERIOR||o===L.INTERIOR;case Sr.DIFFERENCE:return r===L.INTERIOR&&o!==L.INTERIOR;case Sr.SYMDIFFERENCE:return r===L.INTERIOR&&o!==L.INTERIOR||r!==L.INTERIOR&&o===L.INTERIOR;
        }return!1;
      }
    },Sr.INTERSECTION=1,Sr.UNION=2,Sr.DIFFERENCE=3,Sr.SYMDIFFERENCE=4;var wr=function(){
      this._g=null,this._boundaryDistanceTolerance=null,this._linework=null,this._ptLocator=new Ci,this._seg=new gn;var t=arguments[0],e=arguments[1];this._g=t,this._boundaryDistanceTolerance=e,this._linework=this.extractLinework(t);
    };wr.prototype.isWithinToleranceOfBoundary=function(t){
      for(var e=0;e<this._linework.getNumGeometries();e++) {
        for(var n=this._linework.getGeometryN(e).getCoordinateSequence(),i=0;i<n.size()-1;i++) {
          if(n.getCoordinate(i,this._seg.p0),n.getCoordinate(i+1,this._seg.p1),this._seg.distance(t)<=this._boundaryDistanceTolerance) {
return!0;
}
        }
      }return!1;
    },wr.prototype.getLocation=function(t){
      return this.isWithinToleranceOfBoundary(t)?L.BOUNDARY:this._ptLocator.locate(t,this._g);
    },wr.prototype.extractLinework=function(t){
      var e=new Lr;t.apply(e);var n=e.getLinework(),i=_e.toLineStringArray(n);return t.getFactory().createMultiLineString(i);
    },wr.prototype.interfaces_=function(){
      return[];
    },wr.prototype.getClass=function(){
      return wr;
    };var Lr=function(){
      this._linework=null,this._linework=new It;
    };Lr.prototype.getLinework=function(){
      return this._linework;
    },Lr.prototype.filter=function(t){
      if(t instanceof Zt){
        var e=t;this._linework.add(e.getExteriorRing());for(var n=0;n<e.getNumInteriorRing();n++) {
          this._linework.add(e.getInteriorRingN(n));
        }
      }
    },Lr.prototype.interfaces_=function(){
      return[ jt ];
    },Lr.prototype.getClass=function(){
      return Lr;
    };var Or=function(){
      this._g=null,this._doLeft=!0,this._doRight=!0;var t=arguments[0];this._g=t;
    };Or.prototype.extractPoints=function(t,e,n){
      for(var i=t.getCoordinates(),r=0;r<i.length-1;r++) {
        this.computeOffsetPoints(i[r],i[r+1],e,n);
      }
    },Or.prototype.setSidesToGenerate=function(t,e){
      this._doLeft=t,this._doRight=e;
    },Or.prototype.getPoints=function(t){
      for(var e=new It,n=Ni.getLines(this._g).iterator();n.hasNext();){
        var i=n.next();this.extractPoints(i,t,e);
      }return e;
    },Or.prototype.computeOffsetPoints=function(t,e,n,i){
      var r=e.x-t.x,o=e.y-t.y,s=Math.sqrt(r*r+o*o),a=n*r/s,u=n*o/s,c=(e.x+t.x)/2,l=(e.y+t.y)/2;if(this._doLeft){
        var h=new N(c-u,l+a);i.add(h);
      }if(this._doRight){
        var p=new N(c+u,l-a);i.add(p);
      }
    },Or.prototype.interfaces_=function(){
      return[];
    },Or.prototype.getClass=function(){
      return Or;
    };var Tr=function t(){
        this._geom=null,this._locFinder=null,this._location=new Array(3).fill(null),this._invalidLocation=null,this._boundaryDistanceTolerance=t.TOLERANCE,this._testCoords=new It;var e=arguments[0],n=arguments[1],i=arguments[2];this._boundaryDistanceTolerance=t.computeBoundaryDistanceTolerance(e,n),this._geom=[ e,n,i ],this._locFinder=[ new wr(this._geom[0],this._boundaryDistanceTolerance),new wr(this._geom[1],this._boundaryDistanceTolerance),new wr(this._geom[2],this._boundaryDistanceTolerance) ];
      },Rr={ TOLERANCE:{ configurable:!0 }};Tr.prototype.reportResult=function(t,e,n){
      z.out.println("Overlay result invalid - A:"+L.toLocationSymbol(e[0])+" B:"+L.toLocationSymbol(e[1])+" expected:"+(n?"i":"e")+" actual:"+L.toLocationSymbol(e[2]));
    },Tr.prototype.isValid=function(t){
      this.addTestPts(this._geom[0]),this.addTestPts(this._geom[1]);var e=this.checkValid(t);return e;
    },Tr.prototype.checkValid=function(){
      if(1===arguments.length){
        for(var t=arguments[0],e=0;e<this._testCoords.size();e++){
          var n=this._testCoords.get(e);if(!this.checkValid(t,n)) {
            return this._invalidLocation=n,!1;
          }
        }return!0;
      }if(2===arguments.length){
        var i=arguments[0],r=arguments[1];return this._location[0]=this._locFinder[0].getLocation(r),this._location[1]=this._locFinder[1].getLocation(r),this._location[2]=this._locFinder[2].getLocation(r),!!Tr.hasLocation(this._location,L.BOUNDARY)||this.isValidResult(i,this._location);
      }
    },Tr.prototype.addTestPts=function(t){
      var e=new Or(t);this._testCoords.addAll(e.getPoints(5*this._boundaryDistanceTolerance));
    },Tr.prototype.isValidResult=function(t,e){
      var n=Sr.isResultOfOp(e[0],e[1],t),i=!(n^e[2]===L.INTERIOR);return i||this.reportResult(t,e,n),i;
    },Tr.prototype.getInvalidLocation=function(){
      return this._invalidLocation;
    },Tr.prototype.interfaces_=function(){
      return[];
    },Tr.prototype.getClass=function(){
      return Tr;
    },Tr.hasLocation=function(t,e){
      for(var n=0;n<3;n++) {
        if(t[n]===e) {
          return!0;
        }
      }return!1;
    },Tr.computeBoundaryDistanceTolerance=function(t,e){
      return Math.min(Ki.computeSizeBasedSnapTolerance(t),Ki.computeSizeBasedSnapTolerance(e));
    },Tr.isValid=function(t,e,n,i){
      return new Tr(t,e,i).isValid(n);
    },Rr.TOLERANCE.get=function(){
      return 1e-6;
    },Object.defineProperties(Tr,Rr);var Mr=function t(e){
      this._geomFactory=null,this._skipEmpty=!1,this._inputGeoms=null,this._geomFactory=t.extractFactory(e),this._inputGeoms=e;
    };Mr.prototype.extractElements=function(t,e){
      if(null===t) {
        return null;
      }for(var n=0;n<t.getNumGeometries();n++){
        var i=t.getGeometryN(n);this._skipEmpty&&i.isEmpty()||e.add(i);
      }
    },Mr.prototype.combine=function(){
      for(var t=new It,e=this._inputGeoms.iterator();e.hasNext();){
        var n=e.next();this.extractElements(n,t);
      }return 0===t.size()?null!==this._geomFactory?this._geomFactory.createGeometryCollection(null):null:this._geomFactory.buildGeometry(t);
    },Mr.prototype.interfaces_=function(){
      return[];
    },Mr.prototype.getClass=function(){
      return Mr;
    },Mr.combine=function(){
      if(1===arguments.length){
        var t=arguments[0];return new Mr(t).combine();
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return new Mr(Mr.createList(e,n)).combine();
      }if(3===arguments.length){
        var i=arguments[0],r=arguments[1],o=arguments[2];return new Mr(Mr.createList(i,r,o)).combine();
      }
    },Mr.extractFactory=function(t){
      return t.isEmpty()?null:t.iterator().next().getFactory();
    },Mr.createList=function(){
      if(2===arguments.length){
        var t=arguments[0],e=arguments[1],n=new It;return n.add(t),n.add(e),n;
      }if(3===arguments.length){
        var i=arguments[0],r=arguments[1],o=arguments[2],s=new It;return s.add(i),s.add(r),s.add(o),s;
      }
    };var Pr=function(){
        this._inputPolys=null,this._geomFactory=null;var t=arguments[0];this._inputPolys=t,null===this._inputPolys&&(this._inputPolys=new It);
      },Dr={ STRTREE_NODE_CAPACITY:{ configurable:!0 }};Pr.prototype.reduceToGeometries=function(t){
      for(var e=new It,n=t.iterator();n.hasNext();){
        var i=n.next(),r=null;T(i,Et)?r=this.unionTree(i):i instanceof lt&&(r=i),e.add(r);
      }return e;
    },Pr.prototype.extractByEnvelope=function(t,e,n){
      for(var i=new It,r=0;r<e.getNumGeometries();r++){
        var o=e.getGeometryN(r);o.getEnvelopeInternal().intersects(t)?i.add(o):n.add(o);
      }return this._geomFactory.buildGeometry(i);
    },Pr.prototype.unionOptimized=function(t,e){
      var n=t.getEnvelopeInternal(),i=e.getEnvelopeInternal();if(!n.intersects(i)) {
        return Mr.combine(t,e);
      }if(t.getNumGeometries()<=1&&e.getNumGeometries()<=1) {
        return this.unionActual(t,e);
      }var r=n.intersection(i);return this.unionUsingEnvelopeIntersection(t,e,r);
    },Pr.prototype.union=function(){
      if(null===this._inputPolys) {
        throw new Error("union() method cannot be called twice");
      }if(this._inputPolys.isEmpty()) {
        return null;
      }this._geomFactory=this._inputPolys.iterator().next().getFactory();for(var t=new sn(Pr.STRTREE_NODE_CAPACITY),e=this._inputPolys.iterator();e.hasNext();){
        var n=e.next();t.insert(n.getEnvelopeInternal(),n);
      }this._inputPolys=null;var i=t.itemsTree();return this.unionTree(i);
    },Pr.prototype.binaryUnion=function(){
      if(1===arguments.length){
        var t=arguments[0];return this.binaryUnion(t,0,t.size());
      }if(3===arguments.length){
        var e=arguments[0],n=arguments[1],i=arguments[2];if(i-n<=1){
          var r=Pr.getGeometry(e,n);return this.unionSafe(r,null);
        }if(i-n==2) {
          return this.unionSafe(Pr.getGeometry(e,n),Pr.getGeometry(e,n+1));
        }var o=Math.trunc((i+n)/2),s=this.binaryUnion(e,n,o),a=this.binaryUnion(e,o,i);return this.unionSafe(s,a);
      }
    },Pr.prototype.repeatedUnion=function(t){
      for(var e=null,n=t.iterator();n.hasNext();){
        var i=n.next();e=null===e?i.copy():e.union(i);
      }return e;
    },Pr.prototype.unionSafe=function(t,e){
      return null===t&&null===e?null:null===t?e.copy():null===e?t.copy():this.unionOptimized(t,e);
    },Pr.prototype.unionActual=function(t,e){
      return Pr.restrictToPolygons(t.union(e));
    },Pr.prototype.unionTree=function(t){
      var e=this.reduceToGeometries(t);return this.binaryUnion(e);
    },Pr.prototype.unionUsingEnvelopeIntersection=function(t,e,n){
      var i=new It,r=this.extractByEnvelope(n,t,i),o=this.extractByEnvelope(n,e,i),s=this.unionActual(r,o);return i.add(s),Mr.combine(i);
    },Pr.prototype.bufferUnion=function(){
      if(1===arguments.length){
        var t=arguments[0];return t.get(0).getFactory().buildGeometry(t).buffer(0);
      }if(2===arguments.length){
        var e=arguments[0],n=arguments[1];return e.getFactory().createGeometryCollection([ e,n ]).buffer(0);
      }
    },Pr.prototype.interfaces_=function(){
      return[];
    },Pr.prototype.getClass=function(){
      return Pr;
    },Pr.restrictToPolygons=function(t){
      if(T(t,Qt)) {
        return t;
      }var e=Ii.getPolygons(t);return 1===e.size()?e.get(0):t.getFactory().createMultiPolygon(_e.toPolygonArray(e));
    },Pr.getGeometry=function(t,e){
      return e>=t.size()?null:t.get(e);
    },Pr.union=function(t){
      return new Pr(t).union();
    },Dr.STRTREE_NODE_CAPACITY.get=function(){
      return 4;
    },Object.defineProperties(Pr,Dr);var Ar=function(){};Ar.prototype.interfaces_=function(){
      return[];
    },Ar.prototype.getClass=function(){
      return Ar;
    },Ar.union=function(t,e){
      if(t.isEmpty()||e.isEmpty()){
        if(t.isEmpty()&&e.isEmpty()) {
          return Sr.createEmptyResult(Sr.UNION,t,e,t.getFactory());
        }if(t.isEmpty()) {
          return e.copy();
        }if(e.isEmpty()) {
          return t.copy();
        }
      }return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Sr.UNION);
    },t.GeoJSONReader=Ie,t.GeoJSONWriter=Ne,t.OverlayOp=Sr,t.UnionOp=Ar,t.BufferOp=gi,Object.defineProperty(t,"__esModule",{ value:!0 });
  }));
},9439:function(t,e,n){
  var i=n("b96e");t.exports=function(t){
    return i((function(){
      var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3;
    }));
  };
},"95eb":function(t,e,n){
  "use strict";var i=n("67b2"),r=n("0885"),o=n("550a"),s=n("bd06"),a=n("4ecc"),u=n("21b8"),c=n("27f8"),l=n("2fc7"),h=n("db82"),p=n("9ce1"),f=n("7942"),d=n("b96e"),g=n("96f7"),y=n("125a"),_=n("f0a9");t.exports=function(t,e,n){
    var v=-1!==t.indexOf("Map"),m=-1!==t.indexOf("Weak"),b=v?"set":"add",x=r[t],E=x&&x.prototype,I=x,N={},C=function(t){
        var e=o(E[t]);a(E,t,"add"==t?function(t){
          return e(this,0===t?0:t),this;
        }:"delete"==t?function(t){
          return!(m&&!f(t))&&e(this,0===t?0:t);
        }:"get"==t?function(t){
          return m&&!f(t)?void 0:e(this,0===t?0:t);
        }:"has"==t?function(t){
          return!(m&&!f(t))&&e(this,0===t?0:t);
        }:function(t,n){
          return e(this,0===t?0:t,n),this;
        });
      },S=s(t,!h(x)||!(m||E.forEach&&!d((function(){
        (new x).entries().next();
      }))));if(S) {
      I=n.getConstructor(e,t,v,b),u.enable();
    }else if(s(t,!0)){
      var w=new I,L=w[b](m?{}:-0,1)!=w,O=d((function(){
          w.has(1);
        })),T=g((function(t){
          new x(t);
        })),R=!m&&d((function(){
          var t=new x,e=5;while(e--) {
            t[b](e,e);
          }return!t.has(-0);
        }));T||(I=e((function(t,e){
        l(t,E);var n=_(new x,t,I);return p(e)||c(e,n[b],{ that:n,AS_ENTRIES:v }),n;
      })),I.prototype=E,E.constructor=I),(O||R)&&(C("delete"),C("has"),v&&C("get")),(R||L)&&C(b),m&&E.clear&&delete E.clear;
    }return N[t]=I,i({ global:!0,constructor:!0,forced:I!=x },N),y(I,t),m||n.setStrong(I,t,v),I;
  };
},"96f7":function(t,e,n){
  var i=n("49be"),r=i("iterator"),o=!1;try{
    var s=0,a={ next:function(){
      return{ done:!!s++ };
    },return:function(){
      o=!0;
    } };a[r]=function(){
      return this;
    },Array.from(a,(function(){
      throw 2;
    }));
  }catch(u){}t.exports=function(t,e){
    if(!e&&!o) {
      return!1;
    }var n=!1;try{
      var i={};i[r]=function(){
        return{ next:function(){
          return{ done:n=!0 };
        } };
      },t(i);
    }catch(u){}return n;
  };
},"9b1a":function(t,e,n){},"9e9c":function(t,e,n){
  "use strict";var i=n("4750").charAt;t.exports=function(t,e,n){
    return e+(n?i(t,e).length:1);
  };
},a32c:function(t,e,n){
  var i=n("d423"),r=n("e246"),o=n("3bed"),s=n("36ad"),a=RegExp.prototype;t.exports=function(t){
    var e=t.flags;return void 0!==e||"flags"in a||r(t,"flags")||!o(a,t)?e:i(s,t);
  };
},a7af:function(t,e,n){
  "use strict";n("44e9");var i=n("6640"),r=n("4ecc"),o=n("658c"),s=n("b96e"),a=n("49be"),u=n("a3b1"),c=a("species"),l=RegExp.prototype;t.exports=function(t,e,n,h){
    var p=a(t),f=!s((function(){
        var e={};return e[p]=function(){
          return 7;
        },7!=""[t](e);
      })),d=f&&!s((function(){
        var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){
          return n;
        },n.flags="",n[p]=/./[p]),n.exec=function(){
          return e=!0,null;
        },n[p](""),!e;
      }));if(!f||!d||n){
      var g=i(/./[p]),y=e(p,""[t],(function(t,e,n,r,s){
        var a=i(t),u=e.exec;return u===o||u===l.exec?f&&!s?{ done:!0,value:g(e,n,r) }:{ done:!0,value:a(n,e,r) }:{ done:!1 };
      }));r(String.prototype,t,y[0]),r(l,p,y[1]);
    }h&&u(l[p],"sham",!0);
  };
},a7ce:function(t,e,n){},aab1:function(t,e,n){
  var i=n("0102"),r=n("b96a"),o=n("9ce1"),s=n("50d0"),a=n("49be"),u=a("iterator");t.exports=function(t){
    if(!o(t)) {
      return r(t,u)||r(t,"@@iterator")||s[i(t)];
    }
  };
},ae6a:function(t,e,n){
  var i=n("b96e");t.exports=!i((function(){
    return Object.isExtensible(Object.preventExtensions({}));
  }));
},b081:function(t,e,n){
  var i=n("49be"),r=n("50d0"),o=i("iterator"),s=Array.prototype;t.exports=function(t){
    return void 0!==t&&(r.Array===t||s[o]===t);
  };
},b50c:function(t,e,n){
  var i=n("d6cc"),r=Function.prototype,o=r.apply,s=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(o):function(){
    return s.apply(o,arguments);
  });
},b747:function(t,e,n){
  var i=n("550a");t.exports=i(1..valueOf);
},bef1:function(t,e,n){},bf5d7:function(t,e,n){
  var i=n("4ecc");t.exports=function(t,e,n){
    for(var r in e) {
      i(t,r,e[r],n);
    }return t;
  };
},bf75:function(t,e,n){
  "use strict";n("9b1a");
},c4ee:function(t,e,n){
  var i=n("1302"),r=Math.floor,o=function(t,e){
      var n=t.length,u=r(n/2);return n<8?s(t,e):a(t,o(i(t,0,u),e),o(i(t,u),e),e);
    },s=function(t,e){
      var n,i,r=t.length,o=1;while(o<r){
        i=o,n=t[o];while(i&&e(t[i-1],n)>0) {
          t[i]=t[--i];
        }i!==o++&&(t[i]=n);
      }return t;
    },a=function(t,e,n,i){
      var r=e.length,o=n.length,s=0,a=0;while(s<r||a<o) {
        t[s+a]=s<r&&a<o?i(e[s],n[a])<=0?e[s++]:n[a++]:s<r?e[s++]:n[a++];
      }return t;
    };t.exports=o;
},c7d5:function(t,e,n){
  "use strict";n("14d6");
},c991:function(t,e,n){
  "use strict";var i=n("f9d3").forEach,r=n("d10d"),o=r("forEach");t.exports=o?[].forEach:function(t){
    return i(this,t,arguments.length>1?arguments[1]:void 0);
  };
},cb31:function(t,e,n){
  "use strict";n("2fae");
},d10d:function(t,e,n){
  "use strict";var i=n("b96e");t.exports=function(t,e){
    var n=[][t];return!!n&&i((function(){
      n.call(null,e||function(){
        return 1;
      },1);
    }));
  };
},d702:function(t,e,n){
  "use strict";n("bef1");
},da0f:function(t,e,n){
  "use strict";var i=n("67b2"),r=n("550a"),o=n("6ba1"),s=n("bfa1"),a=n("d10d"),u=r([].join),c=o!=Object,l=c||!a("join",",");i({ target:"Array",proto:!0,forced:l },{ join:function(t){
    return u(s(this),void 0===t?",":t);
  } });
},db80:function(t,e,n){
  "use strict";var i=n("67b2"),r=n("286a"),o=n("9439");i({ target:"String",proto:!0,forced:o("small") },{ small:function(){
    return r(this,"small","","");
  } });
},dd4b:function(t,e,n){
  "use strict";var i=n("67b2"),r=n("02e2"),o=n("0bc2"),s=n("0885"),a=n("5e01"),u=n("550a"),c=n("bd06"),l=n("e246"),h=n("f0a9"),p=n("3bed"),f=n("7f5e"),d=n("355b"),g=n("b96e"),y=n("1abf").f,_=n("0e07").f,v=n("b47c").f,m=n("b747"),b=n("2d67").trim,x="Number",E=s[x],I=a[x],N=E.prototype,C=s.TypeError,S=u("".slice),w=u("".charCodeAt),L=function(t){
      var e=d(t,"number");return"bigint"==typeof e?e:O(e);
    },O=function(t){
      var e,n,i,r,o,s,a,u,c=d(t,"number");if(f(c)) {
        throw C("Cannot convert a Symbol value to a number");
      }if("string"==typeof c&&c.length>2) {
        if(c=b(c),e=w(c,0),43===e||45===e){
          if(n=w(c,2),88===n||120===n) {
            return NaN;
          }
        }else if(48===e){
          switch(w(c,1)){
          case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c;
          }for(o=S(c,2),s=o.length,a=0;a<s;a++) {
            if(u=w(o,a),u<48||u>r) {
return NaN;
}
          }return parseInt(o,i);
        }
      }return+c;
    },T=c(x,!E(" 0o1")||!E("0b1")||E("+0x1")),R=function(t){
      return p(N,t)&&g((function(){
        m(t);
      }));
    },M=function(t){
      var e=arguments.length<1?0:E(L(t));return R(this)?h(Object(e),this,M):e;
    };M.prototype=N,T&&!r&&(N.constructor=M),i({ global:!0,constructor:!0,wrap:!0,forced:T },{ Number:M });var P=function(t,e){
    for(var n,i=o?y(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),r=0;i.length>r;r++) {
      l(e,n=i[r])&&!l(t,n)&&v(t,n,_(e,n));
    }
  };r&&I&&P(a[x],I),(T||r)&&P(a[x],E);
},e0a3:function(t,e){
  t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff";
},e521:function(t,e,n){
  var i=n("d423"),r=n("9b24"),o=n("9f5e"),s=n("bbca"),a=n("aab1"),u=TypeError;t.exports=function(t,e){
    var n=arguments.length<2?a(t):e;if(r(n)) {
      return o(i(n,t));
    }throw u(s(t)+" is not iterable");
  };
},eafe:function(t,e,n){
  "use strict";var i=n("67b2"),r=n("2d67").trim,o=n("84f4");i({ target:"String",proto:!0,forced:o("trim") },{ trim:function(){
    return r(this);
  } });
},ebb5:function(t,e,n){},efec:function(t,e,n){
  var i=n("1a2d"),r=n("cb2d"),o=n("51eb"),s=n("b622"),a=s("toPrimitive"),u=Date.prototype;i(u,a)||r(u,a,o);
},f0a9:function(t,e,n){
  var i=n("db82"),r=n("7942"),o=n("a91c");t.exports=function(t,e,n){
    var s,a;return o&&i(s=e.constructor)&&s!==n&&r(a=s.prototype)&&a!==n.prototype&&o(t,a),t;
  };
},f0c9:function(t,e,n){
  "use strict";var i=n("b50c"),r=n("d423"),o=n("550a"),s=n("a7af"),a=n("b96e"),u=n("9f5e"),c=n("db82"),l=n("9ce1"),h=n("85c6"),p=n("5aeb"),f=n("cbe0"),d=n("b481"),g=n("9e9c"),y=n("b96a"),_=n("4caf"),v=n("fc4c"),m=n("49be"),b=m("replace"),x=Math.max,E=Math.min,I=o([].concat),N=o([].push),C=o("".indexOf),S=o("".slice),w=function(t){
      return void 0===t?t:String(t);
    },L=function(){
      return"$0"==="a".replace(/./,"$0");
    }(),O=function(){
      return!!/./[b]&&""===/./[b]("a","$0");
    }(),T=!a((function(){
      var t=/./;return t.exec=function(){
        var t=[];return t.groups={ a:"7" },t;
      },"7"!=="".replace(t,"$<a>");
    }));s("replace",(function(t,e,n){
    var o=O?"$":"$0";return[ function(t,n){
      var i=d(this),o=l(t)?void 0:y(t,b);return o?r(o,t,i,n):r(e,f(i),t,n);
    },function(t,r){
      var s=u(this),a=f(t);if("string"==typeof r&&-1===C(r,o)&&-1===C(r,"$<")){
        var l=n(e,s,a,r);if(l.done) {
          return l.value;
        }
      }var d=c(r);d||(r=f(r));var y=s.global;if(y){
        var m=s.unicode;s.lastIndex=0;
      }var b=[];while(1){
        var L=v(s,a);if(null===L) {
          break;
        }if(N(b,L),!y) {
          break;
        }var O=f(L[0]);""===O&&(s.lastIndex=g(a,p(s.lastIndex),m));
      }for(var T="",R=0,M=0;M<b.length;M++){
        L=b[M];for(var P=f(L[0]),D=x(E(h(L.index),a.length),0),A=[],F=1;F<L.length;F++) {
          N(A,w(L[F]));
        }var $=L.groups;if(d){
          var k=I([ P ],A,D,a);void 0!==$&&N(k,$);var G=f(i(r,void 0,k));
        }else {
          G=_(P,a,D,A,$,r);
        }D>=R&&(T+=S(a,R,D)+G,R=D+P.length);
      }return T+S(a,R);
    } ];
  }),!T||!L||O);
},f196:function(t,e,n){
  "use strict";var i=n("67b2"),r=n("d423"),o=n("550a"),s=n("b481"),a=n("db82"),u=n("9ce1"),c=n("c749"),l=n("cbe0"),h=n("b96a"),p=n("a32c"),f=n("4caf"),d=n("49be"),g=n("02e2"),y=d("replace"),_=TypeError,v=o("".indexOf),m=o("".replace),b=o("".slice),x=Math.max,E=function(t,e,n){
    return n>t.length?-1:""===e?n:v(t,e,n);
  };i({ target:"String",proto:!0 },{ replaceAll:function(t,e){
    var n,i,o,d,I,N,C,S,w,L=s(this),O=0,T=0,R="";if(!u(t)){
      if(n=c(t),n&&(i=l(s(p(t))),!~v(i,"g"))) {
        throw _("`.replaceAll` does not allow non-global regexes");
      }if(o=h(t,y),o) {
        return r(o,t,L,e);
      }if(g&&n) {
        return m(l(L),t,e);
      }
    }d=l(L),I=l(t),N=a(e),N||(e=l(e)),C=I.length,S=x(1,C),O=E(d,I,0);while(-1!==O) {
      w=N?l(e(I,O,d)):f(I,d,O,[],void 0,e),R+=b(d,T,O)+w,T=O+C,O=E(d,I,O+S);
    }return T<d.length&&(R+=b(d,T)),R;
  } });
},f74c:function(t,e){
  t.exports=Object.is||function(t,e){
    return t===e?0!==t||1/t===1/e:t!=t&&e!=e;
  };
},fc4c:function(t,e,n){
  var i=n("d423"),r=n("9f5e"),o=n("db82"),s=n("2750"),a=n("658c"),u=TypeError;t.exports=function(t,e){
    var n=t.exec;if(o(n)){
      var c=i(n,t,e);return null!==c&&r(c),c;
    }if("RegExp"===s(t)) {
      return i(a,t,e);
    }throw u("RegExp#exec called on incompatible receiver");
  };
},ffdd:function(t,e,n){
  "use strict";n("a7ce");
} }]);
//# sourceMappingURL=chunk-687595c6.ed48223e.js.map