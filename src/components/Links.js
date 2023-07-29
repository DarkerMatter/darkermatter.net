import React from 'react';
import styles from '../css/App.module.css';

// Links is a component that renders the about links.
// I Lowkey don't like this, but it's the only way to do it without a bunch of CSS
function Links() {
    const links = [
        { name: 'Discord', url: 'https://discordapp.com/users/darkermatter' },
        { name: 'Discord Server', url: 'https://darker.systems/discord' },
        { name: 'Github', url: 'https://github.com/DarkerMatter' },
        { name: 'Hosting Project', url: 'https://darker.systems' },
    ];
    // More demonstration of my hate of CSS
    return (
        <div className={styles.app}>
            <div className={styles.linksContainer}>
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Links;
