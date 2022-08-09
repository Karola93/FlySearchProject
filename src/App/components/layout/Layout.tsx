// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <MainNavigation />
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <main className={classes.main}>
        {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
        {props.children}
      </main>
    </>
  );
}

export default Layout;
