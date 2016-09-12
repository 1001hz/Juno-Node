import template from './login.html';
import controller from './login.controller.js';
import './login.scss';

let loginComponent = {
  restrict: 'E',
  bindings: {
    credentials: '=',
    login: '&',
    error: '<'
  },
  template,
  controller
};

export default loginComponent;
