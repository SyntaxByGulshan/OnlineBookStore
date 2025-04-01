import React from "react";
import { Link } from "react-router-dom";
import BookCard from "../card/BookCard";

const BookStore = () => {
  // list of books
  const books = [
    { bookName: "Book 1", bookAuthor: "Author 1", bookPrice: 10.99, publishDate: "2000-01-01", image: "./book.png" },
    { bookName: "Book 2", bookAuthor: "Author 2", bookPrice: 20.99, publishDate: "2001-02-15", image: "./book.png" },
    { bookName: "Book 3", bookAuthor: "Author 3", bookPrice: 30.99, publishDate: "2002-05-20", image: "./book.png" },
    { bookName: "Book 4", bookAuthor: "Author 4", bookPrice: 40.99, publishDate: "2003-07-30", image: "./book.png" },
    { bookName: "Book 5", bookAuthor: "Author 5", bookPrice: 50.99, publishDate: "2004-10-10", image: "./book.png" },
    { bookName: "Book 6", bookAuthor: "Author 6", bookPrice: 50.99, publishDate: "2004-10-10", image: "./book.png" },
    { bookName: "Book 7", bookAuthor: "Author 7", bookPrice: 50.99, publishDate: "2004-10-10", image: "./book.png" },
    { bookName: "Book 8", bookAuthor: "Author 8", bookPrice: 50.99, publishDate: "2004-10-10", image: "./book.png" },
    { bookName: "Book 9", bookAuthor: "Author 9", bookPrice: 50.99, publishDate: "2004-10-10", image: "./book.png" },
    { bookName: "Book 10", bookAuthor: "Author 10", bookPrice: 50.99, publishDate: "2004-10-10", image: "./book.png" },
    { bookName: "Book 11", bookAuthor: "Author 11", bookPrice: 50.99, publishDate: "2004-10-10", image: "./book.png" }
];

  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center pt-24 min-h-screen bg-gray-100">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </>
  );
};
export default BookStore;
