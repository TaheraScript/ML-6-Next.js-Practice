import ReadButton from "@/components/bookDetails/ReadButton"
import WishListButton from "@/components/bookDetails/WishListButton"
import { IBook } from "@/type/books.type"
import Image from "next/image"

interface IBookDetailsPageProp{
    params :Promise<{
        id: string
    }>
}
const getBooks =async () =>{
    const res = await fetch('http://localhost:3000//booksData.json')
    return await res.json()
} 

const bookDetailsPage = async({params} : IBookDetailsPageProp) => {
   const {id} = await params
   const booksData =await getBooks()
   const book = booksData.find((book : IBook) =>book.bookId ===Number(id ))
    return (
       
<div className="container mx-auto px-4 py-6 sm:px-6 sm:py-10">
  <div className="card card-side mx-auto max-w-5xl flex-col overflow-hidden border border-base-300 bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl md:flex-row">

    {/* Book Image */}
    <figure className="w-full bg-base-200 p-5 sm:p-6 md:w-[35%]">
      <Image
        src={book.image}
        alt={book.bookName}
        width={500}
        height={700}
        className="h-87.5 w-full rounded-xl object-cover shadow-lg sm:h-112.5md:h-full md:max-h-125"
      />
    </figure>

    {/* Book Information */}
    <div className="card-body w-full p-5 sm:p-6 md:w-[65%] md:p-8">

      {/* Category + Rating */}
      <div className="flex items-center justify-between gap-3">
        <span className="badge badge-primary badge-outline">
          {book.category}
        </span>

        <div className="flex items-center gap-1 rounded-full bg-warning/10 px-3 py-1">
          <span className="text-lg">⭐</span>
          <span className="font-semibold">{book.rating}</span>
        </div>
      </div>

      {/* Book Title */}
      <h2 className="card-title mt-3 text-2xl font-bold sm:text-3xl">
        {book.bookName}
      </h2>

      {/* Author */}
      <p className="text-sm text-base-content/60 sm:text-base">
        By{" "}
        <span className="font-semibold text-primary">
          {book.author}
        </span>
      </p>

      {/* Review */}
      <div className="mt-3 sm:mt-4">
        <h3 className="mb-2 text-base font-semibold sm:text-lg">
          About this book
        </h3>

        <p className="line-clamp-5 text-sm leading-6 text-base-content/70">
          {book.review}
        </p>
      </div>

      {/* Book Information */}
      <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-base-200 p-3 sm:mt-5 sm:gap-3 sm:p-4">

        <div>
          <p className="text-xs text-base-content/50">
            Total Pages
          </p>
          <p className="text-sm font-semibold sm:text-base">
            {book.totalPages}
          </p>
        </div>

        <div>
          <p className="text-xs text-base-content/50">
            Published
          </p>
          <p className="text-sm font-semibold sm:text-base">
            {book.yearOfPublishing}
          </p>
        </div>

        <div>
          <p className="text-xs text-base-content/50">
            Publisher
          </p>
          <p className="text-sm font-semibold sm:text-base">
            {book.publisher}
          </p>
        </div>

        <div>
          <p className="text-xs text-base-content/50">
            Book ID
          </p>
          <p className="text-sm font-semibold sm:text-base">
            #{book.bookId}
          </p>
        </div>

      </div>

      {/* Tags */}
      <div className="mt-4">
        <p className="mb-2 text-sm font-semibold">
          Tags
        </p>

        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-ghost px-3 py-3"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="card-actions mt-5 flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-end">
       <ReadButton book={book}></ReadButton>
       <WishListButton book={book}></WishListButton>
        

       
      </div>

    </div>
  </div>
</div>
    );
};

export default bookDetailsPage;