import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';

interface FundManagersProps {
  schemeCode: number;
}

export default function FundManagers({ schemeCode }: FundManagersProps) {
  const managers = [
    {
      name: "Prashant Jain",
      experience: "25+ years",
      qualification: "B.Tech (IIT), PGDM (IIM)",
      email: "prashant.jain@example.com",
      phone: "+91 98765 43210"
    },
    {
      name: "Sohini Andani",
      experience: "20+ years",
      qualification: "CA, CFA",
      email: "sohini.andani@example.com",
      phone: "+91 98765 43211"
    }
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Users className="h-5 w-5 text-blue-500 mr-2" />
        Fund Managers
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {managers.map((manager) => (
          <div key={manager.name} className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900">{manager.name}</h4>
            <p className="text-sm text-gray-600 mt-1">Experience: {manager.experience}</p>
            <p className="text-sm text-gray-600">Qualification: {manager.qualification}</p>
            
            <div className="mt-3 space-y-2">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 text-blue-500 mr-2" />
                <span>{manager.email}</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 text-blue-500 mr-2" />
                <span>{manager.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}