import React, { useState } from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  main: {
    width: `calc(100vw - 2rem})`,
    background: "blue",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
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
  list: {
    width: "100vw",
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "blue",
  },
  hamburger: {
    color: "white",
    fontSize: "calc(2vh + 2vw)",
    cursor: "pointer",
  },
  cross: {
    fontSize: "calc(2vh + 2vw)",
    cursor: "pointer",
    color: "white",
    background: "blue",
  },
  crossDiv: {
    paddingTop: "2rem",
    width: "calc(100vw - 2rem)",
    background: "blue",
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
  },
  link: {
    textDecoration: "none",
  },
  menuItem: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
    letterSpacing: "1px",
  },
});
function MobileToolBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (value) => setOpen(value);

  const list = () => (
    <div className={classes.list}>
      <div className={classes.crossDiv}>
        <ImCross
          className={classes.cross}
          onClick={() => toggleDrawer(false)}
        />
      </div>
      <List>
        <Link
          className={classes.link}
          to="/AddSales"
          onClick={() => toggleDrawer(false)}
        >
          <ListItem>
            <Typography className={classes.menuItem}>ADD SALES</Typography>
          </ListItem>
        </Link>
        <Link
          className={classes.link}
          to="/Top5Sales"
          offset={5}
          onClick={() => toggleDrawer(false)}
        >
          <ListItem button>
            <Typography className={classes.menuItem}>TOP 5 SALES</Typography>
          </ListItem>
        </Link>
        <Link
          className={classes.link}
          to="/TodayTotalRevenue"
          onClick={() => toggleDrawer(false)}
        >
          <ListItem button>
            <Typography className={classes.menuItem}>
              TODAY'S TOTAL REVENUE
            </Typography>
          </ListItem>
        </Link>
        <Link
          className={classes.link}
          to="/Login"
          onClick={() => toggleDrawer(false)}
        >
          <ListItem button>
            <Typography className={classes.menuItem}>LOGIN</Typography>
          </ListItem>
        </Link>
        <Link
          className={classes.link}
          to="/Register"
          onClick={() => toggleDrawer(false)}
        >
          <ListItem button>
            <Typography className={classes.menuItem}>REGISTER</Typography>
          </ListItem>
        </Link>
      </List>
    </div>
  );
  return (
    <div className={classes.main}>
      <Link className={classes.link} to="/">
        <Button disableRipple className={classes.appName}>
          SALES APP
        </Button>
      </Link>
      <GiHamburgerMenu
        onClick={() => toggleDrawer(true)}
        className={classes.hamburger}
      />
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default MobileToolBar;
