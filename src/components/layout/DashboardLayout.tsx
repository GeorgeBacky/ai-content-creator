'use client';
import React from 'react';
import { 
  Layout, 
  Home, 
  PenTool, 
  Shield, 
  BarChart2, 
  Settings,
  LogOut 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: PenTool, label: 'Create', path: '/dashboard/create' },
    { icon: Shield, label: 'Register', path: '/auth/register' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen fixed border-r border-gray-200">
          <div className="flex items-center p-4">
            <Layout className="w-8 h-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold">CreativeAI</span>
          </div>
          
          <nav className="mt-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className="w-full flex items-center px-4 py-3 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              >
                <item.icon className="w-5 h-5" />
                <span className="ml-3">{item.label}</span>
              </button>
            ))}
            
            <button className="w-full flex items-center px-4 py-3 text-red-600 hover:bg-red-50 mt-auto">
              <LogOut className="w-5 h-5" />
              <span className="ml-3">Logout</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
