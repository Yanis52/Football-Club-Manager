import { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Form = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div
      style={{
        width: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isRegister ? (
        <RegisterForm onSwitch={handleRegister} />
      ) : (
        <LoginForm onSwitch={handleRegister} />
      )}
    </div>
  );
};

export default Form;
