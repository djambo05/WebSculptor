import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Icon,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#EAEFF2",
          height: "90px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              justifyItems: "center",
              alignItems: "center",
              width: "240px",
              height: "100%",
            }}
          >
            <Icon color="white">
              <img src="img/icons/apple.png" alt="icon" />
            </Icon>

            <Typography
              variant="h5"
              sx={{
                color: "#333333",
                fontWeight: "cursive",
                fontFamily: "Castoro Titling",
                marginTop: "7px",
              }}
            >
              Apple Avenue
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
              padding: "10px",
            }}
          >
            <IconButton onClick={handleClickOpen}>
              <ShoppingCartIcon
                sx={{
                  color: "#333333",
                  transition: "2s",
                  "&:hover": {
                    transform: "scale(1.15)",
                    color: "#F94848",
                  },
                }}
              />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-label="form-dialog-title"
            >
              <Cart />
            </Dialog>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
