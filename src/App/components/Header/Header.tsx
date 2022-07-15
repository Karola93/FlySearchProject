import React from 'react';
import classes from './Header.module.css';

// eslint-disable-next-line import/extensions,import/no-unresolved
import Image from '../Reuse/Image';
// eslint-disable-next-line import/extensions,import/no-unresolved,import/no-duplicates
import Button from '../Reuse/Button';
// eslint-disable-next-line import/extensions,import/no-duplicates

function Header() {
  return (
    <div className={classes.header}>
      <div>
        <Image src="../../../public/logo.png" name="logo" />
      </div>
      <div>
        <Button className={classes.button} text="Log in" />
        <Button className={classes.button} text="Sign in" />
      </div>
    </div>
  );
}

export default Header;
