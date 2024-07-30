import React from "react";
import { motion } from 'framer-motion'

const Terminal = ({
  header,
  children,
  delay,
  highlight
}: {
  header?: string;
  delay?: number;
  highlight?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={` hover:bg-slate-100 overflow-hidden rounded-xl border-2 border-catppuccinSurface0 ${highlight === true ?? 'hover:border-catppuccinPeach'}`}>
      <div
        className="w-full resize-y text-catppuccinSubtext1 bg-catppuccinMantle min-h-32 group"
      >
        {header && (
          <div
            className="flex overflow-hidden justify-between items-center p-4 bg-catppuccinMantle">
            <span></span>
            <span className="font-['monospace'] opacity-80 group-hover:opacity-100 text-sm truncate max-w-full">
              {header}
            </span>
            <div
              className="flex space-x-2">
              <span className="rounded-full b bg-catppuccinPeach size-4"></span>
              <span className="rounded-full b bg-catppuccinGreen size-4"></span>
              <span className="rounded-full b bg-catppuccinRed size-4"></span>
            </div>
          </div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay || 0 }} className="">

          {children}

        </motion.div>
      </div>
    </div>
  );
};

export default Terminal;
