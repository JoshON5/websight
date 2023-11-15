import UserProjects from '../components/UserProjectsList';
import AllProjects from '../components/AdminProjectsList';
import { GET_USER } from '../utils/queries';
import React from 'react';
import { useQuery } from '@apollo/client';

const Dashboard = () => {
  const { data, error, loading } = useQuery(GET_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const user = data.user;

  if (user.role === 'ADMIN') {
    return (
        <div className="mx-auto pt-7 px-5">
          <h1 className="text-4xl font-semibold leading-7 text-webGrey">Welcome to your Dashboard!</h1>
          <div>
          <AllProjects />
          </div>
          </div>
    )
} else {
  return (
    <div className="mx-auto pt-7 px-5">
    <h1 className="text-4xl font-semibold leading-7 text-webGrey">Welcome to your Dashboard!</h1>
    <div>
    <UserProjects/>
    </div>
    </div>
  )
 }
}

 export default Dashboard;