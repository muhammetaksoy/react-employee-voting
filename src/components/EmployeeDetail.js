import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EMPLOYEE } from '../graphql/queries';
import './EmployeeDetail.scss';

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_EMPLOYEE, { variables: { id } });
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    if (data && data.employee) {
      setEmployee(data.employee);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.message})</p>;

  return (
    <div className="employee-detail">
    <img src={employee.imageUrl} alt={`${employee.firstName} ${employee.lastName}`} />
    <h3>{`${employee.firstName} ${employee.lastName}`}</h3>
    <p>{employee.position}</p>
    <p className="email">Email: {employee.email}</p>
    <p className="address">Address: {employee.address}</p>
    <p className="phone">Phone: {employee.phone}</p>
    <p>Vote: {employee.votes}</p>
    <button onClick={() => navigate(-1)}>Go Back</button>
  </div>
  );
};

export default EmployeeDetail;
