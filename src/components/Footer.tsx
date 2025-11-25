import FooterSection from "./FooterSection"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Atelier Toolkit</h3>
            <p className="footer-description">
              Suas ferramentas essenciais para corte e costura, organizadas em um só lugar.
            </p>
          </div>

          <FooterSection title="Contato">
            <p className="footer-text">contato@ateliertoolkit.com</p>
            <p className="footer-text">+55 (11) 98765-4321</p>
          </FooterSection>

          <FooterSection title="Endereço">
            <address className="footer-address">
              <p className="footer-text">Rua das Costuras, 123</p>
              <p className="footer-text">Bairro Criativo</p>
              <p className="footer-text">São Paulo, SP - 01234-567</p>
            </address>
          </FooterSection>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Atelier Toolkit. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
