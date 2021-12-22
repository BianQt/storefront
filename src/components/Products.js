import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function Product(props) {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.item.image}
          alt="green iguana"
        />
        <CardContent style={{position:'relative'}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" style={{position:'absolute'}}>
            {props.item.qty} Pcs
          </Typography>

        </CardContent>
        <CardActions>
          <Button onClick={()=>props.addItem({...props.item, qtyCart:1 })} size="small">Add to Cart</Button>
          <Button size="small">view details</Button>
        </CardActions>
      </Card>{" "}
    </Grid>
  );
}


