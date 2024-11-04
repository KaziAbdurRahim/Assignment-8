import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './components/Root/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import Statistic from './components/Statistic/Statistic';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';
import ListedG from './components/ListedG/ListedG';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '',
        element: <Home></Home>,
      },
      {
        path: 'gadgets/:gadgetId',
        element: <GadgetDetails></GadgetDetails>,
        loader:()=> fetch('/gadget.json')
      },
      // {
      //   path:'listedg',
      //   element: <ListedG></ListedG>

      // },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>,
        loader: ()=> fetch('/gadget.json'),
      },
      {
        path: 'statistic',
        element: <Statistic></Statistic>,
      }
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
