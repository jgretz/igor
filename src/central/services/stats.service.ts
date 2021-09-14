import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {Stats} from '../entities';
import {CENTRAL_DB} from '../../constants';

const STATS_ID = 1;

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Stats, CENTRAL_DB)
    private stats: Repository<Stats>,
  ) {}

  find(): Promise<Stats> {
    return this.stats.findOne(STATS_ID);
  }

  save(stats: Stats): Promise<Stats> {
    return this.stats.save(stats);
  }
}
