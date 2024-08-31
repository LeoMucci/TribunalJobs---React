import React from "react";
import StatisticCard from "./StatisticCard";

const statisticsData = [
  {
    value: "30",
    unit: "horas",
    description: "É a média de tempo para um advogado fazer peças de defesa"
  },
  {
    value: "20%",
    unit: "",
    description: "Porcentagem média de custos adicionais para o cliente devido a esse tempo"
  }
];

function AbandonAdvocacia() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-end px-16 py-28 bg-sky-900 max-md:px-5 max-md:py-24">
      <div className="w-full max-w-[2000px] max-md:max-w-full px-5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <h1 className="self-stretch my-auto text-5xl text-stone-100 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
              <span className="text-7xl font-bold text-orange-300">Abandone</span>{" "}
              <span>a Advocacia Tradicional</span>
            </h1>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <p className="text-base text-stone-100 max-md:mr-2 max-md:max-w-full">
                Descubra uma nova abordagem para a advocacia que pode transformar radicalmente sua prática jurídica. Abandone os métodos tradicionais e descubra como a tecnologia pode revolucionar sua maneira de trabalhar. Dê um passo à frente na sua carreira jurídica e experimente a inovação que a IA pode oferecer ao seu escritório.
              </p>
              <div className="flex flex-wrap gap-3 mt-14 max-md:mt-10">
                {statisticsData.map((stat, index) => (
                  <StatisticCard key={index} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AbandonAdvocacia;