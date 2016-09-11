import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Navbar from './common/navbar/navbar';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])

  .run(['$state','AuthorisationService', '$transitions',
    function($state, AuthorisationService, $transitions)
    {
      // *** handle security ***
      // run this for any routes under app parent
      $transitions.onBefore({ to: 'app.*' }, function($transition$) {

        // check if logged in
        if(AuthorisationService.isAuthenticated()){

          // check if authorised to view this route
          return AuthorisationService.authorise($transition$.to().data.roles).catch(function(){

            // not authorised, redirect
            return $state.target('app.forbidden');

          });

        }
        else{
          // not logged in, redirect
          return $state.target('login');
        }
      });
    }
  ])

  .config(($locationProvider, $stateProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
      .state('app', {
        'abstract': true,
        resolve: {
          user: ['AuthorisationService',
            function(AuthorisationService) {
              return AuthorisationService.getUser();
            }
          ]
        },
        template: '<div><Navbar></Navbar><div ui-view /></div>'
      })
      .state('login', {
        url: '/',
        component: 'loginPage'
      })
      .state('app.forbidden', {
        parent: 'app',
        url: '/forbidden',
        data: {
          roles: ['user', 'admin']
        },
        component: 'forbiddenPage'
      })
      .state('app.home', {
        parent: 'app',
        url: '/home',
        data: {
          roles: ['user', 'admin']
        },
        component: 'homePage'
      })
      .state('app.admin', {
        parent: 'app',
        url: '/admin',
        data: {
          roles: ['admin']
        },
        component: 'adminPage'
      })
  })

  .component('app', AppComponent);
