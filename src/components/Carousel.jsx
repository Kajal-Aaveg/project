import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function Carousel() {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  const galleryOptions = {
    items: images,
    showBullets: true,
    autoPlay: true, // Set to true to enable autoplay
    showNav: true, // Set to true to show arrow navigation
    slideInterval: 3000, // Set the interval for autoplay in milliseconds (3000ms = 3 seconds)
  };

  return <ReactImageGallery {...galleryOptions} />;
}

export default Carousel;
