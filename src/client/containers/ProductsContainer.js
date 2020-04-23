/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import * as actions from '../actions/actions';
import Home from '../components/Home';
import ProductsList from '../components/ProductsList';
import ProductFormContainer from './ProductFormContainer';
import Login from '../containers/Login';


const mapStateToProps = state => ({
  // isLoggedIn: state.products.isLoggedIn // ==> True or false
  products: state.products.productsList,
})

const mapDispatchToProps = dispatch => ({
  getProducts: (zip) => dispatch(actions.getProducts(zip)),
  addProduct: (product) => dispatch(actions.addProduct(product))
})

class ProductsContainer extends React.Component {

  render() {
    const { getProducts, addProduct, products } = this.props

    // If isLoggedIn === true, route to /main
    // If !isLoggedIn, route to '/'

    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Login getProducts={getProducts}/> }/>
          <Route exact path="/main" render={() => <Home getProducts={getProducts}/> }/>
          <Route exact path="/new" render={() => <ProductFormContainer addProduct={addProduct}/>} />
          <Route exact path="/products" render={()=> <ProductsList products={products}/>} />
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
