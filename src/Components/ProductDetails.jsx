import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { _id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${_id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [_id]);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = () => {
    if (product) {
      const isInCart = cart.some((item) => item.id === product.id);

      if (isInCart) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  if (!product) {
    return <div>Loading or product not found...</div>;
  }

  const { title, price, description, category } = product;

  return (
    <>
      <Navbar className="flex absolute fixed" />
      <div className="py-3 pl-5">
        <Link to={"/"}>Back</Link>
      </div>
      <div className="container mx-auto my-10 p-5 max-w-3xl shadow-lg border border-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={title}
              className="rounded-lg w-full h-auto object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h1 className="font-bold text-3xl my-2">{title}</h1>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-indigo-600 font-semibold">
              Category: {category}
            </p>
            <p className="text-2xl font-bold mt-3">Price: ${price}</p>
            <button
              className="mt-5 py-2 px-4 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 transition-colors duration-200"
              onClick={addToCart}
            >
              <Link to={"/confirmform"}>Buy now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
