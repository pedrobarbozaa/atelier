import "./Logo.css"

interface LogoProps {
  text?: string
}

function Logo({ text = "Atelier Toolkit" }: LogoProps) {
  return (
    <div className="logo">
      <span className="logo-text">{text}</span>
    </div>
  )
}

export default Logo
