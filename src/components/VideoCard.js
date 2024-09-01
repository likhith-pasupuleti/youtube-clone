import React from "react";

const VideoCard = ({ videoInfo }) => {
  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = videoInfo;
  const channelTitle = snippet?.channelTitle || "Unknown Channel";
  const title = snippet?.title || "Untitled";
  const thumbnails = snippet?.thumbnails || {};

  return (
    <div className="p-2 m-2 shadow-lg rounded-lg flex-1 min-w-[200px] max-w-[300px] h-90 flex flex-col justify-between">
      {/* Responsive width with min and max limits */}
      <img
        className="rounded-lg w-full h-40 object-cover"
        src={
          thumbnails.medium?.url ||
          thumbnails.high?.url ||
          thumbnails.default?.url ||
          "Loading" // Provide a default image URL if thumbnails are missing
        }
        alt={title}
      />
      <ul className="flex flex-col justify-between flex-grow">
        <li className="font-bold py-2">{title}</li>
        <li className="font-bold">{channelTitle}</li>
        <li className="font-bold">
          Views Count- {statistics?.viewCount || "No views"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
