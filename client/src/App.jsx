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
import Navbar, { loader } from "./components/Dashboard/navbar";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Game />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Navbar />} loader={loader}>
          <Route index element={<Dashboard />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
