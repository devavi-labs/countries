import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Card = function ({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      tabIndex={0}
      className="w-full max-w-sm py-4 px-8 bg-blue-200 rounded-xl flex flex-col items-center gap-2 shadow-md hover:bg-blue-300 hover:shadow-xl transform hover:scale-105  focus:outline-none focus:bg-blue-300 focus:shadow-2xl"
      {...props}
    >
      {children}
    </div>
  );
};
