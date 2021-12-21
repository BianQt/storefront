// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { Grid } from "@mui/material";

// export default function Product(props) {
//   return (
//     <Grid item xs={5}>
//       <Card sx={{ }}>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {props.item.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {props.item.description}
//           </Typography>
//         </CardContent>
//         {/* <CardActions>
//           <Button onClick={()=>props.addItem(props.item)} size="small">Add to Cart</Button>
//         </CardActions> */}
//       </Card>{" "}

//     </Grid>
//   );
// }

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Cart(props) {
  return (
      
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }} style={{marginTop:"3em"}}>
      {props.items.map((item) => {
        return (
          <>
            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                    qty: {item.qty} 
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {Math.floor(Math.random()*10)+1}$
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </>
        );
      })}
    </List>
  );
}
