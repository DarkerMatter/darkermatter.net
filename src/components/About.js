import React from 'react';
import styles from '../css/App.module.css';

// About is a component that renders the about page.
function About() {
    return (
        <div className={styles.app}>
            <div className={styles.aboutContainer}>
                <h1>about me</h1>
                <p>
                    <span style={{color: 'cyan'}}>dumb bitch pianist</span>
                </p>
            </div>
        </div>
    );
}

export default About;
