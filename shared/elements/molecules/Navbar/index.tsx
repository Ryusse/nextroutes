import { NavbarList } from './styles'

import Link from "next/link"

export const Navbar = () => {
  return (
    <nav>
      <NavbarList>
        <li><Link href='/' >Home</Link></li>
        <li><Link href='/hall' >Hall</Link></li>
      </NavbarList>
    </nav>
  )
}
