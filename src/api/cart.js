import axios from 'axios';
import { config } from '../config';
import { setItems } from '../features/Cart/action';
import store from '../app/store';

export async function saveCart(token, cart){
  return await axios.put(`${config.api_host}/api/carts`, {items: cart}, {headers: {
    authorization: `Bearer ${token}`
  }})
}

export async function getCart(){
  let {token} = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
  if(!token) return;
  let { data } = await axios
    .get(`${config.api_host}/api/carts`, { headers: { authorization: `Bearer ${token}` }} )
  
  if(!data.error){
    store.dispatch(setItems(data));
  }
}
