import { useContext, useState, useEffect } from "react";
import "./LoginForm.css";
import { usersContextRef } from "../../../contexts/usersContext";
import axios from "axios";

const LoginForm = ({ handleToggleForm, handleMusic }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const { setCurrentUser } = useContext(usersContextRef);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    setIsDisabled(!allFieldsFilled);
  }, [formData]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData
      );
      console.log(response.data);
      setCurrentUser(response.data.user);
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-form">
      <div className="login-header">
        <h1>Login</h1>
        <h2>Welcome Back!</h2>
      </div>
      <form onSubmit={(e) => handleLogin(e)}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password" // Change the input type to "password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button disabled={isDisabled} type="submit" className="submit-button">
          Login
        </button>
      </form>
      <div className="login-footer">
        <span>New user? Sign Up!</span>
        <button onClick={handleToggleForm}>SignUp</button>
      </div>
    </div>
  );
};

export default LoginForm;
