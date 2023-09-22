import Car from "../components/reserved/Car";
import MainLayout from "../layouts/MainLayout";

const ReservedCars = () => {
  const data = [
    {
      id: 1,
      name: "BMW",
      photo: "car2.svg",
      date: "2023-10-10",
      city: "New York",
      country: "USA",
      price: 100000,
    },
    {
      id: 2,
      name: "Mercedes",
      photo: "car2.svg",
      date: "2023-10-10",
      city: "New York",
      country: "USA",
      price: 100000,
    },
    {
      id: 3,
      name: "Audi",
      photo: "car2.svg",
      date: "2023-10-10",
      city: "New York",
      country: "USA",
      price: 100000,
    },
    {
      id: 4,
      name: "Lamborghini",
      photo: "car2.svg",
      date: "2023-10-10",
      city: "New York",
      country: "USA",
      price: 100000,
    },
    {
      id: 5,
      name: "Ferrari",
      photo: "car2.svg",
      date: "2023-10-10",
      city: "New York",
      country: "USA",
      price: 100000,
    },
    {
      id: 6,
      name: "Porsche",
      photo: "car2.svg",
      date: "2023-10-10",
      city: "New York",
      country: "USA",
      price: 100000,
    },
  ];

  return (
    <MainLayout className='reserved-cars'>
      <h1 className='text-3xl uppercase text-gray-800 tracking-wider font-bold text-center mt-6 md:text-5xl md:tracking-widest md:mt-12'>
        Reserved Cars
      </h1>
      <h4 className='text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4'>
        Here you can see all your reservations
      </h4>
      <hr className='w-24 self-center m-4 border-t-black md:w-52 md:m-8' />
      {data.length === 0 && (
        <h4 className='text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4'>
          No reservations yet
        </h4>
      )}
      <div className='max-w-min w-[100%] self-center'>
        <div className='cars-container m-2 flex flex-col gap-4 md:mt-8'>
          {data.map((car) => (
            <Car data={car} key={data.id} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ReservedCars;
