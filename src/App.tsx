import { TableBody } from "./components/TableBody";
import { TableFooter } from "./components/TableFooter";
import { TableHeader } from "./components/TableHeader";

import { Component } from 'react'
import booksJSON from './api/books.json'
import { Book } from "./types/book";

class App extends Component {
  state = {
    books: [] as Book[]
  }

  componentDidMount(): void {
    const books = JSON.parse(JSON.stringify(booksJSON)) as Book[]
    this.setState({ books });
  }

  handleRemoveBook = (id: string): void => {
    const books = this.state.books.filter((book: Book) => book.id !== id);
    this.setState({ books });
  }

  handleOrderUp = (): void => {
    const books = this.state.books.sort((a, b) => a.title.localeCompare(b.title))
    this.setState({ books })
  }

  handleOrderDown = (): void => {
    const books = this.state.books.sort((a, b) => b.title.localeCompare(a.title))
    this.setState({ books })
  }

  render() {
    return (
      <main className="h-screen w-screen bg-slate-800 flex flex-col items-center text-slate-300 overflow-x-hidden gap-10">
        <header className="flex flex-col items-center p-3 w-screen border-b-[1px] border-slate-500">
          <h1 className="text-4xl font-bold">Table Editor</h1>
          <p className="text-sm text-slate-500">
            Edit and manage your tables in real-time.
          </p>
        </header>
        <table className="border-2 items-center bg-slate-700 p-2 grid-cols-3 w-1/2">
          <TableHeader
            orderUp={this.handleOrderUp}
            orderDown={this.handleOrderDown}
          />
          <TableBody
            books={this.state.books}
            onDeleteBook={this.handleRemoveBook}
          />
          <TableFooter len={this.state.books.length} />
        </table>
        <footer className="p-5 w-full flex justify-center items-center border-t-[1px]">
          <h3>
          Please consider checking out my {" "}
          <a
            href="https://github.com/YUT4R0"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline"
          >github</a>
          ! 🐺🩷
          </h3>
        </footer>
      </main>
    )
  }
}

export default App;
