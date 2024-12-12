// Spam.js
import React, { useState, useEffect } from 'react';

const Spam = () => {
  const [spamEmails, setSpamEmails] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    // Replace with your actual API endpoint
    const fetchSpamEmails = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //   spam emails api
        if (!response.ok) {
          throw new Error('Failed to fetch spam emails.');
        }
        const data = await response.json();
        
        // Format the data to match the structure we need
        const formattedEmails = data.map(user => ({
          id: user.id,
          sender: user.name,
          email: user.email
        }));

        setSpamEmails(formattedEmails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpamEmails();
  }, []);

  if (loading) return <p>Loading spam emails...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-5/6 sm:ml-64">
      <div className="p-4 mt-14">
        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* {spamEmails.map((email) => (
            <SpamItem 
              key={email.id} 
              sender={email.sender} 
              email={email.email} 
            />
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Spam;
