import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
export default function Ban11() {
  const use = makeStyles({
    root: {
      height: "auto",
      paddingTop: "100px",
      paddingBottom: "100px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      background: "#000",
    },
    heading: {
      "& h1": {
        color: "#20e298",
        fontSize: "55px",
        fontWeight: "600",
        lineHeight: "67px",
        letterSpacing: "3px",
        textAlign: "center",
        fontFamily: "moonbase",
        paddingBottom: "50px",
        "@media(max-width:500px)": {
          fontSize: "40px",
        },
      },
    },
    memberbox: {
      margin: "10px 10px",
      "& h1": {
        fontSize: "16px",
        color: "rgb(8, 214, 139)",
        letterSpacing: "1px",
        fontWeight: "600",
        lineHeight: "30px",
        fontFamily: "moonbase",
      },
      "& h3": {
        fontSize: "18px",
        color: "rgb(255, 255, 255)",
        letterSpacing: "1px",
        fontWeight: "600",
        lineHeight: "30px",
        fontFamily: "monetizer",
      },
      "& h5": {
        color: "#20e289",
      },
    },
    img: {
      height: "auto",
      overflow: "hidden",
      borderRadius: "50px 0 50px 0",

      "&:hover": {
        "& img": {
          transform: "scale(1.2)",
          transition: "1s",
        },
      },
      // "& img": {},
    },
  });
  const classes = use();
  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.heading}>
          <Typography variant="h1">TEAM</Typography>
        </Box>
        <Box>
          <Grid container spacing = {4}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.memberbox}>
                <Box className={classes.img}>
                  <img
                    src="./images/Team/LEGACY-EAGLE.jpeg"
                    style={{ width: "100%" }}
                    alt="normal"
                  />
                </Box>
                <Typography variant="h1">LEGACYSEEGHOST</Typography>
                <Typography variant="h3">
                  CO-FOUNDER & PROJECT LEADER
                </Typography>
                <Typography variant="h5">
                  <TwitterIcon />
                  <LinkedInIcon />
                  {/* <InstagramIcon /> */}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.memberbox}>
                <Box className={classes.img}>
                  <img
                    src="./images/Team/AGUILA-EAGLE.jpeg"
                    style={{ width: "100%" }}
                    alt="normal"
                  />
                </Box>
                <Typography variant="h1">AGUILA DE ORO</Typography>
                <Typography variant="h3">
                  CO-FOUNDER & PROJECT LEADER
                </Typography>
                <Typography variant="h5">
                  <TwitterIcon />
                  {/* <LinkedInIcon /> */}
                  <InstagramIcon />
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.memberbox}>
                <Box className={classes.img}>
                  <img
                    src="./images/Team/PIXXELZ-EAGLE.jpeg"
                    style={{ width: "100%" }}
                    alt="normal"
                  />
                </Box>
                <Typography variant="h1">PIXXELZ.ETH</Typography>
                <Typography variant="h3">DESIGNER & WEB DEVELOPER</Typography>
                <Typography variant="h5">
                  <TwitterIcon />
                  {/* <LinkedInIcon /> */}
                  {/* <InstagramIcon /> */}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.memberbox}>
                <Box className={classes.img}>
                  <img
                    src="./images/Team/MM-EAGLE.jpeg"
                    style={{ width: "100%" }}
                    alt="normal"
                  />
                </Box>
                <Typography variant="h1">
                  JASON STONE (MILLIONAIRE MENTOR)
                </Typography>
                <Typography variant="h3">
                  MARKETING PARTNER & EDUCATOR
                </Typography>
                <Typography variant="h5">
                  <TwitterIcon />
                  {/* <LinkedInIcon /> */}
                  <InstagramIcon />
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.memberbox}>
                <Box className={classes.img}>
                  <img
                    src="./images/Team/SCOTT-EAGLE.jpeg"
                    style={{ width: "100%" }}
                    alt="normal"
                  />
                </Box>
                <Typography variant="h1">SCOTT WHITNEY</Typography>
                <Typography variant="h3">
                  CRYPTO AFFICIANADO & NETWORKER
                </Typography>
                <Typography variant="h5">
                  <TwitterIcon />
                  <LinkedInIcon />
                  {/* <InstagramIcon /> */}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={6} xs={12}>
              <Box className={classes.memberbox}>
                <Box className={classes.img}>
                  <img
                    src="./images/Team/DEV-EAGLE.jpeg"
                    style={{ width: "100%" }}
                    alt="normal"
                  />
                </Box>
                <Typography variant="h1">DEVELOPMENT TEAM</Typography>
                <Typography variant="h3">
                  CO-FOUNDER & PROJECT LEADER
                </Typography>
                <Typography variant="h5">
                  {/* <TwitterIcon /> */}
                  <LinkedInIcon />
                  <InstagramIcon />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
