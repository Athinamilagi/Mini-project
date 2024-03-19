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
import Navbar from "./components/Dashboard/navbar";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Navbar />}>
          <Route index element={<Dashboard />} />
        </Route>
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
