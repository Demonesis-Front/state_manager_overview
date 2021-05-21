import CartItem from "../../components/cartItem/CartItem";
import styles from './CartList.module.css'
import {$cartItems, decrementCount, deleteCart, incrementCount} from "../../state/state";
import {useList} from "effector-react";


function CartList() {
    const cartItems = useList($cartItems,
        cart => <CartItem
            key={cart.id}
            cart={cart}
            onIncrementCount={incrementCount}
            onDecrementCount={decrementCount}
            onDelete={deleteCart}/>)
    return (
        <div className={styles.container}>
            {cartItems}
        </div>
    );
}

export default CartList;
