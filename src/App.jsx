import { useState, useEffect } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {

  const [turnos, setTurnos] = useState(JSON.parse(localStorage.getItem('turnos')) ?? []);
  const [turno, setTurno] = useState({});

  useEffect(() => {
    localStorage.setItem('turnos', JSON.stringify(turnos));
  },[]);

  useEffect(() => {
    localStorage.setItem('turnos', JSON.stringify(turnos));
  }, [turnos]);

  const eliminarTurno = id => {
    const turnosActualizados = turnos.filter(turno => turno.id !== id);

    setTurnos(turnosActualizados);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />

      <div className='mt-12 md:flex'>
        <Formulario 
          turnos={turnos}
          setTurnos={setTurnos}
          turno={turno}
          setTurno={setTurno}
          
        />
        <ListadoPacientes 
          turnos={turnos}
          setTurno={setTurno}
          eliminarTurno={eliminarTurno}
        />
      </div>
      
    </div>
  )
}

export default App
