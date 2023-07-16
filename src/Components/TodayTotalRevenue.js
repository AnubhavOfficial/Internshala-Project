import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

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
  },
});
function TodayTotalRevenue() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.parent}>
        <Typography className={classes.title}>
          TODAY'S REVENUE IS 409000
        </Typography>
      </div>
    </div>
  );
}

export default TodayTotalRevenue;
