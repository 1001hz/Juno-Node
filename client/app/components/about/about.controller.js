class AboutController {
  constructor() {
    this.name = 'about';
    console.log(this.user);
  }

  foo() {
    console.log('Called from child');
  }
}
export default AboutController;
