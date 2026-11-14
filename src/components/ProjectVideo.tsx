"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

export function ProjectVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster?: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.35 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force mute — React's muted prop can fail on some browsers
    video.muted = true;
    video.volume = 0;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked or interrupted, ignore gracefully
        });
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-[#0F0F0F]"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        title={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/40 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
