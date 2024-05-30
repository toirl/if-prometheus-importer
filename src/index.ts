import {MyCustomPlugin} from './lib';

export * from './lib';

async function runPlugin() {
  const newModel = MyCustomPlugin({});
  const usage = await newModel.execute([
    {
      timestamp: '2021-01-01T00:00:00Z',
      duration: '15s',
      'cpu-util': 34,
    },
    {
      timestamp: '2021-01-01T00:00:15Z',
      duration: '15s',
      'cpu-util': 12,
    },
  ]);

  console.log(usage);
}

runPlugin();
