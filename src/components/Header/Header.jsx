import React, { useState, useEffect } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { use } from 'react';

function Header({ userId }) {
  const [ico, setIco] = useState("menu-outline");
  const [value, setValue] = useState("top-[-408%]");
  const [pName, setPName] = useState();

  const onToggleMenu = () => {
    ico === 'menu-outline' ? setIco("close-outline") : setIco('menu-outline');
    value === "top-[-408%]" ? setValue("top-[100.8%]") : setValue("top-[-408%]");

  };

  const { pathname } = useLocation();
  console.log(pathname);

  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const userID = localStorage.getItem("userid")
  console.log("this is from loacl storage",userID);
  
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: authStatus
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
      slug: `/my-posts/${authStatus?userID:null}`,
      active: authStatus,
    },
  ];

useEffect(() => { 
  navItems.map((item) => {
    if (item.slug === pathname) {
       setPName(item.name);
    }
  });
}, [pathname]);
console.log(pName);


  return (
    <>

      <nav className="flex justify-between items-center md:bg-gray-800 border-b-1 bg-gray-600 w-full  mx-auto">
      {/* logo */}
        <div className='mr-4'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        {/* current Page Name */}
        <div className={`${ico==="menu-outline" ? "" : "hidden"} md:hidden visible text-yellow-400`}>{pName}</div>
        {/* navBar item list rendering */}
        <div className={`nav-links duration-501 md:static absolute md:min-h-fit md:w-auto  w-full flex items-center  ${value}`}>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] w-full'>
            {navItems.map((item) =>
              item.active ? (<li key={item.name} className=' text-center 
                md:text-sm text-2xl md:bg-transparent  bg-gray-900
              shadow-2xl font-bold   '>
               
                <NavLink
                  to={item.slug}
                  onClick={() => {
                    setValue("top-[-408%]");
                    setIco('menu-outline');
                    

                  }}
                  className={({isActive}) =>
                    `inline-bock px-0 pt-0.5 pb-0  
                  ${isActive ? "text-yellow-500" : "text-black"} text-white 
                  md:border-0 hover:md:border-b-2 
                  border-b-2  hover:border-b-yellow-500 
                   hover:text-white  `}
                >{item.name}</NavLink>
              </li>) : null)}
            {authStatus && (
              <li 
              onClick={() => {
                setValue("top-[-408%]");
                setIco('menu-outline');
                }}
              className='flex justify-center md:bg-transparent
               bg-gray-900 mr-0 md:mr-6'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-6 md:hidden ">
          <ion-icon onClick={onToggleMenu} name={ico} className="text-3xl cursor-pointer"></ion-icon>
        </div>
      </nav>

    </>


  );
}

export default Header;