// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'App/components/Reuse/Button';
import Input from 'App/components/Reuse/Input';
import classes from 'App/components/User/Auth.module.css';
import { authActions } from 'App/store/auth';

function Auth() {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <Input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <Input type="password" id="password" min={8} />
          </div>
          <Button className={classes.btn} text="Login" type="submit" />
        </form>
      </section>
    </main>
  );
}

export default Auth;
