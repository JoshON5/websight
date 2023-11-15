import { useMutation } from '@apollo/client';
import { ADD_REMARK } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useState } from 'react';

const RemarkForm = ({ projectId }) => {
  const [remarkText, setRemarkText] = useState('');
  const [addRemark, { loading, error }] = useMutation(ADD_REMARK);

  const handleRemark = async () => {
    console.log(Auth.getProfile().data)
    try {
      // Check if the user is an admin before making the mutation request
      if (Auth.getProfile().data.role === 'ADMIN') {
        
        const response = await addRemark({
          variables: {
            projectId: projectId,
            remarkText: remarkText,
            remarkAuthor: Auth.getProfile().data.name
          },
        });
        console.log(response);
      } else {
        console.error('User is not authorized to add a remark.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea value={remarkText} onChange={(e) => setRemarkText(e.target.value)} />
      <button onClick={handleRemark}>Add Remark</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default RemarkForm;
