// import React from 'react';
// import { motion } from 'framer-motion';

// const projects = [
//   {
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
//     title: "Brand Strategy",
//     category: "Marketing"
//   },
//   {
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
//     title: "Web Platform",
//     category: "Development"
//   },
//   {
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
//     title: "Mobile App",
//     category: "Design"
//   }
// ];

// const Work = () => {
//   return (
//     <section id="work" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
//           <p className="text-xl text-gray-600">Check out some of our recent projects</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="group relative overflow-hidden rounded-lg"
//             >
//               <img 
//                 src={project.image} 
//                 alt={project.title}
//                 className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 p-6">
//                   <h3 className="text-white text-xl font-bold">{project.title}</h3>
//                   <p className="text-gray-300">{project.category}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    title: "Brand Strategy",
    category: "Marketing"
  },
  {
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    title: "Web Platform",
    category: "Development"
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    title: "Mobile App",
    category: "Design"
  }
];

const Work = () => {
  return (
    <section id="work" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-xl text-gray-400">Check out some of our recent projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
