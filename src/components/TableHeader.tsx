import React, { MouseEventHandler } from 'react'

import { ArrowDown, ArrowUp } from 'styled-icons/bootstrap'
import { Book } from '../types/book'

interface Props {
  orderUp(): void
  orderDown(): void
}

export function TableHeader({ orderUp, orderDown }: Props) {
  return (
    <thead className='w-full flex flex-col items-center'>
      <tr className='w-full flex justify-center border-b-[1px]'>
        <th colSpan={3}>Book table</th>
      </tr>
      <tr className='flex justify-around w-full'>
        <th className='border-b-[1px] w-full'>ISBN</th>
        <th className='flex items-center justify-between border-b-[1px] border-x-[1px] w-full'>
          <p className="mx-3">Título</p>
          <div className="flex items-center gap-1 mx-3">
            <ArrowUp
              className='hover:bg-slate-600 cursor-pointer transition-all p-1 rounded-full'
              size={22}
              onClick={orderUp}
              />
            <ArrowDown
              className='hover:bg-slate-600 cursor-pointer transition-all p-1 rounded-full'
              size={22}
              onClick={orderDown}
            />
          </div>
        </th>
        <th className='border-b-[1px] border-x-[1px] w-full'>Autor</th>
        <th className='border-b-[1px] w-full'>Remove</th>
      </tr>
    </thead>
  )
}
