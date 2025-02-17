import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
function CartWidget() {
    return (
        <div className='cart'>
            <FaShoppingCart />
            <div className='text-cart'>Carrito</div>
        </div>
    );
};

export default CartWidget;