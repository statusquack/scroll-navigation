!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(1),i=function(){function t(t){this.root=t,this.root.style.scrollBehavior="smooth",this.refreshChildren(),this.initOnScrollListener(),this.initOnWindowSizeChangeListener(),this.initOnScrollEndListener(),console.log(this.children)}return t.prototype.refreshChildren=function(){this.children=Array.from(this.root.querySelectorAll("[data-component=scroll-navigation-item]")).filter(function(t){return"scroll-navigation-item"===t.getAttribute("data-component")}),this.refreshDots()},t.prototype.refreshDots=function(){var t=this;this.dotsRoot||(this.dotsRoot=document.createElement("div"),this.dotsRoot.setAttribute("data-component","scroll-navigation-dots")),this.dotsChildren=this.children.map(function(e,o){var n=document.createElement("div");return n.setAttribute("data-component","scroll-navigation-dot"),n.addEventListener("click",function(){t.snapToSlide(o)}),t.dotsRoot.appendChild(n),n}),this.root.appendChild(this.dotsRoot)},t.prototype.setDotIndex=function(t){this.currentIndex!==t&&(this.dotsChildren[this.currentIndex||0].removeAttribute("data-scroll-navigation-state"),this.dotsChildren[t].setAttribute("data-scroll-navigation-state","active"),this.currentIndex=t)},t.prototype.initOnScrollEndListener=function(){var t=this;n.onScrollEndListener(function(){console.log("onScrollEndListener"),t.snapToSlide()})},t.prototype.initOnWindowSizeChangeListener=function(){var t=this;addEventListener("resize",function(){t.snapToSlide()})},t.prototype.initOnScrollListener=function(){var t=this;this.setDotIndex(this.getCurrentIndex()),window.addEventListener("scroll",function(){t.setDotIndex(t.getCurrentIndex())})},t.prototype.snapToSlide=function(t){var e=t?this.children[t]:this.getElementInTheMiddle();e&&(e.offsetHeight<this.root.offsetHeight?this.root.scrollTo({top:e.offsetTop+e.offsetHeight/2-this.root.offsetHeight/2}):e.offsetTop>this.root.scrollTop&&e.offsetTop+e.offsetHeight<this.root.scrollTop+this.root.offsetHeight||(e.offsetTop>this.root.scrollTop?this.root.scrollTo({top:e.offsetTop}):e.offsetTop+e.offsetHeight<this.root.scrollTop+this.root.offsetHeight&&this.root.scrollTo({top:e.offsetTop+e.offsetHeight-this.root.offsetHeight})))},t.prototype.getElementInTheMiddle=function(){var t=this.root.scrollTop+this.root.offsetHeight/2,e=null;return this.children.every(function(o){return!(o.offsetTop<t&&o.offsetTop+o.offsetHeight>t)||(e=o,!1)}),e},t.prototype.getCurrentIndex=function(){var t=this.root.scrollTop+this.root.offsetHeight/2,e=0;return this.children.every(function(o,n){return!(o.offsetTop<t&&o.offsetTop+o.offsetHeight>t)||(e=n,!1)}),e},t}();e.ScrollNavigation=i},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.onScrollEndListener=function(t){var e;t&&"function"==typeof t&&window.addEventListener("scroll",function(){window.clearTimeout(e),e=window.setTimeout(function(){t()},66)},!1)}}]);