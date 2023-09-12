import './App.css';
import Boton from './components/Boton';
import Contador from './components/contador';
import FrontJosik from './imagenes/FrontJosik.png';
import { useState } from 'react';

function App() {
    const [numClicks, setNumClicks] = useState(0);
    const manejarClick = ()=>{
    setNumClicks( numClicks + 1);

      }
    const reiniciarContador=()=>{
     setNumClicks(0);
    }

  return (
    <div className='App'>
     <div className='logo-contenedor'>
      <img
      className='logo'
      src={FrontJosik}
      alt='Logo'/>
     </div>
     <div><h1>Contador Clic</h1></div>
     <div className='contenedor-principal'>
      <Contador numClicks={numClicks}/>
        <Boton
        texto='Click'
        BotonDeClick={true}
        manejarClick={manejarClick}
        />
        <Boton
        texto='Reiniciar'
        BotonDeClick={false}
        manejarClick={reiniciarContador}
        />

     </div>
    </div>
  );
}

export default App;
