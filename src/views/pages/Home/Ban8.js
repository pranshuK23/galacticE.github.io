import {
    makeStyles,
    Box,
    Container,
    Grid,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import Avatar from "@material-ui/core/Avatar";
  export default function Ban8() {
    const use = makeStyles({
      root: {
        background: "url(./images/vision_banner.png),#000",
        paddingTop: "100px",
        height: "auto",
      },
      heading: {
        "& h1": {
          color: "#20e298",
          fontSize: "55px",
          fontWeight: "600",
          lineHeight: "67px",
          letterSpacing: "3px",
          fontFamily: "moonbase",
          textAlign: "center",
          paddingBottom: "50px",
          "@media(max-width:500px)": {
            fontSize: "40px",
          },
        },
      },
      desktop: {
        "@media(max-width:1270px)": {
          display: "none",
        },
      },
      mobile: {
        paddingBottom: "50px",
  
        "@media(min-width:1270px)": {
          display: "none",
        },
      },
      circle: {
        backgroundColor: "#20e289",
        position: "relative",
        top: "-20px",
        left: "300px",
        "& svg": {
          display: "none",
        },
      },
      box1: {
        height: "220px",
        width: "800px",
        border: "2px solid #fff",
        borderRadius: "0 100px 100px 0",
        borderLeft: "0",
        position: "relative",
        top: "11px",
        left: "200px",
      },
      box1inner: {
        position: "relative",
        "& h1": {
          fontSize: "30px",
          color: "#20e298",
  
          display: "inline-block",
  
          fontFamily: "moonbase",
          position: "absolute",
          top: "50px",
          left: "300px",
        },
        "& h3": {
          fontFamily: "monetizer",
          fontSize: "20px",
          color: "#fff",
          width: "100%",
          maxWidth: "400px",
  
          textAlign: "center",
          position: "absolute",
          top: "100px",
          left: "149px",
        },
      },
      box2: {
        height: "220px",
        width: "800px",
        border: "2px solid #fff",
        borderRadius: "100px 0 0 100px",
        borderRight: 0,
        position: "relative",
        top: "9px",
        left: "100px",
        "& ul": {
          display: "flex",
          "& li": {
            minWidth: "500px",
            "& li::first": {
              fontSize: "50px",
            },
          },
        },
      },
      box3: {
        height: "220px",
        width: "800px",
        border: "2px solid #fff",
        borderRadius: "0 100px 100px 0",
        borderLeft: "0",
        position: "relative",
        top: "8px",
        left: "200px",
        "& ul": {
          display: "flex",
          "& li": {
            minWidth: "500px",
          },
        },
      },
      box4: {
        height: "220px",
        width: "800px",
        border: "2px solid #fff",
        borderRadius: "100px 0 0 100px",
        borderRight: 0,
        position: "relative",
        top: "7px",
        left: "100px",
        "& ul": {
          display: "flex",
          "& li": {
            minWidth: "500px",
          },
        },
      },
      box5: {
        height: "220px",
        width: "800px",
  
        position: "relative",
        top: "7px",
        left: "100px",
        "& ul": {
          display: "flex",
          "& li": {
            minWidth: "500px",
          },
        },
      },
      mbox1: {
        border: "2px solid #fff",
        borderRight: "0",
        borderTop: "0",
        borderBottom: "0",
        height: "200px",
      },
      mboxicon: {
        "& h1": {
          fontSize: "30px",
          color: "#20e298",
  
          fontFamily: "moonbase",
          position: "relative",
          top: "30px",
          left: "10px",
        },
      },
      mboxtext: {
        paddingLeft: "10px",
        "& h3": {
          fontFamily: "monetizer",
          fontSize: "25px",
          color: "#fff",
          padding: "10px auto",
          position: "relative",
          top: "40px",
          // left: "5px",
          left: "10px",
          
        },
      },
    });
    const classes = use();
    return (
      <Box className={classes.root}>
        <Container className={classes.heading}>
          <Typography variant="h1">LAUNCH ROADMAP</Typography>
        </Container>
        <Container maxWidht="md" className={classes.desktop}>
          <Grid item>
            <Box className={classes.box1}>
              <ul>
                <li className={classes.box1inner}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">10%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box className={classes.box2}>
              <ul>
                <li className={classes.box1inner} style={{ left: "-150px" }}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">25%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
  
                <li className={classes.box1inner} style={{ left: "-100px" }}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">40%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box className={classes.box3}>
              <ul>
                <li className={classes.box1inner} style={{ left: "-250px" }}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">50%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
  
                <li
                  className={classes.box1inner}
                  style={{ left: "-200px", minWidth: "300px" }}
                >
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">60%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box className={classes.box4}>
              <ul>
                <li className={classes.box1inner} style={{ left: "-150px" }}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">75%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
  
                <li className={classes.box1inner} style={{ left: "-100px" }}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">90%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box className={classes.box5}>
              <ul>
                <li className={classes.box1inner} style={{ left: "-150px" }}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">99%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
  
                <li className={classes.box1inner} style={{ left: "-100px" }}>
                  <Avatar className={classes.circle} />{" "}
                  <Typography variant="h1">100%</Typography>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </li>
              </ul>
            </Box>
          </Grid>
        </Container>
        <Container className={classes.mobile}>
          <Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Box>
                    {" "}
                    <Typography variant="h1">10%</Typography>
                  </Box>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">25%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">40%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">50%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">60%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">75%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">90%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">99%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box className={classes.mbox1}>
                <Box className={classes.mboxicon}>
                  <Avatar
                    className={classes.circle}
                    style={{ top: "35px", left: "-15px" }}
                  />
                  <Typography variant="h1">100%</Typography>
                </Box>
                <Box className={classes.mboxtext}>
                  <Typography variant="h3">
                    AIRDROP FREE GALACTIC EAGLE NFT'S. RANDOM RAFFLE NFT GIVEAWAYS
                    FOR GE6 COMMUNITY MEMBERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
  