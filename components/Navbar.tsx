export const Navbar = function ({ title }) {
  return (
    <nav className="bg-blue-600 flex items-center justify-center py-2 fixed h-12 w-full z-10">
      <h1 className="text-xl font-bold text-white opacity-80">{title}</h1>
    </nav>
  );
};
