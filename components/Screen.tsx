import React from "react";

export const Screen: React.FC = ({ children }) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-red-100 bg-fixed select-none">
      {children}
    </main>
  );
};
