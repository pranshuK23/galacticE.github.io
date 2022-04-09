import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import Ban1 from "./Ban1";
import Ban2 from "./Ban2";
import Ban3 from "./Ban3";
import Ban4 from "./Ban4";
import Ban5 from "./Ban5";
import Ban6 from "./Ban6";
import Ban7 from "./Ban7";
import Ban8 from "./Ban8";
import Ban9 from "./Ban9";
import Ban10 from "./Ban10";
import Ban11 from "./Ban11";
import Ban12 from "./Ban12";
import Ban13 from "./Ban13";

function Home(props) {
  return (
    <Page title="Marketplace | MetaArts">
      <Box>
        <Ban1 />
        <Ban2 />
        <Ban3 />
        <Ban4 />
        <Ban5 />
        <Ban6 />
        <Ban7 />
        <Ban8 />
        <Ban9 />
        <Ban10 />
        <Ban11 />
        <Ban12 />
        <Ban13 />
        <Banner />
      </Box>
    </Page>
  );
}

export default Home;
