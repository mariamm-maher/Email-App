import React, { useState } from "react";
import ComposeEmail from "../global/composeEmail";

const Message = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="items-center">
      <div className="flex items-center ms-3">
        <button
          onClick={handleOpen}
          className="flex px-6 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-full shadow-md hover:shadow-lg hover:from-teal-500 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all"
        >
          <svg
            className="w-5 h-5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
          </svg>
          Compose Email
        </button>
      </div>

      {open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
          onClick={handleClose}
        >
          <div
            className="bg-darkNavyBlue p-6 rounded-2xl shadow-xl w-[500px]"
            onClick={(e) => e.stopPropagation()}
          >
            <ComposeEmail onClose={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
