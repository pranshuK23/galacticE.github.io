import React from "react";
import {
  Container,
  Typography,
  Box,
  makeStyles,
  Grid,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    marginTop: "5rem",
    position: "relative",
    backgroundImage: "url(./images/banner/bg.jpg)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    // paddingTop : "8rem",
    
  },

  bannerBox1: {
    display: "flex",
    justifyContent: "center",
    "& img": {
      marginTop: "6rem",
      width: "70%",
      // maxWidth:"60%",
      height: "50%",
    },
  },

  bannerBox2: {
    "& h1": {
      fontSize: "80px",
      display: "flex",
      justifyContent: "center",
      color: "white",
    },
  },

  bannerBox3: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    boxSizing: "borderBox",
    marginTop: "1rem",
    "& button": {
      color: "#fff",
      border: "1.5px solid #08d57f",
      height: "46px",
      fontSize: "15px !important",
      minWidth: "180px",
      boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
      transition: "0.5s",
      fontFamily: "Moon",
      fontWeight: "400",
      lineHeight: "21px",
      marginRight: "10px",
      borderRadius: "100px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "#08d57f",
      },
    },
  },

  // bannerBox4: {
  //   width: "100%",
  // },
}));

export default function Ban1() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox}>
      <Container>
        <Grid container >
          <Grid item xs={12} lg ={12}>
            <Box className={classes.bannerBox1}>
              <img src="./images/banner/text.png" />
            </Box>
          </Grid>

          <Grid item xs={12} lg ={12}>
            <Box className={classes.bannerBox2}>
              <Typography variant="h1">JOIN THE GANG!!</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} lg ={12}>
            <Box className={classes.bannerBox3}>
              <Button>JOIN OUR DISCORD</Button>
            </Box>
          </Grid>

          <Grid item xs={12} lg ={12}>
            <Box className={classes.bannerBox4}>
              <img src="./images/banner/banner.png" style = {{width:"100%"}}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
