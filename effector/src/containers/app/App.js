import styles from './App.module.css';
import CartList from "../cartList/CartList";
import CartDetails from "../cartDetails/CartDetails";
import {Typography} from "antd";
const {Title} = Typography;
function App() {
    return (
            <div className={styles.App}>
                <Title level={1}>Effector App</Title>
                <div className={styles.container}>
                    <CartDetails/>
                    <CartList/>
                </div>
            </div>
    );
}

export default App;
