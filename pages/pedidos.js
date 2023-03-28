import CardPedidoDelivery from "@/components/CardPedidoDelivery"
import TotalesDia from "@/components/TotalesDia"
import Link from "next/link"
import axios from "axios"
import useSWR from "swr"
import Loader from "@/components/Loader"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import CardPedidoOrden from "@/components/CardPedidoOrden"
import SelectTipo from "@/components/SelectTipo"
import useCafeteria from "@/hooks/useCafeteria"
import CerrarCaja from "@/components/CerrarCaja"

export default function Pedidos() {

    const {selectTipo} = useCafeteria()

    //Doble consulta a endpoints
    const fetcher = async (url) => {
        const res = await axios.get(url);
        return res.data;
    };

    const { data: ordenes, error: orden } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100});
    const { data: deliverys, error: delivery } = useSWR('/api/deliverys', fetcher, {refreshInterval: 100});

    if (orden || delivery) return <div>Error</div>;
    if (!ordenes || !deliverys) return <div className="mt-96" > <Loader/> </div>


    return (
        <>
            <div className='bg-oscuro p-4 flex sticky top-0 justify-between'>
                <Link href={"/"} className='text-white uppercase font-bold text-xl'>#Somoslapausa</Link>
            </div>
            
            <div className="p-4">
                <TotalesDia
                    ordenes={ordenes}
                    deliverys={deliverys}
                />

                <div className="flex justify-between">
                    <SelectTipo/>
                    <CerrarCaja/>
                </div>
                
                {selectTipo == 0 ? (deliverys?.map(delivery => (
                    <CardPedidoDelivery
                        key={delivery.id}
                        delivery={delivery}
                    />
                ))) : ""}

                {selectTipo == 1 ? (ordenes?.map(orden => (
                    <CardPedidoOrden
                        key={orden.id}
                        orden={orden}
                    />
                ))) : ""}
            </div> 

            <footer className='bg-oscuro text-center text-white font-bold p-2 flex justify-center '>
                <div className="bg-botonOscuro rounded-lg w-72 ">
                    <Link href="/" className="">Inicio</Link>
                </div>
            </footer>

            <ToastContainer  autoClose={2500}/>
        </>        
    )
}


