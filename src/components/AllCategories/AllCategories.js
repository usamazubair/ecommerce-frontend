import React, { useState } from "react";
import Table from "components/Table/Table";
import Loader from "components/Loader/Loader";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import UpdateCategory from "components/UpdateCategory/UpdateCategory";

export default function AllCategories({
  allCategories,
  deleteCategory,
  updateCategory,
}) {
  const [categoryHeading] = useState([
    { id: 0, heading: "Name" },
    { id: 1, heading: "Country" },
  ]);
  const [updateCategoryModal, setUpdateCategory] = useState(false);
  const [categoryData, setCategoryData] = useState();

  const deleteFunction = (id) => {
    deleteCategory(id);
  };

  const updateFunction = (data) => {
    setUpdateCategory(true);
    setCategoryData(data);
  };

  return (
    <>
      {updateCategoryModal && (
        <UpdateCategory
          updateCategory={updateCategory}
          categoryData={categoryData}
          updateCategoryModal={updateCategoryModal}
          setUpdateCategory={setUpdateCategory}
        />
      )}
      <div className="content">
        <div>
          {!allCategories && (
            <div>
              <Loader />
            </div>
          )}
        </div>
        {allCategories && allCategories?.length === 0 && (
          <div className="noCategory">There is no categories</div>
        )}
        {allCategories && allCategories?.length !== 0 && (
          <Table headings={categoryHeading} tableData={allCategories}>
            {allCategories.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {row?.Name}
                </TableCell>
                <TableCell align="center">{row?.Country}</TableCell>
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
          </Table>
        )}
      </div>
    </>
  );
}
