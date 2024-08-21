import React from 'react'
import { NavLink } from 'react-router-dom'

export function Nav() {
  return (
    <nav className="flex justify-center items-center 
   border-b-[1px] shadow-xl w-full text-slate-100 bg-slate-400">
      <ul className='flex justify-center items-center child:py-1 child:px-5 child:border-[1px] bg-slate-500 child-hover:bg-slate-700 child:transition-all'>
        <li>
          <NavLink to={"/"}>Database</NavLink>
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
