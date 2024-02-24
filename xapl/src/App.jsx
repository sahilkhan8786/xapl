import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "admin",
    element: <Dashboard />,
  },
]);
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
