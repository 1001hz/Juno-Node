import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homePageComponent from './homePage.component';

let homePageModule = angular.module('homePage', [
  uiRouter
])

.component('homePage', homePageComponent)

.name;

export default homePageModule;
