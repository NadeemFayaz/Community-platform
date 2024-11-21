import React from 'react';
import { Link } from 'react-router-dom';

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
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Header;