import {Column, Entity} from 'typeorm';
import {PghBeerEntity} from './pghbeer.entity';

@Entity()
export class Styles extends PghBeerEntity {
  @Column()
  name: string;
}
