{/* Rename from Process.tsx */}
import React from 'react';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We start by understanding your goals, target audience, and project requirements.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'Our team creates beautiful, functional designs tailored to your brand.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'We build your solution using the latest technologies and best practices.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'After thorough testing, we deploy your project and provide ongoing support.',
  },
];

export default function OurProcess() {
  return (
    <section id="process" className="py-20 bg-custom-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center hero-title">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-2">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-4"></div>
          <p className="mt-4 text-xl text-gray-600">
            How we turn your ideas into reality
          </p>
        </div>

        <div className="mt-20">
          <div className="relative">
            <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center hover:bg-gray-100 p-6 rounded-lg transition-all duration-300 shadow-md group"
                  >
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#8c52ff] text-white mb-4 transform transition-transform duration-300 group-hover:scale-110 process-icon">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}