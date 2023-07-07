import axios from 'axios';
import { Image } from '../types/image';

const KEY = '7AQ6LrB7Phhwtoo6g3nLGLGc3DWxekzEmJuD1JvcBko'
const photo_url = `https://api.unsplash.com/photos?client_id=${KEY}`;

export const getImages = (page = 4) => {
    return axios.get<Image[]>(`${photo_url}&page=${page}`);
};
  
export const getOneImage = (id: string) => {
    return axios.get<Image>(`https://api.unsplash.com/photos/${id}/?client_id=${KEY}`);
};