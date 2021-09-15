import {Injectable} from '@nestjs/common';
import {Cron} from '@nestjs/schedule';
import {StatsService} from '../services';
import {IgorGateway} from '../../igor/gateways/igor.gateway';

@Injectable()
export class PingTask {
  igor: IgorGateway;
  statsService: StatsService;

  constructor(igor: IgorGateway, statsService: StatsService) {
    this.igor = igor;
    this.statsService = statsService;
  }

  @Cron('* */5 * * * *')
  async doPing() {
    const test = 'ping';
    const response = await this.igor.send('ping', test);

    if (response === test) {
      const stats = await this.statsService.find();
      stats.ping = new Date();
      await this.statsService.save(stats);
    }
  }
}
