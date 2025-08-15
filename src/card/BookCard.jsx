import React from "react";

export default function BookCard({ authorNames = [], title, languages = [], coverId }) {
  const src = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://picsum.photos/400/600?blur=2"; // fallback

  return (
    <div className="relative w-40 h-60 rounded-2xl overflow-hidden shadow-lg cursor-pointer group">
      {/* Background image */}
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 "
        onError={(e) =>
          (e.currentTarget.src = "https://picsum.photos/400/600?grayscale")
        }
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>

      {/* Default view (title at bottom) */}
      <div className="absolute bottom-2 left-2 right-2 text-white transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
      </div>

      {/* Hover view (full details) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg font-bold mb-2 line-clamp-2">{title}</h2>
        <p className="text-sm mb-1">
          <span className="font-semibold">Author:</span>{" "}
          {authorNames.length ? authorNames.join(", ") : "Unknown"}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Languages:</span>{" "}
          {languages.length ? languages.join(", ") : "—"}
        </p>
      </div>
    </div>
  );
}
