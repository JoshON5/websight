import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../utils/mutations';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import Features from '../components/FeatureList';
const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [features, setFeatures] = useState([
    { id: 1, name: 'User Registration and Authentication', checked: false },
    { id: 2, name: 'Animations', checked: false },
    { id: 3, name: 'Contact Forms', checked: false },
    { id: 4, name: 'ECommerce Features', checked: false },
  ]);
  const [addProject, { error }] = useMutation(ADD_PROJECT);
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'projectName':
        setProjectName(value);
        break;
      case 'projectDesc':
        setProjectDesc(value);
        break;
      default:
        break;
    }
  };
  const handleFeatureChange = (changedFeature) => {
    const updatedFeatures = features.map((feature) =>
      feature.id === changedFeature.id
        ? { ...feature, checked: !feature.checked }
        : feature
    );
    setFeatures(updatedFeatures);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userProfile = Auth.getProfile();
      const featureNames = features
        .filter((feature) => feature.checked)
        .map((feature) => ({ name: feature.name }));
        console.log(featureNames, projectName, projectDesc, userProfile.data._id)
        const { data } = await addProject({
          variables: {
              userId: userProfile.data._id,
              name: projectName,
              description: projectDesc,
              features: featureNames,
          },
        });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    setProjectName('');
    setProjectDesc('');
    setFeatures((prevFeatures) =>
      prevFeatures.map((feature) => ({ ...feature, checked: false }))
    );
  };
    return (
        <div>
            {Auth.loggedIn() ? (
                <>
                    <form
                        className='flex justify-center w-screen min-h-screen py-8'
                        onSubmit={handleSubmit}
                    >
                        <div className='mx-auto'>
                            <h1 className='text-4xl font-semibold leading-7 text-webGrey'>
                                Submit a project proposal for review!
                            </h1>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                <div className='sm:col-span-4'>
                                    <label
                                        htmlFor='ProjectName'
                                        className='block text-lg font-medium leading-6 text-gray-900'
                                    >
                                        Project Name
                                    </label>
                                    <div className='mt-2'>
                                        <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-webTeal sm:max-w-md'>
                                            <span className='flex select-none items-center pl-3 text-gray-800 sm:text-sm'></span>
                                            <input
                                                type='text'
                                                name='projectName'
                                                id='projectName'
                                                value={projectName}
                                                onChange={handleChange}
                                                className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                                placeholder='My Project Name'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-full'>
                                    <label
                                        htmlFor='about'
                                        className='block text-lg font-medium leading-6 text-gray-900'
                                    >
                                        About
                                    </label>
                                    <p className='mt-1 text-sm leading-6 text-gray-400'>
                                        Please write a few sentences describing your project.
                                    </p>
                                    <div className='mt-2'>
                                        <textarea
                                            id='projectDesc'
                                            name='projectDesc'
                                            rows={3}
                                            value={projectDesc}
                                            onChange={handleChange}
                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-webTeal sm:text-sm sm:leading-6'
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='border-t border-gray-900/10 pt-2 pb-12'>
                                <h2 className='text-lg font-semibold leading-7 text-gray-900'>
                                    Features
                                </h2>
                                <p className=' text-sm leading-6 text-gray-400'>
                                    Let us know what features you want to incorporate into your
                                    website!
                                </p>
                                <div className='mt-5 space-y-10'>
                                    <fieldset>
                                        <legend className='text-sm font-semibold leading-6 text-webTeal'>
                                            Select All That Apply:
                                        </legend>
                                        <div className='mt-6 space-y-6'>
                                            <Features
                                                features={features}
                                                handleFeatureChange={handleFeatureChange}
                                            />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className='mt-6 flex items-center justify-end gap-x-6'>
                                <button
                                    type='button'
                                    className=' rounded-md text-sm font-semibold leading-6 text-gray-900 hover:text-gray-400'
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    className='rounded-md bg-webTeal px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-webGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-webTeal'
                                >
                                    Save
                                </button>
                            </div>
                        </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to submit a form. Please{' '}
                    <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
                </p>
            )}
        </div>
    );
};
export default ProjectForm;
