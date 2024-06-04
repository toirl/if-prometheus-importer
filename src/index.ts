import {MyCustomPlugin} from './lib';
import {newYourGlobalConfig} from './lib/my-custom-plugin/types';

export * from './lib';

async function runPlugin() {
  const globalConfig = newYourGlobalConfig('http://localhost:9090');
  const newModel = MyCustomPlugin(globalConfig);
  const usage = await newModel.execute([]);
  console.log(usage);
}

runPlugin();
