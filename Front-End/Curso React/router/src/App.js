import { Routes, Route, Link } from 'react-router-dom'
 
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/portafolio">Portafolio</Link>
        </li>
      </ul>
    </nav>
  );
};
 
const Inicio = () => {
  return (
    <h1>Inicio</h1>
  )
}
 
const Proyecto1 = () => {
  return (
    <h2>Proyecto 1</h2>
  )
}
 
const Proyecto2 = () => {
  return (
    <h2>Proyecto 2</h2>
  )
}
 
const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={'/portafolio/proyecto1'}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={'/portafolio/proyecto2'}>Proyecto 2</Link>
        </li>
      </ul>
        <div>
          <section>
            <Routes>
              <Route exact path="/proyecto1" element={<Proyecto1/>} />
              <Route exact path="/proyecto2" element={<Proyecto2/>} />
            </Routes>
          </section>
        </div>
    </div>                         
  )
}
 
const App = () => {
  return (
    <div>
      <Menu />
      <section>
          <Routes>
              <Route exact path="/" element={<Inicio/>} />
              <Route exact path="/portafolio/*" element={<Portafolio/>} />
          </Routes>    
      </section>
    </div>
  );
}
 
export default App;