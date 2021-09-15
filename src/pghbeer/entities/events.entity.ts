import {Column, Entity} from 'typeorm';
import {PghBeerEntity} from './pghbeer.entity';

@Entity()
export class Events extends PghBeerEntity {
  @Column()
  name: string;
}
