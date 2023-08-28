import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'mysql8',
  connector: 'mysql',
  url: '',
  host: '172.16.7.101',
  port: 3306,
  user: 'obsusr',
  password: 'P@ssw0rd1',
  database: 'blb'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Mysql8DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mysql8';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mysql8', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
