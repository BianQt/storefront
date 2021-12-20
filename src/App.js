import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { newCart } from "./components/action";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import faker from "faker";

const App = () => {
  return (
    <div>
      <Header />
        <Categories />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = { newCart };

export default connect(mapStateToProps, mapDispatchToProps)(App);