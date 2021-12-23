import * as React from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function Cart(props) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      style={{ marginTop: "3em" }}
    >
      {props.cartItems.map((item) => {
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
                      qty: {item.qtyCart}
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.price}$
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </>
        );
      })}

      <ListItem alignItems="flex-start">
        <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="h5"
          color="text.primary"
        >
          Total : {props.total}$
        </Typography>
      </ListItem>
    </List>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  total: state.cart.total,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
