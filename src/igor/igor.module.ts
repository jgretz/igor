import {Module} from '@nestjs/common';

import {IgorGateway} from './gateways';
import {PingTask} from './tasks';

import {CentralModule} from '../central';

@Module({
  imports: [CentralModule],
  providers: [IgorGateway, PingTask],
  exports: [IgorGateway],
})
export class IgorModule {}
