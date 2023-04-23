import React from "react";
import "./App.css";
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import Header from "./Components/Header";
import MainPaper from "./Components/MainPaper";
import MainFooter from "./Components/MainFooter";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <Header />
      <MainPaper/>
      <div>
        <Container maxWidth="sm">
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
                        The aroma of freshly brewed coffee filled the cozy cafe
                        as patrons
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
      <MainFooter/>
    </>
  );
}

export default App;
