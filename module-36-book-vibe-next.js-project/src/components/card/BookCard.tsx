import { IBook } from '@/type/books.type';
import Image from 'next/image';
import Link from 'next/link';

interface IBookPropType {
    book : IBook
}
const BookCard = ({book} :IBookPropType) => {
 
    return (
      <div >
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ">
      
      {/* Book Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300} height={250}
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow">
          ⭐ {book.rating}
        </div>

        {/* Category */}
        <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {book.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        
        {/* Book Name */}
        <h2 className="mb-1 line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mb-4 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Book Information */}
        <div className="mb-4 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 text-sm">
          <div>
            <p className="text-gray-400">Pages</p>
            <p className="font-semibold text-gray-800">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-gray-400">Published</p>
            <p className="font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={`/book/${book.bookId}`}><button className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
          View Details →
        </button></Link>
      </div>
    </div>
      </div>   
  );
};
export default BookCard;