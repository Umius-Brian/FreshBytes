import * as types from '../constants/actionTypes';
import axios from 'axios'

export const getProducts = (zip) => {
  // console.log("inside getProducts (actions.js)")
  // console.log("zip (actions.js):", zip)
  return (dispatch) => {
    axios.get(`/api/${zip}/products`)
    .then((res) => {
      // console.log('receiving product query results on the frontend!')
      dispatch({type: types.GET_PRODUCTS, payload: res.data})
    })
    .catch(err => console.log(err))
  }
}

export const addProduct = (product) => {
  // console.log(product)
  return (dispatch) => {
    axios.post('/api/products/new', {product})
    .then((res) => {
      dispatch({type: types.ADD_PRODUCT, payload: res.data})
    })
    .catch(err => console.log(err))
  }
}
