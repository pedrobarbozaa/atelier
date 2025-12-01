import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
// import "./App.css"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
