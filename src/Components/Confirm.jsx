import { useState } from "react";
import { Link } from "react-router-dom";
import Success from "./Success.json";
import { Player } from "@lottiefiles/react-lottie-player";
const ConfirmPayment = () => {
  const [paymentStatus] = useState("Success"); // You can change this based on the actual payment status

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Payment {paymentStatus === "Success" ? "Successful" : "Failed"}
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment!{" "}
          {paymentStatus === "Success"
            ? "Your payment was successful."
            : "Oops! Something went wrong with your payment."}
        </p>
        <Player
          autoplay
          controls
          loop
          mode="normal"
          src={Success}
          style={{ height: "250px", width: "250px" }}
        />
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 mt-40"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default ConfirmPayment;
