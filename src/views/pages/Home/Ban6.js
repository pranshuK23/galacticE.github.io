import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
// import { Slider } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const useStyles = makeStyles({
  development: {
    backgroundColor: "black",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "auto",
    // color:"white",
    // textAlign:"center",
    // zIndex:"1",
    backgroundImage: "url(images/map.png)",
    paddingBottom: "5rem",
    position: "relative",
  },
  legend: {
    width: "58%",
    paddingTop: "5rem",
    "& h3": {
      color: "#20e298",
      "@media(max-width:300px)": {
        // width:"30%",
        fontSize: "48px",
      },
    },
  },
  eagle: {
    "& img": {
      width: "95%",
      boxShadow: "2px 6px 8px 2px rgb(32 226 152 / 33%)",
    },

    "& h6": {
      color: "white",
      textAlign: "center",
      // position:"absolute",
      fontSize: "20px",
      "@media(max-width:667px)":{
        fontSize:"10px",
      }
    },
  },
});
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

function Ban6() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.development}>
        <Container>
          <Box className={classes.legend}>
            <Typography variant="h3">LEGENDARY EAGLES</Typography>
            <Typography style={{ paddingTop: "1rem", color: "white" }}>
              11 LEGENDARY EAGLES WERE CURATED AND SPECIFICALLY MUTATED FROM
              OVER A BILLION POSSIBLE OUTCOMES. WILL YOU BE ONE OF THE LUCKY
              ONES??
            </Typography>
          </Box>
        </Container>

        <Container style={{ paddingTop: "5rem" }} maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Slider {...settings}>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">BatmanEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">BumbleEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">DoctorEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">FriezaEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">JokerEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">PhoenixEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">SSEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">TerminatorEAGLE</Typography>
                </Box>
                <Box className={classes.eagle}>
                  <img src="images/banner/BatmanEAGLE.jpeg" alt="" />
                  <Typography variant="h6">VadrEAGLE</Typography>
                </Box>
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Ban6;
