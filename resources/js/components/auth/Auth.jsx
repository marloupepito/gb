import React, { useState, useEffect } from 'react';
import InputField from "./../administrator/components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "./../administrator/components/checkbox";
import Footer from "./../administrator/components/footer/FooterAuthDefault";
import authImg from "./../assets/img/auth/auth.png";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import FixedPlugin from "./../administrator/components/fixedPlugin/FixedPlugin";
import { useNavigate } from "react-router-dom";
import { UsersLogin } from "./../api/Users";
import Swal from "sweetalert2";
export default function AuthLogin() {

    const navigate = useNavigate();
    const [username,setUsername] =useState('')
    const [password,setPassword] =useState('')
    const [loading,setLoading] =useState(false)
    const loginUser=(e)=>{
        console.log(username)
        e.preventDefault()
        setLoading(true)
        UsersLogin({
          username:username,
          password:password,
        })
        .then(res=>{
          localStorage.setItem("user", JSON.stringify(res.data.user));
          
          if(res.data.status === 'success'){
            if( res.data.user.position === "admin"){
              navigate('/administrator/dashboards')
            }else{
      
            }
          }else{
            Swal.fire({
                icon: "error",
                title: "Incorrect username or password!",
                showConfirmButton: false,
                timer: 1500,
            });
          }
          setLoading(false)
        })
      }
    
      
    
  return (
    <div>
    <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
      <FixedPlugin />
      <main className={`mx-auto min-h-screen`}>
        <div className="relative flex">
          <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
            <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
              <Link to="/admin" className="mt-0 w-max lg:pt-10">
                <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                      fill="#A3AED0"
                    />
                  </svg>
                  <p className="ml-3 text-sm text-gray-600">
                    Back to Dashboard
                  </p>
                </div>
              </Link>
              <div className="flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className=" w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        <form onSubmit={loginUser}>
        {/* username */}


   

    <div className={`mb-3`}>
      <label
        htmlFor='username'
        className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium`}
      >
       Username
      </label>
      <input
         onChange={(e)=>setUsername(e.target.value)}
        type='text'
        id='username'
        placeholder='Username'
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none `}
      />
    </div>

        {/* Password */}
    
    <div className={`mb-3`}>
        <label
            htmlFor='password'
            className={`text-sm text-navy-700 dark:text-white ml-1.5 font-medium`}
        >
        Password
        </label>
        <input
            onChange={(e)=>setPassword(e.target.value)}
            type='password'
            id='Password'
            placeholder='Password'
            className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none `}
        />
        </div>
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button disabled={loading} type="submit" className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign In
        </button>
        </form>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
              <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                <div
                  className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]"
                  style={{ backgroundImage: `url(${authImg})` }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}
