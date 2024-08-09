import React from 'react'
import { Book } from '../types/book'

export function TableBody({ books }: { books: Book[]}) {
  return (
    <tbody className='flex flex-col w-full items-center'>
      {
        books.map(({author, id, title}, i) => (
          <tr key={i} className='flex w-full justify-around bg-slate-800 border-b-[1px] font-semibold items-center'>
            <td className=' w-full justify-center items-center  p-2'>{id}</td>
            <td className=' w-full justify-center items-center border-x-[1px] p-2'>{title}</td>
            <td className=' w-full justify-center items-center  p-2'>{author}</td>
          </tr>
        ))
      }
    </tbody>
  )
}
