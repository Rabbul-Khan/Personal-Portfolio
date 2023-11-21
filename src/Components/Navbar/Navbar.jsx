import './Navbar.scss';

import { motion } from 'framer-motion';

import Sidebar from './Sidebar/Sidebar';

const linkVariants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.95,
  },
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <Sidebar />
      <div className="navbar-wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mohammed Rabbul Hossain Khan
        </motion.span>
        <div className="navbar-wrapper__socials-wrapper">
          <motion.a
            href="https://www.linkedin.com/in/mohammed-rabbul-hossain-khan-701651167/"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="./linkedin.png" alt="LinkedIn icon" />
          </motion.a>
          <motion.a
            href="https://github.com/Rabbul-Khan"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="./github.svg" alt="GitHub icon" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/rabbul.khan.39/"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="./facebook.png" alt="Facebook icon" />
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
