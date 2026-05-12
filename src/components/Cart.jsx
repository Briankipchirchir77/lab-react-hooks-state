export default function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <span>{item.name} is in your cart</span>
            <span>${item.price}</span>
          </div>
        ))
      )}

      <div>Total: ${total}</div>
    </div>
  );
}