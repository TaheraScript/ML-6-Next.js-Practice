"use client";
import ListedBookCard from "@/components/card/ListedBookCard";
import { BooksContext } from "@/context/BooksProvider";
import { IBook } from "@/type/books.type";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
const [sortBy,setSortBy] = useState<'rating' | 'pages' | 'year'>('rating')
const sortBooks =(books :IBook) =>{
 const sortedBooks =[...books]
    if(sortBy === 'rating'){
        sortedBooks.sort ((a,b) => b.rating -a.rating)
    }
    else if(sortBy === 'pages'){
        sortedBooks.sort ((a,b)=>b.totalPages - a.totalPages)
    }
    else if (sortBy == 'year'){
        sortedBooks.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing)
    }
    return sortedBooks
}
const sortedReadBooks = sortBooks(readBooks)
const sortedWishlist = sortBooks(wishList)

  return (
    <div className=" py-10 ">
      <h2 className="text-center font-bold container mx-auto px-14 py-6 bg-[#f3f3f3] rounded-2xl">
        Books
      </h2>
      <div className="text-center">
        <select 
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
        defaultValue="Pick a Runtime" className="select select-success">
  <option disabled={true}>Sort By</option>
  <option value={'rating'}>Rating</option>
  <option value={'pages'}>Number of Pages</option>
  <option value={'year'}>Publisher year</option>
</select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ?(
            sortedReadBooks.map((book : IBook) =>{
            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>})
        ) :(
            <p className="text-center text-lg font-semibold">
                No read books found
            </p>
        )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${readBooks.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          { sortedWishlist.length >0 ? (
            sortedWishlist.map((book : IBook) =>{ 
            return <ListedBookCard key={book.bookId} book={book}></ListedBookCard>})
          ) : (
            <p className="text-center text-lg font-semibold">
                No wishlist books found
            </p>
          )
          }
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
