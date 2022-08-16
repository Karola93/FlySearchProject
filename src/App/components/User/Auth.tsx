// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from 'App/components/Reuse/Input';
import classes from 'App/components/User/Auth.module.css';
import { authActions } from 'App/store/auth';
import Button from 'App/components/Reuse/Button';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [cookies, setCookies] = useCookies(['']);

  function loginHandler(e) {
    e.preventDefault();
    dispatch(authActions.login());
    navigate('/');
    localStorage.setItem('user', JSON.stringify(user));
    setCookies('user', user);
  }

  return (
    <main className={classes.auth}>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label htmlFor="email">
            Email: <br />
          </label>
          <Input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) =>
              setUser((user) => ({
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
            value={user.password}
            id="password"
            min={8}
            onChange={(e) =>
              setUser((user) => ({
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

export default Auth;
