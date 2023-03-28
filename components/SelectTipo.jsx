import useCafeteria from '@/hooks/useCafeteria'

export default function SelectTipo() {

    const { handleSelectTipo} = useCafeteria()

    return (
        <select 
            className="mt-4 rounded-lg  bg-gray-300 outline-none text-gray-600 font-bold py-1 px-4 text-center shadow-md "
            onChange={ (e) => handleSelectTipo(e.target.value)}
        >
            <option selected disabled>Filtrar</option>
            <option value="0">Delivery</option>
            <option value="1">Local</option>
        </select>
    )
}
