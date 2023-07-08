import { Image } from './image';

export interface SearchType {
  total: number;
  total_pages: number;
  results: Image[];
};