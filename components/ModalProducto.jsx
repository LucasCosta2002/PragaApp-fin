import useCafeteria from "@/hooks/useCafeteria";
import { formatearDinero } from "@/helpers";
import Image from "next/image";
import { useState, useEffect } from "react";


export default function ModalProducto() {

    const { producto, handleChangeModal, pedido, handleAgregarPedido, handleSetProducto } = useCafeteria();
    const { nombre, precio, imagen } = producto;

    const [cantidad, setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)   

    useEffect(()=>{
        // comprobar si el modal actual ya está en el pedido
        if(pedido.some(pedidoState => pedidoState.id === producto.id )){
            //traer la cantidad del state
            const productoEdicion = pedido.find(pedidoState => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }     
    }, [producto, pedido])


    return (
        <div className="md:flex rounded-2xl shadow-md bg-primario">
            <Image className="rounded-t-lg" src={`/assets/img/${imagen}.jpg`} width={400} height={85} alt={`imagen ${nombre}`} />
            
            <div className="px-5 py-2 relative">
                <div className='flex justify-between items-center gap-2'>
                    <h3 className="text-3xl text-white">{nombre}</h3>
                    <span className="text-3xl font-bold text-white">{formatearDinero(precio * cantidad)}</span>
                </div>
                <div className='flex gap-4 text-white justify-center mt-4 mb-6 items-center'>
                    <button 
                        className=" bg-oscuro font-bold rounded-2xl text-sm p-2.5 text-center"
                        onClick={()=> {if(cantidad<=1) return; setCantidad(cantidad - 1)}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </button>
                    <p className='font-bold text-3xl text-white'>{cantidad}</p>
                    <button 
                        className="bg-oscuro font-bold rounded-2xl text-sm p-2.5 text-center"
                        onClick={()=> {if(cantidad>=10) return; setCantidad(cantidad + 1)}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between gap-4 px-4">
                    <button 
                        className="bg-oscuro px-4 py-2 rounded-3xl w-full"
                        type="button"
                        onClick={()=> {handleChangeModal(); handleSetProducto({})}}
                    >
                        <Image width={32} height={32} src="/assets/img/cerrar.png" alt="icono cerrar" className="mx-auto"/>
                    </button>   
                    <button 
                        className="bg-oscuro px-4 pt-3 pb-2 rounded-3xl w-full"
                        type="button"
                        onClick={()=> handleAgregarPedido({...producto, cantidad})} //agregar cantidad al objeto
                    >
                        <Image width={32} height={32} src="/assets/img/confirmar.png" alt="icono confirmar"  className="mx-auto"/>
                    </button>   
                </div>
            </div>
        </div>
    )
}
