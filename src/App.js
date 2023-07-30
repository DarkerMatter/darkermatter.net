import { BrowserRouter as Router, Route, Routes, useLocation, Link, Navigate } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Home from './components/Home';
import About from './components/About';
import Links from './components/Links';
import styles from './css/App.module.css';
import { useEffect } from 'react';

// Page title updater is a component that updates the page title based on the current path.
function PageTitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname.substring(1);
        document.title = currentPath ? `DarkerMatter | ${currentPath.charAt(0).toUpperCase() + currentPath.slice(1)}` : 'DarkerMatter';
    }, [location]);

    return null;  // This component doesn't render anything
}

// Page title updater is a component that updates the page title based on the current path.
function App() {
    console.log('Thanks for checking out my site! You can find the GitHub Repo at https://github.com/DarkerMatter/darkermatter.net')
    return (
        <Router>
            <PageTitleUpdater />
            <Navigation />
            <RoutesWithTransition />
        </Router>
    );
}

// Navigation is a component that renders the navigation bar.
function Navigation() {
    return (
        <nav className={styles.nav}>
            <Link className={styles.button} to="/">home</Link>
            <Link className={styles.button} to="/about">about</Link>
            <Link className={styles.button} to="/links">links</Link>
        </nav>
    );
}

// RoutesWithTransition is a component that renders the routes with a transition.
function RoutesWithTransition() {
    const location = useLocation();  // Define location here

    return (
        <SwitchTransition>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Routes location={location}>
                    <Route path="/about" element={<About />} />
                    <Route path="/links" element={<Links />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Navigate to="/" />} />  {/* Redirect to home page */}
                </Routes>
            </CSSTransition>
        </SwitchTransition>
    );
}
// And I OOP
export default App;
