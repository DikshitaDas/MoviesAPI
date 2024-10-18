# 🎬 Movies API

Welcome to the **MoviesAPI** project! This API provides a collection of movie data, including titles, genres, ratings, and more! 📽️ Built with **Node.js**, **Express**, and **MongoDB**. 🍿

![Movies API](https://img.shields.io/badge/MoviesAPI-REST%20API-green.svg)
![Node.js](https://img.shields.io/badge/Node.js-v16.13.0-green.svg)
![Express](https://img.shields.io/badge/Express.js-v4.17.1-yellow.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v4.4-blue.svg)


## 🚀 Features
✨ **RESTful API** for movie data management  
🎞 **CRUD operations** to Create, Read, Update, and Delete movie records  
🔍 **Search movies** by title, genre, or year  
📈 **Sorting and pagination** for efficient data retrieval  
🔑 **Uses OpenAI API Key** for advanced functionality  

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/DikshitaDas/MoviesAPI.git
cd MoviesAPI
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```bash
MONGO_URI=mongodb://localhost:27017/moviesDB
PORT=5000
OPENAI_API_KEY=your_openai_api_key
```

### 4. Run the Server
```bash
npm start
```
The API will be available at `http://localhost:5000`.

## 📖 API Endpoints

### 🔍 Fetch All Movies
```http
GET /api/movies
```

### ➕ Add a New Movie
```http
POST /api/movies
```

### 🛠️ Update a Movie
```http
PUT /api/movies/:id
```

### ❌ Delete a Movie
```http
DELETE /api/movies/:id
```

### 🔑 Use OpenAI API for Additional Functionality
```http
POST /api/openai/functionality
```

Check out the full API Documentation for all endpoints and usage examples.

## 🛠 Technologies Used

| Technology | Logo |
|------------|------|
| **Node.js** | ![Node.js](https://img.shields.io/badge/Node.js-v16.13.0-green.svg) |
| **Express.js** | ![Express](https://img.shields.io/badge/Express.js-v4.17.1-yellow.svg) |
| **MongoDB** | ![MongoDB](https://img.shields.io/badge/MongoDB-v4.4-blue.svg) |
| **OpenAI API** | ![OpenAI](https://img.shields.io/badge/OpenAI-API-blueviolet.svg) |

## 🤝 Contributing

Contributions are more than welcome! Please follow these steps:

1. Fork the repository 🍴
2. Create your feature branch (`git checkout -b feature/amazing-feature`) 🚧
3. Commit your changes (`git commit -m 'Add a new feature'`) 📝
4. Push to the branch (`git push origin feature/amazing-feature`) 📤
5. Open a pull request 📬

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details. 📃
