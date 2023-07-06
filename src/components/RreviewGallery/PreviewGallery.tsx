import { useEffect, useMemo, useRef } from 'react';
import { CommonClassProps, Photo } from '../../types';
import cl from 'classnames';
import style from './PreviewGallery.module.scss';

interface PreviewGalleryProps extends CommonClassProps {
  activePhotoIndex: number;
  photos: Array<Photo>;
}
const PreviewGallery: React.FC<PreviewGalleryProps> = ({
  activePhotoIndex,
  photos,
  className,
}) => {
  const previewContainer = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!previewContainer.current) {
      return;
    }
    previewContainer.current.style.transform = `translate3d(-${
      activePhotoIndex * 164
    }px, 0, 0)`;
  }, [activePhotoIndex]);

  const previewGalleryTrack = useMemo(
    () => (
      <ul className={style.previewGalleryTrack} ref={previewContainer}>
        {photos.map((photo) => (
          <li key={photo.id} className={style.previewGalleryPreview}>
            <img
              className={style.previewGalleryImage}
              src={photo.src}
              alt={photo.description}
            />
          </li>
        ))}
      </ul>
    ),
    [photos]
  );

  if (!photos || photos.length === 0) {
    return null;
  }
  return (
    <div className={cl(style.previewGallery, className)}>
      {previewGalleryTrack}
      <div className={style.previewGalleryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};

export default PreviewGallery;
