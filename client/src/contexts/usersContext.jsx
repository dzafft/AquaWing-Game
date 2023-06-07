import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const usersContextRef = createContext();

export const UsersContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const validateAccessToken = async (token) => {
    try {
      const response = await axios.get("/auth/validate", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error validating access token:", error);
      return { valid: false };
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      validateAccessToken(token).then(({ valid, user }) => {
        if (valid) {
          setCurrentUser(user);
        } else {
          localStorage.removeItem("token");
        }
      });
    }
  }, []);

  return (
    <usersContextRef.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </usersContextRef.Provider>
  );
};
