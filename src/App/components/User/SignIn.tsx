// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React, { useState } from 'react';
import classes from 'App/components/User/SignIn.module.scss';
import Input from 'App/components/Reuse/Input';
import Button from 'App/components/Reuse/Button';
import { useNavigate } from 'react-router-dom';
import { authActions } from 'App/store/auth';
import { useDispatch } from 'react-redux';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: '',
    password: ''
  });

  function signinHandler(e) {
    e.preventDefault();
    dispatch(authActions.login());
    navigate('/');
    localStorage.setItem('newUser', JSON.stringify(newUser));
  }

  return (
    <main className={classes.signin}>
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
        <Button className={classes.btn} text="Sign in" type="submit" />
      </form>
    </main>
  );
}

export default SignIn;
