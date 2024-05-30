import React from "react";





const Window = ({header, children}: { header?: string, children: React.ReactNode }) => {
  return (
    <div className="overflow-hidden w-full rounded-xl border-2 border-gray-800 shadow-xl duration-75 ease-in transtion-all text-catppuccinSubtext1 bg-catppuccinMantle min-h-32 hover:border-catppuccinPeach group">
      {header &&
        
        <div className="flex overflow-hidden justify-between items-center p-4 bg-catppuccinMantle">
        <span></span>
        <span className="font-['monospace'] opacity-80 group-hover:opacity-100 text-sm truncate max-w-full">{header}</span>
        <span className="flex space-x-2">
          <span className="rounded-full b bg-catppuccinPeach size-4"></span>
          <span className="rounded-full b bg-catppuccinGreen size-4"></span>
          <span className="rounded-full b bg-catppuccinRed size-4"></span>
        </span>
      </div>}
      <div className="">{children}</div>
    </div>
  );
};

export default Window;
