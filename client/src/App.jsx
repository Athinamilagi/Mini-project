import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
