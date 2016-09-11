import angular from 'angular';
import About from './about/about';
import Profile from './profile/profile';
import LoginPage from './loginPage/loginPage';
import HomePage from './homePage/homePage';
import AdminPage from './adminPage/adminPage';
import ForbiddenPage from './forbiddenPage/forbiddenPage';
import Login from './login/login';

let componentModule = angular.module('app.components', [
  About,
  Profile,
  LoginPage,
  HomePage,
  AdminPage,
  ForbiddenPage,
  Login
])

.name;

export default componentModule;
