import { cn } from "@/lib/utils";

const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`,
      }}
      className={cn(
        "max-w-md text-gray/70 transition-colors duration-150",
        // Shine effect
        "animate-shiny-text [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shine gradient
        "bg-gradient-to-r from-transparent via-secondary via-50% to-transparent border border-border hover:border-secondary/30 rounded-full px-4 py-px relative overflow-hidden group",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute left-4 right-4 bottom-[-1px] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent group-hover:scale-x-110"></div>
    </span>
  );
};

export default AnimatedShinyText;
