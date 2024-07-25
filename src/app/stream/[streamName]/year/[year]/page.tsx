"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import SubjectsPageComponent from '@/components/Stream/Year/Subject/subject';
import { getSubjects } from '@/utils/subjectDetails';
import TLDRButton from '@/components/Stream/Year/Subject/tldrbutton';
const YearSubjectsPage: React.FC = () => {
    const params = useParams();
    const stream = params.streamName as string;
    const year = params.year as string;

    const subjects = getSubjects(stream, year);
    console.log('Stream:', stream);
console.log('Year:', year);
console.log('Subjects:', subjects);
    
    return (
    <><SubjectsPageComponent stream={stream} year={year} subjects={subjects} /><TLDRButton/></>);
};

export default YearSubjectsPage;