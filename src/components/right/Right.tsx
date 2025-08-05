import React from "react";

const experiences = [
  {
    title: "Full Stack Developer (Contract)",
    company: "Climather",
    duration: "February 2025 to July 2025",
    details: [
      "Contract-Based Role: Contributed as a full stack developer on a project basis, delivering key features within agreed timelines.",
      "Built Entire Frontend UI: Designed and developed a fully responsive and user-friendly interface for the web application using Next.js, Tailwind CSS, and TypeScript.",
      "Implemented Payment System: Integrated Razorpay for seamless online transactions and set up invoicing functionality via email.",
      "Database Integration: Worked with Supabase for authentication, real-time data handling, and storage, ensuring secure and scalable data management.",
      "Added Cloudflare Turnstile: Integrated Cloudflare Turnstile as a CAPTCHA alternative to enhance security and prevent bot activity.",
    ],
  },
  {
    title: "MERN",
    company: "Engineer's Cradle",
    duration: "August 2024 to Nov 2024",
    details: [
      "Collaborative Startup Experience: Worked closely with designers and developers in a fast-paced startup environment, enhancing cross-functional communication.",
      "Developed with Next.js, TypeScript, and Tailwind CSS: Created a well-organized file structure with reusable components and optimized code for scalability.",
      "Designed and implemented a fully responsive UI for a key company product, improving user experience across devices by leveraging modern frontend technologies and best practices.",
    ],
  },
  {
    title: "Frontend Developer [Intern]",
    company: "Predrag System",
    duration: "4 months",
    details: [
      "Designed and implemented a fully responsive UI for Evogym, enhancing user experience across all devices by utilizing modern frontend technologies.",
      "Collaborated closely with the design team to transform wireframes and prototypes into a sleek, intuitive user interface, resulting in a 25% increase in user engagement.",
      "Integrated dynamic features using React, ensuring seamless interaction for users and providing a solid foundation for future feature expansions.",
    ],
  },
  {
    title: "Frontend Developer [runner-up]",
    company: "Tryp.com",
    duration: "2 weeks",
    details: [
      "Developed a comprehensive Booking Dashboard using TypeScript, incorporating key features like customer name, email, source, status, and purchase ID tracking.",
      "Implemented pagination controls with previous and next buttons, enhancing navigation and improving the user experience for managing large datasets.",
      "Designed the UI with a focus on usability, making it easy for users to view and manage booking information efficiently.",
    ],
  },
];

const Right = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto h-full overflow-y-auto px-2 lg:px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 playfair-display">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline vertical line - positioned to align with dots */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

        <div className="space-y-8 pb-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-start">
              {/* Timeline dot - perfectly centered on the line */}
              <div className="absolute left-4 top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>

              {/* Content container */}
              <div className="ml-16 flex-1">
                {/* Header section */}
                <div className="mb-3">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-black">
                      {exp.title}
                    </h3>
                    <span className="text-gray-500">•</span>
                    <span className="text-lg text-blue-600 font-medium">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    {exp.duration}
                  </p>
                </div>

                {/* Details list */}
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed inter">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Right;