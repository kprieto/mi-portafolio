import React from 'react';

function ExampleCarouselImage({ images }) {
    return (
    <div className="example-carousel-image">
        {images.map((image, index) => (
        <img
            key={index}
            src={image.url}
            alt={image.alt || `Image ${index + 1}`}
            className="d-block w-100 mb-2"
        />
        ))}
    </div>
    );
}

export default ExampleCarouselImage;