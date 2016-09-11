import template from './login.html';
import controller from './login.controller';
import './login.scss';

let loginComponent = {
  restrict: 'E',
  bindings: {
    credentials: '=',
    login: '&'
  },
  template,
  controller
};

export default loginComponent;
