import CartItem from "../../components/cartItem/CartItem";
import styles from './CartList.module.css'
import {useDispatch, useSelector} from "react-redux";


function CartList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartItems)

    const incrementCount = (id) => {
        dispatch({type: "incrementCount", payload: {id}})
    }
    const decrementCount = (id) => {
        dispatch({type: "decrementCount", payload: {id}})
    }
    const deleteCart = (id) => {
        dispatch({type: "deleteItemFromCart", payload: {id}})
    }

    return (
        <div className={styles.container}>
            {
                cartItems.map((cart,index) => <CartItem
                    key={cart.id}
                    cart={cart}
                    onIncrementCount={incrementCount}
                    onDecrementCount={decrementCount}
                    onDelete={deleteCart}/>)
            }
        </div>
    );
}

export default CartList;
