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
    <div>
      <h2>Complete Project List</h2>
      {users.map((user) => (
        <ul key={user._id}>
          {user.projects.map((project) => (
            <div key={project._id} className="project-card border-4 m-3">
                            <Link to={`/dashboard/${project._id}`}>
                <h3>Customer Name: {user.name}</h3>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </Link>
              <div className="features-card mx-3">
                <h4>Features: </h4>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature.name}>{feature.name}</li>
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
