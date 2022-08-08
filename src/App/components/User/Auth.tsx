// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheckgi
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'App/components/Reuse/Button';
import Input from 'App/components/Reuse/Input';
import classes from 'App/components/User/Auth.module.css';
import { authActions } from 'App/store/auth';

function Auth() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

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
              value={user.email}
              /* eslint-disable-next-line @typescript-eslint/no-shadow */
              onChange={(e) =>
                setUser((user) => ({
                  ...user,
                  email: e.target.value
                }))
              }
            />
          </label>
        </div>
        <div className={classes.control}>
          <Input
            type="password"
            value={user.password}
            id="password"
            min={8}
            /* eslint-disable-next-line @typescript-eslint/no-shadow */
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
