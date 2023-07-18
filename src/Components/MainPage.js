import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    width: "100vw",
    height: "calc(100vh - 4rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    width: "70%",
    height: "80%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "600",
    textAlign: "center",
  },
});
function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.parent}>
        <Typography className={classes.title}>
          Welcome <br /> To <br />
          Sales Web-Application
        </Typography>
      </div>
    </div>
  );
}

export default MainPage;
