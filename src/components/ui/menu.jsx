import React from "react";

export const Menu = ({ children }) => <div className="space-y-2">{children}</div>;

export const MenuItem = ({ children }) => (
  <div className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
    {children}
  </div>
);