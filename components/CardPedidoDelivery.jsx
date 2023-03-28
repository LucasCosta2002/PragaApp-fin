import { formatearFecha, formatearDinero } from '@/helpers'
import useCafeteria from '@/hooks/useCafeteria'
import Image from 'next/image'

export default function CardPedidoDelivery({delivery}) {

    const {id, tipo} = delivery;

    const {eliminarRegistro} = useCafeteria()

    return (
        <div className="bg-secundario text-oscuro p-4 rounded-lg mt-4 font-bold shadow-lg">
             <div className='flex gap-4 justify-end text-center'>
                <button 
                    className='text-red-800 font-bold text-xl -mb-6 rounded-lg'
                    type='button'
                    onClick={()=>eliminarRegistro(tipo, id)}
                >X
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-4'>
                    <p className='text-botonOscuro'>Cliente: <span className='text-oscuro'>{delivery.nombre}</span></p>
                    <p className='text-botonOscuro'>Tipo: <span className='text-oscuro'>Delivery</span></p>
                    <p className='text-botonOscuro'>Hora: <span className='text-oscuro'>{formatearFecha(delivery.fecha)}</span> </p>
                    <p className='text-botonOscuro'>Total: <span className='text-oscuro'>{formatearDinero(delivery.totalDelivery)}</span></p>
                </div>
                {/* <Image width={90} height={80} src="/assets/img/delivery.png" className="invert" alt='imagen delivery'/> */}
            </div>
        </div>
    )
}
