import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";
import "../node_modules/boxicons/css/boxicons.min.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Game from "./components/Error";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Game />} />
      </>
    )
  );
  return (
    <RouterProvider router={router}>
      <Login />
    </RouterProvider>
  );
}

export default App;
