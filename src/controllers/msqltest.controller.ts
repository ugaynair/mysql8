import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Mysql8Model} from '../models';
import {Mysql8ModelRepository} from '../repositories';

export class MsqltestController {
  constructor(
    @repository(Mysql8ModelRepository)
    public mysql8ModelRepository : Mysql8ModelRepository,
  ) {}

  @get('/mysql8test/{ccardno}')
  async getContactDetails(
    @param.path.number('ccardno') cardno: number,
  ): Promise<any> {
    console.log('Begin repository function call');

    console.log('Inside get request before call to repository.. ');
    return this.mysql8ModelRepository.getCCard3Headers(cardno);
  }


  // @post('/mysql8test')
  // @response(200, {
  //   description: 'Mysql8Model model instance',
  //   content: {'application/json': {schema: getModelSchemaRef(Mysql8Model)}},
  // })
  // async create(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Mysql8Model, {
  //           title: 'NewMysql8Model',
            
  //         }),
  //       },
  //     },
  //   })
  //   mysql8Model: Mysql8Model,
  // ): Promise<Mysql8Model> {
  //   return this.mysql8ModelRepository.create(mysql8Model);
  // }

  // @get('/mysql8test/count')
  // @response(200, {
  //   description: 'Mysql8Model model count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async count(
  //   @param.where(Mysql8Model) where?: Where<Mysql8Model>,
  // ): Promise<Count> {
  //   return this.mysql8ModelRepository.count(where);
  // }

  // @get('/mysql8test')
  // @response(200, {
  //   description: 'Array of Mysql8Model model instances',
  //   content: {
  //     'application/json': {
  //       schema: {
  //         type: 'array',
  //         items: getModelSchemaRef(Mysql8Model, {includeRelations: true}),
  //       },
  //     },
  //   },
  // })
  // async find(
  //   @param.filter(Mysql8Model) filter?: Filter<Mysql8Model>,
  // ): Promise<Mysql8Model[]> {
  //   return this.mysql8ModelRepository.find(filter);
  // }

  // @patch('/mysql8test')
  // @response(200, {
  //   description: 'Mysql8Model PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Mysql8Model, {partial: true}),
  //       },
  //     },
  //   })
  //   mysql8Model: Mysql8Model,
  //   @param.where(Mysql8Model) where?: Where<Mysql8Model>,
  // ): Promise<Count> {
  //   return this.mysql8ModelRepository.updateAll(mysql8Model, where);
  // }

  // @get('/mysql8test/{id}')
  // @response(200, {
  //   description: 'Mysql8Model model instance',
  //   content: {
  //     'application/json': {
  //       schema: getModelSchemaRef(Mysql8Model, {includeRelations: true}),
  //     },
  //   },
  // })
  // async findById(
  //   @param.path.number('id') id: number,
  //   @param.filter(Mysql8Model, {exclude: 'where'}) filter?: FilterExcludingWhere<Mysql8Model>
  // ): Promise<Mysql8Model> {
  //   return this.mysql8ModelRepository.findById(id, filter);
  // }

  // @patch('/mysql8test/{id}')
  // @response(204, {
  //   description: 'Mysql8Model PATCH success',
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Mysql8Model, {partial: true}),
  //       },
  //     },
  //   })
  //   mysql8Model: Mysql8Model,
  // ): Promise<void> {
  //   await this.mysql8ModelRepository.updateById(id, mysql8Model);
  // }

  // @put('/mysql8test/{id}')
  // @response(204, {
  //   description: 'Mysql8Model PUT success',
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() mysql8Model: Mysql8Model,
  // ): Promise<void> {
  //   await this.mysql8ModelRepository.replaceById(id, mysql8Model);
  // }

  // @del('/mysql8test/{id}')
  // @response(204, {
  //   description: 'Mysql8Model DELETE success',
  // })
  // async deleteById(@param.path.number('id') id: number): Promise<void> {
  //   await this.mysql8ModelRepository.deleteById(id);
  // }
}
