import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    background: "blue",
    color: "white",
    position: "static",
    height: "2rem",
    width: "calc(100vw - 2rem)",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
  },
  btns: {
    fontWeight: "500",
    fontSize: "1rem",
    marginRight: "1rem",
    "&:hover": {
      background: "transparent",
      transform: "scale(1.1)",
      transitionDuration: "0.15s",
      transition: "ease-in-out",
    },
  },
  appName: {
    fontSize: "1.3rem",
    marginRight: "2rem",
    color: "white",
    "&:hover": {
      background: "transparent",
      transform: "scale(1.1)",
      transitionDuration: "0.15s",
      transition: "ease-in-out",
    },
  },
});
function ToolBar() {
  const classes = useStyles();
  const Location = useLocation();
  const path = Location.pathname;
  const buttons = [
    {
      buttonName: "Add Sales",
      buttonLink: "/AddSales",
    },
    {
      buttonName: "Top 5 Sales",
      buttonLink: "/Top5Sales",
    },
    {
      buttonName: "Today's Total Revenue",
      buttonLink: "/TodayTotalRevenue",
    },
    {
      buttonName: "Login",
      buttonLink: "/Login",
    },
    {
      buttonName: "Register",
      buttonLink: "/Register",
    },
  ];
  return (
    <div className={classes.main}>
      <Link to="/">
        <Button disableRipple className={classes.appName}>
          SALES APP
        </Button>
      </Link>
      {buttons.map((button, i) => {
        return (
          <Link
            to={button.buttonLink}
            key={new Date() + "" + Math.random() * 10000000}
          >
            <Button
              disableRipple
              style={
                path === button.buttonLink
                  ? { color: "white" }
                  : { color: "lightgrey" }
              }
              className={classes.btns}
            >
              {button.buttonName}
            </Button>
          </Link>
        );
      })}
      <Link to="/">
        <Button
          className={classes.btns}
          style={{ color: "lightgrey" }}
          disableRipple
        >
          Logout
        </Button>
      </Link>
    </div>
  );
}

export default ToolBar;
