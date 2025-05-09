const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({firstname, lastname, email, password, color, plate, capacity, vehicleType}) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = new captainModel({
        fullname: {firstname,
        lastname},
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    try {
        const savedCaptain = await captain.save();
        return savedCaptain;
    } catch (error) {
        throw new Error('Error saving captain: ' + error.message);
    } 
}