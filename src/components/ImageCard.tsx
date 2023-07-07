import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../types/image';
import '../styles/ImageCard.css'

interface Props {
  image: Image,
}
export const ImageCard: FC<Props> = memo(({ image }) => {
  return (
    <div className="gallery__image-container">
      <Link
        to={`/photos/${image.id}`}
        className="gallery__image-link"
      >
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </Link>
    </div>
  );
});