import React from 'react';
import styles from '../css/App.module.css';

function NotFound() {
    return (
        <div className={styles.app}>
            <h1>404</h1>
            <p>Page not found.</p>
        </div>
    );
}

export default NotFound;
