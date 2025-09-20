import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home";
import Shop from "../../components/Shop/Shop";
import NotFound from "../../components/NotFound/NotFound";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
      ],
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ])

  export default router