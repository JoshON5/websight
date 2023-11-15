import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../utils/queries';
import { Link } from 'react-router-dom';


const AllProjects = () => {
  const { data, error, loading } = useQuery(GET_USERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const users = data.users; 


  return (
    <div className='mt-6'>
      <h2 className='text-3xl font-bold text-webTeal'>Complete Project List:</h2>
      {users.map((user) => (
        <ul key={user._id}>
          {user.projects.map((project) => (
            <div key={project._id} className="project-card border-4  border-webTeal m-3 p-2 bg-webGrey">
                <Link to={`/dashboard/${project._id}`}>
                <h3 className='text-webGrey bg-gray-300 px-2 mb-1 text-lg font-semibold'>{project.name}</h3>
                </Link>
                <h3 className='text-gray-300 px-2' >Customer Name: {user.name}</h3>
                <p className='text-gray-300 px-2'>{project.description}</p>
              <div className="features-card mx-3">
                <h4 className='text-gray-300 underline'>Features: </h4>
                <ul>
                  {project.features.map((feature) => (
                    <li className='text-gray-300 px-2' key={feature.name}>{feature.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </ul>
      ))}
    </div>
  );


};
export default AllProjects;
