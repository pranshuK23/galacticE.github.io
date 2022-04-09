import { Typography, Box, Container, makeStyles } from "@material-ui/core";
import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";
export default function Faq() {
  const use = makeStyles({
    root: {
      height: "auto",
      background: "#000",
      paddingBottom:"5rem",
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
    para: {
      color: "#fff",
      fontSize: "23px",
      fontFamily: "monetizer",
      fontWeight: "400",
      lineHeight: "28px",
    },
  });
  const classes = use();
  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant="h1">FREQUENTLY ASKED QUESTIONS</Typography>

        <Box>
          <Accordion style={{ background: "#000", paadingBottom: "100px" }}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                What is an NFT?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                An NFT (non-fungible token) is a piece of art that lives on the
                blockchain. Owning an NFT is just like owning a painting, but
                instead of owning it physically, you own it virtually, on the
                blockchain. This piece of art grants you access to something
                very special. You are the early investors into something much
                greater than you can imagine.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{ background: "#000", paadingBottom: "100px" }}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Are the Galactic Eagles going to moon?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                An NFT (non-fungible token) is a piece of art that lives on the
                blockchain. Owning an NFT is just like owning a painting, but
                instead of owning it physically, you own it virtually, on the
                blockchain. This piece of art grants you access to something
                very special. You are the early investors into something much
                greater than you can imagine.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{ background: "#000" }}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Where can I see my Galactic Eagle?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                An NFT (non-fungible token) is a piece of art that lives on the
                blockchain. Owning an NFT is just like owning a painting, but
                instead of owning it physically, you own it virtually, on the
                blockchain. This piece of art grants you access to something
                very special. You are the early investors into something much
                greater than you can imagine.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion style={{ background: "#000", paadingBottom: "100px" }}>
            <AccordionSummary
              expandIcon={<AddIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Why should I invest into a Galactic Eagle?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={classes.para}>
                An NFT (non-fungible token) is a piece of art that lives on the
                blockchain. Owning an NFT is just like owning a painting, but
                instead of owning it physically, you own it virtually, on the
                blockchain. This piece of art grants you access to something
                very special. You are the early investors into something much
                greater than you can imagine.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
}
