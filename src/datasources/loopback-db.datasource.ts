import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'loopbackDB',
  connector: 'mongodb',
  url: 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
  host: 'localhost:27017',
  port: 27017,
  user: 'admin',
  password: '',
  database: 'MongoDB',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LoopbackDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'loopbackDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.loopbackDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
