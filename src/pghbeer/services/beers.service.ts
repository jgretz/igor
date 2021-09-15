import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Beers} from '../entities';
import {PGHBEER_DB} from '../../constants';
import {IDataService} from '../../Types';

@Injectable()
export class BeersService implements IDataService {
  constructor(
    @InjectRepository(Beers, PGHBEER_DB)
    private beers: Repository<Beers>,
  ) {}

  findAll(): Promise<Array<Beers>> {
    return this.beers.find();
  }
}
