import {Column, Entity} from 'typeorm';
import {PghBeerEntity} from './pghbeer.entity';

@Entity()
export class Breweries extends PghBeerEntity {
  @Column()
  name: string;
}
