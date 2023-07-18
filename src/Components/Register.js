import { Button, TextField, Typography, makeStyles } from "@material-ui/core";
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
  fieldLabel: {
    color: "grey",
    marginTop: "1.5rem",
    fontSize: "1.1rem",
  },
  fieldInput: {
    width: "70vw",
    marginTop: "0.5rem",
  },
  btn: {
    width: "70vw",
    textTransform: "none",
    background: "blue",
    color: "white",
    fontSize: "1.1rem",
    marginTop: "1.5rem",
    "&:hover": {
      background: "blue",
    },
  },
});
function Register() {
  const classes = useStyles();
  const fields = [
    {
      fieldName: "First Name",
      fieldType: "text",
    },
    {
      fieldName: "Last Name",
      fieldType: "text",
    },
    {
      fieldName: "Email",
      fieldType: "email",
    },
    {
      fieldName: "Password",
      fieldType: "password",
    },
  ];
  return (
    <div className={classes.main}>
      <div className={classes.parent}>
        <Typography className={classes.title}>REGISTRATION FORM</Typography>
        <div>
          {fields.map((field, i) => {
            return (
              <div key={new Date() + "" + Math.random() * 10000000}>
                <Typography className={classes.fieldLabel}>
                  {field.fieldName}
                </Typography>
                <TextField
                  className={classes.fieldInput}
                  variant="outlined"
                  size="small"
                  type={field.fieldType}
                />
              </div>
            );
          })}
          <Button className={classes.btn} disableRipple>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
