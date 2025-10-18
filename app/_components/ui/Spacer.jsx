import React from "react";
import { cn } from "@/lib/utils";

const Spacer = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("shrink w-[20rem] flex items-center gap-0", className)}
      {...props}
    >
      <div className="w-[1px] h-[.75rem] bg-primary"></div>
      <div className="flex-1 h-[1px] bg-gray-light/50"></div>
      <div className="w-[1px] h-[.75rem] bg-primary"></div>
      {children}
    </div>
  );
};

export default Spacer;
