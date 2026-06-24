import { useState, useEffect } from 'react';
import './carousel.css';

interface CarouselProps {
  items: readonly string[];
  speed?: number;
  height?: string;
}

export default function Carousel({ items, speed = 15, height = "auto" }: CarouselProps) {
  if (items.length === 1) {
    return <span className="carousel-item" style={{ height }}>{items[0]}</span>;
  }

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % items.length);
    }, speed * 1000);
    return () => clearInterval(timer);
  }, [items.length, speed]);

  return (
    <span key={index} className="carousel-item" style={{ height }}>
      {items[index]}
    </span>
  );
}
