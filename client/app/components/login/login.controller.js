class LoginController {
  constructor(AuthorisationService) {
    this.name = 'login';
    this.AuthorisationService = AuthorisationService;
  }
  //login() {
  //  this.AuthorisationService.login()
  //  .then(function(){
  //
  //    })
  //  .catch(function(){
  //      console.log('Error logging in');
  //    });
  //}
}
LoginController.$inject = ['AuthorisationService'];
export default LoginController;
