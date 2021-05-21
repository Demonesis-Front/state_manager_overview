import styles from './App.module.css';
import CartList from "../cartList/CartList";
import CartDetails from "../cartDetails/CartDetails";
import {store} from "../../model/store.js";
import {Provider} from "react-redux";
import {Typography} from "antd";
const {Title} = Typography;
function App() {
    return (
        <Provider store={store}>
            <div className={styles.App}>
                <Title level={1}>Redux App</Title>
                <div className={styles.container}>
                    <CartDetails/>
                    <CartList/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
