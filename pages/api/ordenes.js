
import { PrismaClient } from "@prisma/client"


export default async function handler(req, res) {

	const prisma = new PrismaClient()

    if(req.method === "POST"){
        const orden = await prisma.orden.create({
            data: {
                referencia: req.body.referencia,
                fecha: req.body.fecha,
                tipo: req.body.tipo,
                totalOrden: req.body.totalOrden,
                pedido: req.body.pedido
            }
        })
	    res.status(200).json(orden)
    }

	const ordenes = await prisma.orden.findMany({})
    res.status(200).json(ordenes)
}
