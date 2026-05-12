export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-md text-center">

      <h2 className="text-xl font-bold text-green-600">
        {product.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {product.category}
      </p>

      <p className="text-lg font-bold mt-3">
        ${product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-xl"
      >
        Add to Cart
      </button>

    </div>
  );
}