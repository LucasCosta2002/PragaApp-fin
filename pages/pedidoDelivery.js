import FormDelivery from "@/components/FormDelivery"
import Layout from "@/components/Layout"
import useCafeteria from "@/hooks/useCafeteria"
import Link from "next/link"

export default function PedidoDelivery() {

    const { pedido} = useCafeteria()

    return (
        <Layout>
            <div className="p-4">
                {pedido.length === 0 ? (
                    <div className='flex flex-col gap-4 text-center my-4'>
                        <h1 className='text-primario font-bold text-3xl'>No Hay Pedidos</h1>
                        <Link href={"/delivery"} className="w-full px-4 py-2 bg-primarioOscuro text-white font-bold text-2xl rounded-lg my-10">Hacer un Pedido</Link>
                    </div>
                ) : <FormDelivery />}
            </div>

        </Layout>
    )
}
