"use client";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center fixed top-0 left-0">
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="false"
        className="w-full h-full object-cover"
        src="/loading.mp4"
      />
    </div>
  );
};

export default Loading;