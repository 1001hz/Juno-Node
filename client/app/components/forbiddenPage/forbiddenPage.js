import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forbiddenPageComponent from './forbiddenPage.component';

let forbiddenPageModule = angular.module('forbiddenPage', [
  uiRouter
])

.component('forbiddenPage', forbiddenPageComponent)

.name;

export default forbiddenPageModule;
