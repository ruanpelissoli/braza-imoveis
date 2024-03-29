import { createHashRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/Home";
import Results from "./pages/Results";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ResultDetailPage from "./pages/ResultDetail";
import LandingPage from "./pages/LandingPage";

const router = createHashRouter([
  {
    path: "/", // Use the base URL as the root path
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: `/results`,
        element: <Results />,
      },
      {
        path: `/results/:id`,
        element: <ResultDetailPage />,
      },
      {
        path: `/landingPage`,
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
