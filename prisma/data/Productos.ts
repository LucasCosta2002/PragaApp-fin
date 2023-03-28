const productos = [
    {
        nombre: "Expresso",
        precio: 190,
        imagen: "cafe_01",
        categoriaId: 1
    },
    {
        nombre: "Jarrita",
        precio: 240,
        imagen: "cafe_02",
        categoriaId: 1
    },
    {
        nombre: "Expresso Doble",
        precio: 400,
        imagen: "cafe_03",
        categoriaId: 1
    },
    {
        nombre: "Latte",
        precio: 400,
        imagen: "cafe_04",
        categoriaId: 1
    },
    {
        nombre: "Latte Machiatto",
        precio: 400,
        imagen: "cafe_05",
        categoriaId: 1
    },
    {
        nombre: "Moka",
        precio: 420,
        imagen: "cafe_06",
        categoriaId: 1
    },
    {
        nombre: "Capuccino Italiano",
        precio: 420,
        imagen: "cafe_07",
        categoriaId: 1
    },
    {
        nombre: "Matcha Latte",
        precio: 350,
        imagen: "cafe_08",
        categoriaId: 1
    },
    {
        nombre: "Latte Almendrado",
        precio: 450,
        imagen: "cafe_09",
        categoriaId: 1
    },
    {
        nombre: "Submarino",
        precio: 380,
        imagen: "cafe_10",
        categoriaId: 1
    },
    {
        nombre: "Té en Hebras",
        precio: 380,
        imagen: "cafe_11",
        categoriaId: 1
    },
    {
        nombre: "Terciopelo Baileys",
        precio: 550,
        imagen: "frio_01",
        categoriaId: 2
    },
    {
        nombre: "Frapuccino",
        precio: 550,
        imagen: "frio_02",
        categoriaId: 2
    },
    {
        nombre: "Afogato",
        precio: 500,
        imagen: "frio_03",
        categoriaId: 2
    },
    {
        nombre: "Matcha Frío",
        precio: 380,
        imagen: "frio_04",
        categoriaId: 2
    },
    {
        nombre: "Té Frío",
        precio: 400,
        imagen: "frio_05",
        categoriaId: 2
    },
    {
        nombre: "Latte Helado",
        precio: 400,
        imagen: "frio_06",
        categoriaId: 2
    },
    {
        nombre: "Licuado Mix",
        precio: 400,
        imagen: "licuado_01",
        categoriaId: 3
    },
    {
        nombre: "Helado con Leche",
        precio: 400,
        imagen: "licuado_02",
        categoriaId: 3
    },
    {
        nombre: "Exprimido de Naranja",
        precio: 300,
        imagen: "bebida_01",
        categoriaId: 4
    },
    {
        nombre: "Agua Mineral",
        precio: 250,
        imagen: "bebida_02",
        categoriaId: 4
    },
    {
        nombre: "Gaseosas",
        precio: 250,
        imagen: "bebida_03",
        categoriaId: 4
    },
    {
        nombre: "Agua Saborizada",
        precio: 250,
        imagen: "bebida_04",
        categoriaId: 4
    },
    {
        nombre: "Tostado Clásico",
        precio: 650,
        imagen: "sandwich_01",
        categoriaId: 5
    },
    {
        nombre: "Tostado Oliva",
        precio: 800,
        imagen: "sandwich_02",
        categoriaId: 5
    },
    {
        nombre: "Tostado Integral",
        precio: 600,
        imagen: "sandwich_03",
        categoriaId: 5
    },
    {
        nombre: "Bruschetta",
        precio: 450,
        imagen: "sandwich_04",
        categoriaId: 5
    },
    {
        nombre: "Medialuna",
        precio: 80,
        imagen: "sandwich_05",
        categoriaId: 5
    },
    {
        nombre: "Medialuna rellena J&Q",
        precio: 300,
        imagen: "sandwich_06",
        categoriaId: 5
    },
    {
        nombre: "Tostadas",
        precio: 350,
        imagen: "sandwich_07",
        categoriaId: 5
    },
    {
        nombre: "Porción de Torta",
        precio: 480,
        imagen: "torta_01",
        categoriaId: 6
    },
    {
        nombre: "Brownie",
        precio: 220,
        imagen: "torta_02",
        categoriaId: 6
    },
    {
        nombre: "Cookies",
        precio: 170,
        imagen: "torta_03",
        categoriaId: 6
    },
    {
        nombre: "Alfajor de Maicena",
        precio: 170,
        imagen: "torta_04",
        categoriaId: 6
    },
    {
        nombre: "Alfajor Sableé",
        precio: 170,
        imagen: "torta_05",
        categoriaId: 6
    },
    {
        nombre: "Muffin del Día",
        precio: 170,
        imagen: "torta_06",
        categoriaId: 6
    },
    {
        nombre: "Budín Cítrico",
        precio: 170,
        imagen: "torta_07",
        categoriaId: 6
    },
    {
        nombre: "Pasta Frola",
        precio: 380,
        imagen: "sintacc_01",
        categoriaId: 7
    },
    {
        nombre: "Cuadrado de Brownie",
        precio: 320,
        imagen: "sintacc_02",
        categoriaId: 7
    },
    {
        nombre: "Tarta",
        precio: 450,
        imagen: "sintacc_03",
        categoriaId: 7
    },
    {
        nombre: "Bowl de Granola y Frutas",
        precio: 550,
        imagen: "saludable_01",
        categoriaId: 8
    },
    {
        nombre: "Frutas de Estacion con expremido de Naranja",
        precio: 400,
        imagen: "saludable_02",
        categoriaId: 8
    },
    {
        nombre: "Muffin de Harina de Algarroba",
        precio: 190,
        imagen: "saludable_03",
        categoriaId: 8
    },
    {
        nombre: "Tarta Integral de Manzana",
        precio: 430,
        imagen: "saludable_04",
        categoriaId: 8
    },
    {
        nombre: "Clásico",
        precio: 1750,
        imagen: "box_01",
        categoriaId: 9
    },
    {
        nombre: "Pausa",
        precio: 2100,
        imagen: "box_02",
        categoriaId: 9
    },
    {
        nombre: "Saludable",
        precio: 1800,
        imagen: "box_03",
        categoriaId: 9
    },
    {
        nombre: "Premium",
        precio: 3300,
        imagen: "box_04",
        categoriaId: 9
    }
]

export {
productos 
}