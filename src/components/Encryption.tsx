"use client";
import React from "react";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full lg:flex-row lg:mx-4 lg:mt-4 " style={{ zIndex: open ? -1 : 0 }}> 
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto rounded-3xl "
          src="/apresentation.mp4"
        />
    </div>
  );
};

export default Encryption;