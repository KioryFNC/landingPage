import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white flex flex-col items-center justify-center gap-4 p-10">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-lg italic">
        Tailwind is working if this looks styled 🎉
      </p>
      <button className="mt-4 px-6 py-2 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-purple-100 transition">
        Test Button
      </button>
    </div>
  );
};
