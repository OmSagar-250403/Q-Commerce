import React from "react";
import { Link } from "react-router-dom";
import FP from "../../assets/FP.jpg";
import PP from "../../assets/PP.jpg";
import CBP from "../../assets/CBP.jpg";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};

  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Farmhouse Pizza"}
          img={FP}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Pasta Pizza"}
          img={PP}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burst Pizza"}
          img={CBP}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2800}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2800 * 0.02}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{50}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2800 + 2800 * 0.02 + 50}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;