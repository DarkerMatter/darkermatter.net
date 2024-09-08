import React from 'react';
import styles from '../css/App.module.css';
import '@fontsource-variable/montserrat';

function Home() {
    const imgSrc = `${process.env.PUBLIC_URL}/catlogo.png`;

    return (
        <div className={styles.app}>
            <div className={styles.homeContainer}>
                <h1 aria-label="Adrian Tamayo">adrian tamayo</h1>
                <p>
                    i play music sometimes
                </p>
                <img src={imgSrc} alt="Cat Logo" className={styles.logo} />
            </div>
        </div>
    );
}

export default Home;
