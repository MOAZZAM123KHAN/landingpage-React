// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface SliderControlsProps {
//   onPrevClick: () => void;
//   onNextClick: () => void;
// }

// const SliderControls: React.FC<SliderControlsProps> = ({ onPrevClick, onNextClick }) => {
//   return (
//     <>
//       <button 
//         onClick={onPrevClick}
//         className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-10"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-6 h-6 text-white" />
//       </button>
//       <button 
//         onClick={onNextClick}
//         className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-10"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-6 h-6 text-white" />
//       </button>
//     </>
//   );
// };

// export default SliderControls;

import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  autoScrollInterval?: number; // Optional prop for interval duration
}

const SliderControls: React.FC<SliderControlsProps> = ({ onPrevClick, onNextClick, autoScrollInterval = 5000 }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onNextClick();
    }, autoScrollInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [onNextClick, autoScrollInterval]);

  return (
    <>
      <button 
        onClick={onPrevClick}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={onNextClick}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default SliderControls;
