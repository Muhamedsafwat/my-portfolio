import React from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-gray-950 pt-32 min-h-screen flex justify-center items-center flex-col text-gray-50">
      {children}
    </div>
  );
};

export default layout;
