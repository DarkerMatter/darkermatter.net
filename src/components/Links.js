import React from 'react';
import styles from '../css/App.module.css';

function Links() {
    const links = [
        { name: 'Discord', url: 'https://discordapp.com/users/darkermatter' },
        { name: 'Discord Server', url: 'https://darker.systems/discord' },
        { name: 'Github', url: 'https://github.com/DarkerMatter' },
        { name: 'Hosting Project', url: 'https://darker.systems' },
    ];

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
