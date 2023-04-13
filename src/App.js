import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import Results from "./pages/Results.js";
import RootLayout from "./pages/Root.js";
import ErrorPage from "./pages/Error.js";
import ImobiliariasPage from "./pages/Imobiliarias.js";
import ResultDetailPage from "./pages/ResultDetail.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/results",
        element: <Results />,
      },
      { path: "/results/:resultId", element: <ResultDetailPage /> },
      { path: "/imobiliarias", element: <ImobiliariasPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;