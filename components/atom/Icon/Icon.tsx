import Image from "next/image";

interface IconProp {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  sizes?: string;
  quality?: number;
  
}

export function Icon({
  src,
  alt,
  className,
  width = 24,
  height = 24,
  onClick,
  sizes,
  quality = 75,
}: IconProp) {
  return (
    <Image
      src={src}
      alt={alt}
      className={` ${className}`}
      width={width}
      height={height}
      onClick={onClick}
      quality={quality}
      sizes={sizes}
    />
  );
}
