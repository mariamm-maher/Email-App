import React, { useEffect, useState } from "react";
import { fetchDraftEmails } from "../api/emailService";

const Draft = () => {
  const [draftEmails, setDraftEmails] = useState([]);
  useEffect(() => {
    const getDraftEmails = async () => {
      const fetchedEmails = await fetchDraftEmails();
      setDraftEmails(fetchedEmails);
    };

    getDraftEmails();
  }, []);

  return (
    <>
      <div class=" w-5/6 sm:ml-64 ">
        <div class="p-4  mt-14 ">
          <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
            {draftEmails.map((email) => (
              <li key={email.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {email.sender}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {email.email}
                    </p>
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

export default Draft;
