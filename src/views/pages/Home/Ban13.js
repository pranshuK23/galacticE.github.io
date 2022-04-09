import {
    Container,
    Box,
    makeStyles,
    Typography,
    Button,
  } from "@material-ui/core";
  import React from "react";
  
  export default function Ban13() {
    const use = makeStyles({
      root: {
        height: "auto",
        paddingBottom: "100px",
        background: "#000",
        "& h1": {
          paddingTop: "100px",
          paddingBottom: "50px",
          color: "#20e298",
          fontSize: "55px",
          fontWeight: "600",
          lineHeight: "67px",
          letterSpacing: "3px",
          fontFamily: "moonbase",
          textAlign: "center",
          "@media(max-width:500px)": {
            fontSize: "40px",
          },
        },
      },
      heading: {
        fontSize: "20px",
        fontFamily: "monetizer",
        fontWeight: "500",
        lineHeight: "1.6",
        color: "#20e289",
      },
      // para: {
      //   color: "#fff",
      //   fontSize: "23px",
      //   fontFamily: "monetizer",
      //   fontWeight: "400",
      //   lineHeight: "28px",
      // },
      btn: {
        position: "relative",
        border: "1.5px solid #08d57f",
        height: "46px",
        minWidth: "180px",
        boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
        transition: "0.5s",
        lineHeight: "21px",
        marginRight: "10px",
        borderRadius: "100px",
        backgroundColor: "transparent",
        marginTop: "20px",
  
        "&:hover": {
          backgroundColor: "#20e289",
        },
        "& h1": {
          position: "absolute",
          top: "-110px",
          fontWeight: "400",
          color: "#fff",
          fontFamily: "moonbase",
          fontSize: "15px !important",
          textTransform: "uppercase",
          letterSpacing: "1px",
        },
      },
    });
    const classes = use();
    return (
      <Box className={classes.root}>
        <Container>
          <Typography variant="h1" className={classes.heading}>
            GANG UP! JOIN OUR DISCORD!
          </Typography>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            {" "}
            <Button className={classes.btn}>
              <Typography variant="h1">LET'S START</Typography>
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }
  