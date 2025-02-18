# eCommerce Project

## Overview
This is a modern eCommerce web application built using React.js and Tailwind CSS. The project includes authentication, validation, and API integration, making use of various libraries to enhance security and functionality.

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Authentication & Security:** `jose jwc` for token protection
- **Validation:** `yup` and `formik`
- **API Handling & Data Fetching:** `axios`
- **State Management & Form Handling:** `formik`

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repository-name.git
   cd your-project-folder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

## Features
- **User Authentication**: Secure login and signup using JWT
- **Responsive UI**: Styled with Tailwind CSS
- **Form Validation**: Ensured using Formik and Yup
- **API Communication**: Handled with Axios for efficient data fetching
- **State Management**: Managed effectively using React hooks

## Project Structure
```
📂 src
 ┣ 📂 components
 ┣ 📂 pages
 ┣ 📂 hooks
 ┣ 📂 utils
 ┣ 📂 context
 ┣ 📜 App.js
 ┣ 📜 index.js
```



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
