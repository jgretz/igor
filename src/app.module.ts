import {Module} from '@nestjs/common';
import {ScheduleModule} from '@nestjs/schedule';
import {IgorModule} from './igor';
import {CentralModule} from './central';
import {PghBeerModule} from './pghbeer';

@Module({
  imports: [ScheduleModule.forRoot(), CentralModule, PghBeerModule, IgorModule],
})
export class AppModule {}
