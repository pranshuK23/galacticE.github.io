import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  logoclass: {
    hight: "80px",
    width: "80px",
  },
}));

const Logo = (props) => {
  const classes = useStyles();
  return (
    <img
      src="/images/logo.png"
      alt="Logo"
      {...props}
      className={classes.logoclass}
    />
  );
};

export default Logo;
