import { useState, useEffect } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Enviando Formulario..')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Turnos</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añadir Turnos y {""}
        <span className="text-indigo-600 font-bold">Administrar</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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

          <input id="seña" type="number" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="hora" className="block text-gray-700 uppercase font-bold">Hora del Turno</label>

          <input id="hora" type="time" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">Fecha</label>

          <input id="fecha" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="whatsapp" className="block text-gray-700 uppercase font-bold">WhatsApp</label>

          <textarea id="whatsapp" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Contacto"

          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 transition-all cursor-pointer" value="Añadir Turno"
        />
      </form>
    </div>
      
    
  )
}

export default Formulario;


