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
          <h4>Tea Junction</h4>
          <p>
            At Tea Junction, we blend tradition with taste, offering a curated selection of the finest teas.
          </p>

          <p>
            Our passion is to bring you an exceptional tea experience with every cup. Click below to see the
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
              I’m Om Sagar, the proud founder of Tea Junction, where every cup is a testament to our dedication to exceptional flavor and quality. Affiliated with the essence of pure taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
