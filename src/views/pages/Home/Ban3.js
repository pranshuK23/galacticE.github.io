import React from "react";
import CustomizedProgressBars from "./CustomizedProgressBars";
import { InputAdornment } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useState } from "react";
import { stubObject } from "lodash";

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
  bannerBox3: {
    // marginTop: "5rem",
    position: "relative",
    backgroundImage: "url(./images/banner/feature_banner.png)",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100% ",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    backgroundColor: "#000",
    paddingBottom: "5rem",
  },
  bannerBox2: {
    backgroundColor: "#000",
  },
  textbox: {
    marginTop: "80px",
    "& h1": {
      color: "#20e298",
      fontSize: "55px",
      fontWeight: "600",
      lineHeight: "67px",
      letterSpacing: "3px",
      textAlign: "initial",
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

  gifsetting: {
    display: "flex",
    justifyContent: "center",
  },

  progressItem: {
    marginTop: "5rem",
    "& h1": {
      marginTop: "4rem",
      color: "#20e298",
      fontSize: "35px",
      fontStyle: "italic",
      fontWeight: "600",
      textAlign: "center",
    },
  },

  root: {
    "& > *": {
      border: "2px solid #20e289",
      borderRadius: "10px",
    },

    "& h1": {
      color: "#20e298",
      fontSize: "55px",
      fontWeight: "600",
      lineHeight: "67px",
      letterSpacing: "3px",
      fontFamily: "moonbase",
    },
  },

  btn: {
    "& button": {
      marginTop: "50px",
      border: "1.5px solid #08d57f",
      height: "46px",
      width: "100%",

      boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
      // marginRight: "10px",
      borderRadius: "100px",
      backgroundColor: "transparent",

      color: "#fff",
      fontSize: "15px !important",
      transition: "0.5s",
      fontFamily: "'Moonbase Omega', sans-serif",
      fontWeight: "400",
      lineHeight: "21px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#08d57f",
      },
    },
    
  },


  amount:{
    "& h2":{
      color:"white",
    },
  },
  

  quantity :{
    "& h2" :{
      color:"white",
    }
  }
}));

export default function Ban3() {
  const [data, setData] = useState(0);
  const classes = useStyles();

  function add() {
    setData(data + 1);
  }

  return (
    <Box className={classes.bannerBox3}>
      <Container>
        <Grid
          container
          spacing={3}
          justify="center"
          style={{ marginTop: "80px" }}
        >
          <Grid item xs={12} md={6} lg={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} lg={12}>
                <Box className={classes.textbox}>
                  <Typography variant="h1">Presale</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={2}>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    {" "}
                    <Box className={classes.amount}>
                      <Typography variant="h2">Amount</Typography>
                      <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          variant="outlined"
                          style={{
                            width: "100%",
                            fontSize: "20px",
                            color: "white",
                          }}
                          value={(data * 0.075).toFixed(2)}
                        />
                      </form>
                    </Box>
                  </Grid>

                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    {" "}
                    <Box className={classes.quantity}>
                      <Typography variant="h2">Quantity</Typography>
                      <form
                        className={classes.root}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          variant="outlined"
                          value={data}
                          style={{ width: "100%" }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <RemoveIcon
                                  style={{ color: "#20e289" }}
                                  onClick={stubObject}
                                />
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <AddIcon
                                  style={{ color: "#20e289" }}
                                  onClick={add}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </form>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box className={classes.btn}>
                  <Button variant="contained" fullWidth>
                    CONNECT WALLECT
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={classes.gifsetting}>
              <img src="./images/banner/gif.gif" />
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.progressItem}>
          <CustomizedProgressBars />
          <Typography variant="h1">15 of 8888 Minted</Typography>
        </Box>
      </Container>
    </Box>
  );
}
