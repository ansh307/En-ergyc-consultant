import { useState, useMemo } from "react";

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

  // 🔤 Get initials
  const initials = useMemo(() => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [name]);

  // 🎨 Generate consistent random color from name
  const bgColor = useMemo(() => {
    const colors = [
      "bg-red-200 text-red-800",
      "bg-green-200 text-green-800",
      "bg-blue-200 text-blue-800",
      "bg-yellow-200 text-yellow-800",
      "bg-purple-200 text-purple-800",
      "bg-pink-200 text-pink-800",
      "bg-indigo-200 text-indigo-800",
    ];

    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    return colors[Math.abs(hash) % colors.length];
  }, [name]);

  return (
    <div className="min-w-[380px] bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      {/* USER */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${bgColor}`}
        >
          {initials}
        </div>

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
      {text.length > 200 && (
        <button
          aria-label={expanded ? "Show less" : "Read more"}
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-3 text-sm text-gray-500 hover:text-black"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
}
