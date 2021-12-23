import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { newItems } from "./action";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";


const App = () => {

  const [show, setShow] = React.useState(false);

  return (
    <div>

      <Router>
      <Header setShow={setShow}/>
          <Switch>
            <Route exact path="/">
            <Categories />
            </Route>
            <Route path="/cart">
            <Cart/>
            </Route>
            <Route path="/product/:id">
            <ProductDetails/>
            </Route>
          </Switch>
        </Router>
        
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});
const mapDispatchToProps = { newItems };

export default connect(mapStateToProps, mapDispatchToProps)(App);