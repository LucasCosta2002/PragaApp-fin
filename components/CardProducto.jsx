import { formatearDinero } from '@/helpers'
import useCafeteria from '@/hooks/useCafeteria'
import Image from 'next/image'

export default function CardProducto({producto}) {

    const {handleSetProducto, handleChangeModal} = useCafeteria();

    const {nombre, precio, imagen} = producto;

    return (
        
        <div className="w-full md:flex rounded-lg shadow-md bg-primarioOscuro mb-4 last-of-type:mb-0">
            <Image className="rounded-t-lg" src={`/assets/img/${imagen}.jpg`} width={400} height={85} alt={`imagen ${nombre}`} />
            <div className="px-5 pb-5 pt-2">
                <h5 className="text-2xl font-bold tracking-tight  dark:text-white">{nombre}</h5>
                <div className="flex items-center md:gap-5 justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{formatearDinero(precio)}</span>
                    <button 
                        className="text-white bg-oscuro font-bold rounded-2xl text-sm px-5 py-2.5 text-center"
                        onClick={()=> {handleSetProducto(producto); handleChangeModal()}}
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
