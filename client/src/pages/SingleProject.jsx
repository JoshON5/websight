import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER, GET_PROJECT } from '../utils/queries';
import RemarkForm from '../components/Remark';

const SingleProject = () => {
  const { projectId } = useParams();

  const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER);
  const { loading: projectLoading, error: projectError, data: projectData } = useQuery(GET_PROJECT, {
    variables: { projectId },
  });

  if (userLoading || projectLoading) {
    return <p>Loading...</p>;
  }

  if (userError || projectError) {
    return <p>Error: {userError ? userError.message : projectError.message}</p>;
  }

  const { user } = userData;
  const isAdmin = user.role === 'ADMIN';

  if (isAdmin) {
    const project = projectData.project;

    if (!project) {
      return <p>Project not found.</p>;
    }

    return (
      <div>
        <h2>{project.name}</h2>
        <p>Customer: {project.customerName}</p>
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
        <RemarkForm projectId={project._id} />
      </div>
    );
  } else {
    return (
      <div>
        <h2>{user.name}'s Project</h2>
        {user.projects.map((project) => {
          if (project._id === projectId) {
            return (
              <div key={project._id}>
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
          }
          return null;
        })}
      </div>
    );
  }
};

export default SingleProject;