import { useContext, useState, useEffect } from "react";
import "./SignupForm.css";
import { usersContextRef } from "../../../contexts/usersContext";
import axios from "axios";

const SignupForm = ({ handleToggleForm, handleMusic }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rePassword: "",
    firstName: "",
    lastName: "",
    nickname: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [passwordErr, setPasswordErr] = useState(false);

  const { setCurrentUser } = useContext(usersContextRef);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );
    setIsDisabled(!allFieldsFilled);
  }, [formData]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.rePassword) {
      setPasswordErr(true);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
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
    <div className="signup-form">
      <div className="signup-header">
        <h1>Sign up</h1>
      </div>
      <form onSubmit={(e) => handleSignUp(e)}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>RePassword</label>
        <input
          type="text"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleChange}
        />
        {passwordErr && <p style={{ color: "red" }}>Passwords dont match</p>}
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>Nickname</label>
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
        />
        <button disabled={isDisabled} type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      <div className="signup-footer">
        <span>Already have an account?</span>
        <button onClick={handleToggleForm}>Login</button>
      </div>
    </div>
  );
};

export default SignupForm;
