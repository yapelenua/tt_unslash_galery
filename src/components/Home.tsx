import React, { useEffect, useState } from "react";
import { Masonry } from '@mui/lab';
import { Image } from '../types/image';
import { getImages } from "../api/images";
import { useSearchParams } from 'react-router-dom';
import { ImageCard } from "./ImageCard";
import { useMediaQuery } from '@mui/material';
import '../styles/Home.css'
import 'bulma/css/bulma.min.css';

export const Home: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const isSmallScreen = useMediaQuery('(max-width: 576px)');
  const isMediumScreen = useMediaQuery('(min-width: 577px) and (max-width: 992px)');
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const getColumnCount = () => {
    if (isSmallScreen) {
      return 1;
    } else if (isMediumScreen) {
      return 3;
    } else {
      return 3;
    }
  };

  const increaseColumns = () => {
    setColumnCount(5);
  };

  const decreaseColumns = () => {
    setColumnCount(3);
  };

  const loadPhotos = async () => {
    try {
      const imageFromServer = await getImages(+page);

      setImages(imageFromServer.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPhotos();
  }, [page]);

  console.log(images);

  const [columnCount, setColumnCount] = useState(getColumnCount());

  useEffect(() => {
    setColumnCount(getColumnCount());
  }, [isSmallScreen, isMediumScreen]);


  return (
    <div className="container">
      <button className="button is-primary is-centered" onClick={increaseColumns}>5</button>
      <button className="button is-primary is-centered" onClick={decreaseColumns}>3</button>
      <div className="gallery">
        <Masonry columns={columnCount} spacing={2}>
          {images.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
            />
          ))}
        </Masonry>
      </div>
    </div>
  );
};