import React from 'react';

export interface ContentItem {
  title: string;
  type: string;
  status: 'registered' | 'draft' | 'published';
  date: string;
  author?: string;
}

interface ContentTableProps {
  items: ContentItem[];
}

const ContentTable = ({ items }: ContentTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-3">Title</th>
            <th className="pb-3">Type</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Date</th>
            {items.some(item => item.author) && <th className="pb-3">Author</th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{item.title}</td>
              <td className="py-2">{item.type}</td>
              <td className="py-2">{item.status}</td>
              <td className="py-2">{item.date}</td>
              {item.author && <td className="py-2">{item.author}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentTable;