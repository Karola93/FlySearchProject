import MainNavigation from './MainNavigation';
import classes from 'App/components/layout/Layout.module.scss';

function Layout(props: any) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
