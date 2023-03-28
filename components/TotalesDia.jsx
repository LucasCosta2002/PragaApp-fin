import { formatearDinero } from "@/helpers"

export default function TotalesDia({ordenes, deliverys}) {

    const totalDeliverys = deliverys.reduce((total, deliveryDB) => total + deliveryDB.totalDelivery, 0 )
    const totalOrdenes = ordenes.reduce((total, ordenesDB) => total + ordenesDB.totalOrden, 0 )
    const totalCaja = totalDeliverys + totalOrdenes

    return (
        <div className="bg-gray-100 p-4 flex flex-col gap-4 rounded-lg text-2xl font-bold text-primario shadow-lg">
            <p>Deliverys: <span className='text-oscuro'>{deliverys.length}</span></p>
            <p>Ordenes:  <span className='text-oscuro'>{ordenes.length}</span></p>
            <p>Total Deliverys: <span className='text-oscuro'> {formatearDinero(totalDeliverys)}</span> </p>
            <p>Total Ordenes: <span className='text-oscuro'> {formatearDinero(totalOrdenes)}</span> </p>
            <p>Total Ingresado: <span className='text-oscuro'> {formatearDinero(totalCaja)}</span> </p>
        </div>
    )
}
