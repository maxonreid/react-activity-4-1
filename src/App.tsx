import Division from "./components/Division"
import Multiplication from "./components/Multiplication"
import Substraction from "./components/Substraction"
import Sum from "./components/Sum"

export default function App() {


  return (
    <div>
      <h1>Simple Calculator</h1>

      <Sum />
      <Substraction />
      <Multiplication />
      <Division />

    </div>
  )
}