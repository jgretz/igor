export const CRUD = 'CRUD';
export const COMMAND = 'COMMAND';

export type Events = 'CRUD' | 'COMMAND';

export interface CrudEventArgs {
  source: string;
}

export interface CommandEventArgs {
  target: string;
}
