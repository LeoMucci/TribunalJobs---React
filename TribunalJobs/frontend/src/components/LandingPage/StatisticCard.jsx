import React from "react";

function StatisticCard({ value, unit, description }) {
  return (
    <article className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
      <h2 className="self-start text-5xl font-bold text-orange-300 max-md:text-4xl">
        {value} {unit && <span className="text-3xl text-orange-300">{unit}</span>}
      </h2>
      <p className="mt-2 text-base text-stone-100">{description}</p>
    </article>
  );
}

export default StatisticCard;