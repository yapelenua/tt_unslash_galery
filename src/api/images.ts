import axios from 'axios';
import { Image } from '../types/image';
import { SearchType } from '../types/SearchType';

const KEY = '7AQ6LrB7Phhwtoo6g3nLGLGc3DWxekzEmJuD1JvcBko'
const photo_url = `https://api.unsplash.com/photos?client_id=${KEY}`;
const LINK = `photos?client_id=${KEY}`;

export const getImages = (page = 1) => {
    return axios.get<Image[]>(`${photo_url}&page=${page}`);
};
  
export const getOneImage = (id: string) => {
    return axios.get<Image>(`https://api.unsplash.com/photos/${id}/?client_id=${KEY}`);
};

export const searchImages = (query: string, page: number) => {
    return axios.get<SearchType>(`https://api.unsplash.com/search/${LINK}&query=${query}&page=${page}`);
  };