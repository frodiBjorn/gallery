import { useState } from 'react';
import { Photo } from '../types';
import style from './Index.module.scss';
import MainPhoto from './MainPhoto/MainPhoto';
import PreviewGallery from './RreviewGallery/PreviewGallery';
import Navigation from './Navigation/Navigation';

interface GalleryProps {
  photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return photos.length ? (
    <div className={style.gallery}>
      <div className={style.galleryContainer}>
        <MainPhoto
          prevPhoto={prevPhoto}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
          className={style.mainPhoto}
        />
        <Navigation
          className={style.galleryNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallery
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.galleryPreviewList}
      />
    </div>
  ) : null;
};

export default Gallery;
