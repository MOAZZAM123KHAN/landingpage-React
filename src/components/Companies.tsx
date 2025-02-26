// // // // import React from 'react';

// // // // // Importing logos with proper type declaration (adjust paths if necessary)
// // // // import companyLogo1 from '../assets/companyLogo1.png';
// // // // import companyLogo2 from '../assets/companyLogo2.png';
// // // // import companyLogo3 from '../assets/companyLogo3.png';
// // // // import companyLogo4 from '../assets/companyLogo4.png';

// // // // const Companies: React.FC = () => {
// // // //   return (
// // // //     <div className="w-full bg-neutral-950 py-[50px]">
// // // //       <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
// // // //         {/* Title */}
// // // //         <h1 className="text-center text-4xl font-bold text-[rgb(244,246,248)]">
// // // //           Trusted by over 25,000 teams around the world.
// // // //         </h1>
// // // //         <p className="text-center  leading-relaxed mb-5">
// // // //           Leading companies use the same courses to help employees keep their skills 
// // // //         </p>

// // // //         {/* Logo grid */}
// // // //         <div className="flex justify-center py-8 md:gap-8">
// // // //           <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
// // // //             <img src={companyLogo1} alt="Company 1 Logo" className="h-16 object-contain" />
// // // //             <img src={companyLogo2} alt="Company 2 Logo" className="h-16 object-contain" />
// // // //             <img src={companyLogo3} alt="Company 3 Logo" className="h-16 object-contain" />
// // // //             <img src={companyLogo4} alt="Company 4 Logo" className="h-16 object-contain" />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //     <div/>
// // // //   );
// // // // };

// // // // export default Companies;



// // // import React from 'react';

// // // // Importing logos with proper type declaration (adjust paths if necessary)
// // // import companyLogo1 from '../assets/companyLogo1.png';
// // // import companyLogo2 from '../assets/companyLogo2.png';
// // // import companyLogo3 from '../assets/companyLogo3.png';
// // // import companyLogo4 from '../assets/companyLogo4.png';

// // // const Companies: React.FC = () => {
// // //   return (
// // //     <div className="w-full bg-neutral-950 py-[50px]">
// // //       <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
// // //         {/* Title */}
// // //         <h1 className="text-center text-4xl font-bold text-[rgb(244,246,248)]">
// // //           Trusted by over 25,000 teams around the world.
// // //         </h1>
// // //         <p className="text-center leading-relaxed mb-5">
// // //           Leading companies use the same courses to help employees keep their skills
// // //         </p>

// // //         {/* Logo grid */}
// // //         <div className="flex justify-center py-8 md:gap-8">
// // //           <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
// // //             <img src={companyLogo1} alt="Company 1 Logo" className="h-16 object-contain" />
// // //             <img src={companyLogo2} alt="Company 2 Logo" className="h-16 object-contain" />
// // //             <img src={companyLogo3} alt="Company 3 Logo" className="h-16 object-contain" />
// // //             <img src={companyLogo4} alt="Company 4 Logo" className="h-16 object-contain" />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Companies;  

// // import React from 'react';

// // const Companies: React.FC = () => {
// //   return (
// //     <div className="w-full bg-neutral-950 py-[50px]">
// //       <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
// //         {/* Title */}
// //         <h1 className="text-center text-4xl font-bold text-[rgb(244,246,248)]">
// //           Trusted by over 25,000 teams around the world.
// //         </h1>
// //         <p className="text-center leading-relaxed mb-5">
// //           Leading companies use the same courses to help employees keep their skills
// //         </p>

// //         {/* Single Image */}
// //         <div className="mb-16 relative flex items-center justify-center h-[800px] w-[1000px]" >
// //           <img src="/workimage/Untitled design (29).png" alt="Company Logos" className="h-16 object-contain" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Companies;


// import React from 'react';

// const Companies: React.FC = () => {
//   return (
//     <div className="w-full h-[500px] bg-neutral-950 flex items-center justify-center">
//       <img 
//         src="/workimage/Untitled design (29).png" 
//         alt="Company Logos" 
//         className="w-[1400px] h-[300px] object-cover" 
//       />
//     </div>
//   );
// };

// export default Companies;

import React from 'react';

const Companies: React.FC = () => {
  return (
    <div className="w-full h-[500px] bg-[#0c0718] flex items-center justify-center p-6">
      <div className="w-[1400px] h-[300px] shadow-lg rounded-lg overflow-hidden">
        <img 
          src="/workimage/Untitled design (29).png" 
          alt="Company Logos" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Companies;

