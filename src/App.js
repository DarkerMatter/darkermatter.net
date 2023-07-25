import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
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
            <Navigation />
            <RoutesWithTransition />
        </Router>
    );
}

function Navigation() {
    return (
        <nav className={styles.nav}>
            <Link className={styles.button} to="/">home</Link>
            <Link className={styles.button} to="/about">about</Link>
            <Link className={styles.button} to="/links">links</Link>
        </nav>
    );
}

function RoutesWithTransition() {
    const location = useLocation();  // Define location here

    return (
        <SwitchTransition>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/about" element={<About />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </CSSTransition>
        </SwitchTransition>
    );
}

export default App;
