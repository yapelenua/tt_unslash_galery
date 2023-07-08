import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image } from '../../types/image';
import './ImageDetailPage.scss'
import { getOneImage } from '../../api/images';

export const ImageDetailPage = () => {
  const { pathname } = useLocation();
  const [image, setImage] = useState<Image | null>(null);

  const loadImage = async () => {
    try {
      const imageFromServer = await getOneImage(pathname.slice(8));
      setImage(imageFromServer.data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    loadImage();
  }, [pathname]);

  return (
    <div className="details">
      <div className="details__content">
        <div className="details__user">
          <img
            src={image?.user.profile_image.medium}
            alt={image?.user.name}
            className="details__user-img"
          />

          <div>
            {image?.user.name}
          </div>
        </div>

        <div className="details__info">
          <div>
            {`Downloads: ${image?.downloads}`}
          </div>

          <div>
            {`Likes: ${image?.likes}`}
          </div>

          <div>
            {`Views: ${image?.views}`}
          </div>
        </div>

      </div>

      <img
        src={image?.urls.regular}
        alt={image?.alt_description}
        className="details__image"
      />

      <div className="modal__tags">
        {image?.tags.slice(0, 5).map(tag => (
          <Link
            key={tag.title}
            to={`/collection/${tag.title}`}
            className="details__tag-link"
          >
            {tag.title}
          </Link>
        ))}
      </div>

      <Link
        to="/"
        className="details__close"
      />
    </div>
  );
};