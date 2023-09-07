import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./layouts/Layout";
import {NotFound} from "./pages/404/404";
import {ViewListPage} from "./pages/ViewListPage";
import {ToDoListPage} from "./pages/ToDoListPage";
import {ViewListItem} from "./pages/ViewListItem";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {path: '/', element: <ToDoListPage/>},
      {path: '/list', element: <ViewListPage/>},
      {path: '/list/:id', element: <ViewListItem/>},
    ],
  },
  {
    path: '*',
    element: <NotFound/>,
  },
]);