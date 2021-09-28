export enum DataEvents {
  Find = 'Find',
  FindOne = 'FindOne',
  Create = 'Create',
  Update = 'Update',
  Delete = 'Delete',
}

export type DataSource = 'pghbeer';

export interface IDataService {
  find(resource: string, query?: {string: unknown}): Promise<Array<unknown>>;
  findOne(resource: string, id: number): Promise<unknown>;
  create(resource: string, body: {string: unknown}): Promise<unknown>;
  update(resource: string, id: number, body: {string: unknown}): Promise<unknown>;
  remove(resource: string, id: number): Promise<void>;
}

export interface DataArgs {
  source: string;
  type: DataEvents;
  resource: string;
}

export interface FindArgs extends DataArgs {
  query: {string: unknown};
}

export interface FindOneArgs extends DataArgs {
  id: number;
}

export interface CreateArgs extends DataArgs {
  body: {string: unknown};
}

export interface UpdateArgs extends DataArgs {
  id: number;
  body: {string: unknown};
}

export interface DeleteArgs extends DataArgs {
  id: number;
}
