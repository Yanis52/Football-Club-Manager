import { FormControl } from "@mui/base/FormControl";
import { Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import { useRef } from "react";
import { postUser } from "../../service/appelApi";
import { IUser } from "../../types/IUser";

const RegisterForm: React.FC<{ onSwitch: () => void }> = ({ onSwitch }) => {
  const [formData, setFormData] = useState<IUser>({
    nom: "",
    prenom: "",
    nomClub: "",
    email: "",
    password: "",
  });

  const [isSamePassword, setIsSamePassword] = useState<boolean>(false);

  const nomRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const nomClubRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (
      nomRef.current !== null &&
      lastNameRef.current !== null &&
      emailRef.current !== null &&
      nomClubRef.current !== null &&
      passwordRef.current !== null &&
      confirmPasswordRef.current !== null
    ) {
      if (passwordRef.current.value == confirmPasswordRef.current.value) {
        setFormData({
          nom: nomRef.current.value,
          prenom: lastNameRef.current.value,
          nomClub: nomClubRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        });
        setIsSamePassword(true);
        console.log(postUser(formData));
      } else {
        setIsSamePassword(false);
        console.log("erreur le password est : ", isSamePassword);
      }
    }
  };

  const [nom, setNom] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nomClub, setNomClub] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlenomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNom(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleNomCLub = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomClub(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <Stack sx={{ width: "200px", gap: "1px" }}>
      <FormControl ref={ref}>
        <TextField
          placeholder="Write your nom"
          inputRef={nomRef}
          value={nom}
          onChange={handlenomChange}
        />
        <TextField
          placeholder="Write your lastName"
          inputRef={lastNameRef}
          value={lastName}
          onChange={handleLastNameChange}
        />

        <TextField
          placeholder="Write your email"
          inputRef={nomClubRef}
          value={nomClub}
          onChange={handleNomCLub}
        />
        <TextField
          placeholder="Write your email"
          inputRef={emailRef}
          value={email}
          onChange={handleEmail}
        />
        <TextField
          placeholder="password"
          inputRef={passwordRef}
          value={password}
          onChange={handlePassword}
        />
        <TextField
          placeholder="confirm password"
          inputRef={confirmPasswordRef}
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <p onClick={onSwitch}>se connecter </p>
      </FormControl>
    </Stack>
  );
};

export default RegisterForm;
