import React, { useEffect, useState } from "react";
import ShopAndCartBanner from "../../Component/Banner/ShopAndCartBanner";
import orderApi from "../../api/orderApi";
import OrdersTable from "../../Component/OrdersTable/OrdersTable";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await orderApi.getOrders();
        if (res.data.success) {
          setOrders(res.data.orders);
        } else {
          setOrders([]);
        }
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      }
    };
    getOrders();
  }, []);
  return (
    <div className="container">
      <ShopAndCartBanner title={"Orders"} />
      <OrdersTable orders={orders} />
    </div>
  );
};

export default Orders;
