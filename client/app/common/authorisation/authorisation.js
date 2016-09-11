import angular from 'angular';
import AuthorisationService from './authorisation.service.js';

let authorisationModule = angular.module('authorisation', [])

.service('AuthorisationService', AuthorisationService)

.name;

export default authorisationModule;
