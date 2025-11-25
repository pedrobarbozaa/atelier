import type React from "react"
import "./FooterSection.css"

interface FooterSectionProps {
  title: string
  children: React.ReactNode
}

function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="footer-section">
      <h4 className="section-title">{title}</h4>
      <div className="section-content">{children}</div>
    </div>
  )
}

export default FooterSection
