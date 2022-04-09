import React from "react";

import {
  Container,
  Typography,
  Box,
  makeStyles,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bannerBox4: {
    // paddingBottom: "5rem",
    // marginTop: "5rem",
    position: "relative",
    backgroundImage: "url(./images/banner/eagleLore.jpeg)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // height: "auto ",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: "#000",
  },

  bannerBox4Setting: {
    paddingTop:"10px",
    paddingBottom:"227px",
   
    "& h1": {
      marginTop: "4rem",
      color: "#20e298",
      fontSize: "55px",
      fontWeight: "600",
      lineHeight: "67px",
      letterSpacing: "3px",
      textAlign: "center",
    },
    "& h2": {
      // marginTop:"1rem",
      color: "#fff",
      fontSize: "20px",
      fontFamily: "'Monetizer', sans-serif",
      fontWeight: "400",
      lineHeight: "24px",
      //   textAlign: "initial",
    },
  },

  bannerBox4Image1: {
    
    justifyContent: "space-between",
  },
  img1: {
    position: "absolute",
    bottom: "0px",
  },
  img2: {
    position: "absolute",
    bottom: "0px",
    right:"0px",
  },
}));

export default function Ban4() {
  const classes = useStyles();

  return (
    <Box className={classes.bannerBox4}>
      <Container maxWidth="md">
        <Box className={classes.bannerBox4Setting}>
          <Typography variant="h1">EAGLE LORE</Typography>
          <Typography variant="h2">
            The year is 2088, in the not so distant future our very own freedom
            has become compromised. The human race is under attack and our
            planet is put under siege.
          </Typography>
          <Typography variant="h2">
            There are other worldly beings placing our very existence to
            question. How much longer do we have left to survive?? Something
            must be done in order to save ourselves from this impending evil.
          </Typography>
          <Typography variant="h2">
            The only choice?? Well to destroy and annihilate the incoming
            invaders. Easier said than done. Who is even capable of completing
            such a task?? Well the US military quickly steps in to answer the
            call.
          </Typography>
          <Typography variant="h2">
            To promptly send out their most potent task force to protect us from
            this newfound extraterrestrial evil. The GALACTIC EAGLE GANG is
            born. A collection of the most elite and powerful soldiers to ever
            step foot on planet Earth.
          </Typography>
          <Typography variant="h2">
            Similar to their distant cousins the Bald Eagle they symbolize the
            hope of a people. Only in this case the The GALACTIC EAGLE GANG
            represents much more than the livelihood of just the American folk.
          </Typography>
          <Typography variant="h2">
            They symbolize the last lingering of hope and opportunity of an
            entire world. The burden and livelihood of the planet now rests
            firmly on their shoulders. Scientifically mutated and assimilated
            with the specific intentions to take anything down in their pathway.
          </Typography>
          <Typography variant="h2">
            Born to follow precise orders, they train everyday of their young
            lives and take off into the galaxy to battle the unknown. Can the
            Eagles save us or are we just extending our impending doom?? Who are
            we fighting and why do they want to end our people??
          </Typography>
          <Typography variant="h2">
            I guess your only option is to join the Galactic Eagles on their
            mission to find out. Are you willing to join the GANG?!?
          </Typography>
        </Box>
      </Container>

      <Box
        className={classes.bannerBox4Image1}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <img src="./images/banner/eagle.png" className={classes.img1} />
        </Box>
        <Box>
          <img src="./images/banner/eagle1.png" className={classes.img2} />
        </Box>
      </Box>
    </Box>
  );
}
