import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-xs text-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="text-gray-400 mb-6">This page is under construction.<br/>Please check back soon.</p>
        <div className="w-16 h-16 mx-auto mb-2 animate-pulse">
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-orange-500">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Login;