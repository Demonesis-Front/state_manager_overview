import { Card, Divider} from "antd";
import styles from './CartItem.module.css'
import {
    CloseOutlined,
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons';

function CartItem({id,cart, onIncrementCount, onDecrementCount, onDelete}) {
    //const cart = useSelector(model => model.cartItems[id])
    const onIncrementCountHandler = () => {
        onIncrementCount(cart.id)
    }
    const onDecrementCountHandler = () => {
        onDecrementCount(cart.id)
    }
    const onDeleteHandler = () => {
        onDelete(cart.id)
    }

    return (
        <div className={styles.todo}>
            <Card title={cart.title}
                  extra={[
                      <CloseOutlined key="delete" onClick={onDeleteHandler}/>,
                  ]}
                  actions={[
                      <MinusOutlined key="decrement" onClick={onDecrementCountHandler}/>,
                      <PlusOutlined key="increment" onClick={onIncrementCountHandler}/>,
                  ]}>
                <div className={styles.card}>
                    <p className={styles.description}><b>Description</b></p>
                    <p>{cart.description}</p>
                    <Divider/>
                    <p><b>Price per unit</b>: {cart.price} $</p>
                    <p><b>Total price</b>: {cart.count * cart.price} $</p>
                    <p><b>Count</b>: {cart.count}</p>
                </div>
            </Card>
        </div>
    );
}

export default CartItem;
