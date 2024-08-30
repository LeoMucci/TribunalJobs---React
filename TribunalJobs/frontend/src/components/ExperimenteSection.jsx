import React from "react";
import Button from "./Button";

function ExperimenteSection() {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center px-20 py-24 text-lg font-bold min-h-[452px] text-stone-100 max-md:px-5 max-md:pt-24">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/089d325840b736030bd9b94d347ba6fa42a7c2f6a72418954b084058ce7b5253?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center max-w-full w-[689px]">
        <h1 className="text-5xl text-center max-md:max-w-full max-md:text-4xl">
          Simplifique sua advocacia com Tribunal Jobs
        </h1>
        <p className="self-stretch mt-3.5 max-md:max-w-full">
          A plataforma alimentada por IA que revoluciona a redação de documentos legais.
        </p>
        <Button text="Experimente" className="mt-12 max-md:mt-10" />
      </div>
    </section>
  );
}

export default ExperimenteSection;