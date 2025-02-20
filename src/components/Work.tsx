// import React from 'react';
// import { ArrowDownLeft } from 'lucide-react';

// // TypeScript interfaces
// interface WorkItem {
//   id: string;
//   title: string;
//   category: string;
//   imageUrl: string;
// }

// interface Category {
//   id: string;
//   name: string;
// }

// const WorkShowcase = () => {
//   // Categories
//   const categories: Category[] = [
//     { id: 'all', name: 'ALL' },
//     { id: 'branding', name: 'BRANDING' },
//     { id: 'development', name: 'DEVELOPMENT' },
//     { id: 'design', name: 'GRAPHIC DESIGN' },
//     { id: 'web', name: 'WEB DESIGN' }
//   ];

//   // Work Items (Using local images from `public/workimage`)
//   const workItems: WorkItem[] = [
//     {
//       id: '1',
//       title: 'Savaball 2025',
//       category: 'BRANDING',
//       imageUrl: '/workimage/Rooftop  Beer  Free parking (5).png '
//     },
//     {
//       id: '2',
//       title: 'NIT Event Calendar App',
//       category: 'DEVELOPMENT',
//       imageUrl: '/workimage/Ladie’S (2).png'
//     },
//     {
//       id: '3',
//       title: 'NIT Event Calendar App',
//       category: 'DEVELOPMENT',
//       imageUrl: '/workimage/Rooftop  Beer  Free parking (6).png'
//     },
//     {
//       id: '4',
//       title: 'NIT Event Calendar App',
//       category: 'DEVELOPMENT',
//       imageUrl: '/workimage/OFFLINE DELIVERY  (1).png'
//     },
//     {
//       id: '5',
//       title: 'NIT Event Calendar App',
//       category: 'DEVELOPMENT',
//       imageUrl: 'Hero/pexels-yankrukov-8818723.jpg'
//     },
//     {
//       id: '6',
//       title: 'NIT Event Calendar App',
//       category: 'DEVELOPMENT',
//       imageUrl: 'Hero/pexels-elevate-1267320.jpg'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#0c0718] text-[#ffffff] p-8">
//       {/* Header */}
//       <div className="mb-16 relative flex items-center justify-center h-[800px]">
//         <div 
//           className="absolute inset-0 bg-cover bg-center opacity-50" 
//           style={{ 
//             backgroundImage: "url('/workimage/workimage.png')", 
//             backgroundSize: "contain", 
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center"
//           }}
//         ></div>
//       </div>

//       {/* Additional Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center mt-16">
//         <p className="text-xl max-w-md">
//           IMMERSE YOURSELF IN THE JOURNEY OF RECENT ARTISTIC PURSUITS OF GENERAL CONDITION STUDIO
//         </p>
//         <div className="flex flex-col items-end">
//           <h2 className="text-5xl font-bold text-right">
//             Explore a collection of forty-plus featured works.
//           </h2>
//           <ArrowDownLeft className="text-[#d4a7c6] mt-4 w-10 h-10" />
//         </div>
//       </div>

//       {/* Categories */}
//       <div className="flex flex-wrap gap-2 mb-16">
//         {categories.map((category) => (
//           <button
//             key={category.id}
//             className="px-4 py-2 rounded-full border border-[#d4a7c6] hover:bg-[#d4a7c6] hover:text-black transition-colors"
//           >
//             {category.name}
//           </button>
//         ))}
//       </div>

      

//       {/* Work Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {workItems.map((item) => (
//           <div key={item.id} className="group relative overflow-hidden rounded-lg">
//             <img
//               src={item.imageUrl}
//               alt={item.title}
//               className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0c0718] to-transparent">
//               <div className="flex justify-between items-end">
//                 <div>
//                   <h3 className="text-xl font-bold">{item.title}</h3>
//                   <p className="text-sm opacity-75">{item.category}</p>
//                 </div>
//                 <ArrowDownLeft className="text-[#d4a7c6] opacity-0 group-hover:opacity-100 transition-opacity" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WorkShowcase;


import React from 'react';
import { ArrowDownLeft } from 'lucide-react';

// TypeScript interfaces
interface WorkItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface Category {
  id: string;
  name: string;
}

const WorkShowcase = () => {
  // Categories
  const categories: Category[] = [
    { id: 'all', name: 'ALL' },
    { id: 'branding', name: 'BRANDING' },
    { id: 'development', name: 'DEVELOPMENT' },
    { id: 'design', name: 'GRAPHIC DESIGN' },
    { id: 'web', name: 'WEB DESIGN' }
  ];

  // Work Items
  const workItems: WorkItem[] = [
    {
      id: '1',
      title: 'Savaball 2025',
      category: 'BRANDING',
      imageUrl: '/workimage/Rooftop  Beer  Free parking (5).png'
    },
    {
      id: '2',
      title: 'NIT Event Calendar App',
      category: 'DEVELOPMENT',
      imageUrl: '/workimage/Ladie’S (2).png'
    },
    {
      id: '3',
      title: 'NIT Event Calendar App',
      category: 'DEVELOPMENT',
      imageUrl: '/workimage/Rooftop  Beer  Free parking (6).png'
    },
    {
      id: '4',
      title: 'NIT Event Calendar App',
      category: 'DEVELOPMENT',
      imageUrl: '/workimage/OFFLINE DELIVERY  (1).png'
    },
    {
      id: '5',
      title: 'NIT Event Calendar App',
      category: 'DEVELOPMENT',
      imageUrl: 'Hero/pexels-yankrukov-8818723.jpg'
    },
    {
      id: '6',
      title: 'NIT Event Calendar App',
      category: 'DEVELOPMENT',
      imageUrl: 'Hero/pexels-elevate-1267320.jpg'
    }
  ];

  return (
    <div id="portfolio" className="min-h-screen bg-[#0c0718] text-[#ffffff] p-8">
      {/* Header */}
      <div className="mb-16 relative flex items-center justify-center h-[800px]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50" 
          style={{ 
            backgroundImage: "url('/workimage/workimage.png')", 
            backgroundSize: "contain", 
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        ></div>
      </div>

      {/* Additional Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16">
        <p className="text-xl max-w-md">
          IMMERSE YOURSELF IN THE JOURNEY OF RECENT ARTISTIC PURSUITS OF GENERAL CONDITION STUDIO
        </p>
        <div className="flex flex-col items-end">
          <h2 className="text-5xl font-bold text-right">
            Explore a collection of forty-plus featured works.
          </h2>
          <ArrowDownLeft className="text-[#d4a7c6] mt-4 w-10 h-10" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-16">
        {categories.map((category) => (
          <button
            key={category.id}
            className="px-4 py-2 rounded-full border border-[#d4a7c6] hover:bg-[#d4a7c6] hover:text-black transition-colors"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0c0718] to-transparent">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm opacity-75">{item.category}</p>
                </div>
                <ArrowDownLeft className="text-[#d4a7c6] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;

