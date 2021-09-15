import {Column, Entity} from 'typeorm';
import {PghBeerEntity} from './pghbeer.entity';

@Entity()
export class EventBeerList extends PghBeerEntity {
  @Column()
  event_id: number;

  @Column()
  beer_id: number;
}
