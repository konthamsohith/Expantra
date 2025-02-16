import React from 'react';

const projects = [
  {
    title: 'B2B Fashion Platform',
    category: 'Web Development',
    image: 'https://i.im.ge/2025/02/02/HSYqNq.image.png',
  },
  {
    title: 'Youtube Thumbnail',
    category: 'Thumbnail Creation',
    image: 'https://i.im.ge/2025/02/02/HSbxUf.image.png',
  },
  {
    title: 'AI Wellness Companion PPT',
    category: 'PPT Presentation',
    image: 'https://i.im.ge/2025/02/02/HSb3Ym.image.png',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-custom-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center hero-title">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-2">
            Our Project Gallery
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="mt-4 text-xl text-gray-600">
            Check out some of our recent projects
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-item group rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="portfolio-overlay absolute inset-0 flex flex-col justify-end p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-50">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-base font-medium rounded-full text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}