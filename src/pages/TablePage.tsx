import { TableBody } from "../components/table/TableBody";
import { TableFooter } from "../components/table/TableFooter";
import { TableHeader } from "../components/table/TableHeader";
import booksJSON from '../api/books.json'
import { Book } from "../@types/book";
import { useState, useEffect } from "react";

export function TablePage() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => setBooks(booksJSON), [])

  function handleRemoveBook(id: string): void {
    const newBooks = [...books].filter((book: Book) => book.id !== id);
    setBooks(newBooks);
  }

  function handleOrderUp(): void {
    const newBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
    setBooks(newBooks);
  }

  function handleOrderDown(): void {
    const newBooks = [...books].sort((a, b) => b.title.localeCompare(a.title));
    setBooks(newBooks);
  }

  return (
    <table className="border-2 items-center bg-slate-700 p-2 grid-cols-3 w-1/2">
      <TableHeader
        orderUp={handleOrderUp}
        orderDown={handleOrderDown}
      />
      <TableBody
        books={books}
        onDeleteBook={handleRemoveBook}
      />
      <TableFooter len={books.length} />
    </table>
  )
}
