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
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const LoginButton = styled(Button)({
  backgroundColor: "#377111",
  borderRadius: "30px",
  transition: "background-color 1s ease",
  "@keyframes move": {
    "0%": {
      transform: "translateY(0px)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  },
  "&:hover": {
    backgroundColor: "#1992BA",
    animation: "move 0.5s linear",
  },
});
const SignButton = styled(Button)({
  backgroundColor: "#961111",
  borderRadius: "30px",
  transition: "width 2s ease-in-out",
  "&:hover": {
    width: "100px",
  },
});

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
        color="secondary"
        sx={{
          height: "90px",
          display: "flex",
          alignItems: "center",
          position: "sticky",
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "220px",
              height: "100%",
            }}
          >
            <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>

            <Typography variant="h6">Web Developer Blog</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "190px",
              height: "100%",
            }}
          >
            <LoginButton variant="contained" onClick={handleClickOpen}>
              Log In
            </LoginButton>
            <SignButton variant="contained">Sign Up</SignButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-label="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Log In</DialogTitle>
              <DialogContent>
                <DialogContentText>Log in to see videos</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Email Adress"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="pass"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Log in
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
