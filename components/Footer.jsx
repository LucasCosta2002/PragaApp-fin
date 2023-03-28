import useCafeteria from '@/hooks/useCafeteria'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Footer() {

    const { pedido, handleCancelarPedido} = useCafeteria()

    const router = useRouter()

    return (
        <div className='bg-oscuro p-2 flex gap-4 justify-between text-center'>
            <button 
                className='bg-red-800 p-2 text-white font-bold w-full rounded-lg'
                onClick={()=> handleCancelarPedido(pedido)}
            >
                Cancelar
            </button>
            <Link href={router.pathname === "/delivery" ? "/pedidoDelivery" : "/pedidoOrden"} className='bg-botonOscuro p-2 text-white font-bold w-full rounded-lg'>Ver Pedido</Link>
        </div>
    )
}
