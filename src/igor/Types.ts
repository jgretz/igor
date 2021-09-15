export enum IgorEvents {
  Connect = 'connect',
  Disconnect = 'disconnect',
  Error = 'error',

  FindAll = 'FindAll',
}

export interface FindAllArgs {
  source: string;
  entity: string;
}

export type DataSource = 'pghbeer';
