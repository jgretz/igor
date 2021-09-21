export enum SocketEvents {
  Data = 'data',
}

export interface IgorSocketHandler {
  handle(args: unknown, callback: (result: unknown) => void): unknown;
}

export interface IDatabaseService {
  find(query?: {string: unknown}): Promise<Array<unknown>>;
  findOne(id: number): Promise<unknown>;
}
