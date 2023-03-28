
import { PrismaClient } from "@prisma/client"


export default async function handler(req, res) {

	const prisma = new PrismaClient()

    if(req.method === "POST"){
        const delivery = await prisma.delivery.create({
            data: {
                nombre: req.body.clienteDelivery.nombre,
                telefono: req.body.clienteDelivery.telefono,
                direccion: req.body.clienteDelivery.direccion,
                especificaciones: req.body.clienteDelivery.especificaciones,
                fecha: req.body.fecha,
                tipo: req.body.tipo,
                totalDelivery: req.body.totalDelivery,
                pedido: req.body.pedido
            }
        })
	    res.status(200).json(delivery)
    }

	const deliverys = await prisma.delivery.findMany()

	 res.status(200).json(deliverys)


}
