"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import ColorChangeCards from '@/components/Stream/Year/year'; // Adjust the import path as needed

const YearPage: React.FC = () => {
    const params = useParams();
    const stream = params.streamName as string;

    if (!stream) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-background">
            <h1 className="text-4xl font-bold text-center py-8">{stream.toUpperCase()} Stream</h1>
            <ColorChangeCards stream={stream} />
        </div>
    );
};

export default YearPage;