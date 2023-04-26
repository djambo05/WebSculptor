import { Paper, Container, Grid, Typography, Button } from "@mui/material";
const MainPaper = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(https://obschestvennaya-banya-72.ru/wp-content/uploads/e/3/e/e3e472549578385003df432487c0209d.jpeg)`,
          position: "relative",
          color: "white",
          backgroundSize: "cover",
          borderRadius: "0px",
          marginTop: "90px",
          width: "100%",
          aspectRatio: "2/1",
          backgroundRepeate: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="md" fixed>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Grid item>
              <div
                style={{
                  position: "relative",
                  paddingTop: "50px",
                  height: "200px",
                }}
              >
                <Typography
                  component="h1"
                  variant="h6"
                  color="#333333"
                  gutterBottom
                  sx={{
                    fontFamily: "Castoro Titling",
                  }}
                >
                  high status &mdash; high quality
                </Typography>
                <Typography
                  variant="h6"
                  color="#333333"
                  paragraph
                  sx={{ fontFamily: "Castoro Titling" }}
                >
                  the best for you
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#333333",
                    borderRadius: "10px",
                    fontFamily: "Castoro Titling",
                    fontWeight: "bold",
                    transition: "2s",
                    "&:hover": {
                      transform: "scale(1.1)",
                      backgroundColor: "#F94848",
                    },
                  }}
                >
                  Show
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
};
export default MainPaper;
