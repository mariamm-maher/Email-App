import React, { useState, useEffect } from 'react';
import StarredItem from './StarredItem';

const Starred = () => {
  const [starredEmails, setStarredEmails] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchStarredEmails = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // starred emails api
        if (!response.ok) {
          throw new Error('Failed to fetch starred emails.');
        }
        const data = await response.json();
        
     
        const formattedEmails = data.map(user => ({
          id: user.id,
          sender: user.name,
          email: user.email
        }));

        setStarredEmails(formattedEmails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStarredEmails();
  }, []);

  if (loading) return <p>Loading starred emails...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-5/6 sm:ml-64">
      <div className="p-4 mt-14">
        <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
          {/* {starredEmails.map((email) => (
            <StarredItem 
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

export default Starred;
