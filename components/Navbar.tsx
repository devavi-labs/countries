import React from "react";

interface NavbarProps {
  title: string;
  img?: string;
}

export const Navbar: React.FC<NavbarProps> = function ({ title, img }) {
  return (
    <nav className="bg-blue-600 flex items-center justify-center gap-2 py-2 fixed h-12 w-full z-10">
      {img && (
        <img
          src={img}
          alt={title}
          title={title}
          className={`h-3/4 animate-slide-up`}
        />
      )}
      <h1 className="text-xl font-bold text-white opacity-80">{title}</h1>
    </nav>
  );
};
