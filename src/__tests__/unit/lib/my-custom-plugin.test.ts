import {MyCustomPlugin} from '../../../lib/my-custom-plugin';
import {newYourGlobalConfig} from '../../../lib/my-custom-plugin/types';

describe('lib/my-custom-plugin: ', () => {
  describe('MyCustomPlugin(): ', () => {
    it('has metadata field.', () => {
      const globalConfig = newYourGlobalConfig('http://localhost:9090');
      const pluginInstance = MyCustomPlugin(globalConfig);

      expect(pluginInstance).toHaveProperty('metadata');
      expect(pluginInstance).toHaveProperty('execute');
      expect(pluginInstance.metadata).toHaveProperty('kind');
      expect(typeof pluginInstance.execute).toBe('function');
    });

    describe('execute(): ', () => {
      it('applies logic on provided inputs array.', async () => {
        const globalConfig = newYourGlobalConfig('http://localhost:9090');
        const pluginInstance = MyCustomPlugin(globalConfig);
        const inputs = [{}];

        const response = await pluginInstance.execute(inputs, {});
        expect(response).toEqual(inputs);
      });
    });
  });
});
