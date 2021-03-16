import React, { useEffect, useState } from "react";
import { useHistory } from "react-router"
import Container from "../../components/Container";
import Input from "../../components/Input";
import { observer } from 'mobx-react-lite';
import { useStores } from '../../contexts'
import { StyledButton } from "../../components/Button/styles";

const Login = () => {
  const { appStore: store } = useStores();
  const history = useHistory()
  const [token, setToken] = useState("");

  useEffect(() => {
    if (store.isLogged) {
      history.push("/popular")
    }
  }, [store.isLogged, history])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const setTokenToStore = async (event: React.FormEvent) => {
    event.preventDefault();
    store.validateAndSetToken(token);
  }

  return (
    <Container>
      <h1>Введите токен:</h1>
      <form onSubmit={setTokenToStore} style={{ marginBottom: 15, maxWidth: 500 }}>
        <Input value={token} onChange={handleChange} />
        <br></br>
        <br></br>
        <StyledButton>Login</StyledButton>
      </form>
    </Container>
  );
};

export default observer(Login);