import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import {  RouterProvider,createBrowserRouter } from 'react-router-dom';
import { AuthLayout, Login } from './components/index.js'




import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";
import MyPosts from "./pages/MyPosts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: 
           ( <AuthLayout authentication>
            {" "}
            <Home />
            </AuthLayout>),
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/my-posts/:userId",
            element:( 
                <AuthLayout authentication>
                    <MyPosts />
                    </AuthLayout>),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
</StrictMode>,
)
