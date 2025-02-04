// import React from 'react';

// // Define the types for props if needed
// interface FeedbackCardProps {
//   avatar: string; // Path to avatar image
//   quotationMark: string; // Path to quotation mark image
//   name: string; // Name of the person
//   role: string; // Role of the person
//   feedback: string; // Feedback content
// }

// const FeedbackCard: React.FC<FeedbackCardProps> = ({ avatar, quotationMark, name, role, feedback }) => {
//   return (
//     <div className="bg-white p-8 rounded-3xl shadow-xl my-8 mx-2">
//       <div className="flex justify-between">
//         <div className="flex gap-4">
//           <img src={avatar} alt="Avatar" className="h-12 w-12 rounded-full" />
//           <div>
//             <h1 className="font-bold">{name}</h1>
//             <p className="text-gray-600">{role}</p>
//           </div>
//         </div>
//         <img className="h-8" src={quotationMark} alt="Quotation Mark" />
//       </div>

//       <div className="py-8">
//         <h3 className="text-lg text-gray-700">{feedback}</h3>
//       </div>
//     </div>
//   );
// };

// export default FeedbackCard;

import React from 'react';

// Define the types for props if needed
interface FeedbackCardProps {
  name: string; // Name of the person
  role: string; // Role of the person
  feedback: string; // Feedback content
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, role, feedback }) => {
  return (
    <div className="bg-black text-white p-6 rounded-xl shadow-lg flex flex-col items-center">
      {/* Star ratings */}
      <div className="flex justify-center mb-4">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-lime-500"
            >
              <path d="M12 .587l3.668 7.425 8.213 1.192-5.941 5.788 1.402 8.176L12 18.896l-7.342 3.872 1.402-8.176-5.941-5.788 8.213-1.192z" />
            </svg>
          ))}
      </div>

      {/* Feedback */}
      <p className="text-center text-gray-300 mb-6">{feedback}</p>

      {/* Author and role */}
      <div className="text-center">
        <h3 className="font-bold">{name}</h3>
        <p className="text-lime-500">{role}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;

