import MouseFollowerDirective from './directive.js';

var VueMouseFollower = {
  install(Vue, options) {
    Vue.directive('mf', MouseFollowerDirective)
    Vue.directive('mousefollower', MouseFollowerDirective)
  }
};

export default VueMouseFollower;
