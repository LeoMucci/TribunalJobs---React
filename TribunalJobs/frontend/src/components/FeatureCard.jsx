import React from 'react';

const FeatureCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col grow text-center text-black max-md:mt-10">
      <img loading="lazy" src={imageSrc} alt="" className="object-contain self-center rounded-2xl aspect-[1.02] w-[50px]" />
      <h3 className="mt-5 text-2xl font-bold">{title}</h3>
      <p className="mt-11 text-base max-md:mt-10 max-md:mr-2.5 max-md:ml-2">{description}</p>
    </div>
  );
};

export default FeatureCard;