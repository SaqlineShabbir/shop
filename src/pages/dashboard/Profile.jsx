import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import useAuth from "../../hooks/useAuth";
import EditProfileModal from "./EditProfileModal";

const Profile = () => {
  const { user, token } = useAuth();
  const [userData, setUserData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const fetchUser = async () => {
    if (user) {
      try {
        const response = await fetch(
          `https://inventory-backend-ooh5.onrender.com/api/v1/user/${user.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setUserData(userData?.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  if (!userData) {
    return <div className="min-h-[100vh] text-center">Loading...</div>;
  }

  return (
    <div className="min-h-[80vh] py-8 bg-white shadow-lg text-center">
      <header className="mb-8">
        <div className="mb-4">
          <img
            src={
              userData?.photo ||
              "https://cdn-icons-png.freepik.com/512/10542/10542498.png"
            }
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold">{userData?.displayName}</h1>
      </header>

      <main>
        <section className="text-lg">
          <div className="mb-6">
            <div className="flex justify-center items-center gap-4 mb-4">
              <h2 className="text-xl font-semibold">User Details</h2>
              <CiEdit
                size={32}
                className="cursor-pointer"
                onClick={() => setOpenModal(true)}
              />
            </div>
            <p>
              <span className="font-semibold">Name:</span> {userData?.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {userData?.email}
            </p>
          </div>
        </section>
      </main>
      {openModal && (
        <EditProfileModal
          setOpenModal={setOpenModal}
          userData={userData}
          fetchUser={fetchUser}
          token={token}
        />
      )}
    </div>
  );
};

export default Profile;
