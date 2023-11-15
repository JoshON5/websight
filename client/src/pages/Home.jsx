import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Home = () => {

    return(
        <div className="relative overflow-hidden w-screen bg-hero">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Websites Done Right
                </h1>
                <p className="mt-4 text-xl text-gray-300">
                  Come to us with a vision, let the Websight team take care of the rest.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                      </div>
                    </div>
                  </div>
                  {Auth.loggedIn() ? (
            <>
              <span>{Auth.getProfile().data.username}</span>
                  <Link
                    className="inline-block rounded-md border border-transparent bg-webTeal px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-webGrey"
                    to="/dashboard">
                    Go to your Dashboard!
                  </Link>
                  </>
          ) : (
            <>
                              <Link
                    className="inline-block rounded-md border border-transparent bg-webTeal px-8 py-3 text-center font-medium text-white hover:bg-white hover:text-webGrey"
                    to="/login">
                    Get Started Now
                  </Link>
                  </>
                    )}




                </div>
              </div>
            </div>
          </div>
        </div>
      )
};

export default Home;