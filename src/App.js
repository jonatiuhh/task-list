import './App.css';
import ListaDeTareas from './componentes/listadetareas';
import meme from './images/1.jpg';
import hand from './images/hand.png';


function App() {
  return (
    <div className="aplicacion-tareas">
      <h2 className='text-1'>Se te olvidan tus pendientes?</h2>
      <div className='meme-contenedor'>
        <img
        src={meme}
        className='meme'
        alt='mememe' 
        />
      </div>
      <h2 className='text-2'>Crea una lista de tareas</h2>
      <div className='hand-contenedor'>
        <img 
        src={hand} 
        className='hand'
        alt='hand'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
