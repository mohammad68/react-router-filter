import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
