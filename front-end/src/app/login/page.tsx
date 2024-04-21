'use client';
import React from 'react';
import Image from 'next/image';

const Login = () => {
  return (
    <div>
      <div className="flex h-full">
        <div className=''>
          <Image
            src="/images/mmswe-login.svg"
            objectFit={'cover'}
            width={500}
            height={500}
            alt="mmswe login image"
          />
        </div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default Login;
