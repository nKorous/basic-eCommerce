import React, { FC, useState } from "react";
import * as styles from "./styles";

//@material-ui
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { checkIsUser } from "../../services/login";
import { Redirect } from "react-router-dom";

export interface Props {
  getUsername(name: string): void
  isAuth(status: boolean): void
}

const LoginComponent: FC<Props> = ({getUsername, isAuth}) => {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isPlainText, setIsPlainText] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false)

  const handleInput = (
    type: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (type === "username") setUsername(event.target.value);
    else if (type === "password") setPassword(event.target.value);
  };

  const handleSeePassword = () => {
    setIsPlainText(!isPlainText);
  };

  const handleLogin = (username: string | null, password: string | null) => {
    if(username && password) {
    const isUser = checkIsUser(username, password)
    if(isUser) {
      getUsername(username)
      isAuth(true)
      return (<Redirect to="/store" />)
    } else {
      setIsError(true)
    }
  } else {
    setIsError(true)
    return ''
  }
  }

  return (
    <Card>
      {
        isError && (
          <>
            <h3>'Error with username or password, please try again'</h3>
          </>
        )
      }
      <div>
        Username:{" "}
        <input
          type="text"
          placeholder="D.Vader"
          onChange={event => handleInput("username", event)}
        />
      </div>
      <div>
        Password:{" "}
        <input
          type={isPlainText ? 'text' : 'password'}
          placeholder="D.Vader"
          onChange={event => handleInput("password", event)}
        /><Button onClick={handleSeePassword}>See PW</Button>
      </div>
      <Button disabled={username && password ? false : true} onClick={() => handleLogin(username, password)} color='primary'>Login</Button>
    </Card>
  );
};

export default LoginComponent;
