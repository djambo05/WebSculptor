import {
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const AppleCard = () => {
  const data = [
    {
      id: 1,
      img: "macbook.jpg",
      title: "Apple Mackbook Air 13",
      count: 1,
      price: 110000,
      priceTotal: 110000,
    },
    {
      id: 2,
      img: "apple-watch.jpg",
      title: "Apple Watch",
      count: 1,
      price: 29000,
      priceTotal: 29000,
    },
    {
      id: 3,
      img: "mac-pro.jpg",
      title: "Mac Pro",
      count: 1,
      price: 300000,
      priceTotal: 300000,
    },
  ];

  return (
    <Grid
      container
      sx={{
        marginTop: "52px",
        marginBottom: "52px",
        position: "relative",
        // display: "flex",
        // justifyContent: "space-around",
        // gap: "5px",
      }}
    >
      {data.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card
            sx={{
              margin: "10px",
              padding: "20px",
            }}
          >
            <CardMedia
              sx={{
                // padding: "16px",
                height: "290px",
              }}
              alt={card.title}
              image={`./img/products/${card.img}`}
            />
            <CardContent
              sx={{
                flexGrow: 1,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontFamily: "Castoro Titling", fontWeight: "bold" }}
                gutterBottom
              >
                {card.title}
              </Typography>
              <Typography
                sx={{ fontFamily: "Castoro Titling", fontWeight: "bold" }}
              >
                {card.price} руб.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <Button
                size="small"
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
                Buy
              </Button>
              <Button
                size="small"
                sx={{
                  borderRadius: "10px",
                  color: "#333333",
                  fontFamily: "Castoro Titling",
                  fontWeight: "bold",
                  border: "1px solid #333333",
                }}
              >
                Add to cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AppleCard;
