import Logo from "./Logo"
import Navigation from "./Navigation"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo-link">
          <Logo />
        </a>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
