import React, { useState } from 'react';
import { Mail, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-gray-50 rounded-3xl shadow-lg overflow-hidden">
        
        {/* Left Info Panel */}
        <div className="bg-yellow-500 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Let’s Talk!</h2>
          <p className="mb-8 text-lg">We’d love to hear from you. Fill out the form and we’ll get back to you shortly.</p>
          <ul className="space-y-4 text-sm">
            <li>📍 Islamabad, Pakistan</li>
            <li>📧 naqibhangu1@gmail.com</li>
            <li>📞 +92 3215525170</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Form</h3>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              ✅ Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium mb-1 text-gray-700 flex items-center gap-2">
                <User size={18} /> Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700 flex items-center gap-2">
                <Mail size={18} /> Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-medium mb-1 text-gray-700 flex items-center gap-2">
                <MessageCircle size={18} /> Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
