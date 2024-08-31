import React from 'react';

function ExploreSection() {
  return (
    <div className="flex flex-col text-lg font-bold whitespace-nowrap">
      <h2 className="self-start">Explorar</h2>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b58958dbfea13bec49a71db7f692a7edd8c5e64c4c68722dd71be3fbd054dec?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" 
        alt="" 
        className="object-contain mt-5 aspect-[1.07] w-[118px]" 
      />
    </div>
  );
}

export default ExploreSection;