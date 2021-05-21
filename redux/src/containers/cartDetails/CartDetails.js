import {Button, Divider, Typography} from 'antd';
import styles from "./CartDetails.module.css"
import { v4 as uuidv4 } from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataThunk} from "../../model/thunk";

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
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const total = state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0)

    const addCartItem = () => {
        dispatch({type: "addItemToCart", payload: generateRandomCart()})
    }

    return (
        <div className={styles.container}>
            <Title level={3}>Cart details</Title>
            <Typography>{`Total price: ${total} $`}</Typography>
            <Divider></Divider>
            <Button onClick={()=>dispatch(fetchDataThunk())}>Fetch data</Button>
            { state.isLoadingData ? <div> Is Loading </div> : null }
            { state.asyncData ? <div>{state.asyncData}</div>: null}
            <Divider></Divider>
            <Button onClick={addCartItem}>Add random cart</Button>
        </div>
    );
}

export default CartDetails;
