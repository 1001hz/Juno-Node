import template from './profile.html';
import controller from './profile.controller';
import './profile.scss';

let profileComponent = {
  restrict: 'E',
  bindings: {
    parentName: '='
  },
  template,
  controller
};

export default profileComponent;
