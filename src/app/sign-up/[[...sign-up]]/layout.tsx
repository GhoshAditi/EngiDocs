import React from 'react';
import Link from 'next/link';

const SignUpLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='z-50 bg-background mb-[45rem]'>
      <main>{children}</main>
    </div>
  );
};

export default SignUpLayout;
