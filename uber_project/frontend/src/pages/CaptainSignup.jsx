import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  };

  return (
    <div className="px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Captain"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">
            What's Our Captain's Name
          </h3>
          <div className="flex gap-4 mb-3">
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
              required
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="John"
            />
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
              required
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Doe"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's Our Captain's Email Address?
          </h3>
          <input
            className="bg-[#eeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <div className="flex gap-4 mb-3">
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              placeholder="Vehicle Color"
            />
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              placeholder="Vehicle Plate Number"
            />
          </div>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              placeholder="Vehicle Capacity"
            />
            <select
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg"
              required
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
            Sign-Up
          </button>
          <p className="text-center">
            Already have an Account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login Here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px]">
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages,
          including by automated dialer, from Uber and its affiliates to the
          number provided.
        </p>
        {/* <Link
          to="/captain-signup"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base "
        >
          Sign Up as a Captain
        </Link> */}
      </div>
    </div>
  );
};

export default CaptainSignup;
