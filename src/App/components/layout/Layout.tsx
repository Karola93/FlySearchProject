// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import MainNavigation from './MainNavigation';
import classes from 'App/components/layout/Layout.module.scss';

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;
