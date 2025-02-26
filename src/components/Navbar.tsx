// // import React, { useState, useEffect } from 'react';
// // import { Menu, X } from 'lucide-react';
// // import Logo from './Logo';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 0);
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   return (
// //     <nav className={`fixed w-full z-50 transition-all duration-300 ${
// //       isScrolled ? 'bg-black shadow-lg py-4' : 'bg-transparent py-6'
// //     }`}>
// //       <div className="container mx-auto px-4">
// //         <div className="flex justify-between items-center">
// //           <Logo />
          
// //           <div className="hidden md:flex space-x-8">
// //             {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
// //               <a
// //                 key={item}
// //                 href={`#${item.toLowerCase()}`}
// //                 className={`transition-colors ${
// //                   isScrolled ? 'text-white hover:text-blue-600' : 'text-white hover:text-white/80'
// //                 }`}
// //               >
// //                 {item}
// //               </a>
// //             ))}
// //           </div>

// //           <button 
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="md:hidden"
// //           >
// //             {isOpen ? (
// //               <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
// //             ) : (
// //               <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
// //             )}
// //           </button>
// //         </div>

// //         {/* Mobile menu */}
// //         {isOpen && (
// //           <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
// //             {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
// //               <a
// //                 key={item}
// //                 href={`#${item.toLowerCase()}`}
// //                 className="block px-4 py-2 text-white hover:bg-gray-100"
// //                 onClick={() => setIsOpen(false)}
// //               >
// //                 {item}
// //               </a>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import Logo from './Logo';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-[#0c0718] shadow-lg py-4' : 'bg-transparent py-6'
//     }`}>
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Logo />
          
//           <div className="hidden md:flex space-x-8">
//             {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className={`transition-colors ${
//                   isScrolled ? 'text-[#ffffff] hover:text-[#d4a7c6]' : 'text-[#ffffff] hover:text-[#d4a7c6]'
//                 }`}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden"
//           >
//             {isOpen ? (
//               <X className="text-[#ffffff]" />
//             ) : (
//               <Menu className="text-[#ffffff]" />
//             )}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-[#0c0718] shadow-lg py-4">
//             {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="block px-4 py-2 text-[#ffffff] hover:text-[#d4a7c6]"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0c0718] shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80} // Adjust to prevent navbar overlap
                className="cursor-pointer transition-colors text-[#ffffff] hover:text-[#d4a7c6]"
              >
                {item}
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="text-[#ffffff]" />
            ) : (
              <Menu className="text-[#ffffff]" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0c0718] shadow-lg py-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                className="block px-4 py-2 text-[#ffffff] hover:text-[#d4a7c6]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
