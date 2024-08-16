import React from 'react'

type Props = {
  len: number
}

export function TableFooter({ len }: Props) {
  return (
    <tfoot className='flex flex-col items-center border-t-[1px] p-1'>
      <tr>
        <td colSpan={3}>There are {len} books on the table</td>
      </tr>
    </tfoot>
  )
}
