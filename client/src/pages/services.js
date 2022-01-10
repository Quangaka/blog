import React from "react";
import ServiceCreate from '../components/service/ServiceCreate'
import ServiceList from '../components/service/ServiceList'

const Services = props => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}>
        <div className="container">
          <h1>Create Service</h1>    
          <ServiceCreate />
          <hr/>
          <h1>List</h1>
          <ServiceList />
      </div>
      </div>
    );
  };
  
  export default Services;