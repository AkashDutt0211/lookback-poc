import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ProjectModules extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  domain: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isInDevelopment?: boolean;

  @property({
    type: 'string',
    required: true,
  })
  clientName: string;

  @property({
    type: 'string',
  })
  projectLead?: string;

  @property({
    type: 'string',
    required: true,
    id: true,
  })
  id?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ProjectModules>) {
    super(data);
  }
}

export interface ProjectModulesRelations {
  // describe navigational properties here
}

export type ProjectModulesWithRelations = ProjectModules & ProjectModulesRelations;
