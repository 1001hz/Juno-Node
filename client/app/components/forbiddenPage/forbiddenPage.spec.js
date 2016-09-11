import ForbiddenPageModule from './forbiddenPage'
import ForbiddenPageController from './forbiddenPage.controller';
import ForbiddenPageComponent from './forbiddenPage.component';
import ForbiddenPageTemplate from './forbiddenPage.html';

describe('ForbiddenPage', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForbiddenPageModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForbiddenPageController();
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
      expect(ForbiddenPageTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ForbiddenPageComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ForbiddenPageTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ForbiddenPageController);
      });
  });
});
