import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Construction Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-yellow-500 rounded-full shadow-2xl animate-bounce">
            <svg
              className="w-16 h-16 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Under
          <span className="text-yellow-400 block">Construction</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          We're working hard to bring you something amazing. 
          Stay tuned for updates!
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full rounded-full animate-pulse" style={{width: '65%'}}></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">65% Complete</p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-4">Get Notified</h3>
          <p className="text-gray-300 text-sm mb-4">
            Want to be the first to know when we launch?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
            <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-transparent">
              Notify Me
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-400 text-sm">
          <p>&copy; 2025 AcePro. Coming Soon.</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full animate-ping opacity-50"></div>
    </div>
  );
};

export default UnderConstruction;