import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Book } from "./@types/book";
import axios from "axios";
import { BooksPage } from "./pages/BooksPage";
import { CatalogPage } from "./pages/CatalogPage";
import { TablePage } from "./pages/TablePage";

const URL = "http://localhost:3001/api/books.json"

export function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(URL);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooks();
  }, []);

  const removeBook = (id: string) => setBooks([...books].filter((book: Book) => book.id !== id));
  const orderUp = () => setBooks([...books].sort((a, b) => a.title.localeCompare(b.title)));
  const orderDown = () => setBooks([...books].sort((a, b) => b.title.localeCompare(a.title)));

  return (
      <div className="h-screen w-screen bg-slate-800 flex flex-col items-center text-slate-300 overflow-x-hidden gap-10">
        <Header />
        <main className="flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={
              <TablePage
                handleOrderDown={orderDown}
                handleOrderUp={orderUp}
                handleRemoveBook={removeBook}
                books={books}
              />
            }/>
            <Route path="/front-end" element={<BooksPage books={books} categoy="frontend" />} />
            <Route path="/programming" element={<BooksPage books={books} categoy="programming" />} />
            <Route path="/design" element={<BooksPage books={books} categoy="design" />} />
            <Route path="/catalog" element={<CatalogPage books={books} />} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}
