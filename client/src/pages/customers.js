import React from "react";
import PostCreate from "../components/customer/CustomerCreate";
import PostList from "../components/customer/CustomerList";

const Customers = props => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}>
        <div className="container">
            <h1>Create Customer</h1>    
            <PostCreate />
            <hr/>
            <h1>List</h1>
            <PostList />
        </div>
      </div>
    );
  };
  
  export default Customers;