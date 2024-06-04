import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const Shop = () => {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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
        setFilteredProducts(data?.data); // Initialize filtered products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

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

  return (
    <div className="lg:px-[150px]">
      <div className=" text-center py-20">
        <h2 className="text-4xl font-bold">Our Available Products</h2>

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-4 p-2 px-20 border border-orange-300 rounded"
        />
      </div>
      <div className="p-4 min-h-[100vh]">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
        ) : (
          <div className="flex justify-center items-center h-[70vh]">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
