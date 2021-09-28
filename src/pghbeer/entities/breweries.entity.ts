import {Column, Entity} from 'typeorm';
import {BaseEntity} from '../../util';

@Entity()
export class Breweries extends BaseEntity {
  @Column()
  name: string;
}
