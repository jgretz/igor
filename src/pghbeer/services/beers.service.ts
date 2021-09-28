import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Beers} from '../entities';
import {PGHBEER_DB} from '../../constants';
import {DatabaseService} from '../../util';

import {CreateBeersDto, FindBeersDto, UpdateBeersDto} from '../dto';

@Injectable()
export class BeersService extends DatabaseService<
  Beers,
  FindBeersDto,
  CreateBeersDto,
  UpdateBeersDto
> {
  constructor(
    @InjectRepository(Beers, PGHBEER_DB)
    private beers: Repository<Beers>,
  ) {
    super(beers);
  }
}
