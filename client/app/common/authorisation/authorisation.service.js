class AuthorisationService {

  constructor($rootScope, $state, $q) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$q = $q;
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

  login(credentials) {
    var self = this;
    var defer = this.$q.defer();

    //TODO: make server call
    if(credentials.username === 'John' && credentials.password === 'pass'){
      self.principal = {
        name: 'John',
        type: 'user'
      };
      defer.resolve();
      self.$state.go('app.home');
    }
    else{
      defer.reject("Wrong way");
    }

    return defer.promise;

  }

}
AuthorisationService.$inject = ['$rootScope', '$state', '$q'];
export default AuthorisationService;
