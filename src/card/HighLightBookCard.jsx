import React from "react";

export default function HighLightBookCard({
  authorNames = [],
  title,
  languages = [],
  coverId,
}) {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/300x400.png?text=No+Cover";

  return (
    <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-105 transition duration-300">
      {/* Book Cover */}
      <img
        src={coverUrl}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Content on overlay */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-xl font-bold leading-tight line-clamp-2">
          {title}
        </h3>
        {authorNames.length > 0 && (
          <p className="text-sm text-gray-200 mt-1 line-clamp-1">
            by {authorNames.join(", ")}
          </p>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {languages.map((lang, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-xs rounded-full"
              >
                {lang.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Highlight Ribbon */}
      <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
        Featured
      </div>
    </div>
  );
}
