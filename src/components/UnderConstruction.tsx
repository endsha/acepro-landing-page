import React from "react";
import aceproLogo from "../assets/acepro_logo.png";

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-[#e5000c] relative overflow-hidden">
      {/* Blur Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-white/20 to-[#e5000c]/20 backdrop-blur-xl"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#e5000c]/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#e5000c]/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <img src={aceproLogo} alt="AcePro Logo" className="h-16 w-auto mx-auto" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight m-0">
            UNDER
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-[#e5000c] mb-4 leading-tight">
            CONSTRUCTION
          </h1>

          <h4 className="text-black mb-8">SITE NEARLY READY</h4>

          {/* Progress Bar */}
          <div className="h-[32px] w-full max-w-lg mx-auto mb-8">
            <div className="w-full h-full bg-gray-200/80 rounded-lg overflow-hidden border border-gray-300 backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-[#e5000c] to-red-500"
                style={{ width: "70%" }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-1">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Notify Me Button */}
          {/* <button className="bg-gradient-to-r from-[#e5000c] to-red-500 hover:from-red-700 hover:to-[#e5000c] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 mb-8 shadow-lg shadow-red-500/25 backdrop-blur-sm border border-red-400/30">
            Notify Me
          </button> */}

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto leading-relaxed">
            We're working hard to bring you something amazing. Stay tuned for
            updates!
          </p>

          {/* Footer */}
          <div className="fixed bottom-0 left-0 right-0 text-gray-700 text-sm text-center py-4 backdrop-blur-md">
            <p>&copy; 2025 AcePro. Coming Soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
