import './App.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

    <div className='w-full flex flex-col justify-between h-screen'>



      <div className='flex flex-col justify-between h-screen'>
        <div className='sticky top-0 z-50'>
          <Header />
        </div >
        <main className=' flex items-center justify-center bg-gray-800 backdrop-blur-sm grow'>
          {<Outlet />}
        </main>
        <div className=''>
        <Footer />
      </div>
      </div>
     






    </div>



  ) : null;
}

export default App;
