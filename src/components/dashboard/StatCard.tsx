import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon: Icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;