"use client";

import { type ComponentProps, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface AndroidProps extends ComponentProps<"div"> {
  /**
   * What the screenshot or video shows, read by screen readers. Leave it
   * empty when the picture is decoration.
   *
   * @default ""
   */
  alt?: string;
  /** An image that fills the screen, cropped to it from the centre. */
  src?: string;
  /**
   * A video that fills the screen, muted and looping. It plays on its own
   * while it's on screen, with a button to pause it, except under reduced
   * motion, where it waits with its controls showing.
   */
  videoSrc?: string;
}

/**
 * An Android phone drawn around a screen: a bezel-less body with rounded
 * corners, a punch-hole camera, and the volume and power keys on its right
 * edge. The screen is a real box, so an image, a video or any children fill
 * it and are clipped to its corners, the children above the image and the
 * video; the body is an SVG that scales with the width, in the theme's
 * neutral tokens. Size it by width (`w-64`); the height follows.
 */
export const Android = (props: AndroidProps) => {
  const { alt = "", children, className, src, videoSrc, ...rest } = props;
  const video = useRef<HTMLVideoElement>(null);
  /** The visitor paused it, so coming back into view doesn't restart it. */
  const held = useRef(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = video.current;
    if (!(node && videoSrc)) {
      return;
    }
    // Inline in both cases: without it, Safari on an iPhone plays the video
    // full screen.
    node.playsInline = true;
    // Played from here, not by `autoplay`: under reduced motion it waits
    // with its controls showing, over `src` when there is one.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.controls = true;
      return;
    }
    node.muted = true;
    // Only while it's on screen, so that `preload="none"` holds: a phone
    // further down the page downloads nothing until it's scrolled to.
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) {
        node.pause();
      } else if (!held.current) {
        // A refused autoplay leaves it paused, with the play button showing.
        node.play().catch(() => setPaused(node.paused));
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [videoSrc]);

  const toggleVideo = () => {
    const node = video.current;
    if (!node) {
      return;
    }
    held.current = !node.paused;
    if (node.paused) {
      node.play().catch(() => undefined);
    } else {
      node.pause();
    }
  };

  return (
    <div
      className={cn(
        "relative aspect-[382/830] w-full max-w-[382px]",
        className
      )}
      data-slot="android"
      {...rest}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full"
        data-slot="android-frame"
        fill="none"
        viewBox="0 0 382 830"
      >
        <path
          className="fill-border"
          d="M380 153h.5a1.5 1.5 0 0 1 1.5 1.5v95a1.5 1.5 0 0 1-1.5 1.5h-.5Z"
        />
        <path
          className="fill-border"
          d="M380 301h.5a1.5 1.5 0 0 1 1.5 1.5v49a1.5 1.5 0 0 1-1.5 1.5h-.5Z"
        />
        <rect className="fill-border" height="830" rx="44" width="378" x="2" />
        <rect
          className="fill-card"
          height="825"
          rx="41.5"
          width="373"
          x="4.5"
          y="2.5"
        />
      </svg>
      <div
        className="absolute inset-x-[2.8796%] inset-y-[1.8072%] isolate overflow-hidden rounded-[8.8889%/4%] bg-muted"
        data-slot="android-screen"
      >
        {/* The image and the video sit below the screen's own layer, so
            children paint over them whether or not they are positioned. */}
        {src ? (
          <img
            alt={videoSrc ? "" : alt}
            className="absolute inset-0 -z-10 size-full object-cover"
            height={800}
            src={src}
            width={360}
          />
        ) : null}
        {videoSrc ? (
          <video
            aria-label={alt || undefined}
            className="absolute inset-0 -z-10 size-full object-cover"
            loop
            muted
            onPause={() => setPaused(true)}
            onPlay={() => setPaused(false)}
            preload="none"
            ref={video}
            src={videoSrc}
          />
        ) : null}
        {children}
        {videoSrc ? (
          <button
            aria-label={paused ? "Play video" : "Pause video"}
            className={cn(
              "absolute end-4 bottom-4 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground shadow-xs outline-none backdrop-blur-sm transition-opacity motion-reduce:hidden",
              "in-[[data-slot=android-screen]:hover]:opacity-100 opacity-0 pointer-coarse:opacity-100 focus-visible:opacity-100 focus-visible:ring-[3px] focus-visible:ring-ring/50 data-paused:opacity-100"
            )}
            data-paused={paused ? "" : undefined}
            data-slot="android-video-toggle"
            onClick={toggleVideo}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="size-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {paused ? (
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              ) : (
                <path d="M6 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm9 0h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              )}
            </svg>
          </button>
        ) : null}
      </div>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full"
        data-slot="android-camera"
        fill="none"
        viewBox="0 0 382 830"
      >
        <circle
          className="fill-foreground dark:fill-background"
          cx="191"
          cy="33"
          r="7"
        />
        <circle className="fill-muted-foreground/40" cx="191" cy="33" r="2.5" />
      </svg>
    </div>
  );
};
