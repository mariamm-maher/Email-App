
import React, { useState } from "react";

const Inbox = () => {
  // State to manage emails, archived emails, spam, and trashed emails
  const [emails, setEmails] = useState([
    { id: 1, sender: "Thomas Lean", email: "Thomas@mailer.com" },
    { id: 2, sender: "Lana Byrd", email: "Lana@mailer.com" },
  ]);
  const [trashedEmails, setTrashedEmails] = useState([]);
  const [archivedEmails, setArchivedEmails] = useState([]);
  const [spamEmails, setSpamEmails] = useState([]);

  // Function to move an email to the trashed list
  const handleTrashEmail = (id) => {
    const emailToTrash = emails.find((email) => email.id === id);
    setTrashedEmails([...trashedEmails, emailToTrash]);
    setEmails(emails.filter((email) => email.id !== id));
  };

  // Function to move an email to the archived list
  const handleArchiveEmail = (id) => {
    const emailToArchive = emails.find((email) => email.id === id);
    setArchivedEmails([...archivedEmails, emailToArchive]);
    setEmails(emails.filter((email) => email.id !== id));
  };

  // Function to move an email to the spam list
  const handleSpamEmail = (id) => {
    const emailToSpam = emails.find((email) => email.id === id);
    setSpamEmails([...spamEmails, emailToSpam]);
    setEmails(emails.filter((email) => email.id !== id));
  };

  return (
    <>
      <div className="w-5/6 sm:ml-64">
        <div className="p-4 mt-14">
          <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
            {emails.map((email) => (
              <li key={email.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">



            <div >
                <ul class="grid grid-cols-2 gap-1">
                    <li class="flex items-center p-3">
                        <input id="select-checkbox" type="checkbox" value="" class="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

                    </li>

                    <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512">
                            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/>
                        </svg>
                    </a>
                    </li>
                </ul>
            </div>





                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {email.sender}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {email.email}
                    </p>
                  </div>




                  <div className="text-base font-semibold text-gray-900 dark:text-white">
                    <ul className="inline-flex gap-2">
                      {/* Archive button */}
                      <li>
                        <button
                          onClick={() => handleArchiveEmail(email.id)}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                        >
                          <svg
                            className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                          >
                            <path d="M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"/>
                          </svg>
                        </button>
                      </li>

                      {/* Spam button */}
                      <li>
                        <button
                          onClick={() => handleSpamEmail(email.id)}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                        >
                            <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"  aria-hidden="true" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                                <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
                            </svg>
                        </button>
                      </li>

                      {/* Trash button */}
                      <li>
                        <button
                          onClick={() => handleTrashEmail(email.id)}
                          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
                        >
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" 
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                        </svg>

                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Inbox;