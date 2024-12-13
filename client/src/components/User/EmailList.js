// import React, { useState, useEffect } from 'react';
// import EmailItem from './EmailItem';

// const EmailList = () => {
//   const [emails, setEmails] = useState([]); // State to hold the email data
//   const [loading, setLoading] = useState(true); // State to handle the loading state
//   const [error, setError] = useState(null); // State to handle any errors

//   useEffect(() => {
//     // Replace this URL with your actual API endpoint
//     const fetchEmails = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
        
      
//         const formattedEmails = data.map(user => ({
//           id: user.id,
//           sender: user.name,
//           email: user.email
//         }));

//         setEmails(formattedEmails);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEmails();
//   }, []);

//   if (loading) return <p>Loading emails...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="w-5/6 sm:ml-64">
//       <div className="p-4 mt-14">
//         <ul className="w-full divide-y divide-gray-200 dark:divide-gray-700">
//           {emails.map((email) => (
//             <EmailItem 
//               key={email.id} 
//               sender={email.sender} 
//               email={email.email} 
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default EmailList;
