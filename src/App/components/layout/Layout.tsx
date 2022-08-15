// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
