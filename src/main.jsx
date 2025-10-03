import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Films from './Components/Films/Films.jsx';
import Watchlist from './Components/Watchlist/Watchlist.jsx';
import Activity from './Components/Activity/Activity.jsx';
import Likes from './Components/Likes/Likes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
        path:"profile",
        Component: Profile
      },
      {
        path:"films",
        Component: Films
      },
      {
        path:"watchlist",
        Component: Watchlist
      },
      {
        path:"activity",
        Component: Activity
      },
      {
        path:"likes",
        Component: Likes
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
