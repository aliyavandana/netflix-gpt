import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Browse from './Browse';
import Login from './Login';

const appRouter=createBrowserRouter([
{
  path:'/Browse',
  element:<Browse />
},
{
  path:'/',
  element:<Login />
},
])

const Body = () =>{  
    return(
        <RouterProvider router={appRouter} />
    )
}
export default Body