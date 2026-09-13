import { useState } from "react";
import type { Technology } from "../../type";

interface TechnologiesCardProps {
  data: Technology;
  handleSelectTechnology: (technology: Technology) => void;
}

export default function TechnologiesCard({
  data,
  handleSelectTechnology,
}: TechnologiesCardProps) {
  const [isStack, setIsStack] = useState(false);

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            className="h-10 w-10"
            src={data.icon}
            alt={data.name}
          />
        </div>

        <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
          {data.badge}
        </span>
      </div>

      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        {data.name}
      </h2>

      <p className="mt-3 min-h-[84px] text-[16px] leading-7 text-slate-500">
        {data.description}
      </p>

      <div className="my-5 h-px bg-gray-100"></div>

      <div className="flex items-center justify-between text-sm">
        <span className="rounded-md bg-gray-100 px-3 py-1.5 text-slate-600">
          {data.category}
        </span>

        <span className="text-slate-600">
          {data.difficulty}
        </span>

        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <span className="text-yellow-400">★</span>
          {data.rating}
        </span>
      </div>

      <button
        disabled={isStack}
        onClick={() => {
          handleSelectTechnology(data);
          setIsStack(true);
        }}
        className="mt-6 w-full rounded-xl bg-slate-950 py-3.5 text-[16px] font-medium text-white transition hover:bg-slate-800"
      >
        {isStack ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}