import { useState, useEffect } from 'react';
import Error from './Error';

const Formulario = ({ turnos, setTurnos, turno, setTurno}) => {
  const [nombre, setNombre] = useState('');
  const [seña, setSeña] = useState('');
  const [horario, setHorario] = useState('');
  const [fecha, setFecha] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if( Object.keys(turno).length > 0) {
      setNombre(turno.nombre);
      setSeña(turno.seña);
      setHorario(turno.horario);
      setFecha(turno.fecha);
      setWhatsapp(turno.whatsapp);
    } 

  }, [turno]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de formulario
    if( [nombre, seña, horario, fecha, whatsapp ].includes('')) {
      console.log('Hay un campo vacio');

      setError(true);
      return;
    } 

    setError(false);

    // Crear el nuevo paciente
    const objetoPersona ={
      nombre,
      seña,
      horario,
      fecha,
      whatsapp,
    }

    if(turno.id){
      // Editar el paciente
      objetoPersona.id = turno.id;
      const turnosActualizados = turnos.map(turnoState => turnoState.id === turno.id ? objetoPersona : turnoState);

      setTurnos(turnosActualizados);
      setTurno({});

    } else {
      // Agregar el paciente
      objetoPersona.id = generarId();
      setTurnos([...turnos, objetoPersona]);
    }

    // Limpiar el formulario
    setNombre('');
    setSeña('');
    setHorario('');
    setFecha('');
    setWhatsapp('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center text-white">Seguimiento Turnos</h2>
      <p className="text-lg mt-5 text-center mb-10 text-white">
        Añadir Turnos y {""}
        <span className="text-indigo-600 font-bold">Administrar</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-gray-200 shadow-md rounded-lg py-10 px-5 mb-10">

        {error && <Error><p>Todos los campos son obligatorios</p></Error>}

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Persona</label>

          <input
            id="mascota" 
            type="text" 
            placeholder="Nombre de la Persona" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
           />
        </div>

        <div className="mb-5">
          <label htmlFor="seña" className="block text-gray-700 uppercase font-bold">Seña</label>

          <input 
            id="seña" 
            type="number" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            min={300}
            value={seña}
            onChange={(e) => setSeña(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="hora" className="block text-gray-700 uppercase font-bold">Horario</label>

          <input 
            id="hora" 
            type="time" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha</label>

          <input 
            id="fecha" 
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="whatsapp" className="block text-gray-700 uppercase font-bold">WhatsApp</label>

          <textarea 
            id="whatsapp" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            placeholder="Contacto"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer" 
          value={turno.id ? 'Editar Turno' : 'Añadir Turno'}
        />
      </form>
    </div>
      
    
  )
}

export default Formulario;


