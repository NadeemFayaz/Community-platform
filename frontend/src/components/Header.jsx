import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#007BFF',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    fontSize: '1em',
  },
  navLink: {
    textDecoration: 'none',
    color: '#007BFF',
  },
};

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <Link to="/" style={styles.logoLink}>Community Platform</Link>
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/eventscarousel" style={styles.navLink}>Explore Events</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/start-learning" style={styles.navLink}>Start Learning</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/announcements" style={styles.navLink}>Announcements</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/community" style={styles.navLink}>Community Highlights</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;