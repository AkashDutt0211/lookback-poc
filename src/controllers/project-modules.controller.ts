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
import {ProjectModules} from '../models';
import {ProjectModulesRepository} from '../repositories';

export class ProjectModulesController {
  constructor(
    @repository(ProjectModulesRepository)
    public projectModulesRepository : ProjectModulesRepository,
  ) {}

  @post('/project-modules')
  @response(200, {
    description: 'ProjectModules model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProjectModules)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjectModules, {
            title: 'NewProjectModules',
            exclude: ['id'],
          }),
        },
      },
    })
    projectModules: Omit<ProjectModules, 'id'>,
  ): Promise<ProjectModules> {
    return this.projectModulesRepository.create(projectModules);
  }

  @get('/project-modules/count')
  @response(200, {
    description: 'ProjectModules model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProjectModules) where?: Where<ProjectModules>,
  ): Promise<Count> {
    return this.projectModulesRepository.count(where);
  }

  @get('/project-modules')
  @response(200, {
    description: 'Array of ProjectModules model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProjectModules, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProjectModules) filter?: Filter<ProjectModules>,
  ): Promise<ProjectModules[]> {
    return this.projectModulesRepository.find(filter);
  }

  @patch('/project-modules')
  @response(200, {
    description: 'ProjectModules PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjectModules, {partial: true}),
        },
      },
    })
    projectModules: ProjectModules,
    @param.where(ProjectModules) where?: Where<ProjectModules>,
  ): Promise<Count> {
    return this.projectModulesRepository.updateAll(projectModules, where);
  }

  @get('/project-modules/{id}')
  @response(200, {
    description: 'ProjectModules model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProjectModules, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProjectModules, {exclude: 'where'}) filter?: FilterExcludingWhere<ProjectModules>
  ): Promise<ProjectModules> {
    return this.projectModulesRepository.findById(id, filter);
  }

  @patch('/project-modules/{id}')
  @response(204, {
    description: 'ProjectModules PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjectModules, {partial: true}),
        },
      },
    })
    projectModules: ProjectModules,
  ): Promise<void> {
    await this.projectModulesRepository.updateById(id, projectModules);
  }

  @put('/project-modules/{id}')
  @response(204, {
    description: 'ProjectModules PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() projectModules: ProjectModules,
  ): Promise<void> {
    await this.projectModulesRepository.replaceById(id, projectModules);
  }

  @del('/project-modules/{id}')
  @response(204, {
    description: 'ProjectModules DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.projectModulesRepository.deleteById(id);
  }
}
