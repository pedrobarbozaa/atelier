import Header from "../components/Header"
import Footer from "../components/Footer"
import Calculator from "../components/Calculator"

function Tools() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Calculator />
      </main>
      <Footer />
    </div>
  )
}

export default Tools
