import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">OH NO!</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">looks like an unexpected error has occurred :(</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              
              className="rounded-md bg-webTeal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-webGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              to="/"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>

  );
}