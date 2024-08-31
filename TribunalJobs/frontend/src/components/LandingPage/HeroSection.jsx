import React from 'react';

const Hero = () => {
  return (
    <section className="self-center mt-0 w-full max-w-[1348px] max-md:mr-2.5 max-md:max-w-full px-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex relative flex-col pt-60 pb-16 w-full h-0 text-base font-bold min-h-[317px] text-zinc-950 max-md:pt-24 max-md:pr-5 max-md:max-w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd0ffbdb9ff7ae46a67b57a43efd6227b2ed7cd0de16da56994b7ae06b9215d?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" alt="" className="object-cover absolute inset-0 size-fit" />
              Tribunal Jobs
            </div>
            <h1 className="z-10 mt-0 text-5xl font-bold text-black w-[547px] max-md:max-w-full max-md:text-4xl">
              Transformando a indústria jurídica com{" "}
              <span className="text-6xl italic text-orange-400">Inteligência artificial</span>
            </h1>
            <p className="z-10 self-start mt-12 text-base text-black max-md:mt-10 max-md:max-w-full">
              A Tribunal Jobs oferece uma solução inovadora que simplifica e agiliza a redação de documentos legais. Nossa plataforma combina inteligência artificial com bases de dados jurídicos, garantindo documentos precisos em menos tempo
            </p>
            <div className="px-px pt-12 pb-64 mt-0 mr-3 ml-3 max-md:pr-5 max-md:pb-24 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <button className="gap-2.5 self-stretch px-6 py-3.5 w-full text-lg font-bold text-white bg-sky-900 rounded-md max-md:px-5 max-md:mt-10">
                    Saiba Mais
                  </button>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <button className="gap-2.5 self-stretch px-6 py-3.5 w-full text-lg whitespace-nowrap bg-orange-300 rounded-md border border-solid border-zinc-950 text-zinc-950 max-md:px-5 max-md:mt-10">
                    Experimente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/47111ec7c654cc93604b35e904790087d673bc9890267d5840765e2f44f712ca?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" alt="Ilustração representando inteligência artificial na indústria jurídica" className="object-contain grow mt-40 w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;