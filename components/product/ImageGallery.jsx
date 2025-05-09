import { useState, useRef } from 'react';

export default function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const zoomRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!zoomRef.current) return;
    
    const { left, top, width, height } = zoomRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    // Ensure values are within bounds
    const boundedX = Math.max(0, Math.min(100, x));
    const boundedY = Math.max(0, Math.min(100, y));
    
    setZoomPosition({ x: boundedX, y: boundedY });
  };

  return (
    <div className="relative">
      {/* Main image with zoom functionality */}
      <div 
        className="relative overflow-hidden rounded-lg bg-gray-100 mb-4 aspect-square"
        onMouseEnter={() => setIsZooming(true)}
        onMouseLeave={() => setIsZooming(false)}
        onMouseMove={handleMouseMove}
        ref={zoomRef}
      >
        <div className="relative w-full h-full">
          <img
            src={images[activeIndex].url}
            alt={images[activeIndex].alt}
            className="w-full h-full object-cover object-center"
          />
          
          {isZooming && (
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${images[activeIndex].zoomUrl})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: '200%',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Bestseller</span>
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">New Formula</span>
        </div>
      </div>
      
      {/* Thumbnail images */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`border-2 rounded overflow-hidden aspect-square ${
              index === activeIndex ? 'border-green-500' : 'border-gray-200'
            }`}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}