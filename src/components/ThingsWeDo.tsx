// import React from 'react';
// import deskImage from '../assets/desk-image.png'; // Adjust path based on your project structure

// const ThingsWeDo: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-8">
//       {/* Image Section */}
//       <div className="w-full md:w-1/2 p-4">
//         <img
//           src={deskImage}
//           alt="Desk Setup"
//           className="w-full h-auto object-cover rounded-md shadow-md"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="w-full md:w-1/2 p-4 text-center md:text-left">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Things we do</h2>
//         <p className="text-gray-600 italic mb-4">We exist to create</p>
//         <p className="text-gray-700 leading-relaxed mb-6">
//           Focus infographic venture business model canvas gamification ecosystem.
//           Business plan gamification user experience low hanging fruit twitter. Metrics
//           research & development market paradigm shift growth hacking disruptive user
//           experience iPad social media angel investor alpha. Social proof lean startup
//           alpha scrum project non-disclosure agreement.
//         </p>
//         <button className="px-6 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition">
//           GET IN TOUCH
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ThingsWeDo;




// import React from 'react';
// import deskImage from '../assets/desk-image.png'; // Adjust path based on your project structure

// const ThingsWeDo: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8">
//       {/* Image Section */}
//       <div className="w-full md:w-1/2 p-4">
//         <img
//           src={deskImage}
//           alt="Desk Setup"
//           className="w-full h-auto object-cover rounded-md shadow-md"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="w-full md:w-1/2 p-4 text-center md:text-left">
//         <h2 className="text-3xl font-bold mb-4">Things we do</h2>
//         <p className="italic mb-4">We exist to create</p>
//         <p className="leading-relaxed mb-6">
//           Focus infographic venture business model canvas gamification ecosystem.
//           Business plan gamification user experience low hanging fruit twitter. Metrics
//           research & development market paradigm shift growth hacking disruptive user
//           experience iPad social media angel investor alpha. Social proof lean startup
//           alpha scrum project non-disclosure agreement.
//         </p>
//         <button className="
//               inline-block px-8 py-3 border-2 border-white text-white font-semibold 
//            hover:bg-purple-600 hover:text-black transition-colors duration-300">
//           GET IN TOUCH
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ThingsWeDo;




// import React from 'react';

// const ThingsWeDo: React.FC = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8">
//       {/* Image Section */}
//       <div className="w-full md:w-1/2 p-4">
//         {/* ✅ Using Image from Public Folder */}
//         <img
//           src="/workimage/Heading (2).png"
//           alt="Desk Setup"
//           className="w-full h-auto object-cover rounded-md shadow-md"
//         />
//       </div>

//       {/* Text Section */}
//       <div className="w-full md:w-1/2 p-4 text-center md:text-left">
//         <h2 className="text-3xl font-bold mb-4">Things we do</h2>
//         <p className="italic mb-4">We exist to create</p>
//         <p className="leading-relaxed mb-6">
//           Focus infographic venture business model canvas gamification ecosystem.
//           Business plan gamification user experience low hanging fruit twitter. Metrics
//           research & development market paradigm shift growth hacking disruptive user
//           experience iPad social media angel investor alpha. Social proof lean startup
//           alpha scrum project non-disclosure agreement.
//         </p>
//         <button className="
//           inline-block px-8 py-3 border-2 border-white text-white font-semibold 
//           hover:bg-purple-600 hover:text-black transition-colors duration-300">
//           GET IN TOUCH
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ThingsWeDo;


import React from 'react';

const ThingsWeDo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#0c0718] text-[#ffffff] p-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src="/workimage/Heading (2).png"
          alt="Desk Setup"
          className="w-full h-auto object-cover rounded-md shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Things we do</h2>
        <p className="italic mb-4 text-[#c29acf]">We exist to create</p>
        <p className="leading-relaxed mb-6 text-[#c29acf]">
          Focus infographic venture business model canvas gamification ecosystem.
          Business plan gamification user experience low hanging fruit twitter. Metrics
          research & development market paradigm shift growth hacking disruptive user
          experience iPad social media angel investor alpha. Social proof lean startup
          alpha scrum project non-disclosure agreement.
        </p>
        <button className="
          inline-block px-8 py-3 border-2 border-[#ffffff] text-[#ffffff] font-semibold 
          hover:bg-[#d4a7c6] hover:text-[#0c0718] transition-colors duration-300">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default ThingsWeDo;
