import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoSobre from './pages/TodoSobre';
import TodoPage from './pages/TodoPage';
import DefaultLayout from './layouts/DefaultLayout';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <TodoPage />
        },
        {
          path: "/sobre", 
          element: <TodoSobre />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
