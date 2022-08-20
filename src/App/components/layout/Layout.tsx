// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import classes from 'App/components/layout/Layout.module.scss';
import MainNavigation from './MainNavigation';

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default Layout;
