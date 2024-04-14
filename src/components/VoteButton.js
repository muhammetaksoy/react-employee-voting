import { useMutation } from '@apollo/client';
import { ADD_VOTE } from '../graphql/mutations';

const VoteButton = ({ employeeId }) => {
  const [addVote, { data, loading, error }] = useMutation(ADD_VOTE);

  const handleVote = () => {
    addVote({ variables: { id: employeeId } });
  };

  return (
    <button onClick={handleVote} disabled={loading}>
      Vote {loading ? '...' : ''}
    </button>
  );
}

export default VoteButton;
