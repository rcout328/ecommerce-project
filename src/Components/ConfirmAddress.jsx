import { useState } from "react";
import { Link } from "react-router-dom";
const ConfirmAddress = () => {
  const [state, setState] = useState({
    name: "",
    pnumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const clear = () => {
    setState({
      name: "",
      pnumber: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Confirmation Form
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={state.name}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="tel" // Use type="tel" for numeric input without up and down buttons
            name="pnumber"
            placeholder="Enter your number"
            value={state.pnumber}
            onChange={handleChange}
            inputMode="numeric" // Set inputMode to "numeric"
            className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            value={state.address}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={state.city}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            name="state"
            placeholder="Enter your state"
            value={state.state}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <input
            type="text"
            name="zip"
            placeholder="Enter your zipcode"
            value={state.zip}
            onChange={handleChange}
            className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="text"
            onClick={clear}
            className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          >
            <Link to="/success">Submit</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAddress;
