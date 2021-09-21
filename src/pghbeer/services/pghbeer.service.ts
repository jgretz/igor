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

  serviceForResource(resource: PghBeerResource): IDatabaseService | null {
    return this.serviceMap[resource];
  }

  find(resource: PghBeerResource, query?: {string: unknown}): Promise<unknown[]> {
    return this.serviceForResource(resource)?.find(query);
  }

  findOne(resource: PghBeerResource, id: number): Promise<unknown> {
    return this.serviceForResource(resource)?.findOne(id);
  }
}
