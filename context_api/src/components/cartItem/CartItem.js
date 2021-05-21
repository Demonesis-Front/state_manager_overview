import { Card, Divider} from "antd";
import styles from './CartItem.module.css'
import {
    CloseOutlined,
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons';

function CartItem({cartItem, onIncrementCount, onDecrementCount, onDelete}) {
    const onIncrementCountHandler = () => {
        onIncrementCount(cartItem.id)
    }
    const onDecrementCountHandler = () => {
        onDecrementCount(cartItem.id)
    }
    const onDeleteHandler = () => {
        onDelete(cartItem.id)
    }

    return (
        <div className={styles.todo}>
            <Card title={cartItem.title}
                  extra={[
                      <CloseOutlined key="delete" onClick={onDeleteHandler}/>,
                  ]}
                  actions={[
                      <MinusOutlined key="decrement" onClick={onDecrementCountHandler}/>,
                      <PlusOutlined key="increment" onClick={onIncrementCountHandler}/>,
                  ]}>
                <div className={styles.card}>
                    <p className={styles.description}><b>Description</b></p>
                    <p>{cartItem.description}</p>
                    <Divider/>
                    <p><b>Price per unit</b>: {cartItem.price} $</p>
                    <p><b>Total price</b>: {cartItem.count * cartItem.price} $</p>
                    <p><b>Count</b>: {cartItem.count}</p>
                </div>
            </Card>
        </div>
    );
}

export default CartItem;
