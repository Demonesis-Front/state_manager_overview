import {Button, Divider, Typography} from 'antd';
import styles from "./CartDetails.module.css"
import { v4 as uuidv4 } from "uuid";
import {$asyncData, $totalCount, addCart, fetchAsyncDataFx} from "../../state/state";
import {useStore} from "effector-react";

const {Title} = Typography;


const generateRandomCart = () => {
    return {
        id: uuidv4(),
        title: "Random Item",
        description: "Random item long description",
        price: Math.floor(getRandomArbitrary(10,100)),
        count: Math.floor(getRandomArbitrary(1,10))
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function CartDetails() {
    const state = useStore($asyncData);
    const total = useStore($totalCount)

    const addCartItem = () => {
        addCart(generateRandomCart())
    }

    return (
        <div className={styles.container}>
            <Title level={3}>Cart details</Title>
            <Typography>{`Total price: ${total} $`}</Typography>
            <Divider></Divider>
            <Button onClick={()=>fetchAsyncDataFx()}>Fetch data</Button>
            { state.isLoadingData ? <div> Is Loading </div> : null }
            { state.asyncData ? <div>{state.asyncData}</div>: null}
            <Divider></Divider>
            <Button onClick={addCartItem}>Add random cart</Button>
        </div>
    );
}

export default CartDetails;
