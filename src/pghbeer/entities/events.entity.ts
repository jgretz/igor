import {Column, Entity} from 'typeorm';
import {BaseEntity} from '../../util';

@Entity()
export class Events extends BaseEntity {
  @Column()
  name: string;
}
