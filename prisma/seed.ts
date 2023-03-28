import { PrismaClient } from "@prisma/client";
import { categorias } from "./data/Categorias";
import { productos } from "./data/Productos";

const prisma = new PrismaClient();

//inyectar a la base de datos
const main = async () : Promise<void> =>{
    try {
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error);
        
    }
}
main()