import Layout from "@/components/Layout"
import ResumenOrden from "@/components/ResumenOrden"
import useCafeteria from "@/hooks/useCafeteria"
import Link from "next/link"

export default function PedidoOrden() {

    const { pedido } = useCafeteria()

    return (
        <Layout>
            {pedido.length === 0 ? (
                <div className='flex flex-col gap-4 text-center my-4 p-4'>
                    <h1 className='text-primario font-bold text-3xl'>No Hay Ordenes</h1>
                    <Link href={"/local"} className="w-full px-4 py-2 bg-primarioOscuro text-white font-bold text-2xl rounded-lg my-10">Hacer una Orden</Link>
                </div>
            ) : <ResumenOrden/>}
        </Layout>
    )
}


