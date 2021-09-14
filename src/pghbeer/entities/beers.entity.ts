import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Beers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
