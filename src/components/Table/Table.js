import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable({ headings }) {
  function createData(name, quantity, price, color, Brand) {
    return { name, quantity, price, color, Brand };
  }

  const rows = [createData("Frozen yoghurt", 2, 100, "red", "Sony")];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headings.map((heading) => (
              <TableCell component="th" align="center" key={heading.id}>
                {heading.heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.color}</TableCell>
              <TableCell align="center">{row.Brand}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
