import Tilt from "react-parallax-tilt";

export function StackCard({ children, technology }) {
  return (
    <Tilt>
      <div>
        <div className="p-5 border-white/30 border-2 rounded-none flex gap-3 items-center hover:bg-primary hover:text-primary-content hover:border-primary transition-all duration-300">
          {children}
          <span className="text-lg font-bold">{technology}</span>
        </div>
      </div>
    </Tilt>
  );
}
