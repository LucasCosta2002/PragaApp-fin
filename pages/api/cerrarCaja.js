import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {

	const prisma = new PrismaClient()
    try {
        await prisma.delivery.deleteMany({});
        await prisma.orden.deleteMany({});
        res.status(200).json();
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar los registros' });
    }
}