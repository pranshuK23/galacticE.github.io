import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
const Ban10 = () => {
  const use = makeStyles({
    root: {
      paddingTop: "100px",
      paddingBottom: "100px",
      height: "auto",
      backgroundPosition: "center",
      backgroundSize: "cover",
      background:
        "linear-gradient( 89.75deg, rgba(0, 0, 0, 0.53) 0.21%, rgba(0, 0, 0, 0.477547) 36.51%, rgba(0, 0, 0, 0) 99.77%, rgba(0, 0, 0, 0) 99.78%, rgba(0, 0, 0, 0.0110417) 99.78%),url(images/banner/visionBg.jpeg)",
    },
    heading: {
      textAlign: "center",
      "& h1": {
        color: "#20e298",
        fontSize: "55px",
        fontWeight: "600",
        lineHeight: "50px",
        marginBottom: "15px",
        letterSpacing: "3px",
        fontFamily: "moonbase",
        textAlign: "center",
        "@media(max-width:500px)": {
          fontSize: "40px",
        },
      },
    },
    para: {
      "& h2": {
        color: "#fff",
        fontSize: "23px",
        fontFamily: "monetizer",
        fontWeight: "400",
        lineHeight: "28px",
      },
    },
  });
  const classes = use();
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container style={{ alignItems: "center" }}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.heading}>
              <Typography variant="h1">BACKGROUND & VISION</Typography>
              <Box>
                <img src="./images/banner/vision.png" style={{ width: "60%" }} alt="hello"/>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.para}>
              <Typography variant="h2">
                Earlier in the year we were lucky enough to become part of an
                amazing community. The NFT world was introduced to ourselves. We
                quickly became enamored with the tight knit community and
                support of everyone involved in it.
                <br /> Whether it was the constant support of the small artists
                creating these amazing pieces of artwork or the newbies trying
                to figure out what a metamask wallet is while learning the
                marketplace and what it has to offer. <br />
                From insane high gas wars to finding the surprise lowkey drops
                throughout the space, this whole journey has become a very
                eye-opening experience. And fortunately for ourselves we have
                found something we are extremely passionate about and truly
                <br />
                believe in. So we have sat down and very intensely studied the
                wants and needs of the community and created a project of our
                own. A journey for all of us to embark upon. The GALACTIC EAGLE
                GANG was born with the community in mind. First and foremost to
                create and obtain <br />
                maximum value and utility for all of the investors and community
                members. To create unique and amazing eye catching art that
                people can call their own and be proud to show off. A strong
                community of like minded individuals who want to fly as high as
                possible. Far past the moon into this
                <br />
                interstellar mission with us to create and maintain a long-term
                project that can forever reside inside the blockchain. We want
                to create more than just another pop up NFT that comes and goes.
                But create a project that can successfully integrate the future
                meta and the physical world alike to ensure we stay around
                forever.
                <br /> Trust we aren't going anywhere. We're pouring everything
                into this project. This is for the dreamers and the visionaries.
                GANG UP!!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Ban10;
