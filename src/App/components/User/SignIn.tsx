// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import classes from 'App/components/User/Auth.module.css';
import Input from 'App/components/Reuse/Input';
import Button from 'App/components/Reuse/Button';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: '',
    password: ''
  });

  function signinHandler(e) {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  return (
    <main className={classes.auth}>
      <form onSubmit={signinHandler}>
        <div className={classes.control}>
          <label htmlFor="email">
            Email: <br />
          </label>
          <Input
            type="email"
            id="email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser((user) => ({
                ...user,
                email: e.target.value
              }))
            }
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">
            Password: <br />
          </label>
          <Input
            type="password"
            value={newUser.password}
            id="password"
            min={8}
            onChange={(e) =>
              setNewUser((user) => ({
                ...user,
                password: e.target.value
              }))
            }
          />
        </div>
        <Button className={classes.btn} text="Login" type="submit" />
      </form>
    </main>
  );
}

export default SignIn;
