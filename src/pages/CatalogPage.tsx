import React from 'react'
import { Book } from '../@types/book'
import { Link } from 'react-router-dom'

type Props = {
  books: Book[] 
  categories: ("frontend" | "programming" | "design")[],
}

export function CatalogPage({ books, categories }: Props) {
  return (
    <div className='border-[1px] items-center bg-slate-700 w-1/2 flex flex-col'>
      {
        categories.map(cat => (
          <div key={cat} className='w-full'>
            <h1 className='p-2 w-full flex font-bold bg-slate-800 text-xl'>
              {cat.charAt(0).toUpperCase() + cat.slice(1)} Category
            </h1>
            <ol>
              {
                books
                 .filter(book => book.category === cat)
                 .map((book, i) => (
                    <li key={book.id} className='py-1 px-2 child:hover:brightness-150 child:transition-all'>
                      <Link to={`/books/${book.slug}`}>
                        {`${i + 1}. ${book.title}`}
                      </Link>
                    </li>
                  ))
              }
            </ol>
          </div>
        ))
      }
    </div>
  )
}
