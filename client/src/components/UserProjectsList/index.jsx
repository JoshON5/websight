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
console.log('User: ', user)
  return (
<div className='mt-6'> 
<p className='mt-10 p-6 text-center text-3xl text-gray-500'>Create a new project {' '} 
                            <Link
                            to='/projectform'
                            className='font-semibold leading-6 text-webTeal hover:text-webGrey'
                        >
                            {' '}
                            Here!
                        </Link>
                        </p>
  <h2 className='text-3xl font-bold text-webTeal'>Your Project Submissions: </h2>
  {user.projects.length > 0 ? (
    <div>
      {user.projects.map((project) => (
        // Project card
        <div key={project._id} className="project-card border-4 m-3 p-2 bg-webGrey border-webTeal">
                        <Link to={`/dashboard/${project._id}`} key={project._id}>
                <h3 className='text-webGrey bg-gray-300 px-2 mb-1 text-lg font-semibold  hover:bg-webTeal'>{project.name}</h3>
                <p className='text-gray-300 px-2'>{project.description}</p>
              </Link>
          {project.features.length > 0 && (
            <div className="features-card mx-2">
              <h4 className='text-gray-300 underline'>Features: </h4>
              <ul>
                {project.features.map((feature) => (
                  <li className='text-gray-300 px-2' key={feature.name}>{feature.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

    </div>
  ) : (
    <p className='mt-10 text-center text-3xl text-gray-500'>No projects found. Create a new project {' '} 
                            <Link
                            to='/projectform'
                            className='font-semibold leading-6 text-webTeal hover:text-webGrey'
                        >
                            {' '}
                            Here!
                        </Link>
                        </p>
  )}
</div>




  );
};

export default UserProjects;

