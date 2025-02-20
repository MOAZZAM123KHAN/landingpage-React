// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     state: '',
//     projectType: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section id="contact" className="py-20 bg-white flex items-center justify-center">
//       <div className="max-w-3xl w-full px-6 md:px-0">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
//           <p className="text-xl text-gray-600">Let’s discuss your next project</p>
//         </div>
//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="bg-gray-50 shadow-md rounded-lg p-8 space-y-6"
//         >
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="projectType"
//               placeholder="Project Type"
//               value={formData.projectType}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             />
//           </div>
//           <div>
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
//           >
//             Send Message
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//     state: '',
//     projectType: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent form from reloading the page

//     emailjs
//       .send(
//         'your_service_id', // Replace with your EmailJS Service ID
//         'your_template_id', // Replace with your EmailJS Template ID
//         formData, // Pass the form data
//         'your_user_id' // Replace with your EmailJS User ID
//       )
//       .then(
//         (response) => {
//           alert('Message sent successfully!');
//           console.log('Email sent successfully:', response.status, response.text);
//           setFormData({ name: '', email: '', state: '', projectType: '', message: '' }); // Reset form
//         },
//         (error) => {
//           alert('Failed to send the message. Please try again.');
//           console.error('Email sending error:', error);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-20 bg-white flex items-center justify-center">
//       <div className="max-w-3xl w-full px-6 md:px-0">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
//           <p className="text-xl text-gray-600">Let’s discuss your next project</p>
//         </div>
//         <motion.form
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           onSubmit={handleSubmit} // Attach the submit handler
//           className="bg-gray-50 shadow-md rounded-lg p-8 space-y-6"
//         >
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={formData.state}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               name="projectType"
//               placeholder="Project Type"
//               value={formData.projectType}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             />
//           </div>
//           <div>
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={4}
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//               required
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
//           >
//             Send Message
//           </button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    state: '',
    projectType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#0c0718] flex items-center justify-center">
      <div className="max-w-3xl w-full px-6 md:px-0">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#ffffff] mb-4">Get in Touch</h2>
          <p className="text-xl text-[#d4a7c6]">Let’s discuss your next project</p>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1227] shadow-md rounded-lg p-8 space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d4a7c6] rounded-lg bg-transparent text-[#ffffff] placeholder-[#d4a7c6] focus:outline-none focus:ring-2 focus:ring-[#d4a7c6]"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d4a7c6] rounded-lg bg-transparent text-[#ffffff] placeholder-[#d4a7c6] focus:outline-none focus:ring-2 focus:ring-[#d4a7c6]"
            />
          </div>
          <div>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d4a7c6] rounded-lg bg-transparent text-[#ffffff] placeholder-[#d4a7c6] focus:outline-none focus:ring-2 focus:ring-[#d4a7c6]"
            />
          </div>
          <div>
            <input
              type="text"
              name="projectType"
              placeholder="Project Type"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d4a7c6] rounded-lg bg-transparent text-[#ffffff] placeholder-[#d4a7c6] focus:outline-none focus:ring-2 focus:ring-[#d4a7c6]"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#d4a7c6] rounded-lg bg-transparent text-[#ffffff] placeholder-[#d4a7c6] focus:outline-none focus:ring-2 focus:ring-[#d4a7c6]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#d4a7c6] text-[#0c0718] px-6 py-3 rounded-full font-medium hover:bg-[#ffffff] hover:text-[#0c0718] transition-colors"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

