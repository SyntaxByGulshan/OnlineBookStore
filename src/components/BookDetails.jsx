import React, { useContext, useEffect, useState } from 'react';
import { IndexContext } from '../context/indexContext';
import { useNavigate } from 'react-router-dom';

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { index } = useContext(IndexContext);

  useEffect(() => {
    if (index == null) {
      navigate("/bookStore");
    } else {
      const res = JSON.parse(sessionStorage.getItem(index[1]));
      setBook(res.docs[index[0]]);
    }
  }, []);

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <h1 className="text-white text-2xl font-semibold animate-pulse">Loading...</h1>
      </div>
    );
  }
  const src = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://picsum.photos/400/600?blur=2";

  // Try to build PDF/Read Online links from Open Library data
  const readOnlineLink = book.ia?.length
    ? `https://archive.org/stream/${book.ia[0]}`
    : null;

  const downloadPdfLink = book.ia?.length
    ? `https://archive.org/download/${book.ia[0]}/${book.ia[0]}.pdf`
    : null;

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6 pt-20 pb-5">
      <div className="bg-gray-800 shadow-lg rounded-xl p-6 max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center">
        
        {/* Book Cover */}
        <div className="w-60 h-80 flex-shrink-0 overflow-hidden rounded-lg shadow-md">
          <img 
            src={src} 
            alt={book.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col gap-4 text-center md:text-left w-full">
          <h1 className="text-3xl font-bold text-white">{book.title}</h1>
          <p className="text-lg text-gray-300">
            <span className="font-medium text-gray-400">Author:</span> {book.author_name?.join(", ")}
          </p>
          {book.first_publish_year && (
            <p className="text-gray-400">
              <span className="font-medium">First Published:</span> {book.first_publish_year}
            </p>
          )}
          {book.language && (
            <p className="text-gray-400">
              <span className="font-medium">Languages:</span> {book.language.join(", ")}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            {readOnlineLink && (
              <a
                href={readOnlineLink}
            
            
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-md transition-colors"
              >
                 Read Online
              </a>
            )}
            {downloadPdfLink && (
              <a
                href={downloadPdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-md transition-colors"
              >
                 Download PDF
              </a>
            )}
            <button
              onClick={() => navigate("/bookStore")}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium shadow-md transition-colors"
            >
               Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
