import {Button, Divider, Typography} from 'antd';
import styles from "./CartDetails.module.css"
import {v4 as uuidv4} from "uuid";
import {observer} from "mobx-react";
import {cartStore} from "../../model/CartStore";
import {CartItem} from "../../model/CartItemStore";

const {Title} = Typography;


const generateRandomCart = () => {
    return new CartItem({
        id: uuidv4(),
        title: "Random Item",
        description: "Random item long description",
        price: Math.floor(getRandomArbitrary(10, 100)),
        count: Math.floor(getRandomArbitrary(1, 10))
    })
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function CartDetails() {
    return (
        <div className={styles.container}>
            <Title level={3}>Cart details</Title>
            <Typography>{`Total price: ${cartStore.totalPrice} $`}</Typography>
            <Divider></Divider>
            <Button onClick={() => cartStore.fetchData()}>Fetch data</Button>
            { cartStore.isLoadingData ? <div> Is Loading </div> : null }
            { cartStore.asyncData ? <div>{cartStore.asyncData}</div>: null}
            <Divider></Divider>
            <Button onClick={() => cartStore.cartItems.push(generateRandomCart())}>Add random cart</Button>
        </div>
    );
}

export default observer(CartDetails);
