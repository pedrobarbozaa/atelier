"use client"

import { useState, type FormEvent } from "react"
import "./Calculator.css"

type MeasureType = "select" | "circunference" | "radius" | "clothsize" | "hook"

const Calculator = () => {
  const [measureType, setMeasureType] = useState<MeasureType>("select")
  const [inputValue, setInputValue] = useState<string>("")
  const [result, setResult] = useState<number | null>(null)

  const placeholders: Record<MeasureType, string> = {
    select: "",
    circunference: "Medida do raio (cm)",
    radius: "Medida da circunferência (cm)",
    clothsize: "Medida da cintura (cm)",
    hook: "Medida do quadril (cm)",
  }

  const handleMeasureChange = (newMeasureType: MeasureType) => {
    setMeasureType(newMeasureType)
    setInputValue("")
    setResult(null)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const value = Number.parseFloat(inputValue)
    if (isNaN(value)) return

    let calculatedResult = 0

    switch (measureType) {
      case "circunference":
        calculatedResult = 2 * Math.PI * value // precisa do raio
        break
        case "radius":
          calculatedResult = value / (2 * Math.PI) // precisa da circunferência
        break
      case "clothsize":
        calculatedResult = value * 3 // precisa da cintura
        break
      case "hook":
        calculatedResult = (value * 1) / 16 // precisa do quadril
        break
    }

    setResult(calculatedResult)
  }

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Calculadora de medidas</h2>
      <select
        id="calculator-select"
        className="calculator-select"
        value={measureType}
        onChange={(e) => handleMeasureChange(e.target.value as MeasureType)}
      >
        <option value="select" selected disabled>Selecione a medida</option>
        <option value="clothsize">Tecido para prega</option>
        <option value="hook">Gancho</option>
        <option value="circunference">Circunferência</option>
        <option value="radius">Raio</option>
      </select>

      <form className="calculator-form" onSubmit={handleSubmit}>
        <input
          type="number"
          className="calculator-input"
          placeholder={placeholders[measureType]}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          step="0.01"
        />
        <button type="submit" className="calculator-button">
          Calcular
        </button>
      </form>
      {measureType === "hook" ? result !== null &&  <p className="calculator-result">Resultado <br/> Frente: {result.toFixed(1)} cm  |  Trás: {(result*2).toFixed(1)} cm</p> : result !== null &&  <p className="calculator-result">Resultado: {result.toFixed(1)} cm</p>}
    </div>
  )
}

export default Calculator
