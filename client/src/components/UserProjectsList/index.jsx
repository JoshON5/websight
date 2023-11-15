import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';

const UserProjects = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { user } = data;

  return (
<div>
  <h2>Your Projects</h2>
  {user.projects.length > 0 ? (
    <div>
      {user.projects.map((project) => (
        // Project card
        <div key={project._id} className="project-card border-4 m-3">
          <h3>{project.name}</h3>
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
      ))}
    </div>
  ) : (
    <p>No projects found.</p>
  )}
</div>




  );
};

export default UserProjects;

