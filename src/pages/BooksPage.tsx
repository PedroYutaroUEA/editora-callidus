import { Link } from 'react-router-dom';
import { Book } from '../@types/book'

type Props = {
  books: Book[],
  categoy: "frontend" | "programming" | "design",
} 

const IMG_PATH = "/assets/images/";

export function BooksPage({ books, categoy }: Props) {
  return (
    <table className="border-[1px] items-center bg-slate-700 w-1/2 flex flex-col ">
      <thead className='flex justify-center bg-slate-800 w-full p-2 text-xl border-b-[1px]'>
        <tr>
          <th>
            <h1>{categoy.toUpperCase()}</h1>
          </th>
        </tr>
      </thead>
      <tbody className='grid grid-cols-2'>
        {
          books
            .filter(book => book.category === categoy)
            .map(book => (
              <tr key={book.id} className='border-b-[1px]'>
                <td className='flex gap-2 items-center borderb-[1px] h-full'>
                  <img width="100px" src={`${IMG_PATH + book.id}.jpg`} alt="book thumb" />
                  <Link to={`/book/${book.slug}`} className="flex flex-col space-y-5">
                    <h1 className='text-lg font-bold'>
                      {book.title}
                    </h1>
                    <p className='text-sm font-light line-clamp-3'>
                      {book.description}
                    </p>
                  </Link>
                </td>
              </tr>
            ))
        }
      </tbody>
    </table>
  )
}
