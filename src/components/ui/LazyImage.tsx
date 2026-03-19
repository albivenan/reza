'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Skeleton } from './Skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  skeletonClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  skeletonClassName = "",
  loading = "lazy",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset state if src changes
    setIsLoaded(false);
    setError(false);

    // Initial check if image is already complete (cached)
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Skeleton - shown while loading or on error */}
      {!isLoaded && !error && (
        <Skeleton className={`absolute inset-0 w-full h-full z-10 ${skeletonClassName}`} />
      )}
      
      {/* Actual Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`transition-opacity duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={{ zIndex: isLoaded ? 20 : 0 }}
        {...props}
      />
    </div>
  );
};
