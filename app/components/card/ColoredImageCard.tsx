'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BreakpointDimensions {
  sm?: number;
  md?: number;
  lg?: number;
  default: number;
}

interface ColoredImageCardProps {
  id: string;
  imageSrc: string;
  altText: string;
  cardWidth: BreakpointDimensions;
  cardHeight: BreakpointDimensions;
  className?: string;
}

const ColoredImageCard: React.FC<ColoredImageCardProps> = ({
  id,
  imageSrc,
  altText,
  cardWidth,
  cardHeight,
  className,
}) => {
  const [width, setWidth] = useState(cardWidth.default);
  const [height, setHeight] = useState(cardHeight.default);

  
  const updateDimensions = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1024 && cardWidth.lg) {
      setWidth(cardWidth.lg);
      setHeight(cardHeight.lg || cardHeight.default);
    } else if (windowWidth >= 768 && cardWidth.md) {
      setWidth(cardWidth.md);
      setHeight(cardHeight.md || cardHeight.default);
    } else if (windowWidth >= 640 && cardWidth.sm) {
      setWidth(cardWidth.sm);
      setHeight(cardHeight.sm || cardHeight.default);
    } else {
      setWidth(cardWidth.default);
      setHeight(cardHeight.default);
    }
  };

  useEffect(() => {
    updateDimensions(); 
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      id={id}
      className={`${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        className="absolute bg object-contain"
        src={imageSrc}
        alt={altText}
        style={{ width: `${width}px`, height: `${height}px` }}
      />

      <svg className="absolute mix-blend-multiply size-full">
        <mask id={`imageMask_${id}`} width={`${width}px`} height={`${height}px`}>
          <image href={imageSrc} width={`${width}px`} height={`${height}px`} />
        </mask>

        <rect
          id={id}
          style={{ width: '100%', height: `${height}px` }}
          mask={`url(#imageMask_${id})`}
        />
      </svg>
    </div>
  );
};

export default ColoredImageCard;