import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../../store/auth';
import { Input } from '../Reuse/Input';

function Auth() {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <main className={classes.auth}>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <section>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <form onSubmit={loginHandler}>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <div className={classes.control}>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Input type="email" id="email" />
          </div>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <div className={classes.control}>
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Input type="password" id="password" min={8} />
          </div>
          {/* eslint-disable-next-line react/button-has-type,react/react-in-jsx-scope */}
          <button>Login</button>
        </form>
      </section>
    </main>
  );
}

export default Auth;
