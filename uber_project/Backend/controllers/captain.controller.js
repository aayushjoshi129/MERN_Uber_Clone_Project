const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const { validationResult } = require("express-validator");
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  // console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password, vehicle } = req.body;
  // console.log(req.body);

  const hashedPassword = await captainModel.hashPassword(password);

  if (!hashedPassword) {
    return res.status(500).json({ message: "Error hashing password" });
  }

  if (!fullname || !email || !password || !vehicle) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const isCaptainAlreadyRegistered = await captainModel.findOne({
    email: email,
  });
  if (isCaptainAlreadyRegistered) {
    return res.status(400).json({ message: "Captain already registered" });
  }

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();

  res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const captain = await captainModel.findOne({ email }).select("+password");
  if (!captain) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isPasswordValid = await captain.comparePassword(
    password,
    captain.password
  );
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = captain.generateAuthToken();
  res.cookie('token', token);

  res.status(200).json({ token, captain });
};

module.exports.getCaptainProfile = async (req, res) => {
  const captain = req.captain;
  if (!captain) {
    return res.status(404).json({ message: "Captain not found" });
  }

  res.status(200).json({ captain });
};

module.exports.logoutCaptain = async (req, res) => {
  const token =
    req.cookies.token || req.headers["authorization"]?.split(" ")[1];
  await blackListTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports.getAllCaptains = async (req, res) => {
  try {
    const captains = await captainModel.find({});
    res.status(200).json(captains);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
