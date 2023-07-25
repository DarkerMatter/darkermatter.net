import React from 'react';
import styles from '../css/App.module.css';

function About() {
    return (
        <div className={styles.app}>
            <div className={styles.aboutContainer}>
                <h1>About Me</h1>
                <p>
                    I am a <span style={{color: 'yellow'}}>17</span> year old, <span style={{color: 'orange'}}>JS</span> web developer, with initials that placed me in tech from day 1 (<span style={{color: 'red'}}>DNS</span>).
                    I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set,
                    I also host shareX custom uploaders for people and a handful of <span style={{color: 'cyan'}}>Discord</span> bots.
                </p>
            </div>
        </div>
    );
}

export default About;
