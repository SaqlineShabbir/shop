import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Shop = () => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!token) {
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          "https://inventory-backend-ooh5.onrender.com/api/v1/product",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data?.data); // Adjust based on actual response structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  if (!token) {
    return <div className="flex justify-center items-center h-screen">...</div>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        No products available
      </div>
    );
  }

  return (
    <div className="lg:px-[150px]">
      <div className="flex justify-center items-center flex-col text-center py-20">
        <h2 className="text-4xl font-bold">Our Avabilable Products</h2>
        <p className="text-xl  pt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          officiis laudantium harum, ad velit fugiat distinctio minus ipsa,
          eveniet eligendi ea. Tempore error tenetur ipsa officia iure commodi
          dolore inventore!
        </p>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[100vh]">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 h-[300px]"
          >
            <img
              className="w-full h-48 object-cover"
              src={product?.photo}
              alt={product?.name}
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product?.name}</h2>
              <p className="text-gray-600">${product?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
