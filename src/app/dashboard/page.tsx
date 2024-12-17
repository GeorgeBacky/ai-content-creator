import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import ContentTable from '@/components/dashboard/ContentTable';
import { BarChart, FileText, Shield, Zap } from 'lucide-react';
import { ContentItem } from '@/components/dashboard/ContentTable';

const Dashboard = () => {
  const stats = [
    { label: 'Content Created', value: '24', icon: FileText, color: 'bg-blue-500' },
    { label: 'Items Registered', value: '18', icon: Shield, color: 'bg-green-500' },
    { label: 'AI Generations', value: '156', icon: Zap, color: 'bg-purple-500' },
    { label: 'Total Views', value: '2.4K', icon: BarChart, color: 'bg-orange-500' },
  ];

  const recentContent: ContentItem[] = [
    { title: 'Marketing Copy v2', type: 'text', status: 'registered', date: '2024-03-10' },
    { title: 'Product Banner', type: 'image', status: 'draft', date: '2024-03-09' },
    { title: 'Blog Post', type: 'text', status: 'registered', date: '2024-03-08' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Content</h2>
          <ContentTable items={recentContent} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;