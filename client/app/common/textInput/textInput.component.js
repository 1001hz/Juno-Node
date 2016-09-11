import template from './textInput.html';
import controller from './textInput.controller.js';
import './textInput.scss';

let textInputComponent = {
  restrict: 'E',
  bindings: {
    placeholder: '@',
    myValue: '=',
    validationError: '<'
  },
  template,
  controller
};

export default textInputComponent;
