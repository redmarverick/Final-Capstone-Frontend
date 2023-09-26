import { Link, useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const Details = () => {
  // TODO: get the id from the URL to use it in the API call in redux
  const { id } = useParams();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCarInfo(id));
  // }, [dispatch, id]);

  const car = {
    id: 6,
    name: "Porsche",
    photo: "/car2.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quas, voluptatum. Quisquam, voluptate. Quas, voluptatum.",
    city: "New York",
    country: "USA",
    price: 100000,
  };

  const handleReserve = () => {
    sessionStorage.setItem("id", id);
  };

  // eslint-disable-next-line
  const { name, description, photo, price } = car;
  return (
    <MainLayout>
      <Link
        to='/cars'
        type='button'
        className='hidden w-18 md:flex absolute  md:bottom-40 justify-between items-center mt-16 text-center text-white bg-[#96BF0E] border-0 py-2 px-4 focus:outline-none hover:bg-[#7da60a] rounded-r-full text-lg'
        onClick={handleReserve}
      >
        <img src='/triarrow.svg' alt='calendar' className='w-8 rotate-180' />
      </Link>
      <div className='flex flex-col items-center justify-center min-h-[94vh] md:flex-row'>
        <div className='mx-auto flex-nowrap w-72 h-72 relative flex flex-col justify-center md:w-[45%] md:h-[45%]'>
          <img
            src={photo}
            alt={`${name}`}
            className='z-10 rounded-full md:mb-20'
          />
        </div>
        <div className='mb-20 md:mb-48 text-gray-700 mx-2 flex flex-col w-72 gap-4 justify-start md:mr-8 md:w-80 max-h-[100%] overfolw-scroll'>
          <h1 className='md:text-right name text-xl font-semibold md:text-2xl md:font-bold lg:text-4xl'>
            {name}
          </h1>
          <hr className='w-24 self-center border-t-white md:w-52 md:my-2' />
          {/* // TODO: add the rest of the information from the car object,
          refactor in a smart way */}
          <ul className='flex flex-col'>
            <li className='flex justify-between p-3 bg-gray-200'>
              <span className='text-sm font-light'>Price</span>
              <span className='text-sm font-light'>{`$${price}`}</span>
            </li>
            <li className='flex justify-between p-3 bg-gray-50'>
              <span className='text-sm font-light'>Color</span>
              <span className='text-sm font-light'>Black</span>
            </li>
            <li className='flex justify-between p-3 bg-gray-200'>
              <span className='text-sm font-light'>Delivery</span>
              <span className='text-sm font-light'>Free</span>
            </li>
            <li className='flex justify-between p-3 bg-gray-50'>
              <span className='text-sm font-light'>Warranty</span>
              <span className='text-sm font-light'>1 year</span>
            </li>
          </ul>
          <p className='description mt-4 text-left text-sm font-light md:text-base'>
            {description}
          </p>
          <Link to='/cars' className='text-sm mt-4 self-end'>
            {/* eslint-disable-next-line */}
            BROWSE MORE MODELS <span className='text-[#96BF0E]'>&#10148;</span>
          </Link>
          <div className='flex flex-col items-center justify-between'>
            <Link
              to='/new-reservation'
              type='button'
              className='w-48 flex justify-between items-center md:mt-16 mt-8 text-center text-white bg-[#96BF0E] border-0 py-2 px-4 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg'
              onClick={handleReserve}
            >
              <img src='/booking.svg' alt='calendar' className='mr-2' />
              Reserve
              <img src='/circlearrow.svg' alt='calendar' className='ml-2' />
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Details;
