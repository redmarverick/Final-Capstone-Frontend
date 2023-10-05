import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { SpinnerCircular } from "spinners-react";
import MainLayout from "./layouts/MainLayout";
import { fetchAllCars } from "./redux/cars/carsSlice";
import Car from "./pages/Car";

function App({ showButton, showHeader }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const getAllCars = useSelector((state) => state.cars);
  const message = location.state?.message;
  const user = JSON.parse(localStorage.getItem("user"));
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedCars, setDisplayedCars] = useState([]);
  const [carsPerPage, setCarsPerPage] = useState(1);
  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const carsToDisplay = getAllCars.cars.slice(startIndex, endIndex);
    setDisplayedCars(carsToDisplay);
    setTotalPages(Math.ceil(getAllCars.cars.length / carsPerPage));
  }, [currentPage, getAllCars.cars, carsPerPage]);

  useEffect(() => {
    const handleResize = () => {
      let newCarsPerPage;

      // Number of cars to display depending on screen size
      if (window.innerWidth >= 851) {
        newCarsPerPage = 3;
      } else if (window.innerWidth >= 600 && window.innerWidth <= 850) {
        newCarsPerPage = 2;
      } else {
        newCarsPerPage = 1;
      }

      setCarsPerPage(newCarsPerPage);
      setCurrentPage(1);
    };

    // Add evenlistener to the screen size
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (carObject) => {
    navigate("/car-details", {
      state: {
        cars: carObject,
        user,
      },
    });
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <MainLayout className="">
      <div className="cars-container">
        {showHeader ? (
          <div>
            <h1 className="cars-container-header">RESERVE YOUR CAR</h1>
            <p className="cars-container-subheader">
              Choose the car you want to reserve.
            </p>
          </div>
        ) : (
          <div>
            <h1 className="cars-container-header">SELECT YOUR RIDE</h1>
            <p className="cars-container-subheader">
              Choose your car today!
            </p>
          </div>
        )}
        <div className="dotten-line" />

        {message && (
          <div className="success-msg">
            <p>{message}</p>
          </div>
        )}

        <div className="car-list-wrapper">
          <button
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            type="button"
            className="btnPrev"
          >
            <FaCaretLeft />
          </button>
          <div className="cars-list">
            {displayedCars.length > 0 ? (
              displayedCars.map((car) => (
                <Car
                  key={car.id}
                  car={car}
                  onClick={() => handleClick(car)}
                  onKeyDown={() => handleClick()}
                  showButton={showButton}
                />
              ))
            ) : (
              <div className="w-full h-[90vh] flex flex-col justify-center items-center">
                <SpinnerCircular
                  size={50}
                  color="green"
                />
              </div>
            )}
          </div>
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            type="button"
            className="btnNext"
          >
            <FaCaretRight />
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

App.propTypes = {
  showButton: PropTypes.bool,
  showHeader: PropTypes.bool,
};

App.defaultProps = {
  showButton: false,
  showHeader: false,
};
export default App;
