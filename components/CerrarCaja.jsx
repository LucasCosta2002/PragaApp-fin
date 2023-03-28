import useCafeteria from '@/hooks/useCafeteria'

export default function CerrarCaja() {

    const {cerrarCaja} = useCafeteria()

    return (
        <button 
            className="mt-4 rounded-lg  bg-red-600 outline-none text-white font-bold py-1 px-4 text-center shadow-md"
            onClick={cerrarCaja}
        >Cerrar caja
        </button>
    )
}
