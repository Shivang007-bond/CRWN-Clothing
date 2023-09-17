import './Cart-dropdown.scss' ;

import Button from '../button/Button';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-item'>
            </div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;