import React, { useState } from "react";

const SignupForm = () => {
  const userStatus = {
    created: false,
    message: "",
  };

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setError("Passwords do not match");
    } else if (
      // eslint-disable-next-line
      userData.email === "" ||
      // eslint-disable-next-line
      userData.password === "" ||
      // eslint-disable-next-line
      userData.confirmPassword === "" ||
      // eslint-disable-next-line
      userData.name === ""
    ) {
      setError("Please fill all the fields");
    } else {
      setUserData({
        ...userData,
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      // dispatch(postUser(userData));
    }
  };

  return (
    <form
      className=' sm:p-20 bg-black flex flex-col items-center gap-2 bg-opacity-50 rounded-lg'
      onSubmit={handleSubmit}
    >
      <h1 className='text-4xl text-white font-ubuntu'>Sign Up</h1>
      <input
        className='bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white'
        name='name'
        type='text'
        id='name'
        placeholder='Name'
        onChange={handleChange}
        value={userData.name}
      />
      <input
        className='bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white'
        name='email'
        type='email'
        id='email'
        placeholder='Email'
        onChange={handleChange}
        value={userData.email}
      />
      <input
        className='bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white'
        name='password'
        type='password'
        id='password'
        placeholder='Password'
        onChange={handleChange}
        value={userData.password}
      />
      <input
        className='bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white'
        name='confirmPassword'
        type='password'
        id='confirmPassword'
        placeholder='Confirm Password'
        onChange={handleChange}
        value={userData.confirmPassword}
      />
      <button
        type='submit'
        className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 mt-8 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
        id='signupButton'
      >
        SIGN UP
      </button>
      {userStatus.created && (
        <h2 className='w-full h-full flex justify-center items-center bg-white rounded-full'>
          {userStatus.message}
        </h2>
      )}
      {error && (
        <h2 className='w-full h-full flex justify-center items-center bg-red-400 rounded-full'>
          {error}
        </h2>
      )}
      {!userStatus.created && (
        <h2 className='w-full h-full flex justify-center items-center bg-red-400 rounded-full'>
          {userStatus.message}
        </h2>
      )}
    </form>
  );
};

export default SignupForm;
