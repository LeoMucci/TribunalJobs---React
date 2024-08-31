import React from 'react';
import FeatureCard from './FeatureCard.jsx';

const features = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d9ff63a86286bf6a3dff5d23c0ab001fece07b298d373d10015d5e3b50db861?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec",
    title: "Construa suas teses conversando com a IA do TJ",
    description: "A Tribunal Jobs oferece uma solução alimentada por inteligência artificial para elaboração de documentos de defesa."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b765a433983dfc81860ff2ca2866ff24d6a486b3f4298eca82dd289c8daade94?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec",
    title: "Aumente a eficiência e qualidade dos documentos",
    description: "Nossa plataforma utiliza inteligência artificial para produzir documentos legais de forma eficiente e precisa."
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/52e85cbe6ecd7c92e149620b421b7a02f3e52a849e8f837686a9296ad6e1cd65?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec",
    title: "Otimize seu fluxo de trabalho jurídico",
    description: "Nossa plataforma simplifica e agiliza o processo de redação de documentos legais, permitindo que você se concentre em outras tarefas."
  }
];

const FeatureSection = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 border-orange-300 bg-zinc-300 border-y-[28px] max-md:px-5 max-md:pb-24">
      <div className="w-full max-w-[1234px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <FeatureCard
                imageSrc={feature.imageSrc}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;