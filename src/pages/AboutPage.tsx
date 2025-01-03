import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'CEO & Founder',
    email: 'john.smith@markettracker.com',
    phone: '+91 98765 43210'
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Investment Officer',
    email: 'sarah.johnson@markettracker.com',
    phone: '+91 98765 43211'
  },
  {
    name: 'Raj Patel',
    role: 'Head of Research',
    email: 'raj.patel@markettracker.com',
    phone: '+91 98765 43212'
  }
];

const authorizedPersons = [
  {
    name: 'Amit Kumar',
    designation: 'Senior Financial Advisor',
    sebiRegNo: 'INH000001234',
    contact: '+91 98765 43213'
  },
  {
    name: 'Priya Sharma',
    designation: 'Compliance Officer',
    sebiRegNo: 'INH000001235',
    contact: '+91 98765 43214'
  },
  {
    name: 'Michael Chen',
    designation: 'Risk Management Officer',
    sebiRegNo: 'INH000001236',
    contact: '+91 98765 43215'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Company Overview */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Market Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading financial technology company dedicated to providing real-time market data
            and advanced analytics tools to help investors make informed decisions.
          </p>
        </div>

        {/* Key Team Members */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="h-6 w-6 mr-2" />
            Key Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authorized Persons */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="h-6 w-6 mr-2" />
            Authorized Persons
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SEBI Reg. No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {authorizedPersons.map((person) => (
                  <tr key={person.sebiRegNo}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.designation}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.sebiRegNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Office Location */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <MapPin className="h-6 w-6 mr-2" />
            Our Office
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bengaluru Office</h3>
                <p className="text-gray-600 mb-4">
                  Market Tracker Technologies<br />
                  #123, Brigade Road<br />
                  Bengaluru, Karnataka 560001<br />
                  India
                </p>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <span>+91 80 4567 8900</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    <span>contact@markettracker.com</span>
                  </div>
                </div>
              </div>
              <div className="h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0168498121544!2d77.60567661482283!3d12.971598990855802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679c2c3b92f%3A0x4c80d8d5054242!2sBrigade%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645510615000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}