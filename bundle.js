!function(e){function t(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+x+".hot-update.js",t.appendChild(n)}function n(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var t=new XMLHttpRequest,n=p.p+""+x+".hot-update.json";t.open("GET",n,!0),t.timeout=1e4,t.send(null)}catch(o){return e(o)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)e(new Error("Manifest request to "+n+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)e(new Error("Manifest request to "+n+" failed."));else{try{var o=JSON.parse(t.responseText)}catch(r){return void e(r)}e(null,o)}}}function o(e){function t(e,t){"ready"===H&&i("prepare"),M++,p.e(e,function(){function n(){M--,"prepare"===H&&(j[e]||d(e),0===M&&0===R&&l())}try{t.call(null,o)}finally{n()}})}var n=C[e];if(!n)return p;var o=function(t){return n.hot.active?C[t]?(C[t].parents.indexOf(e)<0&&C[t].parents.push(e),n.children.indexOf(t)<0&&n.children.push(t)):k=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),k=[]),p(t)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&(h?Object.defineProperty(o,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(r)):o[r]=p[r]);return h?Object.defineProperty(o,"e",{enumerable:!0,value:t}):o.e=t,o}function r(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,n){if("undefined"==typeof e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=n;else t._acceptedDependencies[e]=n},decline:function(e){if("undefined"==typeof e)t._selfDeclined=!0;else if("number"==typeof e)t._declinedDependencies[e]=!0;else for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:s,apply:f,status:function(e){return e?void O.push(e):H},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var t=O.indexOf(e);t>=0&&O.splice(t,1)},data:y[e]};return t}function i(e){H=e;for(var t=0;t<O.length;t++)O[t].call(null,e)}function a(e){var t=+e+""===e;return t?+e:e}function s(e,t){if("idle"!==H)throw new Error("check() is only allowed in idle status");"function"==typeof e?(w=!1,t=e):(w=e,t=t||function(e){if(e)throw e}),i("check"),n(function(e,n){if(e)return t(e);if(!n)return i("idle"),void t(null,null);_={},S={},j={};for(var o=0;o<n.c.length;o++)S[n.c[o]]=!0;v=n.h,i("prepare"),g=t,b={};var r=0;d(r),"prepare"===H&&0===M&&0===R&&l()})}function c(e,t){if(S[e]&&_[e]){_[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(b[n]=t[n]);0===--R&&0===M&&l()}}function d(e){S[e]?(_[e]=!0,R++,t(e)):j[e]=!0}function l(){i("ready");var e=g;if(g=null,e)if(w)f(w,e);else{var t=[];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&t.push(a(n));e(null,t)}}function f(t,n){function o(e){for(var t=[e],n={},o=t.slice();o.length>0;){var i=o.pop(),e=C[i];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+i);if(0===i)return;for(var a=0;a<e.parents.length;a++){var s=e.parents[a],c=C[s];if(c.hot._declinedDependencies[i])return new Error("Aborted because of declined dependency: "+i+" in "+s);t.indexOf(s)>=0||(c.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),r(n[s],[i])):(delete n[s],t.push(s),o.push(s)))}}}return[t,n]}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];e.indexOf(o)<0&&e.push(o)}}if("ready"!==H)throw new Error("apply() is only allowed in ready status");"function"==typeof t?(n=t,t={}):t&&"object"==typeof t?n=n||function(e){if(e)throw e}:(t={},n=n||function(e){if(e)throw e});var s={},c=[],d={};for(var l in b)if(Object.prototype.hasOwnProperty.call(b,l)){var f=a(l),u=o(f);if(!u){if(t.ignoreUnaccepted)continue;return i("abort"),n(new Error("Aborted because "+f+" is not accepted"))}if(u instanceof Error)return i("abort"),n(u);d[f]=b[f],r(c,u[0]);for(var f in u[1])Object.prototype.hasOwnProperty.call(u[1],f)&&(s[f]||(s[f]=[]),r(s[f],u[1][f]))}for(var h=[],m=0;m<c.length;m++){var f=c[m];C[f]&&C[f].hot._selfAccepted&&h.push({module:f,errorHandler:C[f].hot._selfAccepted})}i("dispose");for(var g=c.slice();g.length>0;){var f=g.pop(),w=C[f];if(w){for(var O={},R=w.hot._disposeHandlers,M=0;M<R.length;M++){var j=R[M];j(O)}y[f]=O,w.hot.active=!1,delete C[f];for(var M=0;M<w.children.length;M++){var _=C[w.children[M]];if(_){var S=_.parents.indexOf(f);S>=0&&_.parents.splice(S,1)}}}}for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f))for(var w=C[f],E=s[f],M=0;M<E.length;M++){var U=E[M],S=w.children.indexOf(U);S>=0&&w.children.splice(S,1)}i("apply"),x=v;for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(e[f]=d[f]);var z=null;for(var f in s)if(Object.prototype.hasOwnProperty.call(s,f)){for(var w=C[f],E=s[f],A=[],m=0;m<E.length;m++){var U=E[m],j=w.hot._acceptedDependencies[U];A.indexOf(j)>=0||A.push(j)}for(var m=0;m<A.length;m++){var j=A[m];try{j(s)}catch(D){z||(z=D)}}}for(var m=0;m<h.length;m++){var L=h[m],f=L.module;k=[f];try{p(f)}catch(D){if("function"==typeof L.errorHandler)try{L.errorHandler(D)}catch(D){z||(z=D)}else z||(z=D)}}return z?(i("fail"),n(z)):(i("idle"),void n(null,c))}function p(t){if(C[t])return C[t].exports;var n=C[t]={exports:{},id:t,loaded:!1,hot:r(t),parents:k,children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.loaded=!0,n.exports}var u=this.webpackHotUpdate;this.webpackHotUpdate=function(e,t){c(e,t),u&&u(e,t)};var h=!1;try{Object.defineProperty({},"x",{get:function(){}}),h=!0}catch(m){}var g,b,v,w=!0,x="b263723ad6a9d92e22f3",y={},k=[],O=[],H="idle",R=0,M=0,j={},_={},S={},C={};return p.m=e,p.c=C,p.p="",p.h=function(){return x},o(0)(0)}([function(e,t,n){n(1),e.exports=n(3)},function(e,t,n){var o,r=function(){return o.indexOf(n.h())>=0},i=function s(){e.hot.check(function(t,o){return t?void(e.hot.status()in{abort:1,fail:1}?(console.warn("[HMR] Cannot check for update. Need to do a full reload!"),console.warn("[HMR] "+t.stack||t.message)):console.warn("[HMR] Update check failed: "+t.stack||t.message)):o?void e.hot.apply({ignoreUnaccepted:!0},function(t,i){return t?void(e.hot.status()in{abort:1,fail:1}?(console.warn("[HMR] Cannot apply update. Need to do a full reload!"),console.warn("[HMR] "+t.stack||t.message)):console.warn("[HMR] Update failed: "+t.stack||t.message)):(r()||s(),n(2)(o,i),void(r()&&console.log("[HMR] App is up to date.")))}):(console.warn("[HMR] Cannot find update. Need to do a full reload!"),void console.warn("[HMR] (Probably because of restarting the webpack-dev-server)"))})},a=window.addEventListener?function(e,t){window.addEventListener(e,t,!1)}:function(e,t){window.attachEvent("on"+e,t)};a("message",function(t){"string"==typeof t.data&&0===t.data.indexOf("webpackHotUpdate")&&(o=t.data,r()||"idle"!==e.hot.status()||(console.log("[HMR] Checking for updates on the server..."),i()))}),console.log("[HMR] Waiting for update signal from WDS...")},function(e,t){e.exports=function(e,t){var n=e.filter(function(e){return t&&t.indexOf(e)<0});n.length>0&&(console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),n.forEach(function(e){console.warn("[HMR]  - "+e)})),t&&0!==t.length?(console.log("[HMR] Updated modules:"),t.forEach(function(e){console.log("[HMR]  - "+e)})):console.log("[HMR] Nothing hot updated.")}},function(e,t,n){n(4);var o=new Vue({el:"#app",data:{loading:!1,userInfo:null,message:"Hello Vue.js!"},created:function(){(new WOW).init(),$.ajax({type:"get",url:"assets/resume.json",success:function(e){o.userInfo=e,o.loading=!0}})},compiled:function(){}})},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.id,o,""]]);var r=n(7)(o,{});o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(5,function(){var t=n(5);"string"==typeof t&&(t=[[e.id,t,""]]),r(t)}),e.hot.dispose(function(){r()})},function(e,t,n){t=e.exports=n(6)(),t.push([e.id,"address,body,div,header,html,p,section{box-sizing:border-box;margin:0;padding:0}html{font-size:14px;min-height:100%}body{font-size:1rem;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#2b2c2c;color:#e5da59}h2{font-size:4rem;font-weight:200;margin:0 0 1rem}.img-responsive{max-width:100%;height:auto;display:block}.text-center{text-align:center}.text-light{color:#a5e12d}.hide{display:none}.progress{position:relative;background:#404242;height:5px}.progress .progress-bar{height:100%;background:#a5e12d}.container{max-width:1200px;margin:0 auto}.container .row{display:flex;flex-flow:row wrap}@media (min-width:768px){.col-md-5{width:41.66%}.col-md-6{width:50%}.col-md-7{width:58.33%}}@media (min-width:1200px){.col-lg-3{width:25%}.col-lg-4{width:33.33%}}@media (max-width:768px){[class*=col-lg],[class*=col-md]{width:100%}}.github{position:fixed;top:20px;right:20px;z-index:5}.github img{width:14px;vertical-align:middle;margin-right:5px}.github .github-button{font-size:14px;border:1px solid #d5d5d5;border-radius:3px;padding:3px 9px;color:#333;line-height:14px;text-shadow:0 1px 0 hsla(0,0%,100%,.9);background-color:#eee;background-image:-webkit-linear-gradient(top,#fcfcfc,#eee);background-image:linear-gradient(180deg,#fcfcfc,#eee);-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee')\";display:block;text-decoration:none}.github .github-button:hover{background-color:#ddd;background-image:-webkit-linear-gradient(top,#eee,#ddd);background-image:linear-gradient(180deg,#eee,#ddd);border-color:#ccc;-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd')\"}.github .github-button span{vertical-align:middle}.section-bg{position:absolute;width:50%;height:100%;z-index:1}.section-header-bg{background:#2b2c2c;left:0}.section-content-bg{background:#292a2a;left:50%}.section{position:relative}.section>.container{display:flex;flex-flow:row wrap}.section a{color:#e5da59;display:inline-block}.section a,.section a:hover{text-decoration:none}.section .header{width:30%;padding:4rem 5rem;z-index:2;background:#2b2c2c;text-align:right}.section .header .header-box{position:relative;height:100%;display:flex;justify-content:center;flex-direction:column}.section .header .title{color:#f8254b;font-size:1.5rem}.section .header .title small{font-size:1rem}.section .section-content{width:70%;padding:4rem 3rem 4rem 5rem;background:#292a2a;z-index:2}.section .section-content .content-box{position:relative;height:100%;display:flex;justify-content:center;flex-direction:column}.section .section-content .intro p{margin-bottom:1rem;line-height:2rem}.section-header .header,.section-header .section-content{height:100vh}.section-header .avatar{border-radius:20rem;max-width:200px;margin:0 auto;overflow:hidden}.section-header .name{font-size:2rem;font-weight:200;margin-top:1rem;margin-bottom:4rem}.section-header .name-slogan{position:relative;top:-2rem}.section-header .description{font-size:1.2rem;margin-bottom:2rem}.section-header .contact-info{position:absolute;bottom:0;left:0;width:100%;border-top:2px solid #404242}.section-header .contact-info h4{font-size:1rem;margin:1.5rem 0}.section-header .contact-info .info{line-height:1rem}.section-header address{font-style:normal;line-height:1rem}.experience{margin-left:2px;margin-top:1rem;padding-left:24px;border-left:2px solid #404242}.experience .item{position:relative;line-height:2rem;margin-top:-15px;margin-bottom:3rem}.experience .item:before{content:'';position:absolute;top:8px;left:-30px;background:#a5e12d;border-radius:5px;width:10px;height:10px;box-shadow:0 0 0 6px #2d2e2e}.experience .item .time{font-size:.8rem;color:#fff}.experience .item .title{font-size:1.2rem}.experience .item .description{color:#fff}.experience .item .content{text-indent:2rem}.skill .item{margin-bottom:2rem;padding-right:2rem}.skill .text-info{margin-bottom:1rem;font-size:1.2rem}.skill .num{display:inline-block;margin-right:1rem}.section:nth-child(even) .header,.section:nth-child(even) .section-header-bg{background:#292a2a}.section:nth-child(even) .section-content,.section:nth-child(even) .section-content-bg{background:#2b2c2c}.usually .item{margin-right:3rem;margin-bottom:1rem;line-height:2rem;display:inline-block}.usually .item h3{margin-top:.5rem;margin-bottom:.8rem;line-height:1rem}.contact{margin-bottom:2rem}.contact h4{margin-top:.3rem;margin-bottom:.8rem}.contact address{font-style:normal}@media (max-width:1120px){.section .header{width:100%;text-align:left}.section .section-content{width:100%}.section-header .header,.section-header .section-content{height:auto}.section-header .contact-info{position:relative}.section:nth-child(even) .header,.section:nth-child(even) .section-header-bg{background:#2b2c2c}.section:nth-child(even) .section-content,.section:nth-child(even) .section-content-bg{background:#292a2a}}@media (max-width:768px){.section .header,.section .section-content{padding:15px}.section-header .name-slogan{top:0}h2{font-size:2.5rem}}@media print{.col-md-6{width:50%}.no-print{display:none}.show-print-block{display:block!important;opacity:1!important}.section .section-content{padding:0 20px}}.inShow{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:inShow;animation-name:inShow}@-webkit-keyframes inShow{0%{-webkit-transform:translate3d(0,100%,0);transform:translateY(50px) scale(.9);visibility:visible;opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0) scale(1);opacity:1}}@keyframes inShow{0%{-webkit-transform:translate3d(0,100%,0);transform:translateY(50px) scale(.9);visibility:visible;opacity:0}to{-webkit-transform:translateZ(0);transform:translateZ(0) scale(1);opacity:1}}.progressShow{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:progressShow;animation-name:progressShow}@-webkit-keyframes progressShow{0%{width:0}}@keyframes progressShow{0%{width:0}}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=u[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(d(o.parts[i],t))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(d(o.parts[i],t));u[o.id]={id:o.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},o=0;o<e.length;o++){var r=e[o],i=r[0],a=r[1],s=r[2],c=r[3],d={css:a,media:s,sourceMap:c};n[i]?n[i].parts.push(d):t.push(n[i]={id:i,parts:[d]})}return t}function i(e,t){var n=g(),o=w[w.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function d(e,t){var n,o,r;if(t.singleton){var i=v++;n=b||(b=s(t)),o=l.bind(null,n,i,!1),r=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),o=p.bind(null,n),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),o=f.bind(null,n),r=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function l(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}var u={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},m=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,w=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=m()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=r(e);return o(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=u[s.id];c.refs--,i.push(c)}if(e){var d=r(e);o(d,t)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete u[c.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()}]);