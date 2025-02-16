import React, { useState } from 'react';
import { Mail, FormInput } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init("zwf-5AKHmYFy2byys");

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        service: formData.service,
        submission_date: formData.date,
        message: formData.message,
        to_email: 'expantradigiserve@gmail.com'
      };

      await emailjs.send(
        'service_r4ctlwa',  // Replace with your EmailJS service ID
        'template_b1ki0ve', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      setFormData({ name: '', email: '', service: '', date: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => { setSubmitStatus({ type: null, message: '' }); }, 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-custom-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Reach out to us</h2>
          <p className="mt-4 text-xl text-gray-600">Let's Bring Ideas to Life</p>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interested In</label>
                <select name="service" id="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required>
                  <option value="">Select a service</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Website Development">Website Development</option>
                  <option value="PPT Creation">PPT Creation</option>
                  <option value="Video Editing">Video Editing</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Thumbnail Creation">Thumbnail Creation</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date of submission</label>
                <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required></textarea>
              </div>
              {submitStatus.message && (
                <div className={`p-4 rounded-md ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>{submitStatus.message}</div>
              )}
              <button type="submit" disabled={isSubmitting} className={`w-full bg-indigo-600 text-white px-6 py-3 rounded-md transition-colors duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-700'}`}>{isSubmitting ? 'Sending...' : 'Send Message'}</button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <span className="ml-4 text-gray-600">expantradigiserve@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FormInput className="h-6 w-6 text-indigo-600" />
                  <a href="https://forms.gle/FEHmj7yn1tLRZa2q6" target="_blank" rel="noopener noreferrer" className="ml-4 text-indigo-600 hover:text-indigo-700 transition-colors duration-300 border-b border-indigo-600">Contact us through form</a>
                </div>
              </div>
            </div>
            <div>
              <img src="https://i.im.ge/2025/02/04/HsjnqP.image.png" alt="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
