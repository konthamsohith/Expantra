import React from 'react';
import { ArrowRight, Code, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-custom-bg overflow-hidden">
      {/* Logo in top left */}
      <div className="absolute top-8 left-8 z-50 flex items-center space-x-3">
        <Code className="h-10 w-10 text-indigo-600" />
        <span className="text-xl font-bold text-gray-900">Expantra</span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-custom-bg sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-28 xl:mt-36">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-[111px] font-lavaProGrunge tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl flex items-center mt-16">
                <span className="font-lavaProGrunge uppercase">EXPANTRA</span>
              </h1>

              <h1 className="text-14 font-leagueSpartan tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-indigo-600">Digital Service Agency</span>
              </h1>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                "We are a creative team helping brands grow with expert digital solutions."
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                {/* Contact Us Button */}
                <div className="rounded-md shadow-md hover:shadow-[5px_5px_0px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:scale-105">
                  <a 
                    href="#contact" 
                    className="w-full flex items-center justify-center px-8 py-3 border-0 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 focus:outline-none"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>

                {/* Brochure Button */}
                <div className="rounded-md shadow-md hover:shadow-[5px_5px_0px_rgba(0,0,0,0.3)] transition-all duration-300 transform hover:scale-105">
                  <a 
                    href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:649851ce-b6b5-42e9-a543-b7cd70c3a26b" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full flex items-center justify-center px-8 py-3 border-0 text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 md:py-4 md:text-lg md:px-10 focus:outline-none"
                  >
                    Brochure
                    <Download className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-10">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://i.im.ge/2025/01/31/H2mGhL.image.png"
          alt="Team working on digital projects"
        />
      </div>
    </div>
  );
}
