import { useState } from 'react'
// import { Component } from 'react'
// 
// reglas de los hooks:
// -No se llaman en loops, ni condiciones ni while ni nada.
// siempre en el nivel mas alto del componente
//solo se llaman en dos lugares:
// -componentes de react
// -custom hooks
//    .cuando creemos un custom hook comenzara con 
//  "use" + el nombre que le queramos dar al hook.


// class App extends Component {
//   state = { contador: 0 }
//   incrementar = () => {
//     this.setState({ contador: this.state.contador + 1 })
//   }
//   decrementar = () => {
//     this.setState({contador: this.state.contador -1})
//   }
//   reset = () => {
//     this.setState({contador: 0})
//   }

//   render() {
//     return (
//       <div>
//         contasdor: {this.state.contador}
//         <button onClick={this.incrementar}>Incrementar</button>
//         <button onClick={this.decrementar}>Decrementar</button>
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     )
//   }
// }
const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => {
    setContador(contador +1)
  }

  return [contador ,incrementar]
}

const App = () => {
  const [contador , incrementar ] = useContador(0)
  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar} >Incrementar</button>
    </div>

  )
}

export default App
