import React, { useState } from "react";
import ospfThumb from "../../../assets/ospf1.webp"; // Your custom thumbnail for private video

// Video list — public videos won't need "image", private ones can have it
const videoLinks = [
  {
    title: "Basics of OSPF start at 10:15",
    link: "https://www.youtube.com/watch?v=klM03_uSRYs", // Private
    image: ospfThumb, // Custom thumbnail from assets
  },
];

// Extract YouTube video ID
const getYouTubeId = (url: string) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const Videos = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold text-black ">
        My Videos
      </h2>
      <p className="text-gray-600 inter">
        I have recently started teaching as a hobby, and here are some topics
        that I have covered in the videos below.
      </p>

      {/* Responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {videoLinks.map(({ title, link, image }, i) => {
          const videoId = getYouTubeId(link);

          // If "image" exists, use it; else try YouTube thumbnail
          const [imgSrc, setImgSrc] = useState(
            image
              ? image.src
              : videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : ""
          );

          return (
            <div key={i} className="relative group">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {imgSrc && (
                  <div className="relative w-full aspect-video group">
                    <img
                      src={imgSrc}
                      alt={title}
                      onError={() => {
                        setImgSrc("/images/video-placeholder.jpg");
                      }}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md group-hover:scale-105 group-hover:shadow-lg transition duration-300"
                    />

                    {/* Play Icon in Top-Right */}
                    <div className="absolute bottom-4 right-2 bg-black bg-opacity-60 rounded-full p-2 transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="w-5 h-5 text-white cursor-pointer"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                      </svg>
                    </div>
                  </div>
                )}
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none z-10">
                {title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
