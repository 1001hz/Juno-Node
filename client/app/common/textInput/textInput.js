import angular from 'angular';
import uiRouter from 'angular-ui-router';
import textInputComponent from './textInput.component.js';

let textInputModule = angular.module('textInput', [
  uiRouter
])

.component('textInput', textInputComponent)

.name;

export default textInputModule;
