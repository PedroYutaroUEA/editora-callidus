import React from 'react'
import { Book } from '../types/book'

interface Props {
  books: Book[]
  onDeleteBook: (bookId: string) => void
}

export function TableBody({ books, onDeleteBook }: Props) {
  return (
    <tbody className='flex flex-col w-full items-center'>
      {
        books.map(({author, id, title}, i) => (
          <tr key={i} className='flex w-full justify-around py-2 bg-slate-800 border-b-[1px] font-semibold items-center'>
            <td className='w-full justify-center items-center  p-2'>{id}</td>
            <td className='w-full justify-center items-center p-2'>{title}</td>
            <td  className='w-full justify-center items-center p-2'>{author}</td>
            <td className='w-full flex justify-center items-center'>
              <button
                className='hover:brightness-75 transition-all border-2 border-slate-200 bg-red-500 text-slate-200 p-2 rounded-md'
                onClick={() => onDeleteBook(id)}
              >Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  )
}
