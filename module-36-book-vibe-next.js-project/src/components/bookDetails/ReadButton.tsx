"use client";

import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/type/books.type";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const booksProvider = useContext(BooksContext);
  const { readBooks, setReadBooks } = booksProvider;

  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`you have read "${book.bookName}"`, {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }
  return (
    <button
      className="btn btn-primary w-full px-8 sm:w-auto"
      onClick={() => handleReadBook()}
    >
      Read Book →
    </button>
  );
};

export default ReadButton;
