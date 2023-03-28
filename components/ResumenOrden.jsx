import { formatearDinero } from '@/helpers'
import useCafeteria from '@/hooks/useCafeteria'
import Link from 'next/link'
import { useCallback, useEffect } from 'react'
import CardEditar from './CardEditar'

export default function ResumenOrden() {

    const { pedido, totalOrden , referencia, setReferencia, handleSubmitOrden, producto,} = useCafeteria()
    
    const comprobarPedido = useCallback(() => {
        return Object.keys(referencia).length === 0 || Object.keys(producto).length === 0
    },[referencia, producto],)
    useEffect(() => {    
        comprobarPedido()
    }, [comprobarPedido])


    return (
        <div className="p-4">
            <form 
                className="bg-secundario p-4 rounded-lg"
                onSubmit={handleSubmitOrden}    
            >
                <div className="mb-2">
                    <label htmlFor="referencia" className="uppercase text-oscuro font-bold text-xl">Referencia</label>
                    <input 
                        type={"text"} 
                        id="referencia" 
                        name="referencia"
                        placeholder="ej: Mesa 1"
                        className="w-full mt-2 p-4 rounded-lg text-gray-500 focus:outline-oscuro text-xl"   
                        // value={referencia} 
                        onChange={(e)=> setReferencia(e.target.value)}
                    />
                </div>

                <div className="text-oscuro text-xl mt-4">
                    <p className="text-2xl ">Total a pagar: <span className="font-bold">{formatearDinero(totalOrden)}</span></p>
                </div>

                <div className='flex gap-4 justify-between text-center mt-4'>
                    <button className='bg-oscuro py-2 text-white font-bold px-6 rounded-lg'>
                        <Link href={"/local"}>Agregar Más</Link>
                    </button>
                    <button 
                        className={`${comprobarPedido() ? "bg-botonClaro text-gray-300" : "bg-botonOscuro"} py-2 text-white font-bold px-6 rounded-lg`}
                        type='submit'
                        disabled={comprobarPedido()}
                    >Confirmar
                    </button>
                </div>
            </form>
            
            {pedido.map(producto => (
                <CardEditar 
                    key={producto.id}
                    producto={producto}
                />
            ))}
        </div>

    )
}
