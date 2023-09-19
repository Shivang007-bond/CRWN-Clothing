import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../Context/cart.context';

import Button from '../button/Button';

import CartItem from '../cart-item/Cart-item';

import './Cart-dropdown.scss' ;

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-item'>
                {
                    cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                }
            </div>
            <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;