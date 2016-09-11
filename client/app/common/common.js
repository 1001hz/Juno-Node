import angular from 'angular';
import Navbar from './navbar/navbar';
import Alert from './alert/alert';
import Album from './album/album';
import Api from './api/api';
import Example from './example/example';
import Loader from './loader/loader';
import Authorisation from './authorisation/authorisation';
import TextInput from './textInput/textInput';

let commonModule = angular.module('app.common', [
  Navbar,
  Alert,
  Album,
  Api,
  Loader,
  Authorisation,
  Example,
  TextInput
])

.name;

export default commonModule;
