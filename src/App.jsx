import Bienvenidos from "./components/Bienvenidos"
import TeoriaComponente from "./components/TeoriaComponente"

function App() {
  //Aqui va la logica del componente
  return (
    //Aqui se puede agregar mas logica
    <main className="container my-5">
    <h1>Hola Mundo!</h1>
    {/* <Bienvenidos></Bienvenidos> */}
    <Bienvenidos/>
    <TeoriaComponente/>
    </main>
  )
}

export default App
