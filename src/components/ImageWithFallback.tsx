"use client";

import React, { useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export default function ImageWithFallback({ src, fallback, alt, ...rest }: Props) {
  const [current, setCurrent] = useState<string | undefined>(src as string | undefined);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      {...rest}
      src={current}
      alt={alt}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
