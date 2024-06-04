import React from "react";
import toast from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";

const EditProfileModal = ({ setOpenModal, userData, fetchUser, token }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    const userInfo = {
      name,
      photo,
    };
    console.log(userData);
    toast((t) => (
      <div>
        <p>Are you sure you want to update this product?</p>
        <div className="flex justify-end mt-4">
          <button
            className="btn btn-primary mr-2"
            onClick={async () => {
              toast.dismiss(t.id);

              try {
                const response = await fetch(
                  `https://inventory-backend-ooh5.onrender.com/api/v1/user/${userData?._id}`,
                  {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`, // Include the token in the request headers
                    },
                    body: JSON.stringify(userInfo),
                  }
                );
                console.log(response);
                if (response.ok) {
                  toast.success("User updated successfully!");
                  fetchUser();
                  setOpenModal(false);
                } else {
                  toast.error("Failed to update User Profile.");
                }
              } catch (error) {
                toast.error("An error occurred. Please try again.");
              }
            }}
          >
            Sure
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
    <div
      id="close"
      onClick={(e) => {
        if (e.target.id === "close") {
          setOpenModal(false);
        }
      }}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 w-full h-full overflow-y-scroll"
      style={{ marginLeft: 0 }}
    >
      <div className="rounded w-[400px] md:w-[900px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <IoIosCloseCircle
          size={20}
          color="red"
          className="cursor-pointer"
          onClick={() => setOpenModal(false)}
        />

        <h1 className="lg:text-3xl text-gray-700 mb-5">Update Profile</h1>
        <hr />

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4  text-left">
            <label className="" htmlFor="name">
              Name
            </label>
            <input
              defaultValue={userData?.name}
              type="text"
              name="name"
              className="w-full py-3 px-5 border text-gray-700"
            />
          </div>
          <div className="mb-4 text-left">
            <label htmlFor="price">Photo</label>
            <input
              type="text"
              name="photo"
              className="w-full py-3 px-5 border text-gray-700"
            />
          </div>

          <div className="mb-4  ">
            <input
              type="submit"
              value="Submit"
              className="w-full btn py-3 px-5 border btn-neutral text-gray-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
