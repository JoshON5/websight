import { useMutation } from '@apollo/client';
import { ADD_REMARK } from '../../utils/mutations'
import Auth from '../../utils/auth'
import { useState } from 'react'


const RemarkForm = ({ projectId }) => {
  const [remarkText, setRemarkText] = useState('');
  const [addRemark, { loading, error }] = useMutation(ADD_REMARK);

  const handleRemark = async () => {
    try {
      const response = await addRemark({
        variables: {
          projectId: projectId,
          remarkText: remarkText,
          remarkAuthor: Auth.getProfile().data.name
        },
      });
      console.log(response);
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