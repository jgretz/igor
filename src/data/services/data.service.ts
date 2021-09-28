import {Injectable} from '@nestjs/common';

import {IgorSocketHandler} from '../../Types';
import {
  CreateArgs,
  DataArgs,
  DataEvents,
  DataSource,
  IDataService,
  FindArgs,
  FindOneArgs,
  DeleteArgs,
  UpdateArgs,
} from '../Types';

import {PghBeerService} from '../../pghbeer';

@Injectable()
export class DataService implements IgorSocketHandler {
  serviceMap: {[key in DataSource]: IDataService};
  logicMap: {[key in DataEvents]: (service: IDataService, args: DataArgs) => Promise<unknown>};

  constructor(pghbeer: PghBeerService) {
    this.serviceMap = {
      pghbeer,
    };

    this.logicMap = {
      [DataEvents.Find]: this.findAll,
      [DataEvents.FindOne]: this.findOne,
      [DataEvents.Create]: this.create,
      [DataEvents.Update]: this.update,
      [DataEvents.Delete]: this.remove,
    };
  }

  async handle(args: DataArgs, callback: (result: unknown) => void) {
    const logic = this.logicMap[args.type];
    const service = this.serviceMap[args.source];

    const result = await logic(service, args);
    callback(result);
  }

  async findAll(service: IDataService, {resource, query}: FindArgs): Promise<Array<unknown>> {
    return service.find(resource, query);
  }

  async findOne(service: IDataService, {resource, id}: FindOneArgs): Promise<unknown> {
    return service.findOne(resource, id);
  }

  async create(service: IDataService, {resource, body}: CreateArgs): Promise<unknown> {
    return service.create(resource, body);
  }

  async update(service: IDataService, {resource, id, body}: UpdateArgs): Promise<unknown> {
    return service.update(resource, id, body);
  }

  async remove(service: IDataService, {resource, id}: DeleteArgs): Promise<void> {
    return service.remove(resource, id);
  }
}
