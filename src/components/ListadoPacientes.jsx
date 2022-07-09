import Turnos from './Turnos';

const ListadoPacientes = ({turnos, setTurno, eliminarTurno}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen hover:overflow-y-scroll">

      {turnos && turnos.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-white">Listado de Turnos</h2>
        
          <p  className="text-white text-xl mt-5 mb-10 text-center">
            Administrar mis {""}
            <span className="text-indigo-600 font-bold">Turnos</span>
          </p>

          { turnos.map( (persona) => (
              <Turnos 
                key={persona.id}
                persona={persona}
                setTurno={setTurno}
                eliminarTurno={eliminarTurno}
              />
            )) }
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center text-white">No hay Turnos</h2>
        
          <p  className=" text-xl mt-5 mb-10 text-center text-white">
            Comienza agregando {""}
            <span className="text-indigo-600 font-bold">Turnos</span>
          </p>
        </>
      )}

    </div>
    
  )
}

export default ListadoPacientes
