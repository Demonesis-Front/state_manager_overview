import {useContext} from "react";
import CartItem from "../../components/cartItem/CartItem";
import {ContextApp} from "../../model/context";
import styles from './CartList.module.css'


function CartList() {
    const {state, dispatch} = useContext(ContextApp);

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
                state.cartItems.map(cartItem => <CartItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    onIncrementCount={incrementCount}
                    onDecrementCount={decrementCount}
                    onDelete={deleteCart}/>)
            }
        </div>
    );
}

export default CartList;
