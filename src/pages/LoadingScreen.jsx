import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 300);

    // Show spinner after a short delay
    const spinnerTimer = setTimeout(() => {
      setShowSpinner(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(spinnerTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-100 bg-opacity-90 flex flex-col items-center justify-center transition-all duration-1000"
      style={{
        // backgroundImage: "url('https://res.cloudinary.com/dxscy1ixg/image/upload/v1749640342/Untitled_design_csegf7.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Animated Background Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-70"></div> */}
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-4">
        {/* Logo/Branding */}
        <div className="mb-8">
          {/* <div className="text-4xl font-bold text-white tracking-wider lg:hidden">
            SUHANI'S CREATIONS
          </div> */}
          <img
            src="https://res.cloudinary.com/dxscy1ixg/image/upload/v1749712993/Suhani_s_Creations_dbt5ip.png"
            alt="Suhani's Creations Logo"
            className="h-60 w-auto mb-4" />
        </div>
        
        {/* Progress Bar */}
        {/* <div className="w-full h-2 bg-gray-700 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div> */}
        
        {/* Percentage Text */}
        {/* <div className="text-white text-lg mb-8 font-mono animate-pulse">
          {progress}%
        </div> */}
        
        {/* Spinner */}
        {showSpinner && (
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="animate-ping h-2 w-2 rounded-full bg-blue-400"></div>
            </div>
          </div>
        )}
        
        {/* Loading Text */}
        <div className="mt-6 text-gray-300 text-sm md:text-base">
          <span className="animate-pulse inline-block">
            Loading
            <span className="inline-block ml-1">
              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
            </span>
          </span>
        </div>
      </div>
      
      {/* Footer Note - Optional */}
      <div className="absolute bottom-4 text-gray-500 text-xs animate-pulse">
        Please wait while we prepare your experience
      </div>
    </div>
  );
}