import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Beers} from './entities';
import {PGHBEER_DB} from '../constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: PGHBEER_DB,
      type: 'postgres',
      url: process.env.PGHBEER_DB_URL,
      entities: [Beers],
    }),
    TypeOrmModule.forFeature([Beers], PGHBEER_DB),
  ],
  providers: [],
  exports: [],
})
export class PghBeerModule {}
