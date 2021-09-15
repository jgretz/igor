import {Column, Entity} from 'typeorm';
import {PghBeerEntity} from './pghbeer.entity';

@Entity()
export class Stats extends PghBeerEntity {
  @Column()
  date: Date;

  @Column()
  opinion: number;

  @Column()
  beer_id: number;

  @Column()
  user_id: number;

  @Column()
  event_id: number;
}
