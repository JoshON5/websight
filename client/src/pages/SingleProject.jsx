import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import { Link } from 'react-router-dom';


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
<div className= 'flex w-screen min-h-screen flex-1 flex-col px-6 py-12 lg:px-8'>
      <div className="px-4 sm:px-0">
        <h3 className="text-3xl font-semibold leading-7 text-webGrey">Project Details:</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-300">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-webTeal">Project Name</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{project.name}</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-webTeal">Customer Name</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.name}</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-webTeal">Contact</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-webTeal">Description</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{project.description}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-webTeal">Features</dt>
            {/* <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd> */}
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {project.features.map((feature) => (
              <li className='list-none' key={feature.name}>{feature.name}</li>
            ))}
          </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-lg font-medium leading-6 text-webTeal">Project Approved?</dt>
            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0">*remark here*</dd>
          </div>
        </dl>
      </div>

      <div>
      <p className='mt-12 text-center text-sm text-gray-500'>
             Go Back to Your{' '}
                <Link
                to='/dashboard'
                className='font-semibold leading-6 text-webTeal hover:text-webGrey'>
                {' '} Dashboard
                </Link>
                </p>
                </div>
    </div>

  );
};

export default SingleProject;