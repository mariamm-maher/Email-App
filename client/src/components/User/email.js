import "../api/emailService";
const EmailItem = ({ email, folderName }) => {
  return (
    <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-3 rtl:space-x-reverse space-x-3">
        <div>
          <ul className="grid grid-cols-2 gap-1">
            <li className="flex items-center p-3">
              <input
                id="select-checkbox"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </li>
            {/* Star Icon */}
            <li>
              <button
                // onClick={() => onStar(email.id)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-0 flex space-x-4">
          <div>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {email.from}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {email.to}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800 truncate dark:text-gray-300 mt-2">
              {email.subject}
            </p>
          </div>
          <div>
            <p
              className="text-sm text-gray-500 truncate dark:text-gray-400 mt-1"
              dangerouslySetInnerHTML={{
                __html: email.body,
              }}
            ></p>
          </div>
          <div>
            <p className="text-xs text-gray-400 truncate dark:text-gray-500 mt-1">
              {new Date(email.sentAt).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="text-base font-semibold text-gray-900 dark:text-white">
          <ul className="inline-flex gap-2">
            {/* Delete Icon */}
            <li>
              <button
                // onClick={() => onDelete(email.id)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
            </li>

            {/* Mark as Spam Icon */}
            <li>
              <button
                // onClick={() => onMarkAsSpam(email.id)}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8l0-179.8z" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
export default EmailItem;
