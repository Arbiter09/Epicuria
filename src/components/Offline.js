import React from "react";

const Offline = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-gray-300">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.18l6.364 6.364a9 9 0 010 12.728L12 21.82l-6.364-6.364a9 9 0 010-12.728L12 2.18z"
            />
          </svg>
        </div>
        <h1 className="text-xl font-light text-gray-600">You're offline</h1>
        <p className="text-sm text-gray-400 mt-2">
          Check your connection and try again
        </p>
      </div>
    </div>
  );
};

export default Offline;
