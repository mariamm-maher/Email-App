import React from 'react';

const EmailItem = ({ sender, email }) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div>
          <ul className="grid grid-cols-2 gap-1">
            <li className="flex items-center p-3">
              <input 
                type="checkbox" 
                className="w-4 h-4 border-gray-300 rounded focus:ring-neonMintGreen dark:focus:ring-neonMintGreen dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
              />
            </li>
          </ul>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {sender}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {email}
          </p>
        </div>
      </div>
    </li>
  );
};

export default EmailItem;
