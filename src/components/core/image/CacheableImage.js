import { BUILD_VERSION, IMAGES_HOST } from "@constants";
import { useEffect, useMemo, useRef, useState } from "react";

export const CacheableImage = ({ src, alt, width, height, ...props }) => {
  const imageContainerRef = useRef();
  const [cacheableUrl, setCacheableUrl] = useState("");

  useEffect(() => {
    if (imageContainerRef.current) {
      const { clientWidth, clientHeight } = imageContainerRef.current;
      setCacheableUrl(
        `${IMAGES_HOST}${src}?auto=compress&w=${clientWidth}&h=${clientHeight}&cb=${BUILD_VERSION}`
      );
    }
  }, []);

  return (
    <div
      style={{
        width: width ? width + "px" : "100%",
        height: height ? height + "px" : "100%",
      }}
      ref={imageContainerRef}
    >
      {cacheableUrl && <img className="h-100 w-100" src={cacheableUrl} alt={alt} {...props} />}
    </div>
  );
};
