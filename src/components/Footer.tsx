import React, { useState } from 'react';
import { Code, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const services = [
  { name: 'Graphic Designing', value: 'app' },
  { name: 'Website Development', value: 'web' },
  { name: 'Digital Marketing', value: 'marketing' },
  { name: 'Video Editing', value: 'video' },
  { name: 'PPT Creation', value: 'design' },
  { name: 'Thumbnail Creation', value: 'social' }
];

export default function Footer() {
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });

  const handleServiceClick = (serviceValue: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      const serviceSelect = document.getElementById('service') as HTMLSelectElement;
      if (serviceSelect) {
        serviceSelect.value = serviceValue;
        serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, 800);
  };

  const handleLegalClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setMessagePosition({
      x: rect.left,
      y: rect.bottom + window.scrollY
    });
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#e8ded8] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold">Expantra</span>
            </div>
            <p className="text-gray-600">
              Transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.value}>
                  <button
                    onClick={() => handleServiceClick(service.value)}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleSmoothScroll(e, 'portfolio')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Our Project Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  onClick={(e) => handleSmoothScroll(e, 'process')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => handleSmoothScroll(e, 'testimonials')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  What Our Clients Say
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Reach out to us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={handleLegalClick} className="text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={handleLegalClick} className="text-gray-600 hover:text-gray-900 transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={handleLegalClick} className="text-gray-600 hover:text-gray-900 transition-colors">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Expantra. All rights reserved.</p>
        </div>
      </div>

      {showMessage && (
        <div
          className="fixed bg-black text-white px-4 py-2 rounded shadow-lg z-50 transition-opacity duration-300"
          style={{
            left: messagePosition.x,
            top: messagePosition.y,
            transform: 'translateY(8px)',
          }}
        >
          Coming soon!
        </div>
      )}
    </footer>
  );
}