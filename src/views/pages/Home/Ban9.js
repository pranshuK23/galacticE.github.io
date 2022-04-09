import React from "react";
import CustomizedProgressBars from "./CustomizedProgressBars";
import {
  Container,
  Typography,
  Box,
  makeStyles,
  Grid,
  //   Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerBox7: {
    backgroundColor: "#000",
    height: "auto",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    paddingTop: "5rem",
    paddingBottom:"7rem",
  },

  text: {
    "& h2": {
      color: "#20e298",
      fontSize: "21px",
      fontWeight: "600",
      marginTop: "5rem",
      textAlign: "initial",
    },
    "& h3": {
      color: "white",
      fontSize: "18px",
      fontFamily: "'Monetizer', sans-serif",
      fontWeight: "400",
      lineHeight: "28px",
      marginTop: "1rem",
    },
  },

  progressbar: {
    marginTop: "2rem",
  },

  mobileviewtext:{
    color: "#20e298", fontSize: "55px", textAlign: "center",
    "@media(max-width:667px)":{
      fontSize:"45px",
    },
    "@media(max-width:350px)":{
      fontSize:"35px",
    },
  },
}));

export default function Ban9() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox7}>
      <Container>
        <Typography
          variant="h1"
          style={{  }}
        className = {classes.mobileviewtext}>
          DEVELOPMENT ROADMAP 2.0
        </Typography>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} sm={6} xm={12}>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                MASS MARKETING
              </Typography>
              <Typography variant="h3">
                Expect us to ramp up our bandwidth. This isn't the time to hold
                back. We want people to know about how amazing our community is.
                Expect billboards, collaborations, and heavy promotions. Let's
                get the word out!
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xm={12}>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                EXTRA TRAIT UTILITY
              </Typography>
              <Typography variant="h3">
                We are assigning special utility to a select number of our
                traits. Maybe you are one of the lucky eagles? We will begin
                unveiling our trait utilities after launch on discord.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xm={12}>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                MERCH BRANDING
              </Typography>
              <Typography variant="h3">
                Our plan is to create a real name and brand within the space. So
                the only way to do that is by seeing the bigger picture. So we
                have designed our street wear oriented line of clothing within
                the Galactic Gang brand. With our own actual designs and ideas
                behind it. VALUE VALUE VALUE!
              </Typography>
            </Box>
          </Grid>

          <Grid item lg={3} md={3} sm={6} xm={12}>
            <Box className={classes.text}>
              <Typography variant="h2" align="center">
                GALACTIC CARE PACKAGE
              </Typography>
              <Typography variant="h3">
                We are rewarding our holders with a package sent directly from
                the Eagle Command. A box full of goodies to show our
                appreciation to those who believed in the mission.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.progressbar}>
          <CustomizedProgressBars value ={10}/>
        </Box>
        
    <Container>
        <Grid container spacing={2} >
          <Grid item lg={4} md={4} sm={12} xm={12}>
            <Box>
              <img
                src="./images/banner/CARTOON_Background.png"
                alt=""
                style={{ width: "100%",marginTop:"1rem" }}
              />
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xm={12}>
            <Box>
              <video class="videoBg" autoplay="" loop="infinte" width="100%" style ={{marginTop:"1rem"}}>
                <source
                  src="./images/banner/3D_RENDERING.mp4"
                  type="video/mp4"
                />
              </video>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xm={12}>
            <Box>
              <img
                src="./images/banner/MERCH MOCKUP.jpeg"
                alt=""
                style={{ width: "100%",marginTop:"1rem" }}
              />
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Container>
    </Box>
  );
}
