import React, { useContext, useEffect, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";
import { usersContextRef } from "../../contexts/usersContext";

const AuthModal = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  // const { currentUser } = useContext(usersContextRef);

  const handleToggleForm = () => setIsLoginForm(!isLoginForm);

  // Closes modal on login
  // useEffect(() => {
  //   if (currentUser) {
  //     setOpenAuthModal(false);
  //     handleClose();
  //   }
  // }, [currentUser, setOpenAuthModal]);

  return (
    <>
      {isLoginForm ? (
        <LoginForm handleToggleForm={handleToggleForm}></LoginForm>
      ) : (
        <SignupForm handleToggleForm={handleToggleForm}></SignupForm>
      )}
    </>
  );
};

export default AuthModal;
