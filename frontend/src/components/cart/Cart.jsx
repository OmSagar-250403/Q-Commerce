import React from "react";
import { Link } from "react-router-dom";
import Tea1 from "../../assets/bg1044.jpg";
import Tea2 from "../../assets/1022.jpg";
import Tea3 from "../../assets/1011.jpeg";

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
          title={"Masala Chai"}
          img={Tea1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Green Tea"}
          img={Tea2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Lemon Tea"}
          img={Tea3}
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