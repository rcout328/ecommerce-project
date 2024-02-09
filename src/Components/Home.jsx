import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Retrieve cart items from localStorage or set an empty array
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      // Check if the product is already in the cart
      const isInCart = cart.some((item) => item.id === productId);

      if (isInCart) {
        // If already in cart, update the quantity
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        // If not in cart, add the product with quantity 1
        setCart((prevCart) => [...prevCart, { ...productToAdd, quantity: 1 }]);
      }
    }
  };

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const renderProductList = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (products.length === 0) {
      return <p>There are no products available</p>;
    }

    return products.map((product) => (
      <div
        key={product.id}
        className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
      >
        <img
          className="w-full h-64 object-cover object-center"
          src={product.image}
          alt={product.title}
        />
        <div className="p-5">
          <h5 className="text-lg font-bold mb-2">{product.title}</h5>
          <p className="text-sm text-gray-700 mb-3">
            {product.description.substring(0, 100)}...
          </p>

          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">${product.price}</span>
            <button
              className="px-3 py-1 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring focus:outline-none"
              onClick={() => addToCart(product.id)}
            >
              <Link to={`/product/${product.id}`}>Buy Product</Link>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Navbar className="flex absolute fixed" />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {renderProductList()}
        </div>
      </div>
    </>
  );
};

export default Home;
