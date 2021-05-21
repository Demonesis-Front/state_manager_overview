import {makeAutoObservable} from "mobx";
import {fetchSomeData} from "../api/api";
import {CartItem} from "./CartItemStore";


class CartStore {
    cartItems = [];
    asyncData = null;
    isLoadingData = false;

    constructor({cartItems}) {
        makeAutoObservable(this);
        this.cartItems = cartItems;
    }

    get totalPrice() {
        return this.cartItems.reduce((accum, item) => accum + item.total, 0)
    }

    *fetchData() {
        this.asyncData = null
        this.isLoadingData = true
        try {
            const data = yield fetchSomeData();
            this.asyncData = data
            this.isLoadingData = false
        } catch (error) {
            this.isLoadingData = false
        }
    }

}


const store =  new CartStore({
    cartItems: [
        new CartItem({
            id: 0,
            title: "First Item",
            description: "First cartItem long description",
            price: 8,
            count: 4
        }),
    ]
})

export const cartStore = store;