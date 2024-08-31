import React from 'react';

const VideoSection = () => {
  return (
    <section id="video" className="w-full">
      <figure className="w-full">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/tJsXbAaoZsU"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full aspect-[2.86] object-cover object-center"
        ></iframe>
      </figure>
    </section>
  );
};

export default VideoSection;
