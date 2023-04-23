import React from "react";
import "./App.css";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

function App() {
  const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar
        color="secondary"
        sx={{
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
            boxSizing: "border-box",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "220px",
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
              width: "190px",
            }}
          >
            <LoginButton variant="contained">Log In</LoginButton>
            <SignButton variant="contained">Sign Up</SignButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main>
        <Paper
          sx={{
            backgroundImage: `url(https://www.bestbinar.ru/wp-content/uploads/2018/12/2-5.jpg)`,
            position: "relative",
            color: "white",
            marginBottom: "32px",
            marginTop: "20px",
            backgroundSize: "cover",
            backgroundRepeate: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Container maxWidth="md" fixed>
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                // backgroundOverlay: "rgba(0,0,0,0.3)"
              }}
            />
            <Grid container>
              <Grid item md={9}>
                <div
                  style={{
                    position: "relative",
                    padding: "48px",
                  }}
                >
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Main Typography
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Paragraph The aroma of freshly brewed coffee filled the cozy
                    cafe as patrons chatted and sipped their drinks.
                  </Typography>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                      bgcolor: "red",
                      borderRadius: "30px",
                    }}
                  >
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Blog
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Paragraph The aroma of freshly brewed coffee filled the cozy cafe
              as patrons chatted and sipped their drinks. Paragraph The aroma of
              freshly brewed coffee filled the cozy cafe as patrons chatted and
              sipped their drinks.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Start now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
            <Container maxWidth="md">
              <Grid
                container
                spacing={4}
                sx={{
                  marginTop: "32px",
                }}
              >
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={4} md={6}>
                    <Card
                      sx={{
                        boxShadow: "1px 4px 4px -2px rgba(0,0,0,0.5)",
                      }}
                    >
                      <CardMedia
                        sx={{
                          paddingTop: "56.25%",
                        }}
                        image="https://avatars.mds.yandex.net/i?id=4fd5428960144c80fb971bf6aee7bb29-5253174-images-thumbs&ref=rim&n=33&w=281&h=188"
                      />
                      <CardContent
                        sx={{
                          flexGrow: 1,
                        }}
                      >
                        <Typography variant="h5" gutterBottom>
                          Blog Post
                        </Typography>
                        <Typography>
                          The aroma of freshly brewed coffee filled the cozy
                          cafe as patrons
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary" variant="outlined">
                          View
                        </Button>
                        <Button size="small" color="warning">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Container>
        </div>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={
              <SvgIcon>
                <path d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12zM16 13h-4V7h-1v7h5z" />
                {/* <path fill="none" d="M0 0h24v24H0z" /> */}
              </SvgIcon>
            }
          />

          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={
              <SvgIcon>
                <path
                  d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                  stroke="#222222"
                />
              </SvgIcon>
            }
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={
              <SvgIcon>
                <path
                  clip-rule="evenodd"
                  d="M11.507 21.87C11.5073 21.8702 11.5076 21.8703 12 21L11.5076 21.8703C11.8131 22.0432 12.1869 22.0432 12.4924 21.8703L12 21C12.4924 21.8703 12.4927 21.8702 12.493 21.87L12.4937 21.8696L12.4956 21.8685L12.5017 21.865L12.5225 21.8531C12.54 21.843 12.565 21.8285 12.5968 21.8098C12.6605 21.7723 12.7518 21.7179 12.8669 21.6473C13.0968 21.5061 13.4221 21.3002 13.811 21.0366C14.5871 20.5106 15.6261 19.7487 16.6696 18.8077C16.7497 18.7356 16.8302 18.662 16.911 18.587L16.2695 17.3963C15.3896 15.957 13.806 15 11.9999 15C10.1938 15 8.61029 15.957 7.73034 17.3963L7.08901 18.5869C7.16979 18.6619 7.25029 18.7356 7.33036 18.8077C8.37393 19.7487 9.41295 20.5106 10.189 21.0366C10.5779 21.3002 10.9032 21.5061 11.1331 21.6473C11.2482 21.7179 11.3395 21.7723 11.4032 21.8098C11.435 21.8285 11.4599 21.843 11.4775 21.8531L11.4983 21.865L11.5044 21.8685L11.5063 21.8696L11.507 21.87ZM5.62848 17.081L5.9819 16.4249L5.99374 16.4029L6.00665 16.3815C7.23126 14.3569 9.45665 13 11.9999 13C14.5432 13 16.7686 14.3569 17.9932 16.3815L18.0061 16.4029L18.0179 16.4248L18.3715 17.0811C19.8 15.4269 21 13.3715 21 11.1C21 6.08596 16.9822 2 12 2C7.01776 2 3 6.08596 3 11.1C3 13.3715 4.19992 15.4268 5.62848 17.081ZM12 5.5C10.067 5.5 8.5 7.067 8.5 9C8.5 10.933 10.067 12.5 12 12.5C13.933 12.5 15.5 10.933 15.5 9C15.5 7.067 13.933 5.5 12 5.5Z"
                  fill="black"
                  fill-rule="evenodd"
                />
              </SvgIcon>
            }
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={
              <SvgIcon>
                <path d="M0 26.016q0 2.496 1.76 4.224t4.256 1.76h20q2.464 0 4.224-1.76t1.76-4.224v-16q0-2.496-1.76-4.256t-4.224-1.76h-6.368q-0.64-1.76-2.176-2.88t-3.456-1.12h-8q-2.496 0-4.256 1.76t-1.76 4.256v20zM4 26.016v-20q0-0.832 0.576-1.408t1.44-0.608h8q0.8 0 1.408 0.608t0.576 1.408v1.984h10.016q0.8 0 1.408 0.608t0.576 1.408v16q0 0.832-0.576 1.408t-1.408 0.576h-20q-0.832 0-1.44-0.576t-0.576-1.408z"></path>
              </SvgIcon>
            }
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="textSecondary"
          component="p"
          variant="subtitle1"
        >
          Web developer Blog. React JS MUI
        </Typography>
      </footer>
    </>
  );
}

export default App;
