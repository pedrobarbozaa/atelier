import type React from "react"
import "./NavLink.css"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a href={href} className="nav-link">
      {children}
    </a>
  )
}

export default NavLink
