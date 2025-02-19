import React from "react";
import { Loader2 } from "lucide-react";

const Loader: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => {
  return (
    <div className={`flex justify-center items-center h-screen w-full ${className}`}>
      <Loader2 className="animate-spin" size={size} />
    </div>
  );
};

export default Loader;
