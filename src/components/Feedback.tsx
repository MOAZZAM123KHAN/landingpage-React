// // // import React from 'react';
// // // import Slider from 'react-slick';
// // // import FeedbackCard from './FeedbackCard';
// // // import { feedbackData } from '../data/feedbackData'; // Import feedback data

// // // const Feedback: React.FC = () => {
// // //   const sliderSettings = {
// // //     dots: true,
// // //     infinite: false,
// // //     speed: 500,
// // //     slidesToShow: 2,
// // //     slidesToScroll: 1,
// // //     responsive: [
// // //       {
// // //         breakpoint: 1024,
// // //         settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
// // //       },
// // //       {
// // //         breakpoint: 600,
// // //         settings: { slidesToShow: 2, slidesToScroll: 2, dots: true },
// // //       },
// // //       {
// // //         breakpoint: 480,
// // //         settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
// // //       },
// // //     ],
// // //   };

// // //   return (
// // //     <div className="w-full bg-white py-32">
// // //       <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
// // //         <div className="py-4">
// // //           <h1 className="py-3 text-3xl font-bold">
// // //             Students' <span className="text-[#20B486]">Feedback</span>
// // //           </h1>
// // //           <p className="text-[#6D737A]">Various versions have evolved over the years, sometimes by accident.</p>
// // //         </div>

// // //         <Slider {...sliderSettings}>
// // //           {feedbackData.map((data, index) => (
// // //             <FeedbackCard
// // //               key={index}
// // //               avatar={data.avatar}
// // //               quotationMark={data.quotationMark} 
// // //               name={data.name}
// // //               role={data.role}
// // //               feedback={data.feedback}
// // //             />
// // //           ))}
// // //         </Slider>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Feedback;







// // import React from 'react';
// // import Slider from 'react-slick';
// // import FeedbackCard from './FeedbackCard';
// // import { feedbackData } from '../data/feedbackData'; // Import feedback data

// // const Feedback: React.FC = () => {
// //   const sliderSettings = {
// //     dots: true,
// //     infinite: false,
// //     speed: 500,
// //     slidesToShow: 2,
// //     slidesToScroll: 1,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: { slidesToShow: 2, slidesToScroll: 2, dots: true },
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="w-full bg-black py-32">
// //       <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
// //         <div className="py-4">
// //           <h1 className="py-3 text-3xl font-bold text-white">
// //             Students' <span className="text-[#20B486]">Feedback</span>
// //           </h1>
// //           <p className="text-gray-400">
// //             Various versions have evolved over the years, sometimes by accident.
// //           </p>
// //         </div>

// //         <Slider {...sliderSettings}>
// //           {feedbackData.map((data, index) => (
// //             <FeedbackCard
// //               key={index}
// //               avatar={data.avatar}
// //               quotationMark={data.quotationMark}
// //               name={data.name}
// //               role={data.role}
// //               feedback={data.feedback}
// //             />
// //           ))}
// //         </Slider>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feedback;

// import React from 'react';
// import Slider from 'react-slick';
// import FeedbackCard from './FeedbackCard';
// import { feedbackData } from '../data/feedbackData'; // Import feedback data

// const Feedback: React.FC = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
//       },
//     ],
//   };

//   return (
//     <div className="w-full bg-black py-32">
//       <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
//         <div className="py-4 text-center">
//           <h1 className="py-3 text-3xl font-bold text-white">
//             Students' <span className="text-[#20B486]">Feedback</span>
//           </h1>
//           <p className="text-gray-400">
//             Various versions have evolved over the years, sometimes by accident.
//           </p>
//         </div>

//         <Slider {...sliderSettings}>
//           {feedbackData.map((data, index) => (
//             <FeedbackCard
//               key={index}
//               name={data.name}
//               role={data.role}
//               feedback={data.feedback}
//             />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Feedback;


import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import FeedbackCard from './FeedbackCard';
import { feedbackData } from '../data/feedbackData'; // Import feedback data

const Feedback: React.FC = () => {
  // Create a ref to control the slider
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true, // Allow infinite scrolling
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2, dots: true },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: true },
      },
    ],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Automatically scroll to the next slide
      }
    }, 3000); // Auto-scroll every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black py-32">
      <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold text-white">
            Students' <span className="text-[#20B486]">Feedback</span>
          </h1>
          <p className="text-gray-400">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>

        {/* Slider with ref */}
        <Slider {...sliderSettings} ref={sliderRef}>
          {feedbackData.map((data, index) => (
            <FeedbackCard
              key={index}
              name={data.name}
              role={data.role}
              feedback={data.feedback}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;



