class LoginPageController {
  constructor() {
    this.name = 'loginPage';
    this.credentials = {
      username: '',
      password: ''
    };
  }

  login() {
    console.log(this.credentials);
    this.validation
  }
}

export default LoginPageController;
