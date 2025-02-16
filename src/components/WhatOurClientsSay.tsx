import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Efficient, Innovative, and Professional! I trusted this service with my website development, and the result was outstanding. They brought my vision to life with a sleek, user-friendly design that perfectly reflects my brand. The team delivered on time and exceeded my expectations. Highly recommend for top-tier web development!',
    rating: 4.8,
  },
  {
    quote: 'Creative, Eye-Catching, and Professional! I needed a thumbnail for my video, and this service delivered beyond my expectations. The design was bold, engaging, and perfectly matched my content. It grabbed attention right away and boosted my views. Highly recommend for anyone looking for standout thumbnail designs!',
    rating: 4.7,
  },
  {
    quote: 'Professional, Creative, and Timely! I approached this service for a corporate presentation, and I was thoroughly impressed with the result. They took my ideas and transformed them into a visually stunning and impactful presentation that communicated my message perfectly. A fantastic service for anyone seeking quality and creativity!',
    rating: 4.9,
  },
];

export default function WhatOurClientsSay() {
  return (
    <section id="testimonials" className="py-20 bg-custom-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl p-8 shadow-md"
            >
              <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1">
                <p className="text-lg text-gray-600">{testimonial.quote}</p>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
