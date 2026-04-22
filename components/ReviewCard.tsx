import { useState } from "react";

export function ReviewCard({
  name,
  time,
  text,
}: {
  name: string;
  time: string;
  text: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-w-[380px] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      {/* USER */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>

      {/* STARS */}
      <div className="flex mb-3 text-yellow-500 tracking-wide">{"★★★★★"}</div>

      {/* TEXT */}
      <p
        className={`text-sm text-gray-700 transition-all ${
          expanded ? "" : "line-clamp-4"
        }`}
      >
        {text}
      </p>

      {/* BUTTON */}
      {text.length > 120 && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 text-sm text-gray-500 hover:text-black"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
