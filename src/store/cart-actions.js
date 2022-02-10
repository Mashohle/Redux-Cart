import axios from 'axios';
import { cartActions } from './cart-slice';

import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = await axios.get('http://localhost:8000/items')
        .then(response => console.log(response.data))
        .catch(error => console.error('There was an error', error));

        dispatch(cartActions.replaceCart(fetchData))
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!'
            })
        );

        await axios.post('http://localhost:8000/cart-item', cart)
        .then(response => dispatch(uiActions.showNotification({
            status: 'success',
            title: 'Sent!!!',
            message: 'Cart data has been sent!'
        })))
        .catch(error => dispatch(uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: `There was an error sending cart data --- ${error}`
          })));

    };
};