import React, { useState } from "react";
import PropTypes from "prop-types";
import MainLayout from "../layouts/MainLayout";

const AddCarForm = ({ onAddCar }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    photo: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (
      formData.name
      && formData.description
      && formData.photo
      && formData.price
    ) {
      // Call the onAddCar function to add the new car
      onAddCar(formData);
      // Clear the form fields
      setFormData({
        name: "",
        description: "",
        photo: "",
        price: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <MainLayout>
      <div className="w-full max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Car Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Car Description"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Photo (Image URL)
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              placeholder="Image URL"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Car Price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex text-white bg-[#97BF0F] border-0 py-2 px-6 focus:outline-none hover:bg-[#7da60a] rounded-full text-lg"
            >
              Add Car
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

AddCarForm.propTypes = {
  onAddCar: PropTypes.func.isRequired, // Validate the onAddCar prop as a function
};

export default AddCarForm;
