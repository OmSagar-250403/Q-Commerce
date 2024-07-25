import React from "react";
import MenuCard from "./MenuCard";
import Tea1 from "../../assets/bg1044.jpg";
import Tea2 from "../../assets/1022.jpg";
import Tea3 from "../../assets/1011.jpeg";


const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          ChaiSrc={Tea1}
          price={350}
          title="Masala Chai"
          handler={addToCartHandler}
          delay={0.1}
        />
        
        <MenuCard
          itemNum={2}
          ChaiSrc={Tea2}
          price={600}
          title="Green Tea"
          delay={0.5}
          handler={addToCartHandler}
        />
        
        <MenuCard
          itemNum={3}
          ChaiSrc={Tea3}
          price={900}
          title="Lemon Tea"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
