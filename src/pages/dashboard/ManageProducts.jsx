import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import EditProductModal from "./EditProductModal";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [productDa, setProductDa] = useState({});
  const { token } = useAuth();

  async function load() {
    try {
      const productRes = await fetch(
        "https://inventory-backend-ooh5.onrender.com/api/v1/product",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      const productData = await productRes.json();
      setProducts(productData?.data || []);
    } catch (error) {
      toast.error("Failed to load products.");
    }
  }
  useEffect(() => {
    load();
  }, [token]); // Ensure useEffect runs when the token changes

  const handleSendId = (sdata) => {
    setProductDa(sdata);
  };

  const handleDeleteService = (id) => {
    toast((t) => (
      <div>
        <p>Are you sure you want to delete this product?</p>
        <div className="flex justify-end mt-4">
          <button
            className="btn btn-danger mr-2"
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                const response = await fetch(
                  `https://inventory-backend-ooh5.onrender.com/api/v1/product/${id}`,
                  {
                    method: "DELETE",
                    headers: {
                      Authorization: `Bearer ${token}`, // Include the token in the request headers
                    },
                  }
                );
                if (response.ok) {
                  setProducts(products.filter((product) => product._id !== id));
                  toast.success("Product deleted successfully!");
                } else {
                  toast.error("Failed to delete product.");
                }
              } catch (error) {
                toast.error("An error occurred. Please try again.");
              }
            }}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-[90vh] lg:px-20 pt-20 px-5  text-white">
      <Toaster />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        {products.map((product) => (
          <div key={product?._id} className="border">
            <div className="group rounded-md overflow-hidden hover:shadow-lg border">
              <div className="w-full h-32">
                <img
                  src={product?.photo}
                  alt="service image"
                  className="w-full h-full object-cover transition-opacity"
                />
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-[#0a0c1c] flex justify-between">
              <h3 className="text-xl font-semibold mb-2">{product?.name}</h3>
              <div className="flex space-x-5">
                <span
                  onClick={() => setOpenModal(true)}
                  className="text-pink-500 text-2xl cursor-pointer"
                >
                  <MdEditSquare onClick={() => handleSendId(product)} />
                </span>
                <span className="text-2xl text-pink-500 cursor-pointer">
                  <AiFillDelete
                    onClick={() => handleDeleteService(product?._id)}
                  />
                </span>
              </div>
            </div>
            {openModal && (
              <EditProductModal
                setOpenModal={setOpenModal}
                products={products}
                productDa={productDa}
                token={token}
                load={load}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts;
