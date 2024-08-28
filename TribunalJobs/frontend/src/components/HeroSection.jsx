import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900">Tribunal Jobs</h1>
          <p className="text-xl mt-4 text-gray-700">
            Transformando a indústria jurídica com <i>Inteligência artificial</i>
          </p>
          <p className="mt-6 text-gray-600">
            A Tribunal Jobs oferece uma solução inovadora que simplifica e agiliza a redação de documentos legais.
          </p>
          <div className="mt-8">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md mr-4">Saiba Mais</a>
            <a href="#" className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md">Experimente</a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/47111ec7c654cc93604b35e904790087d673bc9890267d5840765e2f44f712ca?apiKey=34d9fddb4e5247a6aa90d70170d328ec&" alt="Hero" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
