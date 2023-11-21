import './Sidebar.scss';

import { motion } from 'framer-motion';
import { useState } from 'react';

import Links from './Links/Links';
import ToggleButton from './ToggleButton/ToggleButton';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(1200px at 50px 50px)',
      transition: {
        type: 'spring',
        stifness: 200,
        damping: 40,
      },
    },
    close: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        type: 'spring',
        sitfness: 200,
        damping: 25,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'close'}>
      <motion.div className="sidebar__bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
