import Link from 'next/link'
import Categoria from './Categoria'
import useCafeteria from '@/hooks/useCafeteria'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'

export default function Navbar() {
	
	const {categorias} = useCafeteria();
	const [menuOpen, setMenuOpen] = useState(false);


	const handleStateChange = state => setMenuOpen(state.isOpen)
	const closeMenu = () => setMenuOpen(false);

    var styles = {
        bmBurgerButton: {
          position: 'sticky',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '20px'
        },
        bmBurgerBars: {
          background: '#ffffff'
        },
        bmCrossButton: {
		  display: "none"
        },
        bmCross: {
          background: '#fff'
        },
        bmMenu: {
          background: 'rgba(36, 94, 95, 0.9)',
          padding: '1.15em 1.15em 0',
          fontSize: '1em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          padding: '0.8em'
        },
        bmOverlay: {
          background: 'rgba(36, 94, 95, 0)'
        }
    }

	return (
        <div className='bg-oscuro p-4 flex sticky top-0 justify-between z-20'>

            <Link href={"/"} className='text-white uppercase font-bold text-xl'>#Somoslapausa</Link>
            <Menu 
				right 
				width={"100%"} 
				styles={styles}
				isOpen={menuOpen}
				onStateChange={handleStateChange}
			>
                
				{categorias?.map(categoria => (
                	<Categoria 
						key={categoria.id}
						categoria={categoria}
						closeMenu={closeMenu}
					/>
				))}
            </Menu>
        </div>

    )
}
