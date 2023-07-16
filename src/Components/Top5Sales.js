import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  makeStyles,
} from "@material-ui/core";
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
  table: {
    width: "75vw",
    marginTop: "2rem",
  },
  tableHeader: {
    borderBottom: "0.15rem solid black",
  },
  tableHeadCell: {
    fontSize: "1.3rem",
  },
  tableCell: {
    fontSize: "1.1rem",
  },
});

function Top5Sales() {
  const classes = useStyles();
  const tableHeader = [
    "#",
    "Sales Id:",
    "Product Name",
    "Quantity",
    "Sale Amount",
  ];
  const tableData = [
    {
      salesId: "SI212",
      productName: "Laptop",
      quantity: "2",
      saleAmount: "90000",
    },
    {
      salesId: "SI423",
      productName: "Mobile",
      quantity: "5",
      saleAmount: "85000",
    },
    {
      salesId: "SI983",
      productName: "Tablet",
      quantity: "3",
      saleAmount: "70000",
    },
    {
      salesId: "SI276",
      productName: "Computer",
      quantity: "2",
      saleAmount: "97000",
    },
    {
      salesId: "SI562",
      productName: "Washing Machine",
      quantity: "4",
      saleAmount: "67000",
    },
  ];
  return (
    <div className={classes.main}>
      <div className={classes.parent}>
        <Typography className={classes.title}>TOP 5 SALES</Typography>
        <div>
          <Table className={classes.table}>
            <TableHead className={classes.tableHeader}>
              {tableHeader.map((tableHead) => {
                return (
                  <TableCell className={classes.tableHeadCell}>
                    {tableHead}
                  </TableCell>
                );
              })}
            </TableHead>
            <TableBody>
              {tableData.map((data, i) => {
                return (
                  <TableRow>
                    <TableCell className={classes.tableCell}>
                      <b>{i + 1}</b>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {data.salesId}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {data.productName}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {data.quantity}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {data.saleAmount}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Top5Sales;
