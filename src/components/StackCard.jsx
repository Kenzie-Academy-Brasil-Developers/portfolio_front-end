import Tilt from "react-parallax-tilt";

export function StackCard({ children, technology }) {
  return (
    <Tilt>
      <div>
        <div className="tooltip tooltip-bottom  pb-3" data-tip={technology}>
          <div className="p-5 w-40 h-40 border-white/30 border-2 rounded-none flex flex-col justify-center gap-3 items-center hover:bg-primary hover:text-primary-content hover:border-primary transition-all duration-300">
            {children}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
