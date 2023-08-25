import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Mysql8Model extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  BBCLID?: number;

  @property({
    type: 'string',
    required: true,
  })
  BBCLRUNID: string;

  @property({
    type: 'string',
    required: true,
  })
  BBCL_CIF_KEY: string;

  @property({
    type: 'string',
    required: true,
  })
  FBE_ACCOUNT_ID: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mysql8Model>) {
    super(data);
  }
}

export interface Mysql8ModelRelations {
  // describe navigational properties here
}

export type Mysql8ModelWithRelations = Mysql8Model & Mysql8ModelRelations;
