import swal from 'sweetalert';

const Turnos = ({persona, setTurno, eliminarTurno}) => {

  const {nombre, seña, horario, fecha, whatsapp, id} = persona

  const handleEliminar = () => {
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado, no podras recuperar este turno!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        eliminarTurno(id);
        swal("Poof! El turno fue eliminado", {
          icon: "success",
          
        });
      } else {
        swal("Tu turno esta seguro!");
      }
    });
  }

  return (
    <div className="mx-5 my-10 bg-gray-200 shadow-md px-5 py-7 rounded-xl">
        <p className="font-bold mt-3 text-gray-700 uppercase">Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mt-3 text-gray-700 uppercase">Seña: {""}
          <span className="font-normal normal-case">{seña}</span>
        </p>

        <p className="font-bold mt-3 text-gray-700 uppercase">Hora: {""}
          <span className="font-normal normal-case">{horario}</span>
        </p>

        <p className="font-bold mt-3 text-gray-700 uppercase">Fecha: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mt-3 text-gray-700 uppercase">WhatsApp: {""}
          <span className="font-normal normal-case">{whatsapp}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-full"
            onClick={() => setTurno(persona)}
          >Editar</button>
        
          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-full"
            onClick={handleEliminar}
          >Eliminar</button> 
        </div>

    </div>
  )
}

export default Turnos
