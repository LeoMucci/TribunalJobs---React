import React from 'react';

function WelcomeImage() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f9e49d0527b2a8406e0aabf72392bbd6e5ac7b09ec94c2c0d3b0b26e2fd8008?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" 
        className="object-contain grow mt-1.5 w-full rounded-none aspect-[0.86] max-md:mt-5 max-md:max-w-full" 
        alt="Welcome illustration"
      />
    </div>
  );
}

export default WelcomeImage;