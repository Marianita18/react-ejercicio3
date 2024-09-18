import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
const Titulo = () => {
//  lógica del componente
const [msg,setMsg] = useState('Hello my Friend!');
// const mostrarMsg = () =>{
//     setMsg('Hello my Friend (from changed state)!')
// }
  return (
    <section className="container my-5 bg bg-danger text-white text-center">
      <h1>{msg}</h1>
      <button
        className="btn btn-primary"
        onClick={() => setMsg("Hello my Friend (from changed state)!")}>
        Botón
      </button>
    </section>
  );
};
export default Titulo;
