import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import Products from "./Products";
import Cart from "./Cart";
import { addItem, newItems } from "../action";
const axios = require('axios');

export const Categories = (props) => {

  const [category, setCategory] = React.useState("");
  const renderCategories = () => {
    const btn = [];
    const categories = [];
    
    props.items.forEach((item, i) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
        btn.push(
          <ButtonGroup variant="text" aria-label="text button group" key={i}>
            <Button
              key={item.category}
              onClick={() => setCategory(item.category)}
            >
              {item.category} <span style={{ marginLeft: "10px" }}>|</span>
            </Button>
          </ButtonGroup>
        );
      }
    });
    btn.push(
      <ButtonGroup variant="text" aria-label="text button group" key={"all"}>
        <Button key={"all"} onClick={() => setCategory("all")}>
          All
        </Button>
      </ButtonGroup>
    );
    return [btn, categories];
  };
  const filterCategories = (category) => {
    if (category === "all") return props.items;
    return props.items.filter((item) => item.category === category);
  };
  const [btn] = renderCategories();

  useEffect(()=>{
     props.newItems();
  },[props.cartItems]);


function addToCart(item){
  props.addItem({item});
  if(item.qty-1>0){
  let reqBody = {qty:item.qty-1}
  axios.put(`https://bianqt-storefront.herokuapp.com/item/${item.id}`,reqBody).then(res => {
    console.log(res.data);
  })
}else{
  axios.delete(`https://bianqt-storefront.herokuapp.com/item/${item.id}`).then(res => {
    console.log('successfully deleted');
  })
}

props.newItems();
}

  return (
    <div>
     
      <Container maxWidth="xl">
      {props.show ?  <Cart items={props.cartItems} /> :
      <>
      <h1
          style={{
            marginBottom: "0",
            fontFamily: "arial",
            fontWeight: "lighter",
          }}
        >
          Browse our Categories
        </h1>
        {btn}

        <Container maxWidth="xl" style={{ textAlign: "center" }}>
          {category&&category!=='all'&&
          <><h1
            style={{
              fontFamily: "arial",
              fontWeight: "lighter",
              fontSize: "5em",
              marginBottom: "0",
            }}
          >
            {props.categories[category].displayName}
          </h1>
          <h3>{props.categories[category].description}</h3>
          </>}
          <Grid container spacing={2}>
            {filterCategories(category).map((item, i) => (
              <Products item={item} key={i} addItem={addToCart} />
            ))}
          </Grid>
        </Container>
        </>
}
      </Container>
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items.items,
  categories: state.items.categories,
  cartItems: state.cart.items,
  
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: (props)=>dispatch(addItem(props)),
    newItems: ()=>dispatch(newItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
