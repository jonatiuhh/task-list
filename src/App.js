import './App.css';
import ListaDeTareas from './componentes/listadetareas';
import meme from './images/1.jpg';
import hand from './images/hand.png';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='meme-contenedor'>
        <img
        src={meme}
        className='meme'
        alt='mememe' 
        />
      </div>
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
