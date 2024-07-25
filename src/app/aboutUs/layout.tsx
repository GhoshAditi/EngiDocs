import React from 'react';
import Link from 'next/link';

const AboutUsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default AboutUsLayout;
