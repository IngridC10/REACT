import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import SegundoComponente from './components/SegundoComponente';
import EjercicioComponent from './components/EjercicioComponent.';

function App() {

  const fecha=new Date();
  const yearActual=fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Hola hice el cambio,ingrid alison calzada </h1>

      <PrimerComponente/>
      <hr/>
      <EjercicioComponent year={yearActual}/>
      </header>
    
    
    </div>
  );
}

export default App;
