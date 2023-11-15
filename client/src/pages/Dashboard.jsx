import UserProjects from '../components/UserProjectsList';

const Dashboard = () => {
    
    return (
        
        <div className="mx-auto pt-7 px-5">
          <h1 className="text-4xl font-semibold leading-7 text-webGrey">Welcome to your Dashboard!</h1>
          <div>
          <UserProjects/>
          </div>
          </div>

    )
 };

 export default Dashboard;