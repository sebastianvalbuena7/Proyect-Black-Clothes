const Item = ({nombre, categoria, precio, imagen}) => {
  return (
    <div className="Item">
        <p>{nombre}</p>
        <p>{categoria}</p>
        <span>{precio}</span>
        <img src={imagen} alt={nombre} className="img-products" />
    </div>
  )
}

export default Item