import React from 'react';
import { Code } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-custom-bg shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16">
          <div className="flex items-center">
            <span className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Expantra</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}