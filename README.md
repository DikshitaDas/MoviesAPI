# 🎬 Movies API

Welcome to the **MoviesAPI** project! This API provides a collection of movie data, including titles, genres, ratings, and more! 📽️ Built with **Node.js**, **Express**, and **MongoDB**. 🍿

![Movies API](https://img.shields.io/badge/MoviesAPI-REST%20API-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-v16.13.0-green.svg)
![Express](https://img.shields.io/badge/Express.js-v4.17.1-yellow.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v4.4-blue.svg)

## 📝 Table of Contents
- [🚀 Features](#-features)
- [📦 Installation](#-installation)
- [📖 API Endpoints](#-api-endpoints)
- [🛠 Technologies Used](#-technologies-used)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Features
✨ **RESTful API** for movie data management  
🎞 **CRUD operations** to Create, Read, Update, and Delete movie records  
🔍 **Search movies** by title, genre, or year  
📈 **Sorting and pagination** for efficient data retrieval  
🔐 **Authentication & Authorization** for secure endpoints  

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/DikshitaDas/MoviesAPI.git
cd MoviesAPI
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/moviesDB
PORT=5000
JWT_SECRET=your_jwt_secret
4. Run the Server
bash
Copy code
npm start
The API will be available at http://localhost:5000.

📖 API Endpoints
🔍 Fetch All Movies
http
Copy code
GET /api/movies
➕ Add a New Movie
http
Copy code
POST /api/movies
🛠️ Update a Movie
http
Copy code
PUT /api/movies/:id
❌ Delete a Movie
http
Copy code
DELETE /api/movies/:id
🔒 User Authentication
http
Copy code
POST /api/users/login
Check out the full API Documentation for all endpoints and usage examples.

🛠 Technologies Used
Technology	Logo
Node.js	
Express.js	
MongoDB	
JWT	
🤝 Contributing
Contributions are more than welcome! Please follow these steps:

Fork the repository 🍴
Create your feature branch (git checkout -b feature/amazing-feature) 🚧
Commit your changes (git commit -m 'Add a new feature') 📝
Push to the branch (git push origin feature/amazing-feature) 📤
Open a pull request 📬
📄 License
This project is licensed under the MIT License. See the LICENSE file for more details. 📃

