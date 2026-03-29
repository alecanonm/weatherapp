import { createBrowserRouter } from "react-router";
import MainPage from "./MainPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
