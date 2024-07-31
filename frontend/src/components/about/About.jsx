import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/Om.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Pizza Mania</h4>
          <p>
            At Pizza Mania, we blend tradition with taste, offering a curated selection of the finest pizzas.
          </p>

          <p>
            Our passion is to bring you an exceptional pizza experience with every slice. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Om Sagar</h3>
            </div>

            <p>
              I’m Om Sagar, the proud founder of Pizza Mania, where every slice is a testament to our dedication to exceptional flavor and quality. Affiliated with the essence of true pizza passion...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
