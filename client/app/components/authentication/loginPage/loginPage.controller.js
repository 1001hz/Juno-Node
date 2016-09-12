class LoginPageController {
  constructor(AuthorisationService) {
    this.name = 'loginPage';
    this.credentials = {
      username: '',
      password: ''
    };
    this.error = '';
    this.AuthorisationService = AuthorisationService;
  }

  login() {
    var self = this;
    this.AuthorisationService.login(this.credentials)
      .then(function(){

      })
      .catch(function(error){
        self.error = error;
      });
  }
}
LoginPageController.$inject = ['AuthorisationService'];
export default LoginPageController;
