import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header({userId}) {
  const [ico, setIco] = useState("menu-outline")
  const [value, setValue] = useState("top-[-100%]")

  const onToggleMenu = () => {
    ico === 'menu-outline' ? setIco("close-outline") : setIco('menu-outline')
    value === "top-[-100%]" ? setValue("top-[6%]") : setValue("top-[-100%]")
    
}


  const authStatus = useSelector((state) => state.auth.status);
  // const userId = useSelector((state) => state.auth.userId);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts/",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "My Posts",
      slug: `/my-posts/${userId}`,
      active: authStatus,
    },
  ];


  return (
<>

    <nav className="flex justify-between items-center bg-yellow-600 w-full  mx-auto">
    <div className='mr-4'>
            <Link to='/'>
            <Logo/>
            </Link>
          </div>
    <div
        className={`nav-links duration-501 md:static absolute md:min-h-fit min-h-[60vh]  md:w-auto  w-full flex items-center px-5 bg-yellow-600 ${value}`}>
        
        <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 '>
            {navItems.map((item)=>
            item.active ? (<li key={item.name}>
              <button
              onClick={()=>{
                setValue("top-[-100%]")
                setIco('menu-outline')
                navigate(item.slug)

              }}
              className={ 'inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full '}
              >{item.name}</button>
            </li>): null) }
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
    </div>
    <div className="flex items-center gap-6 md:hidden">
        <ion-icon onClick={onToggleMenu} name={ico} className="text-3xl cursor-pointer "></ion-icon>
    </div>
    </nav>
 
    </>

     
  );
}

export default Header;