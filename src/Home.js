import React from 'react';
import styles from './App.module.css';

function Home() {
    return (
        <div className={styles.app}>
            <div className={styles.homeContainer}>
                <h1>Welcome to my site!</h1>
                <p>This is the home page of DarkerMatter, a <span style={{color: 'yellow'}}>17</span>-year-old JS web developer.</p>
            </div>
        </div>
    );
}

export default Home;
