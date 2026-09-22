import { IBook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBookCard = ({book} : {book : IBook}) => {
    return (
<div className="container mx-auto px-4 py-8">
  <div className="mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:flex-row">

    {/* Book Image */}
    <figure className="w-full shrink-0 bg-base-200 p-4 sm:w-56 sm:p-5 md:w-64">
      <Image
        src={book.image}
        alt={book.bookName}
        width={500}
        height={700}
        className="h-80 w-full rounded-xl object-cover shadow-md sm:h-full sm:max-h-80"
      />
    </figure>

    {/* Book Information */}
    <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">

      {/* Category + Rating */}
      <div className="flex items-center justify-between gap-3">
        <span className="badge badge-primary badge-outline">
          {book.category}
        </span>

        <div className="flex items-center gap-1 rounded-full bg-warning/10 px-3 py-1">
          <span>⭐</span>
          <span className="font-semibold">
            {book.rating}
          </span>
        </div>
      </div>

      {/* Book Title */}
      <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="mt-1 text-sm text-base-content/60 sm:text-base">
        By{" "}
        <span className="font-semibold text-primary">
          {book.author}
        </span>
      </p>

      {/* Review */}
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/70 sm:text-base">
        {book.review}
      </p>

      {/* Book Info */}
      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-base-200 p-3 sm:grid-cols-3 sm:p-4">

        <div>
          <p className="text-xs text-base-content/50">
            Pages
          </p>
          <p className="font-semibold">
            {book.totalPages}
          </p>
        </div>

        <div>
          <p className="text-xs text-base-content/50">
            Published
          </p>
          <p className="font-semibold">
            {book.yearOfPublishing}
          </p>
        </div>

        <div>
          <p className="text-xs text-base-content/50">
            Publisher
          </p>
          <p className="font-semibold">
            {book.publisher}
          </p>
        </div>

      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-ghost px-3 py-3"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* View Details Button */}
      <div className="mt-5 flex justify-end">
        <Link href={`book/${book.bookId}`}>
        <button className="btn btn-primary w-full sm:w-auto">
          View Details →
        </button>
        </Link>
      </div>

    </div>
  </div>
</div>

    )
};

export default ListedBookCard;