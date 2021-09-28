import {Column, Entity} from 'typeorm';
import {BaseEntity} from '../../util';

@Entity()
export class EventBeerList extends BaseEntity {
  @Column()
  event_id: number;

  @Column()
  beer_id: number;
}
