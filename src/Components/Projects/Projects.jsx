import './Projects.scss';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/18452342/pexels-photo-18452342/free-photo-of-man-climbing-on-a-modern-building-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum voluptas officiis cum quis porro totam velit accusantium ',
  },
  {
    id: 2,
    title: 'Todo',
    img: 'https://images.pexels.com/photos/18452342/pexels-photo-18452342/free-photo-of-man-climbing-on-a-modern-building-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum voluptas officiis cum quis porro totam velit accusantium ',
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    img: 'https://images.pexels.com/photos/18452342/pexels-photo-18452342/free-photo-of-man-climbing-on-a-modern-building-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum voluptas officiis cum quis porro totam velit accusantium ',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="project">
      <div className="imageContainer">
        <img
          src={item.img}
          alt="Project thumbnail"
          ref={ref}
          width={16}
          height={9}
        />
      </div>
      <motion.div className="textContainer" style={{ y }}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>See Demo</button>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Projects;
