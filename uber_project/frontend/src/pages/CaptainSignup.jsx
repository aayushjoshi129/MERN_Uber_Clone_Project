import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [captainData, setCaptainData] = useState({});
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
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
        <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="Uber Captain"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className="text-lg font-medium mb-2">What's Our Captain's Name</h3>
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
            What's Our Captain's Email Address?
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
  )
}

export default CaptainSignup