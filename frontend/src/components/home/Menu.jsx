import React from "react";
import MenuCard from "./MenuCard";
import FP from "../../assets/FP.jpg";
import PP from "../../assets/PP.jpg";
import CBP from "../../assets/CBP.jpg";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          ChaiSrc={FP}
          price={550}
          title="Farmhouse Pizza"
          handler={addToCartHandler}
          delay={0.1}
        />
        
        <MenuCard
          itemNum={2}
          ChaiSrc={PP}
          price={600}
          title="Pasta Pizza"
          handler={addToCartHandler}
          delay={0.5}
        />
        
        <MenuCard
          itemNum={3}
          ChaiSrc={CBP}
          price={900}
          title="Cheese Burst Pizza"
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
