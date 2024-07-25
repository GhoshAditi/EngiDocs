import React, { useState } from 'react';
import Link from 'next/link';

interface SubjectResource {
  name: string;
  pyq: { title: string; url: string }[];
  notes: { title: string; url: string }[];
  video: { title: string; url: string }[];
}

interface SubjectsPageComponentProps {
  stream: string;
  year: string;
  subjects: SubjectResource[];
}

const SubjectsPageComponent: React.FC<SubjectsPageComponentProps> = ({ stream, year, subjects }) => {
  const [selectedResource, setSelectedResource] = useState<{ title: string; url: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResourceClick = (resource: { title: string; url: string }) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
  };

  const handleOpenNormal = () => {
    if (selectedResource) {
      window.open(selectedResource.url, '_blank');
    }
    setIsModalOpen(false);
  };

  const handleOpenTLDR = () => {
    if (selectedResource) {
      window.open(`https://tldr-nice.vercel.app/upload?pdfLink=${encodeURIComponent(selectedResource.url)}`, '_blank');
    }
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-background text-center mb-8">{stream.toUpperCase()} - Year {year} Subjects</h1>
      {subjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <div key={index} className="card glass w-96 shadow-md">
              <figure>
                {subject.video.length > 0 && (
                  <img
                    src={getThumbnailUrl(subject.video[0].url)}
                    alt={subject.name}
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{subject.name}</h2>
                <div className="space-y-2">
                  {subject.pyq.length > 0 && (
                    <ResourceSection title="Previous Year Questions" resources={subject.pyq} onResourceClick={handleResourceClick} />
                  )}
                  {subject.notes.length > 0 && (
                    <ResourceSection title="Notes" resources={subject.notes} onResourceClick={handleResourceClick} />
                  )}
                  {subject.video.length > 0 && (
                    <ResourceSection title="Video Lectures" resources={subject.video} onResourceClick={handleResourceClick} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-gray-600">
          <p>No subjects found for {stream.toUpperCase()} - Year {year}.</p>
          <p>Please check back later or contact the administrator.</p>
          <Link href={`/stream/${stream}`} className="text-blue-500 hover:underline mt-4 inline-block">
            Go back to year selection
          </Link>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Open PDF</h2>
            <p className="mb-4">How would you like to open the PDF &quot;{selectedResource?.title}&quot;? (TL;DR recommended)</p>
            <div className="flex justify-end space-x-2">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-red-400 rounded hover:bg-gray-300">
                Cancel
              </button>
              <button onClick={handleOpenNormal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Open Normally
              </button>
              <button onClick={handleOpenTLDR} className="px-4 py-2  bg-green-500 text-white rounded hover:bg-green-600">
                Open with TLDR(recommended)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ResourceSection: React.FC<{ 
  title: string; 
  resources: { title: string; url: string }[];
  onResourceClick: (resource: { title: string; url: string }) => void;
}> = ({ title, resources, onResourceClick }) => (
  <div>
    <h3 className="font-medium text-lg mb-2">{title}</h3>
    <ul className="list-disc list-inside">
      {resources.map((resource, index) => (
        <li key={index}>
          <button 
            onClick={() => onResourceClick(resource)} 
            className="text-blue-500 hover:underline"
          >
            {resource.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

const getThumbnailUrl = (url: string) => {
  let videoId;

  if (url.includes('youtube.com')) {
    const urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get('v');
  } else if (url.includes('youtu.be')) {
    videoId = url.split('youtu.be/')[1];
  }

  if (videoId) {
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  }

  return 'default_thumbnail.jpg'; // Default thumbnail if videoId is not found
};

export default SubjectsPageComponent;