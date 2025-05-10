import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    // Handle login logic here
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="John"
            />
            <input
              className="bg-[#eeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base "
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Doe"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's your email address?
          </h3>
          <input
            className="bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
            Sign-Up
          </button>
          <p className="text-center">
            Already have an Account?{" "}
            <Link to="/login" className="text-blue-600">
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

export default UserSignup;
