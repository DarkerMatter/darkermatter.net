import React from 'react';
import styles from '../css/App.module.css';

// I made this component but never used it, so I'm leaving it here for reference.
function NotFound() {
    return (
        <div className={styles.app}>
            <h1>404</h1>
            <p>Page not found.</p>
        </div>
    );
}

export default NotFound;
