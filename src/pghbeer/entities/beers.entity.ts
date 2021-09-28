import {Column, Entity} from 'typeorm';
import {BaseEntity} from '../../util';

@Entity()
export class Beers extends BaseEntity {
  @Column()
  name: string;

  @Column()
  abv: number;

  @Column()
  brewery_id: number;

  @Column()
  style_id: number;
}
