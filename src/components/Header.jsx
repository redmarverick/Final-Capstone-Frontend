const Header = () => {
  const isLoggedIn = false;
  return (
    <div className='flex justify-end p-4'>
      <button
        type='button'
        className='inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
export default Header;
