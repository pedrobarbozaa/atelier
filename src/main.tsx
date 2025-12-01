import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./main.css"
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx"
import Tools from "./pages/Tools.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/ferramentas" element={<Tools/> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
