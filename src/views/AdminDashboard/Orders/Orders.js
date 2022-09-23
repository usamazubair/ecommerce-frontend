import React, { useState, useEffect } from "react";
import AdminService from "services/AdminService";
import AllOrders from "components/AllOrders/AllOrders";
import "assets/scss/component/order.scss";

export default function Orders() {
  const [allOrders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        var response = await AdminService.getAllOrders();
        setOrders(response.data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const updateOrder = () => {};

  const deleteOrder = () => {};

  return (
    <div className="orderRoot">
      <div className="orderContent">
        <h5>Orders</h5>
        <AllOrders
          allOrders={allOrders}
          updateOrder={updateOrder}
          loading={loading}
          deleteOrder={deleteOrder}
        />
      </div>
    </div>
  );
}
