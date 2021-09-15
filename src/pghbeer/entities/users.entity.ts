import {Column, Entity} from 'typeorm';
import {PghBeerEntity} from './pghbeer.entity';

@Entity()
export class Users extends PghBeerEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  webuserid: string;
}
