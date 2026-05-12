export default function ProductList({ products, addToCart }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} data-testid={`product-${product.id}`}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>${product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}