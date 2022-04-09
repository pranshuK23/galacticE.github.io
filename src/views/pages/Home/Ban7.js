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
  bannerBox7: {
    backgroundColor: "#000",
    backgroundImage: "url(./images/banner/feature_banner.png)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "auto",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    paddingTop: "3rem",
    paddingBottom:"3rem",
  },

  bannerBox7component: {
    width: "70px",
    border: "2px solid #20e298",
    height: "70px",
    display: "flex",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
  },

  text: {
    "& h2": {
      color: "#20e298",
      fontSize: "23px",
      fontWeight: "600",
      marginTop:"1rem",
    },
    "& h3": {
      color: "white",
      fontSize: "18px",
      fontFamily: "'Monetizer', sans-serif",
      fontWeight: "400",
      lineHeight: "28px",
    },
  },
}));

export default function Ban7() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox7}>
      <Container>
      <Typography variant = "h1" style ={{color:"#20e298",fontSize :"55px",textAlign:"center",}}>EAGLE FEATURES</Typography>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} sm={12} xm={12}>
          <Box style={{display:"flex", justifyContent:"center"}}>
            <Box className={classes.bannerBox7component}>
              <img src="./images/banner/1.png " />
            </Box>
            </Box>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                UNIQUE RARITY
              </Typography>
              <Typography variant="h3">
                Each Eagle is completely unique and 1/1. Nobody else will have
                an eagle just like the one you will possess. Keep it, take care
                of it.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xm={12}>
          <Box style={{display:"flex", justifyContent:"center"}}>
            <Box className={classes.bannerBox7component}>
              <img src="./images/banner/2.png" />
            </Box>
            </Box>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                OWNERSHIP
              </Typography>
              <Typography variant="h3">
                Gain complete control over your eagle. From full financial
                ownership to complete copyright your eagle’s journey and story
                is controlled by you.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xm={12}>
          <Box style={{display:"flex", justifyContent:"center"}}>
            <Box className={classes.bannerBox7component}>
              <img src="./images/banner/3.png " />
            </Box>
            </Box>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                COMMUNITY WALLET
              </Typography>
              <Typography variant="h3">
                This will be set aside for the continuation of our project. We
                will continue to build upon the Galactic Eagle Brand and create
                our longevity within the space.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={2}>
          <Grid item lg={4} md={4} sm={12} xm={12}>
          <Box style={{display:"flex", justifyContent:"center"}}>
            <Box className={classes.bannerBox7component}>
              <img src="./images/banner/1.png " />
            </Box>
            </Box>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                UNIQUE RARITY
              </Typography>
              <Typography variant="h3">
                Each Eagle is completely unique and 1/1. Nobody else will have
                an eagle just like the one you will possess. Keep it, take care
                of it.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xm={12}>
          <Box style={{display:"flex", justifyContent:"center"}}>
            <Box className={classes.bannerBox7component}>
              <img src="./images/banner/2.png" />
            </Box>
            </Box>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                OWNERSHIP
              </Typography>
              <Typography variant="h3">
                Gain complete control over your eagle. From full financial
                ownership to complete copyright your eagle’s journey and story
                is controlled by you.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xm={12}>
          <Box style={{display:"flex", justifyContent:"center"}}>
            <Box className={classes.bannerBox7component}>
              <img src="./images/banner/3.png " />
            </Box>
            </Box>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                COMMUNITY WALLET
              </Typography>
              <Typography variant="h3">
                This will be set aside for the continuation of our project. We
                will continue to build upon the Galactic Eagle Brand and create
                our longevity within the space.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
