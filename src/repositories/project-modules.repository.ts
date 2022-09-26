import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LoopbackDbDataSource} from '../datasources';
import {ProjectModules, ProjectModulesRelations} from '../models';

export class ProjectModulesRepository extends DefaultCrudRepository<
  ProjectModules,
  typeof ProjectModules.prototype.id,
  ProjectModulesRelations
> {
  constructor(
    @inject('datasources.loopbackDB') dataSource: LoopbackDbDataSource,
  ) {
    super(ProjectModules, dataSource);
  }
}
