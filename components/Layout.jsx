import Footer from './Footer'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalProducto from './ModalProducto';
import Modal from 'react-modal';
import useCafeteria from '@/hooks/useCafeteria';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: "none",
        background: "none",
        padding: "none",
        overflow: "none"
    },
};

Modal.setAppElement('#__next');

export default function Layout({children}) {

    const {modal} = useCafeteria()

    return (
        <>
            <Navbar/>

            {children}

            
            <Footer/>
            {modal && (
                <Modal isOpen={modal} style={customStyles} >
                    <ModalProducto/>
                </Modal>
            )}
           
            <ToastContainer  autoClose={2500}/>
        </>
    )
}
