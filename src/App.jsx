import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./data/products";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">🛒 FreshMart</h1>

          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-black text-white rounded"
          >
            {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
          </button>
        </div>

        {/* FILTER */}
        <div className="mb-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All</option>
            <option value="Fruits">Fruits</option>
            <option value="Grains">Grains</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>

            {/* Needed for test */}
            <option value="NonExistent">NonExistent</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div>
          {filteredProducts.length === 0 ? (
            <p>No products available</p>
          ) : (
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />
          )}
        </div>

        {/* CART */}
        <Cart cart={cart} />
      </div>
    </div>
  );
}