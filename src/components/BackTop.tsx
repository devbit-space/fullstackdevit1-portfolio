"use client";

import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-10 right-10 z-[9999]">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='bg-[#5a5a5aa9] hover:bg-[#5a5a5a] hover:border-white transition-all duration-300 p-4 rounded-full border border-transparent'>
          <FaArrowUp color='white' />
        </button>
      </div>
    )
  );
};

export default BackTop;
