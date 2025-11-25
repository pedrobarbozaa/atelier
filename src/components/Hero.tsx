import FeatureCard from "./FeatureCard"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">Bem-vindo ao seu espaço criativo</h1>
        <p className="hero-description">
          O Atelier Toolkit é sua coleção completa de ferramentas para corte e costura. Organize seus projetos, calcule
          medidas, gerencie tecidos e muito mais - tudo em um ambiente acolhedor e intuitivo, pensado especialmente para
          artesãos e profissionais da costura.
        </p>
        <div className="hero-features">
          <FeatureCard
            icon="✂️"
            title="Ferramentas Práticas"
            description="Calculadoras de tecido, conversores de medidas e muito mais"
          />
          <FeatureCard
            icon="📐"
            title="Gestão de Projetos"
            description="Organize seus trabalhos e acompanhe o progresso de cada peça"
          />
          <FeatureCard
            icon="🧵"
            title="Biblioteca de Recursos"
            description="Acesse tutoriais, padrões e dicas para aprimorar suas técnicas"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
