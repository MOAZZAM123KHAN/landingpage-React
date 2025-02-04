export interface Course {
    id: number;              // Unique identifier for the course
    title: string;           // Course title
    description: string;     // Short description
    duration: string;        // Course duration
    price: number;           // Price of the course
    image: string;           // Course thumbnail/image path
  }
  
  export const courses: Course[] = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn the fundamentals of React and start building dynamic web applications.',
      duration: '8 weeks',
      price: 199,
      image: '/assets/react-course.jpg',
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      description: 'Deep dive into JavaScript concepts and build advanced projects.',
      duration: '6 weeks',
      price: 149,
      image: '/assets/js-course.jpg',
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      description: 'Master the art of designing user-friendly and visually appealing interfaces.',
      duration: '4 weeks',
      price: 99,
      image: '/assets/ui-ux-course.jpg',
    },
  ];
  