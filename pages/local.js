import Heading from "@/components/Heading"
import Layout from "@/components/Layout"
import CardProducto from "@/components/CardProducto"
import useCafeteria from "@/hooks/useCafeteria"

export default function Local() {

    const {categoriaActual} = useCafeteria()

    return (
        <Layout>

            <Heading titulo={categoriaActual?.nombre}/>          

            <div className="p-4">
                {/* ya tengo las categorias, con los productos asociados en el endpoint de categorias */}
                {categoriaActual?.productos?.map(producto=> (
                    <CardProducto 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>

        </Layout>
    )
}
