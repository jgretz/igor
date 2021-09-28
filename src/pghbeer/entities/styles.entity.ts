import {Column, Entity} from 'typeorm';
import {BaseEntity} from '../../util';

@Entity()
export class Styles extends BaseEntity {
  @Column()
  name: string;
}
