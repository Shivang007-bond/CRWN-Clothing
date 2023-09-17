import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import { ReactComponent as ShoppingBag } from '../../Assets/shopping-bag.svg';
import './Shop-cart.scss' ;

const ShopCart = () => {
    const { isCartOpen , setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen) ;
    
    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingBag className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )

}

export default ShopCart;