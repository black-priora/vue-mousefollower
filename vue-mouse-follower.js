(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global.VueMouseFollower = factory(global.vue));
}(this, (function (vue) { 'use strict';

  vue = vue && vue.hasOwnProperty('default') ? vue['default'] : vue;

  var defaultFriction = 30;

  var moveData = {
    lFollowX: 0,
    lFollowY: 0,
    x: 0,
    y: 0
  };

  var element = void 0,
      friction = void 0;

  function moveBackground() {
    moveData.x += (moveData.lFollowX - moveData.x) / friction;
    moveData.y += (moveData.lFollowY - moveData.y) / friction;
    element.style.transform = 'translate(' + moveData.x + 'px, ' + moveData.y + 'px) scale(1.1)';
    window.requestAnimationFrame(moveBackground);
  }

  var MouseFollowerDirective = {
    bind: function bind(el, binding, vnode) {
      if (el) {
        element = el;
        friction = binding.arg ? binding.arg : defaultFriction;

        element.style.backgroundPosition = 'cover';
        element.style.overflow = 'hidden';

        window.addEventListener('mousemove', function (e) {
          var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
          var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
          moveData.lFollowX = 20 * lMouseX / 100; // 100 : 12 = lMouxeX : lFollow
          moveData.lFollowY = 10 * lMouseY / 100;
        });
        moveBackground();
      }
    }
  };

  var VueMouseFollower = {
    install: function install(Vue, options) {
      Vue.directive('mf', MouseFollowerDirective);
      Vue.directive('mousefollower', MouseFollowerDirective);
    }
  };

  return VueMouseFollower;

})));
