const products = [
    {
        nombre: "Buzo",
        categoria: "Hombre",
        precio: 120,
        imagen: "https://i.postimg.cc/hJzDyMMS/buzo-negro.png",
        stock: 5,
        id: 1
    },
    {
        nombre: "Camiseta",
        categoria: "Hombre",
        precio: 100,
        imagen: "https://i.postimg.cc/ZCby7tN4/camiseta-negra.png",
        stock: 6,
        id: 2
    },
    {
        nombre: "Chaqueta",
        categoria: "Hombre",
        precio: 140,
        imagen: "https://i.postimg.cc/8sVvvrPF/chaqueta-negra.png",
        stock: 7,
        id: 3
    },
    {
        nombre: "Zapatos",
        categoria: "Hombre",
        precio: 70,
        imagen: "https://i.postimg.cc/m1RTr44D/zapatos.png",
        stock: 3,
        id: 4
    },
    {
        nombre: "Pantalon",
        categoria: "Mujer",
        precio: 90,
        imagen: "https://i.postimg.cc/KK6ZdLst/pantalon.png",
        stock: 9,
        id: 5
    },
    {
        nombre: "Falda",
        categoria: "Mujer",
        precio: 85,
        imagen: "https://i.postimg.cc/F7TkwWbc/falda-negra.png",
        stock: 2,
        id: 6
    },
    {
        nombre: "Jogger",
        categoria: "Hombre",
        precio: 110,
        imagen: "https://i.postimg.cc/9DNXYsd8/jogger-negro.png",
        stock: 4,
        id: 7
    },
    {
        nombre: "Maleta",
        categoria: "Hombre",
        precio: 80,
        imagen: "https://i.postimg.cc/75LY7q2J/maleta-negra.png",
        stock: 6,
        id: 8
    },
    {
        nombre: "Vestido",
        categoria: "Mujer",
        precio: 130,
        imagen: "https://i.postimg.cc/7GSxD6pd/vesitdo-negro.png",
        stock: 5,
        id: 9
    }
]

export const getProducts = () =>
    new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 2000)
})