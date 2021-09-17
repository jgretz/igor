import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {StatsService} from './services';
import {Stats} from './entities';
import {CENTRAL_DB} from '../constants';
import {PingTask} from './tasks';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: CENTRAL_DB,
      type: 'postgres',
      url: process.env.CENTRAL_DB_URL,
      entities: [Stats],
    }),
    TypeOrmModule.forFeature([Stats], CENTRAL_DB),
  ],
  providers: [StatsService, PingTask],
})
export class CentralModule {}
