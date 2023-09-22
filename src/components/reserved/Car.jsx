import PropTypes from "prop-types";

const Car = ({ data }) => (
  <article className='car flex flex-col md:flex-row items-center justify-start text-center bg-orange rounded-xl px-4 border-2'>
    <div className='car-image w-45 m-2 relative flex flex-col justify-center md:w-56 md:h-56'>
      {data.photo ? (
        <img
          src={data.photo}
          alt={`${data.name}`}
          className='rounded-full w-32 h-32 md:w-48 md:h-48 '
        />
      ) : (
        <img
          src='https://dummyimage.com/70x70'
          className='rounded-full w-32 h-32 md:w-52 md:h-52'
          alt='car_image'
        />
      )}
    </div>

    <div className='info-container text-gray-700 mx-2 flex flex-col w-72 md:wd-0 gap-4 justify-start md:w-80'>
      <h1 className='name text-xl font-semibold md:text-2xl md:font-bold'>
        {data.name}
      </h1>
      <hr className='w-24 self-center border-t-white md:w-52 md:my-2' />
      <p className='description text-sm font-light'>
        {`${data.city}-${data.country}`}
      </p>
      <p className='description text-sm font-light'>{data.date}</p>
    </div>
    <div className='social mt-8 mb-4 flex gap-4 rounded-full bg-white bg-opacity-50 py-2 px-6'>
      <img src='delete.svg' alt='delete' className='w-8 md:w-10' />
    </div>
  </article>
);

Car.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Car;
