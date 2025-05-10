# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🚘 Uber Frontend (React.js) – README

This is the frontend client for the Uber-like platform built using **React.js**, styled with **Tailwind CSS**, and configured with **React Router DOM** and **Context API**.

---

## 📑 Table of Contents

1. [Project Structure](#project-structure)
2. [BrowserRouter Setup](#browserrouter-setup)
3. [Context API](#context-api)
4. [Routes Configuration](#routes-configuration)
5. [Page Descriptions & Input Examples](#page-descriptions--input-examples)
6. [Form Validation](#sample-form-validation)
7. [Navigation using Link](#navigation-using-link)
8. [Future Enhancements](#future-enhancements)
9. [Setup Instructions](#setup-instructions)
10. [Developer](#developer)

---

## 📁 Project Structure

- `App.jsx` – Main route mapping file.
- `main.jsx` – App entry point. Initializes Router & Context.
- `context/UserContext.jsx` – Global user state via Context API.
- `pages/Home.jsx` – Landing page.
- `pages/UserLogin.jsx` – Login form for users.
- `pages/UserSignup.jsx` – Signup form for users.
- `pages/CaptainLogin.jsx` – Login form for captains.
- `pages/CaptainSignup.jsx` – Signup form for captains.

---

## 🧭 BrowserRouter Setup

The `main.jsx` file wraps the app in `<BrowserRouter>` to enable navigation between pages.

```jsx
<StrictMode>
  <UserContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContext>
</StrictMode>
```

---

## 🧠 Context API

File: `context/UserContext.jsx`

Creates a `UserDataContext` to store user data globally.

```js
const [user, setUser] = useState({
  email: "",
  fullName: {
    firstName: "",
    lastName: ""
  }
})
```

Used to share user info across multiple components without prop drilling.

---

## 🗺️ Routes Configuration

Defined in `App.jsx` using `react-router-dom`:

| Path              | Component         | Description                       |
|-------------------|-------------------|-----------------------------------|
| `/`               | `Home`            | Landing page                      |
| `/login`          | `UserLogin`       | User login form                   |
| `/signup`         | `UserSignup`      | User signup form                  |
| `/captain-login`  | `CaptainLogin`    | Captain login form                |
| `/captain-signup` | `CaptainSignup`   | Captain signup form               |

---

## 📄 Page Descriptions & Input Examples

### `Home.jsx`
- Displays Uber branding and CTA button.
- Navigates to `/login` on "Continue".

### `UserLogin.jsx`
- Fields: `email`, `password`
- Required field validation
- Example:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
- Links:
  - To Captain login: `/captain-login`
  - To User signup: `/signup`

### `UserSignup.jsx`
- Fields: `firstName`, `lastName`, `email`, `password`
- All fields required
- Navigation link to `/login`

### `CaptainLogin.jsx`
- Fields: `email`, `password`
- Links:
  - To Captain signup: `/captain-signup`
  - To User login: `/login`

### `CaptainSignup.jsx`
- Fields: `firstName`, `lastName`, `email`, `password`
- Includes consent notice
- Link to login: `/captain-login`

---

## 🔐 Sample Form Validation

Example of validated email field:

```jsx
<input
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  type="email"
  placeholder="email@example.com"
/>
```

---

## 🔗 Navigation using `Link`

Page navigation uses the `Link` component to avoid full reloads.

```jsx
<Link to="/signup">Create Account</Link>
```

---

## 🚧 Future Enhancements

- Connect forms to backend API
- Persist login sessions
- Error and success UI feedback
- Full mobile responsiveness

---

## ⚙️ Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm run dev
```

3. Open in browser:
```
http://localhost:5173
```

---

## 👨‍💻 Developer

Built with ❤️ by Aayush Joshi

---
