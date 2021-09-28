export type QueryString = {string: unknown};
export type Body = {string: unknown};

export enum SocketEvents {
  Data = 'data',
}

export interface IgorSocketHandler {
  handle(args: unknown, callback: (result: unknown) => void): unknown;
}

export interface IDatabaseService {
  find(query?: {string: unknown}): Promise<Array<unknown>>;
  findOne(id: number): Promise<unknown>;
  create(body: {string: unknown}): Promise<unknown>;
  update(id: number, body: {string: unknown}): Promise<unknown>;
  remove(id: number): Promise<void>;
}
