import ItemContainer from "./components/ItemContainer"
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <>
    <header>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la mejor tienda de ropa"/>
    </header>

    <main>
      <ItemContainer/>
      <ItemCount stock={9} onAdd={() => console.log("Agregando")}/>
    </main>
    </>
  )
}

export default App