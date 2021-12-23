import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { registerUser } from "../store/operations/user";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";
import { getUserLoading } from "../store/selectors/user";
import { Loading } from "../components/Loading";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(getUserLoading);

  useEffect(() => {
    setError("");
  }, [name, email, password, passwordConfirm, surname]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !password || !passwordConfirm) {
      setError("Все поля обязательны!");
    } else if (password === passwordConfirm) {
      dispatch(registerUser({ name: `${name} ${surname}`, email, password }));
    } else {
      setError("Пароли должны быть равны. Проверьте, пожалуйста, пароль");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" labelName="Name" value={name} onChange={setName} />
      <Input
        name="surname"
        labelName="Surname"
        value={surname}
        onChange={setSurname}
      />
      <Input name="email" labelName="Email" value={email} onChange={setEmail} />
      <Input
        type="password"
        name="password"
        labelName="Password"
        value={password}
        onChange={setPassword}
      />
      <Input
        type="password"
        name="passwordConfirm"
        labelName="Confirm Password"
        value={passwordConfirm}
        onChange={setPasswordConfirm}
      />
      {error && <p style={{ color: "#cc0000" }}>{error}</p>}
      <Button type="submit" name="Зарегистрироваться" marginTop="20px" />
    </form>
  );
}

export default Register;
