import useCafeteria from '@/hooks/useCafeteria'
import Image from 'next/image'
import { formatearDinero } from '@/helpers'

export default function CardEditar({producto}) {


    const {handleClickEliminar, handleEditarCantidad} = useCafeteria();


    const { nombre, precio, imagen, id, cantidad } = producto;

    return (

            <div className="w-full md:flex rounded-lg shadow-md bg-primario mt-4 ">
                <Image className="rounded-t-lg" src={`/assets/img/${imagen}.jpg`} width={400} height={85} alt={`imagen ${nombre}`}/>
                
                <div className="p-4">
                    <div className='flex justify-between items-center'>
                        <h3 className="text-2xl -tight text-white">{nombre}</h3>
                        <span className="text-3xl font-bold text-white">{formatearDinero(precio * cantidad)}</span>
                    </div>
                    <div className="flex items-center gap-4 justify-between mt-4 text-white">
                        <button 
                            type='button'
                            className='font-bold rounded-2xl text-xl p-2.5 text-center flex items-center gap-2 bg-red-700'
                            onClick={()=> handleClickEliminar(id)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                            Eliminar
                        </button>
                        <button 
                            type='button'
                            className='font-bold rounded-2xl text-xl p-2.5 text-center flex items-center gap-2 bg-oscuro'
                            onClick={()=> {handleEditarCantidad(id); console.log(producto)}}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>
                            Editar
                        </button>
                    </div>
                </div>
            </div>
    )
}
