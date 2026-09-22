"use client";

import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/type/books.type";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const wishListProvider = useContext(BooksContext);
   const {wishList,setWishList} = wishListProvider ;

  const handleWishListBook = () => {
    setWishList([...wishList, book]);
    toast.success(`you have wishlisted "${book.bookName}"`, {
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
  };
  return (
    <button
      className="btn btn-primary w-full px-8 sm:w-auto"
      onClick={() => handleWishListBook()}
    >
      ♡ Wishlist
    </button>
  );
};

export default WishListButton;
