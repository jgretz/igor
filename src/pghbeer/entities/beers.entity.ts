import {Column, Entity} from 'typeorm';
import {PghBeerEntity} from './pghbeer.entity';
@Entity()
export class Beers extends PghBeerEntity {
  @Column()
  name: string;

  @Column()
  abv: number;

  @Column()
  brewery_id: number;

  @Column()
  style_id: number;
}
