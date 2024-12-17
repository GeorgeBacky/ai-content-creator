'use client';
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ContentTypeSelector from '@/components/create/ContentTypeSelector';
import { Wand2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Create = () => {
  const [contentType, setContentType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGenerating(false);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Create Content</h1>

        <ContentTypeSelector 
          selected={contentType} 
          onSelect={setContentType} 
        />

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Enter Your Prompt</h2>
          <div className="space-y-4">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`Describe the ${contentType} you want to create...`}
            />
            <Button
              onClick={handleGenerate}
              disabled={!prompt || generating}
              className="w-full flex items-center justify-center"
            >
              <Wand2 className="w-5 h-5 mr-2" />
              {generating ? 'Generating...' : 'Generate'}
            </Button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
            <p className="text-gray-500">Generated content will appear here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Create;