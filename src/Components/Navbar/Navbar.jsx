import { motion } from 'framer-motion';

import Sidebar from '../Sidebar/Sidebar';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
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
          <a href="#">
            <img src="./linkedin.png" alt="LinkedIn icon" />
          </a>
          <a href="#">
            <img src="./facebook.png" alt="Facebook icon" />
          </a>
          <a href="#">
            <img src="./instagram.png" alt="Instagram icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
