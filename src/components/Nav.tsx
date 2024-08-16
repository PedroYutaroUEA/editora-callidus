import React from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
  return (
    <nav className="flex justify-center items-center w-full border-b-[1px] shadow-xl">
      <ul className='flex gap-5 child:p-1'>
        <li>
          <NavLink to={"/"}>table</NavLink>
        </li>
        <li>
          <NavLink to={"/front-end"}>Front-end</NavLink>
        </li>
        <li>
          <NavLink to={"/design"}>Design</NavLink>
        </li>
        <li>
          <NavLink to={"/programming"}>Porgramming</NavLink>
        </li>
        <li>
          <NavLink to={"/catalog"}>Catalog</NavLink>
        </li>
      </ul>
    </nav>
  )
}
