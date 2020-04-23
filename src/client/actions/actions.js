import * as types from '../constants/actionTypes';
import axios from 'axios'

export const getProducts = (zip) => {
  console.log("inside getProducts (actions.js)")
  return (dispatch) => {
    axios.get(`/api/${zip}/products`)
    .then((res) => {
      dispatch({type: types.GET_PRODUCTS, payload: res.data})
    })
    .catch(err => console.log(err))
  }
}

export const addProduct = (product) => {
  console.log(product)
  return (dispatch) => {
    axios.post('/api/products/new', {product})
    .then((res) => {
      dispatch({type: types.ADD_PRODUCT, payload: res.data})
    })
    .catch(err => console.log(err))
  }
}
