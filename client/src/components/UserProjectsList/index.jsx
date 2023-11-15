import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../utils/queries';
import { Link } from 'react-router-dom';


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
<div className='mt-6'> 
  <h2 className='text-2xl font-bold text-webTeal'>Your Projects: </h2>
  {user.projects.length > 0 ? (
    <div>
      {user.projects.map((project) => (
        // Project card
        
        <div key={project._id} className="project-card border-4 border-webTeal m-3 p-2 bg-webGrey">
                <Link to={`/dashboard/${project._id}`}>
                <h3 className='text-webTeal'>Name: {project.name}</h3>
                </Link>
                <p className='text-gray-300'>Description: {project.description}</p>
          {project.features.length > 0 && (
            <div className="features-card mx-3">
              <h4 className='text-gray-300'>Features: </h4>
              <ul>
                {project.features.map((feature) => (
                  <li className='text-gray-300' key={feature.name}>{feature.name}</li>
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

