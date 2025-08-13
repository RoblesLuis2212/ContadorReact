import Bienvenidos from "./components/Bienvenidos";
import TeoriaComponente from "./components/TeoriaComponente";
import Contador from "./components/Contador";

function App() {
  //Aqui va la logica del componente
  const modulo = 2;
  return (
    //Aqui se puede agregar mas logica
    <main className="container my-5">
      <h1>Hola Mundo!</h1>
      {/* <Bienvenidos></Bienvenidos> */}
      <Bienvenidos />
      <TeoriaComponente comision="Web 13" modulo={modulo} />
      <Contador />
    </main>
  );
}

export default App;
