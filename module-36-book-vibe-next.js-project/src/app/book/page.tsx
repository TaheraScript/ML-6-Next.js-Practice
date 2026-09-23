import BookCard from '@/components/card/BookCard';
import { IBook } from '@/type/books.type';


const getBooks =async () =>{
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`)
    return await res.json()
    }catch(error){
      console.error("Error fetching books data:", error)
      return []
    }
} 

const Books = async() => {
    const booksData = await getBooks()
    return (
        <main className="min-h-screen bg-gray-50 px-6 py-12">
      
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
          Explore Our Collection
        </p>

        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Discover Your Next Book
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Explore our collection of classic, fiction, fantasy and mystery
          books.
        </p>
      </div>

      {/* Book Grid */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
                booksData.map((book:IBook) => <BookCard key={book.bookId} book={book}></BookCard>)
            }
      </section>
    </main>
  );
}
        

export default Books;