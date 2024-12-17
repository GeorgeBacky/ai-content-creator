
import React from 'react';
import { FileText, Image } from 'lucide-react';

interface ContentTypeSelectorProps {
  selected: 'text' | 'image';
  onSelect: (type: 'text' | 'image') => void;
}

const ContentTypeSelector: React.FC<ContentTypeSelectorProps> = ({ selected, onSelect }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Choose Content Type</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onSelect('text')}
          className={`p-4 rounded-lg border-2 flex items-center ${
            selected === 'text' 
              ? 'border-purple-600 bg-purple-50' 
              : 'border-gray-200'
          }`}
        >
          <FileText className="w-6 h-6 mr-2" />
          <span>Text</span>
        </button>
        <button
          onClick={() => onSelect('image')}
          className={`p-4 rounded-lg border-2 flex items-center ${
            selected === 'image' 
              ? 'border-purple-600 bg-purple-50' 
              : 'border-gray-200'
          }`}
        >
          <Image className="w-6 h-6 mr-2" />
          <span>Image</span>
        </button>
      </div>
    </div>
  );
};

export default ContentTypeSelector;