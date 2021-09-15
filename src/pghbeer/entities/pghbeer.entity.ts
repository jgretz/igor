import {Column, PrimaryGeneratedColumn} from 'typeorm';

export abstract class PghBeerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  create_date: Date;

  @Column()
  update_date: Date;
}
