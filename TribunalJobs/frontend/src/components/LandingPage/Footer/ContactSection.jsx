import React from 'react';

function ContactSection() {
  return (
    <div className="flex flex-col items-start self-start">
      <h2 className="text-lg font-bold">Contato</h2>
      <div className="flex gap-2 self-stretch mt-3.5 text-base whitespace-nowrap">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e5418157ef25655589c512b8eda42295b46679780026c2bb1a0f1360b981b49?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" 
          alt="" 
          className="object-contain shrink-0 self-start mt-1 aspect-[0.95] w-[19px]" 
        />
        <a href="mailto:tribunaljobs@gmail.com" className="grow shrink w-[171px]">
          tribunaljobs@gmail.com
        </a>
      </div>
      <div className="flex gap-2 mt-5 text-sm">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e9ef6e030fb5f71b614cd173b997044b3cb9ea469b91fe20778531c246196c1?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" 
          alt="" 
          className="object-contain shrink-0 self-start aspect-square w-[19px]" 
        />
        <a href="tel:+5511933863655" className="basis-auto">(11) 93386-3655</a>
      </div>
    </div>
  );
}

export default ContactSection;