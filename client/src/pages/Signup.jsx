import Image from './../assets/websight-icon.png'

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
    return (

        <div className="flex w-screen min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-800">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
                className="mx-auto h-10 w-auto"
                src={Image}
                alt="Your Company"
              />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-webTeal">
            Create a Websight Account!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
          <form onSubmit={handleFormSubmit} className="space-y-6">

          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-webTeal">
                Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="name"
                  autoComplete="name"
                  value={formState.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-webTeal sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-webTeal">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formState.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-webTeal sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-webTeal">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-webTeal sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-webTeal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-webGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300"
              >
                Sign Up
              </button>
            </div>
          </form>
          )}
          <p className="mt-10 text-center text-sm text-gray-500"> Log in instead? {''}
            <Link to="/login" className="font-semibold leading-6 text-webTeal hover:text-webGrey"> Click Here</Link>
          </p>
        </div>
      </div>
    )
}

export default Signup;