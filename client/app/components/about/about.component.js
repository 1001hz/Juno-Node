import template from './about.html';
import controller from './about.controller';
import './about.scss';

let aboutComponent = {
  restrict: 'E',
  bindings: {
    user: '<'
  },
  template,
  controller
};

export default aboutComponent;
