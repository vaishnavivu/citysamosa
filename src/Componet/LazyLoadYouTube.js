import React, { useState } from "react";

const LazyLoadYouTube = ({ videoId, title, onVideoClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const iframeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  const handleVideoClick = () => {
    setIsLoaded(true);
    if (onVideoClick) {
      onVideoClick(); // This will stop Swiper autoplay
    }
  };

  return (
    <div className="lazy-load-youtube" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      {!isLoaded && (
        <div
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            cursor: "pointer",
            position: "absolute",
            top: 0,
            left: 0
          }}
          onClick={handleVideoClick}
        >
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(0, 0, 0, 0.8)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              padding: "10px 20px",
              fontSize: "20px",
            }}
          >
            ▶
          </button>
        </div>
      )}
      {isLoaded && (
        <iframe
          src={iframeUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        ></iframe>
      )}
    </div>
  );
};

export default LazyLoadYouTube;
