import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <>
    <nav>
        <div className="tipo-prenda">
            <a href="#">Mujer</a>
            <a href="#">Hombre</a>
        </div>
        <a href="#" className="title">Black Clothes</a>
        <CartWidget/>
    </nav>
    </>
  )
}

export default NavBar