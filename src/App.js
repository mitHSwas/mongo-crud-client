import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import Home from './components/Home';
import Update from './components/Update';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch("http://localhost:5000/users")
    },
    {
      path: 'users/addUser',
      element: <AddUser></AddUser>
    },
    {
      path: 'user/:id',
      element: <Update></Update>,
      loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
