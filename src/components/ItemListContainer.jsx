import ItemContainer from "./ItemContainer"

const ItemListContainer = ({greeting}) => {
  return (
    <>
        <div className="bienvenida">
            <h2>{greeting}</h2>
        </div>
    </>
  )
}

export default ItemListContainer