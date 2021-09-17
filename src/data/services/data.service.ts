import {Injectable} from '@nestjs/common';

import {IgorSocketHandler} from '../../Types';
import {DataArgs, DataEvents, DataSource, FindArgs, IDataService} from '../Types';

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
}
