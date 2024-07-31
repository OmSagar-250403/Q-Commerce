import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";


const Header = ({ isAuthenticated = false }) => {
  
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };


  return (
    <nav>
      
      <motion.div {...options}>
        <IoFastFoodOutline />
      </motion.div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>

        {
          isAuthenticated ? 
          (
            <Link to="/me">
              <FaUser />
            </Link>
          ) : (
            <Link to="/login">
              <FiLogIn />
            </Link>
          )
        }

      </div>
    </nav>
  );
};

export default Header;