import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"Sriram Complex, Buddha Park, Kalyani, West Bengal"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Om"}
          </p>
          <p>
            <b>Phone</b>
            {173314}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"20-05-2023"}
          </p>
          <p>
            <b>Delivered At</b>
            {"21-05-2023"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"asdasdsadsad"}
          </p>
          <p>
            <b>Paid At</b>
            {"21-05-2023"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{2800}
          </p>
          <p>
            <b>Shipping Charges</b>₹{50}
          </p>
          <p>
            <b>Tax</b>₹{60}
          </p>
          <p>
            <b>Total Amount</b>₹{232 + 200 + 2800}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>
          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{500}</span>
            </div>
          </div>
          <div>
            <h4>Burger Fries</h4>
            <div>
              <span>{10}</span> x <span>{1800}</span>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Sub Total
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              ₹{2132}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;