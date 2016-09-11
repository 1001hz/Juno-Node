import angular from 'angular';
import ExampleService from './example.service.js';

let exampleModule = angular.module('example', [])

.service('ExampleService', ExampleService)

.name;

export default exampleModule;
