import { motion } from 'framer-motion';

import './ToggleButton.scss';

const ToggleButton = ({ setOpen }) => {
  return (
    <button className="btn--toggle" onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          d="M 0 1 L 23 1"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          variants={{
            open: { d: 'M 3 17 L 17 3' },
          }}
        />
        <motion.path
          d="M 0 11 L 23 11"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          variants={{
            open: { d: 'M 0 0 L 0 0' },
          }}
        />
        <motion.path
          d="M 0 22 L 23 22"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          variants={{
            open: { d: 'M 3 3 L 17 17' },
          }}
        />
      </svg>
    </button>
  );
};
export default ToggleButton;
