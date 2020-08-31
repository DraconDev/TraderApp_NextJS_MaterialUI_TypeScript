import { Grid, ThemeProvider } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import Header from "../../Component/header/Header";
import theme from "./../../Theme/theme";

interface Props {}

const person = (props: Props) => {
  const router = useRouter();
  // console.log(useRouter());

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Grid container>
          <Grid item sm={2}></Grid>
          <Grid item xs={12} sm={8}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            aspernatur, nostrum odio dignissimos excepturi, nam sunt dolore
            accusamus temporibus ipsa consectetur libero earum quod ducimus
            voluptatum modi impedit. Harum, amet.
          </Grid>
          <Grid item sm={2}></Grid>
        </Grid>
        {/* <Button color="primary">Test</Button>
        <Box component="span" m={1}>
          teststset
          <Button />
        </Box> */}
      </ThemeProvider>
      {router.query.person}
      {router.query.vehicle}
    </div>
    
  );
};

export default person;
