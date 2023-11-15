import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App.jsx'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProjectForm from './pages/ProjectForm';
import ErrorPage from './pages/ErrorPage';
import SingleProject from './pages/SingleProject.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/projectform',
        element: <ProjectForm />
      },
      {
        path: '/dashboard/:projectId',
        element: <SingleProject />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/services',
        element: <Services />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
