import React from "react";
import StaffList from '../components/staff/StaffList'
import StaffCreate from '../components/staff/StaffCreate'

const Staffs = props => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}>
      <div className="container">
          <h1>Create Staff</h1>    
          <StaffCreate />
          <hr/>
          <h1>List</h1>
          <StaffList />
      </div>
    </div>
  );
  };
  
  export default Staffs;