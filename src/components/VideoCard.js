import React from "react";
import "./videocard.css";

function VideoCard({
  thumbnailUrl,
  channelImageUrl,
  postedDate,
  title,
  ChannelName,
  noOfViews,
}) {
  return (
    <div className="videocard">
      <img className="thumbnail__img" src={thumbnailUrl} alt="thumbnail" />
      <div className="videocard_info">
        <div className="channel_img_container">
          <img src={channelImageUrl} alt="channelImage" />
        </div>
        <div className="videocard_info_text">
          <p className="videocard_title" title={title}>
            {title.length >= 45 ? title.substring(0, 45) + "..." : title}
          </p>
          <p className="videocard_channelname">{ChannelName}</p>
          <p className="videocard_views">
            {noOfViews} views <span className="dot"> ⚫</span>
            {postedDate}
          </p>
          <p className="videocard_postdate"></p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
