import React from 'react';
import '../../styles/mainContent/selectedImages.css';
import { images } from '../../utils/importImages';
import { ImageGallery } from 'react-image-grid-gallery';
import LazyLoad from 'react-lazyload';

function SelectedImages() {
  // Helper function to randomly assign a size class to each image
  const assignSizeClass = (images) => {
    return images.map((image) => ({
      ...image,
      sizeClass: Math.random() > 0.5 ? 'big' : 'small', // Randomly choose 'big' or 'small'
    }));
  };

  // Get images with size classes
  const imagesWithSize = assignSizeClass(images);
  console.log(imagesWithSize)

  return (
    <section className="selected-images">
      <h1 className="h1-title">SELECTED IMAGES</h1>
      <div className="image-grid">
        <ImageGallery
          imagesInfoArray={imagesWithSize}
          tileViewportStyle = "image-gallery"
          enableImageSelection={false}
          renderImage={(image, index) => (
            <LazyLoad
              key={index}
              once
            >
            </LazyLoad>
          )}
        />
      </div>
    </section>
  );
}

export default SelectedImages;
