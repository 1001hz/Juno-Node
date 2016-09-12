import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginComponent from './login.component.js';

let loginModule = angular.module('login', [
  uiRouter
])

.component('login', loginComponent)

.name;

export default loginModule;
