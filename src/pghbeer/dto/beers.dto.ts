import {Body} from '../../Types';
import {Beers} from '../entities';

export interface FindBeersDto extends Body, Partial<Beers> {
  name?: string;
  abv?: number;
  brewery_id?: number;
  style_id?: number;
}

export interface CreateBeersDto extends Body, Partial<Beers> {
  name: string;
  abv: number;
  brewery_id: number;
  style_id: number;
}

export interface UpdateBeersDto extends Body, Partial<Beers> {
  id: number;
  name?: string;
  abv?: number;
  brewery_id?: number;
  style_id?: number;
}
