import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

const style= {
  marginLeft: '3em',
  width: '1.5em',
  height: '1.5em',
  paddingLeft: '4px',
  backgroundColor: '#fb4747',
  fontWeight: '700',
  color: 'white',
}

const Header = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => props.setShow(false)}
          >
            OUR STORE
          </Typography>
          {/* <Button color="inherit" onClick={()=>props.setShow(true)}>Cart({props.cart})</Button> */}
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Cart({props.cart})
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {props.cartItems.map((item) => {
              return (
                <MenuItem onClick={handleClose}>
                  <ListItemText>{item.name}  {item.qty>1 ? `(${item.qty})`: ''}</ListItemText>
                    <button style={style}>X</button>
                </MenuItem>
              );
            })}
            <MenuItem onClick={()=>props.setShow(true)}>
                 Cart
                </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.num,
  cartItems: state.cart.items,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
