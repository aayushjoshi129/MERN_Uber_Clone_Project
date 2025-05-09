# Backend API Documentation

This document provides a comprehensive overview of the backend API, including routes, services, models, and middleware. It explains each endpoint, its purpose, and how to use it with examples.

---

## **Table of Contents**

1. [Setup Instructions](#setup-instructions)
2. [Routes](#routes)
   - [Register User](#1-register-user)
   - [Login User](#2-login-user)
   - [Get User Profile](#3-get-user-profile)
   - [Logout User](#4-logout-user)
3. [Models](#models)
   - [User Model](#user-model)
   - [Blacklist Token Model](#blacklist-token-model)
4. [Middleware](#middleware)
   - [Authentication Middleware](#authentication-middleware)
5. [Services](#services)
   - [User Service](#user-service)
6. [Environment Variables](#environment-variables)

---

## **Setup Instructions**

1. Clone the repository:

```bash
git clone <repository-url>
cd uber_project/Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the Backend folder and add the following:

```env
PORT=5000
DB_CONNECT=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

4. Start the server:

```bash
npm start
```

---

## **Routes**

### 1. Register User

- **Endpoint:** `POST /users/register`
- **Description:** Registers a new user with the provided details.

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Success Response

- **Status:** 201 Created

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

#### Error Response

- **Status:** 400 Bad Request

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

### 2. Login User

- **Endpoint:** `POST /users/login`
- **Description:** Authenticates the user and returns a JWT.

#### Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### Success Response

- **Status:** 200 OK

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "USER_ID",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
}
```

#### Error Response

- **Status:** 401 Unauthorized

```json
{
  "message": "Invalid email or password"
}
```

---

### 3. Get User Profile

- **Endpoint:** `GET /users/profile`
- **Description:** Fetches the authenticated user's profile.
- **Authentication Required:** Yes

#### Success Response

- **Status:** 200 OK

```json
{
  "_id": "USER_ID",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "socketId": null
}
```

#### Error Response

- **Status:** 401 Unauthorized

```json
{
  "message": "Unauthorized"
}
```

---

### 4. Logout User

- **Endpoint:** `GET /users/logout`
- **Description:** Logs out the user by blacklisting the token.
- **Authentication Required:** Yes

#### Success Response

- **Status:** 200 OK

```json
{
  "message": "Logged out successfully"
}
```

---

## **Models**

### User Model

```js
{
  fullname: {
    firstname: String,
    lastname: String
  },
  email: String,
  password: String,
  socketId: String
}
```

### Blacklist Token Model

```js
{
  token: String,
  createdAt: Date // TTL = 24 hours
}
```

---

## **Middleware**

### Authentication Middleware

- Extracts the JWT token from headers or cookies.
- Verifies the token and checks for blacklisting.
- Attaches the authenticated user to `req.user`.

---

## **Services**

### User Service

**createUser({ firstname, lastname, email, password })**
- Creates a new user document in the database.
- Password is hashed using bcrypt.

---

## **Environment Variables**

```
PORT=5000
DB_CONNECT=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

---






# 🚖 Uber Captain API Documentation

This document provides a complete overview of the backend API for Uber Captains. It includes setup instructions, routes, models, services, and middleware details.

---

## **Table of Contents**

1. [Setup Instructions](#setup-instructions)
2. [Routes](#routes)
   - [Register Captain](#1-register-captain)
   - [Login Captain](#2-login-captain)
   - [Get Captain Profile](#3-get-captain-profile)
   - [Logout Captain](#4-logout-captain)
   - [Get All Captains](#5-get-all-captains)
3. [Models](#models)
   - [Captain Model](#captain-model)
4. [Middleware](#middleware)
   - [Captain Authentication Middleware](#captain-authentication-middleware)
5. [Services](#services)
   - [Captain Service](#captain-service)
6. [Environment Variables](#environment-variables)

---

## **Setup Instructions**

1. Clone the repository:

```bash
git clone <repository-url>
cd uber_project/Backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add:

```env
PORT=5000
DB_CONNECT=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

4. Start the server:

```bash
npm start
```

---

## **Routes**

### 1. Register Captain

- **Endpoint:** `POST /captains/register`
- **Description:** Registers a new captain with vehicle details.

#### Request Body:

```json
{
  "fullname": {
    "firstname": "Alex",
    "lastname": "Driver"
  },
  "email": "alex@uber.com",
  "password": "securePass123",
  "vehicle": {
    "color": "Black",
    "plate": "XYZ1234",
    "vehicleType": "car",
    "capacity": 4
  }
}
```

#### Success Response:

```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "Alex",
      "lastname": "Driver"
    },
    "email": "alex@uber.com"
  }
}
```

---

### 2. Login Captain

- **Endpoint:** `POST /captains/login`
- **Description:** Logs in a captain.

#### Request Body:

```json
{
  "email": "alex@uber.com",
  "password": "securePass123"
}
```

#### Success Response:

```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "Alex",
      "lastname": "Driver"
    },
    "email": "alex@uber.com"
  }
}
```

---

### 3. Get Captain Profile

- **Endpoint:** `GET /captains/profile`
- **Authentication:** Required

#### Success Response:

```json
{
  "captain": {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "Alex",
      "lastname": "Driver"
    },
    "email": "alex@uber.com"
  }
}
```

---

### 4. Logout Captain

- **Endpoint:** `GET /captains/logout`
- **Authentication:** Required

#### Success Response:

```json
{
  "message": "Logged out successfully"
}
```

---

### 5. Get All Captains

- **Endpoint:** `GET /captains/all`

#### Success Response:

```json
[
  {
    "_id": "CAPTAIN_ID",
    "fullname": {
      "firstname": "Alex",
      "lastname": "Driver"
    },
    "email": "alex@uber.com"
  }
]
```

---

## **Models**

### Captain Model

Includes personal and vehicle info.

```js
{
  fullname: {
    firstname: String,
    lastname: String
  },
  email: String,
  password: String,
  socketId: String,
  status: { type: String, enum: ["active", "inactive"] },
  vehicle: {
    color: String,
    plate: String,
    capacity: Number,
    vehicleType: { type: String, enum: ["car", "motorcycle", "auto"] }
  },
  location: {
    lat: Number,
    long: Number
  }
}
```

---

## **Middleware**

### Captain Authentication Middleware

```js
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  const isBlacklisted = await blackListTokenModel.findOne({ token });
  if (isBlacklisted) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id);
    req.captain = captain;
    next();
  } catch {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
```

---

## **Services**

### Captain Service

```js
createCaptain({
  firstname, lastname, email, password, color, plate, capacity, vehicleType
})
```

- Validates and stores a new captain with vehicle details.
- Uses `bcrypt` for password hashing.

---

## **Environment Variables**

```env
PORT=5000
DB_CONNECT=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
```

---
