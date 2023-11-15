import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';

const SingleProject = () => {
  const { projectId } = useParams();

  const { loading, error, data } = useQuery(GET_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { user } = data;
  const project = user.projects.find((project) => project._id === projectId);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      {project.features.length > 0 && (
        <div className="features-card mx-3">
          <h4>Features: </h4>
          <ul>
            {project.features.map((feature) => (
              <li key={feature.name}>{feature.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SingleProject;