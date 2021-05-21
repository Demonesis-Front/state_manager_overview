import CartItem from "../../components/cartItem/CartItem";
import styles from './CartList.module.css'
import {observer} from "mobx-react";
import {cartStore} from "../../model/CartStore";

function CartList() {
        return (
        <div className={styles.container}>
            {
                cartStore.cartItems.map((item) => <CartItem
                    key={item.id}
                    todo={item}
                    onIncrementCount={() => item.incr()}
                    onDecrementCount={() => item.decr()}
                    onDelete={()=>cartStore.cartItems.remove(item)}/>)
            }
        </div>
    );
}

export default observer(CartList);
