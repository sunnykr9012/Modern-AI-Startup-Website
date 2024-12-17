import React, { useState } from 'react';
import { Calendar, Clock, MessageSquare, Send } from 'lucide-react';
import GradientText from '../shared/GradientText';

interface ConsultationFormData {
  name: string;
  email: string;
  company: string;
  date: string;
  time: string;
  message: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 bg-gradient-to-br from-purple-600 to-blue-500 text-white">
          <h3 className="text-2xl font-bold mb-6">Why Schedule a Consultation?</h3>
          <ul className="space-y-4">
            {[
              'Personalized AI Strategy Planning',
              'Expert Technical Guidance',
              'Custom Solution Architecture',
              'ROI Analysis & Projections',
              'Implementation Roadmap',
              'Risk Assessment & Mitigation'
            ].map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-purple-200" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-lg">
            <p className="text-sm text-purple-100">
              "Our consultation helped us identify the perfect AI solution for our needs. Highly recommended!"
              <br />
              <span className="mt-2 block font-semibold">- Sunny - Owner - AI Start</span>
            </p>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6">
            <GradientText>Schedule Your Free Consultation</GradientText>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="w-4 h-4 inline-block mr-1" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Clock className="w-4 h-4 inline-block mr-1" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}