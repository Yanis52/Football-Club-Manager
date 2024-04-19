import { FormControl } from "@mui/base/FormControl";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/appelApi";

const LoginForm: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const navigate = useNavigate();

  const passwordRef = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState("");
  const [nom, setNom] = useState("");
  const nomRef = useRef<HTMLInputElement>(null);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handlenomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNom(event.target.value);
  };

  const handleSubmit = async () => {
    if (nomRef.current !== null && passwordRef.current !== null) {
      const nom = nomRef.current.value;
      const password = passwordRef.current.value;
      const data = await login({ nom, password });
      console.log(data.userId);

      if (data.userId) {
        navigate("/homePage");
      }
    }
  };

  return (
    <Stack sx={{ width: "200px", gap: "1px" }}>
      <FormControl>
        <TextField
          placeholder="Write your nom"
          inputRef={nomRef}
          value={nom}
          onChange={handlenomChange}
        />
        <TextField
          placeholder="password"
          inputRef={passwordRef}
          value={password}
          onChange={handlePassword}
        />

        <Button onClick={handleSubmit}>login</Button>
        <p onClick={onSwitch}>s'inscrire</p>
      </FormControl>
    </Stack>
  );
};

export default LoginForm;
