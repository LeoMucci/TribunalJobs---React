import React from 'react';

function SocialIcons() {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fed41c76344ffe5ad930f3225318012e4e7be408d657802966452d3b91fc8f8b?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec", alt: "Social Media Icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e1148c2734e94d18ee2aab1c91e5cb9420874ae92755f2129d67c70534d28784?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec", alt: "Social Media Icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca93af5b67f428cac202630ab78d3fdea9e9654383cc2692d30df0ca561740be?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec", alt: "Social Media Icon 3" }
  ];

  return (
    <div className="flex flex-col self-start">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className={`object-contain rounded-2xl aspect-[1.02] w-[50px] ${
            index === 1 ? "mt-14 max-md:mt-10" : index === 2 ? "self-end" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default SocialIcons;