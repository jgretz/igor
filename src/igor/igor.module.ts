import {Module} from '@nestjs/common';

import {IgorGateway} from './gateways';

import {DataModule} from '../data';

@Module({
  imports: [DataModule],
  providers: [IgorGateway],
  exports: [],
})
export class IgorModule {}
