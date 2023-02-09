import React from 'react';
import styles from './appLayout.module.css';
import Header from '../Header/Header';

const AppLayout = ({children}) => {
  return (
    <div className={styles.AppLayout}>
      <div className={styles.StyledLayout}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
