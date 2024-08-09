import React from 'react'

export function TableHeader() {
  return (
    <thead className='w-full flex flex-col items-center'>
      <tr className='w-full flex justify-center border-b-[1px]'>
        <th colSpan={3}>Book table</th>
      </tr>
      <tr className='flex justify-around w-full'>
        <th className='border-b-[1px] w-full'>ISBN</th>
        <th className='border-b-[1px] border-x-[1px] w-full'>Título</th>
        <th className='border-b-[1px] w-full'>Autor</th>
      </tr>
    </thead>
  )
}
