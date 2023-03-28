import { formatearDinero } from '@/helpers'
import useCafeteria from '@/hooks/useCafeteria'
import Link from 'next/link'
import { useCallback, useEffect } from 'react'
import CardEditar from './CardEditar'

export default function FormDelivery() {

    const { pedido, handleSubmitDelivery, setClienteDelivery, clienteDelivery, totalDelivery} = useCafeteria()

    const comprobarPedido = useCallback(() => {
        return clienteDelivery.nombre === "" || clienteDelivery.telefono === "" || clienteDelivery.direccion === ""
    },[clienteDelivery],)
    useEffect(() => {    
        comprobarPedido()
    }, [clienteDelivery, comprobarPedido])
  
   
    return (
        <>
            <form 
                className="bg-secundario p-4 rounded-lg"
                onSubmit={handleSubmitDelivery}    
            >
                <div className="mb-2">
                    <label htmlFor="nombre" className="uppercase text-oscuro font-bold text-xl">Nombre</label>
                    <input 
                        type={"text"} 
                        id="nombre" 
                        name="nombre"
                        placeholder="ej: Bauti"
                        className="w-full mt-2 p-4 rounded-lg text-gray-500 focus:outline-oscuro text-xl"    
                        value={clienteDelivery.nombre}
                        onChange={(e)=> setClienteDelivery({...clienteDelivery, nombre: e.target.value})}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="telefono" className="uppercase text-oscuro font-bold text-xl">Telefono</label>
                    <input 
                        type={"text"} 
                        id="telefono" 
                        name="telefono" 
                        placeholder="ej: 3562 123456"
                        className="w-full mt-2 p-4 rounded-lg text-gray-500 focus:outline-oscuro text-xl" 
                        value={clienteDelivery.telefono}
                        onChange={(e)=> setClienteDelivery({...clienteDelivery, telefono: e.target.value})}   
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="direccion" className="uppercase text-oscuro font-bold text-xl">Dirección</label>
                    <input 
                        type={"text"} 
                        id="direccion" 
                        name="direccion" 
                        placeholder="ej: Bv San Martín 660"
                        className="w-full mt-2 p-4 rounded-lg text-gray-500 focus:outline-oscuro text-xl"
                        value={clienteDelivery.direccion}
                        onChange={(e)=> setClienteDelivery({...clienteDelivery, direccion: e.target.value})}    
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="especificaciones" className="uppercase text-oscuro font-bold text-xl">Especificaciones</label> 
                    <textarea  
                        id="especificaciones" 
                        name="especificaciones" 
                        placeholder="ej: café con leche descremada"
                        className="w-full mt-2 p-4 rounded-lg text-gray-500 focus:outline-oscuro text-xl" 
                        value={clienteDelivery.especificaciones}
                        onChange={(e)=> setClienteDelivery({...clienteDelivery, especificaciones: e.target.value})}   
                    />
                </div>

                <div className="text-oscuro text-xl">
                    <p>Envio: {formatearDinero(clienteDelivery.envio)}</p>
                    <p>Descartables: {formatearDinero(clienteDelivery.descartables)}</p>
                    <p className="text-2xl ">Total a pagar: <span className="font-bold">{formatearDinero(totalDelivery)}</span></p>
                </div>

                <div className='flex gap-4 justify-between text-center mt-4'>
                    <button className='bg-oscuro py-2 text-white font-bold px-6 rounded-lg'>
                        <Link href={"/delivery"}>Agregar Más</Link>
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
        </>

    )
}
