import React, { useEffect, useState } from "react";
import { Masonry } from '@mui/lab';
import { searchImages } from "../../api/images";
import { useLocation } from 'react-router-dom';
import { ImageCard } from "../ImageCard/ImageCard";
import { useMediaQuery } from '@mui/material';
import 'bulma/css/bulma.min.css';
import Pagination from "../Pagination/Pagination";
import { SearchType } from "../../types/SearchType";

export const Explore: React.FC = () => {
  const [images, setImages] = useState<SearchType | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 576px)');
  const isMediumScreen = useMediaQuery('(min-width: 577px) and (max-width: 992px)');
  const [page, setPage] = useState(2)
  const { pathname } = useLocation();
  const collectionName = pathname.split('/').pop() || '';

  const getColumnCount = () => {
    if (isSmallScreen) {
      return 1;
    } else if (isMediumScreen) {
      return 3;
    } else {
      return 3;
    }
  };

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  const increaseColumns = () => {
    setColumnCount(5);
  };

  const decreaseColumns = () => {
    setColumnCount(3);
  };

  const loadPhotos = async () => {
    try {
      const imageFromServer = await searchImages(collectionName, page);

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

  const photos = images?.results || [];


  return (
    <div className="container">
      <div className="button__box">
        <button className="button is-primary is-centered" onClick={increaseColumns}>5</button>
        <button className="button is-primary is-centered" onClick={decreaseColumns}>3</button>
      </div>
      <div className="gallery">
        <Masonry columns={columnCount} spacing={5}>
          {photos.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
            />
          ))}
        </Masonry>

        <Pagination
          currentPage={page}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};