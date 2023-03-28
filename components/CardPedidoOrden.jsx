import { formatearFecha, formatearDinero } from '@/helpers'
import useCafeteria from '@/hooks/useCafeteria'

export default function CardPedidoOrden({orden}) {

    const {id, referencia, fecha, totalOrden, tipo} = orden;

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
                    <p className='text-botonOscuro'>Cliente: <span className='text-oscuro font-bold'>{referencia}</span></p>
                    <p className='text-botonOscuro'>Tipo: <span className='text-oscuro'>Local</span></p>
                    <p className='text-botonOscuro'>Hora: <span className='text-oscuro'>{formatearFecha(fecha)}</span> </p>
                    <p className='text-botonOscuro'>Total: <span className='text-oscuro font-bold'>{formatearDinero(totalOrden)}</span></p>
                </div>
            </div>
            
        </div>
    )
}


            