import {Injectable} from '@nestjs/common';

import {IDataTask} from '../../Types';
import {DataSource} from '../Types';

import {PghBeerTask} from '../../pghbeer';

@Injectable()
export class DataTask {
  sourceMap: {[key in DataSource]: IDataTask};

  constructor(pghBeerTask: PghBeerTask) {
    this.sourceMap = {
      pghbeer: pghBeerTask,
    };
  }

  async findAll(source: string, entity: string): Promise<Array<unknown>> {
    const task: IDataTask = this.sourceMap[source];
    const service = task.map(entity);

    const data = await service.findAll();
    return data;
  }
}
