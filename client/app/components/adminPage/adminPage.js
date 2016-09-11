import angular from 'angular';
import uiRouter from 'angular-ui-router';
import adminPageComponent from './adminPage.component';

let adminPageModule = angular.module('adminPage', [
  uiRouter
])

.component('adminPage', adminPageComponent)

.name;

export default adminPageModule;
