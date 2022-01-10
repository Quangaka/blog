import React from "react";
import PostCreate from "../components/order/OrderCreate";
import PostList from "../components/order/OrderList";

const Orders = props => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}>
        <div className="container">
            <h1>Create Order</h1>    
            <PostCreate />
            <hr/>
            <h1>List</h1>
            <PostList />
        </div>
      </div>
    );
  };
  
  export default Orders;