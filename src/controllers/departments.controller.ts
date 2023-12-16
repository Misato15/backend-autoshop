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
import {Departments} from '../models';
import {DepartmentsRepository} from '../repositories';

export class DepartmentsController {
  constructor(
    @repository(DepartmentsRepository)
    public departmentsRepository : DepartmentsRepository,
  ) {}

  @post('/departments')
  @response(200, {
    description: 'Departments model instance',
    content: {'application/json': {schema: getModelSchemaRef(Departments)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departments, {
            title: 'NewDepartments',
            exclude: ['id'],
          }),
        },
      },
    })
    departments: Omit<Departments, 'id'>,
  ): Promise<Departments> {
    return this.departmentsRepository.create(departments);
  }

  @get('/departments/count')
  @response(200, {
    description: 'Departments model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Departments) where?: Where<Departments>,
  ): Promise<Count> {
    return this.departmentsRepository.count(where);
  }

  @get('/departments')
  @response(200, {
    description: 'Array of Departments model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Departments, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Departments) filter?: Filter<Departments>,
  ): Promise<Departments[]> {
    return this.departmentsRepository.find(filter);
  }

  @patch('/departments')
  @response(200, {
    description: 'Departments PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departments, {partial: true}),
        },
      },
    })
    departments: Departments,
    @param.where(Departments) where?: Where<Departments>,
  ): Promise<Count> {
    return this.departmentsRepository.updateAll(departments, where);
  }

  @get('/departments/{id}')
  @response(200, {
    description: 'Departments model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Departments, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Departments, {exclude: 'where'}) filter?: FilterExcludingWhere<Departments>
  ): Promise<Departments> {
    return this.departmentsRepository.findById(id, filter);
  }

  @patch('/departments/{id}')
  @response(204, {
    description: 'Departments PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Departments, {partial: true}),
        },
      },
    })
    departments: Departments,
  ): Promise<void> {
    await this.departmentsRepository.updateById(id, departments);
  }

  @put('/departments/{id}')
  @response(204, {
    description: 'Departments PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() departments: Departments,
  ): Promise<void> {
    await this.departmentsRepository.replaceById(id, departments);
  }

  @del('/departments/{id}')
  @response(204, {
    description: 'Departments DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.departmentsRepository.deleteById(id);
  }
}
