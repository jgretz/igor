import {Injectable} from '@nestjs/common';
import {PghBeerEntity} from '../Types';
import {IDataService, IDataTask} from '../../Types';
import {BeersService} from '../services';

@Injectable()
export class PghBeerTask implements IDataTask {
  entityMap: {[key in PghBeerEntity]: IDataService};

  constructor(beers: BeersService) {
    this.entityMap = {
      beers,
    };
  }

  map(entity: PghBeerEntity): IDataService {
    return this.entityMap[entity];
  }
}
