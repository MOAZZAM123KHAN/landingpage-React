// // // import React from 'react';
// // // import { Monitor, Palette, Megaphone, Code } from 'lucide-react';
// // // import { motion } from 'framer-motion';

// // // const services = [
// // //   {
// // //     icon: <Monitor className="w-12 h-12 text-blue-600" />,
// // //     title: 'Web Design',
// // //     description: 'Create beautiful, responsive websites that engage your audience and drive results.'
// // //   },
// // //   {
// // //     icon: <Palette className="w-12 h-12 text-blue-600" />,
// // //     title: 'Branding',
// // //     description: 'Build a strong brand identity that sets you apart from the competition.'
// // //   },
// // //   {
// // //     icon: <Megaphone className="w-12 h-12 text-blue-600" />,
// // //     title: 'Digital Marketing',
// // //     description: 'Reach your target audience and grow your business with strategic digital marketing.'
// // //   },
// // //   {
// // //     icon: <Code className="w-12 h-12 text-blue-600" />,
// // //     title: 'Development',
// // //     description: 'Custom software solutions tailored to your specific business needs.'
// // //   }
// // // ];

// // // const Services = () => {
// // //   return (
// // //     <section id="services" className="py-20 bg-white">
// // //       <div className="container mx-auto px-4">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-bold mb-4">Our Services</h2>
// // //           <p className="text-xl text-gray-600">We offer a complete range of digital services</p>
// // //         </div>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //           {services.map((service, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
// // //             >
// // //               <div className="mb-4">{service.icon}</div>
// // //               <h3 className="text-xl font-bold mb-2">{service.title}</h3>
// // //               <p className="text-gray-600">{service.description}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Services;

// // // import React from 'react';
// // // import { Monitor, Palette, Megaphone, Code } from 'lucide-react';
// // // import { motion } from 'framer-motion';

// // // const services = [
// // //   {
// // //     icon: <Monitor className="w-12 h-12 text-blue-400" />,
// // //     title: 'Web Design',
// // //     description: 'Create beautiful, responsive websites that engage your audience and drive results.'
// // //   },
// // //   {
// // //     icon: <Palette className="w-12 h-12 text-blue-400" />,
// // //     title: 'Branding',
// // //     description: 'Build a strong brand identity that sets you apart from the competition.'
// // //   },
// // //   {
// // //     icon: <Megaphone className="w-12 h-12 text-blue-400" />,
// // //     title: 'Digital Marketing',
// // //     description: 'Reach your target audience and grow your business with strategic digital marketing.'
// // //   },
// // //   {
// // //     icon: <Code className="w-12 h-12 text-blue-400" />,
// // //     title: 'Development',
// // //     description: 'Custom software solutions tailored to your specific business needs.'
// // //   }
// // // ];

// // // const Services = () => {
// // //   return (
// // //     <section id="services" className="py-20 bg-neutral-950 text-white">
// // //       <div className="container mx-auto px-4">
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl font-bold mb-4">Our Services</h2>
// // //           <p className="text-xl text-gray-300">We offer a complete range of digital services</p>
// // //         </div>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //           {services.map((service, index) => (
// // //             <motion.div
// // //               key={index}
// // //               initial={{ opacity: 0, y: 20 }}
// // //               whileInView={{ opacity: 1, y: 0 }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               className="p-6 bg-gray-800 rounded-lg hover:shadow-xl transition-shadow"
// // //             >
// // //               <div className="mb-4">{service.icon}</div>
// // //               <h3 className="text-xl font-bold mb-2">{service.title}</h3>
// // //               <p className="text-gray-300">{service.description}</p>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Services;


// // import React, { useState } from 'react';
// // import { Monitor, Palette, Megaphone, Code } from 'lucide-react';
// // import { motion } from 'framer-motion';

// // const services = [
// //   {
// //     icon: <Monitor className="w-12 h-12 text-blue-400" />,
// //     title: 'Web Design',
// //     description: 'Create beautiful, responsive websites that engage your audience and drive results.'
// //   },
// //   {
// //     icon: <Palette className="w-12 h-12 text-blue-400" />,
// //     title: 'Branding',
// //     description: 'Build a strong brand identity that sets you apart from the competition.'
// //   },
// //   {
// //     icon: <Megaphone className="w-12 h-12 text-blue-400" />,
// //     title: 'Digital Marketing',
// //     description: 'Reach your target audience and grow your business with strategic digital marketing.'
// //   },
// //   {
// //     icon: <Code className="w-12 h-12 text-blue-400" />,
// //     title: 'Development',
// //     description: 'Custom software solutions tailored to your specific business needs.'
// //   }
// // ];

// // const Services = () => {
// //   const [selectedService, setSelectedService] = useState(null);

// //   const toggleService = (index) => {
// //     setSelectedService(selectedService === index ? null : index);
// //   };

// //   return (
// //     <section id="services" className="py-20 bg-neutral-950 text-white">
// //       <div className="container mx-auto px-4">
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl font-bold mb-4">Our Services</h2>
// //           <p className="text-xl text-gray-300">We offer a complete range of digital services</p>
// //         </div>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5, delay: index * 0.1 }}
// //               onClick={() => toggleService(index)}
// //               className={`p-6 bg-gray-800 rounded-lg hover:shadow-xl transition-shadow cursor-pointer ${
// //                 selectedService === index ? 'shadow-2xl' : ''
// //               }`}
// //             >
// //               <div className="mb-4">{service.icon}</div>
// //               <h3 className="text-xl font-bold mb-2">{service.title}</h3>
// //               {selectedService === index && (
// //                 <motion.p
// //                   initial={{ opacity: 0, height: 0 }}
// //                   animate={{ opacity: 1, height: 'auto' }}
// //                   exit={{ opacity: 0, height: 0 }}
// //                   className="text-gray-300 mt-4"
// //                 >
// //                   {service.description}
// //                 </motion.p>
// //               )}
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;


// import { useState } from 'react';
// import { Monitor, Palette, Megaphone, Code } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const services = [
//   {
//     icon: <Monitor className="w-12 h-12 text-blue-400" />,
//     title: 'Web Design',
//     description: 'Create beautiful, responsive websites that engage your audience and drive results.',
//   },
//   {
//     icon: <Palette className="w-12 h-12 text-blue-400" />,
//     title: 'Branding',
//     description: 'Build a strong brand identity that sets you apart from the competition.',
//   },
//   {
//     icon: <Megaphone className="w-12 h-12 text-blue-400" />,
//     title: 'Digital Marketing',
//     description: 'Reach your target audience and grow your business with strategic digital marketing.',
//   },
//   {
//     icon: <Code className="w-12 h-12 text-blue-400" />,
//     title: 'Development',
//     description: 'Custom software solutions tailored to your specific business needs.',
//   },
// ];

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   const toggleService = (index) => {
//     setSelectedService(selectedService === index ? null : index);
//   };

//   return (
//     <section id="services" className="py-20 bg-neutral-950 text-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">Our Services</h2>
//           <p className="text-xl text-gray-300">We offer a complete range of digital services</p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               onClick={() => toggleService(index)}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className={`p-6 bg-gray-800 rounded-lg cursor-pointer ${
//                 selectedService === index ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
//               }`}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <motion.div
//                 animate={{
//                   rotate: selectedService === index ? 360 : 0,
//                 }}
//                 transition={{ duration: 0.6, type: 'spring' }}
//                 className="mb-4"
//               >
//                 {service.icon}
//               </motion.div>
//               <h3 className="text-xl font-bold mb-2">{service.title}</h3>
//               <AnimatePresence>
//                 {selectedService === index && (
//                   <motion.p
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.5, ease: 'easeInOut' }}
//                     className="text-gray-300 mt-4"
//                   >
//                     {service.description}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import { useState } from 'react';
import { Monitor, Palette, Megaphone, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    icon: <Monitor className="w-12 h-12 text-blue-400" />,
    title: 'Web Design',
    description: 'Create beautiful, responsive websites that engage your audience and drive results.',
  },
  {
    icon: <Palette className="w-12 h-12 text-blue-400" />,
    title: 'Branding',
    description: 'Build a strong brand identity that sets you apart from the competition.',
  },
  {
    icon: <Megaphone className="w-12 h-12 text-blue-400" />,
    title: 'Digital Marketing',
    description: 'Reach your target audience and grow your business with strategic digital marketing.',
  },
  {
    icon: <Code className="w-12 h-12 text-blue-400" />,
    title: 'Development',
    description: 'Custom software solutions tailored to your specific business needs.',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">We offer a complete range of digital services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onClick={() => toggleService(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 bg-gray-800 rounded-lg cursor-pointer ${
                selectedService === index ? 'shadow-2xl scale-105' : 'hover:shadow-xl'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{
                  rotate: selectedService === index ? 360 : 0,
                }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <AnimatePresence>
                {selectedService === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="text-gray-300 mt-4"
                  >
                    {service.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

