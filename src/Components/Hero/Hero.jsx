import { motion } from 'framer-motion';

import './Hero.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollVariants = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: {
    y: 10,
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-100%',
    transition: {
      repeat: Infinity,
      duration: 15,
      repeatType: 'loop',
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__grid-wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="hero__details"
        >
          <motion.h1 variants={textVariants} className="hero__title">
            Mohammed Rabbul Hossain Khan
          </motion.h1>
          <motion.h2 variants={textVariants} className="hero__subtitle">
            Web Developer
          </motion.h2>
          <motion.div variants={textVariants} className="btn__wrapper">
            <motion.button variants={textVariants} className="btn--outline">
              See Projects
            </motion.button>
            <motion.button variants={textVariants} className="btn--outline">
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={scrollVariants}
            initial="initial"
            animate="animate"
            className="img--scroll"
            src="./scroll.png"
            alt="Scroll icon"
          />
        </motion.div>
        <img className="img--avatar" src="./avatar.svg" alt="Avatar" />
      </div>
      <motion.div
        className="sliding-text-container"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web developer and Designer
      </motion.div>
    </div>
  );
};

export default Hero;
