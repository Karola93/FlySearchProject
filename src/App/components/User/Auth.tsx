// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'App/components/Reuse/Button';
import Input from 'App/components/Reuse/Input';
import classes from 'App/components/User/Auth.module.css';
import { authActions } from 'App/store/auth';

function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    email,
    password
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <main className={classes.auth}>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Email: <br />
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <div className={classes.control}>
          <Input type="password" value={password} id="password" min={8} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button className={classes.btn} text="Login" type="submit" />
      </form>
    </main>
  );
}

export default Auth;
