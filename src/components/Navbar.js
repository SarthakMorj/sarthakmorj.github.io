import React, { useState } from 'react'
import { Link } from 'react-scroll'
import '../styles/Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = ['about','experience','projects','skills','contact']

  return (
    <nav className={open ? 'nav open' : 'nav'}>
      <div className="logo">Sarthak Morj</div>
      <div className="hamburger" onClick={()=>setOpen(!open)}>
        <div/><div/><div/>
      </div>
      <ul>
        {links.map(l => (
          <li key={l}>
            <Link
              to={l}
              smooth={true}
              duration={500}
              onClick={()=>setOpen(false)}
            >{l.charAt(0).toUpperCase()+l.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
