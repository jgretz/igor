export interface IDataTask {
  map(entity: string): IDataService;
}
export interface IDataService {
  findAll(): Promise<Array<unknown>>;
}
