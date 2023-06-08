// // Dummy user data for testing purposes
// const users = [
//   { id: 1, name: "John Doe", email: "john@example.com" },
//   { id: 2, name: "Jane Smith", email: "jane@example.com" },
//   // Add more user objects as needed
// ];

// // Get all users
// function getAllUsers() {
//   return users;
// }

// // Get user by ID
// function getUserById(id) {
//   return users.find((user) => user.id === id);
// }

// // Add a new user
// function addUser(user) {
//   const newUser = { ...user, id: generateUniqueId() };
//   users.push(newUser);
//   return newUser;
// }

// // Generate a unique ID for a new user
// function generateUniqueId() {
//   const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
//   return maxId + 1;
// }

// module.exports = {
//   getAllUsers,
//   getUserById,
//   addUser,
//   users,
// };
const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
