import styles from './App.module.css';
import CartList from "../cartList/CartList";
import CartDetails from "../cartDetails/CartDetails";
import {ContextApp, initialCartState as initialState, reducer} from "../../model/context.js";
import {useReducer} from "react";
import {Typography} from "antd";

const {Title} = Typography;

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextApp.Provider value={{dispatch, state}}>
            <div className={styles.App}>
                <Title level={1}>React Context</Title>
                <div className={styles.container}>
                    <CartDetails/>
                    <CartList/>
                </div>
            </div>
        </ContextApp.Provider>
    );
}

export default App;
