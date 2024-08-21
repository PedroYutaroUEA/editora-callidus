import { TableBody } from "../components/table/TableBody";
import { TableFooter } from "../components/table/TableFooter";
import { TableHeader } from "../components/table/TableHeader";
import { Book } from "../@types/book";
import { useState, useEffect } from "react";

interface Props {
  books: Book[]
  handleRemoveBook(id: string): void
  handleOrderUp(): void
  handleOrderDown(): void
}

export function TablePage({
  books,
  handleRemoveBook,
  handleOrderUp,
  handleOrderDown
}: Props) {
  return (
    <table className="border-2 items-center bg-slate-700 p-2 grid-cols-4 w-1/2">
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
