import template from './homePage.html';
import controller from './homePage.controller';
import './homePage.scss';

let homePageComponent = {
  restrict: 'E',
  bindings: {
    user: '<'
  },
  template,
  controller
};

export default homePageComponent;
