# Bookshelf App

Bookshelf App is a web application designed to help you manage and track the books you read. It allows users to search for books using the [Google Books API](https://developers.google.com/books), add them to their virtual library, and keep track of their reading progress.

---

## Features

- **Search for books** by title, author, or keyword using Google Books API.
- **Add books** to your personal library.
- **Track your reading progress** and update the status of each book (To Read, Reading, Read).
- **View detailed book information**, including cover, author, and description.
- **Organize your library** with filters and categories.
- **Secure user authentication** using Firebase.
- **Persistent state management** with Zustand.
- **Robust form validation** with Zod.

---

## Tech Stack

### Frontend

- **React**: For building the user interface.
- **Vite**: For fast development and optimized builds.
- **Axios**: For making HTTP requests to the Google Books API.

### Backend

- **Firebase**: For authentication and database storage.

### State Management

- **Zustand**: For lightweight and efficient state management.

### Validation

- **Zod**: For schema validation and error handling.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AGuardiola20/bookshelf-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd bookshelf-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your Firebase and Google Books API keys:

   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_GOOGLE_BOOKS_API_KEY=your_google_books_api_key
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Sign up or log in using your email.
2. Search for books by entering a title, author, or keyword.
3. Add books to your personal library and set their status.
4. View and manage your library from the dashboard.

---

## Acknowledgments

- [Google Books API](https://developers.google.com/books) for providing book data.
- Open-source libraries like React, Firebase, Zustand, Axios, and Zod for making development seamless.

---
