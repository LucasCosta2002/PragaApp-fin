import useCafeteria from '@/hooks/useCafeteria';

export default function Categoria({categoria, closeMenu}) { //extraigo la categoria que pase al navbar

    const {handleClickCategoria, categoriaActual} = useCafeteria()

    const { id, nombre, } = categoria;

    return (
        <div className={` ${categoriaActual?.id === id ? 'bg-botonOscuro text-secundario' : "bg-secundario text-oscuro"}  rounded-lg flex justify-center py-4 px-2 mb-4 border-none transition-colors`} id="page-wrap">
            <button 
                type='button' 
                className='text-2xl font-bold hover:cursor-pointer uppercase'
                onClick={() => {handleClickCategoria(id); closeMenu()} }
            >{nombre}</button>
        </div>
        
    )
}
