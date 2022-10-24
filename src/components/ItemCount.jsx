import { useState, useEffect } from "react"

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(0)

    const handleAdd = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }

    const handleSubstract = () => {
        if(contador > 0) {
            setContador(contador - 1)
        }
    }
    
  return (
        <>
            <div>
                <button className="add" onClick={() => handleAdd()}>Añadir</button>
                <span>{contador}</span>
                <button className="remove" onClick={() => handleSubstract()}>Quitar</button>
            </div>
            <button className='add-cart' onClick={() => {
                contador >=1 ? onAdd() : console.log("Agrega algo al carrito")
            }}>Agregar al carrito</button>
        </>
  )
}

export default ItemCount