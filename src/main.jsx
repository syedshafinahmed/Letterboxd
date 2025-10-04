import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Films from './Components/Films/Films.jsx';
import Watchlist from './Components/Watchlist/Watchlist.jsx';
import Activity from './Components/Activity/Activity.jsx';
import Likes from './Components/Likes/Likes.jsx';
import Popular from './Components/Popular/Popular.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "profile",
        Component: Profile
      },
      {
        path: "films",
        Component: Films
      },
      {
        path: "watchlist",
        Component: Watchlist
      },
      {
        path: "activity",
        Component: Activity
      },
      {
        path: "likes",
        Component: Likes
      },
      // {
      //   path: "popular",
      //   loader: () => fetch('https://api.themoviedb.org/3/movie/popular?api_key=901f9327dcc8ea161e321c7ff5b7dfa7&page=3'),
      //   Component: Popular
      // },
      {
        path: "popular/:page",
        loader: ({ params }) =>
          fetch(`https://api.themoviedb.org/3/movie/popular?api_key=901f9327dcc8ea161e321c7ff5b7dfa7&page=${params.page}`),
        Component: Popular,
      },
      {
        path: "popular",
        loader: () => redirect("/popular/1"),
      }      
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
