import { ComponentsTemplatesModule } from './components-templates.module';

describe('ComponentsTemplatesModule', () => {
  let componentsTemplatesModule: ComponentsTemplatesModule;

  beforeEach(() => {
    componentsTemplatesModule = new ComponentsTemplatesModule();
  });

  it('should create an instance', () => {
    expect(componentsTemplatesModule).toBeTruthy();
  });
});
