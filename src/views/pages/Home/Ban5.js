import React from "react";
import {
  Container,
  Box,
  makeStyles,
  Grid,
  Typography,
} from "@material-ui/core";
export default function Ban5() {
  const use = makeStyles({
   bannerBox5: {
      paddingTop: "200px",
      paddingBottom: "100px",
      height: "auto",
      background: "#000",
      fontSize: "100px",

      "& h1": {
        color: "#20e298",
        fontSize: "55px",
        fontWeight: "600",
        lineHeight: "67px",
        letterSpacing: "3px",
        fontFamily: "moonbase",
      },
      "& h3": {
        paddingTop: "20px",
        color: "#fff",
        fontSize: "23px",
        fontFamily: "'Monetizer', sans-serif",
        fontWeight: "400",
        lineHeight: "28px",
        "@media (max-width:667px)":{
          paddingBottom:"2rem",
        },
      },
    },
    slider: {
      position: "relative",
      display: "flex",
      justifyContent: "end",
      // left: "150px",

      "@media(max-width:950px)": {
        justifyContent: "center",
      },
    },
    mainimg: {
      "@media(max-width:768px)": {
        width: "70%",
      },
      "@media(min-width:200px) and (max-width:400px)": {
        width: "50%",
      },
    },
    border1: {
      position: "absolute",
      top: "-9px",
      left: "-9px",
      maxWidth: "100%",
      "@media(max-width:950px)": {
        right: "292px",
      },
    },
    border2: {
      position: "absolute",
      bottom: "-1.4%",
      right: "-9px",
      maxWidth: "100%",
      "@media(min-width:200px) and (max-width:400px)": {
        width: "50%",
      },
    },
  });
  const classes = use();
  return (
    <Box className={classes.bannerBox5}>
      <Container>
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Container>
              <Box>
                <Typography variant="h1">TRAITS & RARITIES</Typography>
                <Typography variant="h3">
                  The Galactic Eagle Gang is a collection of 100% unique and
                  randomly generated art from originally hand drawn sketches and
                  made to perfection from over 140 distinct traits.
                </Typography>
                <Typography variant="h3">
                  Each Eagle was scientifically mutated to diversify their vast
                  array of qualities to further enhance their performance and
                  different skill sets.
                </Typography>
                <Typography variant="h3">
                  These diversified traits include their space suits, headwear,
                  feathers, background, eyes, beak, patch, face shield, chain,
                  and helmets.
                </Typography>
              </Box>
            </Container>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className={classes.slider}>
              <img
                src="./images/banner/border.png"
                className={classes.border1}
                alt="normal"
              />
              <img
                src="./images/banner/border_2.png"
                className={classes.border2}
                alt="normal"
              />
              <img
                src="./images/banner/gif.gif"
                width="100%"
                style={{ positon: "relative" }}
                alt="normal"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
