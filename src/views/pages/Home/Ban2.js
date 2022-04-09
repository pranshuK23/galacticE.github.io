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
  bannerBox2: {
    backgroundColor: "#000",
    paddingBottom:"5rem",
    paddingTop:"7rem",
    
  },
  textbox: {
    "& h1": {
      color: "#20e298",
      
      fontWeight: "600",
      lineHeight: "67px",
      letterSpacing: "3px",
      textAlign: "initial",
      "@media(max-width:390px)":{
        fontSize: "45px",
      },
    },
    "& h2": {
      color: "#fff",
      fontSize: "23px",
      marginTop: "20px",
      fontWeight: "400",
      lineHeight: "24px",
      textAlign: "initial",
    },
  },
}));

export default function Ban2() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox2}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Grid container spacing={2} >
              <Grid item xs={12} md={6} lg={6} >
                <img src="./images/banner/FourImage1.jpeg" style = {{width:"100%"}} />
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <img src="./images/banner/Tie-DyeEAGLE.jpeg" style = {{width:"100%"}} />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <img src="./images/banner/DiamondEAGLE.jpeg" style = {{width:"100%"}}/>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <img src="./images/banner/Stitched EAGLE.jpeg" style = {{width:"100%"}} />
              </Grid>

             
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={classes.textbox} >
              <Typography variant="h1">WELCOME</Typography>
              <Typography variant="h2">
                The GALACTIC EAGLE GANG is a unique NFT Collection consisting of
                8888 Galactic Eagles located on the Ethereum Blockchain as an
                ERC-721 Token.
              </Typography>
              <Typography variant="h2">
                The Pre-sale will take place on 12/16 for .055 ETH. The Public
                Sale will take place on 12/17 for .075 ETH.
              </Typography>
              <Typography variant="h2">
                Purchasing a Galactic Eagle grants membership to the Galactic
                Gang. An exclusive and amazing community of positive and
                ambitious individuals from all across the globe.
              </Typography>
              <Typography variant="h2">
                Not only does being a Galactic Eagle owner grant the complete
                ownership of a high quality piece of artwork.
              </Typography>
              <Typography variant="h2">
                But will also provide access into a vast network of highly
                important members-only exclusive benefits intended to deliver
                our investors with maximum value and utility.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
