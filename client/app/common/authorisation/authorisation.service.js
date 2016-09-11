class AuthorisationService {

  constructor($rootScope, $state) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.principal = null;
  }

  isAuthenticated() {
    var self = this;
    if(self.principal){
      return true;
    }
    else {
      return false;
    }
  }

  authenticate() {

    //var self = this;
    //return new Promise(
    //  function(resolve, reject){
    //    if(self.principal){
    //      resolve();
    //    }
    //    else {
    //      resolve(self.$state.target('login'));
    //    }
    //  }
    //);
  }

  authorise(roles) {
    var self = this;
    return new Promise(
      function(resolve, reject){
        if(roles.indexOf(self.principal.type) !== -1){
          resolve();
        }
        else {
          reject();
        }
      }
    );
  }

  getUser() {
    var self = this;
    return self.principal;
  }

  login() {
    var self = this;
    return new Promise(
      function(resolve, reject){
        self.principal = {
          name: 'John',
          type: 'user'
        };
        resolve();
        self.$state.go('app.home');
      }
    );

  }

}
AuthorisationService.$inject = ['$rootScope', '$state'];
export default AuthorisationService;
