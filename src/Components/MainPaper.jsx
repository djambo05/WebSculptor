import { Paper, Container, Grid, Typography, Button } from "@mui/material"
const MainPaper = () => {
    return (
    <>
    <Paper
        sx={{
          backgroundImage: `url(https://www.bestbinar.ru/wp-content/uploads/2018/12/2-5.jpg)`,
          position: "relative",
          color: "white",
          marginBottom: "30px",
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
      </>
    )
}
export default MainPaper