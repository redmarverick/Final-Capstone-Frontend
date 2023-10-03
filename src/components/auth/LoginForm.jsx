import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/users/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.user.status);
  const loginError = useSelector((state) => state.user.error);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(userData)).then((result) => {
      if (result.payload) {
        navigate("/cars");
      } else {
        setErrorMessageVisible(true);
        setTimeout(() => {
          setErrorMessageVisible(false);
        }, 3000);
      }
    });
  };

  return (
    <form
      className='p-4 max-w-xl m-4 sm:p-24 bg-black flex flex-col justify-center items-center gap-4 bg-opacity-50 rounded-lg'
      onSubmit={handleSubmit}
    >
      <h1 className='text-4xl text-white font-ubuntu'>Login</h1>
      <input
        className='bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white'
        name='email'
        type='email'
        id='email'
        placeholder='Email'
        onChange={handleChange}
        value={userData.email}
      />
      <input
        className='bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white'
        name='password'
        type='password'
        id='password'
        placeholder='Password'
        onChange={handleChange}
        value={userData.password}
      />
      <button
        type='submit'
        className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 mb-8 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
        disabled={loginStatus === "loading"} // Disable the button during login
      >
        {loginStatus === "loading" ? "Logging In..." : "LOGIN"}
      </button>
      {errorMessageVisible && loginError && (
        <p className='text-red-500'>{loginError}</p>
      )}

      <p className='text-white'>
        {/* eslint-disable-next-line  */}
        Do not have an account?{" "}
        <a href='/signup' className='text-[#7da60a]'>
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
