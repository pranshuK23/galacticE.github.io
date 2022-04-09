// import React from "react";
// import {
//   Grid,
//   Box,
//   Container,
//   Typography,
//   makeStyles,
//   Button,
//   Divider,
// } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import {} from "react-feather";
// const useStyles = makeStyles((theme) => ({
//   footerSection: {
//     margin: 0,
//     padding: 0,
//     background: "#15377C ",
//     position: "relative",
//     backgroundPosition: " bottom left",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     [theme.breakpoints.up("sm")]: {
//       paddingTop: theme.spacing(4),
//     },
//     [theme.breakpoints.up("md")]: {
//       paddingTop: theme.spacing(4),
//     },
//     // "&"
//     "& h5": {
//       fontWeight: "bold",
//       fontSize: "18px",
//       letterSpacing: "2px",
//       textTransform: "uppercase",
//       color: "#fff",
//       // "@media(maxWidth:667px)":{
//       //   textAlign:"center",
//       // },
//     },
//     "& ul": {
//       paddingLeft: "0",
//     },
//     "& p": {
//       marginBottom: "0px",
//       marginTop: "10px",
//       fontWeight: "500",
//       fontSize: "12px",
//       lineHeight: "18px",
//       color: "#000000",
//     },
//   },
//   footerBg: {
//     position: "absolute",
//     bottom: "0",
//     width: "100%",
//     left: "0",
//   },
//   ListItem: {
//     paddingLeft: "0px",
//   },
//   borderBottmo: {
//     overflow: "hidden",
//     background: "#000",
//     paddingTop: theme.spacing(6),
//     paddingBottom: theme.spacing(6),
//     [theme.breakpoints.down("md")]: {
//       paddingTop: theme.spacing(3),
//       paddingBottom: theme.spacing(3),
//     },
//   },
//   signupBtn: {
//     color: "#fff",
//     display: "flex",
//     fontSize: "16px",
//     fontWeight: "bold",
//     height: "45px",
//     minWidth: "100px",
//     borderRadius: "50px",
//     position: "absolute",
//     top: "5px",
//     right: "5px",
//     boxShadow:
//       "0px 8px 24px rgba(38, 50, 56, 0.1), 0px 16px 32px rgba(38, 50, 56, 0.08)",
//     lineHeight: "36px",
//     alignItems: "center",
//     textAlign: "center",
//     letterSpacing: " 1px",
//     background: "#040405",
//     "&:hover": {
//       background: "#040405",
//       color: "#fff",
//     },
//   },
//   largeIcon: {
//     width: 18,
//     height: 18,
//     marginRight: "8px",
//   },
//   icons: {
//     justify: "flex-end",
//     [theme.breakpoints.down("sm")]: {
//       justify: "center",
//     },
//   },
//   inputBox: {
//     position: "relative",
//   },
//   footerBgImg: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     width: "100%",
//     zIndex: "1",
//   },
//   textFild: {
//     position: "relative",

//     "& button": {
//       position: "absolute",
//       top: 0,
//       right: 0,
//       height: "100%",
//       backgroundColor: "#000",
//       minWidth: "90px",
//       fontSize: "18px",
//       fontWeight: "700",
//       color: "#fff",
//       "&:hover": {
//         backgroundColor: "#000",
//       },
//     },
//   },

//   footText: {
//     display: "flex",
//     flexDirection: "column",
//     "& h6": {
//       color: "white",
//       fontSize: "14px",
//       marginTop: "10px",
//     },
//     "@media (max-width : 667px) ": {
//       textAlign: "center",
//       fontSize: "10px",
//     },
//   },
//   copyRight: {
//     "& h1": {
//       fontFamily: "Roboto",
//       fontStyle: "normal",
//       fontWeight: "normal",
//       fontSize: "12px",
//       lineHeight: "14px",
//       letterSpacing: "0.11em",
//       color: "#FFFFFF",
//       display: "flex",
//       justifyContent: "center",
//       marginTop: "1.5rem",
//     },
//   },
// }));

// export default function Liquidity() {
//   const classes = useStyles();
//   return (
//     <>
//       <Box className={classes.footerSection}>
//         <Box
//           style={{ margin: "20px 10px 0", position: "relative", zIndex: "2" }}
//         >
//           <Container maxWidth="lg">
//             <Grid container justify="space-around" spacing={1}>
//               <Grid item xs={12} md={3}>
//                 <img alt="" src="images/Footlogo.png" />
//               </Grid>

//               <Grid item xs={12} md={3} align="center">
//                 <Box className={classes.footText}>
//                   <Typography variant="h5">About Us</Typography>
//                   <Typography variant="h6">Certifications</Typography>
//                 </Box>
//               </Grid>

//               <Grid item xs={12} md={3} align="left">
//                 <Box className={classes.footText}>
//                   <Typography variant="h5">Terms of use</Typography>
//                   <Typography variant="h6">Data policy </Typography>
//                   <Typography variant="h6">Privacy policy</Typography>
//                   <Typography variant="h6">Cookie policy </Typography>
//                   <Typography variant="h6">Code of conduct</Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} md={3} align="left">
//                 <Box className={classes.footText}>
//                   <Typography variant="h5">Support</Typography>
//                   <Typography variant="h6">Contact</Typography>
//                   <Typography variant="h6"> Feedback</Typography>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Container>
//           {/* <Box style={{width:"100%"}}>
//           <hr width='100%'/>
//           </Box>  */}

//           <Box className={classes.copyRight}>
//             <hr />

//             <Typography variant="h1">
//               @2021 International Copyright of Content with ComplyAny
//             </Typography>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// }


import React from "react";
import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";

import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
     marginTop: ".5px",
    paddingTop: "2rem",
    height: "auto",
    background: "#000",
  },
  logo: {
    textAlign: "center",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  text: {
    textAlign: "center",

    "& h1": {
      fontFamily: "monetizer",
      color: "#989797",
      cursor: "pointer",
      margin: "0",
      padding: "10px 0",
      fontSize: "25px",
      textDecoration: "none",
    },
    "& h3": {
      fontFamily: "monetizer",
      margin: "0",
      padding: "10px 0",
      fontSize: "22px",
    },
  },
  twitter: {
    color: "#000",
    width: "30px",
    cursor: "pointer",
    height: "30px",
    margin: "0 10px",
    display: "flex",
    padding: "0",
    fontSize: "20px",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  instagram: {
    color: "#000",
    width: "30px",
    cursor: "pointer",
    height: "30px",
    margin: "0 10px",
    display: "flex",
    padding: "0",
    fontSize: "20px",
    alignItems: "center",
    borderRadius: "50%",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Container>
          <Box className={classes.logo}>
            <img src="./images/logo.png" style={{ width: "80px" }} alt="hello"/>
          </Box>
          <Box className={classes.icon}>
            <Box className={classes.twitter}>
              <TwitterIcon />
            </Box>
            <Box className={classes.instagram}>
              <InstagramIcon />
            </Box>
          </Box>
          <Box className={classes.text}>
            <Typography variant="h1">Terms of Service</Typography>
            <Typography variant="h3">
              © 2021 Galactic Eagle. All rights reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
