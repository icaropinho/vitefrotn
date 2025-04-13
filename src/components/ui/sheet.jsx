import React, { useState } from "react";

export const Sheet = ({ children }) => <>{children}</>;

export const SheetTrigger = ({ asChild, children }) => <>{children}</>;

export const SheetContent = ({ side = "right", className = "", children }) => {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className={\`fixed top-0 \${side}-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg p-4 \${className}\`}>
      {children}
    </div>
  );
};