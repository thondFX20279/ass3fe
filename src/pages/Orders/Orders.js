import React, { useEffect, useState } from "react";
import ShopAndCartBanner from "../../Component/Banner/ShopAndCartBanner";
import orderApi from "../../api/orderApi";
import OrdersTable from "../../Component/OrdersTable/OrdersTable";
import { useSelector } from "react-redux";
const Orders = () => {
  const { user } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await orderApi.getOrdersByUser(user?._id);
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
