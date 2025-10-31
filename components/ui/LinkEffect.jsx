import { cn } from "@/lib/utils";
import React from "react";

export default function LinkEffect({
  text,
  noicon,
  textClass,
  hoverColor,
  icon,
  iconClass,
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-[0.3em] text-inherit font-[inherit] leading-[1.5] whitespace-nowrap relative group py-1",
        textClass
      )}
    >
       {!noicon && (
        <div className={cn("relative flex h-full overflow-hidden", iconClass)}>
          <span className="*:size-[1.1em] flex flex-1 p-[0.3em] h-full transition-transform duration-500 ease group-hover:-translate-y-full group-hover:translate-x-full ">
            {icon}
          </span>
          <span
            className={cn(
              "*:size-[1.1em] p-[0.3em] absolute top-0 left-0 translate-x-[-100%] translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 ease",
              hoverColor
            )}
          >
           {icon}
          </span>
        </div>
      )}
      <div className="mt-[0.25em] relative flex overflow-hidden">
        <span className="duration-500 group-hover:-translate-y-full">
          {text}
        </span>
        <span
          className={cn(
            "absolute top-0 left-0 translate-y-full transition-transform duration-500 ease group-hover:translate-y-0",
            hoverColor
          )}
        >
          {text}
        </span>
      </div>
     
    </div>
  );
}