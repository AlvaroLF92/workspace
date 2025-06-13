import { useState } from 'react'

const CounterBase = () => {
  const [contador, setContador] = useState(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>
      <button onClick={() => setContador(contador - contador)}>Reset</button>
    </div>
  )
}

export default CounterBase