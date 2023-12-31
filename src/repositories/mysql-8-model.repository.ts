import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Mysql8DataSource} from '../datasources';
import {Mysql8Model, Mysql8ModelRelations} from '../models';

export class Mysql8ModelRepository extends DefaultCrudRepository<
  Mysql8Model,
  typeof Mysql8Model.prototype.BBCLID,
  Mysql8ModelRelations
> {
  constructor(
    @inject('datasources.mysql8') dataSource: Mysql8DataSource,
  ) {
    super(Mysql8Model, dataSource);
  }

  async getCCard3Headers(ccardno: number): Promise<any> {
    console.log('Begin repository function call');
    // MySQL Connection
    const sqlQuery = `
    select CCARDNO, STATDATE
    from BBL_CCARD3HDR_DAILY
    where ccardno = ${ccardno};
    `;
    
    console.log('Inside MYSQL Test Repository before datasource execution');
    console.log('ID-CCardno is: ' + ccardno);

    console.log('Connected: ' + this.dataSource.connected);
    return this.dataSource.execute(sqlQuery);
  }

}
