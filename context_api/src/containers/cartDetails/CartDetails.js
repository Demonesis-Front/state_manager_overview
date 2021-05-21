import {Button, Divider, Typography} from 'antd';
import styles from "./CartDetails.module.css"
import {ContextApp} from "../../model/context";
import {useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import {fetchSomeData} from "../../api/api";

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
    const {state, dispatch} = useContext(ContextApp);
    const total = state.cartItems.reduce((sum, item) => sum + item.count * item.price, 0)

    const addCartItem = () => {
        dispatch({type: "addItemToCart", payload: generateRandomCart()})
    }

    const fetchData = ()=> {
        dispatch({type: "fetchData"})
        fetchSomeData().then(data=>{
            dispatch({type: "fetchSuccess", payload: data})
        }).catch(error => {
            dispatch({type: "fetchFailed"})
        })
    }

    return (
        <div className={styles.container}>
            <Title level={3}>Cart details</Title>
            <Typography>{`Total price: ${total} $`}</Typography>
            <Divider></Divider>
            <Button onClick={fetchData}>Fetch data</Button>
            { state.isLoadingData ? <div> Is Loading </div> : null }
            { state.asyncData ? <div>{state.asyncData}</div>: null}
            <Divider></Divider>
            <Button onClick={addCartItem}>Add random cart</Button>
        </div>
    );
}

export default CartDetails;
