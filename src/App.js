import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Links from './Links';
import styles from './App.module.css';
import { useEffect } from 'react';

function PageTitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.substring(1);
        document.title = currentPath ? `DarkerMatter | ${currentPath.charAt(0).toUpperCase() + currentPath.slice(1)}` : 'DarkerMatter';
    }, [location]);

    return null;  // This component doesn't render anything
}

function App() {
    return (
        <Router>
            <PageTitleUpdater />
            <div className={styles.app}>
                <nav className={styles.nav}>
                    <Link className={styles.button} to="/">home</Link>
                    <Link className={styles.button} to="/about">about</Link>
                    <Link className={styles.button} to="/links">links</Link>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
