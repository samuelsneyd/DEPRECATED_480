import * as React from 'react';
import { motion } from 'framer-motion';

const withAnimation = (Component) => {
  return (props) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        exit={{ opacity: 0 }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default withAnimation;
