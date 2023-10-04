import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/users/userSlice";

const SignupForm = () => {
  const dispatch = useDispatch();
  const registrationStatus = useSelector((state) => state.user.status);
  const registrationError = useSelector((state) => state.user.error);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  // eslint-disable-next-line
  const [fieldCompletionError, setFieldCompletionError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.password_confirmation) {
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setFieldCompletionError(false);
    } else if (
      userData.email === ""
      || userData.password === ""
      || userData.password_confirmation === ""
      || userData.name === ""
    ) {
      setErrorMessageVisible(false);
      setSuccessMessageVisible(false);
      setFieldCompletionError(true);
    } else {
      // Dispatch the registerUser action
      dispatch(registerUser(userData)).then((result) => {
        if (result.payload) {
          setSuccessMessageVisible(true);
          setErrorMessageVisible(false);
          setFieldCompletionError(false);
          setTimeout(() => {
            setSuccessMessageVisible(false);
          }, 3000);
        } else {
          setErrorMessageVisible(true);
          setSuccessMessageVisible(false);
          setFieldCompletionError(false);
          setTimeout(() => {
            setErrorMessageVisible(false);
          }, 3000);
        }
      });
    }
  };

  return (
    <form
      className='p-8 sm:p-20 sm:px-32 max-w-xl bg-black flex flex-col items-center gap-2 bg-opacity-50 rounded-lg'
      onSubmit={handleSubmit}
    >
      <h1 className='text-4xl text-white font-ubuntu mb-8'>Sign Up</h1>
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
        name='password_confirmation'
        type='password'
        id='confirmPassword'
        placeholder='Confirm Password'
        onChange={handleChange}
        value={userData.password_confirmation}
      />
      <button
        type='submit'
        className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 mt-8 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
        id='signupButton'
        disabled={registrationStatus === "loading"} // Disable the button during registration
      >
        {registrationStatus === "loading" ? "Signing Up..." : "SIGN UP"}
      </button>
      {fieldCompletionError && (
        <h2 className='w-full h-full flex text-white justify-center items-center bg-red-400 rounded-full'>
          Please fill all the fields.
        </h2>
      )}
      {successMessageVisible && (
        <h2 className='w-full h-full flex text-white justify-center items-center bg-[#97BF0F] rounded-full'>
          Registration successful!
        </h2>
      )}
      {errorMessageVisible && (
        <h2 className='w-full h-full flex text-white justify-center items-center bg-red-400 rounded-full'>
          {registrationError}
        </h2>
      )}
    </form>
  );
};

export default SignupForm;
