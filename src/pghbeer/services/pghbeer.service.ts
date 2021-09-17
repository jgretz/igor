import {Injectable} from '@nestjs/common';

import {IDatabaseService} from '../../Types';
import {IDataService} from '../../data/Types';

import {BeersService} from './beers.service';
import {PghBeerResource} from '../Types';

@Injectable()
export class PghBeerService implements IDataService {
  serviceMap: {[key in PghBeerResource]: IDatabaseService};

  constructor(beerService: BeersService) {
    this.serviceMap = {
      beers: beerService,
    };
  }

  find(resource: PghBeerResource, query?: {string: unknown}): Promise<unknown[]> {
    const service = this.serviceMap[resource];
    if (!service) {
      return;
    }

    return service.find(query);
  }
}
