import React, { useState } from 'react';
import { Button, Input, Flex, Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'; // Import your existing styles

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Flex className={`navbar ${darkMode ? 'dark-mode' : ''}`} align="center" justify="space-between" p="4">
      <Box>
        <div className="logo">LELEKART</div>
      </Box>
      <Box>
        <div className="search-bar">
          <Input type="text" placeholder="Search products..." />
          <Button className="search-btn" ml="2">
            Search
          </Button>
        </div>
      </Box>
      <Box>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Electronics</a>
          <a href="#">Fashion</a>
          <a href="#">Books</a>
        </div>
      </Box>
      <Box>
        <div className="user-actions">
          <Button className="cart-button" mr="4">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
          <Button onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
          </Button>
        </div>
      </Box>
    </Flex>
  );
}

export default Navbar;
