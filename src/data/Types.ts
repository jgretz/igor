export enum DataEvents {
  Find = 'Find',
  // FindOne = 'FindOne',
}

export type DataSource = 'pghbeer';

export interface IDataService {
  find(resource: string, query?: {string: unknown}): Promise<Array<unknown>>;
}

export interface DataArgs {
  source: string;
  type: DataEvents;
  resource: string;
}

export interface FindArgs extends DataArgs {
  query: {string: unknown};
}
