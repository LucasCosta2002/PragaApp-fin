import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from 'sweetalert2'

const CafeteriaContext = createContext()

const CafeteriaProvider = ({children}) => {

    const router = useRouter()
    //general
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    
    //delivery
    const [totalDelivery, setTotalDelivery] = useState(0)
    const [clienteDelivery, setClienteDelivery] = useState({
        nombre: "",
        telefono: "",
        direccion: "",
        especificaciones: "",
        envio: 200,
        descartables: 200
    })

    //local
    const [totalOrden, setTotalOrden] = useState(0)
    const [referencia, setReferencia] = useState({})

    // pedidos
    const [deliverys, setDeliverys] = useState([])
    const [ordenes, setOrdenes] = useState([])
    const [selectTipo, setSelectTipo] = useState(0)


    const obtenerCategorias = async ()=>{
        const {data} = await axios("/api/categorias")
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()    
        // console.log("obtener categorias");
    }, [])
    
    useEffect(() => { //Cuando categorias tenga algo (axios), seteamos el valor default a mostrar
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id =>{ //filtrar por id de la categoria del state con el id que hacemos click
        const categoria = categorias.filter( categoriaState => categoriaState.id === id)
        setCategoriaActual(categoria[0])
    } 

    //seleccionamos el producto cuando hacemos click en cardnuevo
    const handleSetProducto = producto => setProducto(producto)

    const handleChangeModal = ()=> setModal(!modal);

    const handleAgregarPedido = ({categoriaId, ...producto}) => { //saco categoria

        if(pedido.some( productoState => productoState.id === producto.id)){
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
            setPedido(pedidoActualizado)
            toast.success("Pedido Actualizado")
        }else{
            setPedido([...pedido, producto])
            toast.success("Producto Agregado")
        }
        setModal(false)
    }

    const handleClickEliminar = id =>{
        const productoEliminar = pedido.filter(pedido => pedido.id !== id)
        setPedido(productoEliminar)
        toast.info("Producto Eliminado", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }

    const handleEditarCantidad = id =>{
        const productoActualizar = pedido.filter( producto => producto.id === id)
        setProducto(productoActualizar[0])
        setModal(!modal)
    }

    const handleCancelarPedido = () =>{
        setProducto({})
        setPedido([])
        toast.error("Pedido Cancelado", {
            position: toast.POSITION.BOTTOM_CENTER
        });
        router.push("/")
    }

    //insertar en base de datos
    const handleSubmitDelivery = async e =>{
        e.preventDefault();
        // setClienteDelivery({...clienteDelivery, fecha: Date.now().toString(), tipo: 0})
        try {
            await axios.post("/api/deliverys", {clienteDelivery, fecha: Date.now().toString(), tipo: 0,totalDelivery, pedido, totalOrden})
            toast.success("Pedido Realizado Correctamente")
            
            setTimeout(() => {
                setProducto({})
                setPedido([])
                setClienteDelivery({
                    nombre: "",
                    telefono: "",
                    direccion: "",
                    especificaciones: "",
                })
                setTotalDelivery(0)
                router.push("/")
            }, 2800);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    const handleSubmitOrden = async e =>{
        e.preventDefault();
        // setReferencia({referencia, fecha: Date.now().toString(), tipo: 1})
        try {

            await axios.post("/api/ordenes", {referencia, fecha: Date.now().toString(), tipo: 1, pedido,totalOrden})
            toast.success("Orden Realizada Correctamente")

            setTimeout(() => {
                setProducto({})
                setPedido([])
                setReferencia({})
                setTotalOrden(0)
                router.push("/")
            }, 2800);
            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        const totalDelivery = pedido.reduce((total, producto) => ((producto.precio * producto.cantidad) + total), clienteDelivery.envio + clienteDelivery.descartables)
        setTotalDelivery(totalDelivery)
    }, [pedido, clienteDelivery.descartables, clienteDelivery.envio])

    useEffect(()=>{
        const totalOrden = pedido.reduce((total, producto) => ((producto.precio * producto.cantidad) + total), 0)
        setTotalOrden(totalOrden)
    }, [pedido])

    const obtenerDeliverys = async ()=>{
        const {data} = await axios("/api/deliverys")
        setDeliverys(data)
    }
    const obtenerOrdenes = async ()=>{
        const {data} = await axios("/api/ordenes")
        setOrdenes(data)
    }
    useEffect(() => {
        obtenerDeliverys()
        obtenerOrdenes()
    }, [pedido])

    const eliminarRegistro = async (tipo, id)=>{
        try {
            if(tipo === 0){
                await axios.delete(`/api/deliverys/${id}`);
            }else{
                await axios.delete(`/api/ordenes/${id}`);
            }
            toast.info("Registro eliminado")

        } catch (error) {
            console.log(error)
            toast.error("Hubo un error")
        }
    }

    const handleSelectTipo = e =>{
        setSelectTipo(e)
    }

    const cerrarCaja = ()=> {
        Swal.fire({
            title: '¿Querés cerrar la caja?',
            text: "todos los registros del día serán eliminados",
            showCancelButton: true,
            confirmButtonColor: '#378F90',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Cerrar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post('/api/cerrarCaja')
                Swal.fire('Caja cerrada','La caja cerró con éxito','success')
            }
        })
    }

    return (
        <CafeteriaContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleClickEliminar,
                handleCancelarPedido,
                handleSubmitDelivery,
                clienteDelivery,
                setClienteDelivery,
                totalDelivery,
                totalOrden,
                referencia,
                setReferencia,
                handleSubmitOrden,
                deliverys,
                ordenes,
                eliminarRegistro,
                handleSelectTipo,
                selectTipo,
                cerrarCaja
            }}  
        >
            {children}
        </CafeteriaContext.Provider>
    )
}

export { CafeteriaProvider}

export default CafeteriaContext