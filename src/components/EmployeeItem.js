import VoteButton from './VoteButton';
import './EmployeeItem.scss';
import { Link } from 'react-router-dom';

const EmployeeItem = ({ employee }) => {
  return (
    <div className="employee-item">
      <img src={employee.imageUrl} alt={`${employee.firstName} ${employee.lastName}`} />
      <h3>{`${employee.firstName} ${employee.lastName}`}</h3>
      <p>{employee.position}</p>
      <p>Vote: {employee.votes}</p>
      <VoteButton employeeId={employee.id} />
      <Link to={`/employee/${employee.id}`} style={{margin:8}}>View Details</Link>
    </div>
  );
}

export default EmployeeItem;
