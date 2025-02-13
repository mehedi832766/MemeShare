import React, { useState, useEffect } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { use } from 'react';

function Header({ userId }) {
  const [ico, setIco] = useState("menu-outline");
  const [value, setValue] = useState("top-[-100%]");
  const [pName, setPName] = useState();

  const onToggleMenu = () => {
    ico === 'menu-outline' ? setIco("close-outline") : setIco('menu-outline');
    value === "top-[-100%]" ? setValue("top-[5.8%]") : setValue("top-[-100%]");

  };

  const { pathname } = useLocation();
  console.log(pathname);

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

      <nav className="flex justify-between items-center bg-gray-600 w-full  mx-auto">
        <div className='mr-4'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <div className={`${ico==="menu-outline" ? "" : "hidden"} md:hidden visible text-yellow-400`}>{pName}</div>
        <div className={`nav-links duration-501 md:static absolute md:min-h-fit md:w-auto  w-full flex items-center  ${value}`}>
          <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] w-full px-0 mx-0'>
            {navItems.map((item) =>
              item.active ? (<li key={item.name} className=' text-center text-2xl shadow-2xl font-bold md:bg-gray-600 md:border-b-0 bg-yellow-500/30  py-0.5'>
               
                <NavLink
                  to={item.slug}
                  onClick={() => {
                    setValue("top-[-100%]");
                    setIco('menu-outline');
                    

                  }}
                  className={({isActive}) =>
                    `inline-bock px-6 py-.5 duration-200 ${isActive ? "text-yellow-500" : "text-black"} md:border-b-2 border-b-2  border-b-amber-800 text-white md:border-gray-600 hover:border-b-yellow-500 hover:text-white  `}
                >{item.name}</NavLink>
              </li>) : null)}
            {authStatus && (
              <li 
              onClick={() => {
                setValue("top-[-100%]");
                setIco('menu-outline');
                }}
              className='flex justify-center md:bg-gray-600 md:border-b-0 bg-yellow-500/30  py-0.5'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center gap-6 md:hidden ">
          <ion-icon onClick={onToggleMenu} name={ico} className="text-3xl cursor-pointer "></ion-icon>
        </div>
      </nav>

    </>


  );
}

export default Header;