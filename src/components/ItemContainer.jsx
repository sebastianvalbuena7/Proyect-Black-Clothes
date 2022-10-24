import { useEffect, useState } from "react"
import { getProducts } from "../api/productos"
import Item from "./Item"

const ItemContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProducts()
        .then((items) => setProductos(items))
        .catch((e) => console.log(e))
  }, [])

  return (
    <>
    <div>
    {productos.map(producto => {
        return <Item 
          key={producto.id}
          nombre={producto.nombre}
          categoria={producto.categoria}
          precio={producto.precio}
          imagen={producto.imagen}
          />
      })}
    </div>
    </>
  )
}

export default ItemContainer