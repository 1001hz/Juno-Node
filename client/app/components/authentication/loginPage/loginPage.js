import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginPageComponent from './loginPage.component.js';

let loginPageModule = angular.module('loginPage', [
  uiRouter
])

.component('loginPage', loginPageComponent)

.name;

export default loginPageModule;
