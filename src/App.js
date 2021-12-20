import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import { newItems } from "./action";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";


const App = () => {

  const [show, setShow] = React.useState(false);

  return (
    <div>
      <Header setShow={setShow}/>
        <Categories show={show} />
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});
const mapDispatchToProps = { newItems };

export default connect(mapStateToProps, mapDispatchToProps)(App);