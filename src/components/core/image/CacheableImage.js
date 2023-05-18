import { BUILD_VERSION } from "@constants";
import { useMemo } from "react";

export const CacheableImage = ({ src, alt, ...props }) => {
    
  const cacheableUrl = useMemo(() => {
    return `${src}?cb=${BUILD_VERSION}`;
  }, [src]);

  return <img src={cacheableUrl} alt={alt} {...props} />;
};
