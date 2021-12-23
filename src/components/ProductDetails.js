import * as React from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import { addItem } from "../action";

function ProductDetails(props) {
    const {id} =useParams();
    const item = props.items.filter(item => item.id==id)[0];
    console.log(item);

    function addToCart(item){
        props.addItem({item});
    }
  return (
      
    <Card sx={{ maxWidth: 700 }} style={{margin:'5em auto'}}>
    <CardMedia
      component="img"
      height="650"
      image={item.image}
      alt="green iguana"
    />
    <CardContent style={{position:'relative'}}>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="h6" color="text.secondary" style={{position:'absolute'}}>
        In Stock  : {item.qty} 
      </Typography>

    </CardContent>
    <CardActions>
      <Button onClick={()=>addToCart({...item, qtyCart:1,price:Math.floor(Math.random()*10)+1 })} style={{margin:'2em', backgroundColor:'blue', width:'90%', color:'white'}}>Add to Cart</Button>
 
    </CardActions>
  </Card>
  );
}


const mapStateToProps = (state) => ({
    items: state.items.items
    
  });
  
  const mapDispatchToProps = dispatch => {
    return {
      addItem: (props)=>dispatch(addItem(props))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
  