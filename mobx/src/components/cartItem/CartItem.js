import { Card, Divider} from "antd";
import styles from './CartItem.module.css'
import {
    CloseOutlined,
    PlusOutlined,
    MinusOutlined
} from '@ant-design/icons';
import {observer} from "mobx-react";

function CartItem({todo, onIncrementCount, onDecrementCount, onDelete}) {
    return (
        <div className={styles.todo}>
            <Card title={todo.title}
                  extra={[
                      <CloseOutlined key="delete" onClick={onDelete}/>,
                  ]}
                  actions={[
                      <MinusOutlined key="decrement" onClick={onDecrementCount}/>,
                      <PlusOutlined key="increment" onClick={onIncrementCount}/>,
                  ]}>
                <div className={styles.card}>
                    <p className={styles.description}><b>Description</b></p>
                    <p>{todo.description}</p>
                    <Divider/>
                    <p><b>Price per unit</b>: {todo.price} $</p>
                    <p><b>Total price</b>: {todo.total} $</p>
                    <p><b>Count</b>: {todo.count}</p>
                </div>
            </Card>
        </div>
    );
}

export default observer(CartItem);
