import {Module} from '@nestjs/common';

import {DataService} from './services';

import {CentralModule} from 'src/central';
import {PghBeerModule} from 'src/pghbeer';

@Module({
  imports: [PghBeerModule, CentralModule],
  providers: [DataService],
  exports: [DataService],
})
export class DataModule {}
