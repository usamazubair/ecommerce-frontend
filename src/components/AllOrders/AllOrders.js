import React, { useState } from "react";
import Table from "components/Table/Table";
import Loader from "components/Loader/Loader";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Button } from "@mui/material";
import ShippingInformation from "components/ShippingInformation/ShippingInformation";
import CartInformation from "components/CartInformation/CartInformation";

export default function AllOrders({
  allOrders,
  updateOrder,
  loading,
  deleteOrder,
}) {
  const [openShippingModal, setShippingModal] = useState(false);
  const [shippingDetails, setShippingDetails] = useState(null);
  const [openCartModal, setCartModal] = useState(false);
  const [cartDetails, setCartDetails] = useState(null);
  const [orderHeading] = useState([
    { id: 0, heading: "Customer Name" },
    { id: 1, heading: "Shipping Information" },
    { id: 2, heading: "Cart Information" },
    { id: 3, heading: "Payment Type" },
    { id: 4, heading: "Customer Email" },
    { id: 5, heading: "Proceed" },
  ]);

  const showShippingDetails = (detail, value) => {
    setShippingDetails(detail);
    setShippingModal(value);
  };

  const showCartDetails = (detail, value) => {
    setCartDetails(detail);
    setCartModal(value);
  };

  return (
    <>
      {openShippingModal && (
        <ShippingInformation
          openModal={openShippingModal}
          setModal={setShippingModal}
          shippingData={shippingDetails}
        />
      )}
      {openCartModal && (
        <CartInformation
          openModal={openCartModal}
          setModal={setCartModal}
          productData={cartDetails}
        />
      )}
      <div className="content">
        <div>
          {loading && (
            <div>
              <Loader />
            </div>
          )}
        </div>
        {!loading && allOrders.length === 0 && (
          <div className="noOrder">There is no orders</div>
        )}
        {!loading && allOrders.length !== 0 && (
          <Table headings={orderHeading}>
            {allOrders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  {row?.ShippingDetail?.fName + row?.ShippingDetail?.lName}
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() =>
                      showShippingDetails(row?.ShippingDetail, true)
                    }
                  >
                    Click
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    onClick={() => showCartDetails(row?.CartId?.Products, true)}
                  >
                    Click
                  </Button>
                </TableCell>
                <TableCell align="center">{row?.PaymentOption}</TableCell>
                <TableCell align="center">
                  {row?.ShippingDetail?.email}
                </TableCell>
                <TableCell align="center">
                  {row.Proceed ? "true" : "false"}
                </TableCell>
                <TableCell align="center">
                  <div className="tableActions">
                    <Button
                      disabled={row?.Proceed}
                      className="update"
                      onClick={() => updateOrder(row, true)}
                    >
                      Confirm
                    </Button>
                    <Button
                      className="delete"
                      color="error"
                      onClick={() => deleteOrder(row?._id)}
                    >
                      Delete
                    </Button>
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
