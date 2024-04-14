import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import EmployeeItem from './EmployeeItem';
import { GET_EMPLOYEES } from '../graphql/queries';
import './EmployeeList.scss';

const EmployeeList = () => {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (data && data.employees) {
      setEmployees([...data.employees].sort((a, b) => b.votes - a.votes));
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :({error.message})</p>;

  return (
    <div className='employee-list'>
      {employees.map(employee => (
        <EmployeeItem key={employee.id} employee={employee} setEmployees={setEmployees} />
      ))}
    </div>
  );
};

export default EmployeeList;
