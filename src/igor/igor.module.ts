import {Module} from '@nestjs/common';

import {IgorGateway} from './gateways';
import {DataTask} from './tasks';

import {PghBeerModule} from '../pghbeer';

@Module({
  imports: [PghBeerModule],
  providers: [IgorGateway, DataTask],
  exports: [IgorGateway],
})
export class IgorModule {}
