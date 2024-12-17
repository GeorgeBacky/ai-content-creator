import React from 'react';

interface ContentItem {
  title: string;
  type: string;
  status: 'registered' | 'draft';
  date: string;
}

interface ContentTableProps {
  items: ContentItem[];
}

const ContentTable: React.FC<ContentTableProps> = ({ items }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-3">Title</th>
            <th className="pb-3">Type</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b last:border-0">
              <td className="py-4">{item.title}</td>
              <td className="py-4 capitalize">{item.type}</td>
              <td className="py-4">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  item.status === 'registered' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="py-4">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;