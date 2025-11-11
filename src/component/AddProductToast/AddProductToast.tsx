import { ToastContainer } from 'react-toastify';
// import classes from './AddProductMessage.module.css';

export function AddProductToast() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            // transition={Bounce}
        />
    )
}