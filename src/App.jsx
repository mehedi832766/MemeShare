import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
  }, []);



  


  return !loading ? (

    <div className='realtive w-full flex flex-col justify-between h-screen'>
      <div className=' z-10'>
        <Header/>
      </div >

     
        <div className=' flex items-center justify-center bg-gray-800 backdrop-blur-sm grow'> 
        
          <main >
            {<Outlet/>}
          </main>
          
        </div>
        <div className=''> 
          <Footer />
        </div>
      





    </div>



  ) : null;
}

export default App;
