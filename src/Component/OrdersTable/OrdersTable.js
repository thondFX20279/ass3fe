import React from "react";
import classNames from "classnames/bind";
import classes from "./OrdersTable.module.scss";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(classes);
const OrdersTable = ({ orders }) => {
  const navigate = useNavigate();
  const handleOrderDetail = (orderId) => {
    navigate(`/orders/${orderId}`);
  };
  return (
    <table className={cx("order_table")}>
      <thead className={cx("order_thead")}>
        <tr>
          <td>ID</td>
          <td>User</td>
          <td>Name</td>
          <td>Phone</td>
          <td>Address</td>
          <td>Total</td>

          <td>Status</td>
          <td>Detail</td>
        </tr>
      </thead>
      <tbody className={cx("order_tbody")}>
        {orders.length !== 0 &&
          orders.map((order, i) => (
            <tr key={i}>
              <td>{order.orderId}</td>
              <td>{order.userId}</td>
              <td>{order.fullName}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.totalPrice}</td>

              <td>Waiting for pay</td>
              <td>
                <button onClick={(e) => handleOrderDetail(order.orderId)} type="button" className={cx("order_actions")}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default OrdersTable;
