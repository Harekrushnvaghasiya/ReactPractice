import React from "react";
import { ImageProps } from "../../utils/appType";
import { Imagediv } from "./style";

const Image: React.FC<ImageProps> = ({
  className,
  src,
  alt,
  borderRadius,
  height,
  width,
  objectFit = "cover",
  loading = "lazy",
  priority = false,
  objectPosition = 'center',
}) => {
  return (
    <Imagediv
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      borderRadius={borderRadius}
      objectFit={objectFit}
      loading={priority ? "eager" : loading}
      fetchPriority={priority ? "high" : "auto"}
      objectPosition={objectPosition}
    />
  );
};

export default Image;
