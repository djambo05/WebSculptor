import { Paper, Container, Grid, Typography, Button } from "@mui/material";
const MainPaper = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(https://www.bestbinar.ru/wp-content/uploads/2018/12/2-5.jpg)`,
          position: "relative",
          color: "white",
          backgroundSize: "cover",
          borderRadius: "0px",
          marginTop: "90px",
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
              justifyContent: "center",
            }}
          >
            <Grid item md={10}>
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
    </>
  );
};
export default MainPaper;
