import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/Home.jsx";
import Results from "./pages/Results.jsx";
import RootLayout from "./pages/Root.jsx";
import ErrorPage from "./pages/Error.jsx";
import ImobiliariasPage from "./pages/Imobiliarias.jsx";
import ResultDetailPage from "./pages/ResultDetail.jsx";

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
      { path: "/results/:id", element: <ResultDetailPage /> },
      { path: "/imobiliarias", element: <ImobiliariasPage /> },
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