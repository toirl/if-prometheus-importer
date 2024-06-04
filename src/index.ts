import {MyCustomPlugin} from './lib';
import {YourGlobalConfig} from './lib/my-custom-plugin/types';

export * from './lib';

async function runPlugin() {
  const globalConfig: YourGlobalConfig = {
    url: 'http://localhost:9090',
  };
  const newModel = MyCustomPlugin(globalConfig);
  const usage = await newModel.execute([]);
  console.log(usage);
}

runPlugin();
