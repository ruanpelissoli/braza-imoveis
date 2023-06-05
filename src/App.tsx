import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/Home";
import Results from "./pages/Results";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ResultDetailPage from "./pages/ResultDetail";
import CadastroPage from "./pages/Cadastro";

// Set the base URL
const baseUrl = "/ruanpelissoli/braza-imoveis";

const router = createBrowserRouter([
  {
    path: baseUrl, // Use the base URL as the root path
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: `${baseUrl}/results`, // Extend the base URL for the results page
        element: <Results />,
      },
      {
        path: `${baseUrl}/results/:id`, // Extend the base URL for the result detail page
        element: <ResultDetailPage />,
      },
      {
        path: `${baseUrl}/cadastro`, // Extend the base URL for the cadastro page
        element: <CadastroPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
