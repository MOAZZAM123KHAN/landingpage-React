// import React from 'react';
// import { motion } from 'framer-motion';

// const CreativeSection = () => {
//   const scrollToPortfolio = () => {
//     const portfolioSection = document.getElementById('work');
//     if (portfolioSection) {
//       portfolioSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center gap-12">
//           <motion.div 
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="md:w-1/2"
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
//               alt="Creative workspace" 
//               className="rounded-lg shadow-xl"
//             />
//           </motion.div>
          
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="md:w-1/2 text-center md:text-left"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Creative<br />&amp; fresh
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Focus infographic venture business model canvas gamification ecosystem. 
//               Business plan gamification user experience low hanging fruit twitter. Metrics 
//               research & development market paradigm shift growth hacking disruptive 
//               user experience iPad social media angel investor alpha. Social proof lean 
//               startup alpha scrum project non-disclosure agreement.
//             </p>
//             <button 
//               onClick={scrollToPortfolio}
//               className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold 
//                        hover:bg-gray-900 hover:text-white transition-colors duration-300"
//             >
//               VIEW PORTFOLIO
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CreativeSection;   
// import React from 'react';
// import { motion } from 'framer-motion';

// const CreativeSection = () => {
//   const scrollToPortfolio = () => {
//     const portfolioSection = document.getElementById('work');
//     if (portfolioSection) {
//       portfolioSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToServices = () => {
//     const servicesSection = document.getElementById('services');
//     if (servicesSection) {
//       servicesSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Original Section */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="md:w-1/2"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
//                 alt="Creative workspace" 
//                 className="rounded-lg shadow-xl"
//               />
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="md:w-1/2 text-center md:text-left"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Creative<br />&amp; fresh
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Focus infographic venture business model canvas gamification ecosystem. 
//                 Business plan gamification user experience low hanging fruit twitter. Metrics 
//                 research & development market paradigm shift growth hacking disruptive 
//                 user experience iPad social media angel investor alpha. Social proof lean 
//                 startup alpha scrum project non-disclosure agreement.
//               </p>
//               <button 
//                 onClick={scrollToPortfolio}
//                 className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold 
//                          hover:bg-gray-900 hover:text-white transition-colors duration-300"
//               >
//                 VIEW PORTFOLIO
//               </button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* New Section */}
//       <section id="services" className="py-24 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="md:w-1/2 text-center md:text-left"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Hip<br />&amp; Funky
//               </h2>
//               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//                 Focus infographic venture business model canvas gamification ecosystem. 
//                 Business plan gamification user experience low hanging fruit twitter. Metrics 
//                 research & development market paradigm shift growth hacking disruptive 
//                 user experience iPad social media angel investor alpha. Social proof lean 
//                 startup alpha scrum project non-disclosure agreement.
//               </p>
//               <button 
//                 onClick={scrollToServices}
//                 className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold 
//                          hover:bg-gray-900 hover:text-white transition-colors duration-300"
//               >
//                 OUR SERVICES
//               </button>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="md:w-1/2"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
//                 alt="Hip & Funky workspace" 
//                 className="rounded-lg shadow-xl"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CreativeSection;


import React from 'react';
import { motion } from 'framer-motion';

const CreativeSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('work');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Original Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 relative"
            >
                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-gradient-to-br from-black via-purple-600 to-black -z-10 transform scale-105"></div>

              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                alt="Creative workspace"
                // className="rounded-lg shadow-xl"
                className="rounded-lg shadow-xl transform group-hover:rotate-3  transition-transform duration-5000 ease-in-out"

              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creative<br />&amp; fresh
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Focus infographic venture business model canvas gamification ecosystem.
                Business plan gamification user experience low hanging fruit twitter. Metrics
                research & development market paradigm shift growth hacking disruptive
                user experience iPad social media angel investor alpha. Social proof lean
                startup alpha scrum project non-disclosure agreement.
              </p>
              <button
                onClick={scrollToPortfolio}
              //   className="inline-block px-8 py-3 border-2 border-white text-white font-semibold 
              //            hover:bg-white hover:text-black transition-colors duration-300"
              // >
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold 
           hover:bg-purple-600 hover:text-black transition-colors duration-300"
               >
                VIEW PORTFOLIO
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section id="services" className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 text-center md:text-left"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hip<br />&amp; Funky
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Focus infographic venture business model canvas gamification ecosystem.
                Business plan gamification user experience low hanging fruit twitter. Metrics
                research & development market paradigm shift growth hacking disruptive
                user experience iPad social media angel investor alpha. Social proof lean
                startup alpha scrum project non-disclosure agreement.
              </p>
              <button
                onClick={scrollToServices}
              //   className="inline-block px-8 py-3 border-2 border-white text-white font-semibold 
              //            hover:bg-white hover:text-black transition-colors duration-300"
              // >
              className="inline-block px-8 py-3 border-2 border-white text-white font-semibold 
           hover:bg-purple-600 hover:text-black transition-colors duration-300">
                OUR SERVICES
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
                alt="Hip & Funky workspace"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreativeSection;

