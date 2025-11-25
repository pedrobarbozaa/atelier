import NavLink from "./NavLink"
import "./Navigation.css"

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink href="/ferramentas">Ferramentas</NavLink>
      <NavLink href="/projetos">Projetos</NavLink>
      <NavLink href="/recursos">Recursos</NavLink>
    </nav>
  )
}

export default Navigation
