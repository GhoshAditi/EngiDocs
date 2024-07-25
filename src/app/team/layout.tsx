import React from 'react';
import Link from 'next/link';

const TeamLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default TeamLayout;
