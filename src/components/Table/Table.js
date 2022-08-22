import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable({
  headings,
  tableData,
  updateFunction,
  deleteFunction,
}) {

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
            <TableCell component="th" align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row?.Name}
              </TableCell>
              <TableCell align="center">{row?.Quantity}</TableCell>
              <TableCell align="center">{row?.Price}</TableCell>
              <TableCell align="center">{row?.Color}</TableCell>
              <TableCell align="center">{row?.Brand}</TableCell>
              <TableCell align="center">
                <div className="tableActions">
                  <span
                    className="update"
                    onClick={() => updateFunction(row, true)}
                  >
                    Update
                  </span>
                  <span
                    className="delete"
                    onClick={() => deleteFunction(row?._id)}
                  >
                    Delete
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
