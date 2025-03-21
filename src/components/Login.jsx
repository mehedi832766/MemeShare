import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { allposts } from '../store/postSlice'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const [tpass, setTpass] = useState("password")
    const togglePass = () => {
        tpass==="password"? setTpass("text"): setTpass("password")
    }
    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    console.log(userData);
                    localStorage.setItem("userid",userData.$id)
                    dispatch(authLogin(userData))
                
            
                navigate("/");
            };
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-100/20 rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight text-white">Login to your account</h2>
                <p className="mt-2 text-center text-base text-white/70 text-">
                    Don't have any account? <br />
                    <Link
                        to="/signup"
                        className="font-bold text-amber-400 transition-all duration-200 hover:underline"
                    > Sign Up
                    </Link>
                </p>
                {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
                <form onSubmit={handleSubmit(login)} className='mt-8'>
                    <div className='space-y-5'>
                        <Input
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                            className="w-0.5"
                        />
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type={tpass}
                            {...register("password", {
                                required: true,
                            })}
                            
                        />
                        <div className='w-full flex flex-row-reverse'>
                        <input type="checkbox"
                            onClick={togglePass}></input>
                        <label className='mr-2 text-white'>view password </label>
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-yellow-500  shadow-2xl text-white hover:bg-red-300 hover:text-black " >Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;