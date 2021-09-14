import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Stats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ping: Date;
}
