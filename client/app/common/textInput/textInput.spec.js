import TextInputModule from './textInput'
import TextInputController from './textInput.controller.js';
import TextInputComponent from './textInput.component.js';
import TextInputTemplate from './textInput.html';

describe('TextInput', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TextInputModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TextInputController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TextInputTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TextInputComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TextInputTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TextInputController);
      });
  });
});
