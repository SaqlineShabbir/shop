import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const categories = [
    {
      id: 1,
      name: "Apple",
    },
    {
      id: 2,
      name: "Mango",
    },
  ];

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;

    const id = form.id.value;
    const name = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;
    const photo = form.photo.value;

    // Validate form fields
    if (!name || !price || !category || !description || !photo) {
      toast.error("Please fill in all fields.");
      return;
    }

    const recipeData = {
      id,
      name,
      photo,
      price,
      category,
      description,
    };

    // Show confirmation toast
    toast((t) => (
      <div>
        <p>Are you sure you want to add this product?</p>
        <div className="flex justify-end mt-4">
          <button
            className="btn btn-primary mr-2"
            onClick={async () => {
              toast.dismiss(t.id);
              setLoading(true);
              try {
                const response = await fetch(
                  "https://inventory-backend-ooh5.onrender.com/api/v1/product",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`, // Include the token in the request headers
                    },
                    body: JSON.stringify(recipeData),
                  }
                );

                if (!response.ok) {
                  throw new Error("Failed to add product");
                }

                toast.success("Product added successfully!");
                form.reset();
              } catch (error) {
                toast.error("Failed to add product. Please try again.");
              } finally {
                setLoading(false);
              }
            }}
          >
            Add
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
    <div className="w-full px-16 py-20">
      <Toaster />
      <h1 className="text-4xl mb-4 text-center">Add Product</h1>
      <form onSubmit={handleCreateProduct} className="w-full">
        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="photo">Image </label>
          <input type="text" name="photo" className="w-full py-3 px-5 border" />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price </label>
          <input
            type="number"
            name="price"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category">Category </label>
          <select name="category" className="w-full py-3 px-5 border">
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={loading ? "Adding..." : "Add Product"}
            className="w-full btn py-3 px-5 border btn-neutral cursor-pointer"
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
