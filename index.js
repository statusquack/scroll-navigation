!function(t){var o={};function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var r in t)e.d(n,r,function(o){return t[o]}.bind(null,r));return n},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},e.p="",e(e.s=0)}([function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(1),r=function(){function t(t){this.root=t,this.root.style.scrollBehavior="smooth",this.refreshChildren(),this.initOnScrollListener(),this.initOnWindowSizeChangeListener(),this.initOnScrollEndListener(),console.log(this.children)}return t.prototype.refreshChildren=function(){this.children=Array.from(this.root.querySelectorAll("[data-component=scroll-navigation-item]")).filter(function(t){return"scroll-navigation-item"===t.getAttribute("data-component")})},t.prototype.initOnScrollEndListener=function(){var t=this;n.onScrollEndListener(function(){console.log("onScrollEndListener"),t.snapToSlide()})},t.prototype.initOnWindowSizeChangeListener=function(){var t=this;addEventListener("resize",function(){t.snapToSlide()})},t.prototype.initOnScrollListener=function(){this.root.addEventListener("scroll",function(){})},t.prototype.snapToSlide=function(){var t=this.getElementInTheMiddle();t&&(t.offsetHeight<this.root.offsetHeight?this.root.scrollTo({top:t.offsetTop+t.offsetHeight/2-this.root.offsetHeight/2}):t.offsetTop>this.root.scrollTop&&t.offsetTop+t.offsetHeight<this.root.scrollTop+this.root.offsetHeight||(t.offsetTop>this.root.scrollTop?this.root.scrollTo({top:t.offsetTop}):t.offsetTop+t.offsetHeight<this.root.scrollTop+this.root.offsetHeight&&this.root.scrollTo({top:t.offsetTop+t.offsetHeight-this.root.offsetHeight})))},t.prototype.getElementInTheMiddle=function(){var t=this.root.scrollTop+this.root.offsetHeight/2,o=null;return this.children.every(function(e){return!(e.offsetTop<t&&e.offsetTop+e.offsetHeight>t)||(o=e,!1)}),o},t}();o.ScrollNavigation=r},function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.onScrollEndListener=function(t){var o;t&&"function"==typeof t&&window.addEventListener("scroll",function(){window.clearTimeout(o),o=window.setTimeout(function(){t()},200)},!1)}}]);