import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    const options = {
        initial: {
          x: "-100vw",
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
        },
      };

  return (
    <section class="contact">
        <motion.form{...options} transition={{ delay: 0.2 }}>
            <h2>Contact Us</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />

            <textarea placeholder="Message..." cols="30" rows="10"></textarea>

            <button type="submit">Send</button>

        </motion.form>

    </section>
  )
}

export default Contact