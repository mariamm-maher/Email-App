import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Box() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex items-center ">
      <div className="flex items-center ms-3">
        <Link
          onClick={handleOpen}
          to=""
          class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <img
            class="w-10 h-10 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
        </Link>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50 "
          onClick={handleClose}
        >
          <div
            className="bg-darkNavyBlue p-6 rounded-lg flex flex-col  w-96 p-6 rounded-2xl shadow-xl relative mt-[50px] mr-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              id="modal-modal-title"
              className=" text-center text-[1.4vw]  mb-4"
            >
              CurrentUser@mailer.com
            </h2>
            <img
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
              style={{
                height: "3.7vw",
                width: "3.7vw",
                marginLeft: "9vw",
                borderRadius: "50%",
              }}
            />
            <p
              id="modal-modal-description"
              className="text-gray-700 text-center text-xl mt-2"
            >
              Hi CurrentUser!
            </p>
            <Link
              to="/userprofile"
              className=" mt-4 px-4 py-2 text-white font-semibold rounded-2xl bg-gradient-to-br from-neonMintGreen to-darkNavyBlue  dark:text-white focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-black "
            >
              <span className="ml-[50px] text-center">
                Manage your Mailer Account
              </span>
            </Link>

            <Link
              to="/"
              class=" bg-gradient-to-br from-neonMintGreen to-darkNavyBlue  dark:text-white focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-black flex items-center p-2  rounded-3xl mt-[2vw] border-[2px] w-[9vw] h-[3vw]"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
              </svg>
              <span class="flex-1 ms-3 ">SignOut</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
