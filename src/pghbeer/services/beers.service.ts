import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Beers} from '../entities';
import {PGHBEER_DB} from '../../constants';
import {IDatabaseService} from '../../Types';

@Injectable()
export class BeersService implements IDatabaseService {
  constructor(
    @InjectRepository(Beers, PGHBEER_DB)
    private beers: Repository<Beers>,
  ) {}

  find(query?: {string: unknown}): Promise<Array<Beers>> {
    return this.beers.find({
      where: query,
    });
  }

  findOne(id: number): Promise<Beers> {
    return this.beers.findOne(id);
  }
}
