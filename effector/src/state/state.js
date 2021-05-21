import {createStore, createEvent, createEffect} from 'effector'
import {fetchSomeData} from "../api/api";

const initialState = [
    {
        id: 0,
        title: "First Item",
        description: "First cartItem long description",
        price: 8,
        count: 4
    },
    {
        id: 1,
        title: "Second Item",
        description: "Second cartItem long description",
        price: 5,
        count: 3
    }
]

export const incrementCount = createEvent("incrementCount")
export const decrementCount = createEvent("decrementCount")
export const deleteCart = createEvent("deleteCart")
export const addCart = createEvent("addCart")

export const $cartItems = createStore(initialState)
    .on(incrementCount, (state, payload) => state.map(item => (
        item.id === payload ?
            {
                ...item,
                count: item.count + 1
            } : item
    )))
    .on(decrementCount, (state, payload) => state.map(item => (
        item.id === payload ?
            {
                ...item,
                count: item.count - 1
            } : item
    )))
    .on(deleteCart, (state, payload) => state.filter(item => item.id !== payload))
    .on(addCart, (state, payload) => state.concat([payload]))


const asyncDataInitialState = {
    asyncData: null,
    isLoadingData: false,
}
export const fetchAsyncDataFx = createEffect(async ({id}) => {
    const response = await fetchSomeData(id)
    return response
})

export const $asyncData = createStore(asyncDataInitialState)
    .on(fetchAsyncDataFx.doneData, (state, result) => ({
            ...state,
            asyncData: result
        }
    ))
    .on(fetchAsyncDataFx.pending, (state, result) => ({
            ...state,
            isLoadingData: result
        }
    ))
    .on(fetchAsyncDataFx.failData, (state, result) => ({
            ...state,
            isLoadingData: false
        }
    ));

$cartItems.watch((state)=>{
    console.log(state);
})

$cartItems.watch(addCart,(state, payload)=>{
    console.log("addCart", payload);
    console.log("$cartItems store", state);
})

fetchAsyncDataFx.fail.watch((error) => {
    console.log(error)
})

export const $totalCount = $cartItems.map((state) => {
    return state.reduce((accum, item) => {
        return accum + item.price * item.count
    }, 0)
});

