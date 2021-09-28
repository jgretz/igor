import {Column, Entity} from 'typeorm';
import {BaseEntity} from '../../util';

@Entity()
export class Users extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  webuserid: string;
}
