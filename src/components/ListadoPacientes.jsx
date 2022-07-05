import Turnos from './Turnos';

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Turnos</h2>
      
      <p  className=" text-xl mt-5 mb-10 text-center">
        Administrar mis {""}
        <span className="text-indigo-600 font-bold">Turnos</span>
      </p>

      <Turnos />
      <Turnos />
      <Turnos />
      <Turnos />
      <Turnos />
      <Turnos />
      <Turnos />
    </div>
    
  )
}

export default ListadoPacientes
