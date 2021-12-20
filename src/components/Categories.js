import { Button, ButtonGroup, Container, Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import Products from "./Products";
export const Categories = ({ items }) => {
  const [category, setCategory] = React.useState("");
  const renderCategories = () => {
    const btn = [];
    const categories = [];
    items.forEach((item, i) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
        btn.push(
          <ButtonGroup variant="text" aria-label="text button group" key={i}>
            <Button
              key={item.category}
              onClick={() => setCategory(item.category)}
            >
              {item.category}  <span style={{marginLeft:'10px'}}>|</span>
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
    if (category === "all") return items;
    return items.filter((item) => item.category === category);
  };
  const [btn] = renderCategories();
  return (
    <div>
      <Container maxWidth="xl">
        
        <h1 style={{marginBottom: "0", fontFamily:"arial", fontWeight:'lighter'}}>Browse our Categories</h1>
        {btn}
         
        <Container maxWidth="xl" style={{textAlign: 'center' }}>
          <h1 style={{ fontFamily:"arial",fontWeight:'lighter', fontSize:'5em', marginBottom:'0'}}>{category.toUpperCase()}</h1>
          <h3>Category Description Goes Here</h3>
        <Grid container spacing={2}>
          {filterCategories(category).map((item, i) => (
            <Products {...item} key={i} />
          ))}
        </Grid>
        </Container>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.cart.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);